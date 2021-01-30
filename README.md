# yjs.js
yjs.js Javascript DOM Library

yjs.js vs jquery
_______________________________________________
yjs 👍  al("#kod");

jquery 👍  $("#kod");

--------------------------------------------------

yjs 👍 al(".baslik")[0];

jquery 👍 $(".baslik")[0];

--------------------------------------------------

yjs 👍 al("h1")[0];

jquery 👍 $("h1")[0];

--------------------------------------------------

yjs 👍 al(".baslik","color:red")[0];

jqeury 👎 var list=[],searching="color:red";for(var i = 0;i < $(".baslik").length;i++){if($(".baslik")[i].style.indexOf(searching) !== -1){list.push($(".baslik")[i]);}}console.log(list);

--------------------------------------------------

yjs 👍 yeni("<span>Hello world!</span>",al(".baslik"));

jqeury 👎 var elem=$(".baslik");var addelem = "<span>Hello world!</span>";for(var i=0;i<elem.length;i++){elem[i].innerHTML += addelem;} or var elem=$("div");var addelem = "<span>Hello world!</span>";for(var i=0;i<elem.length;i++){elem[i].innerHTML += addelem;}

________________________________________________

Get elements class or tag name with any css property.

Add new HTML element to per get class, tag or id element.

Online test yjs.js : http://kodmakinesi.rf.gd/yjs/

CDN : <script src="http://kodmakinesi.rf.gd/yjs/yjs.js"></script>
CDN : http://kodmakinesi.rf.gd/yjs/yjs.js
