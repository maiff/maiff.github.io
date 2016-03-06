
	

function Bar(target,content,warp){
	var target=this.bar_tool.$(target),content=this.bar_tool.$(content),oWarp=this.bar_tool.$(warp)
	var mousewheel =this.bar_tool.isFirefox()? "DOMMouseScroll" : "mousewheel";
	var bar=this.render(target),oParent=bar.parentNode;
	this.setBarHeight(content.offsetHeight-oWarp.offsetHeight,bar,oParent);
	var setTop=this.setTop;
	this.mouseWheel=function(ev){
		var oEv = ev || event;
 	 	bDown = oEv.wheelDelta ? oEv.wheelDelta < 0 : oEv.detail > 0;
  	 	if(bDown){
   			setTop(bar.offsetTop + 10,oParent,content,oWarp,bar);
  		}else{
    // setLeft(oBox.offsetLeft - 10);
    		setTop(bar.offsetTop - 10,oParent,content,oWarp,bar);
 			 }
  		if(oEv.preventDefault){
    		oEv.preventDefault();
  		}
  		return false;
	};
	bar.onmousedown=function(ev){
		var e=ev||event;
		var disY=e.clientY-bar.offsetTop;
		document.onmousemove=function(ev){
			var e=ev||event;
			var l=e.clientY-disY;
			setTop(l,oParent,content,oWarp,bar);
		}
		document.onmouseup=function(){
			document.onmouseup=null;
			document.onmousemove=null;
		}
		return false;
	};	

		this.bar_tool.addEvent(oWarp,mousewheel,this.mouseWheel);
		this.bar_tool.addEvent(oParent,mousewheel,this.mouseWheel);
}

Bar.prototype={
	render:function(target){
		
		var slider_contain=document.createElement('div');
		var bar=document.createElement('div');
		bar.className='bar';
		//slider_contain.innerHTML="<div class="bar"></div>";
		slider_contain.className='slider-contain';
		slider_contain.appendChild(bar);
		target.appendChild(slider_contain);
		return bar;
	},
	setTop:function(l,oParent,content,oWarp,bar){
		
		if(l<0)l=0; else="" if(l="">oParent.offsetHeight-bar.offsetHeight){
			l=oParent.offsetHeight-bar.offsetHeight;
		}
		bar.style.top=l+'px';
		var n=l/(oParent.offsetHeight-bar.offsetHeight);
		content.style.top =- (content.offsetHeight - oWarp.offsetHeight)*n + 'px';
	},
	setBarHeight:function(h,bar,oParent){
		var barHeight=oParent.offsetHeight-h;
  		bar.style.height = barHeight < 30 ? '30px' : barHeight + 'px';
},
	bar_tool:{
	isFirefox:function (){
		return navigator.userAgent.toLowerCase().match(/firefox\/([\d.]+)/)?true:false;
	},
		addEvent:function(obj,sEv,fn){
			if(obj.addEventListener){
			obj.addEventListener(sEv,fn,false);
			}
			else obj.attachEvent('on'+sEv,fn);
		},
		$:function(id){
			return document.querySelector(id);
		}
	}
}

</0)l=0;>