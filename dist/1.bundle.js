(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{10:function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return _});var n=r(17),o=r(1),a=r.n(o),i=r(0),c=r.n(i);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){l(e,t,r[t])})}return e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var d,y=(function(e){var t,r,n,o,a,i,c,s,l,u,f,p,d,y,b;t=m,r=function(e,t,n){if(!s(t)||u(t)||f(t)||p(t)||c(t))return t;var o,a=0,i=0;if(l(t))for(o=[],i=t.length;a<i;a++)o.push(r(e,t[a],n));else for(var m in o={},t)Object.prototype.hasOwnProperty.call(t,m)&&(o[e(m,n)]=r(e,t[m],n));return o},n=function(e){return d(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)},o=function(e){var t=n(e);return t.substr(0,1).toUpperCase()+t.substr(1)},a=function(e,t){return function(e,t){var r=(t=t||{}).separator||"_",n=t.split||/(?=[A-Z])/;return e.split(n).join(r)}(e,t).toLowerCase()},i=Object.prototype.toString,c=function(e){return"function"==typeof e},s=function(e){return e===Object(e)},l=function(e){return"[object Array]"==i.call(e)},u=function(e){return"[object Date]"==i.call(e)},f=function(e){return"[object RegExp]"==i.call(e)},p=function(e){return"[object Boolean]"==i.call(e)},d=function(e){return(e-=0)==e},y=function(e,t){var r=t&&"process"in t?t.process:t;return"function"!=typeof r?e:function(t,n){return r(t,e,n)}},b={camelize:n,decamelize:a,pascalize:o,depascalize:a,camelizeKeys:function(e,t){return r(y(n,t),e)},decamelizeKeys:function(e,t){return r(y(a,t),e,t)},pascalizeKeys:function(e,t){return r(y(o,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}},e.exports?e.exports=b:t.humps=b}(d={exports:{}},d.exports),d.exports);var b=!1;try{b=!0}catch(e){}function v(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?l({},e,t):{}}function h(e){return null===e?null:"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function _(e){var t=e.icon,r=e.mask,o=e.symbol,a=e.className,i=e.title,c=h(t),s=v("classes",[].concat(p(function(e){var t,r=(l(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-inverse":e.inverse,"fa-border":e.border,"fa-li":e.listItem,"fa-flip-horizontal":"horizontal"===e.flip||"both"===e.flip,"fa-flip-vertical":"vertical"===e.flip||"both"===e.flip},"fa-".concat(e.size),null!==e.size),l(t,"fa-rotate-".concat(e.rotation),null!==e.rotation),l(t,"fa-pull-".concat(e.pull),null!==e.pull),t);return Object.keys(r).map(function(e){return r[e]?e:null}).filter(function(e){return e})}(e)),p(a.split(" ")))),f=v("transform","string"==typeof e.transform?n.c.transform(e.transform):e.transform),m=v("mask",h(r)),d=Object(n.a)(c,u({},s,f,m,{symbol:o,title:i}));if(!d)return function(){var e;!b&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",c),null;var y=d.abstract,g={};return Object.keys(e).forEach(function(t){_.defaultProps.hasOwnProperty(t)||(g[t]=e[t])}),E(y[0],g)}_.displayName="FontAwesomeIcon",_.propTypes={border:a.a.bool,className:a.a.string,mask:a.a.oneOfType([a.a.object,a.a.array,a.a.string]),fixedWidth:a.a.bool,inverse:a.a.bool,flip:a.a.oneOf(["horizontal","vertical","both"]),icon:a.a.oneOfType([a.a.object,a.a.array,a.a.string]),listItem:a.a.bool,pull:a.a.oneOf(["right","left"]),pulse:a.a.bool,rotation:a.a.oneOf([90,180,270]),size:a.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a.a.bool,symbol:a.a.oneOfType([a.a.bool,a.a.string]),title:a.a.string,transform:a.a.oneOfType([a.a.string,a.a.object])},_.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null};var E=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map(function(r){return e(t,r)}),a=Object.keys(r.attributes||{}).reduce(function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r,n=t.indexOf(":"),o=y.camelize(t.slice(0,n)),a=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:e[o]=a,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[y.camelize(t)]=n}return e},{attrs:{}}),i=n.style,c=void 0===i?{}:i,s=f(n,["style"]);return a.attrs.style=u({},a.attrs.style,c),t.apply(void 0,[r.tag,u({},a.attrs,s)].concat(p(o)))}.bind(null,c.a.createElement)}).call(this,r(11))},51:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(6),i=r(10),c=r(5),s=r(52),l=r(53),u=r(54),f=r(9);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,y(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){return o.a.createElement(s.a,{as:"div",bsPrefix:"volumetric-information-container about-information-container"},o.a.createElement(s.a,{as:"div",bsPrefix:"rear-plan-information-container about-rear-plan"}),o.a.createElement(s.a,{as:"div",bsPrefix:"text-information-container about-text"},o.a.createElement(l.a,null,o.a.createElement(u.a,{lg:12,md:12,sm:12,xs:12},o.a.createElement(s.a,{as:"div",bsPrefix:"title-information-container about-title"},this.props.homeComponents.about.title))),o.a.createElement(l.a,null,o.a.createElement(u.a,{lg:12,md:12,sm:12,xs:12},o.a.createElement(s.a,{as:"div",bsPrefix:"descriptor-information-container about-descriptor hyphenate",lang:"ru"},this.props.homeComponents.about.descriptor))),o.a.createElement(l.a,null,o.a.createElement(u.a,{lg:12,md:12,sm:12,xs:12,className:"d-flex"},o.a.createElement(s.a,{as:"div",bsPrefix:"link-information-container about-link ml-auto"},o.a.createElement(c.b,{to:this.props.homeComponents.about.url},o.a.createElement("svg",null,o.a.createElement("rect",null)),o.a.createElement("span",null,"Читать далее...")))))))}}])&&m(r.prototype,n),a&&m(r,a),t}();var h=Object(f.b)(function(e){return{homeComponents:e.HomeReducer}})(v);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,O(t).apply(this,arguments))}var r,n,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){return o.a.createElement(s.a,{as:"div",bsPrefix:"services-provided__container container-fluid"},o.a.createElement(l.a,{className:"justify-content-lg-center justify-content-md-center"},o.a.createElement(u.a,{lg:2,md:6,sm:6,xs:12,className:"services-provided__columns"},o.a.createElement(s.a,{as:"div",bsPrefix:"services-provided__item services-provided__item--hover"},o.a.createElement(i.a,{icon:a.c,className:"services-provided__item--icon"}),o.a.createElement(s.a,{as:"div",className:"services-provided__item--title"},this.props.homeComponents.services.support.title),o.a.createElement("hr",null),o.a.createElement(s.a,{as:"div",className:"services-provided__item-descriptor"},this.props.homeComponents.services.support.descriptor))),o.a.createElement(u.a,{lg:2,md:6,sm:6,xs:12,className:"services-provided__columns"},o.a.createElement(s.a,{as:"div",bsPrefix:"services-provided__item services-provided__item--hover"},o.a.createElement(i.a,{icon:a.b,className:"services-provided__item--icon"}),o.a.createElement(s.a,{as:"div",className:"services-provided__item--title"},this.props.homeComponents.services.problems.title),o.a.createElement("hr",null),o.a.createElement(s.a,{as:"div",className:"services-provided__item--descriptor"},this.props.homeComponents.services.problems.descriptor))),o.a.createElement(u.a,{lg:2,md:6,sm:6,xs:12,className:"services-provided__columns"},o.a.createElement(s.a,{as:"div",className:"services-provided__item services-provided__item--hover"},o.a.createElement(i.a,{icon:a.d,className:"services-provided__item--icon"}),o.a.createElement(s.a,{as:"div",className:"services-provided__item--title"},this.props.homeComponents.services.development.title),o.a.createElement("hr",null),o.a.createElement(s.a,{as:"div",className:"services-provided__item--descriptor"},this.props.homeComponents.services.development.descriptor))),o.a.createElement(u.a,{lg:2,md:6,sm:6,xs:12,className:"services-provided__columns"},o.a.createElement(s.a,{as:"div",className:"services-provided__item services-provided__item--hover"},o.a.createElement(i.a,{icon:a.f,className:"services-provided__item--icon"}),o.a.createElement(s.a,{as:"div",className:"services-provided__item--title"},this.props.homeComponents.services.tests.title),o.a.createElement("hr",null),o.a.createElement(s.a,{as:"div",className:"services-provided__item--descriptor"},this.props.homeComponents.services.tests.descriptor))),o.a.createElement(u.a,{lg:2,md:12,sm:6,xs:12,className:"services-provided__columns"},o.a.createElement(s.a,{as:"div",className:"services-provided__item services-provided__item--hover"},o.a.createElement(i.a,{icon:a.e,className:"services-provided__item--icon"}),o.a.createElement(s.a,{as:"div",className:"services-provided__item--title"},this.props.homeComponents.services.technicalAssistance.title),o.a.createElement("hr",null),o.a.createElement(s.a,{as:"div",className:"services-provided__item--descriptor"},this.props.homeComponents.services.technicalAssistance.descriptor)))))}}])&&E(r.prototype,n),c&&E(r,c),t}();var j=Object(f.b)(function(e){return{homeComponents:e.HomeReducer}})(w),P=r(1),S=r.n(P);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function k(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var z=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),k(this,A(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,o.a.Component),r=t,(n=[{key:"createCycleItems",value:function(){return this.props.cycles.map(function(e){return o.a.createElement(l.a,null,o.a.createElement(u.a,{lg:6,md:5,sm:5,xs:5},o.a.createElement(s.a,{as:"div",bsPrefix:"life-cycle__left-content text-right"},o.a.createElement(s.a,{as:"div",bsPrefix:"life-cycle__item--title"},e.title),e.descriptor.map(function(e){return o.a.createElement(s.a,{as:"div",bsPrefix:"life-cycle__item--descriptor"},e.paragraph)}))),o.a.createElement(u.a,{lg:6,md:5,sm:5,xs:5},o.a.createElement(s.a,{as:"div",bsPrefix:"list-cycle__right-content text-left"},o.a.createElement(s.a,{as:"div",bsPrefix:"life-cycle__image"},"изображение"))))})}},{key:"render",value:function(){return console.log(this.props.cycles),o.a.createElement("div",null,this.createCycleItems())}}])&&C(r.prototype,n),a&&C(r,a),t}();z.propTypes={id:S.a.number,title:S.a.string,descriptor:S.a.array};var R=Object(f.b)(function(e){return{cycles:e.LifeCycleReducer}})(z);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function W(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),W(this,K(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){return o.a.createElement(s.a,{fluid:!0,className:"life-cycle__container"},o.a.createElement(R,null),o.a.createElement(s.a,{as:"div",bsPrefix:"life-cycle__point--container d-flex justify-content-center"},o.a.createElement("svg",null,o.a.createElement("line",null))))}}])&&I(r.prototype,n),a&&I(r,a),t}();var q=Object(f.b)(function(e){return{homeComponents:e.HomeReducer}})(H);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function B(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var G=function(e){function t(){return F(this,t),B(this,J(t).apply(this,arguments))}var r,n,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(t,o.a.Component),r=t,(n=[{key:"componentDidMount",value:function(){var e=function(){c=l.width=window.innerWidth-20,s=l.height=window.innerHeight},t={particleColor:"rgba(200, 200, 200, .15)",lineColor:"rgba(142, 142, 142, .2)",particleAmount:255,defaultSpeed:.2,variantSpeed:.3,defaultRadius:2,variantRadius:2,linkRadius:70};window.addEventListener("resize",function(){r()});var r=function(){clearTimeout(i),i=setTimeout(function(){e()},f)},n=function(e,r){for(var n=0;n<r.length;n++){var o=1-(a=e.x,i=e.y,c=r[n].x,s=r[n].y,Math.sqrt(Math.pow(c-a,2)+Math.pow(s-i,2)))/t.linkRadius;o>0&&(u.lineWidth=.5,u.strokeStyle="rgba(".concat(p[0],", ").concat(p[1],", ").concat(p[2],", ").concat(o,")"),u.beginPath(),u.moveTo(e.x,e.y),u.lineTo(r[n].x,r[n].y),u.closePath(),u.stroke())}var a,i,c,s},o=function e(r,n){F(this,e),this.x=Math.random()*c,this.y=Math.random()*s,this.speed=t.defaultSpeed+Math.random()*t.variantSpeed,this.directionAngle=Math.floor(360*Math.random()),this.color=t.particleColor,this.radius=t.defaultRadius+Math.random()*t.variantRadius,this.vector={x:Math.cos(this.directionAngle)*this.speed,y:Math.sin(this.directionAngle)*this.speed},this.update=function(){this.border(),this.x+=this.vector.x,this.y+=this.vector.y},this.border=function(){(this.x>=c||this.x<=0)&&(this.vector.x*=-1),(this.y>=s||this.y<=0)&&(this.vector.y*=-1),this.x>c&&(this.x=c),this.y>s&&(this.y=s),this.x<0&&(this.x=0),this.y<0&&(this.y=0)},this.draw=function(){u.beginPath(),u.arc(this.x,this.y,this.radius,0,2*Math.PI),u.closePath(),u.fillStyle=this.color,u.fill()}};function a(){window.requestAnimationFrame(a),u.clearRect(0,0,c,s);for(var e=0;e<m.length;e++)m[e].update(),m[e].draw();for(var t=0;t<m.length;t++)n(m[t],m)}var i,c,s,l=document.getElementById("dynamic-point"),u=l.getContext("2d"),f=200,p=t.lineColor.match(/\d+/g),m=[];e(),function(){e();for(var r=0;r<t.particleAmount;r++)m.push(new o);window.requestAnimationFrame(a)}()}},{key:"render",value:function(){return o.a.createElement("div",{className:"home-page"},o.a.createElement("div",{className:"space-photo"},o.a.createElement("canvas",{id:"dynamic-point"}," "),o.a.createElement(s.a,{fluid:!0,className:"title-container"},o.a.createElement(l.a,null,o.a.createElement(u.a,{lg:12,md:12,sm:12,xs:12},o.a.createElement("div",{className:"title-text-middle"},"Научно-производственный комплекс"))),o.a.createElement(l.a,null,o.a.createElement(u.a,{lg:12,md:12,sm:12,xs:12},o.a.createElement("div",{className:"title-text-high"},"Альтэрнативная энергетика"))),o.a.createElement("hr",null),o.a.createElement(l.a,null,o.a.createElement(u.a,{lg:12,md:12,sm:12,xs:12},o.a.createElement("div",{className:"subtitle-text"},"Разработка и производство химических источников тока")))),o.a.createElement("div",{className:"start-button-container"},o.a.createElement(c.b,{to:"/",className:"start-button-link"},o.a.createElement(i.a,{icon:a.a,className:"start-button-icon"})))),o.a.createElement(s.a,{as:"div",bsPrefix:"home-page-content"},o.a.createElement(h,null),o.a.createElement(j,null),o.a.createElement(q,null)))}}])&&U(r.prototype,n),f&&U(r,f),t}();t.default=G}}]);