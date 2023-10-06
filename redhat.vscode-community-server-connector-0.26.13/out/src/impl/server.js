/*-----------------------------------------------------------------------------------------------
 *  Copyright (c) Red Hat, Inc. All rights reserved.
 *  Licensed under the EPL v2.0 License. See LICENSE file in the project root for license information.
 *-----------------------------------------------------------------------------------------------*/
'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FelixRspLauncher = void 0;
const cp = require("child_process");
const path = require("path");
const portfinder = require("portfinder");
const requirements = require("./requirements");
const vscode = require("vscode");
const vscode_server_connector_api_1 = require("vscode-server-connector-api");
const waitOn = require("wait-on");
const tcpPort = require("tcp-port-used");
const fs = require("fs-extra");
const os_1 = require("os");
class FelixRspLauncher {
    constructor(options) {
        this.options = options;
    }
    start(stdoutCallback, stderrCallback, api) {
        return __awaiter(this, void 0, void 0, function* () {
            let requirementResult = undefined;
            try {
                requirementResult = yield requirements.resolveRequirements(this.options.minimumSupportedJava);
            }
            catch (err) {
                return Promise.reject(err);
            }
            if (!requirementResult) {
                return Promise.reject("Unable to find java_home and java version, reason unknown");
            }
            if (requirementResult.unexpectedError) {
                return Promise.reject(requirementResult.unexpectedError);
            }
            if (requirementResult.rejection) {
                const rejection = requirementResult.rejection;
                this.displayRequirementRejection(rejection);
                return;
            }
            this.javaHome = requirementResult.data.java_home;
            const options = {
                port: this.options.minPort,
                stopPort: this.options.maxPort
            };
            const serverPort = yield portfinder.getPortPromise(options);
            const hps = yield this.startServerAndWaitOnPort(serverPort, stdoutCallback, stderrCallback, api);
            this.port = hps.port;
            this.spawned = hps.spawned;
            if (!this.port) {
                return Promise.reject('Could not allocate a port for the rsp server to listen on.');
            }
            else {
                return Promise.resolve({
                    port: this.port,
                    host: 'localhost',
                    spawned: this.spawned
                });
            }
        });
    }
    getLockFile() {
        const lockFile = path.resolve(os_1.homedir(), '.rsp', this.options.rspId, '.lock');
        return lockFile;
    }
    lockFileExists(lockFile) {
        if (fs.existsSync(lockFile)) {
            return true;
        }
        return false;
    }
    getLockFilePort(lockFile) {
        if (fs.existsSync(lockFile)) {
            const port = fs.readFileSync(lockFile, 'utf8');
            return port;
        }
        return null;
    }
    lockFilePortInUse(lockFile) {
        return __awaiter(this, void 0, void 0, function* () {
            if (fs.existsSync(lockFile)) {
                const port = fs.readFileSync(lockFile, 'utf8');
                const isBusy = yield tcpPort.check(+port);
                return isBusy;
            }
            return false;
        });
    }
    getServerLocation(process) {
        return process.env.RSP_SERVER_LOCATION ?
            process.env.RSP_SERVER_LOCATION : path.resolve(__dirname, '..', '..', '..', 'server');
    }
    startServer(location, port, javaHome, stdoutCallback, stderrCallback, api) {
        const felix = path.join(location, 'bin', 'felix.jar');
        const java = path.join(javaHome, 'bin', 'java');
        // Debuggable version
        // const process = cp.spawn(java, [`-Xdebug`, `-Xrunjdwp:transport=dt_socket,server=y,address=8001,suspend=y`, `-Drsp.server.port=${port}`, '-jar', felix], { cwd: location });
        // Production version
        this.cpProcess = cp.spawn(java, [`-Drsp.server.port=${port}`, `-Dorg.jboss.tools.rsp.id=${this.options.rspId}`, '-Dlogback.configurationFile=./conf/logback.xml', '-jar', felix], { cwd: location, env: process.env });
        if (this.cpProcess) {
            if (this.cpProcess.stdout)
                this.cpProcess.stdout.on('data', stdoutCallback);
            if (this.cpProcess.stderr)
                this.cpProcess.stderr.on('data', stderrCallback);
            this.cpProcess.on('close', () => {
                if (api != null) {
                    api.updateRSPStateChanged(vscode_server_connector_api_1.ServerState.STOPPED);
                }
            });
            this.cpProcess.on('exit', () => {
                if (api != null) {
                    api.updateRSPStateChanged(vscode_server_connector_api_1.ServerState.STOPPED);
                }
            });
        }
    }
    terminate() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.cpProcess) {
                    this.cpProcess.removeAllListeners();
                    this.cpProcess.kill();
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
    startServerAndWaitOnPort(serverPort, stdoutCallback, stderrCallback, api) {
        return __awaiter(this, void 0, void 0, function* () {
            let localPort = serverPort;
            let localSpawned = false;
            const lockFile = this.getLockFile();
            const lockFileExist = this.lockFileExists(lockFile);
            const portInUse = yield this.lockFilePortInUse(lockFile);
            if (lockFileExist && portInUse) {
                const p = this.getLockFilePort(lockFile);
                if (p) {
                    localPort = +p;
                }
                localSpawned = false;
            }
            else {
                if (lockFileExist && !portInUse) {
                    fs.unlinkSync(lockFile);
                }
                localPort = serverPort;
                const serverLocation = this.getServerLocation(process);
                this.startServer(serverLocation, localPort, this.javaHome, stdoutCallback, stderrCallback, api);
                localSpawned = true;
            }
            const opts = {
                resources: [`tcp:localhost:${localPort}`],
                delay: this.options.connectionDelay,
                interval: this.options.connectionPollFrequency,
                simultaneous: 1 // limit connection attempts to one per resource at a time
            };
            yield waitOn(opts);
            const ret = {
                host: 'localhost',
                port: localPort,
                spawned: localSpawned,
            };
            return ret;
        });
    }
    displayRequirementRejection(error) {
        if (error) {
            let msg = error.message;
            let buttonArray = error.btns || [];
            const buttonLabels = buttonArray.map(btn => btn.label);
            // show error
            vscode.window.showErrorMessage(msg, ...buttonLabels)
                .then(selection => {
                const btnSelected = buttonArray.find(btn => btn.label === selection);
                if (btnSelected) {
                    if (btnSelected.openUrl) {
                        vscode.commands.executeCommand('vscode.open', btnSelected.openUrl);
                    }
                    else {
                        vscode.window.showInformationMessage(`To configure Java for Server Connector Extensions add "rsp-ui.rsp.java.home" property to your settings file
                        (ex. "rsp-ui.rsp.java.home": "/usr/local/java/jdk-${this.options.minimumSupportedJava}.0.1").`);
                        vscode.commands.executeCommand('workbench.action.openSettingsJson');
                    }
                }
            });
        }
    }
}
exports.FelixRspLauncher = FelixRspLauncher;
//# sourceMappingURL=server.js.map