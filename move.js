function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
		}
		else{
			return getComputedStyle(obj,false)[attr];
			}
	}
function startMove(obj,attr,target){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var ispeed=null;
		
		var Oattr=0;
		if(attr=='opacity'){ 
			Oattr=parseInt(parseFloat(getStyle(obj,attr)*100));
			}else{
				Oattr=parseInt(getStyle(obj,attr));
				}
		ispeed=(target-Oattr)/8;
		ispeed=ispeed>0?Math.ceil(ispeed):Math.floor(ispeed);
			if(Oattr==target){
			clearInterval(obj.timer);
			}else{
				if(attr=='opacity'){
		    obj.style.filter='alpha(opacity:'+(Oattr+ispeed)+')';
		    obj.style.opacity=(Oattr+ispeed)/100;
		}else{
			obj.style[attr]=Oattr+ispeed+"px";
			}
		}
		},30);
	}// JavaScript Document