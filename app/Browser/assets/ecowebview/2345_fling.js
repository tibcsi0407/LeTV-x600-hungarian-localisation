;(function(){if(document.getElementById('pageSwitch_control'))return;var ctrl=document.createElement('link');ctrl.id='pageSwitch_control';document.getElementsByTagName('head')[0].appendChild(ctrl);var oldVal=null;var onlyMove=false;var newVal=null;var checked=false;var startCheck=false;var zteTrans=false;function getTransform(a){for(;a&&a!=document.body;){window.ztePage.log(a.tagName);var b=a.style;if(b&&"undefined"!=typeof b.webkitTransform&&b.webkitTransform&&-1!=b.webkitTransform.indexOf("translate")){return b.webkitTransform}if(b&&"undefined"!=typeof b.left&&b.left){return b.left}a=a.parentNode}return null};function isDraggable(a){for(;a&&a!=document.body;){var b=a.style;if(b&&(("undefined"!=typeof b.webkitTransition&&b.webkitTransition)||("undefined"!=typeof b.transition&&b.transition))){window.ztePage.log("true 1");zteTrans=true;return true}if(b&&"undefined"!=typeof b.webkitTransform&&b.webkitTransform&&-1!=b.webkitTransform.indexOf("translate")){window.ztePage.log("true 2");return true}b=a.tagName;if("CANVAS"==b||"OBJECT"==b||"INPUT"==b&&"range"==a.type){window.ztePage.log("true 3");return true}if("undefined"!=typeof a.hasAttribute&&(a.hasAttribute("ontouchmove")||a.hasAttribute("ontouchstart"))){window.ztePage.log("true 4");return true}if("undefined"!=typeof a.ontouchmove&&a.ontouchmove){window.ztePage.log("true 5");return true}if(document.getElementById("wapListImage")!=null&&("IMG"==b)){window.ztePage.log("custom image special handle.......");return true}b=a.style;if(b&&"undefined"!=typeof b.left&&b.left){window.ztePage.log("true 7");return true}a=a.parentNode}return false};function zteMove(){window.ztePage.move()}function zteEnd(){oldVal=newVal=null;checked=false;window.ztePage.end()}function testSlide(a){if(onlyMove){return}if(checked){return}if(zteTrans){return}if(oldVal==null){oldVal=getTransform(a.target);if(oldVal==null){window.ztePage.unmove();checked=true}}else if(newVal==null){newVal=getTransform(a.target);window.ztePage.log("old:"+oldVal);window.ztePage.log("new:"+newVal);if(newVal==oldVal)window.ztePage.unmove()}}function testSlideEx(a){window.ztePage.log("testSlideEx");if(xVal==null){xVal=getTransform(a.target);window.ztePage.log("testSlideEx:"+val);if(xVal.index("late(0")==-1||xVal.index("late3D(0")==-1)window.ztePage.unmove()}}var _zte_page={realAddEventListener:HTMLDivElement.prototype.addEventListener,realRemoveEventListener:HTMLDivElement.prototype.removeEventListener,realImgAddEventListener:HTMLUListElement.prototype.addEventListener,realImgRemoveEventListener:HTMLUListElement.prototype.removeEventListener,touchStartPre:function(a){zteTrans=false;if(isDraggable(a.target)){window.ztePage.log("can  move:"+a.target.tagName);zteMove();startCheck=true}else{zteEnd()}window.ztePage.log("start pre:"+a.target.tagName)},touchStartPost:function(a){if(startCheck)return;if(isDraggable(a.target)){window.ztePage.log("can  move:"+a.target.tagName);zteMove()}else{zteEnd()}window.ztePage.log("start post:"+a.target.tagName)},touchOver:function(a){if(!isDraggable(a.target)){zteEnd()}startCheck=false;window.ztePage.log("over:"+a.target.tagName)}};window.ztePage.log("preload");HTMLDivElement.prototype.addEventListener=function(a,b,c){if("touchmove"==a){window.ztePage.log("addEventListener1:move");zteMove();window.addEventListener("touchmove",testSlide,false)}_zte_page.realAddEventListener.call(this,a,b,c)};HTMLDivElement.prototype.removeEventListener=function(a,b,c){if("touchmove"==a){window.ztePage.log("removeEventListener:move");window.removeEventListener("touchmove",testSlide,false)}_zte_page.realRemoveEventListener.call(this,a,b,c)};HTMLUListElement.prototype.addEventListener=function(a,b,c){if("touchmove"==a||"touchstart"==a){window.ztePage.log(":addEventListener2:move");_zte_page.realImgAddEventListener.call(this,"touchstart",zteMove,c)}_zte_page.realImgAddEventListener.call(this,a,b,c)};HTMLUListElement.prototype.removeEventListener=function(a,b,c){if("touchmove"==a){window.ztePage.log("removeEventListener:move");_zte_page.realImgRemoveEventListener.call(this,"touchstart",zteMove,c)}_zte_page.realImgRemoveEventListener.call(this,a,b,c)};window.addEventListener("touchstart",_zte_page.touchStartPre,true);window.addEventListener("touchstart",_zte_page.touchStartPost,false);window.addEventListener("touchcancel",_zte_page.touchOver,false);window.addEventListener("touchend",_zte_page.touchOver,false);onlyMove=true})();