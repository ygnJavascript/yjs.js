//yjs Türkçe Javascript kütüphaneesi V0.6

var degiskenler = [],hataKutusu,list;

function hata(x="hata",y="",z=""){
	hataKutusu = '<div style="z-index:1000000;padding:10px;cursor:pointer;position:fixed;left:50%;top:0px;transform:translate(-50%,0);text-align:center;width:60%;border:1px solid red;background-color:#1a1a1a;color:red;" onclick="this.remove()"><h3>'+x+'</h3><hr><p>' + y+'</p><p>'+z+'</p><p>(Kapatmak için tıkla)</p></div>';
	document.body.innerHTML += hataKutusu;
}

function d(x=""){
	if(x == ""){
		hata('hata kodu : 0001','Değişken adı ve değeri boş geçilemez.','Doğru kullanım : d("degisken adi","degeri"); ya da d("degisken adi");');
	}else{
		if(x.indexOf("=")!==-1){
            if(degiskenler.indexOf(x.split("=")[0]) !==-1){
                var l = degiskenler.indexOf(x.split("=")[0])+1;
                degiskenler[l] = x.split("=")[1];
            }else{
			degiskenler.push(x.split("=")[0],x.split("=")[1]);
			return "Başarıyla değişken oluşturuldu.";
            }
		}else{
			if(degiskenler.indexOf(x) == -1){
				hata("hata kodu : 0002",x + " adında değişken oluşturulmamış.")
			}else{
				return degiskenler[degiskenler.indexOf(x)+1];
			}
		}
	}
}

function uyari(x=""){
	if(x == ""){
		hata('hata kodu : 0003','Uyarı içeriği boş geçilemez.','Doğru kullanım : uyari(uyari_icerigi);');
	}else{
		alert(x);
	}
}

function al(x="",y=""){
    if(y!==""){
        if(x.indexOf("#") !== -1){
                return document.getElementById(x.split("#")[1]);
            }else if(x.indexOf(".") !== -1){
                list = [];
                for(var i = 0;i<document.getElementsByClassName(x.split(".")[1]).length;i++){
                    if(document.getElementsByClassName(x.split(".")[1])[i].getAttribute("style").indexOf(y)!==-1){
                        list.push(document.getElementsByClassName(x.split(".")[1])[i]);
                    }
                }
                return list;
            }else{
                list = [];
                for(var i = 0;i<document.getElementsByTagName(x).length;i++){
                    if(document.getElementsByTagName(x)[i].getAttribute("style").indexOf(y)!==-1){
                        list.push(document.getElementsByTagName(x)[i]);
                    }
                }
                return list;
            }
    }else{
	if(x == ""){
		hata('hata kodu : 0004','al() içeriği boş geçilemez.','Doğru kullanım : al(#id_adi ya da .class_adi ya da tag_adi);');
	}else{
            if(x.indexOf("#") !== -1){
                return document.getElementById(x.split("#")[1]);
            }else if(x.indexOf(".") !== -1){
                return document.getElementsByClassName(x.split(".")[1]);
            }else{
                return document.getElementsByTagName(x);
            }
	}
}
}
