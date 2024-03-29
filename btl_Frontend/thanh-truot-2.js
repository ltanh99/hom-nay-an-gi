/*!
 * Retina.js v1.3.0
 *
 * Copyright 2014 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
!function(){
	function a(){}
	function b(a){
		return f.retinaImageSuffix+a
	}function c(a,c){
		if(this.path=a||"","undefined"!=typeof c&&null!==c)
			this.at_2x_path=c,this.perform_check=!1;
		else{if(void 0!==document.createElement){
			var d=document.createElement("a");
			d.href=this.path,d.pathname=d.pathname.replace(g,b),this.at_2x_path=d.href
		}else{
			var e=this.path.split("?");
			e[0]=e[0].replace(g,b),this.at_2x_path=e.join("?")
		}this.perform_check=!0}
	}function d(a){
		this.el=a,this.path=new c(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));
		var b=this;this.path.check_2x_variant(function(a){
			a&&b.swap()})}var e="undefined"==typeof exports?window:exports,f={retinaImageSuffix:"@2x",check_mime_type:!0,force_original_dimensions:!0};
		e.Retina=a,a.configure=function(a){
			null===a&&(a={});for(var b in a)a.hasOwnProperty(b)&&(f[b]=a[b])},a.init=function(a){null===a&&(a=e);var b=a.onload||function(){};
			a.onload=function(){var a,c,e=document.getElementsByTagName("img"),f=[];
			for(a=0;a<e.length;a+=1)c=e[a],c.getAttributeNode("data-no-retina")||f.push(new d(c));b()}},a.isRetina=function(){var a="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
				return e.devicePixelRatio>1?!0:e.matchMedia&&e.matchMedia(a).matches?!0:!1};
			var g=/\.\w+$/;e.RetinaImagePath=c,c.confirmed_paths=[],c.prototype.is_external=function(){
				return!(!this.path.match(/^https?\:/i)||this.path.match("//"+document.domain))},c.prototype.check_2x_variant=function(a){
					var b,d=this;return this.is_external()?a(!1):this.perform_check||"undefined"==typeof this.at_2x_path||null===this.at_2x_path?this.at_2x_path in c.confirmed_paths?a(!0):(b=new XMLHttpRequest,b.open("HEAD",this.at_2x_path),b.onreadystatechange=function(){
						if(4!==b.readyState)
							return a(!1);
						if(b.status>=200&&b.status<=399){
							if(f.check_mime_type){
								var e=b.getResponseHeader("Content-Type");
								if(null===e||!e.match(/^image/i))
									return a(!1)}
								return c.confirmed_paths.push(d.at_2x_path),a(!0)}
								return a(!1)},b.send(),void 0):a(!0)},e.RetinaImage=d,d.prototype.swap=function(a){
						function b(){
							c.el.complete?(f.force_original_dimensions&&(c.el.setAttribute("width",c.el.offsetWidth),c.el.setAttribute("height",c.el.offsetHeight)),c.el.setAttribute("src",a)):setTimeout(b,5)}"undefined"==typeof a&&(a=this.path.at_2x_path);
							var c=this;
							b()},a.isRetina()&&a.init(e)}();