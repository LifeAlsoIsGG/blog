if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-f8d4e228"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.71609caf.css",revision:"74b22630b9e6f5f7e37acbf5e6687f9a"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/23.7a011acf.js",revision:"55dd87627caeec9fd6a2312748ab6fa0"},{url:"assets/js/24.6080b698.js",revision:"6e60164ad5c344bfc34f8f686de9fde5"},{url:"assets/js/25.f0a7f793.js",revision:"fc64dd896554f638e13b2629c381b6fd"},{url:"assets/js/26.4ef3a5aa.js",revision:"946ddae1ed59546cd0b1d3ae1d808bf9"},{url:"assets/js/27.85787ce5.js",revision:"32fc686cae65402cd51668c5cfb6e088"},{url:"assets/js/app.d28a4334.js",revision:"3b0c225b94a10976e9e9432da2d0c50c"},{url:"assets/js/layout-Blog.f55fa3a9.js",revision:"c97d784575391991ed637e3fa3a9c9e0"},{url:"assets/js/layout-Layout.3d066f4e.js",revision:"4c0099eca3d6face0eeae3ba5f34ff49"},{url:"assets/js/layout-NotFound.b8a521ab.js",revision:"55e5abdcccf27cbb0d4d349bf3ffa02f"},{url:"assets/js/layout-Slide.7c6dea9e.js",revision:"fa4a36e8408a6a0a30c5c4aafb7c59a9"},{url:"assets/js/page-About--1d45e806.09db7f86.js",revision:"d79af026853c7927c84b251e8eaba21a"},{url:"assets/js/page-demo--9b847374.458d5d44.js",revision:"e7abee35a0dcc2c5a3f19e365df51f51"},{url:"assets/js/page-Home--58f04215.ac9c472f.js",revision:"d82060ab9737d8bae92fdd32ba8f4b91"},{url:"assets/js/page-Java-基础知识笔记--ba9e4320.d537e997.js",revision:"0fc92766925f48591488c55bcd646406"},{url:"assets/js/page-Java学习目录--750e92c5.fb14564c.js",revision:"aced50e3bec88c0a833c078491e8e238"},{url:"assets/js/page-Markdown增强--4b95fe64.d71a106c.js",revision:"49ee05a4b49363b4eed0d49d99cce0f4"},{url:"assets/js/page-主要功能与配置演示--79d4d00a.a2d5e8e6.js",revision:"0eeef304106cf75a8f2f4510bfc07e8e"},{url:"assets/js/page-密码加密的文章--f898c734.25b06af2.js",revision:"c63473d7e10fcd440446928b44afc80a"},{url:"assets/js/page-组件禁用--2c21e206.f3b68a65.js",revision:"c1d60a88e0ee8dda8cfb73c5887f0cb1"},{url:"assets/js/page-页面配置--ec9920e4.eca12f18.js",revision:"7067bf1ef044d66cc16951d02ff1b593"},{url:"assets/js/vendors~flowchart.30a1c72a.js",revision:"248f252210b4305bac3f6252c39d8a3a"},{url:"assets/js/vendors~layout-Blog~layout-Layout.69deabb1.js",revision:"11838f61d62ca3faa5cc0c93f05671cb"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.e9482061.js",revision:"7d4aa260f23fb2503ba6da25db7af5a6"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.f63d3efc.js",revision:"e6ff65cf9fb2ede2ef863ef04d7d3080"},{url:"assets/js/vendors~photo-swipe.f1b8eff5.js",revision:"a625331a38d603a5519662bf689dd986"},{url:"assets/js/vendors~reveal.4c1c5912.js",revision:"eeb71c7d527fdad97eb34ac78dbd5e2a"},{url:"assets/js/vendors~valine.f0900e65.js",revision:"9333af9b83ca70e3987ac8b9ff04e2b9"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"8d03c00d15cf23468c5a6a61b6f016ba"},{url:"about/index.html",revision:"3586366611765bc7e57b21a44d49733e"},{url:"article/index.html",revision:"85a43a137cd642fbfaed4800cfca05cb"},{url:"category/demo/index.html",revision:"14c86f17b1d99715922c2c76856d8c24"},{url:"category/index.html",revision:"d92b51d459f30b4086ca394eb4d61aa1"},{url:"category/Java/index.html",revision:"d7f98b624a5136670bb634131a3a8622"},{url:"category/使用指南/index.html",revision:"ca2f6086169d19438d0bba1febb72140"},{url:"category/学习笔记/index.html",revision:"a76a171a44978b33cbf05c3cadcc6d0c"},{url:"demo/demo/index.html",revision:"7c7763a7f219f9eab8d8979bf8081662"},{url:"encrypt/index.html",revision:"801e428e763679a370282f9985cc0f80"},{url:"guide/disable/index.html",revision:"ecfe3a14b1589140a62d21c69a3a4802"},{url:"guide/encrypt/index.html",revision:"616e3f38816de1f9fe35a5b2a2e3b691"},{url:"guide/index.html",revision:"012ab1a00b53bc7c35f4e55b133b0ad7"},{url:"guide/markdown/index.html",revision:"1ea58a0ff06180c90a3ac4bc4f06d303"},{url:"guide/page/index.html",revision:"b1c5e7a34775bcc22da564f67ae4a279"},{url:"index.html",revision:"56a236878bfa48cd55ffcb744517d64f"},{url:"Java/index.html",revision:"869ff2e213c03ae10c5fde7275c9a07c"},{url:"Java/Java-BasicNotes/index.html",revision:"72dac8658b26a916e4d03e5ff7c1595f"},{url:"slide/index.html",revision:"e1d768bd27039bb001e0944c4d5b6056"},{url:"tag/demo/index.html",revision:"0978f3e385c00c479aa01d85202c5fbb"},{url:"tag/index.html",revision:"7565c70456e165c0dcf140731ede78c5"},{url:"tag/Java/index.html",revision:"59f6c3097387b1ba020e168ef5d5ea93"},{url:"tag/markdown/index.html",revision:"013b5073b122aad51af828c4466c231c"},{url:"tag/使用指南/index.html",revision:"890a952081a11a0a64012081cf0960f3"},{url:"tag/学习笔记/index.html",revision:"9efbd8f6cab11d3c294a71bd9bf5cc29"},{url:"tag/文章加密/index.html",revision:"40b784f5b779555e83fb27c8f080d891"},{url:"tag/页面配置/index.html",revision:"7ea88d9a7636599b09fd71fd8197204b"},{url:"timeline/index.html",revision:"ebda1d39c38057af47681d7df25e7b20"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/demo.e302088b.jpg",revision:"e302088b654e981fbe5edd8f8d738cf4"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"bgImage.jpg",revision:"8490c75e39f5c378a01b9e5a716881df"},{url:"heroImage.png",revision:"05ff0a351d68fc2b2faad7f78137d33e"},{url:"heroImage1.png",revision:"b1e65d0d8072379080be357a62b3b5eb"},{url:"logo.png",revision:"f36494ac75b22a5413749eb9d7911620"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
