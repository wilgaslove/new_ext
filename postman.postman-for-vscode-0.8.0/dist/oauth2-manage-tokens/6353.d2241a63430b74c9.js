(self.webpackChunkoauth2_manage_tokens=self.webpackChunkoauth2_manage_tokens||[]).push([[6353],{46353:function(i,e,o){var a;!function(r,n){"use strict";var t="function",s="undefined",b="object",w="string",l="model",d="name",u="type",c="vendor",m="version",p="architecture",h="console",f="mobile",g="tablet",v="smarttv",k="wearable",x="embedded",y="Amazon",_="Apple",T="ASUS",q="BlackBerry",S="Browser",z="Chrome",N="Firefox",A="Google",C="Huawei",E="LG",O="Microsoft",U="Motorola",j="Opera",R="Samsung",M="Sharp",P="Sony",V="Xiaomi",B="Zebra",D="Facebook",I=function(i){for(var e={},o=0;o<i.length;o++)e[i[o].toUpperCase()]=i[o];return e},W=function(i,e){return typeof i===w&&-1!==F(e).indexOf(F(i))},F=function(i){return i.toLowerCase()},G=function(i,e){if(typeof i===w)return i=i.replace(/^\s\s*/,""),typeof e===s?i:i.substring(0,350)},L=function(i,e){for(var o,a,r,s,w,l,d=0;d<e.length&&!w;){var u=e[d],c=e[d+1];for(o=a=0;o<u.length&&!w;)if(w=u[o++].exec(i))for(r=0;r<c.length;r++)l=w[++a],typeof(s=c[r])===b&&s.length>0?2===s.length?typeof s[1]==t?this[s[0]]=s[1].call(this,l):this[s[0]]=s[1]:3===s.length?typeof s[1]!==t||s[1].exec&&s[1].test?this[s[0]]=l?l.replace(s[1],s[2]):n:this[s[0]]=l?s[1].call(this,l,s[2]):n:4===s.length&&(this[s[0]]=l?s[3].call(this,l.replace(s[1],s[2])):n):this[s]=l||n;d+=2}},Z=function(i,e){for(var o in e)if(typeof e[o]===b&&e[o].length>0){for(var a=0;a<e[o].length;a++)if(W(e[o][a],i))return"?"===o?n:o}else if(W(e[o],i))return"?"===o?n:o;return i},H={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},$={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[d,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[m,[d,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[d,m],[/opios[\/ ]+([\w\.]+)/i],[m,[d,j+" Mini"]],[/\bopr\/([\w\.]+)/i],[m,[d,j]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[d,m],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[m,[d,"UC"+S]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[m,[d,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[m,[d,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[d,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[m,[d,"IE"]],[/yabrowser\/([\w\.]+)/i],[m,[d,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[d,/(.+)/,"$1 Secure "+S],m],[/\bfocus\/([\w\.]+)/i],[m,[d,N+" Focus"]],[/\bopt\/([\w\.]+)/i],[m,[d,j+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[m,[d,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[d,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[d,j+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[m,[d,"MIUI "+S]],[/fxios\/([-\w\.]+)/i],[m,[d,N]],[/\bqihu|(qi?ho?o?|360)browser/i],[[d,"360 "+S]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[d,/(.+)/,"$1 "+S],m],[/(comodo_dragon)\/([\w\.]+)/i],[[d,/_/g," "],m],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[d,m],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[d],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[d,D],m],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[d,m],[/\bgsa\/([\w\.]+) .*safari\//i],[m,[d,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[m,[d,z+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[d,z+" WebView"],m],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[m,[d,"Android "+S]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[d,m],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[m,[d,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[m,d],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[d,[m,Z,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[d,m],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[d,"Netscape"],m],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[m,[d,N+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[d,m],[/(cobalt)\/([\w\.]+)/i],[d,[m,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,F]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows (ce|mobile); ppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[p,/ower/,"",F]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,F]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[l,[c,R],[u,g]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[l,[c,R],[u,f]],[/\((ip(?:hone|od)[\w ]*);/i],[l,[c,_],[u,f]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[l,[c,_],[u,g]],[/(macintosh);/i],[l,[c,_]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[l,[c,C],[u,g]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[l,[c,C],[u,f]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[l,/_/g," "],[c,V],[u,f]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[l,/_/g," "],[c,V],[u,g]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[l,[c,"OPPO"],[u,f]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[l,[c,"Vivo"],[u,f]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[l,[c,"Realme"],[u,f]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[l,[c,U],[u,f]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[l,[c,U],[u,g]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[l,[c,E],[u,g]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[l,[c,E],[u,f]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[l,[c,"Lenovo"],[u,g]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[l,/_/g," "],[c,"Nokia"],[u,f]],[/(pixel c)\b/i],[l,[c,A],[u,g]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[l,[c,A],[u,f]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[l,[c,P],[u,f]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[l,"Xperia Tablet"],[c,P],[u,g]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[l,[c,"OnePlus"],[u,f]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[l,[c,y],[u,g]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[l,/(.+)/g,"Fire Phone $1"],[c,y],[u,f]],[/(playbook);[-\w\),; ]+(rim)/i],[l,c,[u,g]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[l,[c,q],[u,f]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[l,[c,T],[u,g]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[l,[c,T],[u,f]],[/(nexus 9)/i],[l,[c,"HTC"],[u,g]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],[c,[l,/_/g," "],[u,f]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[l,[c,"Acer"],[u,g]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[l,[c,"Meizu"],[u,f]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[l,[c,M],[u,f]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[c,l,[u,f]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[c,l,[u,g]],[/(surface duo)/i],[l,[c,O],[u,g]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[l,[c,"Fairphone"],[u,f]],[/(u304aa)/i],[l,[c,"AT&T"],[u,f]],[/\bsie-(\w*)/i],[l,[c,"Siemens"],[u,f]],[/\b(rct\w+) b/i],[l,[c,"RCA"],[u,g]],[/\b(venue[\d ]{2,7}) b/i],[l,[c,"Dell"],[u,g]],[/\b(q(?:mv|ta)\w+) b/i],[l,[c,"Verizon"],[u,g]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[l,[c,"Barnes & Noble"],[u,g]],[/\b(tm\d{3}\w+) b/i],[l,[c,"NuVision"],[u,g]],[/\b(k88) b/i],[l,[c,"ZTE"],[u,g]],[/\b(nx\d{3}j) b/i],[l,[c,"ZTE"],[u,f]],[/\b(gen\d{3}) b.+49h/i],[l,[c,"Swiss"],[u,f]],[/\b(zur\d{3}) b/i],[l,[c,"Swiss"],[u,g]],[/\b((zeki)?tb.*\b) b/i],[l,[c,"Zeki"],[u,g]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[c,"Dragon Touch"],l,[u,g]],[/\b(ns-?\w{0,9}) b/i],[l,[c,"Insignia"],[u,g]],[/\b((nxa|next)-?\w{0,9}) b/i],[l,[c,"NextBook"],[u,g]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[c,"Voice"],l,[u,f]],[/\b(lvtel\-)?(v1[12]) b/i],[[c,"LvTel"],l,[u,f]],[/\b(ph-1) /i],[l,[c,"Essential"],[u,f]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[l,[c,"Envizen"],[u,g]],[/\b(trio[-\w\. ]+) b/i],[l,[c,"MachSpeed"],[u,g]],[/\btu_(1491) b/i],[l,[c,"Rotor"],[u,g]],[/(shield[\w ]+) b/i],[l,[c,"Nvidia"],[u,g]],[/(sprint) (\w+)/i],[c,l,[u,f]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[c,O],[u,f]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[l,[c,B],[u,g]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[l,[c,B],[u,f]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[c,l,[u,h]],[/droid.+; (shield) bui/i],[l,[c,"Nvidia"],[u,h]],[/(playstation [345portablevi]+)/i],[l,[c,P],[u,h]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[l,[c,O],[u,h]],[/smart-tv.+(samsung)/i],[c,[u,v]],[/hbbtv.+maple;(\d+)/i],[[l,/^/,"SmartTV"],[c,R],[u,v]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[c,E],[u,v]],[/(apple) ?tv/i],[c,[l,_+" TV"],[u,v]],[/crkey/i],[[l,z+"cast"],[c,A],[u,v]],[/droid.+aft(\w)( bui|\))/i],[l,[c,y],[u,v]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[l,[c,M],[u,v]],[/(bravia[\w ]+)( bui|\))/i],[l,[c,P],[u,v]],[/(mitv-\w{5}) bui/i],[l,[c,V],[u,v]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[c,G],[l,G],[u,v]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[u,v]],[/((pebble))app/i],[c,l,[u,k]],[/droid.+; (glass) \d/i],[l,[c,A],[u,k]],[/droid.+; (wt63?0{2,3})\)/i],[l,[c,B],[u,k]],[/(quest( 2)?)/i],[l,[c,D],[u,k]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[c,[u,x]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[l,[u,f]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[l,[u,g]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[u,g]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[u,f]],[/(android[-\w\. ]{0,9});.+buil/i],[l,[c,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[m,[d,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[d,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,d]],os:[[/microsoft (windows) (vista|xp)/i],[d,m],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[d,[m,Z,H]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[d,"Windows"],[m,Z,H]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[d,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[d,"Mac OS"],[m,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[m,d],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[d,m],[/\(bb(10);/i],[m,[d,q]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[m,[d,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[m,[d,N+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[d,"webOS"]],[/crkey\/([\d\.]+)/i],[m,[d,z+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[d,"Chromium OS"],m],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[d,m],[/(sunos) ?([\w\.\d]*)/i],[[d,"Solaris"],m],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[d,m]]},X=function(i,e){if(typeof i===b&&(e=i,i=n),!(this instanceof X))return new X(i,e).getResult();var o=i||(typeof r!==s&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),a=e?function(i,e){var o={};for(var a in i)e[a]&&e[a].length%2==0?o[a]=e[a].concat(i[a]):o[a]=i[a];return o}($,e):$;return this.getBrowser=function(){var i,e={};return e[d]=n,e[m]=n,L.call(e,o,a.browser),e.major=typeof(i=e.version)===w?i.replace(/[^\d\.]/g,"").split(".")[0]:n,e},this.getCPU=function(){var i={};return i[p]=n,L.call(i,o,a.cpu),i},this.getDevice=function(){var i={};return i[c]=n,i[l]=n,i[u]=n,L.call(i,o,a.device),i},this.getEngine=function(){var i={};return i[d]=n,i[m]=n,L.call(i,o,a.engine),i},this.getOS=function(){var i={};return i[d]=n,i[m]=n,L.call(i,o,a.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(i){return o=typeof i===w&&i.length>350?G(i,350):i,this},this.setUA(o),this};X.VERSION="1.0.33",X.BROWSER=I([d,m,"major"]),X.CPU=I([p]),X.DEVICE=I([l,c,u,h,f,v,g,k,x]),X.ENGINE=X.OS=I([d,m]),typeof e!==s?(i.exports&&(e=i.exports=X),e.UAParser=X):o.amdO?(a=function(){return X}.call(e,o,e,i))===n||(i.exports=a):typeof r!==s&&(r.UAParser=X);var K=typeof r!==s&&(r.jQuery||r.Zepto);if(K&&!K.ua){var Q=new X;K.ua=Q.getResult(),K.ua.get=function(){return Q.getUA()},K.ua.set=function(i){Q.setUA(i);var e=Q.getResult();for(var o in e)K.ua[o]=e[o]}}}("object"==typeof window?window:this)}}]);
//# sourceMappingURL=6353.d2241a63430b74c9.js.map