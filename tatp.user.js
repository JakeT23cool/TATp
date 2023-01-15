// ==UserScript==
// @name        TestAndTrack+
// @namespace   Violentmonkey Scripts
// @match       https://www.testandtrack.io/index.php/*
// @grant       none
// @version     1
// @author      .
// @description Minor Accessability improvements to TestAndTrack.
// ==/UserScript==
if(window.location == "https://www.testandtrack.io/index.php/profile/givetest"){
  window.addEventListener('load', function(){
    document.getElementById("body").remove();
    c = Infinity;
    var g = 0
    var s = document.getElementsByTagName("input");
    for(var i = 0; i < s.length; i++){
      let e = s[i]
      if(e.type=="radio"){
        var j = e.name;
        var x = e.parentNode.innerText;
        e.id = "tt++r"+g.toString();
        e.parentNode.innerHTML = e.parentNode.innerHTML.split("&nbsp;&nbsp;")[0];
        e = document.getElementById("tt++r"+g.toString());
        let z = document.createElement("label");
        z.htmlFor = e.id;
        z.innerText = x;
        e.parentNode.appendChild(z);
        g++;
      }
    }
  });
}
