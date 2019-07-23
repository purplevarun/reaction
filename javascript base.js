			var i=new Date().getTime();
			function getRandomColor() {
				var letters = '0123456789ABCDEF';
				  var color = '#';
				  for (var i = 0; i < 6; i++) {
					color += letters[Math.floor(Math.random() * 16)];
				  }
				  return color;
			}
			function makeappear(){
				document.getElementById("shape").style.top=(Math.random()*300)+"px";
				document.getElementById("shape").style.left=(Math.random()*400)+"px";
				document.getElementById("shape").style.display="block";
				document.getElementById("shape").style.width=(100+Math.random()*200)+"px";
				document.getElementById("shape").style.height=(100+Math.random()*200)+"px";
				document.getElementById("shape").style.backgroundColor=getRandomColor();
				i=new Date().getTime();
				if(Math.random()>0.5)
					document.getElementById("shape").style.borderRadius="50%";
				else
						document.getElementById("shape").style.borderRadius="0";
			}
			function delay(){
				setTimeout(makeappear, Math.random()*1500);
			}
			delay();
			document.getElementById("shape").onclick=function(){
				document.getElementById("shape").style.display="none";
				var f=new Date().getTime();
				var t=(f-i)/1000;
				document.getElementById("x").innerHTML=t+" seconds";
				delay();
			}
