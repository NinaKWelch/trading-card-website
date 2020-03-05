/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about.html",
    "revision": "f2b675c4633633b6f07a5a4610b65d27"
  },
  {
    "url": "contributors.html",
    "revision": "d6ded33734d3589de6f3a095619e6542"
  },
  {
    "url": "css/styles.css",
    "revision": "e01b6b4a3fe8217104d6d3b8de5c6752"
  },
  {
    "url": "img/agata.jpg",
    "revision": "1c497b4b7622b5fdb6d5a350d7f35064"
  },
  {
    "url": "img/ahmed_yasser.jpg",
    "revision": "9e5584b3b0f05ab19ec8ef721573369d"
  },
  {
    "url": "img/apple-touch-icon.png",
    "revision": "5f93f770eed522c48db8028a91fad87b"
  },
  {
    "url": "img/arrowUp.png",
    "revision": "cbe13b3b5141b35d38869c92d7a04358"
  },
  {
    "url": "img/bear.png",
    "revision": "8e666763cdc0d2008c7889717e47a615"
  },
  {
    "url": "img/bird.png",
    "revision": "fd376cc6462a6603347c77476f1dc37e"
  },
  {
    "url": "img/cat.png",
    "revision": "29772c09bccda05774ea6906cf2d8fa4"
  },
  {
    "url": "img/Chartreux.png",
    "revision": "53da6479879b8d74f5239d5ee6eb1b03"
  },
  {
    "url": "img/dog.png",
    "revision": "611633988d3cafc3979a451c54c98790"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "6fbb0aa883334c4d06c5853c38eb1be9"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "e8e76d3c718fa5b085af8a1d4fd1d6b7"
  },
  {
    "url": "img/favicon.ico",
    "revision": "9a8e1e1008ba525f34aa49a0242101a1"
  },
  {
    "url": "img/hummingbird.png",
    "revision": "5ae1c5331408f019163e43b35d48da46"
  },
  {
    "url": "img/icons-192.png",
    "revision": "0687641e236661c32d9e76d1b5a7cea2"
  },
  {
    "url": "img/icons-512.png",
    "revision": "1b01a4a9c3c2cacd94fb4964fabe1986"
  },
  {
    "url": "img/labrador.png",
    "revision": "3287d0ad73ec492f6e34e3a6bbdf0a1c"
  },
  {
    "url": "img/lion.png",
    "revision": "c356b2c3d251283278f80a34889b5d27"
  },
  {
    "url": "img/monkey.png",
    "revision": "c157a825bf2707cec25492b6e12dbcad"
  },
  {
    "url": "img/nina_welch_profile.jpg",
    "revision": "77b20b4fcf31773fd51826e4a780dcda"
  },
  {
    "url": "img/pikachu.png",
    "revision": "a4b1c49dfea0cc9467a1787def2a0322"
  },
  {
    "url": "img/potterheads.png",
    "revision": "b2675f7ce9c4f7165f2854ddcc085b3d"
  },
  {
    "url": "img/profile_placeholder.png",
    "revision": "ffedce708a01b2ff28c2836ee2c28e4b"
  },
  {
    "url": "img/raven.jpg",
    "revision": "991120650132c9d7b425c6a27b45e7f2"
  },
  {
    "url": "img/red-fox.png",
    "revision": "1d316fc9607148c4ae24097d5b118802"
  },
  {
    "url": "img/seal.png",
    "revision": "b23efa6f405bbd6b75f9a186fdd18d44"
  },
  {
    "url": "img/tiger.png",
    "revision": "9b4c4dfb8d567797b514aac78f3d1ccb"
  },
  {
    "url": "img/udacity_logo.png",
    "revision": "163dcea36978192d02f493aa5b6f968b"
  },
  {
    "url": "img/whippet-dog.png",
    "revision": "4d1bc2d97831e42d057d9ef409378ee8"
  },
  {
    "url": "img/wolf.png",
    "revision": "5074979b65ff0f359f8882cf859b08d9"
  },
  {
    "url": "index.html",
    "revision": "4570e762d6fc98fd1a708541396e92b1"
  },
  {
    "url": "js/cards.js",
    "revision": "587791db394f08db0d3df57a43cd7906"
  },
  {
    "url": "js/contributors.js",
    "revision": "cd524fbc6ad585c4326d64224c5fe1e8"
  },
  {
    "url": "js/register_sw.js",
    "revision": "60af29268364d873554fae7d14309ca8"
  },
  {
    "url": "matches.html",
    "revision": "956ef5b984247764f357647ef4c668f0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
