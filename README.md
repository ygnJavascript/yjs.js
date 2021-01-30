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

jqeury 👎 var list=[],searching="color:red";for(var i = 0;i < $(".baslik").length;i++){if($(".baslik")[i].style.indexOf(searching) !== -1){list.push();}}console.log(list);
________________________________________________

Get elements class or tag name with any css property.

Online test yjs.js : http://kodmakinesi.rf.gd/yjs/
