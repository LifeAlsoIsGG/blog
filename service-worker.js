if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,f,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(f.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-f8d4e228"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.71609caf.css",revision:"74b22630b9e6f5f7e37acbf5e6687f9a"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/23.43b4231c.js",revision:"31a31a81f69f1febb953515619779b1c"},{url:"assets/js/24.24908ada.js",revision:"6b9f61a1d8a4e36c243efae353bce6a7"},{url:"assets/js/25.c9f907fb.js",revision:"61bd6e8a9298c22c9cdaab3f6b9d6141"},{url:"assets/js/26.7a8f133d.js",revision:"17819ccaa48ed0c9fb29e7a9e09b35d3"},{url:"assets/js/27.aa08817c.js",revision:"814e7bfbf34674a6465d410f1f6bfd94"},{url:"assets/js/app.d946015c.js",revision:"2bb72438ddc5d1f201697000c1d5ae5a"},{url:"assets/js/layout-Blog.83d4b24f.js",revision:"8dc5fb0d7543a2c0ff64db2fd2a17bf6"},{url:"assets/js/layout-Layout.7b23cb96.js",revision:"4e115ce2088d962b43526ad1b6aa2782"},{url:"assets/js/layout-NotFound.e994ab50.js",revision:"39f1306cb14095980cf751884ce6d85f"},{url:"assets/js/layout-Slide.5f646c9d.js",revision:"abae0c732fb763947aefb3099e957420"},{url:"assets/js/page-About--1d45e806.5aabdbbb.js",revision:"841678158ef7f323dbab1e58f0821202"},{url:"assets/js/page-demo--9b847374.a65a8dd2.js",revision:"a17606f7761e018889dc98645887de77"},{url:"assets/js/page-Home--58f04215.1ca1c39d.js",revision:"94f58b237663f707f81b01e58c964d23"},{url:"assets/js/page-Java-基础知识笔记--ba9e4320.a93bd64b.js",revision:"e11e0fb38f131b5090a18763371eafa8"},{url:"assets/js/page-Java学习目录--750e92c5.92692959.js",revision:"485b1499490bda55397f8d80ea07db7e"},{url:"assets/js/page-Markdown增强--4b95fe64.36a9a07e.js",revision:"84cd425d53f0400e9a3289599413671f"},{url:"assets/js/page-主要功能与配置演示--79d4d00a.861345c4.js",revision:"dedcc3e2373aa21bfdc899532aa52805"},{url:"assets/js/page-密码加密的文章--f898c734.ec557960.js",revision:"36733d3aeb0f3afdef54c5afb2129353"},{url:"assets/js/page-组件禁用--2c21e206.d255803c.js",revision:"933b0f991e4220807cd59d6bd84f22a0"},{url:"assets/js/page-页面配置--ec9920e4.03689cae.js",revision:"64c92ad4754f89c5ab81e978a05a646b"},{url:"assets/js/vendors~flowchart.98e1fa7e.js",revision:"2ce0cebe12994c84d356c9cf827fd5dc"},{url:"assets/js/vendors~layout-Blog~layout-Layout.69deabb1.js",revision:"11838f61d62ca3faa5cc0c93f05671cb"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.e9482061.js",revision:"7d4aa260f23fb2503ba6da25db7af5a6"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.f63d3efc.js",revision:"e6ff65cf9fb2ede2ef863ef04d7d3080"},{url:"assets/js/vendors~photo-swipe.2b0bebac.js",revision:"394f28d1af78b7327eea7f5ec5cb6948"},{url:"assets/js/vendors~reveal.593e28f0.js",revision:"09f8ac008855ed44a75d68015e9de4f5"},{url:"assets/js/vendors~valine.b24a1b67.js",revision:"949070c81ddd25d235c2bf0e60b87062"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"9f64665242853fab6dbf6c992d4b838e"},{url:"about/index.html",revision:"7ac25cc14b1650886f58f7c1f69292cf"},{url:"article/index.html",revision:"9d08169aa8b0f85e199eb387d7d37341"},{url:"category/demo/index.html",revision:"4126f52c9cca4feafad7ecd264044757"},{url:"category/index.html",revision:"63c2da5dcde6b93ac2b5b4beafc05eae"},{url:"category/Java/index.html",revision:"5dd0662ecad09ea2587a6552f20efc2e"},{url:"category/使用指南/index.html",revision:"29c28c2d0bfa19d7f7e28732d8694d41"},{url:"category/学习笔记/index.html",revision:"b3c1faa7cbb3729dab6d42fcc7c8b852"},{url:"demo/demo/index.html",revision:"059abd9f20a6e5d31537d1a0fcf97f3e"},{url:"encrypt/index.html",revision:"8904539a266c6ab3f4f29f78534a2be5"},{url:"guide/disable/index.html",revision:"ea00903a727df3c0ad2782efc00701a5"},{url:"guide/encrypt/index.html",revision:"d62e45a79ba9807e0d00ed9f7374316f"},{url:"guide/index.html",revision:"e6bfb2285e13aa6e632efdde9fe830ed"},{url:"guide/markdown/index.html",revision:"5c1238a2afa2a4c2b4805c1318d8da96"},{url:"guide/page/index.html",revision:"38ff13fa8e293457fb8f2f5ca08a9e80"},{url:"index.html",revision:"58d121673f5377cf750bc4a461afedae"},{url:"Java/index.html",revision:"ac1d5e2b5402d81e4682b4d2c43975b5"},{url:"Java/Java-BasicNotes/index.html",revision:"752b8ba80529bdda9c9c65682e188801"},{url:"slide/index.html",revision:"9ca2e9483f91862d5b30577d088aa637"},{url:"tag/demo/index.html",revision:"cf9c1b8fd8136ca1ac20e19d706604ec"},{url:"tag/index.html",revision:"9cfe6e050f5f566ab445cd7cec3be664"},{url:"tag/Java/index.html",revision:"9bd0a7c945d6d6671f6236a0a81b84f1"},{url:"tag/markdown/index.html",revision:"6d6d3750770db339c725f9e00a35d031"},{url:"tag/使用指南/index.html",revision:"2eef36a11b602642ddfbee6d00be7926"},{url:"tag/学习笔记/index.html",revision:"89f719d30c01d5b01124767d12955c88"},{url:"tag/文章加密/index.html",revision:"5898fdaea8a37ec38fd2310003a56935"},{url:"tag/页面配置/index.html",revision:"3a1c74fcf3454361ef61273c4aed0b76"},{url:"timeline/index.html",revision:"970cd83ba454573c313c45c1dc0ff020"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/data_type_exercise.197eb103.jpg",revision:"197eb103ed6229e8f6eca48e87cb0c57"},{url:"assets/img/dataType.2169e3e9.jpg",revision:"2169e3e9b5fedd11d2fadc45d4b04525"},{url:"assets/img/demo.e302088b.jpg",revision:"e302088b654e981fbe5edd8f8d738cf4"},{url:"assets/img/float.989a7dfd.jpg",revision:"989a7dfd779a199e37586b45c889ac32"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/Java_Integer.1becb757.jpg",revision:"1becb7579e7e265e1da597541c758252"},{url:"bgImage.jpg",revision:"8490c75e39f5c378a01b9e5a716881df"},{url:"heroImage.png",revision:"05ff0a351d68fc2b2faad7f78137d33e"},{url:"heroImage1.png",revision:"b1e65d0d8072379080be357a62b3b5eb"},{url:"logo.png",revision:"f36494ac75b22a5413749eb9d7911620"}],{}),e.cleanupOutdatedCaches()}));
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
