(self.webpackChunkblog=self.webpackChunkblog||[]).push([[512],{4852:function(e){"use strict";e.exports=Object.assign},8032:function(e,t,r){"use strict";r.d(t,{G:function(){return _},L:function(){return m},M:function(){return E},P:function(){return T},_:function(){return s},a:function(){return a},b:function(){return u},g:function(){return d},h:function(){return c}});var n=r(7294),o=(r(2369),r(5697)),i=r.n(o);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function l(e,t,r){const n={};let o="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(o="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:o,"data-gatsby-image-wrapper":"",style:n}}function u(e,t,r,n,o){return void 0===o&&(o={}),a({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:a({},o,{opacity:t?1:0})})}function d(e,t,r,n,o,i,s,c){const l={};i&&(l.backgroundColor=i,"fixed"===r?(l.width=n,l.height=o,l.backgroundColor=i,l.position="relative"):("constrained"===r||"fullWidth"===r)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),s&&(l.objectFit=s),c&&(l.objectPosition=c);const u=a({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:a({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return u}const f=["children"],p=function(e){let{layout:t,width:r,height:o}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:o/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+o+"'%20width='"+r+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,r=s(e,f);return n.createElement(n.Fragment,null,n.createElement(p,a({},r)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:r,loading:o,alt:i="",shouldLoad:c}=e,l=s(e,h);return n.createElement("img",a({},l,{decoding:"async",loading:o,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:i}))},b=function(e){let{fallback:t,sources:r=[],shouldLoad:o=!0}=e,i=s(e,g);const c=i.sizes||(null==t?void 0:t.sizes),l=n.createElement(y,a({},i,t,{sizes:c,shouldLoad:o}));return r.length?n.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:i}=e;return n.createElement("source",{key:t+"-"+i+"-"+r,type:i,media:t,srcSet:o?r:void 0,"data-srcset":o?void 0:r,sizes:c})})),l):l};var v;y.propTypes={src:o.string.isRequired,alt:o.string.isRequired,sizes:o.string,srcSet:o.string,shouldLoad:o.bool},b.displayName="Picture",b.propTypes={alt:o.string.isRequired,shouldLoad:o.bool,fallback:o.exact({src:o.string.isRequired,srcSet:o.string,sizes:o.string}),sources:o.arrayOf(o.oneOfType([o.exact({media:o.string.isRequired,type:o.string,sizes:o.string,srcSet:o.string.isRequired}),o.exact({media:o.string,type:o.string.isRequired,sizes:o.string,srcSet:o.string.isRequired})]))};const w=["fallback"],T=function(e){let{fallback:t}=e,r=s(e,w);return t?n.createElement(b,a({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",a({},r))};T.displayName="Placeholder",T.propTypes={fallback:o.string,sources:null==(v=b.propTypes)?void 0:v.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const E=function(e){return n.createElement(n.Fragment,null,n.createElement(b,a({},e)),n.createElement("noscript",null,n.createElement(b,a({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=b.propTypes;const S=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],O=e=>e.replace(/\n/g,""),x=function(e,t,r){for(var n=arguments.length,o=new Array(n>3?n-3:0),a=3;a<n;a++)o[a-3]=arguments[a];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(o)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},j={image:i().object.isRequired,alt:x},A=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],k=new Set;let P,I;const N=function(e){let{as:t="div",image:o,style:i,backgroundColor:u,className:d,class:f,onStartLoad:p,onLoad:m,onError:h}=e,g=s(e,A);const{width:y,height:b,layout:v}=o,w=l(y,b,v),{style:T,className:E}=w,S=s(w,L),C=(0,n.useRef)(),O=(0,n.useMemo)((()=>JSON.stringify(o.images)),[o.images]);f&&(d=f);const x=function(e,t,r){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+r+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,y,b);return(0,n.useEffect)((()=>{P||(P=Promise.all([r.e(774),r.e(731)]).then(r.bind(r,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void k.add(O);if(I&&k.has(O))return;let t,n;return P.then((e=>{let{renderImageToString:r,swapPlaceholderImage:s}=e;C.current&&(C.current.innerHTML=r(a({isLoading:!0,isLoaded:k.has(O),image:o},g)),k.has(O)||(t=requestAnimationFrame((()=>{C.current&&(n=s(C.current,O,k,i,p,m,h))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[o]),(0,n.useLayoutEffect)((()=>{k.has(O)&&I&&(C.current.innerHTML=I(a({isLoading:k.has(O),isLoaded:k.has(O),image:o},g)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[o]),(0,n.createElement)(t,a({},S,{style:a({},T,i,{backgroundColor:u}),className:E+(d?" "+d:""),ref:C,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},_=(0,n.memo)((function(e){return e.image?(0,n.createElement)(N,e):null}));_.propTypes=j,_.displayName="GatsbyImage";const M=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:r,__imageData:o,__error:i}=t,c=s(t,M);return i&&console.warn(i),o?n.createElement(e,a({image:o},c)):(console.warn("Image not loaded",r),null)}}const B=R((function(e){let{as:t="div",className:r,class:o,style:i,image:c,loading:f="lazy",imgClassName:p,imgStyle:h,backgroundColor:g,objectFit:y,objectPosition:b}=e,v=s(e,S);if(!c)return console.warn("[gatsby-plugin-image] Missing image prop"),null;o&&(r=o),h=a({objectFit:y,objectPosition:b,backgroundColor:g},h);const{width:w,height:x,layout:j,images:A,placeholder:L,backgroundColor:k}=c,P=l(w,x,j),{style:I,className:N}=P,_=s(P,C),M={fallback:void 0,sources:[]};return A.fallback&&(M.fallback=a({},A.fallback,{srcSet:A.fallback.srcSet?O(A.fallback.srcSet):void 0})),A.sources&&(M.sources=A.sources.map((e=>a({},e,{srcSet:O(e.srcSet)})))),n.createElement(t,a({},_,{style:a({},I,i,{backgroundColor:g}),className:N+(r?" "+r:"")}),n.createElement(m,{layout:j,width:w,height:x},n.createElement(T,a({},d(L,!1,j,w,x,k,y,b))),n.createElement(E,a({"data-gatsby-image-ssr":"",className:p},v,u("eager"===f,!1,M,f,h)))))})),D=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},U=new Set(["fixed","fullWidth","constrained"]),Z={src:i().string.isRequired,alt:x,width:D,height:D,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!U.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};B.displayName="StaticImage",B.propTypes=Z;const z=R(_);z.displayName="StaticImage",z.propTypes=Z},2369:function(e){"use strict";const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,r=!1,n=!1;for(let o=0;o<e.length;o++){const i=e[o];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,o)+"-"+e.slice(o),t=!1,n=r,r=!0,o++):r&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,o-1)+"-"+e.slice(o-1),n=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r;var r};e.exports=t,e.exports.default=t},9131:function(e,t,r){"use strict";var n=r(6732),o=r(1883),i=r(5021),a=r(4043),s=r(5893);t.Z=e=>{let{active:t=!1,category:r,children:n}=e;return(0,s.jsx)(c,{active:t,to:a.Z.POSTS+"/?"+a.v.CATEGORY+"="+encodeURI(r),children:n})};const c=(0,n.Z)((e=>{let{active:t,...r}=e;return(0,s.jsx)(o.rU,{...r})}),{target:"e1h1hwxn0"})("z-index:9;display:inline-block;padding:0.35rem 0.75rem;color:",i.Z.SUB_BOLD,";font-size:0.9rem;background-color:",(e=>{let{active:t}=e;return t?i.Z.SUB_MIDDLE_BOLD:i.Z.SUB}),";border-radius:1rem;transform:scale(",(e=>{let{active:t}=e;return t?1.15:1}),");cursor:pointer;transition:all 0.1s ease-out;&:not(:first-of-type){margin-left:1rem;}&:hover{color:",i.Z.SUB_BOLD,";background-color:",i.Z.SUB_MIDDLE_BOLD,";}")},4384:function(e,t,r){"use strict";r.d(t,{Z:function(){return Me}});var n,o,i,a,s=r(6732),c=r(5697),l=r.n(c),u=r(3524),d=r.n(u),f=r(9590),p=r.n(f),m=r(7294),h=r(4852),g=r.n(h),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",S="href",C="http-equiv",O="innerHTML",x="itemprop",j="name",A="property",L="rel",k="src",P="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",_="defer",M="encodeSpecialCharacters",R="onChangeClientState",B="titleTemplate",D=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),U=[w.NOSCRIPT,w.SCRIPT,w.STYLE],Z="data-react-helmet",z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=X(e,w.TITLE),r=X(e,B);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=X(e,N);return t||n||void 0},V=function(e){return X(e,R)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&oe("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var s=i[a],c=s.toLowerCase();-1===t.indexOf(c)||r===L&&"canonical"===e[r].toLowerCase()||c===L&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==O&&s!==E&&s!==x||(r=s)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][l]&&(o[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],c=g()({},n[s],o[s]);n[s]=c}return e}),[]).reverse()},X=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},ee=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},re="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:r.g.requestAnimationFrame||ee,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:r.g.cancelAnimationFrame||te,oe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;le(w.BODY,n),le(w.HTML,o),ce(d,f);var p={baseTag:ue(w.BASE,r),linkTags:ue(w.LINK,i),metaTags:ue(w.META,a),noscriptTags:ue(w.NOSCRIPT,s),scriptTags:ue(w.SCRIPT,l),styleTags:ue(w.STYLE,u)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,m,h)},se=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=se(e)),le(w.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(Z),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),s=0;s<a.length;s++){var c=a[s],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===o.indexOf(c)&&o.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)r.removeAttribute(i[d]);o.length===i.length?r.removeAttribute(Z):r.getAttribute(Z)!==a.join(",")&&r.setAttribute(Z,a.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(Z,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},de=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[I[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[Z]=!0,o=fe(r,n),[m.createElement(w.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=de(r),i=se(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+G(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return de(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[Z]=!0,n);return Object.keys(t).forEach((function(e){var r=I[e]||e;if(r===O||r===E){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),m.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===O||e===E)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+G(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===U.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},me=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,f=e.titleAttributes;return{base:pe(w.BASE,t,n),bodyAttributes:pe(y,r,n),htmlAttributes:pe(b,o,n),link:pe(w.LINK,i,n),meta:pe(w.META,a,n),noscript:pe(w.NOSCRIPT,s,n),script:pe(w.SCRIPT,c,n),style:pe(w.STYLE,l,n),title:pe(w.TITLE,{title:d,titleAttributes:f},n)}},he=d()((function(e){return{baseTag:J([S,P],e),bodyAttributes:$(y,e),defer:X(e,_),encode:X(e,M),htmlAttributes:$(b,e),linkTags:Q(w.LINK,[L,S],e),metaTags:Q(w.META,[j,T,C,A,x],e),noscriptTags:Q(w.NOSCRIPT,[O],e),onChangeClientState:V(e),scriptTags:Q(w.SCRIPT,[k,O],e),styleTags:Q(w.STYLE,[E],e),title:K(e),titleAttributes:$(v,e)}}),(function(e){ie&&ne(ie),e.defer?ie=re((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),me)((function(){return null})),ge=(o=he,a=i=function(e){function t(){return q(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return F({},n,((t={})[r.type]=[].concat(n[r.type]||[],[F({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case w.TITLE:return F({},o,((t={})[n.type]=a,t.titleAttributes=F({},i),t));case w.BODY:return F({},o,{bodyAttributes:F({},i)});case w.HTML:return F({},o,{htmlAttributes:F({},i)})}return F({},o,((r={})[n.type]=F({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=F({},t);return Object.keys(e).forEach((function(t){var n;r=F({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return m.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[D[r]||r]=e[r],t}),t)}(W(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=W(e,["children"]),n=F({},r);return t&&(n=this.mapChildrenToProps(t,n)),m.createElement(o,n)},H(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(m.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ge.renderStatic=ge.rewind;var ye=r(5021),be=r(5893);var ve=()=>(0,be.jsx)(we,{children:"© 2023 신승준, Powered by Gatsby."});const we=(0,s.Z)("footer",{target:"ecav7ff0"})("display:flex;align-items:center;justify-content:center;width:100%;height:3rem;margin-top:8rem;color:",ye.Z.SUB_BOLD,";background-color:",ye.Z.SUB,";");var Te=r(1883),Ee=r(4043);var Se=()=>(0,be.jsx)(Te.rU,{to:Ee.Z.HOME,children:"Logo"});var Ce=()=>(0,be.jsx)(Oe,{children:"DarkModeSwitch"});const Oe=(0,s.Z)("div",{target:"exspuvp0"})({name:"147pvhj",styles:"border:1px solid"});var xe=()=>(0,be.jsxs)(je,{children:[(0,be.jsx)(Ce,{}),(0,be.jsx)(Te.rU,{to:Ee.Z.HOME,children:"Home"}),(0,be.jsx)(Te.rU,{to:Ee.Z.POSTS,children:"Posts"}),(0,be.jsx)(Te.rU,{to:Ee.Z.ABOUT,children:"About"})]});const je=(0,s.Z)("div",{target:"es6jy000"})({name:"1pu7z21",styles:"display:flex;gap:1rem;align-items:center"});var Ae=()=>{const{0:e,1:t}=(0,m.useState)(!1),r=(0,m.useRef)(null);return(0,m.useEffect)((()=>{const e=()=>{var e;r.current&&window.scrollY>(null===(e=r.current)||void 0===e?void 0:e.getBoundingClientRect().height)?t(!0):t(!1)};return document.addEventListener("scroll",e,{passive:!0}),()=>{document.removeEventListener("scroll",e)}}),[]),(0,be.jsx)(Le,{ref:r,isScrolled:e,children:(0,be.jsxs)(ke,{children:[(0,be.jsx)(Se,{}),(0,be.jsx)(xe,{})]})})};const Le=(0,s.Z)("header",{target:"e1oze3gj1"})("position:fixed;top:0;z-index:10;display:flex;align-items:center;width:100%;height:4rem;background-color:",ye.Z.WHITE,";box-shadow:",(e=>{let{isScrolled:t}=e;return t&&"1px 1px 3px 0 "+ye.Z.SHADOW}),";transition:all 0.15s ease-out;"),ke=(0,s.Z)("div",{target:"e1oze3gj0"})({name:"1g255of",styles:"display:flex;align-items:center;justify-content:space-between;width:100%;height:100%"});var Pe=r(9583);var Ie=()=>{const{0:e,1:t}=(0,m.useState)(!1);return(0,m.useEffect)((()=>{const e=()=>{window.scrollY>500?t(!0):t(!1)};return document.addEventListener("scroll",e,{passive:!0}),()=>{document.removeEventListener("scroll",e)}}),[]),(0,be.jsx)(Ne,{onClick:()=>{window.scrollTo({top:0,left:0})},isShow:e,children:(0,be.jsx)(_e,{})})};const Ne=(0,s.Z)("div",{target:"e36r2e91"})("position:fixed;right:3rem;bottom:3rem;display:flex;align-items:center;justify-content:center;width:3rem;height:3rem;background-color:",ye.Z.SUB,";border-radius:50%;box-shadow:3px 3px 5px 0 ",ye.Z.SHADOW,";visibility:",(e=>{let{isShow:t}=e;return t?"visible":"hidden"}),";cursor:pointer;opacity:",(e=>{let{isShow:t}=e;return t?1:0}),";transition:all 0.15s ease-out;&:hover{transform:scale(1.05);}"),_e=(0,s.Z)(Pe.ZTc,{target:"e36r2e90"})({name:"11v5qdi",styles:"width:1.5rem;height:1.5rem"});var Me=e=>{let{title:t,description:r,url:n,image:o,children:i}=e;return(0,be.jsxs)(Re,{children:[(0,be.jsxs)(ge,{children:[(0,be.jsx)("title",{children:t}),(0,be.jsx)("meta",{name:"description",content:r}),(0,be.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,be.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html;charset=UTF-8"}),(0,be.jsx)("meta",{property:"og:type",content:"website"}),(0,be.jsx)("meta",{property:"og:title",content:t}),(0,be.jsx)("meta",{property:"og:description",content:r}),(0,be.jsx)("meta",{property:"og:image",content:o}),(0,be.jsx)("meta",{property:"og:url",content:n}),(0,be.jsx)("meta",{property:"og:site_name",content:t}),(0,be.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,be.jsx)("meta",{name:"twitter:title",content:t}),(0,be.jsx)("meta",{name:"twitter:description",content:r}),(0,be.jsx)("meta",{name:"twitter:image",content:o}),(0,be.jsx)("meta",{name:"twitter:site",content:"@seungjun"}),(0,be.jsx)("meta",{name:"twitter:creator",content:"@seungjun"})]}),(0,be.jsx)(Ae,{}),(0,be.jsx)(Be,{children:i}),(0,be.jsx)(ve,{}),(0,be.jsx)(Ie,{})]})};const Re=(0,s.Z)("main",{target:"eg56zyw1"})({name:"1fttcpj",styles:"display:flex;flex-direction:column"}),Be=(0,s.Z)("div",{target:"eg56zyw0"})("")},5021:function(e,t){"use strict";t.Z={MAIN:"#f5f5f8",SUB:"#e4f1ff",SUB_MIDDLE_BOLD:"#badcff",SUB_BOLD:"#0975ea",WHITE:"#ffffff",BLACK:"#000000",GRAY:"#e2e5e6",GRAY_BOLD:"#757575",SHADOW:"rgba(82,82,82,0.75)"}},9590:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,c,l,u;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(!i(e[c],a[c]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!i(e[l[c]],a[l[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return l}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,a({key:t},e.attr),c(e.child))}))}function l(e){return function(t){return n.createElement(u,a({attr:a({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var r,o=e.attr,i=e.size,c=e.title,l=s(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},3524:function(e,t,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),d.canUseDOM?t(c):r&&(c=r(c))}var d=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(d,"canUseDOM",s),d}}}}]);
//# sourceMappingURL=de357a17681fc0993e26aa40a785f014f3a29aa0-1220ad608b2fe8d13059.js.map