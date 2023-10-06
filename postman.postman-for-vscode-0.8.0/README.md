# The Postman VS Code extension

> This extension is currently in its beta phase. We appreciate your feedback and patience as we fine-tune its capabilities.

The Postman VS Code extension enables you to develop and test your APIs in Postman directly from [Visual Studio Code](https://code.visualstudio.com/).

![Send HTTP requests from Collection](https://st-ar.cdn.postman.com/release-notes/vs-code/overview/req-in-collection-2507.gif)

## Signing in to Postman

> **[The Postman VS Code extension is available on Free, Basic, and Professional plans.](https://www.postman.com/pricing/)**

Sign in to Postman, and select a team to access workspaces in the team. When you select a workspace, you'll be able to see the request history for that workspace in the sidebar. You must sign in to Postman to use the VS Code extension.

1. Open the VS Code extension.
1. Select **Sign In** in the sidebar. The extension will open a new screen that directs you to sign in from your browser.
1. In your browser, select a Postman team then sign in to Postman. After you sign in, you can close the browser tab and return to the extension.

To learn more about signing in to Postman, see [Postman's documentation](https://learning.postman.com/docs/getting-started/postman-account/#signing-in-to-postman).

If you don't have a Postman account, create an account to sign in to use the VS Code extension:

1. Open the VS Code extension.
1. Select **Create Account** in the sidebar. The extension will open a new screen that directs you to create an account from your browser.
1. In your browser, enter your information then select **Create free account**.

To learn more about signing up for Postman, see [Postman's documentation](https://learning.postman.com/docs/getting-started/postman-account/#signing-up-for-a-postman-account).

## Sending requests

You can create and send HTTP requests.

![Send untitled HTTP requests](https://st-ar.cdn.postman.com/release-notes/vs-code/overview/new-http-request-2507.gif)

1. Select a workspace from the workspace dropdown menu in the sidebar.

    > You can also create a new workspace from the VS Code extension.

1. Select the request dropdown menu in the sidebar, then select **HTTP**.

    > If you previously selected **HTTP** from the request dropdown menu, you can create another HTTP request by selecting **New HTTP Request** in the sidebar.

1. Specify the details you need for your request.
1. Select **Send**.

> Requests sent in the VS Code extension appear in your workspace's request history in both the extension and the Postman app.

To learn more about creating and sending HTTP requests, see [Postman's documentation](https://learning.postman.com/docs/sending-requests/requests/).

> You can also use the `Postman: Create a new HTTP Request` command from the [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) to send a request.

### Sending multiprotocol requests

You can create and send raw WebSocket and gRPC requests.

1. When you create a request, select the request dropdown menu first, and select **WebSocket** or **gRPC** instead of **HTTP**.

![Send WebSocket requests](https://st-ar.cdn.postman.com/release-notes/vs-code/overview/ws-request-2507.gif)

1. For WebSocket:

    1. Enter the WebSocket server URL. A WebSocket URL begins with `ws://` or `wss://`.
    1. Select **Connect**.
    1. To disconnect your WebSocket request's connection, select **Disconnect**.

![Send gRPC requests](https://st-ar.cdn.postman.com/release-notes/vs-code/overview/grpc-request-2507.gif)

1. For gRPC:

    1. Enter a URL into **Server URL**.
    1. Select the **Method selection** dropdown to select the method you want to invoke.
    1. Configure a [service definition](https://learning.postman.com/docs/sending-requests/grpc/using-service-definition/).
    1. Select **Invoke**.

To learn more about creating and sending WebSocket requests, see [Postman's documentation](https://learning.postman.com/docs/sending-requests/websocket/websocket/).

To learn more about creating and sending gRPC requests, see [Postman's documentation](https://learning.postman.com/docs/sending-requests/grpc/grpc-request-interface/).

### Sending requests from your history

You can send requests previously sent in a workspace using the VS Code extension and the Postman app.

![Send requests from history](https://st-ar.cdn.postman.com/release-notes/vs-code/overview/history-request-2507.gif)

1. Select a workspace from the workspace dropdown menu in the sidebar.
1. Select the **History** tab.
1. Select a request from your history, and edit the request if you'd like.
1. Send the request.

## Using collections

You can create new collections to group HTTP requests, and you can manage collections with HTTP requests.

![Create new collection](https://st-ar.cdn.postman.com/release-notes/vs-code/overview/create-new-collection-in-postman-2507.gif)

To create a collection and add an HTTP request to it, do the following:

1. Select a workspace from the workspace dropdown menu in the sidebar.
1. Select the **Collections** tab.
1. To create a collection, select the **+** icon.
1. To add an HTTP request to a collection, select the more actions icon to the right of a collection, then select **Add Request**.

To customize and configure a collection with HTTP requests, do the following:

1. Select a workspace from the workspace dropdown menu in the sidebar.
1. Select the **Collections** tab.
1. Select a collection.
1. Select **Authorization** to [configure authorization details for your collection](https://learning.postman.com/docs/sending-requests/authorization/specifying-authorization-details/).
1. Select **Pre-request Script** to [define a pre-request script for your collection](https://learning.postman.com/docs/writing-scripts/pre-request-scripts/), which will run before requests are sent to the server.
1. Select **Tests** to [define a test script for your collection](https://learning.postman.com/docs/writing-scripts/test-scripts/), which will run after a response is received.
1. Select **Variables** to [define values for collection variables](https://learning.postman.com/docs/sending-requests/variables/) to share across all requests in the collection.

To learn more about using collections, see [Postman's documentation](https://learning.postman.com/docs/collections/using-collections/).

## Managing environments

You can add a set of variables to an environment that you can use in your requests.

![Create new environment](https://st-ar.cdn.postman.com/release-notes/vs-code/overview/create-new-environment-in-postman-2507.gif)

To create an environment and add variables to it, do the following:

1. Select a workspace from the workspace dropdown menu in the sidebar.
1. Select the **Environments** tab.
1. To create an environment, select the **+** icon.
1. [Add variables to the environment.](https://learning.postman.com/docs/sending-requests/managing-environments/#adding-environment-variables)
1. Select **Save**.

To use environment variables in a request, do the following:

1. Select the **Collections** tab.
1. Select a request.
1. [Select an environment from the environment selector](https://learning.postman.com/docs/sending-requests/managing-environments/#selecting-an-active-environment) in the top-right corner.

To learn more about managing environments, see [Postman's documentation](https://learning.postman.com/docs/sending-requests/managing-environments/).


## Using cookies

You can view and edit cookies associated with different domains. You can then use the cookies stored in the cookie jar when sending HTTP requests in Postman.

![Manage cookies](https://st-ar.cdn.postman.com/release-notes/vs-code/overview/request-cookies-2507.gif)

To manage cookies in the VS Code extension, open an HTTP request, then select **Cookies** (below **Send**).

> You can also open the cookie editor with the `Postman: Open cookies editor` command in the [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette).

To learn more about using cookies, see [Postman's documentation](https://learning.postman.com/docs/sending-requests/cookies/).

## Importing with cURL commands

You can use cURL commands to import data and create requests from the data.

![Import requests with cURL commands](https://st-ar.cdn.postman.com/release-notes/vs-code/overview/import-curl-2507.gif)

1. Select a workspace from the workspace dropdown menu in the sidebar.

    > You can also create a new workspace from the VS Code extension.

1. Select the request dropdown menu in the sidebar, then select **Import cURL**.
1. Enter your cURL command into the input field, then press **Enter**. The VS Code extension opens a request in a new tab.

    > To cancel entering a cURL command, press **Escape**.

## Extension shortcuts

* Open the Postman extension - <kbd>Cltr + Win + P</kbd> / <kbd>Cmd + Opt + P</kbd>
* Create a new collection - <kbd>Cltr + R</kbd> <kbd>Cltr + C</kbd> / <kbd>Cmd + R</kbd> <kbd>Cmd + C</kbd>
* Create a new environment - <kbd>Cltr + R</kbd> <kbd>Cltr + E</kbd> / <kbd>Cmd + R</kbd> <kbd>Cmd + E</kbd>
* Open a new request tab - <kbd>Cltr + R</kbd> <kbd>Cltr + N</kbd> / <kbd>Cmd + R</kbd> <kbd>Cmd + N</kbd>

## Sharing feedback

You can create a bug or feature request for the VS Code extension.

1. Select the Report Bug / Share Feedback icon at the top of the sidebar. The extension will open a new screen that directs you to GitHub in your browser.
1. In your browser, select **Get started** to create a bug or feature request.
1. Enter the bug or feature request details, then select **Submit new issue**.

### Viewing the extension log

The extension log displays events related to the VS Code extension.

1. Select the Views and More Actions icon at the top of the sidebar.
1. Select **Open Extension Log**. The extension log will open in a new tab.

### Viewing the version

To view the version of the VS Code extension you're using, do the following:

1. Select the Views and More Actions icon at the top of the sidebar.
1. Select **Version**.
