!function(){
	function a(){A.keyboardSupport&&m("keydown",e)
}function b(){
	if(!E&&document.body){
		E=!0;var b=document.body,c=document.documentElement,d=window.innerHeight,e=b.scrollHeight;
		if(F=document.compatMode.indexOf("CSS")>=0?c:b,v=b,a(),top!=self)C=!0;
		else if(e>d&&(b.offsetHeight<=d||c.offsetHeight<=d)){var f=document.createElement("div");
		f.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+F.scrollHeight+"px",document.body.appendChild(f);
		var g,h=function(){g||(g=setTimeout(function(){B||(f.style.height="0",f.style.height=F.scrollHeight+"px",g=null)},500))};
		setTimeout(h,10);
		var i={attributes:!0,childList:!0,characterData:!1};
		if(w=new Q(h),w.observe(b,i),F.offsetHeight<=d){var j=document.createElement("div");
		j.style.clear="both",b.appendChild(j)}}A.fixedBackground||B||(b.style.backgroundAttachment="scroll",c.style.backgroundAttachment="scroll")}
	}function c(a,b,c){if(o(b,c),1!=A.accelerationMax){
		var d=Date.now(),e=d-L;
		if(e<A.accelerationDelta){
			var f=(1+50/e)/2;f>1&&(f=Math.min(f,A.accelerationMax),b*=f,c*=f)}L=Date.now()}if(J.push({x:b,y:c,lastX:0>b?.99:-.99,lastY:0>c?.99:-.99,start:Date.now()}),!K){
				var g=a===document.body,h=function(d){
					for(var e=Date.now(),f=0,i=0,j=0;j<J.length;j++){
						var k=J[j],l=e-k.start,m=l>=A.animationTime,n=m?1:l/A.animationTime;
						A.pulseAlgorithm&&(n=u(n));var o=k.x*n-k.lastX>>0,p=k.y*n-k.lastY>>0;
						f+=o,i+=p,k.lastX+=o,k.lastY+=p,m&&(J.splice(j,1),j--)}g?window.scrollBy(f,i):(f&&(a.scrollLeft+=f),i&&(a.scrollTop+=i)),b||c||(J=[]),J.length?P(h,a,1e3/A.frameRate+1):K=!1};
						P(h,a,0),K=!0}}function d(a){E||b();
							var d=a.target,e=i(d);
							if(!e||a.defaultPrevented||a.ctrlKey)return!0;if(n(v,"embed")||n(d,"embed")&&/\.pdf/i.test(d.src)||n(v,"object"))return!0;
							var f=-a.wheelDeltaX||a.deltaX||0,h=-a.wheelDeltaY||a.deltaY||0;return H&&(a.wheelDeltaX&&q(a.wheelDeltaX,120)&&(f=-120*(a.wheelDeltaX/Math.abs(a.wheelDeltaX))),a.wheelDeltaY&&q(a.wheelDeltaY,120)&&(h=-120*(a.wheelDeltaY/Math.abs(a.wheelDeltaY)))),f||h||(h=-a.wheelDelta||0),1===a.deltaMode&&(f*=40,h*=40),!A.touchpadSupport&&p(h)?!0:(Math.abs(f)>1.2&&(f*=A.stepSize/120),Math.abs(h)>1.2&&(h*=A.stepSize/120),c(e,f,h),a.preventDefault(),void g())}function e(a){
								var b=a.target,d=a.ctrlKey||a.altKey||a.metaKey||a.shiftKey&&a.keyCode!==I.spacebar;
								document.contains(v)||(v=document.activeElement);
								var e=/^(textarea|select|embed|object)$/i,f=/^(button|submit|radio|checkbox|file|color|image)$/i;
								if(e.test(b.nodeName)||n(b,"input")&&!f.test(b.type)||n(v,"video")||s(a)||b.isContentEditable||a.defaultPrevented||d)return!0;
								if((n(b,"button")||n(b,"input")&&f.test(b.type))&&a.keyCode===I.spacebar)return!0;
								var h,j=0,k=0,l=i(v),m=l.clientHeight;
								switch(l==document.body&&(m=window.innerHeight),a.keyCode){case I.up:k=-A.arrowScroll;
									break;
									case I.down:k=A.arrowScroll;
									break;
									case I.spacebar:h=a.shiftKey?1:-1,k=-h*m*.9;
									break;
									case I.pageup:k=.9*-m;
									break;
									case I.pagedown:k=.9*m;
									break;
									case I.home:k=-l.scrollTop;
									break;
									case I.end:var o=l.scrollHeight-l.scrollTop-m;k=o>0?o+10:0;
									break;
									case I.left:j=-A.arrowScroll;
									break;
									case I.right:j=A.arrowScroll;
									break;
									default:return!0}c(l,j,k),a.preventDefault(),g()
								}function f(a){v=a.target}
								function g(){
									clearTimeout(x),
									x=setInterval(function(){
										N={}},1e3)
								}function h(a,b){
									for(var c=a.length;c--;)N[M(a[c])]=b;return b
								}function i(a){
									var b=[],c=document.body,d=F.scrollHeight;
									do{var e=N[M(a)];
										if(e)return h(b,e);
										if(b.push(a),d===a.scrollHeight){
											var f=k(F)&&k(c),g=f||l(F);
											if(C&&j(F)||!C&&g)return h(b,R())}else if(j(a)&&l(a))return h(b,a)}while(a=a.parentElement)
										}function j(a){
											return a.clientHeight+10<a.scrollHeight
										}function k(a){
											var b=getComputedStyle(a,"").getPropertyValue("overflow-y");
											return"hidden"!==b
										}function l(a){
											var b=getComputedStyle(a,"").getPropertyValue("overflow-y");
											return"scroll"===b||"auto"===b
										}function m(a,b){
											window.addEventListener(a,b,!1)}function n(a,b){return(a.nodeName||"").toLowerCase()===b.toLowerCase()
										}function o(a,b){
											a=a>0?1:-1,b=b>0?1:-1,(D.x!==a||D.y!==b)&&(D.x=a,D.y=b,J=[],L=0)
										}function p(a){
											return a?(G.length||(G=[a,a,a]),a=Math.abs(a),G.push(a),G.shift(),clearTimeout(y),y=setTimeout(function(){window.localStorage&&(localStorage.SS_deltaBuffer=G.join(","))},1e3),!r(120)&&!r(100)):void 0
										}function q(a,b){
											return Math.floor(a/b)==a/b
										}function r(a){
											return q(G[0],a)&&q(G[1],a)&&q(G[2],a)
										}function s(a){
											var b=a.target,c=!1;
											if(-1!=document.URL.indexOf("www.youtube.com/watch"))do if(c=b.classList&&b.classList.contains("html5-video-controls"))break;
											while(b=b.parentNode);
											return c
										}function t(a){
											var b,c,d;
											return a*=A.pulseScale,1>a?b=a-(1-Math.exp(-a)):(c=Math.exp(-1),a-=1,d=1-Math.exp(-a),b=c+d*(1-c)),b*A.pulseNormalize
										}function u(a){
											return a>=1?1:0>=a?0:(1==A.pulseNormalize&&(A.pulseNormalize/=t(1)),t(a))
										}var v,w,x,y,z={frameRate:150,animationTime:400,stepSize:120,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},A=z,B=!1,C=!1,D={x:0,y:0},E=!1,F=document.documentElement,G=[],H=/^Mac/.test(navigator.platform),I={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},A=z,J=[],K=!1,L=Date.now(),M=function(){var a=0;
											return function(b){
												return b.uniqueID||(b.uniqueID=a++)}}(),N={};
												window.localStorage&&localStorage.SS_deltaBuffer&&(G=localStorage.SS_deltaBuffer.split(","));var O,P=function(){
													return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a,b,c){window.setTimeout(a,c||1e3/60)}
												}(),Q=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,R=function(){
													var a;return function(){if(!a){
														var b=document.createElement("div");b.style.cssText="height:10000px;width:1px;",document.body.appendChild(b);
														var c=document.body.scrollTop;
														document.documentElement.scrollTop;
														window.scrollBy(0,1),a=document.body.scrollTop!=c?document.body:document.documentElement,window.scrollBy(0,-1),document.body.removeChild(b)}return a}
													}();"onwheel"in document.createElement("div")?O="wheel":"onmousewheel"in document.createElement("div")&&(O="mousewheel"),O&&(m(O,d),m("mousedown",f),m("load",b))}();