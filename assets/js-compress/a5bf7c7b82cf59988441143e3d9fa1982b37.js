/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});;;
/*! jQuery Migrate v3.0.0 | (c) jQuery Foundation and other contributors | jquery.org/license */"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b){"use strict";function c(c){var d=b.console;e[c]||(e[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function d(a,b,d,e){Object.defineProperty(a,b,{configurable:!0,enumerable:!0,get:function(){return c(e),d}})}a.migrateVersion="3.0.0",function(){var c=b.console&&b.console.log&&function(){b.console.log.apply(b.console,arguments)},d=/^[12]\./;c&&(a&&!d.test(a.fn.jquery)||c("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),a.migrateWarnings&&c("JQMIGRATE: Migrate plugin loaded multiple times"),c("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion))}();var e={};a.migrateWarnings=[],void 0===a.migrateTrace&&(a.migrateTrace=!0),a.migrateReset=function(){e={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&c("jQuery is not compatible with Quirks Mode");var f=a.fn.init,g=a.isNumeric,h=a.find,i=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,j=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;a.fn.init=function(a){var b=Array.prototype.slice.call(arguments);return"string"==typeof a&&"#"===a&&(c("jQuery( '#' ) is not a valid selector"),b[0]=[]),f.apply(this,b)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&i.test(a))try{document.querySelector(a)}catch(d){a=a.replace(j,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),c("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){c("Attribute selector with '#' was not fixed: "+b[0])}}return h.apply(this,b)};var k;for(k in h)Object.prototype.hasOwnProperty.call(h,k)&&(a.find[k]=h[k]);a.fn.size=function(){return c("jQuery.fn.size() is deprecated; use the .length property"),this.length},a.parseJSON=function(){return c("jQuery.parseJSON is deprecated; use JSON.parse"),JSON.parse.apply(null,arguments)},a.isNumeric=function(b){function d(b){var c=b&&b.toString();return!a.isArray(b)&&c-parseFloat(c)+1>=0}var e=g(b),f=d(b);return e!==f&&c("jQuery.isNumeric() should not be called on constructed objects"),f},d(a,"unique",a.uniqueSort,"jQuery.unique is deprecated, use jQuery.uniqueSort"),d(a.expr,"filters",a.expr.pseudos,"jQuery.expr.filters is now jQuery.expr.pseudos"),d(a.expr,":",a.expr.pseudos,'jQuery.expr[":"] is now jQuery.expr.pseudos');var l=a.ajax;a.ajax=function(){var a=l.apply(this,arguments);return a.promise&&(d(a,"success",a.done,"jQXHR.success is deprecated and removed"),d(a,"error",a.fail,"jQXHR.error is deprecated and removed"),d(a,"complete",a.always,"jQXHR.complete is deprecated and removed")),a};var m=a.fn.removeAttr,n=a.fn.toggleClass,o=/\S+/g;a.fn.removeAttr=function(b){var d=this;return a.each(b.match(o),function(b,e){a.expr.match.bool.test(e)&&(c("jQuery.fn.removeAttr no longer sets boolean properties: "+e),d.prop(e,!1))}),m.apply(this,arguments)},a.fn.toggleClass=function(b){return void 0!==b&&"boolean"!=typeof b?n.apply(this,arguments):(c("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var c=this.getAttribute&&this.getAttribute("class")||"";c&&a.data(this,"__className__",c),this.setAttribute&&this.setAttribute("class",c||b===!1?"":a.data(this,"__className__")||"")}))};var p=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return p=!0,a=d.apply(this,arguments),p=!1,a})}),a.swap=function(a,b,d,e){var f,g,h={};p||c("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=d.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f};var q=a.data;a.data=function(b,d,e){var f;return d&&d!==a.camelCase(d)&&(f=a.hasData(b)&&q.call(this,b),f&&d in f)?(c("jQuery.data() always sets/gets camelCased names: "+d),arguments.length>2&&(f[d]=e),f[d]):q.apply(this,arguments)};var r=a.Tween.prototype.run;a.Tween.prototype.run=function(b){a.easing[this.easing].length>1&&(c('easing function "jQuery.easing.'+this.easing.toString()+'" should use only first argument'),a.easing[this.easing]=a.easing[this.easing].bind(a.easing,b,this.options.duration*b,0,1,this.options.duration)),r.apply(this,arguments)};var s=a.fn.load,t=a.event.fix;a.event.props=[],a.event.fixHooks={},a.event.fix=function(b){var d,e=b.type,f=this.fixHooks[e],g=a.event.props;if(g.length)for(c("jQuery.event.props are deprecated and removed: "+g.join());g.length;)a.event.addProp(g.pop());if(f&&!f._migrated_&&(f._migrated_=!0,c("jQuery.event.fixHooks are deprecated and removed: "+e),(g=f.props)&&g.length))for(;g.length;)a.event.addProp(g.pop());return d=t.call(this,b),f&&f.filter?f.filter(d,b):d},a.each(["load","unload","error"],function(b,d){a.fn[d]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===d&&"string"==typeof a[0]?s.apply(this,a):(c("jQuery.fn."+d+"() is deprecated"),a.splice(0,0,d),arguments.length?this.on.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a(function(){a(document).triggerHandler("ready")}),a.event.special.ready={setup:function(){this===document&&c("'ready' event is deprecated")}},a.fn.extend({bind:function(a,b,d){return c("jQuery.fn.bind() is deprecated"),this.on(a,null,b,d)},unbind:function(a,b){return c("jQuery.fn.unbind() is deprecated"),this.off(a,null,b)},delegate:function(a,b,d,e){return c("jQuery.fn.delegate() is deprecated"),this.on(b,a,d,e)},undelegate:function(a,b,d){return c("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(a,"**"):this.off(b,a||"**",d)}});var u=a.fn.offset;a.fn.offset=function(){var b,d=this[0],e={top:0,left:0};return d&&d.nodeType?(b=(d.ownerDocument||document).documentElement,a.contains(b,d)?u.apply(this,arguments):(c("jQuery.fn.offset() requires an element connected to a document"),e)):(c("jQuery.fn.offset() requires a valid DOM element"),e)};var v=a.param;a.param=function(b,d){var e=a.ajaxSettings&&a.ajaxSettings.traditional;return void 0===d&&e&&(c("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),d=e),v.call(this,b,d)};var w=a.fn.andSelf||a.fn.addBack;a.fn.andSelf=function(){return c("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)};var x=a.Deferred,y=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var d=x(),e=d.promise();return d.pipe=e.pipe=function(){var b=arguments;return c("deferred.pipe() is deprecated"),a.Deferred(function(c){a.each(y,function(f,g){var h=a.isFunction(b[f])&&b[f];d[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[g[0]+"With"](this===e?c.promise():this,h?[b]:arguments)})}),b=null}).promise()},b&&b.call(d,d),d}}(jQuery,window);;;window.yii=(function($){var pub={reloadableScripts:[],clickableSelector:'a, button, input[type="submit"], input[type="button"], input[type="reset"], '+'input[type="image"]',changeableSelector:'select, input, textarea',getCsrfParam:function(){return $('meta[name=csrf-param]').attr('content');},getCsrfToken:function(){return $('meta[name=csrf-token]').attr('content');},setCsrfToken:function(name,value){$('meta[name=csrf-param]').attr('content',name);$('meta[name=csrf-token]').attr('content',value);},refreshCsrfToken:function(){var token=pub.getCsrfToken();if(token){$('form input[name="'+pub.getCsrfParam()+'"]').val(token);}},confirm:function(message,ok,cancel){if(window.confirm(message)){!ok||ok();}else{!cancel||cancel();}},handleAction:function($e,event){var $form=$e.attr('data-form')?$('#'+$e.attr('data-form')):$e.closest('form'),method=!$e.data('method')&&$form?$form.attr('method'):$e.data('method'),action=$e.attr('href'),isValidAction=action&&action!=='#',params=$e.data('params'),areValidParams=params&&$.isPlainObject(params),pjax=$e.data('pjax'),usePjax=pjax!==undefined&&pjax!==0&&$.support.pjax,pjaxContainer,pjaxOptions={},conflictParams=['submit','reset','elements','length','name','acceptCharset','action','enctype','method','target'];$.each(conflictParams,function(index,param){if(areValidParams&&params.hasOwnProperty(param)){console.error("Parameter name '"+param+"' conflicts with a same named form property. "+"Please use another name.");}});if(usePjax){pjaxContainer=$e.data('pjax-container');if(pjaxContainer===undefined||!pjaxContainer.length){pjaxContainer=$e.closest('[data-pjax-container]').attr('id')?('#'+$e.closest('[data-pjax-container]').attr('id')):'';}
if(!pjaxContainer.length){pjaxContainer='body';}
pjaxOptions={container:pjaxContainer,push:!!$e.data('pjax-push-state'),replace:!!$e.data('pjax-replace-state'),scrollTo:$e.data('pjax-scrollto'),pushRedirect:$e.data('pjax-push-redirect'),replaceRedirect:$e.data('pjax-replace-redirect'),skipOuterContainers:$e.data('pjax-skip-outer-containers'),timeout:$e.data('pjax-timeout'),originalEvent:event,originalTarget:$e};}
if(method===undefined){if(isValidAction){usePjax?$.pjax.click(event,pjaxOptions):window.location.assign(action);}else if($e.is(':submit')&&$form.length){if(usePjax){$form.on('submit',function(e){$.pjax.submit(e,pjaxOptions);});}
$form.trigger('submit');}
return;}
var oldMethod,oldAction,newForm=!$form.length;if(!newForm){oldMethod=$form.attr('method');$form.attr('method',method);if(isValidAction){oldAction=$form.attr('action');$form.attr('action',action);}}else{if(!isValidAction){action=pub.getCurrentUrl();}
$form=$('<form/>',{method:method,action:action});var target=$e.attr('target');if(target){$form.attr('target',target);}
if(!/(get|post)/i.test(method)){$form.append($('<input/>',{name:'_method',value:method,type:'hidden'}));method='post';$form.attr('method',method);}
if(/post/i.test(method)){var csrfParam=pub.getCsrfParam();if(csrfParam){$form.append($('<input/>',{name:csrfParam,value:pub.getCsrfToken(),type:'hidden'}));}}
$form.hide().appendTo('body');}
var activeFormData=$form.data('yiiActiveForm');if(activeFormData){activeFormData.submitObject=$e;}
if(areValidParams){$.each(params,function(name,value){$form.append($('<input/>').attr({name:name,value:value,type:'hidden'}));});}
if(usePjax){$form.on('submit',function(e){$.pjax.submit(e,pjaxOptions);});}
$form.trigger('submit');$.when($form.data('yiiSubmitFinalizePromise')).done(function(){if(newForm){$form.remove();return;}
if(oldAction!==undefined){$form.attr('action',oldAction);}
$form.attr('method',oldMethod);if(areValidParams){$.each(params,function(name){$('input[name="'+name+'"]',$form).remove();});}});},getQueryParams:function(url){var pos=url.indexOf('?');if(pos<0){return{};}
var pairs=$.grep(url.substring(pos+1).split('#')[0].split('&'),function(value){return value!=='';});var params={};for(var i=0,len=pairs.length;i<len;i++){var pair=pairs[i].split('=');var name=decodeURIComponent(pair[0].replace(/\+/g,'%20'));var value=pair.length>1?decodeURIComponent(pair[1].replace(/\+/g,'%20')):'';if(!name.length){continue;}
if(params[name]===undefined){params[name]=value||'';}else{if(!$.isArray(params[name])){params[name]=[params[name]];}
params[name].push(value||'');}}
return params;},initModule:function(module){if(module.isActive!==undefined&&!module.isActive){return;}
if($.isFunction(module.init)){module.init();}
$.each(module,function(){if($.isPlainObject(this)){pub.initModule(this);}});},init:function(){initCsrfHandler();initRedirectHandler();initAssetFilters();initDataMethods();},getBaseCurrentUrl:function(){return window.location.protocol+'//'+window.location.host;},getCurrentUrl:function(){return window.location.href;}};function initCsrfHandler(){$.ajaxPrefilter(function(options,originalOptions,xhr){if(!options.crossDomain&&pub.getCsrfParam()){xhr.setRequestHeader('X-CSRF-Token',pub.getCsrfToken());}});pub.refreshCsrfToken();}
function initRedirectHandler(){$(document).ajaxComplete(function(event,xhr){var url=xhr&&xhr.getResponseHeader('X-Redirect');if(url){window.location.assign(url);}});}
function initAssetFilters(){var loadedScripts={};$('script[src]').each(function(){var url=getAbsoluteUrl(this.src);loadedScripts[url]=true;});$.ajaxPrefilter('script',function(options,originalOptions,xhr){if(options.dataType=='jsonp'){return;}
var url=getAbsoluteUrl(options.url),forbiddenRepeatedLoad=loadedScripts[url]===true&&!isReloadableAsset(url),cleanupRunning=loadedScripts[url]!==undefined&&loadedScripts[url]['xhrDone']===true;if(forbiddenRepeatedLoad||cleanupRunning){xhr.abort();return;}
if(loadedScripts[url]===undefined||loadedScripts[url]===true){loadedScripts[url]={xhrList:[],xhrDone:false};}
xhr.done(function(data,textStatus,jqXHR){if(loadedScripts[jqXHR.yiiUrl]['xhrDone']===true){return;}
loadedScripts[jqXHR.yiiUrl]['xhrDone']=true;for(var i=0,len=loadedScripts[jqXHR.yiiUrl]['xhrList'].length;i<len;i++){var singleXhr=loadedScripts[jqXHR.yiiUrl]['xhrList'][i];if(singleXhr&&singleXhr.readyState!==XMLHttpRequest.DONE){singleXhr.abort();}}
loadedScripts[jqXHR.yiiUrl]=true;}).fail(function(jqXHR,textStatus){if(textStatus==='abort'){return;}
delete loadedScripts[jqXHR.yiiUrl]['xhrList'][jqXHR.yiiIndex];var allFailed=true;for(var i=0,len=loadedScripts[jqXHR.yiiUrl]['xhrList'].length;i<len;i++){if(loadedScripts[jqXHR.yiiUrl]['xhrList'][i]){allFailed=false;}}
if(allFailed){delete loadedScripts[jqXHR.yiiUrl];}});xhr.yiiIndex=loadedScripts[url]['xhrList'].length;xhr.yiiUrl=url;loadedScripts[url]['xhrList'][xhr.yiiIndex]=xhr;});$(document).ajaxComplete(function(){var styleSheets=[];$('link[rel=stylesheet]').each(function(){var url=getAbsoluteUrl(this.href);if(isReloadableAsset(url)){return;}
$.inArray(url,styleSheets)===-1?styleSheets.push(url):$(this).remove();});});}
function initDataMethods(){var handler=function(event){var $this=$(this),method=$this.data('method'),message=$this.data('confirm'),form=$this.data('form');if(method===undefined&&message===undefined&&form===undefined){return true;}
if(message!==undefined&&message!==false&&message!==''){$.proxy(pub.confirm,this)(message,function(){pub.handleAction($this,event);});}else{pub.handleAction($this,event);}
event.stopImmediatePropagation();return false;};$(document).on('click.yii',pub.clickableSelector,handler).on('change.yii',pub.changeableSelector,handler);}
function isReloadableAsset(url){for(var i=0;i<pub.reloadableScripts.length;i++){var rule=getAbsoluteUrl(pub.reloadableScripts[i]);var match=new RegExp("^"+escapeRegExp(rule).split('\\*').join('.+')+"$").test(url);if(match===true){return true;}}
return false;}
function escapeRegExp(str){return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");}
function getAbsoluteUrl(url){return url.charAt(0)==='/'?pub.getBaseCurrentUrl()+url:url;}
return pub;})(window.jQuery);window.jQuery(function(){window.yii.initModule(window.yii);});;;
/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var o,a,l,h,c,u,f,d,_,g,p,m,v,E,T,y,C,I,A,b,D,S,w,N,O,k,P=function(t){var e=!1;function n(e){var n=this,s=!1;return t(this).one(i.TRANSITION_END,function(){s=!0}),setTimeout(function(){s||i.triggerTransitionEnd(n)},e),this}var i={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n,i=e.getAttribute("data-target");i&&"#"!==i||(i=e.getAttribute("href")||""),"#"===i.charAt(0)&&(n=i,i=n="function"==typeof t.escapeSelector?t.escapeSelector(n).substr(1):n.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1"));try{return t(document).find(i).length>0?i:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(n){t(n).trigger(e.end)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){var r=n[s],o=e[s],a=o&&i.isElement(o)?"element":(l=o,{}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(r).test(a))throw new Error(t.toUpperCase()+': Option "'+s+'" provided type "'+a+'" but expected type "'+r+'".')}var l}};return e=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},t.fn.emulateTransitionEnd=n,i.supportsTransitionEnd()&&(t.event.special[i.TRANSITION_END]={bindType:e.end,delegateType:e.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}),i}(e),L=(a="alert",h="."+(l="bs.alert"),c=(o=e).fn[a],u={CLOSE:"close"+h,CLOSED:"closed"+h,CLICK_DATA_API:"click"+h+".data-api"},f="alert",d="fade",_="show",g=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){o.removeData(this._element,l),this._element=null},e._getRootElement=function(t){var e=P.getSelectorFromElement(t),n=!1;return e&&(n=o(e)[0]),n||(n=o(t).closest("."+f)[0]),n},e._triggerCloseEvent=function(t){var e=o.Event(u.CLOSE);return o(t).trigger(e),e},e._removeElement=function(t){var e=this;o(t).removeClass(_),P.supportsTransitionEnd()&&o(t).hasClass(d)?o(t).one(P.TRANSITION_END,function(n){return e._destroyElement(t,n)}).emulateTransitionEnd(150):this._destroyElement(t)},e._destroyElement=function(t){o(t).detach().trigger(u.CLOSED).remove()},t._jQueryInterface=function(e){return this.each(function(){var n=o(this),i=n.data(l);i||(i=new t(this),n.data(l,i)),"close"===e&&i[e](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),o(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),o.fn[a]=g._jQueryInterface,o.fn[a].Constructor=g,o.fn[a].noConflict=function(){return o.fn[a]=c,g._jQueryInterface},g),R=(m="button",E="."+(v="bs.button"),T=".data-api",y=(p=e).fn[m],C="active",I="btn",A="focus",b='[data-toggle^="button"]',D='[data-toggle="buttons"]',S="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+E+T,FOCUS_BLUR_DATA_API:"focus"+E+T+" blur"+E+T},k=function(){function t(t){this._element=t}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=p(this._element).closest(D)[0];if(n){var i=p(this._element).find(S)[0];if(i){if("radio"===i.type)if(i.checked&&p(this._element).hasClass(C))t=!1;else{var s=p(n).find(w)[0];s&&p(s).removeClass(C)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!p(this._element).hasClass(C),p(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!p(this._element).hasClass(C)),t&&p(this._element).toggleClass(C)},e.dispose=function(){p.removeData(this._element,v),this._element=null},t._jQueryInterface=function(e){return this.each(function(){var n=p(this).data(v);n||(n=new t(this),p(this).data(v,n)),"toggle"===e&&n[e]()})},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),p(document).on(O.CLICK_DATA_API,b,function(t){t.preventDefault();var e=t.target;p(e).hasClass(I)||(e=p(e).closest(N)),k._jQueryInterface.call(p(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,b,function(t){var e=p(t.target).closest(N)[0];p(e).toggleClass(A,/^focus(in)?$/.test(t.type))}),p.fn[m]=k._jQueryInterface,p.fn[m].Constructor=k,p.fn[m].noConflict=function(){return p.fn[m]=y,k._jQueryInterface},k),j=function(t){var e="carousel",n="bs.carousel",i="."+n,o=t.fn[e],a={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},l={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},h="next",c="prev",u="left",f="right",d={SLIDE:"slide"+i,SLID:"slid"+i,KEYDOWN:"keydown"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i,TOUCHEND:"touchend"+i,LOAD_DATA_API:"load"+i+".data-api",CLICK_DATA_API:"click"+i+".data-api"},_="carousel",g="active",p="slide",m="carousel-item-right",v="carousel-item-left",E="carousel-item-next",T="carousel-item-prev",y={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},C=function(){function o(e,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(y.INDICATORS)[0],this._addEventListeners()}var C=o.prototype;return C.next=function(){this._isSliding||this._slide(h)},C.nextWhenVisible=function(){!document.hidden&&t(this._element).is(":visible")&&"hidden"!==t(this._element).css("visibility")&&this.next()},C.prev=function(){this._isSliding||this._slide(c)},C.pause=function(e){e||(this._isPaused=!0),t(this._element).find(y.NEXT_PREV)[0]&&P.supportsTransitionEnd()&&(P.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},C.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},C.to=function(e){var n=this;this._activeElement=t(this._element).find(y.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(d.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var s=e>i?h:c;this._slide(s,this._items[e])}},C.dispose=function(){t(this._element).off(i),t.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},C._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},C._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(d.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(t(this._element).on(d.MOUSEENTER,function(t){return e.pause(t)}).on(d.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&t(this._element).on(d.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},C._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},C._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(y.ITEM)),this._items.indexOf(e)},C._getItemByDirection=function(t,e){var n=t===h,i=t===c,s=this._getItemIndex(e),r=this._items.length-1;if((i&&0===s||n&&s===r)&&!this._config.wrap)return e;var o=(s+(t===c?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},C._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),s=this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),r=t.Event(d.SLIDE,{relatedTarget:e,direction:n,from:s,to:i});return t(this._element).trigger(r),r},C._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(g)}},C._slide=function(e,n){var i,s,r,o=this,a=t(this._element).find(y.ACTIVE_ITEM)[0],l=this._getItemIndex(a),c=n||a&&this._getItemByDirection(e,a),_=this._getItemIndex(c),C=Boolean(this._interval);if(e===h?(i=v,s=E,r=u):(i=m,s=T,r=f),c&&t(c).hasClass(g))this._isSliding=!1;else if(!this._triggerSlideEvent(c,r).isDefaultPrevented()&&a&&c){this._isSliding=!0,C&&this.pause(),this._setActiveIndicatorElement(c);var I=t.Event(d.SLID,{relatedTarget:c,direction:r,from:l,to:_});P.supportsTransitionEnd()&&t(this._element).hasClass(p)?(t(c).addClass(s),P.reflow(c),t(a).addClass(i),t(c).addClass(i),t(a).one(P.TRANSITION_END,function(){t(c).removeClass(i+" "+s).addClass(g),t(a).removeClass(g+" "+s+" "+i),o._isSliding=!1,setTimeout(function(){return t(o._element).trigger(I)},0)}).emulateTransitionEnd(600)):(t(a).removeClass(g),t(c).addClass(g),this._isSliding=!1,t(this._element).trigger(I)),C&&this.cycle()}},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s=r({},a,t(this).data());"object"==typeof e&&(s=r({},s,e));var l="string"==typeof e?e:s.slide;if(i||(i=new o(this,s),t(this).data(n,i)),"number"==typeof e)i.to(e);else if("string"==typeof l){if("undefined"==typeof i[l])throw new TypeError('No method named "'+l+'"');i[l]()}else s.interval&&(i.pause(),i.cycle())})},o._dataApiClickHandler=function(e){var i=P.getSelectorFromElement(this);if(i){var s=t(i)[0];if(s&&t(s).hasClass(_)){var a=r({},t(s).data(),t(this).data()),l=this.getAttribute("data-slide-to");l&&(a.interval=!1),o._jQueryInterface.call(t(s),a),l&&t(s).data(n).to(l),e.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(d.CLICK_DATA_API,y.DATA_SLIDE,C._dataApiClickHandler),t(window).on(d.LOAD_DATA_API,function(){t(y.DATA_RIDE).each(function(){var e=t(this);C._jQueryInterface.call(e,e.data())})}),t.fn[e]=C._jQueryInterface,t.fn[e].Constructor=C,t.fn[e].noConflict=function(){return t.fn[e]=o,C._jQueryInterface},C}(e),H=function(t){var e="collapse",n="bs.collapse",i="."+n,o=t.fn[e],a={toggle:!0,parent:""},l={toggle:"boolean",parent:"(string|element)"},h={SHOW:"show"+i,SHOWN:"shown"+i,HIDE:"hide"+i,HIDDEN:"hidden"+i,CLICK_DATA_API:"click"+i+".data-api"},c="show",u="collapse",f="collapsing",d="collapsed",_="width",g="height",p={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},m=function(){function i(e,n){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(n),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var i=t(p.DATA_TOGGLE),s=0;s<i.length;s++){var r=i[s],o=P.getSelectorFromElement(r);null!==o&&t(o).filter(e).length>0&&(this._selector=o,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var o=i.prototype;return o.toggle=function(){t(this._element).hasClass(c)?this.hide():this.show()},o.show=function(){var e,s,r=this;if(!this._isTransitioning&&!t(this._element).hasClass(c)&&(this._parent&&0===(e=t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(e=null),!(e&&(s=t(e).not(this._selector).data(n))&&s._isTransitioning))){var o=t.Event(h.SHOW);if(t(this._element).trigger(o),!o.isDefaultPrevented()){e&&(i._jQueryInterface.call(t(e).not(this._selector),"hide"),s||t(e).data(n,null));var a=this._getDimension();t(this._element).removeClass(u).addClass(f),this._element.style[a]=0,this._triggerArray.length>0&&t(this._triggerArray).removeClass(d).attr("aria-expanded",!0),this.setTransitioning(!0);var l=function(){t(r._element).removeClass(f).addClass(u).addClass(c),r._element.style[a]="",r.setTransitioning(!1),t(r._element).trigger(h.SHOWN)};if(P.supportsTransitionEnd()){var _="scroll"+(a[0].toUpperCase()+a.slice(1));t(this._element).one(P.TRANSITION_END,l).emulateTransitionEnd(600),this._element.style[a]=this._element[_]+"px"}else l()}}},o.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(c)){var n=t.Event(h.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",P.reflow(this._element),t(this._element).addClass(f).removeClass(u).removeClass(c),this._triggerArray.length>0)for(var s=0;s<this._triggerArray.length;s++){var r=this._triggerArray[s],o=P.getSelectorFromElement(r);if(null!==o)t(o).hasClass(c)||t(r).addClass(d).attr("aria-expanded",!1)}this.setTransitioning(!0);var a=function(){e.setTransitioning(!1),t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN)};this._element.style[i]="",P.supportsTransitionEnd()?t(this._element).one(P.TRANSITION_END,a).emulateTransitionEnd(600):a()}}},o.setTransitioning=function(t){this._isTransitioning=t},o.dispose=function(){t.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},o._getConfig=function(t){return(t=r({},a,t)).toggle=Boolean(t.toggle),P.typeCheckConfig(e,t,l),t},o._getDimension=function(){return t(this._element).hasClass(_)?_:g},o._getParent=function(){var e=this,n=null;P.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=t(this._config.parent)[0];var s='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(s).each(function(t,n){e._addAriaAndCollapsedClass(i._getTargetFromElement(n),[n])}),n},o._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(c);n.length>0&&t(n).toggleClass(d,!i).attr("aria-expanded",i)}},i._getTargetFromElement=function(e){var n=P.getSelectorFromElement(e);return n?t(n)[0]:null},i._jQueryInterface=function(e){return this.each(function(){var s=t(this),o=s.data(n),l=r({},a,s.data(),"object"==typeof e&&e);if(!o&&l.toggle&&/show|hide/.test(e)&&(l.toggle=!1),o||(o=new i(this,l),s.data(n,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),i}();return t(document).on(h.CLICK_DATA_API,p.DATA_TOGGLE,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var i=t(this),s=P.getSelectorFromElement(this);t(s).each(function(){var e=t(this),s=e.data(n)?"toggle":i.data();m._jQueryInterface.call(e,s)})}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=o,m._jQueryInterface},m}(e),W=function(t){var e="dropdown",i="bs.dropdown",o="."+i,a=".data-api",l=t.fn[e],h=new RegExp("38|40|27"),c={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click"+o+a,KEYDOWN_DATA_API:"keydown"+o+a,KEYUP_DATA_API:"keyup"+o+a},u="disabled",f="show",d="dropup",_="dropright",g="dropleft",p="dropdown-menu-right",m="dropdown-menu-left",v="position-static",E='[data-toggle="dropdown"]',T=".dropdown form",y=".dropdown-menu",C=".navbar-nav",I=".dropdown-menu .dropdown-item:not(.disabled)",A="top-start",b="top-end",D="bottom-start",S="bottom-end",w="right-start",N="left-start",O={offset:0,flip:!0,boundary:"scrollParent"},k={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"},L=function(){function a(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var l=a.prototype;return l.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(u)){var e=a._getParentFromElement(this._element),i=t(this._menu).hasClass(f);if(a._clearMenus(),!i){var s={relatedTarget:this._element},r=t.Event(c.SHOW,s);if(t(e).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof n)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o=this._element;t(e).hasClass(d)&&(t(this._menu).hasClass(m)||t(this._menu).hasClass(p))&&(o=e),"scrollParent"!==this._config.boundary&&t(e).addClass(v),this._popper=new n(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===t(e).closest(C).length&&t("body").children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(f),t(e).toggleClass(f).trigger(t.Event(c.SHOWN,s))}}}},l.dispose=function(){t.removeData(this._element,i),t(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},l.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},l._addEventListeners=function(){var e=this;t(this._element).on(c.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},l._getConfig=function(n){return n=r({},this.constructor.Default,t(this._element).data(),n),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},l._getMenuElement=function(){if(!this._menu){var e=a._getParentFromElement(this._element);this._menu=t(e).find(y)[0]}return this._menu},l._getPlacement=function(){var e=t(this._element).parent(),n=D;return e.hasClass(d)?(n=A,t(this._menu).hasClass(p)&&(n=b)):e.hasClass(_)?n=w:e.hasClass(g)?n=N:t(this._menu).hasClass(p)&&(n=S),n},l._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},l._getPopperConfig=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset,{placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i);if(n||(n=new a(this,"object"==typeof e?e:null),t(this).data(i,n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},a._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=t.makeArray(t(E)),s=0;s<n.length;s++){var r=a._getParentFromElement(n[s]),o=t(n[s]).data(i),l={relatedTarget:n[s]};if(o){var h=o._menu;if(t(r).hasClass(f)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&t.contains(r,e.target))){var u=t.Event(c.HIDE,l);t(r).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),n[s].setAttribute("aria-expanded","false"),t(h).removeClass(f),t(r).removeClass(f).trigger(t.Event(c.HIDDEN,l)))}}}},a._getParentFromElement=function(e){var n,i=P.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},a._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||t(e.target).closest(y).length)):h.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!t(this).hasClass(u))){var n=a._getParentFromElement(this),i=t(n).hasClass(f);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var s=t(n).find(I).get();if(0!==s.length){var r=s.indexOf(e.target);38===e.which&&r>0&&r--,40===e.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}else{if(27===e.which){var o=t(n).find(E)[0];t(o).trigger("focus")}t(this).trigger("click")}}},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return O}},{key:"DefaultType",get:function(){return k}}]),a}();return t(document).on(c.KEYDOWN_DATA_API,E,L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API,y,L._dataApiKeydownHandler).on(c.CLICK_DATA_API+" "+c.KEYUP_DATA_API,L._clearMenus).on(c.CLICK_DATA_API,E,function(e){e.preventDefault(),e.stopPropagation(),L._jQueryInterface.call(t(this),"toggle")}).on(c.CLICK_DATA_API,T,function(t){t.stopPropagation()}),t.fn[e]=L._jQueryInterface,t.fn[e].Constructor=L,t.fn[e].noConflict=function(){return t.fn[e]=l,L._jQueryInterface},L}(e),M=function(t){var e="modal",n="bs.modal",i="."+n,o=t.fn.modal,a={backdrop:!0,keyboard:!0,focus:!0,show:!0},l={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},h={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,FOCUSIN:"focusin"+i,RESIZE:"resize"+i,CLICK_DISMISS:"click.dismiss"+i,KEYDOWN_DISMISS:"keydown.dismiss"+i,MOUSEUP_DISMISS:"mouseup.dismiss"+i,MOUSEDOWN_DISMISS:"mousedown.dismiss"+i,CLICK_DATA_API:"click"+i+".data-api"},c="modal-scrollbar-measure",u="modal-backdrop",f="modal-open",d="fade",_="show",g={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},p=function(){function o(e,n){this._config=this._getConfig(n),this._element=e,this._dialog=t(e).find(g.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var p=o.prototype;return p.toggle=function(t){return this._isShown?this.hide():this.show(t)},p.show=function(e){var n=this;if(!this._isTransitioning&&!this._isShown){P.supportsTransitionEnd()&&t(this._element).hasClass(d)&&(this._isTransitioning=!0);var i=t.Event(h.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),t(document.body).addClass(f),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(h.CLICK_DISMISS,g.DATA_DISMISS,function(t){return n.hide(t)}),t(this._dialog).on(h.MOUSEDOWN_DISMISS,function(){t(n._element).one(h.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},p.hide=function(e){var n=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=t.Event(h.HIDE);if(t(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var s=P.supportsTransitionEnd()&&t(this._element).hasClass(d);s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off(h.FOCUSIN),t(this._element).removeClass(_),t(this._element).off(h.CLICK_DISMISS),t(this._dialog).off(h.MOUSEDOWN_DISMISS),s?t(this._element).one(P.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},p.dispose=function(){t.removeData(this._element,n),t(window,document,this._element,this._backdrop).off(i),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},p.handleUpdate=function(){this._adjustDialog()},p._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},p._showElement=function(e){var n=this,i=P.supportsTransitionEnd()&&t(this._element).hasClass(d);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&P.reflow(this._element),t(this._element).addClass(_),this._config.focus&&this._enforceFocus();var s=t.Event(h.SHOWN,{relatedTarget:e}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(s)};i?t(this._dialog).one(P.TRANSITION_END,r).emulateTransitionEnd(300):r()},p._enforceFocus=function(){var e=this;t(document).off(h.FOCUSIN).on(h.FOCUSIN,function(n){document!==n.target&&e._element!==n.target&&0===t(e._element).has(n.target).length&&e._element.focus()})},p._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(h.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(h.KEYDOWN_DISMISS)},p._setResizeEvent=function(){var e=this;this._isShown?t(window).on(h.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(h.RESIZE)},p._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(f),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(h.HIDDEN)})},p._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},p._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(d)?d:"";if(this._isShown&&this._config.backdrop){var s=P.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=u,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(h.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),s&&P.reflow(this._backdrop),t(this._backdrop).addClass(_),!e)return;if(!s)return void e();t(this._backdrop).one(P.TRANSITION_END,e).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(_);var r=function(){n._removeBackdrop(),e&&e()};P.supportsTransitionEnd()&&t(this._element).hasClass(d)?t(this._backdrop).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r()}else e&&e()},p._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},p._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},p._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},p._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){t(g.FIXED_CONTENT).each(function(n,i){var s=t(i)[0].style.paddingRight,r=t(i).css("padding-right");t(i).data("padding-right",s).css("padding-right",parseFloat(r)+e._scrollbarWidth+"px")}),t(g.STICKY_CONTENT).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)-e._scrollbarWidth+"px")}),t(g.NAVBAR_TOGGLER).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)+e._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=t("body").css("padding-right");t("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},p._resetScrollbar=function(){t(g.FIXED_CONTENT).each(function(e,n){var i=t(n).data("padding-right");"undefined"!=typeof i&&t(n).css("padding-right",i).removeData("padding-right")}),t(g.STICKY_CONTENT+", "+g.NAVBAR_TOGGLER).each(function(e,n){var i=t(n).data("margin-right");"undefined"!=typeof i&&t(n).css("margin-right",i).removeData("margin-right")});var e=t("body").data("padding-right");"undefined"!=typeof e&&t("body").css("padding-right",e).removeData("padding-right")},p._getScrollbarWidth=function(){var t=document.createElement("div");t.className=c,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(e,i){return this.each(function(){var s=t(this).data(n),a=r({},o.Default,t(this).data(),"object"==typeof e&&e);if(s||(s=new o(this,a),t(this).data(n,s)),"string"==typeof e){if("undefined"==typeof s[e])throw new TypeError('No method named "'+e+'"');s[e](i)}else a.show&&s.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(h.CLICK_DATA_API,g.DATA_TOGGLE,function(e){var i,s=this,o=P.getSelectorFromElement(this);o&&(i=t(o)[0]);var a=t(i).data(n)?"toggle":r({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var l=t(i).one(h.SHOW,function(e){e.isDefaultPrevented()||l.one(h.HIDDEN,function(){t(s).is(":visible")&&s.focus()})});p._jQueryInterface.call(t(i),a,this)}),t.fn.modal=p._jQueryInterface,t.fn.modal.Constructor=p,t.fn.modal.noConflict=function(){return t.fn.modal=o,p._jQueryInterface},p}(e),U=function(t){var e="tooltip",i="bs.tooltip",o="."+i,a=t.fn[e],l=new RegExp("(^|\\s)bs-tooltip\\S+","g"),h={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},c={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},u={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},f="show",d="out",_={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,INSERTED:"inserted"+o,CLICK:"click"+o,FOCUSIN:"focusin"+o,FOCUSOUT:"focusout"+o,MOUSEENTER:"mouseenter"+o,MOUSELEAVE:"mouseleave"+o},g="fade",p="show",m=".tooltip-inner",v=".arrow",E="hover",T="focus",y="click",C="manual",I=function(){function a(t,e){if("undefined"==typeof n)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var I=a.prototype;return I.enable=function(){this._isEnabled=!0},I.disable=function(){this._isEnabled=!1},I.toggleEnabled=function(){this._isEnabled=!this._isEnabled},I.toggle=function(e){if(this._isEnabled)if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(p))return void this._leave(null,this);this._enter(null,this)}},I.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},I.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var i=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(i);var s=t.contains(this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),o=P.getUID(this.constructor.NAME);r.setAttribute("id",o),this.element.setAttribute("aria-describedby",o),this.setContent(),this.config.animation&&t(r).addClass(g);var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,h=this._getAttachment(l);this.addAttachmentClass(h);var c=!1===this.config.container?document.body:t(this.config.container);t(r).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(r).appendTo(c),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,{placement:h,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:v},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),t(r).addClass(p),"ontouchstart"in document.documentElement&&t("body").children().on("mouseover",null,t.noop);var u=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===d&&e._leave(null,e)};P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(this.tip).one(P.TRANSITION_END,u).emulateTransitionEnd(a._TRANSITION_DURATION):u()}},I.hide=function(e){var n=this,i=this.getTipElement(),s=t.Event(this.constructor.Event.HIDE),r=function(){n._hoverState!==f&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};t(this.element).trigger(s),s.isDefaultPrevented()||(t(i).removeClass(p),"ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),this._activeTrigger[y]=!1,this._activeTrigger[T]=!1,this._activeTrigger[E]=!1,P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(i).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r(),this._hoverState="")},I.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},I.isWithContent=function(){return Boolean(this.getTitle())},I.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},I.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},I.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(m),this.getTitle()),e.removeClass(g+" "+p)},I.setElementContent=function(e,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?i?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[i?"html":"text"](n)},I.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},I._getAttachment=function(t){return c[t.toUpperCase()]},I._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==C){var i=n===E?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,s=n===E?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(s,e.config.selector,function(t){return e._leave(t)})}t(e.element).closest(".modal").on("hide.bs.modal",function(){return e.hide()})}),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},I._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},I._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?T:E]=!0),t(n.getTipElement()).hasClass(p)||n._hoverState===f?n._hoverState=f:(clearTimeout(n._timeout),n._hoverState=f,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===f&&n.show()},n.config.delay.show):n.show())},I._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?T:E]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=d,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===d&&n.hide()},n.config.delay.hide):n.hide())},I._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},I._getConfig=function(n){return"number"==typeof(n=r({},this.constructor.Default,t(this.element).data(),n)).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},I._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},I._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(l);null!==n&&n.length>0&&e.removeClass(n.join(""))},I._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},I._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(g),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i),s="object"==typeof e&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new a(this,s),t(this).data(i,n)),"string"==typeof e)){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return u}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return o}},{key:"DefaultType",get:function(){return h}}]),a}();return t.fn[e]=I._jQueryInterface,t.fn[e].Constructor=I,t.fn[e].noConflict=function(){return t.fn[e]=a,I._jQueryInterface},I}(e),x=function(t){var e="popover",n="bs.popover",i="."+n,o=t.fn[e],a=new RegExp("(^|\\s)bs-popover\\S+","g"),l=r({},U.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),h=r({},U.DefaultType,{content:"(string|element|function)"}),c="fade",u="show",f=".popover-header",d=".popover-body",_={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,INSERTED:"inserted"+i,CLICK:"click"+i,FOCUSIN:"focusin"+i,FOCUSOUT:"focusout"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i},g=function(r){var o,g;function p(){return r.apply(this,arguments)||this}g=r,(o=p).prototype=Object.create(g.prototype),o.prototype.constructor=o,o.__proto__=g;var m=p.prototype;return m.isWithContent=function(){return this.getTitle()||this._getContent()},m.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-popover-"+e)},m.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},m.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(f),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(e.find(d),n),e.removeClass(c+" "+u)},m._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},m._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(a);null!==n&&n.length>0&&e.removeClass(n.join(""))},p._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s="object"==typeof e?e:null;if((i||!/destroy|hide/.test(e))&&(i||(i=new p(this,s),t(this).data(n,i)),"string"==typeof e)){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(p,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return n}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return i}},{key:"DefaultType",get:function(){return h}}]),p}(U);return t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),K=function(t){var e="scrollspy",n="bs.scrollspy",i="."+n,o=t.fn[e],a={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},h={ACTIVATE:"activate"+i,SCROLL:"scroll"+i,LOAD_DATA_API:"load"+i+".data-api"},c="dropdown-item",u="active",f={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},d="offset",_="position",g=function(){function o(e,n){var i=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(n),this._selector=this._config.target+" "+f.NAV_LINKS+","+this._config.target+" "+f.LIST_ITEMS+","+this._config.target+" "+f.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(h.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var g=o.prototype;return g.refresh=function(){var e=this,n=this._scrollElement===this._scrollElement.window?d:_,i="auto"===this._config.method?n:this._config.method,s=i===_?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),t.makeArray(t(this._selector)).map(function(e){var n,r=P.getSelectorFromElement(e);if(r&&(n=t(r)[0]),n){var o=n.getBoundingClientRect();if(o.width||o.height)return[t(n)[i]().top+s,r]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},g.dispose=function(){t.removeData(this._element,n),t(this._scrollElement).off(i),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},g._getConfig=function(n){if("string"!=typeof(n=r({},a,n)).target){var i=t(n.target).attr("id");i||(i=P.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}return P.typeCheckConfig(e,n,l),n},g._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},g._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},g._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},g._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var s=this._offsets.length;s--;){this._activeTarget!==this._targets[s]&&t>=this._offsets[s]&&("undefined"==typeof this._offsets[s+1]||t<this._offsets[s+1])&&this._activate(this._targets[s])}}},g._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var i=t(n.join(","));i.hasClass(c)?(i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u),i.addClass(u)):(i.addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS+", "+f.LIST_ITEMS).addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)),t(this._scrollElement).trigger(h.ACTIVATE,{relatedTarget:e})},g._clear=function(){t(this._selector).filter(f.ACTIVE).removeClass(u)},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n);if(i||(i=new o(this,"object"==typeof e&&e),t(this).data(n,i)),"string"==typeof e){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(window).on(h.LOAD_DATA_API,function(){for(var e=t.makeArray(t(f.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);g._jQueryInterface.call(i,i.data())}}),t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),V=function(t){var e="bs.tab",n="."+e,i=t.fn.tab,r={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,CLICK_DATA_API:"click.bs.tab.data-api"},o="dropdown-menu",a="active",l="disabled",h="fade",c="show",u=".dropdown",f=".nav, .list-group",d=".active",_="> li > .active",g='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',p=".dropdown-toggle",m="> .dropdown-menu .active",v=function(){function n(t){this._element=t}var i=n.prototype;return i.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(a)||t(this._element).hasClass(l))){var n,i,s=t(this._element).closest(f)[0],o=P.getSelectorFromElement(this._element);if(s){var h="UL"===s.nodeName?_:d;i=(i=t.makeArray(t(s).find(h)))[i.length-1]}var c=t.Event(r.HIDE,{relatedTarget:this._element}),u=t.Event(r.SHOW,{relatedTarget:i});if(i&&t(i).trigger(c),t(this._element).trigger(u),!u.isDefaultPrevented()&&!c.isDefaultPrevented()){o&&(n=t(o)[0]),this._activate(this._element,s);var g=function(){var n=t.Event(r.HIDDEN,{relatedTarget:e._element}),s=t.Event(r.SHOWN,{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(s)};n?this._activate(n,n.parentNode,g):g()}}},i.dispose=function(){t.removeData(this._element,e),this._element=null},i._activate=function(e,n,i){var s=this,r=("UL"===n.nodeName?t(n).find(_):t(n).children(d))[0],o=i&&P.supportsTransitionEnd()&&r&&t(r).hasClass(h),a=function(){return s._transitionComplete(e,r,i)};r&&o?t(r).one(P.TRANSITION_END,a).emulateTransitionEnd(150):a()},i._transitionComplete=function(e,n,i){if(n){t(n).removeClass(c+" "+a);var s=t(n.parentNode).find(m)[0];s&&t(s).removeClass(a),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(t(e).addClass(a),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),P.reflow(e),t(e).addClass(c),e.parentNode&&t(e.parentNode).hasClass(o)){var r=t(e).closest(u)[0];r&&t(r).find(p).addClass(a),e.setAttribute("aria-expanded",!0)}i&&i()},n._jQueryInterface=function(i){return this.each(function(){var s=t(this),r=s.data(e);if(r||(r=new n(this),s.data(e,r)),"string"==typeof i){if("undefined"==typeof r[i])throw new TypeError('No method named "'+i+'"');r[i]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),n}();return t(document).on(r.CLICK_DATA_API,g,function(e){e.preventDefault(),v._jQueryInterface.call(t(this),"show")}),t.fn.tab=v._jQueryInterface,t.fn.tab.Constructor=v,t.fn.tab.noConflict=function(){return t.fn.tab=i,v._jQueryInterface},v}(e);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=P,t.Alert=L,t.Button=R,t.Carousel=j,t.Collapse=H,t.Dropdown=W,t.Modal=M,t.Popover=x,t.Scrollspy=K,t.Tab=V,t.Tooltip=U,Object.defineProperty(t,"__esModule",{value:!0})});;;
/*! jQuery UI - v1.12.1 - 2016-09-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory);}else{factory(jQuery);}}(function($){$.ui=$.ui||{};var version=$.ui.version="1.12.1";
/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var widgetUuid=0;var widgetSlice=Array.prototype.slice;$.cleanData=(function(orig){return function(elems){var events,elem,i;for(i=0;(elem=elems[i])!=null;i++){try{events=$._data(elem,"events");if(events&&events.remove){$(elem).triggerHandler("remove");}}catch(e){}}
orig(elems);};})($.cleanData);$.widget=function(name,base,prototype){var existingConstructor,constructor,basePrototype;var proxiedPrototype={};var namespace=name.split(".")[0];name=name.split(".")[1];var fullName=namespace+"-"+name;if(!prototype){prototype=base;base=$.Widget;}
if($.isArray(prototype)){prototype=$.extend.apply(null,[{}].concat(prototype));}
$.expr[":"][fullName.toLowerCase()]=function(elem){return!!$.data(elem,fullName);};$[namespace]=$[namespace]||{};existingConstructor=$[namespace][name];constructor=$[namespace][name]=function(options,element){if(!this._createWidget){return new constructor(options,element);}
if(arguments.length){this._createWidget(options,element);}};$.extend(constructor,existingConstructor,{version:prototype.version,_proto:$.extend({},prototype),_childConstructors:[]});basePrototype=new base();basePrototype.options=$.widget.extend({},basePrototype.options);$.each(prototype,function(prop,value){if(!$.isFunction(value)){proxiedPrototype[prop]=value;return;}
proxiedPrototype[prop]=(function(){function _super(){return base.prototype[prop].apply(this,arguments);}
function _superApply(args){return base.prototype[prop].apply(this,args);}
return function(){var __super=this._super;var __superApply=this._superApply;var returnValue;this._super=_super;this._superApply=_superApply;returnValue=value.apply(this,arguments);this._super=__super;this._superApply=__superApply;return returnValue;};})();});constructor.prototype=$.widget.extend(basePrototype,{widgetEventPrefix:existingConstructor?(basePrototype.widgetEventPrefix||name):name},proxiedPrototype,{constructor:constructor,namespace:namespace,widgetName:name,widgetFullName:fullName});if(existingConstructor){$.each(existingConstructor._childConstructors,function(i,child){var childPrototype=child.prototype;$.widget(childPrototype.namespace+"."+childPrototype.widgetName,constructor,child._proto);});delete existingConstructor._childConstructors;}else{base._childConstructors.push(constructor);}
$.widget.bridge(name,constructor);return constructor;};$.widget.extend=function(target){var input=widgetSlice.call(arguments,1);var inputIndex=0;var inputLength=input.length;var key;var value;for(;inputIndex<inputLength;inputIndex++){for(key in input[inputIndex]){value=input[inputIndex][key];if(input[inputIndex].hasOwnProperty(key)&&value!==undefined){if($.isPlainObject(value)){target[key]=$.isPlainObject(target[key])?$.widget.extend({},target[key],value):$.widget.extend({},value);}else{target[key]=value;}}}}
return target;};$.widget.bridge=function(name,object){var fullName=object.prototype.widgetFullName||name;$.fn[name]=function(options){var isMethodCall=typeof options==="string";var args=widgetSlice.call(arguments,1);var returnValue=this;if(isMethodCall){if(!this.length&&options==="instance"){returnValue=undefined;}else{this.each(function(){var methodValue;var instance=$.data(this,fullName);if(options==="instance"){returnValue=instance;return false;}
if(!instance){return $.error("cannot call methods on "+name+" prior to initialization; "+"attempted to call method '"+options+"'");}
if(!$.isFunction(instance[options])||options.charAt(0)==="_"){return $.error("no such method '"+options+"' for "+name+" widget instance");}
methodValue=instance[options].apply(instance,args);if(methodValue!==instance&&methodValue!==undefined){returnValue=methodValue&&methodValue.jquery?returnValue.pushStack(methodValue.get()):methodValue;return false;}});}}else{if(args.length){options=$.widget.extend.apply(null,[options].concat(args));}
this.each(function(){var instance=$.data(this,fullName);if(instance){instance.option(options||{});if(instance._init){instance._init();}}else{$.data(this,fullName,new object(options,this));}});}
return returnValue;};};$.Widget=function(){};$.Widget._childConstructors=[];$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:false,create:null},_createWidget:function(options,element){element=$(element||this.defaultElement||this)[0];this.element=$(element);this.uuid=widgetUuid++;this.eventNamespace="."+this.widgetName+this.uuid;this.bindings=$();this.hoverable=$();this.focusable=$();this.classesElementLookup={};if(element!==this){$.data(element,this.widgetFullName,this);this._on(true,this.element,{remove:function(event){if(event.target===element){this.destroy();}}});this.document=$(element.style?element.ownerDocument:element.document||element);this.window=$(this.document[0].defaultView||this.document[0].parentWindow);}
this.options=$.widget.extend({},this.options,this._getCreateOptions(),options);this._create();if(this.options.disabled){this._setOptionDisabled(this.options.disabled);}
this._trigger("create",null,this._getCreateEventData());this._init();},_getCreateOptions:function(){return{};},_getCreateEventData:$.noop,_create:$.noop,_init:$.noop,destroy:function(){var that=this;this._destroy();$.each(this.classesElementLookup,function(key,value){that._removeClass(value,key);});this.element.off(this.eventNamespace).removeData(this.widgetFullName);this.widget().off(this.eventNamespace).removeAttr("aria-disabled");this.bindings.off(this.eventNamespace);},_destroy:$.noop,widget:function(){return this.element;},option:function(key,value){var options=key;var parts;var curOption;var i;if(arguments.length===0){return $.widget.extend({},this.options);}
if(typeof key==="string"){options={};parts=key.split(".");key=parts.shift();if(parts.length){curOption=options[key]=$.widget.extend({},this.options[key]);for(i=0;i<parts.length-1;i++){curOption[parts[i]]=curOption[parts[i]]||{};curOption=curOption[parts[i]];}
key=parts.pop();if(arguments.length===1){return curOption[key]===undefined?null:curOption[key];}
curOption[key]=value;}else{if(arguments.length===1){return this.options[key]===undefined?null:this.options[key];}
options[key]=value;}}
this._setOptions(options);return this;},_setOptions:function(options){var key;for(key in options){this._setOption(key,options[key]);}
return this;},_setOption:function(key,value){if(key==="classes"){this._setOptionClasses(value);}
this.options[key]=value;if(key==="disabled"){this._setOptionDisabled(value);}
return this;},_setOptionClasses:function(value){var classKey,elements,currentElements;for(classKey in value){currentElements=this.classesElementLookup[classKey];if(value[classKey]===this.options.classes[classKey]||!currentElements||!currentElements.length){continue;}
elements=$(currentElements.get());this._removeClass(currentElements,classKey);elements.addClass(this._classes({element:elements,keys:classKey,classes:value,add:true}));}},_setOptionDisabled:function(value){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!value);if(value){this._removeClass(this.hoverable,null,"ui-state-hover");this._removeClass(this.focusable,null,"ui-state-focus");}},enable:function(){return this._setOptions({disabled:false});},disable:function(){return this._setOptions({disabled:true});},_classes:function(options){var full=[];var that=this;options=$.extend({element:this.element,classes:this.options.classes||{}},options);function processClassString(classes,checkOption){var current,i;for(i=0;i<classes.length;i++){current=that.classesElementLookup[classes[i]]||$();if(options.add){current=$($.unique(current.get().concat(options.element.get())));}else{current=$(current.not(options.element).get());}
that.classesElementLookup[classes[i]]=current;full.push(classes[i]);if(checkOption&&options.classes[classes[i]]){full.push(options.classes[classes[i]]);}}}
this._on(options.element,{"remove":"_untrackClassesElement"});if(options.keys){processClassString(options.keys.match(/\S+/g)||[],true);}
if(options.extra){processClassString(options.extra.match(/\S+/g)||[]);}
return full.join(" ");},_untrackClassesElement:function(event){var that=this;$.each(that.classesElementLookup,function(key,value){if($.inArray(event.target,value)!==-1){that.classesElementLookup[key]=$(value.not(event.target).get());}});},_removeClass:function(element,keys,extra){return this._toggleClass(element,keys,extra,false);},_addClass:function(element,keys,extra){return this._toggleClass(element,keys,extra,true);},_toggleClass:function(element,keys,extra,add){add=(typeof add==="boolean")?add:extra;var shift=(typeof element==="string"||element===null),options={extra:shift?keys:extra,keys:shift?element:keys,element:shift?this.element:element,add:add};options.element.toggleClass(this._classes(options),add);return this;},_on:function(suppressDisabledCheck,element,handlers){var delegateElement;var instance=this;if(typeof suppressDisabledCheck!=="boolean"){handlers=element;element=suppressDisabledCheck;suppressDisabledCheck=false;}
if(!handlers){handlers=element;element=this.element;delegateElement=this.widget();}else{element=delegateElement=$(element);this.bindings=this.bindings.add(element);}
$.each(handlers,function(event,handler){function handlerProxy(){if(!suppressDisabledCheck&&(instance.options.disabled===true||$(this).hasClass("ui-state-disabled"))){return;}
return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments);}
if(typeof handler!=="string"){handlerProxy.guid=handler.guid=handler.guid||handlerProxy.guid||$.guid++;}
var match=event.match(/^([\w:-]*)\s*(.*)$/);var eventName=match[1]+instance.eventNamespace;var selector=match[2];if(selector){delegateElement.on(eventName,selector,handlerProxy);}else{element.on(eventName,handlerProxy);}});},_off:function(element,eventName){eventName=(eventName||"").split(" ").join(this.eventNamespace+" ")+
this.eventNamespace;element.off(eventName).off(eventName);this.bindings=$(this.bindings.not(element).get());this.focusable=$(this.focusable.not(element).get());this.hoverable=$(this.hoverable.not(element).get());},_delay:function(handler,delay){function handlerProxy(){return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments);}
var instance=this;return setTimeout(handlerProxy,delay||0);},_hoverable:function(element){this.hoverable=this.hoverable.add(element);this._on(element,{mouseenter:function(event){this._addClass($(event.currentTarget),null,"ui-state-hover");},mouseleave:function(event){this._removeClass($(event.currentTarget),null,"ui-state-hover");}});},_focusable:function(element){this.focusable=this.focusable.add(element);this._on(element,{focusin:function(event){this._addClass($(event.currentTarget),null,"ui-state-focus");},focusout:function(event){this._removeClass($(event.currentTarget),null,"ui-state-focus");}});},_trigger:function(type,event,data){var prop,orig;var callback=this.options[type];data=data||{};event=$.Event(event);event.type=(type===this.widgetEventPrefix?type:this.widgetEventPrefix+type).toLowerCase();event.target=this.element[0];orig=event.originalEvent;if(orig){for(prop in orig){if(!(prop in event)){event[prop]=orig[prop];}}}
this.element.trigger(event,data);return!($.isFunction(callback)&&callback.apply(this.element[0],[event].concat(data))===false||event.isDefaultPrevented());}};$.each({show:"fadeIn",hide:"fadeOut"},function(method,defaultEffect){$.Widget.prototype["_"+method]=function(element,options,callback){if(typeof options==="string"){options={effect:options};}
var hasOptions;var effectName=!options?method:options===true||typeof options==="number"?defaultEffect:options.effect||defaultEffect;options=options||{};if(typeof options==="number"){options={duration:options};}
hasOptions=!$.isEmptyObject(options);options.complete=callback;if(options.delay){element.delay(options.delay);}
if(hasOptions&&$.effects&&$.effects.effect[effectName]){element[method](options);}else if(effectName!==method&&element[effectName]){element[effectName](options.duration,options.easing,callback);}else{element.queue(function(next){$(this)[method]();if(callback){callback.call(element[0]);}
next();});}};});var widget=$.widget;
/*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
(function(){var cachedScrollbarWidth,max=Math.max,abs=Math.abs,rhorizontal=/left|center|right/,rvertical=/top|center|bottom/,roffset=/[\+\-]\d+(\.[\d]+)?%?/,rposition=/^\w+/,rpercent=/%$/,_position=$.fn.position;function getOffsets(offsets,width,height){return[parseFloat(offsets[0])*(rpercent.test(offsets[0])?width / 100:1),parseFloat(offsets[1])*(rpercent.test(offsets[1])?height / 100:1)];}
function parseCss(element,property){return parseInt($.css(element,property),10)||0;}
function getDimensions(elem){var raw=elem[0];if(raw.nodeType===9){return{width:elem.width(),height:elem.height(),offset:{top:0,left:0}};}
if($.isWindow(raw)){return{width:elem.width(),height:elem.height(),offset:{top:elem.scrollTop(),left:elem.scrollLeft()}};}
if(raw.preventDefault){return{width:0,height:0,offset:{top:raw.pageY,left:raw.pageX}};}
return{width:elem.outerWidth(),height:elem.outerHeight(),offset:elem.offset()};}
$.position={scrollbarWidth:function(){if(cachedScrollbarWidth!==undefined){return cachedScrollbarWidth;}
var w1,w2,div=$("<div "+"style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>"+"<div style='height:100px;width:auto;'></div></div>"),innerDiv=div.children()[0];$("body").append(div);w1=innerDiv.offsetWidth;div.css("overflow","scroll");w2=innerDiv.offsetWidth;if(w1===w2){w2=div[0].clientWidth;}
div.remove();return(cachedScrollbarWidth=w1-w2);},getScrollInfo:function(within){var overflowX=within.isWindow||within.isDocument?"":within.element.css("overflow-x"),overflowY=within.isWindow||within.isDocument?"":within.element.css("overflow-y"),hasOverflowX=overflowX==="scroll"||(overflowX==="auto"&&within.width<within.element[0].scrollWidth),hasOverflowY=overflowY==="scroll"||(overflowY==="auto"&&within.height<within.element[0].scrollHeight);return{width:hasOverflowY?$.position.scrollbarWidth():0,height:hasOverflowX?$.position.scrollbarWidth():0};},getWithinInfo:function(element){var withinElement=$(element||window),isWindow=$.isWindow(withinElement[0]),isDocument=!!withinElement[0]&&withinElement[0].nodeType===9,hasOffset=!isWindow&&!isDocument;return{element:withinElement,isWindow:isWindow,isDocument:isDocument,offset:hasOffset?$(element).offset():{left:0,top:0},scrollLeft:withinElement.scrollLeft(),scrollTop:withinElement.scrollTop(),width:withinElement.outerWidth(),height:withinElement.outerHeight()};}};$.fn.position=function(options){if(!options||!options.of){return _position.apply(this,arguments);}
options=$.extend({},options);var atOffset,targetWidth,targetHeight,targetOffset,basePosition,dimensions,target=$(options.of),within=$.position.getWithinInfo(options.within),scrollInfo=$.position.getScrollInfo(within),collision=(options.collision||"flip").split(" "),offsets={};dimensions=getDimensions(target);if(target[0].preventDefault){options.at="left top";}
targetWidth=dimensions.width;targetHeight=dimensions.height;targetOffset=dimensions.offset;basePosition=$.extend({},targetOffset);$.each(["my","at"],function(){var pos=(options[this]||"").split(" "),horizontalOffset,verticalOffset;if(pos.length===1){pos=rhorizontal.test(pos[0])?pos.concat(["center"]):rvertical.test(pos[0])?["center"].concat(pos):["center","center"];}
pos[0]=rhorizontal.test(pos[0])?pos[0]:"center";pos[1]=rvertical.test(pos[1])?pos[1]:"center";horizontalOffset=roffset.exec(pos[0]);verticalOffset=roffset.exec(pos[1]);offsets[this]=[horizontalOffset?horizontalOffset[0]:0,verticalOffset?verticalOffset[0]:0];options[this]=[rposition.exec(pos[0])[0],rposition.exec(pos[1])[0]];});if(collision.length===1){collision[1]=collision[0];}
if(options.at[0]==="right"){basePosition.left+=targetWidth;}else if(options.at[0]==="center"){basePosition.left+=targetWidth / 2;}
if(options.at[1]==="bottom"){basePosition.top+=targetHeight;}else if(options.at[1]==="center"){basePosition.top+=targetHeight / 2;}
atOffset=getOffsets(offsets.at,targetWidth,targetHeight);basePosition.left+=atOffset[0];basePosition.top+=atOffset[1];return this.each(function(){var collisionPosition,using,elem=$(this),elemWidth=elem.outerWidth(),elemHeight=elem.outerHeight(),marginLeft=parseCss(this,"marginLeft"),marginTop=parseCss(this,"marginTop"),collisionWidth=elemWidth+marginLeft+parseCss(this,"marginRight")+
scrollInfo.width,collisionHeight=elemHeight+marginTop+parseCss(this,"marginBottom")+
scrollInfo.height,position=$.extend({},basePosition),myOffset=getOffsets(offsets.my,elem.outerWidth(),elem.outerHeight());if(options.my[0]==="right"){position.left-=elemWidth;}else if(options.my[0]==="center"){position.left-=elemWidth / 2;}
if(options.my[1]==="bottom"){position.top-=elemHeight;}else if(options.my[1]==="center"){position.top-=elemHeight / 2;}
position.left+=myOffset[0];position.top+=myOffset[1];collisionPosition={marginLeft:marginLeft,marginTop:marginTop};$.each(["left","top"],function(i,dir){if($.ui.position[collision[i]]){$.ui.position[collision[i]][dir](position,{targetWidth:targetWidth,targetHeight:targetHeight,elemWidth:elemWidth,elemHeight:elemHeight,collisionPosition:collisionPosition,collisionWidth:collisionWidth,collisionHeight:collisionHeight,offset:[atOffset[0]+myOffset[0],atOffset[1]+myOffset[1]],my:options.my,at:options.at,within:within,elem:elem});}});if(options.using){using=function(props){var left=targetOffset.left-position.left,right=left+targetWidth-elemWidth,top=targetOffset.top-position.top,bottom=top+targetHeight-elemHeight,feedback={target:{element:target,left:targetOffset.left,top:targetOffset.top,width:targetWidth,height:targetHeight},element:{element:elem,left:position.left,top:position.top,width:elemWidth,height:elemHeight},horizontal:right<0?"left":left>0?"right":"center",vertical:bottom<0?"top":top>0?"bottom":"middle"};if(targetWidth<elemWidth&&abs(left+right)<targetWidth){feedback.horizontal="center";}
if(targetHeight<elemHeight&&abs(top+bottom)<targetHeight){feedback.vertical="middle";}
if(max(abs(left),abs(right))>max(abs(top),abs(bottom))){feedback.important="horizontal";}else{feedback.important="vertical";}
options.using.call(this,props,feedback);};}
elem.offset($.extend(position,{using:using}));});};$.ui.position={fit:{left:function(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollLeft:within.offset.left,outerWidth=within.width,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=withinOffset-collisionPosLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-withinOffset,newOverRight;if(data.collisionWidth>outerWidth){if(overLeft>0&&overRight<=0){newOverRight=position.left+overLeft+data.collisionWidth-outerWidth-
withinOffset;position.left+=overLeft-newOverRight;}else if(overRight>0&&overLeft<=0){position.left=withinOffset;}else{if(overLeft>overRight){position.left=withinOffset+outerWidth-data.collisionWidth;}else{position.left=withinOffset;}}}else if(overLeft>0){position.left+=overLeft;}else if(overRight>0){position.left-=overRight;}else{position.left=max(position.left-collisionPosLeft,position.left);}},top:function(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollTop:within.offset.top,outerHeight=data.within.height,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=withinOffset-collisionPosTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-withinOffset,newOverBottom;if(data.collisionHeight>outerHeight){if(overTop>0&&overBottom<=0){newOverBottom=position.top+overTop+data.collisionHeight-outerHeight-
withinOffset;position.top+=overTop-newOverBottom;}else if(overBottom>0&&overTop<=0){position.top=withinOffset;}else{if(overTop>overBottom){position.top=withinOffset+outerHeight-data.collisionHeight;}else{position.top=withinOffset;}}}else if(overTop>0){position.top+=overTop;}else if(overBottom>0){position.top-=overBottom;}else{position.top=max(position.top-collisionPosTop,position.top);}}},flip:{left:function(position,data){var within=data.within,withinOffset=within.offset.left+within.scrollLeft,outerWidth=within.width,offsetLeft=within.isWindow?within.scrollLeft:within.offset.left,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=collisionPosLeft-offsetLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-offsetLeft,myOffset=data.my[0]==="left"?-data.elemWidth:data.my[0]==="right"?data.elemWidth:0,atOffset=data.at[0]==="left"?data.targetWidth:data.at[0]==="right"?-data.targetWidth:0,offset=-2*data.offset[0],newOverRight,newOverLeft;if(overLeft<0){newOverRight=position.left+myOffset+atOffset+offset+data.collisionWidth-
outerWidth-withinOffset;if(newOverRight<0||newOverRight<abs(overLeft)){position.left+=myOffset+atOffset+offset;}}else if(overRight>0){newOverLeft=position.left-data.collisionPosition.marginLeft+myOffset+
atOffset+offset-offsetLeft;if(newOverLeft>0||abs(newOverLeft)<overRight){position.left+=myOffset+atOffset+offset;}}},top:function(position,data){var within=data.within,withinOffset=within.offset.top+within.scrollTop,outerHeight=within.height,offsetTop=within.isWindow?within.scrollTop:within.offset.top,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=collisionPosTop-offsetTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-offsetTop,top=data.my[1]==="top",myOffset=top?-data.elemHeight:data.my[1]==="bottom"?data.elemHeight:0,atOffset=data.at[1]==="top"?data.targetHeight:data.at[1]==="bottom"?-data.targetHeight:0,offset=-2*data.offset[1],newOverTop,newOverBottom;if(overTop<0){newOverBottom=position.top+myOffset+atOffset+offset+data.collisionHeight-
outerHeight-withinOffset;if(newOverBottom<0||newOverBottom<abs(overTop)){position.top+=myOffset+atOffset+offset;}}else if(overBottom>0){newOverTop=position.top-data.collisionPosition.marginTop+myOffset+atOffset+
offset-offsetTop;if(newOverTop>0||abs(newOverTop)<overBottom){position.top+=myOffset+atOffset+offset;}}}},flipfit:{left:function(){$.ui.position.flip.left.apply(this,arguments);$.ui.position.fit.left.apply(this,arguments);},top:function(){$.ui.position.flip.top.apply(this,arguments);$.ui.position.fit.top.apply(this,arguments);}}};})();var position=$.ui.position;
/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var data=$.extend($.expr[":"],{data:$.expr.createPseudo?$.expr.createPseudo(function(dataName){return function(elem){return!!$.data(elem,dataName);};}):function(elem,i,match){return!!$.data(elem,match[3]);}});
/*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var disableSelection=$.fn.extend({disableSelection:(function(){var eventType="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(eventType+".ui-disableSelection",function(event){event.preventDefault();});};})(),enableSelection:function(){return this.off(".ui-disableSelection");}});
/*!
 * jQuery UI Effects 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var dataSpace="ui-effects-",dataSpaceStyle="ui-effects-style",dataSpaceAnimated="ui-effects-animated",jQuery=$;$.effects={effect:{}};
/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(function(jQuery,undefined){var stepHooks="backgroundColor borderBottomColor borderLeftColor borderRightColor "+"borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",rplusequals=/^([\-+])=\s*(\d+\.?\d*)/,stringParsers=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[execResult[1],execResult[2],execResult[3],execResult[4]];}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[execResult[1]*2.55,execResult[2]*2.55,execResult[3]*2.55,execResult[4]];}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(execResult){return[parseInt(execResult[1],16),parseInt(execResult[2],16),parseInt(execResult[3],16)];}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(execResult){return[parseInt(execResult[1]+execResult[1],16),parseInt(execResult[2]+execResult[2],16),parseInt(execResult[3]+execResult[3],16)];}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(execResult){return[execResult[1],execResult[2]/ 100,execResult[3]/ 100,execResult[4]];}}],color=jQuery.Color=function(color,green,blue,alpha){return new jQuery.Color.fn.parse(color,green,blue,alpha);},spaces={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},propTypes={"byte":{floor:true,max:255},"percent":{max:1},"degrees":{mod:360,floor:true}},support=color.support={},supportElem=jQuery("<p>")[0],colors,each=jQuery.each;supportElem.style.cssText="background-color:rgba(1,1,1,.5)";support.rgba=supportElem.style.backgroundColor.indexOf("rgba")>-1;each(spaces,function(spaceName,space){space.cache="_"+spaceName;space.props.alpha={idx:3,type:"percent",def:1};});function clamp(value,prop,allowEmpty){var type=propTypes[prop.type]||{};if(value==null){return(allowEmpty||!prop.def)?null:prop.def;}
value=type.floor?~~value:parseFloat(value);if(isNaN(value)){return prop.def;}
if(type.mod){return(value+type.mod)%type.mod;}
return 0>value?0:type.max<value?type.max:value;}
function stringParse(string){var inst=color(),rgba=inst._rgba=[];string=string.toLowerCase();each(stringParsers,function(i,parser){var parsed,match=parser.re.exec(string),values=match&&parser.parse(match),spaceName=parser.space||"rgba";if(values){parsed=inst[spaceName](values);inst[spaces[spaceName].cache]=parsed[spaces[spaceName].cache];rgba=inst._rgba=parsed._rgba;return false;}});if(rgba.length){if(rgba.join()==="0,0,0,0"){jQuery.extend(rgba,colors.transparent);}
return inst;}
return colors[string];}
color.fn=jQuery.extend(color.prototype,{parse:function(red,green,blue,alpha){if(red===undefined){this._rgba=[null,null,null,null];return this;}
if(red.jquery||red.nodeType){red=jQuery(red).css(green);green=undefined;}
var inst=this,type=jQuery.type(red),rgba=this._rgba=[];if(green!==undefined){red=[red,green,blue,alpha];type="array";}
if(type==="string"){return this.parse(stringParse(red)||colors._default);}
if(type==="array"){each(spaces.rgba.props,function(key,prop){rgba[prop.idx]=clamp(red[prop.idx],prop);});return this;}
if(type==="object"){if(red instanceof color){each(spaces,function(spaceName,space){if(red[space.cache]){inst[space.cache]=red[space.cache].slice();}});}else{each(spaces,function(spaceName,space){var cache=space.cache;each(space.props,function(key,prop){if(!inst[cache]&&space.to){if(key==="alpha"||red[key]==null){return;}
inst[cache]=space.to(inst._rgba);}
inst[cache][prop.idx]=clamp(red[key],prop,true);});if(inst[cache]&&jQuery.inArray(null,inst[cache].slice(0,3))<0){inst[cache][3]=1;if(space.from){inst._rgba=space.from(inst[cache]);}}});}
return this;}},is:function(compare){var is=color(compare),same=true,inst=this;each(spaces,function(_,space){var localCache,isCache=is[space.cache];if(isCache){localCache=inst[space.cache]||space.to&&space.to(inst._rgba)||[];each(space.props,function(_,prop){if(isCache[prop.idx]!=null){same=(isCache[prop.idx]===localCache[prop.idx]);return same;}});}
return same;});return same;},_space:function(){var used=[],inst=this;each(spaces,function(spaceName,space){if(inst[space.cache]){used.push(spaceName);}});return used.pop();},transition:function(other,distance){var end=color(other),spaceName=end._space(),space=spaces[spaceName],startColor=this.alpha()===0?color("transparent"):this,start=startColor[space.cache]||space.to(startColor._rgba),result=start.slice();end=end[space.cache];each(space.props,function(key,prop){var index=prop.idx,startValue=start[index],endValue=end[index],type=propTypes[prop.type]||{};if(endValue===null){return;}
if(startValue===null){result[index]=endValue;}else{if(type.mod){if(endValue-startValue>type.mod / 2){startValue+=type.mod;}else if(startValue-endValue>type.mod / 2){startValue-=type.mod;}}
result[index]=clamp((endValue-startValue)*distance+startValue,prop);}});return this[spaceName](result);},blend:function(opaque){if(this._rgba[3]===1){return this;}
var rgb=this._rgba.slice(),a=rgb.pop(),blend=color(opaque)._rgba;return color(jQuery.map(rgb,function(v,i){return(1-a)*blend[i]+a*v;}));},toRgbaString:function(){var prefix="rgba(",rgba=jQuery.map(this._rgba,function(v,i){return v==null?(i>2?1:0):v;});if(rgba[3]===1){rgba.pop();prefix="rgb(";}
return prefix+rgba.join()+")";},toHslaString:function(){var prefix="hsla(",hsla=jQuery.map(this.hsla(),function(v,i){if(v==null){v=i>2?1:0;}
if(i&&i<3){v=Math.round(v*100)+"%";}
return v;});if(hsla[3]===1){hsla.pop();prefix="hsl(";}
return prefix+hsla.join()+")";},toHexString:function(includeAlpha){var rgba=this._rgba.slice(),alpha=rgba.pop();if(includeAlpha){rgba.push(~~(alpha*255));}
return"#"+jQuery.map(rgba,function(v){v=(v||0).toString(16);return v.length===1?"0"+v:v;}).join("");},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString();}});color.fn.parse.prototype=color.fn;function hue2rgb(p,q,h){h=(h+1)%1;if(h*6<1){return p+(q-p)*h*6;}
if(h*2<1){return q;}
if(h*3<2){return p+(q-p)*((2 / 3)-h)*6;}
return p;}
spaces.hsla.to=function(rgba){if(rgba[0]==null||rgba[1]==null||rgba[2]==null){return[null,null,null,rgba[3]];}
var r=rgba[0]/ 255,g=rgba[1]/ 255,b=rgba[2]/ 255,a=rgba[3],max=Math.max(r,g,b),min=Math.min(r,g,b),diff=max-min,add=max+min,l=add*0.5,h,s;if(min===max){h=0;}else if(r===max){h=(60*(g-b)/ diff)+360;}else if(g===max){h=(60*(b-r)/ diff)+120;}else{h=(60*(r-g)/ diff)+240;}
if(diff===0){s=0;}else if(l<=0.5){s=diff / add;}else{s=diff /(2-add);}
return[Math.round(h)%360,s,l,a==null?1:a];};spaces.hsla.from=function(hsla){if(hsla[0]==null||hsla[1]==null||hsla[2]==null){return[null,null,null,hsla[3]];}
var h=hsla[0]/ 360,s=hsla[1],l=hsla[2],a=hsla[3],q=l<=0.5?l*(1+s):l+s-l*s,p=2*l-q;return[Math.round(hue2rgb(p,q,h+(1 / 3))*255),Math.round(hue2rgb(p,q,h)*255),Math.round(hue2rgb(p,q,h-(1 / 3))*255),a];};each(spaces,function(spaceName,space){var props=space.props,cache=space.cache,to=space.to,from=space.from;color.fn[spaceName]=function(value){if(to&&!this[cache]){this[cache]=to(this._rgba);}
if(value===undefined){return this[cache].slice();}
var ret,type=jQuery.type(value),arr=(type==="array"||type==="object")?value:arguments,local=this[cache].slice();each(props,function(key,prop){var val=arr[type==="object"?key:prop.idx];if(val==null){val=local[prop.idx];}
local[prop.idx]=clamp(val,prop);});if(from){ret=color(from(local));ret[cache]=local;return ret;}else{return color(local);}};each(props,function(key,prop){if(color.fn[key]){return;}
color.fn[key]=function(value){var vtype=jQuery.type(value),fn=(key==="alpha"?(this._hsla?"hsla":"rgba"):spaceName),local=this[fn](),cur=local[prop.idx],match;if(vtype==="undefined"){return cur;}
if(vtype==="function"){value=value.call(this,cur);vtype=jQuery.type(value);}
if(value==null&&prop.empty){return this;}
if(vtype==="string"){match=rplusequals.exec(value);if(match){value=cur+parseFloat(match[2])*(match[1]==="+"?1:-1);}}
local[prop.idx]=value;return this[fn](local);};});});color.hook=function(hook){var hooks=hook.split(" ");each(hooks,function(i,hook){jQuery.cssHooks[hook]={set:function(elem,value){var parsed,curElem,backgroundColor="";if(value!=="transparent"&&(jQuery.type(value)!=="string"||(parsed=stringParse(value)))){value=color(parsed||value);if(!support.rgba&&value._rgba[3]!==1){curElem=hook==="backgroundColor"?elem.parentNode:elem;while((backgroundColor===""||backgroundColor==="transparent")&&curElem&&curElem.style){try{backgroundColor=jQuery.css(curElem,"backgroundColor");curElem=curElem.parentNode;}catch(e){}}
value=value.blend(backgroundColor&&backgroundColor!=="transparent"?backgroundColor:"_default");}
value=value.toRgbaString();}
try{elem.style[hook]=value;}catch(e){}}};jQuery.fx.step[hook]=function(fx){if(!fx.colorInit){fx.start=color(fx.elem,hook);fx.end=color(fx.end);fx.colorInit=true;}
jQuery.cssHooks[hook].set(fx.elem,fx.start.transition(fx.end,fx.pos));};});};color.hook(stepHooks);jQuery.cssHooks.borderColor={expand:function(value){var expanded={};each(["Top","Right","Bottom","Left"],function(i,part){expanded["border"+part+"Color"]=value;});return expanded;}};colors=jQuery.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"};})(jQuery);(function(){var classAnimationActions=["add","remove","toggle"],shorthandStyles={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};$.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(_,prop){$.fx.step[prop]=function(fx){if(fx.end!=="none"&&!fx.setAttr||fx.pos===1&&!fx.setAttr){jQuery.style(fx.elem,prop,fx.end);fx.setAttr=true;}};});function getElementStyles(elem){var key,len,style=elem.ownerDocument.defaultView?elem.ownerDocument.defaultView.getComputedStyle(elem,null):elem.currentStyle,styles={};if(style&&style.length&&style[0]&&style[style[0]]){len=style.length;while(len--){key=style[len];if(typeof style[key]==="string"){styles[$.camelCase(key)]=style[key];}}}else{for(key in style){if(typeof style[key]==="string"){styles[key]=style[key];}}}
return styles;}
function styleDifference(oldStyle,newStyle){var diff={},name,value;for(name in newStyle){value=newStyle[name];if(oldStyle[name]!==value){if(!shorthandStyles[name]){if($.fx.step[name]||!isNaN(parseFloat(value))){diff[name]=value;}}}}
return diff;}
if(!$.fn.addBack){$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));};}
$.effects.animateClass=function(value,duration,easing,callback){var o=$.speed(duration,easing,callback);return this.queue(function(){var animated=$(this),baseClass=animated.attr("class")||"",applyClassChange,allAnimations=o.children?animated.find("*").addBack():animated;allAnimations=allAnimations.map(function(){var el=$(this);return{el:el,start:getElementStyles(this)};});applyClassChange=function(){$.each(classAnimationActions,function(i,action){if(value[action]){animated[action+"Class"](value[action]);}});};applyClassChange();allAnimations=allAnimations.map(function(){this.end=getElementStyles(this.el[0]);this.diff=styleDifference(this.start,this.end);return this;});animated.attr("class",baseClass);allAnimations=allAnimations.map(function(){var styleInfo=this,dfd=$.Deferred(),opts=$.extend({},o,{queue:false,complete:function(){dfd.resolve(styleInfo);}});this.el.animate(this.diff,opts);return dfd.promise();});$.when.apply($,allAnimations.get()).done(function(){applyClassChange();$.each(arguments,function(){var el=this.el;$.each(this.diff,function(key){el.css(key,"");});});o.complete.call(animated[0]);});});};$.fn.extend({addClass:(function(orig){return function(classNames,speed,easing,callback){return speed?$.effects.animateClass.call(this,{add:classNames},speed,easing,callback):orig.apply(this,arguments);};})($.fn.addClass),removeClass:(function(orig){return function(classNames,speed,easing,callback){return arguments.length>1?$.effects.animateClass.call(this,{remove:classNames},speed,easing,callback):orig.apply(this,arguments);};})($.fn.removeClass),toggleClass:(function(orig){return function(classNames,force,speed,easing,callback){if(typeof force==="boolean"||force===undefined){if(!speed){return orig.apply(this,arguments);}else{return $.effects.animateClass.call(this,(force?{add:classNames}:{remove:classNames}),speed,easing,callback);}}else{return $.effects.animateClass.call(this,{toggle:classNames},force,speed,easing);}};})($.fn.toggleClass),switchClass:function(remove,add,speed,easing,callback){return $.effects.animateClass.call(this,{add:add,remove:remove},speed,easing,callback);}});})();(function(){if($.expr&&$.expr.filters&&$.expr.filters.animated){$.expr.filters.animated=(function(orig){return function(elem){return!!$(elem).data(dataSpaceAnimated)||orig(elem);};})($.expr.filters.animated);}
if($.uiBackCompat!==false){$.extend($.effects,{save:function(element,set){var i=0,length=set.length;for(;i<length;i++){if(set[i]!==null){element.data(dataSpace+set[i],element[0].style[set[i]]);}}},restore:function(element,set){var val,i=0,length=set.length;for(;i<length;i++){if(set[i]!==null){val=element.data(dataSpace+set[i]);element.css(set[i],val);}}},setMode:function(el,mode){if(mode==="toggle"){mode=el.is(":hidden")?"show":"hide";}
return mode;},createWrapper:function(element){if(element.parent().is(".ui-effects-wrapper")){return element.parent();}
var props={width:element.outerWidth(true),height:element.outerHeight(true),"float":element.css("float")},wrapper=$("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),size={width:element.width(),height:element.height()},active=document.activeElement;try{active.id;}catch(e){active=document.body;}
element.wrap(wrapper);if(element[0]===active||$.contains(element[0],active)){$(active).trigger("focus");}
wrapper=element.parent();if(element.css("position")==="static"){wrapper.css({position:"relative"});element.css({position:"relative"});}else{$.extend(props,{position:element.css("position"),zIndex:element.css("z-index")});$.each(["top","left","bottom","right"],function(i,pos){props[pos]=element.css(pos);if(isNaN(parseInt(props[pos],10))){props[pos]="auto";}});element.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"});}
element.css(size);return wrapper.css(props).show();},removeWrapper:function(element){var active=document.activeElement;if(element.parent().is(".ui-effects-wrapper")){element.parent().replaceWith(element);if(element[0]===active||$.contains(element[0],active)){$(active).trigger("focus");}}
return element;}});}
$.extend($.effects,{version:"1.12.1",define:function(name,mode,effect){if(!effect){effect=mode;mode="effect";}
$.effects.effect[name]=effect;$.effects.effect[name].mode=mode;return effect;},scaledDimensions:function(element,percent,direction){if(percent===0){return{height:0,width:0,outerHeight:0,outerWidth:0};}
var x=direction!=="horizontal"?((percent||100)/ 100):1,y=direction!=="vertical"?((percent||100)/ 100):1;return{height:element.height()*y,width:element.width()*x,outerHeight:element.outerHeight()*y,outerWidth:element.outerWidth()*x};},clipToBox:function(animation){return{width:animation.clip.right-animation.clip.left,height:animation.clip.bottom-animation.clip.top,left:animation.clip.left,top:animation.clip.top};},unshift:function(element,queueLength,count){var queue=element.queue();if(queueLength>1){queue.splice.apply(queue,[1,0].concat(queue.splice(queueLength,count)));}
element.dequeue();},saveStyle:function(element){element.data(dataSpaceStyle,element[0].style.cssText);},restoreStyle:function(element){element[0].style.cssText=element.data(dataSpaceStyle)||"";element.removeData(dataSpaceStyle);},mode:function(element,mode){var hidden=element.is(":hidden");if(mode==="toggle"){mode=hidden?"show":"hide";}
if(hidden?mode==="hide":mode==="show"){mode="none";}
return mode;},getBaseline:function(origin,original){var y,x;switch(origin[0]){case"top":y=0;break;case"middle":y=0.5;break;case"bottom":y=1;break;default:y=origin[0]/ original.height;}
switch(origin[1]){case"left":x=0;break;case"center":x=0.5;break;case"right":x=1;break;default:x=origin[1]/ original.width;}
return{x:x,y:y};},createPlaceholder:function(element){var placeholder,cssPosition=element.css("position"),position=element.position();element.css({marginTop:element.css("marginTop"),marginBottom:element.css("marginBottom"),marginLeft:element.css("marginLeft"),marginRight:element.css("marginRight")}).outerWidth(element.outerWidth()).outerHeight(element.outerHeight());if(/^(static|relative)/.test(cssPosition)){cssPosition="absolute";placeholder=$("<"+element[0].nodeName+">").insertAfter(element).css({display:/^(inline|ruby)/.test(element.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:element.css("marginTop"),marginBottom:element.css("marginBottom"),marginLeft:element.css("marginLeft"),marginRight:element.css("marginRight"),"float":element.css("float")}).outerWidth(element.outerWidth()).outerHeight(element.outerHeight()).addClass("ui-effects-placeholder");element.data(dataSpace+"placeholder",placeholder);}
element.css({position:cssPosition,left:position.left,top:position.top});return placeholder;},removePlaceholder:function(element){var dataKey=dataSpace+"placeholder",placeholder=element.data(dataKey);if(placeholder){placeholder.remove();element.removeData(dataKey);}},cleanUp:function(element){$.effects.restoreStyle(element);$.effects.removePlaceholder(element);},setTransition:function(element,list,factor,value){value=value||{};$.each(list,function(i,x){var unit=element.cssUnit(x);if(unit[0]>0){value[x]=unit[0]*factor+unit[1];}});return value;}});function _normalizeArguments(effect,options,speed,callback){if($.isPlainObject(effect)){options=effect;effect=effect.effect;}
effect={effect:effect};if(options==null){options={};}
if($.isFunction(options)){callback=options;speed=null;options={};}
if(typeof options==="number"||$.fx.speeds[options]){callback=speed;speed=options;options={};}
if($.isFunction(speed)){callback=speed;speed=null;}
if(options){$.extend(effect,options);}
speed=speed||options.duration;effect.duration=$.fx.off?0:typeof speed==="number"?speed:speed in $.fx.speeds?$.fx.speeds[speed]:$.fx.speeds._default;effect.complete=callback||options.complete;return effect;}
function standardAnimationOption(option){if(!option||typeof option==="number"||$.fx.speeds[option]){return true;}
if(typeof option==="string"&&!$.effects.effect[option]){return true;}
if($.isFunction(option)){return true;}
if(typeof option==="object"&&!option.effect){return true;}
return false;}
$.fn.extend({effect:function(){var args=_normalizeArguments.apply(this,arguments),effectMethod=$.effects.effect[args.effect],defaultMode=effectMethod.mode,queue=args.queue,queueName=queue||"fx",complete=args.complete,mode=args.mode,modes=[],prefilter=function(next){var el=$(this),normalizedMode=$.effects.mode(el,mode)||defaultMode;el.data(dataSpaceAnimated,true);modes.push(normalizedMode);if(defaultMode&&(normalizedMode==="show"||(normalizedMode===defaultMode&&normalizedMode==="hide"))){el.show();}
if(!defaultMode||normalizedMode!=="none"){$.effects.saveStyle(el);}
if($.isFunction(next)){next();}};if($.fx.off||!effectMethod){if(mode){return this[mode](args.duration,complete);}else{return this.each(function(){if(complete){complete.call(this);}});}}
function run(next){var elem=$(this);function cleanup(){elem.removeData(dataSpaceAnimated);$.effects.cleanUp(elem);if(args.mode==="hide"){elem.hide();}
done();}
function done(){if($.isFunction(complete)){complete.call(elem[0]);}
if($.isFunction(next)){next();}}
args.mode=modes.shift();if($.uiBackCompat!==false&&!defaultMode){if(elem.is(":hidden")?mode==="hide":mode==="show"){elem[mode]();done();}else{effectMethod.call(elem[0],args,done);}}else{if(args.mode==="none"){elem[mode]();done();}else{effectMethod.call(elem[0],args,cleanup);}}}
return queue===false?this.each(prefilter).each(run):this.queue(queueName,prefilter).queue(queueName,run);},show:(function(orig){return function(option){if(standardAnimationOption(option)){return orig.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args.mode="show";return this.effect.call(this,args);}};})($.fn.show),hide:(function(orig){return function(option){if(standardAnimationOption(option)){return orig.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args.mode="hide";return this.effect.call(this,args);}};})($.fn.hide),toggle:(function(orig){return function(option){if(standardAnimationOption(option)||typeof option==="boolean"){return orig.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args.mode="toggle";return this.effect.call(this,args);}};})($.fn.toggle),cssUnit:function(key){var style=this.css(key),val=[];$.each(["em","px","%","pt"],function(i,unit){if(style.indexOf(unit)>0){val=[parseFloat(style),unit];}});return val;},cssClip:function(clipObj){if(clipObj){return this.css("clip","rect("+clipObj.top+"px "+clipObj.right+"px "+
clipObj.bottom+"px "+clipObj.left+"px)");}
return parseClip(this.css("clip"),this);},transfer:function(options,done){var element=$(this),target=$(options.to),targetFixed=target.css("position")==="fixed",body=$("body"),fixTop=targetFixed?body.scrollTop():0,fixLeft=targetFixed?body.scrollLeft():0,endPosition=target.offset(),animation={top:endPosition.top-fixTop,left:endPosition.left-fixLeft,height:target.innerHeight(),width:target.innerWidth()},startPosition=element.offset(),transfer=$("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(options.className).css({top:startPosition.top-fixTop,left:startPosition.left-fixLeft,height:element.innerHeight(),width:element.innerWidth(),position:targetFixed?"fixed":"absolute"}).animate(animation,options.duration,options.easing,function(){transfer.remove();if($.isFunction(done)){done();}});}});function parseClip(str,element){var outerWidth=element.outerWidth(),outerHeight=element.outerHeight(),clipRegex=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,values=clipRegex.exec(str)||["",0,outerWidth,outerHeight,0];return{top:parseFloat(values[1])||0,right:values[2]==="auto"?outerWidth:parseFloat(values[2]),bottom:values[3]==="auto"?outerHeight:parseFloat(values[3]),left:parseFloat(values[4])||0};}
$.fx.step.clip=function(fx){if(!fx.clipInit){fx.start=$(fx.elem).cssClip();if(typeof fx.end==="string"){fx.end=parseClip(fx.end,fx.elem);}
fx.clipInit=true;}
$(fx.elem).cssClip({top:fx.pos*(fx.end.top-fx.start.top)+fx.start.top,right:fx.pos*(fx.end.right-fx.start.right)+fx.start.right,bottom:fx.pos*(fx.end.bottom-fx.start.bottom)+fx.start.bottom,left:fx.pos*(fx.end.left-fx.start.left)+fx.start.left});};})();(function(){var baseEasings={};$.each(["Quad","Cubic","Quart","Quint","Expo"],function(i,name){baseEasings[name]=function(p){return Math.pow(p,i+2);};});$.extend(baseEasings,{Sine:function(p){return 1-Math.cos(p*Math.PI / 2);},Circ:function(p){return 1-Math.sqrt(1-p*p);},Elastic:function(p){return p===0||p===1?p:-Math.pow(2,8*(p-1))*Math.sin(((p-1)*80-7.5)*Math.PI / 15);},Back:function(p){return p*p*(3*p-2);},Bounce:function(p){var pow2,bounce=4;while(p<((pow2=Math.pow(2,--bounce))-1)/ 11){}
return 1 / Math.pow(4,3-bounce)-7.5625*Math.pow((pow2*3-2)/ 22-p,2);}});$.each(baseEasings,function(name,easeIn){$.easing["easeIn"+name]=easeIn;$.easing["easeOut"+name]=function(p){return 1-easeIn(1-p);};$.easing["easeInOut"+name]=function(p){return p<0.5?easeIn(p*2)/ 2:1-easeIn(p*-2+2)/ 2;};});})();var effect=$.effects;
/*!
 * jQuery UI Effects Blind 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectBlind=$.effects.define("blind","hide",function(options,done){var map={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},element=$(this),direction=options.direction||"up",start=element.cssClip(),animate={clip:$.extend({},start)},placeholder=$.effects.createPlaceholder(element);animate.clip[map[direction][0]]=animate.clip[map[direction][1]];if(options.mode==="show"){element.cssClip(animate.clip);if(placeholder){placeholder.css($.effects.clipToBox(animate));}
animate.clip=start;}
if(placeholder){placeholder.animate($.effects.clipToBox(animate),options.duration,options.easing);}
element.animate(animate,{queue:false,duration:options.duration,easing:options.easing,complete:done});});
/*!
 * jQuery UI Effects Bounce 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectBounce=$.effects.define("bounce",function(options,done){var upAnim,downAnim,refValue,element=$(this),mode=options.mode,hide=mode==="hide",show=mode==="show",direction=options.direction||"up",distance=options.distance,times=options.times||5,anims=times*2+(show||hide?1:0),speed=options.duration / anims,easing=options.easing,ref=(direction==="up"||direction==="down")?"top":"left",motion=(direction==="up"||direction==="left"),i=0,queuelen=element.queue().length;$.effects.createPlaceholder(element);refValue=element.css(ref);if(!distance){distance=element[ref==="top"?"outerHeight":"outerWidth"]()/ 3;}
if(show){downAnim={opacity:1};downAnim[ref]=refValue;element.css("opacity",0).css(ref,motion?-distance*2:distance*2).animate(downAnim,speed,easing);}
if(hide){distance=distance / Math.pow(2,times-1);}
downAnim={};downAnim[ref]=refValue;for(;i<times;i++){upAnim={};upAnim[ref]=(motion?"-=":"+=")+distance;element.animate(upAnim,speed,easing).animate(downAnim,speed,easing);distance=hide?distance*2:distance / 2;}
if(hide){upAnim={opacity:0};upAnim[ref]=(motion?"-=":"+=")+distance;element.animate(upAnim,speed,easing);}
element.queue(done);$.effects.unshift(element,queuelen,anims+1);});
/*!
 * jQuery UI Effects Clip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectClip=$.effects.define("clip","hide",function(options,done){var start,animate={},element=$(this),direction=options.direction||"vertical",both=direction==="both",horizontal=both||direction==="horizontal",vertical=both||direction==="vertical";start=element.cssClip();animate.clip={top:vertical?(start.bottom-start.top)/ 2:start.top,right:horizontal?(start.right-start.left)/ 2:start.right,bottom:vertical?(start.bottom-start.top)/ 2:start.bottom,left:horizontal?(start.right-start.left)/ 2:start.left};$.effects.createPlaceholder(element);if(options.mode==="show"){element.cssClip(animate.clip);animate.clip=start;}
element.animate(animate,{queue:false,duration:options.duration,easing:options.easing,complete:done});});
/*!
 * jQuery UI Effects Drop 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectDrop=$.effects.define("drop","hide",function(options,done){var distance,element=$(this),mode=options.mode,show=mode==="show",direction=options.direction||"left",ref=(direction==="up"||direction==="down")?"top":"left",motion=(direction==="up"||direction==="left")?"-=":"+=",oppositeMotion=(motion==="+=")?"-=":"+=",animation={opacity:0};$.effects.createPlaceholder(element);distance=options.distance||element[ref==="top"?"outerHeight":"outerWidth"](true)/ 2;animation[ref]=motion+distance;if(show){element.css(animation);animation[ref]=oppositeMotion+distance;animation.opacity=1;}
element.animate(animation,{queue:false,duration:options.duration,easing:options.easing,complete:done});});
/*!
 * jQuery UI Effects Explode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectExplode=$.effects.define("explode","hide",function(options,done){var i,j,left,top,mx,my,rows=options.pieces?Math.round(Math.sqrt(options.pieces)):3,cells=rows,element=$(this),mode=options.mode,show=mode==="show",offset=element.show().css("visibility","hidden").offset(),width=Math.ceil(element.outerWidth()/ cells),height=Math.ceil(element.outerHeight()/ rows),pieces=[];function childComplete(){pieces.push(this);if(pieces.length===rows*cells){animComplete();}}
for(i=0;i<rows;i++){top=offset.top+i*height;my=i-(rows-1)/ 2;for(j=0;j<cells;j++){left=offset.left+j*width;mx=j-(cells-1)/ 2;element.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*width,top:-i*height}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:width,height:height,left:left+(show?mx*width:0),top:top+(show?my*height:0),opacity:show?0:1}).animate({left:left+(show?0:mx*width),top:top+(show?0:my*height),opacity:show?1:0},options.duration||500,options.easing,childComplete);}}
function animComplete(){element.css({visibility:"visible"});$(pieces).remove();done();}});
/*!
 * jQuery UI Effects Fade 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectFade=$.effects.define("fade","toggle",function(options,done){var show=options.mode==="show";$(this).css("opacity",show?0:1).animate({opacity:show?1:0},{queue:false,duration:options.duration,easing:options.easing,complete:done});});
/*!
 * jQuery UI Effects Fold 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectFold=$.effects.define("fold","hide",function(options,done){var element=$(this),mode=options.mode,show=mode==="show",hide=mode==="hide",size=options.size||15,percent=/([0-9]+)%/.exec(size),horizFirst=!!options.horizFirst,ref=horizFirst?["right","bottom"]:["bottom","right"],duration=options.duration / 2,placeholder=$.effects.createPlaceholder(element),start=element.cssClip(),animation1={clip:$.extend({},start)},animation2={clip:$.extend({},start)},distance=[start[ref[0]],start[ref[1]]],queuelen=element.queue().length;if(percent){size=parseInt(percent[1],10)/ 100*distance[hide?0:1];}
animation1.clip[ref[0]]=size;animation2.clip[ref[0]]=size;animation2.clip[ref[1]]=0;if(show){element.cssClip(animation2.clip);if(placeholder){placeholder.css($.effects.clipToBox(animation2));}
animation2.clip=start;}
element.queue(function(next){if(placeholder){placeholder.animate($.effects.clipToBox(animation1),duration,options.easing).animate($.effects.clipToBox(animation2),duration,options.easing);}
next();}).animate(animation1,duration,options.easing).animate(animation2,duration,options.easing).queue(done);$.effects.unshift(element,queuelen,4);});
/*!
 * jQuery UI Effects Highlight 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectHighlight=$.effects.define("highlight","show",function(options,done){var element=$(this),animation={backgroundColor:element.css("backgroundColor")};if(options.mode==="hide"){animation.opacity=0;}
$.effects.saveStyle(element);element.css({backgroundImage:"none",backgroundColor:options.color||"#ffff99"}).animate(animation,{queue:false,duration:options.duration,easing:options.easing,complete:done});});
/*!
 * jQuery UI Effects Size 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectSize=$.effects.define("size",function(options,done){var baseline,factor,temp,element=$(this),cProps=["fontSize"],vProps=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],hProps=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],mode=options.mode,restore=mode!=="effect",scale=options.scale||"both",origin=options.origin||["middle","center"],position=element.css("position"),pos=element.position(),original=$.effects.scaledDimensions(element),from=options.from||original,to=options.to||$.effects.scaledDimensions(element,0);$.effects.createPlaceholder(element);if(mode==="show"){temp=from;from=to;to=temp;}
factor={from:{y:from.height / original.height,x:from.width / original.width},to:{y:to.height / original.height,x:to.width / original.width}};if(scale==="box"||scale==="both"){if(factor.from.y!==factor.to.y){from=$.effects.setTransition(element,vProps,factor.from.y,from);to=$.effects.setTransition(element,vProps,factor.to.y,to);}
if(factor.from.x!==factor.to.x){from=$.effects.setTransition(element,hProps,factor.from.x,from);to=$.effects.setTransition(element,hProps,factor.to.x,to);}}
if(scale==="content"||scale==="both"){if(factor.from.y!==factor.to.y){from=$.effects.setTransition(element,cProps,factor.from.y,from);to=$.effects.setTransition(element,cProps,factor.to.y,to);}}
if(origin){baseline=$.effects.getBaseline(origin,original);from.top=(original.outerHeight-from.outerHeight)*baseline.y+pos.top;from.left=(original.outerWidth-from.outerWidth)*baseline.x+pos.left;to.top=(original.outerHeight-to.outerHeight)*baseline.y+pos.top;to.left=(original.outerWidth-to.outerWidth)*baseline.x+pos.left;}
element.css(from);if(scale==="content"||scale==="both"){vProps=vProps.concat(["marginTop","marginBottom"]).concat(cProps);hProps=hProps.concat(["marginLeft","marginRight"]);element.find("*[width]").each(function(){var child=$(this),childOriginal=$.effects.scaledDimensions(child),childFrom={height:childOriginal.height*factor.from.y,width:childOriginal.width*factor.from.x,outerHeight:childOriginal.outerHeight*factor.from.y,outerWidth:childOriginal.outerWidth*factor.from.x},childTo={height:childOriginal.height*factor.to.y,width:childOriginal.width*factor.to.x,outerHeight:childOriginal.height*factor.to.y,outerWidth:childOriginal.width*factor.to.x};if(factor.from.y!==factor.to.y){childFrom=$.effects.setTransition(child,vProps,factor.from.y,childFrom);childTo=$.effects.setTransition(child,vProps,factor.to.y,childTo);}
if(factor.from.x!==factor.to.x){childFrom=$.effects.setTransition(child,hProps,factor.from.x,childFrom);childTo=$.effects.setTransition(child,hProps,factor.to.x,childTo);}
if(restore){$.effects.saveStyle(child);}
child.css(childFrom);child.animate(childTo,options.duration,options.easing,function(){if(restore){$.effects.restoreStyle(child);}});});}
element.animate(to,{queue:false,duration:options.duration,easing:options.easing,complete:function(){var offset=element.offset();if(to.opacity===0){element.css("opacity",from.opacity);}
if(!restore){element.css("position",position==="static"?"relative":position).offset(offset);$.effects.saveStyle(element);}
done();}});});
/*!
 * jQuery UI Effects Scale 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectScale=$.effects.define("scale",function(options,done){var el=$(this),mode=options.mode,percent=parseInt(options.percent,10)||(parseInt(options.percent,10)===0?0:(mode!=="effect"?0:100)),newOptions=$.extend(true,{from:$.effects.scaledDimensions(el),to:$.effects.scaledDimensions(el,percent,options.direction||"both"),origin:options.origin||["middle","center"]},options);if(options.fade){newOptions.from.opacity=1;newOptions.to.opacity=0;}
$.effects.effect.size.call(this,newOptions,done);});
/*!
 * jQuery UI Effects Puff 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectPuff=$.effects.define("puff","hide",function(options,done){var newOptions=$.extend(true,{},options,{fade:true,percent:parseInt(options.percent,10)||150});$.effects.effect.scale.call(this,newOptions,done);});
/*!
 * jQuery UI Effects Pulsate 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectPulsate=$.effects.define("pulsate","show",function(options,done){var element=$(this),mode=options.mode,show=mode==="show",hide=mode==="hide",showhide=show||hide,anims=((options.times||5)*2)+(showhide?1:0),duration=options.duration / anims,animateTo=0,i=1,queuelen=element.queue().length;if(show||!element.is(":visible")){element.css("opacity",0).show();animateTo=1;}
for(;i<anims;i++){element.animate({opacity:animateTo},duration,options.easing);animateTo=1-animateTo;}
element.animate({opacity:animateTo},duration,options.easing);element.queue(done);$.effects.unshift(element,queuelen,anims+1);});
/*!
 * jQuery UI Effects Shake 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectShake=$.effects.define("shake",function(options,done){var i=1,element=$(this),direction=options.direction||"left",distance=options.distance||20,times=options.times||3,anims=times*2+1,speed=Math.round(options.duration / anims),ref=(direction==="up"||direction==="down")?"top":"left",positiveMotion=(direction==="up"||direction==="left"),animation={},animation1={},animation2={},queuelen=element.queue().length;$.effects.createPlaceholder(element);animation[ref]=(positiveMotion?"-=":"+=")+distance;animation1[ref]=(positiveMotion?"+=":"-=")+distance*2;animation2[ref]=(positiveMotion?"-=":"+=")+distance*2;element.animate(animation,speed,options.easing);for(;i<times;i++){element.animate(animation1,speed,options.easing).animate(animation2,speed,options.easing);}
element.animate(animation1,speed,options.easing).animate(animation,speed / 2,options.easing).queue(done);$.effects.unshift(element,queuelen,anims+1);});
/*!
 * jQuery UI Effects Slide 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effectsEffectSlide=$.effects.define("slide","show",function(options,done){var startClip,startRef,element=$(this),map={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},mode=options.mode,direction=options.direction||"left",ref=(direction==="up"||direction==="down")?"top":"left",positiveMotion=(direction==="up"||direction==="left"),distance=options.distance||element[ref==="top"?"outerHeight":"outerWidth"](true),animation={};$.effects.createPlaceholder(element);startClip=element.cssClip();startRef=element.position()[ref];animation[ref]=(positiveMotion?-1:1)*distance+startRef;animation.clip=element.cssClip();animation.clip[map[direction][1]]=animation.clip[map[direction][0]];if(mode==="show"){element.cssClip(animation.clip);element.css(ref,animation[ref]);animation.clip=startClip;animation[ref]=startRef;}
element.animate(animation,{queue:false,duration:options.duration,easing:options.easing,complete:done});});
/*!
 * jQuery UI Effects Transfer 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var effect;if($.uiBackCompat!==false){effect=$.effects.define("transfer",function(options,done){$(this).transfer(options,done);});}
var effectsEffectTransfer=effect;
/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
$.ui.focusable=function(element,hasTabindex){var map,mapName,img,focusableIfVisible,fieldset,nodeName=element.nodeName.toLowerCase();if("area"===nodeName){map=element.parentNode;mapName=map.name;if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map"){return false;}
img=$("img[usemap='#"+mapName+"']");return img.length>0&&img.is(":visible");}
if(/^(input|select|textarea|button|object)$/.test(nodeName)){focusableIfVisible=!element.disabled;if(focusableIfVisible){fieldset=$(element).closest("fieldset")[0];if(fieldset){focusableIfVisible=!fieldset.disabled;}}}else if("a"===nodeName){focusableIfVisible=element.href||hasTabindex;}else{focusableIfVisible=hasTabindex;}
return focusableIfVisible&&$(element).is(":visible")&&visible($(element));};function visible(element){var visibility=element.css("visibility");while(visibility==="inherit"){element=element.parent();visibility=element.css("visibility");}
return visibility!=="hidden";}
$.extend($.expr[":"],{focusable:function(element){return $.ui.focusable(element,$.attr(element,"tabindex")!=null);}});var focusable=$.ui.focusable;var form=$.fn.form=function(){return typeof this[0].form==="string"?this.closest("form"):$(this[0].form);};
/*!
 * jQuery UI Form Reset Mixin 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var formResetMixin=$.ui.formResetMixin={_formResetHandler:function(){var form=$(this);setTimeout(function(){var instances=form.data("ui-form-reset-instances");$.each(instances,function(){this.refresh();});});},_bindFormResetHandler:function(){this.form=this.element.form();if(!this.form.length){return;}
var instances=this.form.data("ui-form-reset-instances")||[];if(!instances.length){this.form.on("reset.ui-form-reset",this._formResetHandler);}
instances.push(this);this.form.data("ui-form-reset-instances",instances);},_unbindFormResetHandler:function(){if(!this.form.length){return;}
var instances=this.form.data("ui-form-reset-instances");instances.splice($.inArray(this,instances),1);if(instances.length){this.form.data("ui-form-reset-instances",instances);}else{this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");}}};
/*!
 * jQuery UI Support for jQuery core 1.7.x 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
if($.fn.jquery.substring(0,3)==="1.7"){$.each(["Width","Height"],function(i,name){var side=name==="Width"?["Left","Right"]:["Top","Bottom"],type=name.toLowerCase(),orig={innerWidth:$.fn.innerWidth,innerHeight:$.fn.innerHeight,outerWidth:$.fn.outerWidth,outerHeight:$.fn.outerHeight};function reduce(elem,size,border,margin){$.each(side,function(){size-=parseFloat($.css(elem,"padding"+this))||0;if(border){size-=parseFloat($.css(elem,"border"+this+"Width"))||0;}
if(margin){size-=parseFloat($.css(elem,"margin"+this))||0;}});return size;}
$.fn["inner"+name]=function(size){if(size===undefined){return orig["inner"+name].call(this);}
return this.each(function(){$(this).css(type,reduce(this,size)+"px");});};$.fn["outer"+name]=function(size,margin){if(typeof size!=="number"){return orig["outer"+name].call(this,size);}
return this.each(function(){$(this).css(type,reduce(this,size,true,margin)+"px");});};});$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));};};
/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var keycode=$.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38};var escapeSelector=$.ui.escapeSelector=(function(){var selectorEscape=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
 return function( selector ) {
  return selector.replace( selectorEscape, "\\$1" );
 };
} )();


/*!
 * jQuery UI Labels 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: labels
//>>group: Core
//>>description: Find all the labels associated with a given input
//>>docs: http://api.jqueryui.com/labels/



var labels = $.fn.labels = function() {
 var ancestor, selector, id, labels, ancestors;

 // Check control.labels first
 if ( this[ 0 ].labels && this[ 0 ].labels.length ) {
  return this.pushStack( this[ 0 ].labels );
 }

 // Support: IE <= 11, FF <= 37, Android <= 2.3 only
 // Above browsers do not support control.labels. Everything below is to support them
 // as well as document fragments. control.labels does not work on document fragments
 labels = this.eq( 0 ).parents( "label" );

 // Look for the label based on the id
 id = this.attr( "id" );
 if ( id ) {

  // We don't search against the document in case the element
  // is disconnected from the DOM
  ancestor = this.eq( 0 ).parents().last();

  // Get a full set of top level ancestors
  ancestors = ancestor.add( ancestor.length ? ancestor.siblings() : this.siblings() );

  // Create a selector for the label based on the id
  selector = "label[for='" + $.ui.escapeSelector( id ) + "']";

  labels = labels.add( ancestors.find( selector ).addBack( selector ) );

 }

 // Return whatever we have found for labels
 return this.pushStack( labels );
};


/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: scrollParent
//>>group: Core
//>>description: Get the closest ancestor element that is scrollable.
//>>docs: http://api.jqueryui.com/scrollParent/



var scrollParent = $.fn.scrollParent = function( includeHidden ) {
 var position = this.css( "position" ),
  excludeStaticParent = position === "absolute",
  overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
  scrollParent = this.parents().filter( function() {
   var parent = $( this );
   if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
    return false;
   }
   return overflowRegex.test( parent.css( "overflow" ) + parent.css( "overflow-y" ) +
    parent.css( "overflow-x" ) );
  } ).eq( 0 );

 return position === "fixed" || !scrollParent.length ?
  $( this[ 0 ].ownerDocument || document ) :
  scrollParent;
};


/*!
 * jQuery UI Tabbable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: :tabbable Selector
//>>group: Core
//>>description: Selects elements which can be tabbed to.
//>>docs: http://api.jqueryui.com/tabbable-selector/



var tabbable = $.extend( $.expr[ ":" ], {
 tabbable: function( element ) {
  var tabIndex = $.attr( element, "tabindex" ),
   hasTabindex = tabIndex != null;
  return ( !hasTabindex || tabIndex >= 0 ) && $.ui.focusable( element, hasTabindex );
 }
} );


/*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: uniqueId
//>>group: Core
//>>description: Functions to generate and remove uniqueId's
//>>docs: http://api.jqueryui.com/uniqueId/



var uniqueId = $.fn.extend( {
 uniqueId: ( function() {
  var uuid = 0;

  return function() {
   return this.each( function() {
    if ( !this.id ) {
     this.id = "ui-id-" + ( ++uuid );
    }
   } );
  };
 } )(),

 removeUniqueId: function() {
  return this.each( function() {
   if ( /^ui-id-\d+$/.test( this.id ) ) {
    $( this ).removeAttr( "id" );
   }
  } );
 }
} );


/*!
 * jQuery UI Accordion 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Accordion
//>>group: Widgets
// jscs:disable maximumLineLength
//>>description: Displays collapsible content panels for presenting information in a limited amount of space.
// jscs:enable maximumLineLength
//>>docs: http://api.jqueryui.com/accordion/
//>>demos: http://jqueryui.com/accordion/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/accordion.css
//>>css.theme: ../../themes/base/theme.css



var widgetsAccordion = $.widget( "ui.accordion", {
 version: "1.12.1",
 options: {
  active: 0,
  animate: {},
  classes: {
   "ui-accordion-header": "ui-corner-top",
   "ui-accordion-header-collapsed": "ui-corner-all",
   "ui-accordion-content": "ui-corner-bottom"
  },
  collapsible: false,
  event: "click",
  header: "> li > :first-child, > :not(li):even",
  heightStyle: "auto",
  icons: {
   activeHeader: "ui-icon-triangle-1-s",
   header: "ui-icon-triangle-1-e"
  },

  // Callbacks
  activate: null,
  beforeActivate: null
 },

 hideProps: {
  borderTopWidth: "hide",
  borderBottomWidth: "hide",
  paddingTop: "hide",
  paddingBottom: "hide",
  height: "hide"
 },

 showProps: {
  borderTopWidth: "show",
  borderBottomWidth: "show",
  paddingTop: "show",
  paddingBottom: "show",
  height: "show"
 },

 _create: function() {
  var options = this.options;

  this.prevShow = this.prevHide = $();
  this._addClass( "ui-accordion", "ui-widget ui-helper-reset" );
  this.element.attr( "role", "tablist" );

  // Don't allow collapsible: false and active: false / null
  if ( !options.collapsible && ( options.active === false || options.active == null ) ) {
   options.active = 0;
  }

  this._processPanels();

  // handle negative values
  if ( options.active < 0 ) {
   options.active += this.headers.length;
  }
  this._refresh();
 },

 _getCreateEventData: function() {
  return {
   header: this.active,
   panel: !this.active.length ? $() : this.active.next()
  };
 },

 _createIcons: function() {
  var icon, children,
   icons = this.options.icons;

  if ( icons ) {
   icon = $( "<span>" );
   this._addClass( icon, "ui-accordion-header-icon", "ui-icon " + icons.header );
   icon.prependTo( this.headers );
   children = this.active.children( ".ui-accordion-header-icon" );
   this._removeClass( children, icons.header )
    ._addClass( children, null, icons.activeHeader )
    ._addClass( this.headers, "ui-accordion-icons" );
  }
 },

 _destroyIcons: function() {
  this._removeClass( this.headers, "ui-accordion-icons" );
  this.headers.children( ".ui-accordion-header-icon" ).remove();
 },

 _destroy: function() {
  var contents;

  // Clean up main element
  this.element.removeAttr( "role" );

  // Clean up headers
  this.headers
   .removeAttr( "role aria-expanded aria-selected aria-controls tabIndex" )
   .removeUniqueId();

  this._destroyIcons();

  // Clean up content panels
  contents = this.headers.next()
   .css( "display", "" )
   .removeAttr( "role aria-hidden aria-labelledby" )
   .removeUniqueId();

  if ( this.options.heightStyle !== "content" ) {
   contents.css( "height", "" );
  }
 },

 _setOption: function( key, value ) {
  if ( key === "active" ) {

   // _activate() will handle invalid values and update this.options
   this._activate( value );
   return;
  }

  if ( key === "event" ) {
   if ( this.options.event ) {
    this._off( this.headers, this.options.event );
   }
   this._setupEvents( value );
  }

  this._super( key, value );

  // Setting collapsible: false while collapsed; open first panel
  if ( key === "collapsible" && !value && this.options.active === false ) {
   this._activate( 0 );
  }

  if ( key === "icons" ) {
   this._destroyIcons();
   if ( value ) {
    this._createIcons();
   }
  }
 },

 _setOptionDisabled: function( value ) {
  this._super( value );

  this.element.attr( "aria-disabled", value );

  // Support: IE8 Only
  // #5332 / #6059 - opacity doesn't cascade to positioned elements in IE
  // so we need to add the disabled class to the headers and panels
  this._toggleClass( null, "ui-state-disabled", !!value );
  this._toggleClass( this.headers.add( this.headers.next() ), null, "ui-state-disabled",
   !!value );
 },

 _keydown: function( event ) {
  if ( event.altKey || event.ctrlKey ) {
   return;
  }

  var keyCode = $.ui.keyCode,
   length = this.headers.length,
   currentIndex = this.headers.index( event.target ),
   toFocus = false;

  switch ( event.keyCode ) {
  case keyCode.RIGHT:
  case keyCode.DOWN:
   toFocus = this.headers[ ( currentIndex + 1 ) % length ];
   break;
  case keyCode.LEFT:
  case keyCode.UP:
   toFocus = this.headers[ ( currentIndex - 1 + length ) % length ];
   break;
  case keyCode.SPACE:
  case keyCode.ENTER:
   this._eventHandler( event );
   break;
  case keyCode.HOME:
   toFocus = this.headers[ 0 ];
   break;
  case keyCode.END:
   toFocus = this.headers[ length - 1 ];
   break;
  }

  if ( toFocus ) {
   $( event.target ).attr( "tabIndex", -1 );
   $( toFocus ).attr( "tabIndex", 0 );
   $( toFocus ).trigger( "focus" );
   event.preventDefault();
  }
 },

 _panelKeyDown: function( event ) {
  if ( event.keyCode === $.ui.keyCode.UP && event.ctrlKey ) {
   $( event.currentTarget ).prev().trigger( "focus" );
  }
 },

 refresh: function() {
  var options = this.options;
  this._processPanels();

  // Was collapsed or no panel
  if ( ( options.active === false && options.collapsible === true ) ||
    !this.headers.length ) {
   options.active = false;
   this.active = $();

  // active false only when collapsible is true
  } else if ( options.active === false ) {
   this._activate( 0 );

  // was active, but active panel is gone
  } else if ( this.active.length && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {

   // all remaining panel are disabled
   if ( this.headers.length === this.headers.find( ".ui-state-disabled" ).length ) {
    options.active = false;
    this.active = $();

   // activate previous panel
   } else {
    this._activate( Math.max( 0, options.active - 1 ) );
   }

  // was active, active panel still exists
  } else {

   // make sure active index is correct
   options.active = this.headers.index( this.active );
  }

  this._destroyIcons();

  this._refresh();
 },

 _processPanels: function() {
  var prevHeaders = this.headers,
   prevPanels = this.panels;

  this.headers = this.element.find( this.options.header );
  this._addClass( this.headers, "ui-accordion-header ui-accordion-header-collapsed",
   "ui-state-default" );

  this.panels = this.headers.next().filter( ":not(.ui-accordion-content-active)" ).hide();
  this._addClass( this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content" );

  // Avoid memory leaks (#10056)
  if ( prevPanels ) {
   this._off( prevHeaders.not( this.headers ) );
   this._off( prevPanels.not( this.panels ) );
  }
 },

 _refresh: function() {
  var maxHeight,
   options = this.options,
   heightStyle = options.heightStyle,
   parent = this.element.parent();

  this.active = this._findActive( options.active );
  this._addClass( this.active, "ui-accordion-header-active", "ui-state-active" )
   ._removeClass( this.active, "ui-accordion-header-collapsed" );
  this._addClass( this.active.next(), "ui-accordion-content-active" );
  this.active.next().show();

  this.headers
   .attr( "role", "tab" )
   .each( function() {
    var header = $( this ),
     headerId = header.uniqueId().attr( "id" ),
     panel = header.next(),
     panelId = panel.uniqueId().attr( "id" );
    header.attr( "aria-controls", panelId );
    panel.attr( "aria-labelledby", headerId );
   } )
   .next()
    .attr( "role", "tabpanel" );

  this.headers
   .not( this.active )
    .attr( {
     "aria-selected": "false",
     "aria-expanded": "false",
     tabIndex: -1
    } )
    .next()
     .attr( {
      "aria-hidden": "true"
     } )
     .hide();

  // Make sure at least one header is in the tab order
  if ( !this.active.length ) {
   this.headers.eq( 0 ).attr( "tabIndex", 0 );
  } else {
   this.active.attr( {
    "aria-selected": "true",
    "aria-expanded": "true",
    tabIndex: 0
   } )
    .next()
     .attr( {
      "aria-hidden": "false"
     } );
  }

  this._createIcons();

  this._setupEvents( options.event );

  if ( heightStyle === "fill" ) {
   maxHeight = parent.height();
   this.element.siblings( ":visible" ).each( function() {
    var elem = $( this ),
     position = elem.css( "position" );

    if ( position === "absolute" || position === "fixed" ) {
     return;
    }
    maxHeight -= elem.outerHeight( true );
   } );

   this.headers.each( function() {
    maxHeight -= $( this ).outerHeight( true );
   } );

   this.headers.next()
    .each( function() {
     $( this ).height( Math.max( 0, maxHeight -
      $( this ).innerHeight() + $( this ).height() ) );
    } )
    .css( "overflow", "auto" );
  } else if ( heightStyle === "auto" ) {
   maxHeight = 0;
   this.headers.next()
    .each( function() {
     var isVisible = $( this ).is( ":visible" );
     if ( !isVisible ) {
      $( this ).show();
     }
     maxHeight = Math.max( maxHeight, $( this ).css( "height", "" ).height() );
     if ( !isVisible ) {
      $( this ).hide();
     }
    } )
    .height( maxHeight );
  }
 },

 _activate: function( index ) {
  var active = this._findActive( index )[ 0 ];

  // Trying to activate the already active panel
  if ( active === this.active[ 0 ] ) {
   return;
  }

  // Trying to collapse, simulate a click on the currently active header
  active = active || this.active[ 0 ];

  this._eventHandler( {
   target: active,
   currentTarget: active,
   preventDefault: $.noop
  } );
 },

 _findActive: function( selector ) {
  return typeof selector === "number" ? this.headers.eq( selector ) : $();
 },

 _setupEvents: function( event ) {
  var events = {
   keydown: "_keydown"
  };
  if ( event ) {
   $.each( event.split( " " ), function( index, eventName ) {
    events[ eventName ] = "_eventHandler";
   } );
  }

  this._off( this.headers.add( this.headers.next() ) );
  this._on( this.headers, events );
  this._on( this.headers.next(), { keydown: "_panelKeyDown" } );
  this._hoverable( this.headers );
  this._focusable( this.headers );
 },

 _eventHandler: function( event ) {
  var activeChildren, clickedChildren,
   options = this.options,
   active = this.active,
   clicked = $( event.currentTarget ),
   clickedIsActive = clicked[ 0 ] === active[ 0 ],
   collapsing = clickedIsActive && options.collapsible,
   toShow = collapsing ? $() : clicked.next(),
   toHide = active.next(),
   eventData = {
    oldHeader: active,
    oldPanel: toHide,
    newHeader: collapsing ? $() : clicked,
    newPanel: toShow
   };

  event.preventDefault();

  if (

    // click on active header, but not collapsible
    ( clickedIsActive && !options.collapsible ) ||

    // allow canceling activation
    ( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
   return;
  }

  options.active = collapsing ? false : this.headers.index( clicked );

  // When the call to ._toggle() comes after the class changes
  // it causes a very odd bug in IE 8 (see #6720)
  this.active = clickedIsActive ? $() : clicked;
  this._toggle( eventData );

  // Switch classes
  // corner classes on the previously active header stay after the animation
  this._removeClass( active, "ui-accordion-header-active", "ui-state-active" );
  if ( options.icons ) {
   activeChildren = active.children( ".ui-accordion-header-icon" );
   this._removeClass( activeChildren, null, options.icons.activeHeader )
    ._addClass( activeChildren, null, options.icons.header );
  }

  if ( !clickedIsActive ) {
   this._removeClass( clicked, "ui-accordion-header-collapsed" )
    ._addClass( clicked, "ui-accordion-header-active", "ui-state-active" );
   if ( options.icons ) {
    clickedChildren = clicked.children( ".ui-accordion-header-icon" );
    this._removeClass( clickedChildren, null, options.icons.header )
     ._addClass( clickedChildren, null, options.icons.activeHeader );
   }

   this._addClass( clicked.next(), "ui-accordion-content-active" );
  }
 },

 _toggle: function( data ) {
  var toShow = data.newPanel,
   toHide = this.prevShow.length ? this.prevShow : data.oldPanel;

  // Handle activating a panel during the animation for another activation
  this.prevShow.add( this.prevHide ).stop( true, true );
  this.prevShow = toShow;
  this.prevHide = toHide;

  if ( this.options.animate ) {
   this._animate( toShow, toHide, data );
  } else {
   toHide.hide();
   toShow.show();
   this._toggleComplete( data );
  }

  toHide.attr( {
   "aria-hidden": "true"
  } );
  toHide.prev().attr( {
   "aria-selected": "false",
   "aria-expanded": "false"
  } );

  // if we're switching panels, remove the old header from the tab order
  // if we're opening from collapsed state, remove the previous header from the tab order
  // if we're collapsing, then keep the collapsing header in the tab order
  if ( toShow.length && toHide.length ) {
   toHide.prev().attr( {
    "tabIndex": -1,
    "aria-expanded": "false"
   } );
  } else if ( toShow.length ) {
   this.headers.filter( function() {
    return parseInt( $( this ).attr( "tabIndex" ), 10 ) === 0;
   } )
    .attr( "tabIndex", -1 );
  }

  toShow
   .attr( "aria-hidden", "false" )
   .prev()
    .attr( {
     "aria-selected": "true",
     "aria-expanded": "true",
     tabIndex: 0
    } );
 },

 _animate: function( toShow, toHide, data ) {
  var total, easing, duration,
   that = this,
   adjust = 0,
   boxSizing = toShow.css( "box-sizing" ),
   down = toShow.length &&
    ( !toHide.length || ( toShow.index() < toHide.index() ) ),
   animate = this.options.animate || {},
   options = down && animate.down || animate,
   complete = function() {
    that._toggleComplete( data );
   };

  if ( typeof options === "number" ) {
   duration = options;
  }
  if ( typeof options === "string" ) {
   easing = options;
  }

  // fall back from options to animation in case of partial down settings
  easing = easing || options.easing || animate.easing;
  duration = duration || options.duration || animate.duration;

  if ( !toHide.length ) {
   return toShow.animate( this.showProps, duration, easing, complete );
  }
  if ( !toShow.length ) {
   return toHide.animate( this.hideProps, duration, easing, complete );
  }

  total = toShow.show().outerHeight();
  toHide.animate( this.hideProps, {
   duration: duration,
   easing: easing,
   step: function( now, fx ) {
    fx.now = Math.round( now );
   }
  } );
  toShow
   .hide()
   .animate( this.showProps, {
    duration: duration,
    easing: easing,
    complete: complete,
    step: function( now, fx ) {
     fx.now = Math.round( now );
     if ( fx.prop !== "height" ) {
      if ( boxSizing === "content-box" ) {
       adjust += fx.now;
      }
     } else if ( that.options.heightStyle !== "content" ) {
      fx.now = Math.round( total - toHide.outerHeight() - adjust );
      adjust = 0;
     }
    }
   } );
 },

 _toggleComplete: function( data ) {
  var toHide = data.oldPanel,
   prev = toHide.prev();

  this._removeClass( toHide, "ui-accordion-content-active" );
  this._removeClass( prev, "ui-accordion-header-active" )
   ._addClass( prev, "ui-accordion-header-collapsed" );

  // Work around for rendering bug in IE (#5421)
  if ( toHide.length ) {
   toHide.parent()[ 0 ].className = toHide.parent()[ 0 ].className;
  }
  this._trigger( "activate", null, data );
 }
} );



var safeActiveElement = $.ui.safeActiveElement = function( document ) {
 var activeElement;

 // Support: IE 9 only
 // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
 try {
  activeElement = document.activeElement;
 } catch ( error ) {
  activeElement = document.body;
 }

 // Support: IE 9 - 11 only
 // IE may return null instead of an element
 // Interestingly, this only seems to occur when NOT in an iframe
 if ( !activeElement ) {
  activeElement = document.body;
 }

 // Support: IE 11 only
 // IE11 returns a seemingly empty object in some cases when accessing
 // document.activeElement from an <iframe>
 if ( !activeElement.nodeName ) {
  activeElement = document.body;
 }

 return activeElement;
};


/*!
 * jQuery UI Menu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Menu
//>>group: Widgets
//>>description: Creates nestable menus.
//>>docs: http://api.jqueryui.com/menu/
//>>demos: http://jqueryui.com/menu/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/menu.css
//>>css.theme: ../../themes/base/theme.css



var widgetsMenu = $.widget( "ui.menu", {
 version: "1.12.1",
 defaultElement: "<ul>",
 delay: 300,
 options: {
  icons: {
   submenu: "ui-icon-caret-1-e"
  },
  items: "> *",
  menus: "ul",
  position: {
   my: "left top",
   at: "right top"
  },
  role: "menu",

  // Callbacks
  blur: null,
  focus: null,
  select: null
 },

 _create: function() {
  this.activeMenu = this.element;

  // Flag used to prevent firing of the click handler
  // as the event bubbles up through nested menus
  this.mouseHandled = false;
  this.element
   .uniqueId()
   .attr( {
    role: this.options.role,
    tabIndex: 0
   } );

  this._addClass( "ui-menu", "ui-widget ui-widget-content" );
  this._on( {

   // Prevent focus from sticking to links inside menu after clicking
   // them (focus should always stay on UL during navigation).
   "mousedown .ui-menu-item": function( event ) {
    event.preventDefault();
   },
   "click .ui-menu-item": function( event ) {
    var target = $( event.target );
    var active = $( $.ui.safeActiveElement( this.document[ 0 ] ) );
    if ( !this.mouseHandled && target.not( ".ui-state-disabled" ).length ) {
     this.select( event );

     // Only set the mouseHandled flag if the event will bubble, see #9469.
     if ( !event.isPropagationStopped() ) {
      this.mouseHandled = true;
     }

     // Open submenu on click
     if ( target.has( ".ui-menu" ).length ) {
      this.expand( event );
     } else if ( !this.element.is( ":focus" ) &&
       active.closest( ".ui-menu" ).length ) {

      // Redirect focus to the menu
      this.element.trigger( "focus", [ true ] );

      // If the active item is on the top level, let it stay active.
      // Otherwise, blur the active item since it is no longer visible.
      if ( this.active && this.active.parents( ".ui-menu" ).length === 1 ) {
       clearTimeout( this.timer );
      }
     }
    }
   },
   "mouseenter .ui-menu-item": function( event ) {

    // Ignore mouse events while typeahead is active, see #10458.
    // Prevents focusing the wrong item when typeahead causes a scroll while the mouse
    // is over an item in the menu
    if ( this.previousFilter ) {
     return;
    }

    var actualTarget = $( event.target ).closest( ".ui-menu-item" ),
     target = $( event.currentTarget );

    // Ignore bubbled events on parent items, see #11641
    if ( actualTarget[ 0 ] !== target[ 0 ] ) {
     return;
    }

    // Remove ui-state-active class from siblings of the newly focused menu item
    // to avoid a jump caused by adjacent elements both having a class with a border
    this._removeClass( target.siblings().children( ".ui-state-active" ),
     null, "ui-state-active" );
    this.focus( event, target );
   },
   mouseleave: "collapseAll",
   "mouseleave .ui-menu": "collapseAll",
   focus: function( event, keepActiveItem ) {

    // If there's already an active item, keep it active
    // If not, activate the first item
    var item = this.active || this.element.find( this.options.items ).eq( 0 );

    if ( !keepActiveItem ) {
     this.focus( event, item );
    }
   },
   blur: function( event ) {
    this._delay( function() {
     var notContained = !$.contains(
      this.element[ 0 ],
      $.ui.safeActiveElement( this.document[ 0 ] )
     );
     if ( notContained ) {
      this.collapseAll( event );
     }
    } );
   },
   keydown: "_keydown"
  } );

  this.refresh();

  // Clicks outside of a menu collapse any open menus
  this._on( this.document, {
   click: function( event ) {
    if ( this._closeOnDocumentClick( event ) ) {
     this.collapseAll( event );
    }

    // Reset the mouseHandled flag
    this.mouseHandled = false;
   }
  } );
 },

 _destroy: function() {
  var items = this.element.find( ".ui-menu-item" )
    .removeAttr( "role aria-disabled" ),
   submenus = items.children( ".ui-menu-item-wrapper" )
    .removeUniqueId()
    .removeAttr( "tabIndex role aria-haspopup" );

  // Destroy (sub)menus
  this.element
   .removeAttr( "aria-activedescendant" )
   .find( ".ui-menu" ).addBack()
    .removeAttr( "role aria-labelledby aria-expanded aria-hidden aria-disabled " +
     "tabIndex" )
    .removeUniqueId()
    .show();

  submenus.children().each( function() {
   var elem = $( this );
   if ( elem.data( "ui-menu-submenu-caret" ) ) {
    elem.remove();
   }
  } );
 },

 _keydown: function( event ) {
  var match, prev, character, skip,
   preventDefault = true;

  switch ( event.keyCode ) {
  case $.ui.keyCode.PAGE_UP:
   this.previousPage( event );
   break;
  case $.ui.keyCode.PAGE_DOWN:
   this.nextPage( event );
   break;
  case $.ui.keyCode.HOME:
   this._move( "first", "first", event );
   break;
  case $.ui.keyCode.END:
   this._move( "last", "last", event );
   break;
  case $.ui.keyCode.UP:
   this.previous( event );
   break;
  case $.ui.keyCode.DOWN:
   this.next( event );
   break;
  case $.ui.keyCode.LEFT:
   this.collapse( event );
   break;
  case $.ui.keyCode.RIGHT:
   if ( this.active && !this.active.is( ".ui-state-disabled" ) ) {
    this.expand( event );
   }
   break;
  case $.ui.keyCode.ENTER:
  case $.ui.keyCode.SPACE:
   this._activate( event );
   break;
  case $.ui.keyCode.ESCAPE:
   this.collapse( event );
   break;
  default:
   preventDefault = false;
   prev = this.previousFilter || "";
   skip = false;

   // Support number pad values
   character = event.keyCode >= 96 && event.keyCode <= 105 ?
    ( event.keyCode - 96 ).toString() : String.fromCharCode( event.keyCode );

   clearTimeout( this.filterTimer );

   if ( character === prev ) {
    skip = true;
   } else {
    character = prev + character;
   }

   match = this._filterMenuItems( character );
   match = skip && match.index( this.active.next() ) !== -1 ?
    this.active.nextAll( ".ui-menu-item" ) :
    match;

   // If no matches on the current filter, reset to the last character pressed
   // to move down the menu to the first item that starts with that character
   if ( !match.length ) {
    character = String.fromCharCode( event.keyCode );
    match = this._filterMenuItems( character );
   }

   if ( match.length ) {
    this.focus( event, match );
    this.previousFilter = character;
    this.filterTimer = this._delay( function() {
     delete this.previousFilter;
    }, 1000 );
   } else {
    delete this.previousFilter;
   }
  }

  if ( preventDefault ) {
   event.preventDefault();
  }
 },

 _activate: function( event ) {
  if ( this.active && !this.active.is( ".ui-state-disabled" ) ) {
   if ( this.active.children( "[aria-haspopup='true']" ).length ) {
    this.expand( event );
   } else {
    this.select( event );
   }
  }
 },

 refresh: function() {
  var menus, items, newSubmenus, newItems, newWrappers,
   that = this,
   icon = this.options.icons.submenu,
   submenus = this.element.find( this.options.menus );

  this._toggleClass( "ui-menu-icons", null, !!this.element.find( ".ui-icon" ).length );

  // Initialize nested menus
  newSubmenus = submenus.filter( ":not(.ui-menu)" )
   .hide()
   .attr( {
    role: this.options.role,
    "aria-hidden": "true",
    "aria-expanded": "false"
   } )
   .each( function() {
    var menu = $( this ),
     item = menu.prev(),
     submenuCaret = $( "<span>" ).data( "ui-menu-submenu-caret", true );

    that._addClass( submenuCaret, "ui-menu-icon", "ui-icon " + icon );
    item
     .attr( "aria-haspopup", "true" )
     .prepend( submenuCaret );
    menu.attr( "aria-labelledby", item.attr( "id" ) );
   } );

  this._addClass( newSubmenus, "ui-menu", "ui-widget ui-widget-content ui-front" );

  menus = submenus.add( this.element );
  items = menus.find( this.options.items );

  // Initialize menu-items containing spaces and/or dashes only as dividers
  items.not( ".ui-menu-item" ).each( function() {
   var item = $( this );
   if ( that._isDivider( item ) ) {
    that._addClass( item, "ui-menu-divider", "ui-widget-content" );
   }
  } );

  // Don't refresh list items that are already adapted
  newItems = items.not( ".ui-menu-item, .ui-menu-divider" );
  newWrappers = newItems.children()
   .not( ".ui-menu" )
    .uniqueId()
    .attr( {
     tabIndex: -1,
     role: this._itemRole()
    } );
  this._addClass( newItems, "ui-menu-item" )
   ._addClass( newWrappers, "ui-menu-item-wrapper" );

  // Add aria-disabled attribute to any disabled menu item
  items.filter( ".ui-state-disabled" ).attr( "aria-disabled", "true" );

  // If the active item has been removed, blur the menu
  if ( this.active && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
   this.blur();
  }
 },

 _itemRole: function() {
  return {
   menu: "menuitem",
   listbox: "option"
  }[ this.options.role ];
 },

 _setOption: function( key, value ) {
  if ( key === "icons" ) {
   var icons = this.element.find( ".ui-menu-icon" );
   this._removeClass( icons, null, this.options.icons.submenu )
    ._addClass( icons, null, value.submenu );
  }
  this._super( key, value );
 },

 _setOptionDisabled: function( value ) {
  this._super( value );

  this.element.attr( "aria-disabled", String( value ) );
  this._toggleClass( null, "ui-state-disabled", !!value );
 },

 focus: function( event, item ) {
  var nested, focused, activeParent;
  this.blur( event, event && event.type === "focus" );

  this._scrollIntoView( item );

  this.active = item.first();

  focused = this.active.children( ".ui-menu-item-wrapper" );
  this._addClass( focused, null, "ui-state-active" );

  // Only update aria-activedescendant if there's a role
  // otherwise we assume focus is managed elsewhere
  if ( this.options.role ) {
   this.element.attr( "aria-activedescendant", focused.attr( "id" ) );
  }

  // Highlight active parent menu item, if any
  activeParent = this.active
   .parent()
    .closest( ".ui-menu-item" )
     .children( ".ui-menu-item-wrapper" );
  this._addClass( activeParent, null, "ui-state-active" );

  if ( event && event.type === "keydown" ) {
   this._close();
  } else {
   this.timer = this._delay( function() {
    this._close();
   }, this.delay );
  }

  nested = item.children( ".ui-menu" );
  if ( nested.length && event && ( /^mouse/.test( event.type ) ) ) {
   this._startOpening( nested );
  }
  this.activeMenu = item.parent();

  this._trigger( "focus", event, { item: item } );
 },

 _scrollIntoView: function( item ) {
  var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
  if ( this._hasScroll() ) {
   borderTop = parseFloat( $.css( this.activeMenu[ 0 ], "borderTopWidth" ) ) || 0;
   paddingTop = parseFloat( $.css( this.activeMenu[ 0 ], "paddingTop" ) ) || 0;
   offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
   scroll = this.activeMenu.scrollTop();
   elementHeight = this.activeMenu.height();
   itemHeight = item.outerHeight();

   if ( offset < 0 ) {
    this.activeMenu.scrollTop( scroll + offset );
   } else if ( offset + itemHeight > elementHeight ) {
    this.activeMenu.scrollTop( scroll + offset - elementHeight + itemHeight );
   }
  }
 },

 blur: function( event, fromFocus ) {
  if ( !fromFocus ) {
   clearTimeout( this.timer );
  }

  if ( !this.active ) {
   return;
  }

  this._removeClass( this.active.children( ".ui-menu-item-wrapper" ),
   null, "ui-state-active" );

  this._trigger( "blur", event, { item: this.active } );
  this.active = null;
 },

 _startOpening: function( submenu ) {
  clearTimeout( this.timer );

  // Don't open if already open fixes a Firefox bug that caused a .5 pixel
  // shift in the submenu position when mousing over the caret icon
  if ( submenu.attr( "aria-hidden" ) !== "true" ) {
   return;
  }

  this.timer = this._delay( function() {
   this._close();
   this._open( submenu );
  }, this.delay );
 },

 _open: function( submenu ) {
  var position = $.extend( {
   of: this.active
  }, this.options.position );

  clearTimeout( this.timer );
  this.element.find( ".ui-menu" ).not( submenu.parents( ".ui-menu" ) )
   .hide()
   .attr( "aria-hidden", "true" );

  submenu
   .show()
   .removeAttr( "aria-hidden" )
   .attr( "aria-expanded", "true" )
   .position( position );
 },

 collapseAll: function( event, all ) {
  clearTimeout( this.timer );
  this.timer = this._delay( function() {

   // If we were passed an event, look for the submenu that contains the event
   var currentMenu = all ? this.element :
    $( event && event.target ).closest( this.element.find( ".ui-menu" ) );

   // If we found no valid submenu ancestor, use the main menu to close all
   // sub menus anyway
   if ( !currentMenu.length ) {
    currentMenu = this.element;
   }

   this._close( currentMenu );

   this.blur( event );

   // Work around active item staying active after menu is blurred
   this._removeClass( currentMenu.find( ".ui-state-active" ), null, "ui-state-active" );

   this.activeMenu = currentMenu;
  }, this.delay );
 },

 // With no arguments, closes the currently active menu - if nothing is active
 // it closes all menus.  If passed an argument, it will search for menus BELOW
 _close: function( startMenu ) {
  if ( !startMenu ) {
   startMenu = this.active ? this.active.parent() : this.element;
  }

  startMenu.find( ".ui-menu" )
   .hide()
   .attr( "aria-hidden", "true" )
   .attr( "aria-expanded", "false" );
 },

 _closeOnDocumentClick: function( event ) {
  return !$( event.target ).closest( ".ui-menu" ).length;
 },

 _isDivider: function( item ) {

  // Match hyphen, em dash, en dash
  return !/[^\-\u2014\u2013\s]/.test( item.text() );
 },

 collapse: function( event ) {
  var newItem = this.active &&
   this.active.parent().closest( ".ui-menu-item", this.element );
  if ( newItem && newItem.length ) {
   this._close();
   this.focus( event, newItem );
  }
 },

 expand: function( event ) {
  var newItem = this.active &&
   this.active
    .children( ".ui-menu " )
     .find( this.options.items )
      .first();

  if ( newItem && newItem.length ) {
   this._open( newItem.parent() );

   // Delay so Firefox will not hide activedescendant change in expanding submenu from AT
   this._delay( function() {
    this.focus( event, newItem );
   } );
  }
 },

 next: function( event ) {
  this._move( "next", "first", event );
 },

 previous: function( event ) {
  this._move( "prev", "last", event );
 },

 isFirstItem: function() {
  return this.active && !this.active.prevAll( ".ui-menu-item" ).length;
 },

 isLastItem: function() {
  return this.active && !this.active.nextAll( ".ui-menu-item" ).length;
 },

 _move: function( direction, filter, event ) {
  var next;
  if ( this.active ) {
   if ( direction === "first" || direction === "last" ) {
    next = this.active
     [ direction === "first" ? "prevAll" : "nextAll" ]( ".ui-menu-item" )
     .eq( -1 );
   } else {
    next = this.active
     [ direction + "All" ]( ".ui-menu-item" )
     .eq( 0 );
   }
  }
  if ( !next || !next.length || !this.active ) {
   next = this.activeMenu.find( this.options.items )[ filter ]();
  }

  this.focus( event, next );
 },

 nextPage: function( event ) {
  var item, base, height;

  if ( !this.active ) {
   this.next( event );
   return;
  }
  if ( this.isLastItem() ) {
   return;
  }
  if ( this._hasScroll() ) {
   base = this.active.offset().top;
   height = this.element.height();
   this.active.nextAll( ".ui-menu-item" ).each( function() {
    item = $( this );
    return item.offset().top - base - height < 0;
   } );

   this.focus( event, item );
  } else {
   this.focus( event, this.activeMenu.find( this.options.items )
    [ !this.active ? "first" : "last" ]() );
  }
 },

 previousPage: function( event ) {
  var item, base, height;
  if ( !this.active ) {
   this.next( event );
   return;
  }
  if ( this.isFirstItem() ) {
   return;
  }
  if ( this._hasScroll() ) {
   base = this.active.offset().top;
   height = this.element.height();
   this.active.prevAll( ".ui-menu-item" ).each( function() {
    item = $( this );
    return item.offset().top - base + height > 0;
   } );

   this.focus( event, item );
  } else {
   this.focus( event, this.activeMenu.find( this.options.items ).first() );
  }
 },

 _hasScroll: function() {
  return this.element.outerHeight() < this.element.prop( "scrollHeight" );
 },

 select: function( event ) {

  // TODO: It should never be possible to not have an active item at this
  // point, but the tests don't trigger mouseenter before click.
  this.active = this.active || $( event.target ).closest( ".ui-menu-item" );
  var ui = { item: this.active };
  if ( !this.active.has( ".ui-menu" ).length ) {
   this.collapseAll( event, true );
  }
  this._trigger( "select", event, ui );
 },

 _filterMenuItems: function( character ) {
  var escapedCharacter = character.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" ),
   regex = new RegExp( "^" + escapedCharacter, "i" );

  return this.activeMenu
   .find( this.options.items )

    // Only match on items, not dividers or other content (#10571)
    .filter( ".ui-menu-item" )
     .filter( function() {
      return regex.test(
       $.trim( $( this ).children( ".ui-menu-item-wrapper" ).text() ) );
     } );
 }
} );


/*!
 * jQuery UI Autocomplete 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Autocomplete
//>>group: Widgets
//>>description: Lists suggested words as the user is typing.
//>>docs: http://api.jqueryui.com/autocomplete/
//>>demos: http://jqueryui.com/autocomplete/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/autocomplete.css
//>>css.theme: ../../themes/base/theme.css



$.widget( "ui.autocomplete", {
 version: "1.12.1",
 defaultElement: "<input>",
 options: {
  appendTo: null,
  autoFocus: false,
  delay: 300,
  minLength: 1,
  position: {
   my: "left top",
   at: "left bottom",
   collision: "none"
  },
  source: null,

  // Callbacks
  change: null,
  close: null,
  focus: null,
  open: null,
  response: null,
  search: null,
  select: null
 },

 requestIndex: 0,
 pending: 0,

 _create: function() {

  // Some browsers only repeat keydown events, not keypress events,
  // so we use the suppressKeyPress flag to determine if we've already
  // handled the keydown event. #7269
  // Unfortunately the code for & in keypress is the same as the up arrow,
  // so we use the suppressKeyPressRepeat flag to avoid handling keypress
  // events when we know the keydown event was used to modify the
  // search term. #7799
  var suppressKeyPress, suppressKeyPressRepeat, suppressInput,
   nodeName = this.element[ 0 ].nodeName.toLowerCase(),
   isTextarea = nodeName === "textarea",
   isInput = nodeName === "input";

  // Textareas are always multi-line
  // Inputs are always single-line, even if inside a contentEditable element
  // IE also treats inputs as contentEditable
  // All other element types are determined by whether or not they're contentEditable
  this.isMultiLine = isTextarea || !isInput && this._isContentEditable( this.element );

  this.valueMethod = this.element[ isTextarea || isInput ? "val" : "text" ];
  this.isNewMenu = true;

  this._addClass( "ui-autocomplete-input" );
  this.element.attr( "autocomplete", "off" );

  this._on( this.element, {
   keydown: function( event ) {
    if ( this.element.prop( "readOnly" ) ) {
     suppressKeyPress = true;
     suppressInput = true;
     suppressKeyPressRepeat = true;
     return;
    }

    suppressKeyPress = false;
    suppressInput = false;
    suppressKeyPressRepeat = false;
    var keyCode = $.ui.keyCode;
    switch ( event.keyCode ) {
    case keyCode.PAGE_UP:
     suppressKeyPress = true;
     this._move( "previousPage", event );
     break;
    case keyCode.PAGE_DOWN:
     suppressKeyPress = true;
     this._move( "nextPage", event );
     break;
    case keyCode.UP:
     suppressKeyPress = true;
     this._keyEvent( "previous", event );
     break;
    case keyCode.DOWN:
     suppressKeyPress = true;
     this._keyEvent( "next", event );
     break;
    case keyCode.ENTER:

     // when menu is open and has focus
     if ( this.menu.active ) {

      // #6055 - Opera still allows the keypress to occur
      // which causes forms to submit
      suppressKeyPress = true;
      event.preventDefault();
      this.menu.select( event );
     }
     break;
    case keyCode.TAB:
     if ( this.menu.active ) {
      this.menu.select( event );
     }
     break;
    case keyCode.ESCAPE:
     if ( this.menu.element.is( ":visible" ) ) {
      if ( !this.isMultiLine ) {
       this._value( this.term );
      }
      this.close( event );

      // Different browsers have different default behavior for escape
      // Single press can mean undo or clear
      // Double press in IE means clear the whole form
      event.preventDefault();
     }
     break;
    default:
     suppressKeyPressRepeat = true;

     // search timeout should be triggered before the input value is changed
     this._searchTimeout( event );
     break;
    }
   },
   keypress: function( event ) {
    if ( suppressKeyPress ) {
     suppressKeyPress = false;
     if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
      event.preventDefault();
     }
     return;
    }
    if ( suppressKeyPressRepeat ) {
     return;
    }

    // Replicate some key handlers to allow them to repeat in Firefox and Opera
    var keyCode = $.ui.keyCode;
    switch ( event.keyCode ) {
    case keyCode.PAGE_UP:
     this._move( "previousPage", event );
     break;
    case keyCode.PAGE_DOWN:
     this._move( "nextPage", event );
     break;
    case keyCode.UP:
     this._keyEvent( "previous", event );
     break;
    case keyCode.DOWN:
     this._keyEvent( "next", event );
     break;
    }
   },
   input: function( event ) {
    if ( suppressInput ) {
     suppressInput = false;
     event.preventDefault();
     return;
    }
    this._searchTimeout( event );
   },
   focus: function() {
    this.selectedItem = null;
    this.previous = this._value();
   },
   blur: function( event ) {
    if ( this.cancelBlur ) {
     delete this.cancelBlur;
     return;
    }

    clearTimeout( this.searching );
    this.close( event );
    this._change( event );
   }
  } );

  this._initSource();
  this.menu = $( "<ul>" )
   .appendTo( this._appendTo() )
   .menu( {

    // disable ARIA support, the live region takes care of that
    role: null
   } )
   .hide()
   .menu( "instance" );

  this._addClass( this.menu.element, "ui-autocomplete", "ui-front" );
  this._on( this.menu.element, {
   mousedown: function( event ) {

    // prevent moving focus out of the text field
    event.preventDefault();

    // IE doesn't prevent moving focus even with event.preventDefault()
    // so we set a flag to know when we should ignore the blur event
    this.cancelBlur = true;
    this._delay( function() {
     delete this.cancelBlur;

     // Support: IE 8 only
     // Right clicking a menu item or selecting text from the menu items will
     // result in focus moving out of the input. However, we've already received
     // and ignored the blur event because of the cancelBlur flag set above. So
     // we restore focus to ensure that the menu closes properly based on the user's
     // next actions.
     if ( this.element[ 0 ] !== $.ui.safeActiveElement( this.document[ 0 ] ) ) {
      this.element.trigger( "focus" );
     }
    } );
   },
   menufocus: function( event, ui ) {
    var label, item;

    // support: Firefox
    // Prevent accidental activation of menu items in Firefox (#7024 #9118)
    if ( this.isNewMenu ) {
     this.isNewMenu = false;
     if ( event.originalEvent && /^mouse/.test( event.originalEvent.type ) ) {
      this.menu.blur();

      this.document.one( "mousemove", function() {
       $( event.target ).trigger( event.originalEvent );
      } );

      return;
     }
    }

    item = ui.item.data( "ui-autocomplete-item" );
    if ( false !== this._trigger( "focus", event, { item: item } ) ) {

     // use value to match what will end up in the input, if it was a key event
     if ( event.originalEvent && /^key/.test( event.originalEvent.type ) ) {
      this._value( item.value );
     }
    }

    // Announce the value in the liveRegion
    label = ui.item.attr( "aria-label" ) || item.value;
    if ( label && $.trim( label ).length ) {
     this.liveRegion.children().hide();
     $( "<div>" ).text( label ).appendTo( this.liveRegion );
    }
   },
   menuselect: function( event, ui ) {
    var item = ui.item.data( "ui-autocomplete-item" ),
     previous = this.previous;

    // Only trigger when focus was lost (click on menu)
    if ( this.element[ 0 ] !== $.ui.safeActiveElement( this.document[ 0 ] ) ) {
     this.element.trigger( "focus" );
     this.previous = previous;

     // #6109 - IE triggers two focus events and the second
     // is asynchronous, so we need to reset the previous
     // term synchronously and asynchronously :-(
     this._delay( function() {
      this.previous = previous;
      this.selectedItem = item;
     } );
    }

    if ( false !== this._trigger( "select", event, { item: item } ) ) {
     this._value( item.value );
    }

    // reset the term after the select event
    // this allows custom select handling to work properly
    this.term = this._value();

    this.close( event );
    this.selectedItem = item;
   }
  } );

  this.liveRegion = $( "<div>", {
   role: "status",
   "aria-live": "assertive",
   "aria-relevant": "additions"
  } )
   .appendTo( this.document[ 0 ].body );

  this._addClass( this.liveRegion, null, "ui-helper-hidden-accessible" );

  // Turning off autocomplete prevents the browser from remembering the
  // value when navigating through history, so we re-enable autocomplete
  // if the page is unloaded before the widget is destroyed. #7790
  this._on( this.window, {
   beforeunload: function() {
    this.element.removeAttr( "autocomplete" );
   }
  } );
 },

 _destroy: function() {
  clearTimeout( this.searching );
  this.element.removeAttr( "autocomplete" );
  this.menu.element.remove();
  this.liveRegion.remove();
 },

 _setOption: function( key, value ) {
  this._super( key, value );
  if ( key === "source" ) {
   this._initSource();
  }
  if ( key === "appendTo" ) {
   this.menu.element.appendTo( this._appendTo() );
  }
  if ( key === "disabled" && value && this.xhr ) {
   this.xhr.abort();
  }
 },

 _isEventTargetInWidget: function( event ) {
  var menuElement = this.menu.element[ 0 ];

  return event.target === this.element[ 0 ] ||
   event.target === menuElement ||
   $.contains( menuElement, event.target );
 },

 _closeOnClickOutside: function( event ) {
  if ( !this._isEventTargetInWidget( event ) ) {
   this.close();
  }
 },

 _appendTo: function() {
  var element = this.options.appendTo;

  if ( element ) {
   element = element.jquery || element.nodeType ?
    $( element ) :
    this.document.find( element ).eq( 0 );
  }

  if ( !element || !element[ 0 ] ) {
   element = this.element.closest( ".ui-front, dialog" );
  }

  if ( !element.length ) {
   element = this.document[ 0 ].body;
  }

  return element;
 },

 _initSource: function() {
  var array, url,
   that = this;
  if ( $.isArray( this.options.source ) ) {
   array = this.options.source;
   this.source = function( request, response ) {
    response( $.ui.autocomplete.filter( array, request.term ) );
   };
  } else if ( typeof this.options.source === "string" ) {
   url = this.options.source;
   this.source = function( request, response ) {
    if ( that.xhr ) {
     that.xhr.abort();
    }
    that.xhr = $.ajax( {
     url: url,
     data: request,
     dataType: "json",
     success: function( data ) {
      response( data );
     },
     error: function() {
      response( [] );
     }
    } );
   };
  } else {
   this.source = this.options.source;
  }
 },

 _searchTimeout: function( event ) {
  clearTimeout( this.searching );
  this.searching = this._delay( function() {

   // Search if the value has changed, or if the user retypes the same value (see #7434)
   var equalValues = this.term === this._value(),
    menuVisible = this.menu.element.is( ":visible" ),
    modifierKey = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;

   if ( !equalValues || ( equalValues && !menuVisible && !modifierKey ) ) {
    this.selectedItem = null;
    this.search( null, event );
   }
  }, this.options.delay );
 },

 search: function( value, event ) {
  value = value != null ? value : this._value();

  // Always save the actual value, not the one passed as an argument
  this.term = this._value();

  if ( value.length < this.options.minLength ) {
   return this.close( event );
  }

  if ( this._trigger( "search", event ) === false ) {
   return;
  }

  return this._search( value );
 },

 _search: function( value ) {
  this.pending++;
  this._addClass( "ui-autocomplete-loading" );
  this.cancelSearch = false;

  this.source( { term: value }, this._response() );
 },

 _response: function() {
  var index = ++this.requestIndex;

  return $.proxy( function( content ) {
   if ( index === this.requestIndex ) {
    this.__response( content );
   }

   this.pending--;
   if ( !this.pending ) {
    this._removeClass( "ui-autocomplete-loading" );
   }
  }, this );
 },

 __response: function( content ) {
  if ( content ) {
   content = this._normalize( content );
  }
  this._trigger( "response", null, { content: content } );
  if ( !this.options.disabled && content && content.length && !this.cancelSearch ) {
   this._suggest( content );
   this._trigger( "open" );
  } else {

   // use ._close() instead of .close() so we don't cancel future searches
   this._close();
  }
 },

 close: function( event ) {
  this.cancelSearch = true;
  this._close( event );
 },

 _close: function( event ) {

  // Remove the handler that closes the menu on outside clicks
  this._off( this.document, "mousedown" );

  if ( this.menu.element.is( ":visible" ) ) {
   this.menu.element.hide();
   this.menu.blur();
   this.isNewMenu = true;
   this._trigger( "close", event );
  }
 },

 _change: function( event ) {
  if ( this.previous !== this._value() ) {
   this._trigger( "change", event, { item: this.selectedItem } );
  }
 },

 _normalize: function( items ) {

  // assume all items have the right format when the first item is complete
  if ( items.length && items[ 0 ].label && items[ 0 ].value ) {
   return items;
  }
  return $.map( items, function( item ) {
   if ( typeof item === "string" ) {
    return {
     label: item,
     value: item
    };
   }
   return $.extend( {}, item, {
    label: item.label || item.value,
    value: item.value || item.label
   } );
  } );
 },

 _suggest: function( items ) {
  var ul = this.menu.element.empty();
  this._renderMenu( ul, items );
  this.isNewMenu = true;
  this.menu.refresh();

  // Size and position menu
  ul.show();
  this._resizeMenu();
  ul.position( $.extend( {
   of: this.element
  }, this.options.position ) );

  if ( this.options.autoFocus ) {
   this.menu.next();
  }

  // Listen for interactions outside of the widget (#6642)
  this._on( this.document, {
   mousedown: "_closeOnClickOutside"
  } );
 },

 _resizeMenu: function() {
  var ul = this.menu.element;
  ul.outerWidth( Math.max(

   // Firefox wraps long text (possibly a rounding bug)
   // so we add 1px to avoid the wrapping (#7513)
   ul.width( "" ).outerWidth() + 1,
   this.element.outerWidth()
  ) );
 },

 _renderMenu: function( ul, items ) {
  var that = this;
  $.each( items, function( index, item ) {
   that._renderItemData( ul, item );
  } );
 },

 _renderItemData: function( ul, item ) {
  return this._renderItem( ul, item ).data( "ui-autocomplete-item", item );
 },

 _renderItem: function( ul, item ) {
  return $( "<li>" )
   .append( $( "<div>" ).text( item.label ) )
   .appendTo( ul );
 },

 _move: function( direction, event ) {
  if ( !this.menu.element.is( ":visible" ) ) {
   this.search( null, event );
   return;
  }
  if ( this.menu.isFirstItem() && /^previous/.test( direction ) ||
    this.menu.isLastItem() && /^next/.test( direction ) ) {

   if ( !this.isMultiLine ) {
    this._value( this.term );
   }

   this.menu.blur();
   return;
  }
  this.menu[ direction ]( event );
 },

 widget: function() {
  return this.menu.element;
 },

 _value: function() {
  return this.valueMethod.apply( this.element, arguments );
 },

 _keyEvent: function( keyEvent, event ) {
  if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
   this._move( keyEvent, event );

   // Prevents moving cursor to beginning/end of the text field in some browsers
   event.preventDefault();
  }
 },

 // Support: Chrome <=50
 // We should be able to just use this.element.prop( "isContentEditable" )
 // but hidden elements always report false in Chrome.
 // https://code.google.com/p/chromium/issues/detail?id=313082
 _isContentEditable: function( element ) {
  if ( !element.length ) {
   return false;
  }

  var editable = element.prop( "contentEditable" );

  if ( editable === "inherit" ) {
    return this._isContentEditable( element.parent() );
  }

  return editable === "true";
 }
} );

$.extend( $.ui.autocomplete, {
 escapeRegex: function( value ) {
  return value.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" );
 },
 filter: function( array, term ) {
  var matcher = new RegExp( $.ui.autocomplete.escapeRegex( term ), "i" );
  return $.grep( array, function( value ) {
   return matcher.test( value.label || value.value || value );
  } );
 }
} );

// Live region extension, adding a `messages` option
// NOTE: This is an experimental API. We are still investigating
// a full solution for string manipulation and internationalization.
$.widget( "ui.autocomplete", $.ui.autocomplete, {
 options: {
  messages: {
   noResults: "No search results.",
   results: function( amount ) {
    return amount + ( amount > 1 ? " results are" : " result is" ) +
     " available, use up and down arrow keys to navigate.";
   }
  }
 },

 __response: function( content ) {
  var message;
  this._superApply( arguments );
  if ( this.options.disabled || this.cancelSearch ) {
   return;
  }
  if ( content && content.length ) {
   message = this.options.messages.results( content.length );
  } else {
   message = this.options.messages.noResults;
  }
  this.liveRegion.children().hide();
  $( "<div>" ).text( message ).appendTo( this.liveRegion );
 }
} );

var widgetsAutocomplete = $.ui.autocomplete;


/*!
 * jQuery UI Controlgroup 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Controlgroup
//>>group: Widgets
//>>description: Visually groups form control widgets
//>>docs: http://api.jqueryui.com/controlgroup/
//>>demos: http://jqueryui.com/controlgroup/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/controlgroup.css
//>>css.theme: ../../themes/base/theme.css


var controlgroupCornerRegex = /ui-corner-([a-z]){2,6}/g;

var widgetsControlgroup = $.widget( "ui.controlgroup", {
 version: "1.12.1",
 defaultElement: "<div>",
 options: {
  direction: "horizontal",
  disabled: null,
  onlyVisible: true,
  items: {
   "button": "input[type=button], input[type=submit], input[type=reset], button, a",
   "controlgroupLabel": ".ui-controlgroup-label",
   "checkboxradio": "input[type='checkbox'], input[type='radio']",
   "selectmenu": "select",
   "spinner": ".ui-spinner-input"
  }
 },

 _create: function() {
  this._enhance();
 },

 // To support the enhanced option in jQuery Mobile, we isolate DOM manipulation
 _enhance: function() {
  this.element.attr( "role", "toolbar" );
  this.refresh();
 },

 _destroy: function() {
  this._callChildMethod( "destroy" );
  this.childWidgets.removeData( "ui-controlgroup-data" );
  this.element.removeAttr( "role" );
  if ( this.options.items.controlgroupLabel ) {
   this.element
    .find( this.options.items.controlgroupLabel )
    .find( ".ui-controlgroup-label-contents" )
    .contents().unwrap();
  }
 },

 _initWidgets: function() {
  var that = this,
   childWidgets = [];

  // First we iterate over each of the items options
  $.each( this.options.items, function( widget, selector ) {
   var labels;
   var options = {};

   // Make sure the widget has a selector set
   if ( !selector ) {
    return;
   }

   if ( widget === "controlgroupLabel" ) {
    labels = that.element.find( selector );
    labels.each( function() {
     var element = $( this );

     if ( element.children( ".ui-controlgroup-label-contents" ).length ) {
      return;
     }
     element.contents()
      .wrapAll( "<span class='ui-controlgroup-label-contents'></span>" );
    } );
    that._addClass( labels, null, "ui-widget ui-widget-content ui-state-default" );
    childWidgets = childWidgets.concat( labels.get() );
    return;
   }

   // Make sure the widget actually exists
   if ( !$.fn[ widget ] ) {
    return;
   }

   // We assume everything is in the middle to start because we can't determine
   // first / last elements until all enhancments are done.
   if ( that[ "_" + widget + "Options" ] ) {
    options = that[ "_" + widget + "Options" ]( "middle" );
   } else {
    options = { classes: {} };
   }

   // Find instances of this widget inside controlgroup and init them
   that.element
    .find( selector )
    .each( function() {
     var element = $( this );
     var instance = element[ widget ]( "instance" );

     // We need to clone the default options for this type of widget to avoid
     // polluting the variable options which has a wider scope than a single widget.
     var instanceOptions = $.widget.extend( {}, options );

     // If the button is the child of a spinner ignore it
     // TODO: Find a more generic solution
     if ( widget === "button" && element.parent( ".ui-spinner" ).length ) {
      return;
     }

     // Create the widget if it doesn't exist
     if ( !instance ) {
      instance = element[ widget ]()[ widget ]( "instance" );
     }
     if ( instance ) {
      instanceOptions.classes =
       that._resolveClassesValues( instanceOptions.classes, instance );
     }
     element[ widget ]( instanceOptions );

     // Store an instance of the controlgroup to be able to reference
     // from the outermost element for changing options and refresh
     var widgetElement = element[ widget ]( "widget" );
     $.data( widgetElement[ 0 ], "ui-controlgroup-data",
      instance ? instance : element[ widget ]( "instance" ) );

     childWidgets.push( widgetElement[ 0 ] );
    } );
  } );

  this.childWidgets = $( $.unique( childWidgets ) );
  this._addClass( this.childWidgets, "ui-controlgroup-item" );
 },

 _callChildMethod: function( method ) {
  this.childWidgets.each( function() {
   var element = $( this ),
    data = element.data( "ui-controlgroup-data" );
   if ( data && data[ method ] ) {
    data[ method ]();
   }
  } );
 },

 _updateCornerClass: function( element, position ) {
  var remove = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all";
  var add = this._buildSimpleOptions( position, "label" ).classes.label;

  this._removeClass( element, null, remove );
  this._addClass( element, null, add );
 },

 _buildSimpleOptions: function( position, key ) {
  var direction = this.options.direction === "vertical";
  var result = {
   classes: {}
  };
  result.classes[ key ] = {
   "middle": "",
   "first": "ui-corner-" + ( direction ? "top" : "left" ),
   "last": "ui-corner-" + ( direction ? "bottom" : "right" ),
   "only": "ui-corner-all"
  }[ position ];

  return result;
 },

 _spinnerOptions: function( position ) {
  var options = this._buildSimpleOptions( position, "ui-spinner" );

  options.classes[ "ui-spinner-up" ] = "";
  options.classes[ "ui-spinner-down" ] = "";

  return options;
 },

 _buttonOptions: function( position ) {
  return this._buildSimpleOptions( position, "ui-button" );
 },

 _checkboxradioOptions: function( position ) {
  return this._buildSimpleOptions( position, "ui-checkboxradio-label" );
 },

 _selectmenuOptions: function( position ) {
  var direction = this.options.direction === "vertical";
  return {
   width: direction ? "auto" : false,
   classes: {
    middle: {
     "ui-selectmenu-button-open": "",
     "ui-selectmenu-button-closed": ""
    },
    first: {
     "ui-selectmenu-button-open": "ui-corner-" + ( direction ? "top" : "tl" ),
     "ui-selectmenu-button-closed": "ui-corner-" + ( direction ? "top" : "left" )
    },
    last: {
     "ui-selectmenu-button-open": direction ? "" : "ui-corner-tr",
     "ui-selectmenu-button-closed": "ui-corner-" + ( direction ? "bottom" : "right" )
    },
    only: {
     "ui-selectmenu-button-open": "ui-corner-top",
     "ui-selectmenu-button-closed": "ui-corner-all"
    }

   }[ position ]
  };
 },

 _resolveClassesValues: function( classes, instance ) {
  var result = {};
  $.each( classes, function( key ) {
   var current = instance.options.classes[ key ] || "";
   current = $.trim( current.replace( controlgroupCornerRegex, "" ) );
   result[ key ] = ( current + " " + classes[ key ] ).replace( /\s+/g, " " );
  } );
  return result;
 },

 _setOption: function( key, value ) {
  if ( key === "direction" ) {
   this._removeClass( "ui-controlgroup-" + this.options.direction );
  }

  this._super( key, value );
  if ( key === "disabled" ) {
   this._callChildMethod( value ? "disable" : "enable" );
   return;
  }

  this.refresh();
 },

 refresh: function() {
  var children,
   that = this;

  this._addClass( "ui-controlgroup ui-controlgroup-" + this.options.direction );

  if ( this.options.direction === "horizontal" ) {
   this._addClass( null, "ui-helper-clearfix" );
  }
  this._initWidgets();

  children = this.childWidgets;

  // We filter here because we need to track all childWidgets not just the visible ones
  if ( this.options.onlyVisible ) {
   children = children.filter( ":visible" );
  }

  if ( children.length ) {

   // We do this last because we need to make sure all enhancment is done
   // before determining first and last
   $.each( [ "first", "last" ], function( index, value ) {
    var instance = children[ value ]().data( "ui-controlgroup-data" );

    if ( instance && that[ "_" + instance.widgetName + "Options" ] ) {
     var options = that[ "_" + instance.widgetName + "Options" ](
      children.length === 1 ? "only" : value
     );
     options.classes = that._resolveClassesValues( options.classes, instance );
     instance.element[ instance.widgetName ]( options );
    } else {
     that._updateCornerClass( children[ value ](), value );
    }
   } );

   // Finally call the refresh method on each of the child widgets.
   this._callChildMethod( "refresh" );
  }
 }
} );

/*!
 * jQuery UI Checkboxradio 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Checkboxradio
//>>group: Widgets
//>>description: Enhances a form with multiple themeable checkboxes or radio buttons.
//>>docs: http://api.jqueryui.com/checkboxradio/
//>>demos: http://jqueryui.com/checkboxradio/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/button.css
//>>css.structure: ../../themes/base/checkboxradio.css
//>>css.theme: ../../themes/base/theme.css



$.widget( "ui.checkboxradio", [ $.ui.formResetMixin, {
 version: "1.12.1",
 options: {
  disabled: null,
  label: null,
  icon: true,
  classes: {
   "ui-checkboxradio-label": "ui-corner-all",
   "ui-checkboxradio-icon": "ui-corner-all"
  }
 },

 _getCreateOptions: function() {
  var disabled, labels;
  var that = this;
  var options = this._super() || {};

  // We read the type here, because it makes more sense to throw a element type error first,
  // rather then the error for lack of a label. Often if its the wrong type, it
  // won't have a label (e.g. calling on a div, btn, etc)
  this._readType();

  labels = this.element.labels();

  // If there are multiple labels, use the last one
  this.label = $( labels[ labels.length - 1 ] );
  if ( !this.label.length ) {
   $.error( "No label found for checkboxradio widget" );
  }

  this.originalLabel = "";

  // We need to get the label text but this may also need to make sure it does not contain the
  // input itself.
  this.label.contents().not( this.element[ 0 ] ).each( function() {

   // The label contents could be text, html, or a mix. We concat each element to get a
   // string representation of the label, without the input as part of it.
   that.originalLabel += this.nodeType === 3 ? $( this ).text() : this.outerHTML;
  } );

  // Set the label option if we found label text
  if ( this.originalLabel ) {
   options.label = this.originalLabel;
  }

  disabled = this.element[ 0 ].disabled;
  if ( disabled != null ) {
   options.disabled = disabled;
  }
  return options;
 },

 _create: function() {
  var checked = this.element[ 0 ].checked;

  this._bindFormResetHandler();

  if ( this.options.disabled == null ) {
   this.options.disabled = this.element[ 0 ].disabled;
  }

  this._setOption( "disabled", this.options.disabled );
  this._addClass( "ui-checkboxradio", "ui-helper-hidden-accessible" );
  this._addClass( this.label, "ui-checkboxradio-label", "ui-button ui-widget" );

  if ( this.type === "radio" ) {
   this._addClass( this.label, "ui-checkboxradio-radio-label" );
  }

  if ( this.options.label && this.options.label !== this.originalLabel ) {
   this._updateLabel();
  } else if ( this.originalLabel ) {
   this.options.label = this.originalLabel;
  }

  this._enhance();

  if ( checked ) {
   this._addClass( this.label, "ui-checkboxradio-checked", "ui-state-active" );
   if ( this.icon ) {
    this._addClass( this.icon, null, "ui-state-hover" );
   }
  }

  this._on( {
   change: "_toggleClasses",
   focus: function() {
    this._addClass( this.label, null, "ui-state-focus ui-visual-focus" );
   },
   blur: function() {
    this._removeClass( this.label, null, "ui-state-focus ui-visual-focus" );
   }
  } );
 },

 _readType: function() {
  var nodeName = this.element[ 0 ].nodeName.toLowerCase();
  this.type = this.element[ 0 ].type;
  if ( nodeName !== "input" || !/radio|checkbox/.test( this.type ) ) {
   $.error( "Can't create checkboxradio on element.nodeName=" + nodeName +
    " and element.type=" + this.type );
  }
 },

 // Support jQuery Mobile enhanced option
 _enhance: function() {
  this._updateIcon( this.element[ 0 ].checked );
 },

 widget: function() {
  return this.label;
 },

 _getRadioGroup: function() {
  var group;
  var name = this.element[ 0 ].name;
  var nameSelector = "input[name='" + $.ui.escapeSelector( name ) + "']";

  if ( !name ) {
   return $( [] );
  }

  if ( this.form.length ) {
   group = $( this.form[ 0 ].elements ).filter( nameSelector );
  } else {

   // Not inside a form, check all inputs that also are not inside a form
   group = $( nameSelector ).filter( function() {
    return $( this ).form().length === 0;
   } );
  }

  return group.not( this.element );
 },

 _toggleClasses: function() {
  var checked = this.element[ 0 ].checked;
  this._toggleClass( this.label, "ui-checkboxradio-checked", "ui-state-active", checked );

  if ( this.options.icon && this.type === "checkbox" ) {
   this._toggleClass( this.icon, null, "ui-icon-check ui-state-checked", checked )
    ._toggleClass( this.icon, null, "ui-icon-blank", !checked );
  }

  if ( this.type === "radio" ) {
   this._getRadioGroup()
    .each( function() {
     var instance = $( this ).checkboxradio( "instance" );

     if ( instance ) {
      instance._removeClass( instance.label,
       "ui-checkboxradio-checked", "ui-state-active" );
     }
    } );
  }
 },

 _destroy: function() {
  this._unbindFormResetHandler();

  if ( this.icon ) {
   this.icon.remove();
   this.iconSpace.remove();
  }
 },

 _setOption: function( key, value ) {

  // We don't allow the value to be set to nothing
  if ( key === "label" && !value ) {
   return;
  }

  this._super( key, value );

  if ( key === "disabled" ) {
   this._toggleClass( this.label, null, "ui-state-disabled", value );
   this.element[ 0 ].disabled = value;

   // Don't refresh when setting disabled
   return;
  }
  this.refresh();
 },

 _updateIcon: function( checked ) {
  var toAdd = "ui-icon ui-icon-background ";

  if ( this.options.icon ) {
   if ( !this.icon ) {
    this.icon = $( "<span>" );
    this.iconSpace = $( "<span> </span>" );
    this._addClass( this.iconSpace, "ui-checkboxradio-icon-space" );
   }

   if ( this.type === "checkbox" ) {
    toAdd += checked ? "ui-icon-check ui-state-checked" : "ui-icon-blank";
    this._removeClass( this.icon, null, checked ? "ui-icon-blank" : "ui-icon-check" );
   } else {
    toAdd += "ui-icon-blank";
   }
   this._addClass( this.icon, "ui-checkboxradio-icon", toAdd );
   if ( !checked ) {
    this._removeClass( this.icon, null, "ui-icon-check ui-state-checked" );
   }
   this.icon.prependTo( this.label ).after( this.iconSpace );
  } else if ( this.icon !== undefined ) {
   this.icon.remove();
   this.iconSpace.remove();
   delete this.icon;
  }
 },

 _updateLabel: function() {

  // Remove the contents of the label ( minus the icon, icon space, and input )
  var contents = this.label.contents().not( this.element[ 0 ] );
  if ( this.icon ) {
   contents = contents.not( this.icon[ 0 ] );
  }
  if ( this.iconSpace ) {
   contents = contents.not( this.iconSpace[ 0 ] );
  }
  contents.remove();

  this.label.append( this.options.label );
 },

 refresh: function() {
  var checked = this.element[ 0 ].checked,
   isDisabled = this.element[ 0 ].disabled;

  this._updateIcon( checked );
  this._toggleClass( this.label, "ui-checkboxradio-checked", "ui-state-active", checked );
  if ( this.options.label !== null ) {
   this._updateLabel();
  }

  if ( isDisabled !== this.options.disabled ) {
   this._setOptions( { "disabled": isDisabled } );
  }
 }

} ] );

var widgetsCheckboxradio = $.ui.checkboxradio;


/*!
 * jQuery UI Button 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Button
//>>group: Widgets
//>>description: Enhances a form with themeable buttons.
//>>docs: http://api.jqueryui.com/button/
//>>demos: http://jqueryui.com/button/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/button.css
//>>css.theme: ../../themes/base/theme.css



$.widget( "ui.button", {
 version: "1.12.1",
 defaultElement: "<button>",
 options: {
  classes: {
   "ui-button": "ui-corner-all"
  },
  disabled: null,
  icon: null,
  iconPosition: "beginning",
  label: null,
  showLabel: true
 },

 _getCreateOptions: function() {
  var disabled,

   // This is to support cases like in jQuery Mobile where the base widget does have
   // an implementation of _getCreateOptions
   options = this._super() || {};

  this.isInput = this.element.is( "input" );

  disabled = this.element[ 0 ].disabled;
  if ( disabled != null ) {
   options.disabled = disabled;
  }

  this.originalLabel = this.isInput ? this.element.val() : this.element.html();
  if ( this.originalLabel ) {
   options.label = this.originalLabel;
  }

  return options;
 },

 _create: function() {
  if ( !this.option.showLabel & !this.options.icon ) {
   this.options.showLabel = true;
  }

  // We have to check the option again here even though we did in _getCreateOptions,
  // because null may have been passed on init which would override what was set in
  // _getCreateOptions
  if ( this.options.disabled == null ) {
   this.options.disabled = this.element[ 0 ].disabled || false;
  }

  this.hasTitle = !!this.element.attr( "title" );

  // Check to see if the label needs to be set or if its already correct
  if ( this.options.label && this.options.label !== this.originalLabel ) {
   if ( this.isInput ) {
    this.element.val( this.options.label );
   } else {
    this.element.html( this.options.label );
   }
  }
  this._addClass( "ui-button", "ui-widget" );
  this._setOption( "disabled", this.options.disabled );
  this._enhance();

  if ( this.element.is( "a" ) ) {
   this._on( {
    "keyup": function( event ) {
     if ( event.keyCode === $.ui.keyCode.SPACE ) {
      event.preventDefault();

      // Support: PhantomJS <= 1.9, IE 8 Only
      // If a native click is available use it so we actually cause navigation
      // otherwise just trigger a click event
      if ( this.element[ 0 ].click ) {
       this.element[ 0 ].click();
      } else {
       this.element.trigger( "click" );
      }
     }
    }
   } );
  }
 },

 _enhance: function() {
  if ( !this.element.is( "button" ) ) {
   this.element.attr( "role", "button" );
  }

  if ( this.options.icon ) {
   this._updateIcon( "icon", this.options.icon );
   this._updateTooltip();
  }
 },

 _updateTooltip: function() {
  this.title = this.element.attr( "title" );

  if ( !this.options.showLabel && !this.title ) {
   this.element.attr( "title", this.options.label );
  }
 },

 _updateIcon: function( option, value ) {
  var icon = option !== "iconPosition",
   position = icon ? this.options.iconPosition : value,
   displayBlock = position === "top" || position === "bottom";

  // Create icon
  if ( !this.icon ) {
   this.icon = $( "<span>" );

   this._addClass( this.icon, "ui-button-icon", "ui-icon" );

   if ( !this.options.showLabel ) {
    this._addClass( "ui-button-icon-only" );
   }
  } else if ( icon ) {

   // If we are updating the icon remove the old icon class
   this._removeClass( this.icon, null, this.options.icon );
  }

  // If we are updating the icon add the new icon class
  if ( icon ) {
   this._addClass( this.icon, null, value );
  }

  this._attachIcon( position );

  // If the icon is on top or bottom we need to add the ui-widget-icon-block class and remove
  // the iconSpace if there is one.
  if ( displayBlock ) {
   this._addClass( this.icon, null, "ui-widget-icon-block" );
   if ( this.iconSpace ) {
    this.iconSpace.remove();
   }
  } else {

   // Position is beginning or end so remove the ui-widget-icon-block class and add the
   // space if it does not exist
   if ( !this.iconSpace ) {
    this.iconSpace = $( "<span> </span>" );
    this._addClass( this.iconSpace, "ui-button-icon-space" );
   }
   this._removeClass( this.icon, null, "ui-wiget-icon-block" );
   this._attachIconSpace( position );
  }
 },

 _destroy: function() {
  this.element.removeAttr( "role" );

  if ( this.icon ) {
   this.icon.remove();
  }
  if ( this.iconSpace ) {
   this.iconSpace.remove();
  }
  if ( !this.hasTitle ) {
   this.element.removeAttr( "title" );
  }
 },

 _attachIconSpace: function( iconPosition ) {
  this.icon[ /^(?:end|bottom)/.test( iconPosition ) ? "before" : "after" ]( this.iconSpace );
 },

 _attachIcon: function( iconPosition ) {
  this.element[ /^(?:end|bottom)/.test( iconPosition ) ? "append" : "prepend" ]( this.icon );
 },

 _setOptions: function( options ) {
  var newShowLabel = options.showLabel === undefined ?
    this.options.showLabel :
    options.showLabel,
   newIcon = options.icon === undefined ? this.options.icon : options.icon;

  if ( !newShowLabel && !newIcon ) {
   options.showLabel = true;
  }
  this._super( options );
 },

 _setOption: function( key, value ) {
  if ( key === "icon" ) {
   if ( value ) {
    this._updateIcon( key, value );
   } else if ( this.icon ) {
    this.icon.remove();
    if ( this.iconSpace ) {
     this.iconSpace.remove();
    }
   }
  }

  if ( key === "iconPosition" ) {
   this._updateIcon( key, value );
  }

  // Make sure we can't end up with a button that has neither text nor icon
  if ( key === "showLabel" ) {
    this._toggleClass( "ui-button-icon-only", null, !value );
    this._updateTooltip();
  }

  if ( key === "label" ) {
   if ( this.isInput ) {
    this.element.val( value );
   } else {

    // If there is an icon, append it, else nothing then append the value
    // this avoids removal of the icon when setting label text
    this.element.html( value );
    if ( this.icon ) {
     this._attachIcon( this.options.iconPosition );
     this._attachIconSpace( this.options.iconPosition );
    }
   }
  }

  this._super( key, value );

  if ( key === "disabled" ) {
   this._toggleClass( null, "ui-state-disabled", value );
   this.element[ 0 ].disabled = value;
   if ( value ) {
    this.element.blur();
   }
  }
 },

 refresh: function() {

  // Make sure to only check disabled if its an element that supports this otherwise
  // check for the disabled class to determine state
  var isDisabled = this.element.is( "input, button" ) ?
   this.element[ 0 ].disabled : this.element.hasClass( "ui-button-disabled" );

  if ( isDisabled !== this.options.disabled ) {
   this._setOptions( { disabled: isDisabled } );
  }

  this._updateTooltip();
 }
} );

// DEPRECATED
if ( $.uiBackCompat !== false ) {

 // Text and Icons options
 $.widget( "ui.button", $.ui.button, {
  options: {
   text: true,
   icons: {
    primary: null,
    secondary: null
   }
  },

  _create: function() {
   if ( this.options.showLabel && !this.options.text ) {
    this.options.showLabel = this.options.text;
   }
   if ( !this.options.showLabel && this.options.text ) {
    this.options.text = this.options.showLabel;
   }
   if ( !this.options.icon && ( this.options.icons.primary ||
     this.options.icons.secondary ) ) {
    if ( this.options.icons.primary ) {
     this.options.icon = this.options.icons.primary;
    } else {
     this.options.icon = this.options.icons.secondary;
     this.options.iconPosition = "end";
    }
   } else if ( this.options.icon ) {
    this.options.icons.primary = this.options.icon;
   }
   this._super();
  },

  _setOption: function( key, value ) {
   if ( key === "text" ) {
    this._super( "showLabel", value );
    return;
   }
   if ( key === "showLabel" ) {
    this.options.text = value;
   }
   if ( key === "icon" ) {
    this.options.icons.primary = value;
   }
   if ( key === "icons" ) {
    if ( value.primary ) {
     this._super( "icon", value.primary );
     this._super( "iconPosition", "beginning" );
    } else if ( value.secondary ) {
     this._super( "icon", value.secondary );
     this._super( "iconPosition", "end" );
    }
   }
   this._superApply( arguments );
  }
 } );

 $.fn.button = ( function( orig ) {
  return function() {
   if ( !this.length || ( this.length && this[ 0 ].tagName !== "INPUT" ) ||
     ( this.length && this[ 0 ].tagName === "INPUT" && (
      this.attr( "type" ) !== "checkbox" && this.attr( "type" ) !== "radio"
     ) ) ) {
    return orig.apply( this, arguments );
   }
   if ( !$.ui.checkboxradio ) {
    $.error( "Checkboxradio widget missing" );
   }
   if ( arguments.length === 0 ) {
    return this.checkboxradio( {
     "icon": false
    } );
   }
   return this.checkboxradio.apply( this, arguments );
  };
 } )( $.fn.button );

 $.fn.buttonset = function() {
  if ( !$.ui.controlgroup ) {
   $.error( "Controlgroup widget missing" );
  }
  if ( arguments[ 0 ] === "option" && arguments[ 1 ] === "items" && arguments[ 2 ] ) {
   return this.controlgroup.apply( this,
    [ arguments[ 0 ], "items.button", arguments[ 2 ] ] );
  }
  if ( arguments[ 0 ] === "option" && arguments[ 1 ] === "items" ) {
   return this.controlgroup.apply( this, [ arguments[ 0 ], "items.button" ] );
  }
  if ( typeof arguments[ 0 ] === "object" && arguments[ 0 ].items ) {
   arguments[ 0 ].items = {
    button: arguments[ 0 ].items
   };
  }
  return this.controlgroup.apply( this, arguments );
 };
}

var widgetsButton = $.ui.button;


// jscs:disable maximumLineLength
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
/*!
 * jQuery UI Datepicker 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Datepicker
//>>group: Widgets
//>>description: Displays a calendar from an input or inline for selecting dates.
//>>docs: http://api.jqueryui.com/datepicker/
//>>demos: http://jqueryui.com/datepicker/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/datepicker.css
//>>css.theme: ../../themes/base/theme.css



$.extend( $.ui, { datepicker: { version: "1.12.1" } } );

var datepicker_instActive;

function datepicker_getZindex( elem ) {
 var position, value;
 while ( elem.length && elem[ 0 ] !== document ) {

  // Ignore z-index if position is set to a value where z-index is ignored by the browser
  // This makes behavior of this function consistent across browsers
  // WebKit always returns auto if the element is positioned
  position = elem.css( "position" );
  if ( position === "absolute" || position === "relative" || position === "fixed" ) {

   // IE returns 0 when zIndex is not specified
   // other browsers return a string
   // we ignore the case of nested elements with an explicit value of 0
   // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
   value = parseInt( elem.css( "zIndex" ), 10 );
   if ( !isNaN( value ) && value !== 0 ) {
    return value;
   }
  }
  elem = elem.parent();
 }

 return 0;
}
/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */

function Datepicker() {
 this._curInst = null; // The current instance in use
 this._keyEvent = false; // If the last event was a key event
 this._disabledInputs = []; // List of date picker inputs that have been disabled
 this._datepickerShowing = false; // True if the popup picker is showing , false if not
 this._inDialog = false; // True if showing within a "dialog", false if not
 this._mainDivId = "ui-datepicker-div"; // The ID of the main datepicker division
 this._inlineClass = "ui-datepicker-inline"; // The name of the inline marker class
 this._appendClass = "ui-datepicker-append"; // The name of the append marker class
 this._triggerClass = "ui-datepicker-trigger"; // The name of the trigger marker class
 this._dialogClass = "ui-datepicker-dialog"; // The name of the dialog marker class
 this._disableClass = "ui-datepicker-disabled"; // The name of the disabled covering marker class
 this._unselectableClass = "ui-datepicker-unselectable"; // The name of the unselectable cell marker class
 this._currentClass = "ui-datepicker-current-day"; // The name of the current day marker class
 this._dayOverClass = "ui-datepicker-days-cell-over"; // The name of the day hover marker class
 this.regional = []; // Available regional settings, indexed by language code
 this.regional[ "" ] = { // Default regional settings
  closeText: "Done", // Display text for close link
  prevText: "Prev", // Display text for previous month link
  nextText: "Next", // Display text for next month link
  currentText: "Today", // Display text for current month link
  monthNames: [ "January","February","March","April","May","June",
   "July","August","September","October","November","December" ], // Names of months for drop-down and formatting
  monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ], // For formatting
  dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ], // For formatting
  dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], // For formatting
  dayNamesMin: [ "Su","Mo","Tu","We","Th","Fr","Sa" ], // Column headings for days starting at Sunday
  weekHeader: "Wk", // Column header for week of the year
  dateFormat: "mm/dd/yy", // See format options on parseDate
  firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
  isRTL: false, // True if right-to-left language, false if left-to-right
  showMonthAfterYear: false, // True if the year select precedes month, false for month then year
  yearSuffix: "" // Additional text to append to the year in the month headers
 };
 this._defaults = { // Global defaults for all the date picker instances
  showOn: "focus", // "focus" for popup on focus,
   // "button" for trigger button, or "both" for either
  showAnim: "fadeIn", // Name of jQuery animation for popup
  showOptions: {}, // Options for enhanced animations
  defaultDate: null, // Used when field is blank: actual date,
   // +/-number for offset from today, null for today
  appendText: "", // Display text following the input box, e.g. showing the format
  buttonText: "...", // Text for trigger button
  buttonImage: "", // URL for trigger button image
  buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
  hideIfNoPrevNext: false, // True to hide next/previous month links
   // if not applicable, false to just disable them
  navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
  gotoCurrent: false, // True if today link goes back to current selection instead
  changeMonth: false, // True if month can be selected directly, false if only prev/next
  changeYear: false, // True if year can be selected directly, false if only prev/next
  yearRange: "c-10:c+10", // Range of years to display in drop-down,
   // either relative to today's year (-nn:+nn), relative to currently displayed year
   // (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
  showOtherMonths: false, // True to show dates in other months, false to leave blank
  selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
  showWeek: false, // True to show week of the year, false to not show it
  calculateWeek: this.iso8601Week, // How to calculate the week of the year,
   // takes a Date and returns the number of the week for it
  shortYearCutoff: "+10", // Short year values < this are in the current century,
   // > this are in the previous century,
   // string value starting with "+" for current year + value
  minDate: null, // The earliest selectable date, or null for no limit
  maxDate: null, // The latest selectable date, or null for no limit
  duration: "fast", // Duration of display/closure
  beforeShowDay: null, // Function that takes a date and returns an array with
   // [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
   // [2] = cell title (optional), e.g. $.datepicker.noWeekends
  beforeShow: null, // Function that takes an input field and
   // returns a set of custom settings for the date picker
  onSelect: null, // Define a callback function when a date is selected
  onChangeMonthYear: null, // Define a callback function when the month or year is changed
  onClose: null, // Define a callback function when the datepicker is closed
  numberOfMonths: 1, // Number of months to show at a time
  showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
  stepMonths: 1, // Number of months to step back/forward
  stepBigMonths: 12, // Number of months to step back/forward for the big links
  altField: "", // Selector for an alternate field to store selected dates into
  altFormat: "", // The date format to use for the alternate field
  constrainInput: true, // The input is constrained by the current date format
  showButtonPanel: false, // True to show button panel, false to not show it
  autoSize: false, // True to size the input for the date format, false to leave as is
  disabled: false // The initial disabled state
 };
 $.extend( this._defaults, this.regional[ "" ] );
 this.regional.en = $.extend( true, {}, this.regional[ "" ] );
 this.regional[ "en-US" ] = $.extend( true, {}, this.regional.en );
 this.dpDiv = datepicker_bindHover( $( "<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>" ) );
}

$.extend( Datepicker.prototype, {
 /* Class name added to elements to indicate already configured with a date picker. */
 markerClassName: "hasDatepicker",

 //Keep track of the maximum number of rows displayed (see #7043)
 maxRows: 4,

 // TODO rename to "widget" when switching to widget factory
 _widgetDatepicker: function() {
  return this.dpDiv;
 },

 /* Override the default settings for all instances of the date picker.
  * @param  settings  object - the new settings to use as defaults (anonymous object)
  * @return the manager object
  */
 setDefaults: function( settings ) {
  datepicker_extendRemove( this._defaults, settings || {} );
  return this;
 },

 /* Attach the date picker to a jQuery selection.
  * @param  target element - the target input field or division or span
  * @param  settings  object - the new settings to use for this date picker instance (anonymous)
  */
 _attachDatepicker: function( target, settings ) {
  var nodeName, inline, inst;
  nodeName = target.nodeName.toLowerCase();
  inline = ( nodeName === "div" || nodeName === "span" );
  if ( !target.id ) {
   this.uuid += 1;
   target.id = "dp" + this.uuid;
  }
  inst = this._newInst( $( target ), inline );
  inst.settings = $.extend( {}, settings || {} );
  if ( nodeName === "input" ) {
   this._connectDatepicker( target, inst );
  } else if ( inline ) {
   this._inlineDatepicker( target, inst );
  }
 },

 /* Create a new instance object. */
 _newInst: function( target, inline ) {
  var id = target[ 0 ].id.replace( /([^A-Za-z0-9_\-])/g, "\\\\$1" ); // escape jQuery meta chars
  return { id: id, input: target, // associated target
   selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
   drawMonth: 0, drawYear: 0, // month being drawn
   inline: inline, // is datepicker inline or not
   dpDiv: ( !inline ? this.dpDiv : // presentation div
   datepicker_bindHover( $( "<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>" ) ) ) };
 },

 /* Attach the date picker to an input field. */
 _connectDatepicker: function( target, inst ) {
  var input = $( target );
  inst.append = $( [] );
  inst.trigger = $( [] );
  if ( input.hasClass( this.markerClassName ) ) {
   return;
  }
  this._attachments( input, inst );
  input.addClass( this.markerClassName ).on( "keydown", this._doKeyDown ).
   on( "keypress", this._doKeyPress ).on( "keyup", this._doKeyUp );
  this._autoSize( inst );
  $.data( target, "datepicker", inst );

  //If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
  if ( inst.settings.disabled ) {
   this._disableDatepicker( target );
  }
 },

 /* Make attachments based on settings. */
 _attachments: function( input, inst ) {
  var showOn, buttonText, buttonImage,
   appendText = this._get( inst, "appendText" ),
   isRTL = this._get( inst, "isRTL" );

  if ( inst.append ) {
   inst.append.remove();
  }
  if ( appendText ) {
   inst.append = $( "<span class='" + this._appendClass + "'>" + appendText + "</span>" );
   input[ isRTL ? "before" : "after" ]( inst.append );
  }

  input.off( "focus", this._showDatepicker );

  if ( inst.trigger ) {
   inst.trigger.remove();
  }

  showOn = this._get( inst, "showOn" );
  if ( showOn === "focus" || showOn === "both" ) { // pop-up date picker when in the marked field
   input.on( "focus", this._showDatepicker );
  }
  if ( showOn === "button" || showOn === "both" ) { // pop-up date picker when button clicked
   buttonText = this._get( inst, "buttonText" );
   buttonImage = this._get( inst, "buttonImage" );
   inst.trigger = $( this._get( inst, "buttonImageOnly" ) ?
    $( "<img/>" ).addClass( this._triggerClass ).
     attr( { src: buttonImage, alt: buttonText, title: buttonText } ) :
    $( "<button type='button'></button>" ).addClass( this._triggerClass ).
     html( !buttonImage ? buttonText : $( "<img/>" ).attr(
     { src:buttonImage, alt:buttonText, title:buttonText } ) ) );
   input[ isRTL ? "before" : "after" ]( inst.trigger );
   inst.trigger.on( "click", function() {
    if ( $.datepicker._datepickerShowing && $.datepicker._lastInput === input[ 0 ] ) {
     $.datepicker._hideDatepicker();
    } else if ( $.datepicker._datepickerShowing && $.datepicker._lastInput !== input[ 0 ] ) {
     $.datepicker._hideDatepicker();
     $.datepicker._showDatepicker( input[ 0 ] );
    } else {
     $.datepicker._showDatepicker( input[ 0 ] );
    }
    return false;
   } );
  }
 },

 /* Apply the maximum length for the date format. */
 _autoSize: function( inst ) {
  if ( this._get( inst, "autoSize" ) && !inst.inline ) {
   var findMax, max, maxI, i,
    date = new Date( 2009, 12 - 1, 20 ), // Ensure double digits
    dateFormat = this._get( inst, "dateFormat" );

   if ( dateFormat.match( /[DM]/ ) ) {
    findMax = function( names ) {
     max = 0;
     maxI = 0;
     for ( i = 0; i < names.length; i++ ) {
      if ( names[ i ].length > max ) {
       max = names[ i ].length;
       maxI = i;
      }
     }
     return maxI;
    };
    date.setMonth( findMax( this._get( inst, ( dateFormat.match( /MM/ ) ?
     "monthNames" : "monthNamesShort" ) ) ) );
    date.setDate( findMax( this._get( inst, ( dateFormat.match( /DD/ ) ?
     "dayNames" : "dayNamesShort" ) ) ) + 20 - date.getDay() );
   }
   inst.input.attr( "size", this._formatDate( inst, date ).length );
  }
 },

 /* Attach an inline date picker to a div. */
 _inlineDatepicker: function( target, inst ) {
  var divSpan = $( target );
  if ( divSpan.hasClass( this.markerClassName ) ) {
   return;
  }
  divSpan.addClass( this.markerClassName ).append( inst.dpDiv );
  $.data( target, "datepicker", inst );
  this._setDate( inst, this._getDefaultDate( inst ), true );
  this._updateDatepicker( inst );
  this._updateAlternate( inst );

  //If disabled option is true, disable the datepicker before showing it (see ticket #5665)
  if ( inst.settings.disabled ) {
   this._disableDatepicker( target );
  }

  // Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
  // http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
  inst.dpDiv.css( "display", "block" );
 },

 /* Pop-up the date picker in a "dialog" box.
  * @param  input element - ignored
  * @param  date string or Date - the initial date to display
  * @param  onSelect  function - the function to call when a date is selected
  * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
  * @param  pos int[2] - coordinates for the dialog's position within the screen or
  *     event - with x/y coordinates or
  *     leave empty for default (screen centre)
  * @return the manager object
  */
 _dialogDatepicker: function( input, date, onSelect, settings, pos ) {
  var id, browserWidth, browserHeight, scrollX, scrollY,
   inst = this._dialogInst; // internal instance

  if ( !inst ) {
   this.uuid += 1;
   id = "dp" + this.uuid;
   this._dialogInput = $( "<input type='text' id='" + id +
    "' style='position: absolute; top: -100px; width: 0px;'/>" );
   this._dialogInput.on( "keydown", this._doKeyDown );
   $( "body" ).append( this._dialogInput );
   inst = this._dialogInst = this._newInst( this._dialogInput, false );
   inst.settings = {};
   $.data( this._dialogInput[ 0 ], "datepicker", inst );
  }
  datepicker_extendRemove( inst.settings, settings || {} );
  date = ( date && date.constructor === Date ? this._formatDate( inst, date ) : date );
  this._dialogInput.val( date );

  this._pos = ( pos ? ( pos.length ? pos : [ pos.pageX, pos.pageY ] ) : null );
  if ( !this._pos ) {
   browserWidth = document.documentElement.clientWidth;
   browserHeight = document.documentElement.clientHeight;
   scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
   scrollY = document.documentElement.scrollTop || document.body.scrollTop;
   this._pos = // should use actual width/height below
    [ ( browserWidth / 2 ) - 100 + scrollX, ( browserHeight / 2 ) - 150 + scrollY ];
  }

  // Move input on screen for focus, but hidden behind dialog
  this._dialogInput.css( "left", ( this._pos[ 0 ] + 20 ) + "px" ).css( "top", this._pos[ 1 ] + "px" );
  inst.settings.onSelect = onSelect;
  this._inDialog = true;
  this.dpDiv.addClass( this._dialogClass );
  this._showDatepicker( this._dialogInput[ 0 ] );
  if ( $.blockUI ) {
   $.blockUI( this.dpDiv );
  }
  $.data( this._dialogInput[ 0 ], "datepicker", inst );
  return this;
 },

 /* Detach a datepicker from its control.
  * @param  target element - the target input field or division or span
  */
 _destroyDatepicker: function( target ) {
  var nodeName,
   $target = $( target ),
   inst = $.data( target, "datepicker" );

  if ( !$target.hasClass( this.markerClassName ) ) {
   return;
  }

  nodeName = target.nodeName.toLowerCase();
  $.removeData( target, "datepicker" );
  if ( nodeName === "input" ) {
   inst.append.remove();
   inst.trigger.remove();
   $target.removeClass( this.markerClassName ).
    off( "focus", this._showDatepicker ).
    off( "keydown", this._doKeyDown ).
    off( "keypress", this._doKeyPress ).
    off( "keyup", this._doKeyUp );
  } else if ( nodeName === "div" || nodeName === "span" ) {
   $target.removeClass( this.markerClassName ).empty();
  }

  if ( datepicker_instActive === inst ) {
   datepicker_instActive = null;
  }
 },

 /* Enable the date picker to a jQuery selection.
  * @param  target element - the target input field or division or span
  */
 _enableDatepicker: function( target ) {
  var nodeName, inline,
   $target = $( target ),
   inst = $.data( target, "datepicker" );

  if ( !$target.hasClass( this.markerClassName ) ) {
   return;
  }

  nodeName = target.nodeName.toLowerCase();
  if ( nodeName === "input" ) {
   target.disabled = false;
   inst.trigger.filter( "button" ).
    each( function() { this.disabled = false; } ).end().
    filter( "img" ).css( { opacity: "1.0", cursor: "" } );
  } else if ( nodeName === "div" || nodeName === "span" ) {
   inline = $target.children( "." + this._inlineClass );
   inline.children().removeClass( "ui-state-disabled" );
   inline.find( "select.ui-datepicker-month, select.ui-datepicker-year" ).
    prop( "disabled", false );
  }
  this._disabledInputs = $.map( this._disabledInputs,
   function( value ) { return ( value === target ? null : value ); } ); // delete entry
 },

 /* Disable the date picker to a jQuery selection.
  * @param  target element - the target input field or division or span
  */
 _disableDatepicker: function( target ) {
  var nodeName, inline,
   $target = $( target ),
   inst = $.data( target, "datepicker" );

  if ( !$target.hasClass( this.markerClassName ) ) {
   return;
  }

  nodeName = target.nodeName.toLowerCase();
  if ( nodeName === "input" ) {
   target.disabled = true;
   inst.trigger.filter( "button" ).
    each( function() { this.disabled = true; } ).end().
    filter( "img" ).css( { opacity: "0.5", cursor: "default" } );
  } else if ( nodeName === "div" || nodeName === "span" ) {
   inline = $target.children( "." + this._inlineClass );
   inline.children().addClass( "ui-state-disabled" );
   inline.find( "select.ui-datepicker-month, select.ui-datepicker-year" ).
    prop( "disabled", true );
  }
  this._disabledInputs = $.map( this._disabledInputs,
   function( value ) { return ( value === target ? null : value ); } ); // delete entry
  this._disabledInputs[ this._disabledInputs.length ] = target;
 },

 /* Is the first field in a jQuery collection disabled as a datepicker?
  * @param  target element - the target input field or division or span
  * @return boolean - true if disabled, false if enabled
  */
 _isDisabledDatepicker: function( target ) {
  if ( !target ) {
   return false;
  }
  for ( var i = 0; i < this._disabledInputs.length; i++ ) {
   if ( this._disabledInputs[ i ] === target ) {
    return true;
   }
  }
  return false;
 },

 /* Retrieve the instance data for the target control.
  * @param  target  element - the target input field or division or span
  * @return  object - the associated instance data
  * @throws  error if a jQuery problem getting data
  */
 _getInst: function( target ) {
  try {
   return $.data( target, "datepicker" );
  }
  catch ( err ) {
   throw "Missing instance data for this datepicker";
  }
 },

 /* Update or retrieve the settings for a date picker attached to an input field or division.
  * @param  target  element - the target input field or division or span
  * @param  name object - the new settings to update or
  *    string - the name of the setting to change or retrieve,
  *    when retrieving also "all" for all instance settings or
  *    "defaults" for all global defaults
  * @param  value   any - the new value for the setting
  *    (omit if above is an object or to retrieve a value)
  */
 _optionDatepicker: function( target, name, value ) {
  var settings, date, minDate, maxDate,
   inst = this._getInst( target );

  if ( arguments.length === 2 && typeof name === "string" ) {
   return ( name === "defaults" ? $.extend( {}, $.datepicker._defaults ) :
    ( inst ? ( name === "all" ? $.extend( {}, inst.settings ) :
    this._get( inst, name ) ) : null ) );
  }

  settings = name || {};
  if ( typeof name === "string" ) {
   settings = {};
   settings[ name ] = value;
  }

  if ( inst ) {
   if ( this._curInst === inst ) {
    this._hideDatepicker();
   }

   date = this._getDateDatepicker( target, true );
   minDate = this._getMinMaxDate( inst, "min" );
   maxDate = this._getMinMaxDate( inst, "max" );
   datepicker_extendRemove( inst.settings, settings );

   // reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
   if ( minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined ) {
    inst.settings.minDate = this._formatDate( inst, minDate );
   }
   if ( maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined ) {
    inst.settings.maxDate = this._formatDate( inst, maxDate );
   }
   if ( "disabled" in settings ) {
    if ( settings.disabled ) {
     this._disableDatepicker( target );
    } else {
     this._enableDatepicker( target );
    }
   }
   this._attachments( $( target ), inst );
   this._autoSize( inst );
   this._setDate( inst, date );
   this._updateAlternate( inst );
   this._updateDatepicker( inst );
  }
 },

 // Change method deprecated
 _changeDatepicker: function( target, name, value ) {
  this._optionDatepicker( target, name, value );
 },

 /* Redraw the date picker attached to an input field or division.
  * @param  target  element - the target input field or division or span
  */
 _refreshDatepicker: function( target ) {
  var inst = this._getInst( target );
  if ( inst ) {
   this._updateDatepicker( inst );
  }
 },

 /* Set the dates for a jQuery selection.
  * @param  target element - the target input field or division or span
  * @param  date Date - the new date
  */
 _setDateDatepicker: function( target, date ) {
  var inst = this._getInst( target );
  if ( inst ) {
   this._setDate( inst, date );
   this._updateDatepicker( inst );
   this._updateAlternate( inst );
  }
 },

 /* Get the date(s) for the first entry in a jQuery selection.
  * @param  target element - the target input field or division or span
  * @param  noDefault boolean - true if no default date is to be used
  * @return Date - the current date
  */
 _getDateDatepicker: function( target, noDefault ) {
  var inst = this._getInst( target );
  if ( inst && !inst.inline ) {
   this._setDateFromField( inst, noDefault );
  }
  return ( inst ? this._getDate( inst ) : null );
 },

 /* Handle keystrokes. */
 _doKeyDown: function( event ) {
  var onSelect, dateStr, sel,
   inst = $.datepicker._getInst( event.target ),
   handled = true,
   isRTL = inst.dpDiv.is( ".ui-datepicker-rtl" );

  inst._keyEvent = true;
  if ( $.datepicker._datepickerShowing ) {
   switch ( event.keyCode ) {
    case 9: $.datepicker._hideDatepicker();
      handled = false;
      break; // hide on tab out
    case 13: sel = $( "td." + $.datepicker._dayOverClass + ":not(." +
         $.datepicker._currentClass + ")", inst.dpDiv );
      if ( sel[ 0 ] ) {
       $.datepicker._selectDay( event.target, inst.selectedMonth, inst.selectedYear, sel[ 0 ] );
      }

      onSelect = $.datepicker._get( inst, "onSelect" );
      if ( onSelect ) {
       dateStr = $.datepicker._formatDate( inst );

       // Trigger custom callback
       onSelect.apply( ( inst.input ? inst.input[ 0 ] : null ), [ dateStr, inst ] );
      } else {
       $.datepicker._hideDatepicker();
      }

      return false; // don't submit the form
    case 27: $.datepicker._hideDatepicker();
      break; // hide on escape
    case 33: $.datepicker._adjustDate( event.target, ( event.ctrlKey ?
       -$.datepicker._get( inst, "stepBigMonths" ) :
       -$.datepicker._get( inst, "stepMonths" ) ), "M" );
      break; // previous month/year on page up/+ ctrl
    case 34: $.datepicker._adjustDate( event.target, ( event.ctrlKey ?
       +$.datepicker._get( inst, "stepBigMonths" ) :
       +$.datepicker._get( inst, "stepMonths" ) ), "M" );
      break; // next month/year on page down/+ ctrl
    case 35: if ( event.ctrlKey || event.metaKey ) {
       $.datepicker._clearDate( event.target );
      }
      handled = event.ctrlKey || event.metaKey;
      break; // clear on ctrl or command +end
    case 36: if ( event.ctrlKey || event.metaKey ) {
       $.datepicker._gotoToday( event.target );
      }
      handled = event.ctrlKey || event.metaKey;
      break; // current on ctrl or command +home
    case 37: if ( event.ctrlKey || event.metaKey ) {
       $.datepicker._adjustDate( event.target, ( isRTL ? +1 : -1 ), "D" );
      }
      handled = event.ctrlKey || event.metaKey;

      // -1 day on ctrl or command +left
      if ( event.originalEvent.altKey ) {
       $.datepicker._adjustDate( event.target, ( event.ctrlKey ?
        -$.datepicker._get( inst, "stepBigMonths" ) :
        -$.datepicker._get( inst, "stepMonths" ) ), "M" );
      }

      // next month/year on alt +left on Mac
      break;
    case 38: if ( event.ctrlKey || event.metaKey ) {
       $.datepicker._adjustDate( event.target, -7, "D" );
      }
      handled = event.ctrlKey || event.metaKey;
      break; // -1 week on ctrl or command +up
    case 39: if ( event.ctrlKey || event.metaKey ) {
       $.datepicker._adjustDate( event.target, ( isRTL ? -1 : +1 ), "D" );
      }
      handled = event.ctrlKey || event.metaKey;

      // +1 day on ctrl or command +right
      if ( event.originalEvent.altKey ) {
       $.datepicker._adjustDate( event.target, ( event.ctrlKey ?
        +$.datepicker._get( inst, "stepBigMonths" ) :
        +$.datepicker._get( inst, "stepMonths" ) ), "M" );
      }

      // next month/year on alt +right
      break;
    case 40: if ( event.ctrlKey || event.metaKey ) {
       $.datepicker._adjustDate( event.target, +7, "D" );
      }
      handled = event.ctrlKey || event.metaKey;
      break; // +1 week on ctrl or command +down
    default: handled = false;
   }
  } else if ( event.keyCode === 36 && event.ctrlKey ) { // display the date picker on ctrl+home
   $.datepicker._showDatepicker( this );
  } else {
   handled = false;
  }

  if ( handled ) {
   event.preventDefault();
   event.stopPropagation();
  }
 },

 /* Filter entered characters - based on date format. */
 _doKeyPress: function( event ) {
  var chars, chr,
   inst = $.datepicker._getInst( event.target );

  if ( $.datepicker._get( inst, "constrainInput" ) ) {
   chars = $.datepicker._possibleChars( $.datepicker._get( inst, "dateFormat" ) );
   chr = String.fromCharCode( event.charCode == null ? event.keyCode : event.charCode );
   return event.ctrlKey || event.metaKey || ( chr < " " || !chars || chars.indexOf( chr ) > -1 );
  }
 },

 /* Synchronise manual entry and field/alternate field. */
 _doKeyUp: function( event ) {
  var date,
   inst = $.datepicker._getInst( event.target );

  if ( inst.input.val() !== inst.lastVal ) {
   try {
    date = $.datepicker.parseDate( $.datepicker._get( inst, "dateFormat" ),
     ( inst.input ? inst.input.val() : null ),
     $.datepicker._getFormatConfig( inst ) );

    if ( date ) { // only if valid
     $.datepicker._setDateFromField( inst );
     $.datepicker._updateAlternate( inst );
     $.datepicker._updateDatepicker( inst );
    }
   }
   catch ( err ) {
   }
  }
  return true;
 },

 /* Pop-up the date picker for a given input field.
  * If false returned from beforeShow event handler do not show.
  * @param  input  element - the input field attached to the date picker or
  *     event - if triggered by focus
  */
 _showDatepicker: function( input ) {
  input = input.target || input;
  if ( input.nodeName.toLowerCase() !== "input" ) { // find from button/image trigger
   input = $( "input", input.parentNode )[ 0 ];
  }

  if ( $.datepicker._isDisabledDatepicker( input ) || $.datepicker._lastInput === input ) { // already here
   return;
  }

  var inst, beforeShow, beforeShowSettings, isFixed,
   offset, showAnim, duration;

  inst = $.datepicker._getInst( input );
  if ( $.datepicker._curInst && $.datepicker._curInst !== inst ) {
   $.datepicker._curInst.dpDiv.stop( true, true );
   if ( inst && $.datepicker._datepickerShowing ) {
    $.datepicker._hideDatepicker( $.datepicker._curInst.input[ 0 ] );
   }
  }

  beforeShow = $.datepicker._get( inst, "beforeShow" );
  beforeShowSettings = beforeShow ? beforeShow.apply( input, [ input, inst ] ) : {};
  if ( beforeShowSettings === false ) {
   return;
  }
  datepicker_extendRemove( inst.settings, beforeShowSettings );

  inst.lastVal = null;
  $.datepicker._lastInput = input;
  $.datepicker._setDateFromField( inst );

  if ( $.datepicker._inDialog ) { // hide cursor
   input.value = "";
  }
  if ( !$.datepicker._pos ) { // position below input
   $.datepicker._pos = $.datepicker._findPos( input );
   $.datepicker._pos[ 1 ] += input.offsetHeight; // add the height
  }

  isFixed = false;
  $( input ).parents().each( function() {
   isFixed |= $( this ).css( "position" ) === "fixed";
   return !isFixed;
  } );

  offset = { left: $.datepicker._pos[ 0 ], top: $.datepicker._pos[ 1 ] };
  $.datepicker._pos = null;

  //to avoid flashes on Firefox
  inst.dpDiv.empty();

  // determine sizing offscreen
  inst.dpDiv.css( { position: "absolute", display: "block", top: "-1000px" } );
  $.datepicker._updateDatepicker( inst );

  // fix width for dynamic number of date pickers
  // and adjust position before showing
  offset = $.datepicker._checkOffset( inst, offset, isFixed );
  inst.dpDiv.css( { position: ( $.datepicker._inDialog && $.blockUI ?
   "static" : ( isFixed ? "fixed" : "absolute" ) ), display: "none",
   left: offset.left + "px", top: offset.top + "px" } );

  if ( !inst.inline ) {
   showAnim = $.datepicker._get( inst, "showAnim" );
   duration = $.datepicker._get( inst, "duration" );
   inst.dpDiv.css( "z-index", datepicker_getZindex( $( input ) ) + 1 );
   $.datepicker._datepickerShowing = true;

   if ( $.effects && $.effects.effect[ showAnim ] ) {
    inst.dpDiv.show( showAnim, $.datepicker._get( inst, "showOptions" ), duration );
   } else {
    inst.dpDiv[ showAnim || "show" ]( showAnim ? duration : null );
   }

   if ( $.datepicker._shouldFocusInput( inst ) ) {
    inst.input.trigger( "focus" );
   }

   $.datepicker._curInst = inst;
  }
 },

 /* Generate the date picker content. */
 _updateDatepicker: function( inst ) {
  this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
  datepicker_instActive = inst; // for delegate hover events
  inst.dpDiv.empty().append( this._generateHTML( inst ) );
  this._attachHandlers( inst );

  var origyearshtml,
   numMonths = this._getNumberOfMonths( inst ),
   cols = numMonths[ 1 ],
   width = 17,
   activeCell = inst.dpDiv.find( "." + this._dayOverClass + " a" );

  if ( activeCell.length > 0 ) {
   datepicker_handleMouseover.apply( activeCell.get( 0 ) );
  }

  inst.dpDiv.removeClass( "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4" ).width( "" );
  if ( cols > 1 ) {
   inst.dpDiv.addClass( "ui-datepicker-multi-" + cols ).css( "width", ( width * cols ) + "em" );
  }
  inst.dpDiv[ ( numMonths[ 0 ] !== 1 || numMonths[ 1 ] !== 1 ? "add" : "remove" ) +
   "Class" ]( "ui-datepicker-multi" );
  inst.dpDiv[ ( this._get( inst, "isRTL" ) ? "add" : "remove" ) +
   "Class" ]( "ui-datepicker-rtl" );

  if ( inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput( inst ) ) {
   inst.input.trigger( "focus" );
  }

  // Deffered render of the years select (to avoid flashes on Firefox)
  if ( inst.yearshtml ) {
   origyearshtml = inst.yearshtml;
   setTimeout( function() {

    //assure that inst.yearshtml didn't change.
    if ( origyearshtml === inst.yearshtml && inst.yearshtml ) {
     inst.dpDiv.find( "select.ui-datepicker-year:first" ).replaceWith( inst.yearshtml );
    }
    origyearshtml = inst.yearshtml = null;
   }, 0 );
  }
 },

 // #6694 - don't focus the input if it's already focused
 // this breaks the change event in IE
 // Support: IE and jQuery <1.9
 _shouldFocusInput: function( inst ) {
  return inst.input && inst.input.is( ":visible" ) && !inst.input.is( ":disabled" ) && !inst.input.is( ":focus" );
 },

 /* Check positioning to remain on screen. */
 _checkOffset: function( inst, offset, isFixed ) {
  var dpWidth = inst.dpDiv.outerWidth(),
   dpHeight = inst.dpDiv.outerHeight(),
   inputWidth = inst.input ? inst.input.outerWidth() : 0,
   inputHeight = inst.input ? inst.input.outerHeight() : 0,
   viewWidth = document.documentElement.clientWidth + ( isFixed ? 0 : $( document ).scrollLeft() ),
   viewHeight = document.documentElement.clientHeight + ( isFixed ? 0 : $( document ).scrollTop() );

  offset.left -= ( this._get( inst, "isRTL" ) ? ( dpWidth - inputWidth ) : 0 );
  offset.left -= ( isFixed && offset.left === inst.input.offset().left ) ? $( document ).scrollLeft() : 0;
  offset.top -= ( isFixed && offset.top === ( inst.input.offset().top + inputHeight ) ) ? $( document ).scrollTop() : 0;

  // Now check if datepicker is showing outside window viewport - move to a better place if so.
  offset.left -= Math.min( offset.left, ( offset.left + dpWidth > viewWidth && viewWidth > dpWidth ) ?
   Math.abs( offset.left + dpWidth - viewWidth ) : 0 );
  offset.top -= Math.min( offset.top, ( offset.top + dpHeight > viewHeight && viewHeight > dpHeight ) ?
   Math.abs( dpHeight + inputHeight ) : 0 );

  return offset;
 },

 /* Find an object's position on the screen. */
 _findPos: function( obj ) {
  var position,
   inst = this._getInst( obj ),
   isRTL = this._get( inst, "isRTL" );

  while ( obj && ( obj.type === "hidden" || obj.nodeType !== 1 || $.expr.filters.hidden( obj ) ) ) {
   obj = obj[ isRTL ? "previousSibling" : "nextSibling" ];
  }

  position = $( obj ).offset();
  return [ position.left, position.top ];
 },

 /* Hide the date picker from view.
  * @param  input  element - the input field attached to the date picker
  */
 _hideDatepicker: function( input ) {
  var showAnim, duration, postProcess, onClose,
   inst = this._curInst;

  if ( !inst || ( input && inst !== $.data( input, "datepicker" ) ) ) {
   return;
  }

  if ( this._datepickerShowing ) {
   showAnim = this._get( inst, "showAnim" );
   duration = this._get( inst, "duration" );
   postProcess = function() {
    $.datepicker._tidyDialog( inst );
   };

   // DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
   if ( $.effects && ( $.effects.effect[ showAnim ] || $.effects[ showAnim ] ) ) {
    inst.dpDiv.hide( showAnim, $.datepicker._get( inst, "showOptions" ), duration, postProcess );
   } else {
    inst.dpDiv[ ( showAnim === "slideDown" ? "slideUp" :
     ( showAnim === "fadeIn" ? "fadeOut" : "hide" ) ) ]( ( showAnim ? duration : null ), postProcess );
   }

   if ( !showAnim ) {
    postProcess();
   }
   this._datepickerShowing = false;

   onClose = this._get( inst, "onClose" );
   if ( onClose ) {
    onClose.apply( ( inst.input ? inst.input[ 0 ] : null ), [ ( inst.input ? inst.input.val() : "" ), inst ] );
   }

   this._lastInput = null;
   if ( this._inDialog ) {
    this._dialogInput.css( { position: "absolute", left: "0", top: "-100px" } );
    if ( $.blockUI ) {
     $.unblockUI();
     $( "body" ).append( this.dpDiv );
    }
   }
   this._inDialog = false;
  }
 },

 /* Tidy up after a dialog display. */
 _tidyDialog: function( inst ) {
  inst.dpDiv.removeClass( this._dialogClass ).off( ".ui-datepicker-calendar" );
 },

 /* Close date picker if clicked elsewhere. */
 _checkExternalClick: function( event ) {
  if ( !$.datepicker._curInst ) {
   return;
  }

  var $target = $( event.target ),
   inst = $.datepicker._getInst( $target[ 0 ] );

  if ( ( ( $target[ 0 ].id !== $.datepicker._mainDivId &&
    $target.parents( "#" + $.datepicker._mainDivId ).length === 0 &&
    !$target.hasClass( $.datepicker.markerClassName ) &&
    !$target.closest( "." + $.datepicker._triggerClass ).length &&
    $.datepicker._datepickerShowing && !( $.datepicker._inDialog && $.blockUI ) ) ) ||
   ( $target.hasClass( $.datepicker.markerClassName ) && $.datepicker._curInst !== inst ) ) {
    $.datepicker._hideDatepicker();
  }
 },

 /* Adjust one of the date sub-fields. */
 _adjustDate: function( id, offset, period ) {
  var target = $( id ),
   inst = this._getInst( target[ 0 ] );

  if ( this._isDisabledDatepicker( target[ 0 ] ) ) {
   return;
  }
  this._adjustInstDate( inst, offset +
   ( period === "M" ? this._get( inst, "showCurrentAtPos" ) : 0 ), // undo positioning
   period );
  this._updateDatepicker( inst );
 },

 /* Action for current link. */
 _gotoToday: function( id ) {
  var date,
   target = $( id ),
   inst = this._getInst( target[ 0 ] );

  if ( this._get( inst, "gotoCurrent" ) && inst.currentDay ) {
   inst.selectedDay = inst.currentDay;
   inst.drawMonth = inst.selectedMonth = inst.currentMonth;
   inst.drawYear = inst.selectedYear = inst.currentYear;
  } else {
   date = new Date();
   inst.selectedDay = date.getDate();
   inst.drawMonth = inst.selectedMonth = date.getMonth();
   inst.drawYear = inst.selectedYear = date.getFullYear();
  }
  this._notifyChange( inst );
  this._adjustDate( target );
 },

 /* Action for selecting a new month/year. */
 _selectMonthYear: function( id, select, period ) {
  var target = $( id ),
   inst = this._getInst( target[ 0 ] );

  inst[ "selected" + ( period === "M" ? "Month" : "Year" ) ] =
  inst[ "draw" + ( period === "M" ? "Month" : "Year" ) ] =
   parseInt( select.options[ select.selectedIndex ].value, 10 );

  this._notifyChange( inst );
  this._adjustDate( target );
 },

 /* Action for selecting a day. */
 _selectDay: function( id, month, year, td ) {
  var inst,
   target = $( id );

  if ( $( td ).hasClass( this._unselectableClass ) || this._isDisabledDatepicker( target[ 0 ] ) ) {
   return;
  }

  inst = this._getInst( target[ 0 ] );
  inst.selectedDay = inst.currentDay = $( "a", td ).html();
  inst.selectedMonth = inst.currentMonth = month;
  inst.selectedYear = inst.currentYear = year;
  this._selectDate( id, this._formatDate( inst,
   inst.currentDay, inst.currentMonth, inst.currentYear ) );
 },

 /* Erase the input field and hide the date picker. */
 _clearDate: function( id ) {
  var target = $( id );
  this._selectDate( target, "" );
 },

 /* Update the input field with the selected date. */
 _selectDate: function( id, dateStr ) {
  var onSelect,
   target = $( id ),
   inst = this._getInst( target[ 0 ] );

  dateStr = ( dateStr != null ? dateStr : this._formatDate( inst ) );
  if ( inst.input ) {
   inst.input.val( dateStr );
  }
  this._updateAlternate( inst );

  onSelect = this._get( inst, "onSelect" );
  if ( onSelect ) {
   onSelect.apply( ( inst.input ? inst.input[ 0 ] : null ), [ dateStr, inst ] );  // trigger custom callback
  } else if ( inst.input ) {
   inst.input.trigger( "change" ); // fire the change event
  }

  if ( inst.inline ) {
   this._updateDatepicker( inst );
  } else {
   this._hideDatepicker();
   this._lastInput = inst.input[ 0 ];
   if ( typeof( inst.input[ 0 ] ) !== "object" ) {
    inst.input.trigger( "focus" ); // restore focus
   }
   this._lastInput = null;
  }
 },

 /* Update any alternate field to synchronise with the main field. */
 _updateAlternate: function( inst ) {
  var altFormat, date, dateStr,
   altField = this._get( inst, "altField" );

  if ( altField ) { // update alternate field too
   altFormat = this._get( inst, "altFormat" ) || this._get( inst, "dateFormat" );
   date = this._getDate( inst );
   dateStr = this.formatDate( altFormat, date, this._getFormatConfig( inst ) );
   $( altField ).val( dateStr );
  }
 },

 /* Set as beforeShowDay function to prevent selection of weekends.
  * @param  date  Date - the date to customise
  * @return [boolean, string] - is this date selectable?, what is its CSS class?
  */
 noWeekends: function( date ) {
  var day = date.getDay();
  return [ ( day > 0 && day < 6 ), "" ];
 },

 /* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
  * @param  date  Date - the date to get the week for
  * @return  number - the number of the week within the year that contains this date
  */
 iso8601Week: function( date ) {
  var time,
   checkDate = new Date( date.getTime() );

  // Find Thursday of this week starting on Monday
  checkDate.setDate( checkDate.getDate() + 4 - ( checkDate.getDay() || 7 ) );

  time = checkDate.getTime();
  checkDate.setMonth( 0 ); // Compare with Jan 1
  checkDate.setDate( 1 );
  return Math.floor( Math.round( ( time - checkDate ) / 86400000 ) / 7 ) + 1;
 },

 /* Parse a string value into a date object.
  * See formatDate below for the possible formats.
  *
  * @param  format string - the expected format of the date
  * @param  value string - the date in the above format
  * @param  settings Object - attributes include:
  *     shortYearCutoff  number - the cutoff year for determining the century (optional)
  *     dayNamesShort string[7] - abbreviated names of the days from Sunday (optional)
  *     dayNames  string[7] - names of the days from Sunday (optional)
  *     monthNamesShort string[12] - abbreviated names of the months (optional)
  *     monthNames  string[12] - names of the months (optional)
  * @return  Date - the extracted date value or null if value is blank
  */
 parseDate: function( format, value, settings ) {
  if ( format == null || value == null ) {
   throw "Invalid arguments";
  }

  value = ( typeof value === "object" ? value.toString() : value + "" );
  if ( value === "" ) {
   return null;
  }

  var iFormat, dim, extra,
   iValue = 0,
   shortYearCutoffTemp = ( settings ? settings.shortYearCutoff : null ) || this._defaults.shortYearCutoff,
   shortYearCutoff = ( typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp :
    new Date().getFullYear() % 100 + parseInt( shortYearCutoffTemp, 10 ) ),
   dayNamesShort = ( settings ? settings.dayNamesShort : null ) || this._defaults.dayNamesShort,
   dayNames = ( settings ? settings.dayNames : null ) || this._defaults.dayNames,
   monthNamesShort = ( settings ? settings.monthNamesShort : null ) || this._defaults.monthNamesShort,
   monthNames = ( settings ? settings.monthNames : null ) || this._defaults.monthNames,
   year = -1,
   month = -1,
   day = -1,
   doy = -1,
   literal = false,
   date,

   // Check whether a format character is doubled
   lookAhead = function( match ) {
    var matches = ( iFormat + 1 < format.length && format.charAt( iFormat + 1 ) === match );
    if ( matches ) {
     iFormat++;
    }
    return matches;
   },

   // Extract a number from the string value
   getNumber = function( match ) {
    var isDoubled = lookAhead( match ),
     size = ( match === "@" ? 14 : ( match === "!" ? 20 :
     ( match === "y" && isDoubled ? 4 : ( match === "o" ? 3 : 2 ) ) ) ),
     minSize = ( match === "y" ? size : 1 ),
     digits = new RegExp( "^\\d{" + minSize + "," + size + "}" ),
     num = value.substring( iValue ).match( digits );
    if ( !num ) {
     throw "Missing number at position " + iValue;
    }
    iValue += num[ 0 ].length;
    return parseInt( num[ 0 ], 10 );
   },

   // Extract a name from the string value and convert to an index
   getName = function( match, shortNames, longNames ) {
    var index = -1,
     names = $.map( lookAhead( match ) ? longNames : shortNames, function( v, k ) {
      return [ [ k, v ] ];
     } ).sort( function( a, b ) {
      return -( a[ 1 ].length - b[ 1 ].length );
     } );

    $.each( names, function( i, pair ) {
     var name = pair[ 1 ];
     if ( value.substr( iValue, name.length ).toLowerCase() === name.toLowerCase() ) {
      index = pair[ 0 ];
      iValue += name.length;
      return false;
     }
    } );
    if ( index !== -1 ) {
     return index + 1;
    } else {
     throw "Unknown name at position " + iValue;
    }
   },

   // Confirm that a literal character matches the string value
   checkLiteral = function() {
    if ( value.charAt( iValue ) !== format.charAt( iFormat ) ) {
     throw "Unexpected literal at position " + iValue;
    }
    iValue++;
   };

  for ( iFormat = 0; iFormat < format.length; iFormat++ ) {
   if ( literal ) {
    if ( format.charAt( iFormat ) === "'" && !lookAhead( "'" ) ) {
     literal = false;
    } else {
     checkLiteral();
    }
   } else {
    switch ( format.charAt( iFormat ) ) {
     case "d":
      day = getNumber( "d" );
      break;
     case "D":
      getName( "D", dayNamesShort, dayNames );
      break;
     case "o":
      doy = getNumber( "o" );
      break;
     case "m":
      month = getNumber( "m" );
      break;
     case "M":
      month = getName( "M", monthNamesShort, monthNames );
      break;
     case "y":
      year = getNumber( "y" );
      break;
     case "@":
      date = new Date( getNumber( "@" ) );
      year = date.getFullYear();
      month = date.getMonth() + 1;
      day = date.getDate();
      break;
     case "!":
      date = new Date( ( getNumber( "!" ) - this._ticksTo1970 ) / 10000 );
      year = date.getFullYear();
      month = date.getMonth() + 1;
      day = date.getDate();
      break;
     case "'":
      if ( lookAhead( "'" ) ) {
       checkLiteral();
      } else {
       literal = true;
      }
      break;
     default:
      checkLiteral();
    }
   }
  }

  if ( iValue < value.length ) {
   extra = value.substr( iValue );
   if ( !/^\s+/.test( extra ) ) {
    throw "Extra/unparsed characters found in date: " + extra;
   }
  }

  if ( year === -1 ) {
   year = new Date().getFullYear();
  } else if ( year < 100 ) {
   year += new Date().getFullYear() - new Date().getFullYear() % 100 +
    ( year <= shortYearCutoff ? 0 : -100 );
  }

  if ( doy > -1 ) {
   month = 1;
   day = doy;
   do {
    dim = this._getDaysInMonth( year, month - 1 );
    if ( day <= dim ) {
     break;
    }
    month++;
    day -= dim;
   } while ( true );
  }

  date = this._daylightSavingAdjust( new Date( year, month - 1, day ) );
  if ( date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day ) {
   throw "Invalid date"; // E.g. 31/02/00
  }
  return date;
 },

 /* Standard date formats. */
 ATOM: "yy-mm-dd", // RFC 3339 (ISO 8601)
 COOKIE: "D, dd M yy",
 ISO_8601: "yy-mm-dd",
 RFC_822: "D, d M y",
 RFC_850: "DD, dd-M-y",
 RFC_1036: "D, d M y",
 RFC_1123: "D, d M yy",
 RFC_2822: "D, d M yy",
 RSS: "D, d M y", // RFC 822
 TICKS: "!",
 TIMESTAMP: "@",
 W3C: "yy-mm-dd", // ISO 8601

 _ticksTo1970: ( ( ( 1970 - 1 ) * 365 + Math.floor( 1970 / 4 ) - Math.floor( 1970 / 100 ) +
  Math.floor( 1970 / 400 ) ) * 24 * 60 * 60 * 10000000 ),

 /* Format a date object into a string value.
  * The format can be combinations of the following:
  * d  - day of month (no leading zero)
  * dd - day of month (two digit)
  * o  - day of year (no leading zeros)
  * oo - day of year (three digit)
  * D  - day name short
  * DD - day name long
  * m  - month of year (no leading zero)
  * mm - month of year (two digit)
  * M  - month name short
  * MM - month name long
  * y  - year (two digit)
  * yy - year (four digit)
  * @ - Unix timestamp (ms since 01/01/1970)
  * ! - Windows ticks (100ns since 01/01/0001)
  * "..." - literal text
  * '' - single quote
  *
  * @param  format string - the desired format of the date
  * @param  date Date - the date value to format
  * @param  settings Object - attributes include:
  *     dayNamesShort string[7] - abbreviated names of the days from Sunday (optional)
  *     dayNames  string[7] - names of the days from Sunday (optional)
  *     monthNamesShort string[12] - abbreviated names of the months (optional)
  *     monthNames  string[12] - names of the months (optional)
  * @return  string - the date in the above format
  */
 formatDate: function( format, date, settings ) {
  if ( !date ) {
   return "";
  }

  var iFormat,
   dayNamesShort = ( settings ? settings.dayNamesShort : null ) || this._defaults.dayNamesShort,
   dayNames = ( settings ? settings.dayNames : null ) || this._defaults.dayNames,
   monthNamesShort = ( settings ? settings.monthNamesShort : null ) || this._defaults.monthNamesShort,
   monthNames = ( settings ? settings.monthNames : null ) || this._defaults.monthNames,

   // Check whether a format character is doubled
   lookAhead = function( match ) {
    var matches = ( iFormat + 1 < format.length && format.charAt( iFormat + 1 ) === match );
    if ( matches ) {
     iFormat++;
    }
    return matches;
   },

   // Format a number, with leading zero if necessary
   formatNumber = function( match, value, len ) {
    var num = "" + value;
    if ( lookAhead( match ) ) {
     while ( num.length < len ) {
      num = "0" + num;
     }
    }
    return num;
   },

   // Format a name, short or long as requested
   formatName = function( match, value, shortNames, longNames ) {
    return ( lookAhead( match ) ? longNames[ value ] : shortNames[ value ] );
   },
   output = "",
   literal = false;

  if ( date ) {
   for ( iFormat = 0; iFormat < format.length; iFormat++ ) {
    if ( literal ) {
     if ( format.charAt( iFormat ) === "'" && !lookAhead( "'" ) ) {
      literal = false;
     } else {
      output += format.charAt( iFormat );
     }
    } else {
     switch ( format.charAt( iFormat ) ) {
      case "d":
       output += formatNumber( "d", date.getDate(), 2 );
       break;
      case "D":
       output += formatName( "D", date.getDay(), dayNamesShort, dayNames );
       break;
      case "o":
       output += formatNumber( "o",
        Math.round( ( new Date( date.getFullYear(), date.getMonth(), date.getDate() ).getTime() - new Date( date.getFullYear(), 0, 0 ).getTime() ) / 86400000 ), 3 );
       break;
      case "m":
       output += formatNumber( "m", date.getMonth() + 1, 2 );
       break;
      case "M":
       output += formatName( "M", date.getMonth(), monthNamesShort, monthNames );
       break;
      case "y":
       output += ( lookAhead( "y" ) ? date.getFullYear() :
        ( date.getFullYear() % 100 < 10 ? "0" : "" ) + date.getFullYear() % 100 );
       break;
      case "@":
       output += date.getTime();
       break;
      case "!":
       output += date.getTime() * 10000 + this._ticksTo1970;
       break;
      case "'":
       if ( lookAhead( "'" ) ) {
        output += "'";
       } else {
        literal = true;
       }
       break;
      default:
       output += format.charAt( iFormat );
     }
    }
   }
  }
  return output;
 },

 /* Extract all possible characters from the date format. */
 _possibleChars: function( format ) {
  var iFormat,
   chars = "",
   literal = false,

   // Check whether a format character is doubled
   lookAhead = function( match ) {
    var matches = ( iFormat + 1 < format.length && format.charAt( iFormat + 1 ) === match );
    if ( matches ) {
     iFormat++;
    }
    return matches;
   };

  for ( iFormat = 0; iFormat < format.length; iFormat++ ) {
   if ( literal ) {
    if ( format.charAt( iFormat ) === "'" && !lookAhead( "'" ) ) {
     literal = false;
    } else {
     chars += format.charAt( iFormat );
    }
   } else {
    switch ( format.charAt( iFormat ) ) {
     case "d": case "m": case "y": case "@":
      chars += "0123456789";
      break;
     case "D": case "M":
      return null; // Accept anything
     case "'":
      if ( lookAhead( "'" ) ) {
       chars += "'";
      } else {
       literal = true;
      }
      break;
     default:
      chars += format.charAt( iFormat );
    }
   }
  }
  return chars;
 },

 /* Get a setting value, defaulting if necessary. */
 _get: function( inst, name ) {
  return inst.settings[ name ] !== undefined ?
   inst.settings[ name ] : this._defaults[ name ];
 },

 /* Parse existing date and initialise date picker. */
 _setDateFromField: function( inst, noDefault ) {
  if ( inst.input.val() === inst.lastVal ) {
   return;
  }

  var dateFormat = this._get( inst, "dateFormat" ),
   dates = inst.lastVal = inst.input ? inst.input.val() : null,
   defaultDate = this._getDefaultDate( inst ),
   date = defaultDate,
   settings = this._getFormatConfig( inst );

  try {
   date = this.parseDate( dateFormat, dates, settings ) || defaultDate;
  } catch ( event ) {
   dates = ( noDefault ? "" : dates );
  }
  inst.selectedDay = date.getDate();
  inst.drawMonth = inst.selectedMonth = date.getMonth();
  inst.drawYear = inst.selectedYear = date.getFullYear();
  inst.currentDay = ( dates ? date.getDate() : 0 );
  inst.currentMonth = ( dates ? date.getMonth() : 0 );
  inst.currentYear = ( dates ? date.getFullYear() : 0 );
  this._adjustInstDate( inst );
 },

 /* Retrieve the default date shown on opening. */
 _getDefaultDate: function( inst ) {
  return this._restrictMinMax( inst,
   this._determineDate( inst, this._get( inst, "defaultDate" ), new Date() ) );
 },

 /* A date may be specified as an exact value or a relative one. */
 _determineDate: function( inst, date, defaultDate ) {
  var offsetNumeric = function( offset ) {
    var date = new Date();
    date.setDate( date.getDate() + offset );
    return date;
   },
   offsetString = function( offset ) {
    try {
     return $.datepicker.parseDate( $.datepicker._get( inst, "dateFormat" ),
      offset, $.datepicker._getFormatConfig( inst ) );
    }
    catch ( e ) {

     // Ignore
    }

    var date = ( offset.toLowerCase().match( /^c/ ) ?
     $.datepicker._getDate( inst ) : null ) || new Date(),
     year = date.getFullYear(),
     month = date.getMonth(),
     day = date.getDate(),
     pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
     matches = pattern.exec( offset );

    while ( matches ) {
     switch ( matches[ 2 ] || "d" ) {
      case "d" : case "D" :
       day += parseInt( matches[ 1 ], 10 ); break;
      case "w" : case "W" :
       day += parseInt( matches[ 1 ], 10 ) * 7; break;
      case "m" : case "M" :
       month += parseInt( matches[ 1 ], 10 );
       day = Math.min( day, $.datepicker._getDaysInMonth( year, month ) );
       break;
      case "y": case "Y" :
       year += parseInt( matches[ 1 ], 10 );
       day = Math.min( day, $.datepicker._getDaysInMonth( year, month ) );
       break;
     }
     matches = pattern.exec( offset );
    }
    return new Date( year, month, day );
   },
   newDate = ( date == null || date === "" ? defaultDate : ( typeof date === "string" ? offsetString( date ) :
    ( typeof date === "number" ? ( isNaN( date ) ? defaultDate : offsetNumeric( date ) ) : new Date( date.getTime() ) ) ) );

  newDate = ( newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate );
  if ( newDate ) {
   newDate.setHours( 0 );
   newDate.setMinutes( 0 );
   newDate.setSeconds( 0 );
   newDate.setMilliseconds( 0 );
  }
  return this._daylightSavingAdjust( newDate );
 },

 /* Handle switch to/from daylight saving.
  * Hours may be non-zero on daylight saving cut-over:
  * > 12 when midnight changeover, but then cannot generate
  * midnight datetime, so jump to 1AM, otherwise reset.
  * @param  date  (Date) the date to check
  * @return  (Date) the corrected date
  */
 _daylightSavingAdjust: function( date ) {
  if ( !date ) {
   return null;
  }
  date.setHours( date.getHours() > 12 ? date.getHours() + 2 : 0 );
  return date;
 },

 /* Set the date(s) directly. */
 _setDate: function( inst, date, noChange ) {
  var clear = !date,
   origMonth = inst.selectedMonth,
   origYear = inst.selectedYear,
   newDate = this._restrictMinMax( inst, this._determineDate( inst, date, new Date() ) );

  inst.selectedDay = inst.currentDay = newDate.getDate();
  inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
  inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
  if ( ( origMonth !== inst.selectedMonth || origYear !== inst.selectedYear ) && !noChange ) {
   this._notifyChange( inst );
  }
  this._adjustInstDate( inst );
  if ( inst.input ) {
   inst.input.val( clear ? "" : this._formatDate( inst ) );
  }
 },

 /* Retrieve the date(s) directly. */
 _getDate: function( inst ) {
  var startDate = ( !inst.currentYear || ( inst.input && inst.input.val() === "" ) ? null :
   this._daylightSavingAdjust( new Date(
   inst.currentYear, inst.currentMonth, inst.currentDay ) ) );
   return startDate;
 },

 /* Attach the onxxx handlers.  These are declared statically so
  * they work with static code transformers like Caja.
  */
 _attachHandlers: function( inst ) {
  var stepMonths = this._get( inst, "stepMonths" ),
   id = "#" + inst.id.replace( /\\\\/g, "\\" );
  inst.dpDiv.find( "[data-handler]" ).map( function() {
   var handler = {
    prev: function() {
     $.datepicker._adjustDate( id, -stepMonths, "M" );
    },
    next: function() {
     $.datepicker._adjustDate( id, +stepMonths, "M" );
    },
    hide: function() {
     $.datepicker._hideDatepicker();
    },
    today: function() {
     $.datepicker._gotoToday( id );
    },
    selectDay: function() {
     $.datepicker._selectDay( id, +this.getAttribute( "data-month" ), +this.getAttribute( "data-year" ), this );
     return false;
    },
    selectMonth: function() {
     $.datepicker._selectMonthYear( id, this, "M" );
     return false;
    },
    selectYear: function() {
     $.datepicker._selectMonthYear( id, this, "Y" );
     return false;
    }
   };
   $( this ).on( this.getAttribute( "data-event" ), handler[ this.getAttribute( "data-handler" ) ] );
  } );
 },

 /* Generate the HTML for the current state of the date picker. */
 _generateHTML: function( inst ) {
  var maxDraw, prevText, prev, nextText, next, currentText, gotoDate,
   controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin,
   monthNames, monthNamesShort, beforeShowDay, showOtherMonths,
   selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate,
   cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows,
   printDate, dRow, tbody, daySettings, otherMonth, unselectable,
   tempDate = new Date(),
   today = this._daylightSavingAdjust(
    new Date( tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate() ) ), // clear time
   isRTL = this._get( inst, "isRTL" ),
   showButtonPanel = this._get( inst, "showButtonPanel" ),
   hideIfNoPrevNext = this._get( inst, "hideIfNoPrevNext" ),
   navigationAsDateFormat = this._get( inst, "navigationAsDateFormat" ),
   numMonths = this._getNumberOfMonths( inst ),
   showCurrentAtPos = this._get( inst, "showCurrentAtPos" ),
   stepMonths = this._get( inst, "stepMonths" ),
   isMultiMonth = ( numMonths[ 0 ] !== 1 || numMonths[ 1 ] !== 1 ),
   currentDate = this._daylightSavingAdjust( ( !inst.currentDay ? new Date( 9999, 9, 9 ) :
    new Date( inst.currentYear, inst.currentMonth, inst.currentDay ) ) ),
   minDate = this._getMinMaxDate( inst, "min" ),
   maxDate = this._getMinMaxDate( inst, "max" ),
   drawMonth = inst.drawMonth - showCurrentAtPos,
   drawYear = inst.drawYear;

  if ( drawMonth < 0 ) {
   drawMonth += 12;
   drawYear--;
  }
  if ( maxDate ) {
   maxDraw = this._daylightSavingAdjust( new Date( maxDate.getFullYear(),
    maxDate.getMonth() - ( numMonths[ 0 ] * numMonths[ 1 ] ) + 1, maxDate.getDate() ) );
   maxDraw = ( minDate && maxDraw < minDate ? minDate : maxDraw );
   while ( this._daylightSavingAdjust( new Date( drawYear, drawMonth, 1 ) ) > maxDraw ) {
    drawMonth--;
    if ( drawMonth < 0 ) {
     drawMonth = 11;
     drawYear--;
    }
   }
  }
  inst.drawMonth = drawMonth;
  inst.drawYear = drawYear;

  prevText = this._get( inst, "prevText" );
  prevText = ( !navigationAsDateFormat ? prevText : this.formatDate( prevText,
   this._daylightSavingAdjust( new Date( drawYear, drawMonth - stepMonths, 1 ) ),
   this._getFormatConfig( inst ) ) );

  prev = ( this._canAdjustMonth( inst, -1, drawYear, drawMonth ) ?
   "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" +
   " title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w" ) + "'>" + prevText + "</span></a>" :
   ( hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w" ) + "'>" + prevText + "</span></a>" ) );

  nextText = this._get( inst, "nextText" );
  nextText = ( !navigationAsDateFormat ? nextText : this.formatDate( nextText,
   this._daylightSavingAdjust( new Date( drawYear, drawMonth + stepMonths, 1 ) ),
   this._getFormatConfig( inst ) ) );

  next = ( this._canAdjustMonth( inst, +1, drawYear, drawMonth ) ?
   "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" +
   " title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e" ) + "'>" + nextText + "</span></a>" :
   ( hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e" ) + "'>" + nextText + "</span></a>" ) );

  currentText = this._get( inst, "currentText" );
  gotoDate = ( this._get( inst, "gotoCurrent" ) && inst.currentDay ? currentDate : today );
  currentText = ( !navigationAsDateFormat ? currentText :
   this.formatDate( currentText, gotoDate, this._getFormatConfig( inst ) ) );

  controls = ( !inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
   this._get( inst, "closeText" ) + "</button>" : "" );

  buttonPanel = ( showButtonPanel ) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + ( isRTL ? controls : "" ) +
   ( this._isInRange( inst, gotoDate ) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" +
   ">" + currentText + "</button>" : "" ) + ( isRTL ? "" : controls ) + "</div>" : "";

  firstDay = parseInt( this._get( inst, "firstDay" ), 10 );
  firstDay = ( isNaN( firstDay ) ? 0 : firstDay );

  showWeek = this._get( inst, "showWeek" );
  dayNames = this._get( inst, "dayNames" );
  dayNamesMin = this._get( inst, "dayNamesMin" );
  monthNames = this._get( inst, "monthNames" );
  monthNamesShort = this._get( inst, "monthNamesShort" );
  beforeShowDay = this._get( inst, "beforeShowDay" );
  showOtherMonths = this._get( inst, "showOtherMonths" );
  selectOtherMonths = this._get( inst, "selectOtherMonths" );
  defaultDate = this._getDefaultDate( inst );
  html = "";

  for ( row = 0; row < numMonths[ 0 ]; row++ ) {
   group = "";
   this.maxRows = 4;
   for ( col = 0; col < numMonths[ 1 ]; col++ ) {
    selectedDate = this._daylightSavingAdjust( new Date( drawYear, drawMonth, inst.selectedDay ) );
    cornerClass = " ui-corner-all";
    calender = "";
    if ( isMultiMonth ) {
     calender += "<div class='ui-datepicker-group";
     if ( numMonths[ 1 ] > 1 ) {
      switch ( col ) {
       case 0: calender += " ui-datepicker-group-first";
        cornerClass = " ui-corner-" + ( isRTL ? "right" : "left" ); break;
       case numMonths[ 1 ] - 1: calender += " ui-datepicker-group-last";
        cornerClass = " ui-corner-" + ( isRTL ? "left" : "right" ); break;
       default: calender += " ui-datepicker-group-middle"; cornerClass = ""; break;
      }
     }
     calender += "'>";
    }
    calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" +
     ( /all|left/.test( cornerClass ) && row === 0 ? ( isRTL ? next : prev ) : "" ) +
     ( /all|right/.test( cornerClass ) && row === 0 ? ( isRTL ? prev : next ) : "" ) +
     this._generateMonthYearHeader( inst, drawMonth, drawYear, minDate, maxDate,
     row > 0 || col > 0, monthNames, monthNamesShort ) + // draw month headers
     "</div><table class='ui-datepicker-calendar'><thead>" +
     "<tr>";
    thead = ( showWeek ? "<th class='ui-datepicker-week-col'>" + this._get( inst, "weekHeader" ) + "</th>" : "" );
    for ( dow = 0; dow < 7; dow++ ) { // days of the week
     day = ( dow + firstDay ) % 7;
     thead += "<th scope='col'" + ( ( dow + firstDay + 6 ) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "" ) + ">" +
      "<span title='" + dayNames[ day ] + "'>" + dayNamesMin[ day ] + "</span></th>";
    }
    calender += thead + "</tr></thead><tbody>";
    daysInMonth = this._getDaysInMonth( drawYear, drawMonth );
    if ( drawYear === inst.selectedYear && drawMonth === inst.selectedMonth ) {
     inst.selectedDay = Math.min( inst.selectedDay, daysInMonth );
    }
    leadDays = ( this._getFirstDayOfMonth( drawYear, drawMonth ) - firstDay + 7 ) % 7;
    curRows = Math.ceil( ( leadDays + daysInMonth ) / 7 ); // calculate the number of rows to generate
    numRows = ( isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows ); //If multiple months, use the higher number of rows (see #7043)
    this.maxRows = numRows;
    printDate = this._daylightSavingAdjust( new Date( drawYear, drawMonth, 1 - leadDays ) );
    for ( dRow = 0; dRow < numRows; dRow++ ) { // create date picker rows
     calender += "<tr>";
     tbody = ( !showWeek ? "" : "<td class='ui-datepicker-week-col'>" +
      this._get( inst, "calculateWeek" )( printDate ) + "</td>" );
     for ( dow = 0; dow < 7; dow++ ) { // create date picker days
      daySettings = ( beforeShowDay ?
       beforeShowDay.apply( ( inst.input ? inst.input[ 0 ] : null ), [ printDate ] ) : [ true, "" ] );
      otherMonth = ( printDate.getMonth() !== drawMonth );
      unselectable = ( otherMonth && !selectOtherMonths ) || !daySettings[ 0 ] ||
       ( minDate && printDate < minDate ) || ( maxDate && printDate > maxDate );
      tbody += "<td class='" +
       ( ( dow + firstDay + 6 ) % 7 >= 5 ? " ui-datepicker-week-end" : "" ) + // highlight weekends
       ( otherMonth ? " ui-datepicker-other-month" : "" ) + // highlight days from other months
       ( ( printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent ) || // user pressed key
       ( defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime() ) ?

       // or defaultDate is current printedDate and defaultDate is selectedDate
       " " + this._dayOverClass : "" ) + // highlight selected day
       ( unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "" ) +  // highlight unselectable days
       ( otherMonth && !showOtherMonths ? "" : " " + daySettings[ 1 ] + // highlight custom dates
       ( printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "" ) + // highlight selected day
       ( printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "" ) ) + "'" + // highlight today (if different)
       ( ( !otherMonth || showOtherMonths ) && daySettings[ 2 ] ? " title='" + daySettings[ 2 ].replace( /'/g, "&#39;" ) + "'" : "" ) + // cell title
       ( unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'" ) + ">" + // actions
       ( otherMonth && !showOtherMonths ? "&#xa0;" : // display for other months
       ( unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" +
       ( printDate.getTime() === today.getTime() ? " ui-state-highlight" : "" ) +
       ( printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "" ) + // highlight selected day
       ( otherMonth ? " ui-priority-secondary" : "" ) + // distinguish dates from other months
       "' href='#'>" + printDate.getDate() + "</a>" ) ) + "</td>"; // display selectable date
      printDate.setDate( printDate.getDate() + 1 );
      printDate = this._daylightSavingAdjust( printDate );
     }
     calender += tbody + "</tr>";
    }
    drawMonth++;
    if ( drawMonth > 11 ) {
     drawMonth = 0;
     drawYear++;
    }
    calender += "</tbody></table>" + ( isMultiMonth ? "</div>" +
       ( ( numMonths[ 0 ] > 0 && col === numMonths[ 1 ] - 1 ) ? "<div class='ui-datepicker-row-break'></div>" : "" ) : "" );
    group += calender;
   }
   html += group;
  }
  html += buttonPanel;
  inst._keyEvent = false;
  return html;
 },

 /* Generate the month and year header. */
 _generateMonthYearHeader: function( inst, drawMonth, drawYear, minDate, maxDate,
   secondary, monthNames, monthNamesShort ) {

  var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear,
   changeMonth = this._get( inst, "changeMonth" ),
   changeYear = this._get( inst, "changeYear" ),
   showMonthAfterYear = this._get( inst, "showMonthAfterYear" ),
   html = "<div class='ui-datepicker-title'>",
   monthHtml = "";

  // Month selection
  if ( secondary || !changeMonth ) {
   monthHtml += "<span class='ui-datepicker-month'>" + monthNames[ drawMonth ] + "</span>";
  } else {
   inMinYear = ( minDate && minDate.getFullYear() === drawYear );
   inMaxYear = ( maxDate && maxDate.getFullYear() === drawYear );
   monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
   for ( month = 0; month < 12; month++ ) {
    if ( ( !inMinYear || month >= minDate.getMonth() ) && ( !inMaxYear || month <= maxDate.getMonth() ) ) {
     monthHtml += "<option value='" + month + "'" +
      ( month === drawMonth ? " selected='selected'" : "" ) +
      ">" + monthNamesShort[ month ] + "</option>";
    }
   }
   monthHtml += "</select>";
  }

  if ( !showMonthAfterYear ) {
   html += monthHtml + ( secondary || !( changeMonth && changeYear ) ? "&#xa0;" : "" );
  }

  // Year selection
  if ( !inst.yearshtml ) {
   inst.yearshtml = "";
   if ( secondary || !changeYear ) {
    html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
   } else {

    // determine range of years to display
    years = this._get( inst, "yearRange" ).split( ":" );
    thisYear = new Date().getFullYear();
    determineYear = function( value ) {
     var year = ( value.match( /c[+\-].*/ ) ? drawYear + parseInt( value.substring( 1 ), 10 ) :
      ( value.match( /[+\-].*/ ) ? thisYear + parseInt( value, 10 ) :
      parseInt( value, 10 ) ) );
     return ( isNaN( year ) ? thisYear : year );
    };
    year = determineYear( years[ 0 ] );
    endYear = Math.max( year, determineYear( years[ 1 ] || "" ) );
    year = ( minDate ? Math.max( year, minDate.getFullYear() ) : year );
    endYear = ( maxDate ? Math.min( endYear, maxDate.getFullYear() ) : endYear );
    inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
    for ( ; year <= endYear; year++ ) {
     inst.yearshtml += "<option value='" + year + "'" +
      ( year === drawYear ? " selected='selected'" : "" ) +
      ">" + year + "</option>";
    }
    inst.yearshtml += "</select>";

    html += inst.yearshtml;
    inst.yearshtml = null;
   }
  }

  html += this._get( inst, "yearSuffix" );
  if ( showMonthAfterYear ) {
   html += ( secondary || !( changeMonth && changeYear ) ? "&#xa0;" : "" ) + monthHtml;
  }
  html += "</div>"; // Close datepicker_header
  return html;
 },

 /* Adjust one of the date sub-fields. */
 _adjustInstDate: function( inst, offset, period ) {
  var year = inst.selectedYear + ( period === "Y" ? offset : 0 ),
   month = inst.selectedMonth + ( period === "M" ? offset : 0 ),
   day = Math.min( inst.selectedDay, this._getDaysInMonth( year, month ) ) + ( period === "D" ? offset : 0 ),
   date = this._restrictMinMax( inst, this._daylightSavingAdjust( new Date( year, month, day ) ) );

  inst.selectedDay = date.getDate();
  inst.drawMonth = inst.selectedMonth = date.getMonth();
  inst.drawYear = inst.selectedYear = date.getFullYear();
  if ( period === "M" || period === "Y" ) {
   this._notifyChange( inst );
  }
 },

 /* Ensure a date is within any min/max bounds. */
 _restrictMinMax: function( inst, date ) {
  var minDate = this._getMinMaxDate( inst, "min" ),
   maxDate = this._getMinMaxDate( inst, "max" ),
   newDate = ( minDate && date < minDate ? minDate : date );
  return ( maxDate && newDate > maxDate ? maxDate : newDate );
 },

 /* Notify change of month/year. */
 _notifyChange: function( inst ) {
  var onChange = this._get( inst, "onChangeMonthYear" );
  if ( onChange ) {
   onChange.apply( ( inst.input ? inst.input[ 0 ] : null ),
    [ inst.selectedYear, inst.selectedMonth + 1, inst ] );
  }
 },

 /* Determine the number of months to show. */
 _getNumberOfMonths: function( inst ) {
  var numMonths = this._get( inst, "numberOfMonths" );
  return ( numMonths == null ? [ 1, 1 ] : ( typeof numMonths === "number" ? [ 1, numMonths ] : numMonths ) );
 },

 /* Determine the current maximum date - ensure no time components are set. */
 _getMinMaxDate: function( inst, minMax ) {
  return this._determineDate( inst, this._get( inst, minMax + "Date" ), null );
 },

 /* Find the number of days in a given month. */
 _getDaysInMonth: function( year, month ) {
  return 32 - this._daylightSavingAdjust( new Date( year, month, 32 ) ).getDate();
 },

 /* Find the day of the week of the first of a month. */
 _getFirstDayOfMonth: function( year, month ) {
  return new Date( year, month, 1 ).getDay();
 },

 /* Determines if we should allow a "next/prev" month display change. */
 _canAdjustMonth: function( inst, offset, curYear, curMonth ) {
  var numMonths = this._getNumberOfMonths( inst ),
   date = this._daylightSavingAdjust( new Date( curYear,
   curMonth + ( offset < 0 ? offset : numMonths[ 0 ] * numMonths[ 1 ] ), 1 ) );

  if ( offset < 0 ) {
   date.setDate( this._getDaysInMonth( date.getFullYear(), date.getMonth() ) );
  }
  return this._isInRange( inst, date );
 },

 /* Is the given date in the accepted range? */
 _isInRange: function( inst, date ) {
  var yearSplit, currentYear,
   minDate = this._getMinMaxDate( inst, "min" ),
   maxDate = this._getMinMaxDate( inst, "max" ),
   minYear = null,
   maxYear = null,
   years = this._get( inst, "yearRange" );
   if ( years ) {
    yearSplit = years.split( ":" );
    currentYear = new Date().getFullYear();
    minYear = parseInt( yearSplit[ 0 ], 10 );
    maxYear = parseInt( yearSplit[ 1 ], 10 );
    if ( yearSplit[ 0 ].match( /[+\-].*/ ) ) {
     minYear += currentYear;
    }
    if ( yearSplit[ 1 ].match( /[+\-].*/ ) ) {
     maxYear += currentYear;
    }
   }

  return ( ( !minDate || date.getTime() >= minDate.getTime() ) &&
   ( !maxDate || date.getTime() <= maxDate.getTime() ) &&
   ( !minYear || date.getFullYear() >= minYear ) &&
   ( !maxYear || date.getFullYear() <= maxYear ) );
 },

 /* Provide the configuration settings for formatting/parsing. */
 _getFormatConfig: function( inst ) {
  var shortYearCutoff = this._get( inst, "shortYearCutoff" );
  shortYearCutoff = ( typeof shortYearCutoff !== "string" ? shortYearCutoff :
   new Date().getFullYear() % 100 + parseInt( shortYearCutoff, 10 ) );
  return { shortYearCutoff: shortYearCutoff,
   dayNamesShort: this._get( inst, "dayNamesShort" ), dayNames: this._get( inst, "dayNames" ),
   monthNamesShort: this._get( inst, "monthNamesShort" ), monthNames: this._get( inst, "monthNames" ) };
 },

 /* Format the given date for display. */
 _formatDate: function( inst, day, month, year ) {
  if ( !day ) {
   inst.currentDay = inst.selectedDay;
   inst.currentMonth = inst.selectedMonth;
   inst.currentYear = inst.selectedYear;
  }
  var date = ( day ? ( typeof day === "object" ? day :
   this._daylightSavingAdjust( new Date( year, month, day ) ) ) :
   this._daylightSavingAdjust( new Date( inst.currentYear, inst.currentMonth, inst.currentDay ) ) );
  return this.formatDate( this._get( inst, "dateFormat" ), date, this._getFormatConfig( inst ) );
 }
} );

/*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global datepicker_instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */
function datepicker_bindHover( dpDiv ) {
 var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
 return dpDiv.on( "mouseout", selector, function() {
   $( this ).removeClass( "ui-state-hover" );
   if ( this.className.indexOf( "ui-datepicker-prev" ) !== -1 ) {
    $( this ).removeClass( "ui-datepicker-prev-hover" );
   }
   if ( this.className.indexOf( "ui-datepicker-next" ) !== -1 ) {
    $( this ).removeClass( "ui-datepicker-next-hover" );
   }
  } )
  .on( "mouseover", selector, datepicker_handleMouseover );
}

function datepicker_handleMouseover() {
 if ( !$.datepicker._isDisabledDatepicker( datepicker_instActive.inline ? datepicker_instActive.dpDiv.parent()[ 0 ] : datepicker_instActive.input[ 0 ] ) ) {
  $( this ).parents( ".ui-datepicker-calendar" ).find( "a" ).removeClass( "ui-state-hover" );
  $( this ).addClass( "ui-state-hover" );
  if ( this.className.indexOf( "ui-datepicker-prev" ) !== -1 ) {
   $( this ).addClass( "ui-datepicker-prev-hover" );
  }
  if ( this.className.indexOf( "ui-datepicker-next" ) !== -1 ) {
   $( this ).addClass( "ui-datepicker-next-hover" );
  }
 }
}

/* jQuery extend now ignores nulls! */
function datepicker_extendRemove( target, props ) {
 $.extend( target, props );
 for ( var name in props ) {
  if ( props[ name ] == null ) {
   target[ name ] = props[ name ];
  }
 }
 return target;
}

/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
     Object - settings for attaching new datepicker functionality
   @return  jQuery object */
$.fn.datepicker = function( options ) {

 /* Verify an empty collection wasn't passed - Fixes #6976 */
 if ( !this.length ) {
  return this;
 }

 /* Initialise the date picker. */
 if ( !$.datepicker.initialized ) {
  $( document ).on( "mousedown", $.datepicker._checkExternalClick );
  $.datepicker.initialized = true;
 }

 /* Append datepicker main container to body if not exist. */
 if ( $( "#" + $.datepicker._mainDivId ).length === 0 ) {
  $( "body" ).append( $.datepicker.dpDiv );
 }

 var otherArgs = Array.prototype.slice.call( arguments, 1 );
 if ( typeof options === "string" && ( options === "isDisabled" || options === "getDate" || options === "widget" ) ) {
  return $.datepicker[ "_" + options + "Datepicker" ].
   apply( $.datepicker, [ this[ 0 ] ].concat( otherArgs ) );
 }
 if ( options === "option" && arguments.length === 2 && typeof arguments[ 1 ] === "string" ) {
  return $.datepicker[ "_" + options + "Datepicker" ].
   apply( $.datepicker, [ this[ 0 ] ].concat( otherArgs ) );
 }
 return this.each( function() {
  typeof options === "string" ?
   $.datepicker[ "_" + options + "Datepicker" ].
    apply( $.datepicker, [ this ].concat( otherArgs ) ) :
   $.datepicker._attachDatepicker( this, options );
 } );
};

$.datepicker = new Datepicker(); // singleton instance
$.datepicker.initialized = false;
$.datepicker.uuid = new Date().getTime();
$.datepicker.version = "1.12.1";

var widgetsDatepicker = $.datepicker;




// This file is deprecated
var ie = $.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );

/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Mouse
//>>group: Widgets
//>>description: Abstracts mouse-based interactions to assist in creating certain widgets.
//>>docs: http://api.jqueryui.com/mouse/



var mouseHandled = false;
$( document ).on( "mouseup", function() {
 mouseHandled = false;
} );

var widgetsMouse = $.widget( "ui.mouse", {
 version: "1.12.1",
 options: {
  cancel: "input, textarea, button, select, option",
  distance: 1,
  delay: 0
 },
 _mouseInit: function() {
  var that = this;

  this.element
   .on( "mousedown." + this.widgetName, function( event ) {
    return that._mouseDown( event );
   } )
   .on( "click." + this.widgetName, function( event ) {
    if ( true === $.data( event.target, that.widgetName + ".preventClickEvent" ) ) {
     $.removeData( event.target, that.widgetName + ".preventClickEvent" );
     event.stopImmediatePropagation();
     return false;
    }
   } );

  this.started = false;
 },

 // TODO: make sure destroying one instance of mouse doesn't mess with
 // other instances of mouse
 _mouseDestroy: function() {
  this.element.off( "." + this.widgetName );
  if ( this._mouseMoveDelegate ) {
   this.document
    .off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
    .off( "mouseup." + this.widgetName, this._mouseUpDelegate );
  }
 },

 _mouseDown: function( event ) {

  // don't let more than one widget handle mouseStart
  if ( mouseHandled ) {
   return;
  }

  this._mouseMoved = false;

  // We may have missed mouseup (out of window)
  ( this._mouseStarted && this._mouseUp( event ) );

  this._mouseDownEvent = event;

  var that = this,
   btnIsLeft = ( event.which === 1 ),

   // event.target.nodeName works around a bug in IE 8 with
   // disabled inputs (#7620)
   elIsCancel = ( typeof this.options.cancel === "string" && event.target.nodeName ?
    $( event.target ).closest( this.options.cancel ).length : false );
  if ( !btnIsLeft || elIsCancel || !this._mouseCapture( event ) ) {
   return true;
  }

  this.mouseDelayMet = !this.options.delay;
  if ( !this.mouseDelayMet ) {
   this._mouseDelayTimer = setTimeout( function() {
    that.mouseDelayMet = true;
   }, this.options.delay );
  }

  if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
   this._mouseStarted = ( this._mouseStart( event ) !== false );
   if ( !this._mouseStarted ) {
    event.preventDefault();
    return true;
   }
  }

  // Click event may never have fired (Gecko & Opera)
  if ( true === $.data( event.target, this.widgetName + ".preventClickEvent" ) ) {
   $.removeData( event.target, this.widgetName + ".preventClickEvent" );
  }

  // These delegates are required to keep context
  this._mouseMoveDelegate = function( event ) {
   return that._mouseMove( event );
  };
  this._mouseUpDelegate = function( event ) {
   return that._mouseUp( event );
  };

  this.document
   .on( "mousemove." + this.widgetName, this._mouseMoveDelegate )
   .on( "mouseup." + this.widgetName, this._mouseUpDelegate );

  event.preventDefault();

  mouseHandled = true;
  return true;
 },

 _mouseMove: function( event ) {

  // Only check for mouseups outside the document if you've moved inside the document
  // at least once. This prevents the firing of mouseup in the case of IE<9, which will
  // fire a mousemove event if content is placed under the cursor. See #7778
  // Support: IE <9
  if ( this._mouseMoved ) {

   // IE mouseup check - mouseup happened when mouse was out of window
   if ( $.ui.ie && ( !document.documentMode || document.documentMode < 9 ) &&
     !event.button ) {
    return this._mouseUp( event );

   // Iframe mouseup check - mouseup occurred in another document
   } else if ( !event.which ) {

    // Support: Safari <=8 - 9
    // Safari sets which to 0 if you press any of the following keys
    // during a drag (#14461)
    if ( event.originalEvent.altKey || event.originalEvent.ctrlKey ||
      event.originalEvent.metaKey || event.originalEvent.shiftKey ) {
     this.ignoreMissingWhich = true;
    } else if ( !this.ignoreMissingWhich ) {
     return this._mouseUp( event );
    }
   }
  }

  if ( event.which || event.button ) {
   this._mouseMoved = true;
  }

  if ( this._mouseStarted ) {
   this._mouseDrag( event );
   return event.preventDefault();
  }

  if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
   this._mouseStarted =
    ( this._mouseStart( this._mouseDownEvent, event ) !== false );
   ( this._mouseStarted ? this._mouseDrag( event ) : this._mouseUp( event ) );
  }

  return !this._mouseStarted;
 },

 _mouseUp: function( event ) {
  this.document
   .off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
   .off( "mouseup." + this.widgetName, this._mouseUpDelegate );

  if ( this._mouseStarted ) {
   this._mouseStarted = false;

   if ( event.target === this._mouseDownEvent.target ) {
    $.data( event.target, this.widgetName + ".preventClickEvent", true );
   }

   this._mouseStop( event );
  }

  if ( this._mouseDelayTimer ) {
   clearTimeout( this._mouseDelayTimer );
   delete this._mouseDelayTimer;
  }

  this.ignoreMissingWhich = false;
  mouseHandled = false;
  event.preventDefault();
 },

 _mouseDistanceMet: function( event ) {
  return ( Math.max(
    Math.abs( this._mouseDownEvent.pageX - event.pageX ),
    Math.abs( this._mouseDownEvent.pageY - event.pageY )
   ) >= this.options.distance
  );
 },

 _mouseDelayMet: function( /* event */ ) {
  return this.mouseDelayMet;
 },

 // These are placeholder methods, to be overriden by extending plugin
 _mouseStart: function( /* event */ ) {},
 _mouseDrag: function( /* event */ ) {},
 _mouseStop: function( /* event */ ) {},
 _mouseCapture: function( /* event */ ) { return true; }
} );




// $.ui.plugin is deprecated. Use $.widget() extensions instead.
var plugin = $.ui.plugin = {
 add: function( module, option, set ) {
  var i,
   proto = $.ui[ module ].prototype;
  for ( i in set ) {
   proto.plugins[ i ] = proto.plugins[ i ] || [];
   proto.plugins[ i ].push( [ option, set[ i ] ] );
  }
 },
 call: function( instance, name, args, allowDisconnected ) {
  var i,
   set = instance.plugins[ name ];

  if ( !set ) {
   return;
  }

  if ( !allowDisconnected && ( !instance.element[ 0 ].parentNode ||
    instance.element[ 0 ].parentNode.nodeType === 11 ) ) {
   return;
  }

  for ( i = 0; i < set.length; i++ ) {
   if ( instance.options[ set[ i ][ 0 ] ] ) {
    set[ i ][ 1 ].apply( instance.element, args );
   }
  }
 }
};



var safeBlur = $.ui.safeBlur = function( element ) {

 // Support: IE9 - 10 only
 // If the <body> is blurred, IE will switch windows, see #9420
 if ( element && element.nodeName.toLowerCase() !== "body" ) {
  $( element ).trigger( "blur" );
 }
};


/*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Draggable
//>>group: Interactions
//>>description: Enables dragging functionality for any element.
//>>docs: http://api.jqueryui.com/draggable/
//>>demos: http://jqueryui.com/draggable/
//>>css.structure: ../../themes/base/draggable.css



$.widget( "ui.draggable", $.ui.mouse, {
 version: "1.12.1",
 widgetEventPrefix: "drag",
 options: {
  addClasses: true,
  appendTo: "parent",
  axis: false,
  connectToSortable: false,
  containment: false,
  cursor: "auto",
  cursorAt: false,
  grid: false,
  handle: false,
  helper: "original",
  iframeFix: false,
  opacity: false,
  refreshPositions: false,
  revert: false,
  revertDuration: 500,
  scope: "default",
  scroll: true,
  scrollSensitivity: 20,
  scrollSpeed: 20,
  snap: false,
  snapMode: "both",
  snapTolerance: 20,
  stack: false,
  zIndex: false,

  // Callbacks
  drag: null,
  start: null,
  stop: null
 },
 _create: function() {

  if ( this.options.helper === "original" ) {
   this._setPositionRelative();
  }
  if ( this.options.addClasses ) {
   this._addClass( "ui-draggable" );
  }
  this._setHandleClassName();

  this._mouseInit();
 },

 _setOption: function( key, value ) {
  this._super( key, value );
  if ( key === "handle" ) {
   this._removeHandleClassName();
   this._setHandleClassName();
  }
 },

 _destroy: function() {
  if ( ( this.helper || this.element ).is( ".ui-draggable-dragging" ) ) {
   this.destroyOnClear = true;
   return;
  }
  this._removeHandleClassName();
  this._mouseDestroy();
 },

 _mouseCapture: function( event ) {
  var o = this.options;

  // Among others, prevent a drag on a resizable-handle
  if ( this.helper || o.disabled ||
    $( event.target ).closest( ".ui-resizable-handle" ).length > 0 ) {
   return false;
  }

  //Quit if we're not on a valid handle
  this.handle = this._getHandle( event );
  if ( !this.handle ) {
   return false;
  }

  this._blurActiveElement( event );

  this._blockFrames( o.iframeFix === true ? "iframe" : o.iframeFix );

  return true;

 },

 _blockFrames: function( selector ) {
  this.iframeBlocks = this.document.find( selector ).map( function() {
   var iframe = $( this );

   return $( "<div>" )
    .css( "position", "absolute" )
    .appendTo( iframe.parent() )
    .outerWidth( iframe.outerWidth() )
    .outerHeight( iframe.outerHeight() )
    .offset( iframe.offset() )[ 0 ];
  } );
 },

 _unblockFrames: function() {
  if ( this.iframeBlocks ) {
   this.iframeBlocks.remove();
   delete this.iframeBlocks;
  }
 },

 _blurActiveElement: function( event ) {
  var activeElement = $.ui.safeActiveElement( this.document[ 0 ] ),
   target = $( event.target );

  // Don't blur if the event occurred on an element that is within
  // the currently focused element
  // See #10527, #12472
  if ( target.closest( activeElement ).length ) {
   return;
  }

  // Blur any element that currently has focus, see #4261
  $.ui.safeBlur( activeElement );
 },

 _mouseStart: function( event ) {

  var o = this.options;

  //Create and append the visible helper
  this.helper = this._createHelper( event );

  this._addClass( this.helper, "ui-draggable-dragging" );

  //Cache the helper size
  this._cacheHelperProportions();

  //If ddmanager is used for droppables, set the global draggable
  if ( $.ui.ddmanager ) {
   $.ui.ddmanager.current = this;
  }

  /*
   * - Position generation -
   * This block generates everything position related - it's the core of draggables.
   */

  //Cache the margins of the original element
  this._cacheMargins();

  //Store the helper's css position
  this.cssPosition = this.helper.css( "position" );
  this.scrollParent = this.helper.scrollParent( true );
  this.offsetParent = this.helper.offsetParent();
  this.hasFixedAncestor = this.helper.parents().filter( function() {
    return $( this ).css( "position" ) === "fixed";
   } ).length > 0;

  //The element's absolute position on the page minus margins
  this.positionAbs = this.element.offset();
  this._refreshOffsets( event );

  //Generate the original position
  this.originalPosition = this.position = this._generatePosition( event, false );
  this.originalPageX = event.pageX;
  this.originalPageY = event.pageY;

  //Adjust the mouse offset relative to the helper if "cursorAt" is supplied
  ( o.cursorAt && this._adjustOffsetFromHelper( o.cursorAt ) );

  //Set a containment if given in the options
  this._setContainment();

  //Trigger event + callbacks
  if ( this._trigger( "start", event ) === false ) {
   this._clear();
   return false;
  }

  //Recache the helper size
  this._cacheHelperProportions();

  //Prepare the droppable offsets
  if ( $.ui.ddmanager && !o.dropBehaviour ) {
   $.ui.ddmanager.prepareOffsets( this, event );
  }

  // Execute the drag once - this causes the helper not to be visible before getting its
  // correct position
  this._mouseDrag( event, true );

  // If the ddmanager is used for droppables, inform the manager that dragging has started
  // (see #5003)
  if ( $.ui.ddmanager ) {
   $.ui.ddmanager.dragStart( this, event );
  }

  return true;
 },

 _refreshOffsets: function( event ) {
  this.offset = {
   top: this.positionAbs.top - this.margins.top,
   left: this.positionAbs.left - this.margins.left,
   scroll: false,
   parent: this._getParentOffset(),
   relative: this._getRelativeOffset()
  };

  this.offset.click = {
   left: event.pageX - this.offset.left,
   top: event.pageY - this.offset.top
  };
 },

 _mouseDrag: function( event, noPropagation ) {

  // reset any necessary cached properties (see #5009)
  if ( this.hasFixedAncestor ) {
   this.offset.parent = this._getParentOffset();
  }

  //Compute the helpers position
  this.position = this._generatePosition( event, true );
  this.positionAbs = this._convertPositionTo( "absolute" );

  //Call plugins and callbacks and use the resulting position if something is returned
  if ( !noPropagation ) {
   var ui = this._uiHash();
   if ( this._trigger( "drag", event, ui ) === false ) {
    this._mouseUp( new $.Event( "mouseup", event ) );
    return false;
   }
   this.position = ui.position;
  }

  this.helper[ 0 ].style.left = this.position.left + "px";
  this.helper[ 0 ].style.top = this.position.top + "px";

  if ( $.ui.ddmanager ) {
   $.ui.ddmanager.drag( this, event );
  }

  return false;
 },

 _mouseStop: function( event ) {

  //If we are using droppables, inform the manager about the drop
  var that = this,
   dropped = false;
  if ( $.ui.ddmanager && !this.options.dropBehaviour ) {
   dropped = $.ui.ddmanager.drop( this, event );
  }

  //if a drop comes from outside (a sortable)
  if ( this.dropped ) {
   dropped = this.dropped;
   this.dropped = false;
  }

  if ( ( this.options.revert === "invalid" && !dropped ) ||
    ( this.options.revert === "valid" && dropped ) ||
    this.options.revert === true || ( $.isFunction( this.options.revert ) &&
    this.options.revert.call( this.element, dropped ) )
  ) {
   $( this.helper ).animate(
    this.originalPosition,
    parseInt( this.options.revertDuration, 10 ),
    function() {
     if ( that._trigger( "stop", event ) !== false ) {
      that._clear();
     }
    }
   );
  } else {
   if ( this._trigger( "stop", event ) !== false ) {
    this._clear();
   }
  }

  return false;
 },

 _mouseUp: function( event ) {
  this._unblockFrames();

  // If the ddmanager is used for droppables, inform the manager that dragging has stopped
  // (see #5003)
  if ( $.ui.ddmanager ) {
   $.ui.ddmanager.dragStop( this, event );
  }

  // Only need to focus if the event occurred on the draggable itself, see #10527
  if ( this.handleElement.is( event.target ) ) {

   // The interaction is over; whether or not the click resulted in a drag,
   // focus the element
   this.element.trigger( "focus" );
  }

  return $.ui.mouse.prototype._mouseUp.call( this, event );
 },

 cancel: function() {

  if ( this.helper.is( ".ui-draggable-dragging" ) ) {
   this._mouseUp( new $.Event( "mouseup", { target: this.element[ 0 ] } ) );
  } else {
   this._clear();
  }

  return this;

 },

 _getHandle: function( event ) {
  return this.options.handle ?
   !!$( event.target ).closest( this.element.find( this.options.handle ) ).length :
   true;
 },

 _setHandleClassName: function() {
  this.handleElement = this.options.handle ?
   this.element.find( this.options.handle ) : this.element;
  this._addClass( this.handleElement, "ui-draggable-handle" );
 },

 _removeHandleClassName: function() {
  this._removeClass( this.handleElement, "ui-draggable-handle" );
 },

 _createHelper: function( event ) {

  var o = this.options,
   helperIsFunction = $.isFunction( o.helper ),
   helper = helperIsFunction ?
    $( o.helper.apply( this.element[ 0 ], [ event ] ) ) :
    ( o.helper === "clone" ?
     this.element.clone().removeAttr( "id" ) :
     this.element );

  if ( !helper.parents( "body" ).length ) {
   helper.appendTo( ( o.appendTo === "parent" ?
    this.element[ 0 ].parentNode :
    o.appendTo ) );
  }

  // Http://bugs.jqueryui.com/ticket/9446
  // a helper function can return the original element
  // which wouldn't have been set to relative in _create
  if ( helperIsFunction && helper[ 0 ] === this.element[ 0 ] ) {
   this._setPositionRelative();
  }

  if ( helper[ 0 ] !== this.element[ 0 ] &&
    !( /(fixed|absolute)/ ).test( helper.css( "position" ) ) ) {
   helper.css( "position", "absolute" );
  }

  return helper;

 },

 _setPositionRelative: function() {
  if ( !( /^(?:r|a|f)/ ).test( this.element.css( "position" ) ) ) {
   this.element[ 0 ].style.position = "relative";
  }
 },

 _adjustOffsetFromHelper: function( obj ) {
  if ( typeof obj === "string" ) {
   obj = obj.split( " " );
  }
  if ( $.isArray( obj ) ) {
   obj = { left: +obj[ 0 ], top: +obj[ 1 ] || 0 };
  }
  if ( "left" in obj ) {
   this.offset.click.left = obj.left + this.margins.left;
  }
  if ( "right" in obj ) {
   this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
  }
  if ( "top" in obj ) {
   this.offset.click.top = obj.top + this.margins.top;
  }
  if ( "bottom" in obj ) {
   this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
  }
 },

 _isRootNode: function( element ) {
  return ( /(html|body)/i ).test( element.tagName ) || element === this.document[ 0 ];
 },

 _getParentOffset: function() {

  //Get the offsetParent and cache its position
  var po = this.offsetParent.offset(),
   document = this.document[ 0 ];

  // This is a special case where we need to modify a offset calculated on start, since the
  // following happened:
  // 1. The position of the helper is absolute, so it's position is calculated based on the
  // next positioned parent
  // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
  // the document, which means that the scroll is included in the initial calculation of the
  // offset of the parent, and never recalculated upon drag
  if ( this.cssPosition === "absolute" && this.scrollParent[ 0 ] !== document &&
    $.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) {
   po.left += this.scrollParent.scrollLeft();
   po.top += this.scrollParent.scrollTop();
  }

  if ( this._isRootNode( this.offsetParent[ 0 ] ) ) {
   po = { top: 0, left: 0 };
  }

  return {
   top: po.top + ( parseInt( this.offsetParent.css( "borderTopWidth" ), 10 ) || 0 ),
   left: po.left + ( parseInt( this.offsetParent.css( "borderLeftWidth" ), 10 ) || 0 )
  };

 },

 _getRelativeOffset: function() {
  if ( this.cssPosition !== "relative" ) {
   return { top: 0, left: 0 };
  }

  var p = this.element.position(),
   scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

  return {
   top: p.top - ( parseInt( this.helper.css( "top" ), 10 ) || 0 ) +
    ( !scrollIsRootNode ? this.scrollParent.scrollTop() : 0 ),
   left: p.left - ( parseInt( this.helper.css( "left" ), 10 ) || 0 ) +
    ( !scrollIsRootNode ? this.scrollParent.scrollLeft() : 0 )
  };

 },

 _cacheMargins: function() {
  this.margins = {
   left: ( parseInt( this.element.css( "marginLeft" ), 10 ) || 0 ),
   top: ( parseInt( this.element.css( "marginTop" ), 10 ) || 0 ),
   right: ( parseInt( this.element.css( "marginRight" ), 10 ) || 0 ),
   bottom: ( parseInt( this.element.css( "marginBottom" ), 10 ) || 0 )
  };
 },

 _cacheHelperProportions: function() {
  this.helperProportions = {
   width: this.helper.outerWidth(),
   height: this.helper.outerHeight()
  };
 },

 _setContainment: function() {

  var isUserScrollable, c, ce,
   o = this.options,
   document = this.document[ 0 ];

  this.relativeContainer = null;

  if ( !o.containment ) {
   this.containment = null;
   return;
  }

  if ( o.containment === "window" ) {
   this.containment = [
    $( window ).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
    $( window ).scrollTop() - this.offset.relative.top - this.offset.parent.top,
    $( window ).scrollLeft() + $( window ).width() -
     this.helperProportions.width - this.margins.left,
    $( window ).scrollTop() +
     ( $( window ).height() || document.body.parentNode.scrollHeight ) -
     this.helperProportions.height - this.margins.top
   ];
   return;
  }

  if ( o.containment === "document" ) {
   this.containment = [
    0,
    0,
    $( document ).width() - this.helperProportions.width - this.margins.left,
    ( $( document ).height() || document.body.parentNode.scrollHeight ) -
     this.helperProportions.height - this.margins.top
   ];
   return;
  }

  if ( o.containment.constructor === Array ) {
   this.containment = o.containment;
   return;
  }

  if ( o.containment === "parent" ) {
   o.containment = this.helper[ 0 ].parentNode;
  }

  c = $( o.containment );
  ce = c[ 0 ];

  if ( !ce ) {
   return;
  }

  isUserScrollable = /(scroll|auto)/.test( c.css( "overflow" ) );

  this.containment = [
   ( parseInt( c.css( "borderLeftWidth" ), 10 ) || 0 ) +
    ( parseInt( c.css( "paddingLeft" ), 10 ) || 0 ),
   ( parseInt( c.css( "borderTopWidth" ), 10 ) || 0 ) +
    ( parseInt( c.css( "paddingTop" ), 10 ) || 0 ),
   ( isUserScrollable ? Math.max( ce.scrollWidth, ce.offsetWidth ) : ce.offsetWidth ) -
    ( parseInt( c.css( "borderRightWidth" ), 10 ) || 0 ) -
    ( parseInt( c.css( "paddingRight" ), 10 ) || 0 ) -
    this.helperProportions.width -
    this.margins.left -
    this.margins.right,
   ( isUserScrollable ? Math.max( ce.scrollHeight, ce.offsetHeight ) : ce.offsetHeight ) -
    ( parseInt( c.css( "borderBottomWidth" ), 10 ) || 0 ) -
    ( parseInt( c.css( "paddingBottom" ), 10 ) || 0 ) -
    this.helperProportions.height -
    this.margins.top -
    this.margins.bottom
  ];
  this.relativeContainer = c;
 },

 _convertPositionTo: function( d, pos ) {

  if ( !pos ) {
   pos = this.position;
  }

  var mod = d === "absolute" ? 1 : -1,
   scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

  return {
   top: (

    // The absolute mouse position
    pos.top +

    // Only for relative positioned nodes: Relative offset from element to offset parent
    this.offset.relative.top * mod +

    // The offsetParent's offset without borders (offset + border)
    this.offset.parent.top * mod -
    ( ( this.cssPosition === "fixed" ?
     -this.offset.scroll.top :
     ( scrollIsRootNode ? 0 : this.offset.scroll.top ) ) * mod )
   ),
   left: (

    // The absolute mouse position
    pos.left +

    // Only for relative positioned nodes: Relative offset from element to offset parent
    this.offset.relative.left * mod +

    // The offsetParent's offset without borders (offset + border)
    this.offset.parent.left * mod -
    ( ( this.cssPosition === "fixed" ?
     -this.offset.scroll.left :
     ( scrollIsRootNode ? 0 : this.offset.scroll.left ) ) * mod )
   )
  };

 },

 _generatePosition: function( event, constrainPosition ) {

  var containment, co, top, left,
   o = this.options,
   scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] ),
   pageX = event.pageX,
   pageY = event.pageY;

  // Cache the scroll
  if ( !scrollIsRootNode || !this.offset.scroll ) {
   this.offset.scroll = {
    top: this.scrollParent.scrollTop(),
    left: this.scrollParent.scrollLeft()
   };
  }

  /*
   * - Position constraining -
   * Constrain the position to a mix of grid, containment.
   */

  // If we are not dragging yet, we won't check for options
  if ( constrainPosition ) {
   if ( this.containment ) {
    if ( this.relativeContainer ) {
     co = this.relativeContainer.offset();
     containment = [
      this.containment[ 0 ] + co.left,
      this.containment[ 1 ] + co.top,
      this.containment[ 2 ] + co.left,
      this.containment[ 3 ] + co.top
     ];
    } else {
     containment = this.containment;
    }

    if ( event.pageX - this.offset.click.left < containment[ 0 ] ) {
     pageX = containment[ 0 ] + this.offset.click.left;
    }
    if ( event.pageY - this.offset.click.top < containment[ 1 ] ) {
     pageY = containment[ 1 ] + this.offset.click.top;
    }
    if ( event.pageX - this.offset.click.left > containment[ 2 ] ) {
     pageX = containment[ 2 ] + this.offset.click.left;
    }
    if ( event.pageY - this.offset.click.top > containment[ 3 ] ) {
     pageY = containment[ 3 ] + this.offset.click.top;
    }
   }

   if ( o.grid ) {

    //Check for grid elements set to 0 to prevent divide by 0 error causing invalid
    // argument errors in IE (see ticket #6950)
    top = o.grid[ 1 ] ? this.originalPageY + Math.round( ( pageY -
     this.originalPageY ) / o.grid[ 1 ] ) * o.grid[ 1 ] : this.originalPageY;
    pageY = containment ? ( ( top - this.offset.click.top >= containment[ 1 ] ||
     top - this.offset.click.top > containment[ 3 ] ) ?
      top :
      ( ( top - this.offset.click.top >= containment[ 1 ] ) ?
       top - o.grid[ 1 ] : top + o.grid[ 1 ] ) ) : top;

    left = o.grid[ 0 ] ? this.originalPageX +
     Math.round( ( pageX - this.originalPageX ) / o.grid[ 0 ] ) * o.grid[ 0 ] :
     this.originalPageX;
    pageX = containment ? ( ( left - this.offset.click.left >= containment[ 0 ] ||
     left - this.offset.click.left > containment[ 2 ] ) ?
      left :
      ( ( left - this.offset.click.left >= containment[ 0 ] ) ?
       left - o.grid[ 0 ] : left + o.grid[ 0 ] ) ) : left;
   }

   if ( o.axis === "y" ) {
    pageX = this.originalPageX;
   }

   if ( o.axis === "x" ) {
    pageY = this.originalPageY;
   }
  }

  return {
   top: (

    // The absolute mouse position
    pageY -

    // Click offset (relative to the element)
    this.offset.click.top -

    // Only for relative positioned nodes: Relative offset from element to offset parent
    this.offset.relative.top -

    // The offsetParent's offset without borders (offset + border)
    this.offset.parent.top +
    ( this.cssPosition === "fixed" ?
     -this.offset.scroll.top :
     ( scrollIsRootNode ? 0 : this.offset.scroll.top ) )
   ),
   left: (

    // The absolute mouse position
    pageX -

    // Click offset (relative to the element)
    this.offset.click.left -

    // Only for relative positioned nodes: Relative offset from element to offset parent
    this.offset.relative.left -

    // The offsetParent's offset without borders (offset + border)
    this.offset.parent.left +
    ( this.cssPosition === "fixed" ?
     -this.offset.scroll.left :
     ( scrollIsRootNode ? 0 : this.offset.scroll.left ) )
   )
  };

 },

 _clear: function() {
  this._removeClass( this.helper, "ui-draggable-dragging" );
  if ( this.helper[ 0 ] !== this.element[ 0 ] && !this.cancelHelperRemoval ) {
   this.helper.remove();
  }
  this.helper = null;
  this.cancelHelperRemoval = false;
  if ( this.destroyOnClear ) {
   this.destroy();
  }
 },

 // From now on bulk stuff - mainly helpers

 _trigger: function( type, event, ui ) {
  ui = ui || this._uiHash();
  $.ui.plugin.call( this, type, [ event, ui, this ], true );

  // Absolute position and offset (see #6884 ) have to be recalculated after plugins
  if ( /^(drag|start|stop)/.test( type ) ) {
   this.positionAbs = this._convertPositionTo( "absolute" );
   ui.offset = this.positionAbs;
  }
  return $.Widget.prototype._trigger.call( this, type, event, ui );
 },

 plugins: {},

 _uiHash: function() {
  return {
   helper: this.helper,
   position: this.position,
   originalPosition: this.originalPosition,
   offset: this.positionAbs
  };
 }

} );

$.ui.plugin.add( "draggable", "connectToSortable", {
 start: function( event, ui, draggable ) {
  var uiSortable = $.extend( {}, ui, {
   item: draggable.element
  } );

  draggable.sortables = [];
  $( draggable.options.connectToSortable ).each( function() {
   var sortable = $( this ).sortable( "instance" );

   if ( sortable && !sortable.options.disabled ) {
    draggable.sortables.push( sortable );

    // RefreshPositions is called at drag start to refresh the containerCache
    // which is used in drag. This ensures it's initialized and synchronized
    // with any changes that might have happened on the page since initialization.
    sortable.refreshPositions();
    sortable._trigger( "activate", event, uiSortable );
   }
  } );
 },
 stop: function( event, ui, draggable ) {
  var uiSortable = $.extend( {}, ui, {
   item: draggable.element
  } );

  draggable.cancelHelperRemoval = false;

  $.each( draggable.sortables, function() {
   var sortable = this;

   if ( sortable.isOver ) {
    sortable.isOver = 0;

    // Allow this sortable to handle removing the helper
    draggable.cancelHelperRemoval = true;
    sortable.cancelHelperRemoval = false;

    // Use _storedCSS To restore properties in the sortable,
    // as this also handles revert (#9675) since the draggable
    // may have modified them in unexpected ways (#8809)
    sortable._storedCSS = {
     position: sortable.placeholder.css( "position" ),
     top: sortable.placeholder.css( "top" ),
     left: sortable.placeholder.css( "left" )
    };

    sortable._mouseStop( event );

    // Once drag has ended, the sortable should return to using
    // its original helper, not the shared helper from draggable
    sortable.options.helper = sortable.options._helper;
   } else {

    // Prevent this Sortable from removing the helper.
    // However, don't set the draggable to remove the helper
    // either as another connected Sortable may yet handle the removal.
    sortable.cancelHelperRemoval = true;

    sortable._trigger( "deactivate", event, uiSortable );
   }
  } );
 },
 drag: function( event, ui, draggable ) {
  $.each( draggable.sortables, function() {
   var innermostIntersecting = false,
    sortable = this;

   // Copy over variables that sortable's _intersectsWith uses
   sortable.positionAbs = draggable.positionAbs;
   sortable.helperProportions = draggable.helperProportions;
   sortable.offset.click = draggable.offset.click;

   if ( sortable._intersectsWith( sortable.containerCache ) ) {
    innermostIntersecting = true;

    $.each( draggable.sortables, function() {

     // Copy over variables that sortable's _intersectsWith uses
     this.positionAbs = draggable.positionAbs;
     this.helperProportions = draggable.helperProportions;
     this.offset.click = draggable.offset.click;

     if ( this !== sortable &&
       this._intersectsWith( this.containerCache ) &&
       $.contains( sortable.element[ 0 ], this.element[ 0 ] ) ) {
      innermostIntersecting = false;
     }

     return innermostIntersecting;
    } );
   }

   if ( innermostIntersecting ) {

    // If it intersects, we use a little isOver variable and set it once,
    // so that the move-in stuff gets fired only once.
    if ( !sortable.isOver ) {
     sortable.isOver = 1;

     // Store draggable's parent in case we need to reappend to it later.
     draggable._parent = ui.helper.parent();

     sortable.currentItem = ui.helper
      .appendTo( sortable.element )
      .data( "ui-sortable-item", true );

     // Store helper option to later restore it
     sortable.options._helper = sortable.options.helper;

     sortable.options.helper = function() {
      return ui.helper[ 0 ];
     };

     // Fire the start events of the sortable with our passed browser event,
     // and our own helper (so it doesn't create a new one)
     event.target = sortable.currentItem[ 0 ];
     sortable._mouseCapture( event, true );
     sortable._mouseStart( event, true, true );

     // Because the browser event is way off the new appended portlet,
     // modify necessary variables to reflect the changes
     sortable.offset.click.top = draggable.offset.click.top;
     sortable.offset.click.left = draggable.offset.click.left;
     sortable.offset.parent.left -= draggable.offset.parent.left -
      sortable.offset.parent.left;
     sortable.offset.parent.top -= draggable.offset.parent.top -
      sortable.offset.parent.top;

     draggable._trigger( "toSortable", event );

     // Inform draggable that the helper is in a valid drop zone,
     // used solely in the revert option to handle "valid/invalid".
     draggable.dropped = sortable.element;

     // Need to refreshPositions of all sortables in the case that
     // adding to one sortable changes the location of the other sortables (#9675)
     $.each( draggable.sortables, function() {
      this.refreshPositions();
     } );

     // Hack so receive/update callbacks work (mostly)
     draggable.currentItem = draggable.element;
     sortable.fromOutside = draggable;
    }

    if ( sortable.currentItem ) {
     sortable._mouseDrag( event );

     // Copy the sortable's position because the draggable's can potentially reflect
     // a relative position, while sortable is always absolute, which the dragged
     // element has now become. (#8809)
     ui.position = sortable.position;
    }
   } else {

    // If it doesn't intersect with the sortable, and it intersected before,
    // we fake the drag stop of the sortable, but make sure it doesn't remove
    // the helper by using cancelHelperRemoval.
    if ( sortable.isOver ) {

     sortable.isOver = 0;
     sortable.cancelHelperRemoval = true;

     // Calling sortable's mouseStop would trigger a revert,
     // so revert must be temporarily false until after mouseStop is called.
     sortable.options._revert = sortable.options.revert;
     sortable.options.revert = false;

     sortable._trigger( "out", event, sortable._uiHash( sortable ) );
     sortable._mouseStop( event, true );

     // Restore sortable behaviors that were modfied
     // when the draggable entered the sortable area (#9481)
     sortable.options.revert = sortable.options._revert;
     sortable.options.helper = sortable.options._helper;

     if ( sortable.placeholder ) {
      sortable.placeholder.remove();
     }

     // Restore and recalculate the draggable's offset considering the sortable
     // may have modified them in unexpected ways. (#8809, #10669)
     ui.helper.appendTo( draggable._parent );
     draggable._refreshOffsets( event );
     ui.position = draggable._generatePosition( event, true );

     draggable._trigger( "fromSortable", event );

     // Inform draggable that the helper is no longer in a valid drop zone
     draggable.dropped = false;

     // Need to refreshPositions of all sortables just in case removing
     // from one sortable changes the location of other sortables (#9675)
     $.each( draggable.sortables, function() {
      this.refreshPositions();
     } );
    }
   }
  } );
 }
} );

$.ui.plugin.add( "draggable", "cursor", {
 start: function( event, ui, instance ) {
  var t = $( "body" ),
   o = instance.options;

  if ( t.css( "cursor" ) ) {
   o._cursor = t.css( "cursor" );
  }
  t.css( "cursor", o.cursor );
 },
 stop: function( event, ui, instance ) {
  var o = instance.options;
  if ( o._cursor ) {
   $( "body" ).css( "cursor", o._cursor );
  }
 }
} );

$.ui.plugin.add( "draggable", "opacity", {
 start: function( event, ui, instance ) {
  var t = $( ui.helper ),
   o = instance.options;
  if ( t.css( "opacity" ) ) {
   o._opacity = t.css( "opacity" );
  }
  t.css( "opacity", o.opacity );
 },
 stop: function( event, ui, instance ) {
  var o = instance.options;
  if ( o._opacity ) {
   $( ui.helper ).css( "opacity", o._opacity );
  }
 }
} );

$.ui.plugin.add( "draggable", "scroll", {
 start: function( event, ui, i ) {
  if ( !i.scrollParentNotHidden ) {
   i.scrollParentNotHidden = i.helper.scrollParent( false );
  }

  if ( i.scrollParentNotHidden[ 0 ] !== i.document[ 0 ] &&
    i.scrollParentNotHidden[ 0 ].tagName !== "HTML" ) {
   i.overflowOffset = i.scrollParentNotHidden.offset();
  }
 },
 drag: function( event, ui, i  ) {

  var o = i.options,
   scrolled = false,
   scrollParent = i.scrollParentNotHidden[ 0 ],
   document = i.document[ 0 ];

  if ( scrollParent !== document && scrollParent.tagName !== "HTML" ) {
   if ( !o.axis || o.axis !== "x" ) {
    if ( ( i.overflowOffset.top + scrollParent.offsetHeight ) - event.pageY <
      o.scrollSensitivity ) {
     scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed;
    } else if ( event.pageY - i.overflowOffset.top < o.scrollSensitivity ) {
     scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed;
    }
   }

   if ( !o.axis || o.axis !== "y" ) {
    if ( ( i.overflowOffset.left + scrollParent.offsetWidth ) - event.pageX <
      o.scrollSensitivity ) {
     scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed;
    } else if ( event.pageX - i.overflowOffset.left < o.scrollSensitivity ) {
     scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed;
    }
   }

  } else {

   if ( !o.axis || o.axis !== "x" ) {
    if ( event.pageY - $( document ).scrollTop() < o.scrollSensitivity ) {
     scrolled = $( document ).scrollTop( $( document ).scrollTop() - o.scrollSpeed );
    } else if ( $( window ).height() - ( event.pageY - $( document ).scrollTop() ) <
      o.scrollSensitivity ) {
     scrolled = $( document ).scrollTop( $( document ).scrollTop() + o.scrollSpeed );
    }
   }

   if ( !o.axis || o.axis !== "y" ) {
    if ( event.pageX - $( document ).scrollLeft() < o.scrollSensitivity ) {
     scrolled = $( document ).scrollLeft(
      $( document ).scrollLeft() - o.scrollSpeed
     );
    } else if ( $( window ).width() - ( event.pageX - $( document ).scrollLeft() ) <
      o.scrollSensitivity ) {
     scrolled = $( document ).scrollLeft(
      $( document ).scrollLeft() + o.scrollSpeed
     );
    }
   }

  }

  if ( scrolled !== false && $.ui.ddmanager && !o.dropBehaviour ) {
   $.ui.ddmanager.prepareOffsets( i, event );
  }

 }
} );

$.ui.plugin.add( "draggable", "snap", {
 start: function( event, ui, i ) {

  var o = i.options;

  i.snapElements = [];

  $( o.snap.constructor !== String ? ( o.snap.items || ":data(ui-draggable)" ) : o.snap )
   .each( function() {
    var $t = $( this ),
     $o = $t.offset();
    if ( this !== i.element[ 0 ] ) {
     i.snapElements.push( {
      item: this,
      width: $t.outerWidth(), height: $t.outerHeight(),
      top: $o.top, left: $o.left
     } );
    }
   } );

 },
 drag: function( event, ui, inst ) {

  var ts, bs, ls, rs, l, r, t, b, i, first,
   o = inst.options,
   d = o.snapTolerance,
   x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
   y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;

  for ( i = inst.snapElements.length - 1; i >= 0; i-- ) {

   l = inst.snapElements[ i ].left - inst.margins.left;
   r = l + inst.snapElements[ i ].width;
   t = inst.snapElements[ i ].top - inst.margins.top;
   b = t + inst.snapElements[ i ].height;

   if ( x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d ||
     !$.contains( inst.snapElements[ i ].item.ownerDocument,
     inst.snapElements[ i ].item ) ) {
    if ( inst.snapElements[ i ].snapping ) {
     ( inst.options.snap.release &&
      inst.options.snap.release.call(
       inst.element,
       event,
       $.extend( inst._uiHash(), { snapItem: inst.snapElements[ i ].item } )
      ) );
    }
    inst.snapElements[ i ].snapping = false;
    continue;
   }

   if ( o.snapMode !== "inner" ) {
    ts = Math.abs( t - y2 ) <= d;
    bs = Math.abs( b - y1 ) <= d;
    ls = Math.abs( l - x2 ) <= d;
    rs = Math.abs( r - x1 ) <= d;
    if ( ts ) {
     ui.position.top = inst._convertPositionTo( "relative", {
      top: t - inst.helperProportions.height,
      left: 0
     } ).top;
    }
    if ( bs ) {
     ui.position.top = inst._convertPositionTo( "relative", {
      top: b,
      left: 0
     } ).top;
    }
    if ( ls ) {
     ui.position.left = inst._convertPositionTo( "relative", {
      top: 0,
      left: l - inst.helperProportions.width
     } ).left;
    }
    if ( rs ) {
     ui.position.left = inst._convertPositionTo( "relative", {
      top: 0,
      left: r
     } ).left;
    }
   }

   first = ( ts || bs || ls || rs );

   if ( o.snapMode !== "outer" ) {
    ts = Math.abs( t - y1 ) <= d;
    bs = Math.abs( b - y2 ) <= d;
    ls = Math.abs( l - x1 ) <= d;
    rs = Math.abs( r - x2 ) <= d;
    if ( ts ) {
     ui.position.top = inst._convertPositionTo( "relative", {
      top: t,
      left: 0
     } ).top;
    }
    if ( bs ) {
     ui.position.top = inst._convertPositionTo( "relative", {
      top: b - inst.helperProportions.height,
      left: 0
     } ).top;
    }
    if ( ls ) {
     ui.position.left = inst._convertPositionTo( "relative", {
      top: 0,
      left: l
     } ).left;
    }
    if ( rs ) {
     ui.position.left = inst._convertPositionTo( "relative", {
      top: 0,
      left: r - inst.helperProportions.width
     } ).left;
    }
   }

   if ( !inst.snapElements[ i ].snapping && ( ts || bs || ls || rs || first ) ) {
    ( inst.options.snap.snap &&
     inst.options.snap.snap.call(
      inst.element,
      event,
      $.extend( inst._uiHash(), {
       snapItem: inst.snapElements[ i ].item
      } ) ) );
   }
   inst.snapElements[ i ].snapping = ( ts || bs || ls || rs || first );

  }

 }
} );

$.ui.plugin.add( "draggable", "stack", {
 start: function( event, ui, instance ) {
  var min,
   o = instance.options,
   group = $.makeArray( $( o.stack ) ).sort( function( a, b ) {
    return ( parseInt( $( a ).css( "zIndex" ), 10 ) || 0 ) -
     ( parseInt( $( b ).css( "zIndex" ), 10 ) || 0 );
   } );

  if ( !group.length ) { return; }

  min = parseInt( $( group[ 0 ] ).css( "zIndex" ), 10 ) || 0;
  $( group ).each( function( i ) {
   $( this ).css( "zIndex", min + i );
  } );
  this.css( "zIndex", ( min + group.length ) );
 }
} );

$.ui.plugin.add( "draggable", "zIndex", {
 start: function( event, ui, instance ) {
  var t = $( ui.helper ),
   o = instance.options;

  if ( t.css( "zIndex" ) ) {
   o._zIndex = t.css( "zIndex" );
  }
  t.css( "zIndex", o.zIndex );
 },
 stop: function( event, ui, instance ) {
  var o = instance.options;

  if ( o._zIndex ) {
   $( ui.helper ).css( "zIndex", o._zIndex );
  }
 }
} );

var widgetsDraggable = $.ui.draggable;


/*!
 * jQuery UI Resizable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Resizable
//>>group: Interactions
//>>description: Enables resize functionality for any element.
//>>docs: http://api.jqueryui.com/resizable/
//>>demos: http://jqueryui.com/resizable/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/resizable.css
//>>css.theme: ../../themes/base/theme.css



$.widget( "ui.resizable", $.ui.mouse, {
 version: "1.12.1",
 widgetEventPrefix: "resize",
 options: {
  alsoResize: false,
  animate: false,
  animateDuration: "slow",
  animateEasing: "swing",
  aspectRatio: false,
  autoHide: false,
  classes: {
   "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
  },
  containment: false,
  ghost: false,
  grid: false,
  handles: "e,s,se",
  helper: false,
  maxHeight: null,
  maxWidth: null,
  minHeight: 10,
  minWidth: 10,

  // See #7960
  zIndex: 90,

  // Callbacks
  resize: null,
  start: null,
  stop: null
 },

 _num: function( value ) {
  return parseFloat( value ) || 0;
 },

 _isNumber: function( value ) {
  return !isNaN( parseFloat( value ) );
 },

 _hasScroll: function( el, a ) {

  if ( $( el ).css( "overflow" ) === "hidden" ) {
   return false;
  }

  var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
   has = false;

  if ( el[ scroll ] > 0 ) {
   return true;
  }

  // TODO: determine which cases actually cause this to happen
  // if the element doesn't have the scroll set, see if it's possible to
  // set the scroll
  el[ scroll ] = 1;
  has = ( el[ scroll ] > 0 );
  el[ scroll ] = 0;
  return has;
 },

 _create: function() {

  var margins,
   o = this.options,
   that = this;
  this._addClass( "ui-resizable" );

  $.extend( this, {
   _aspectRatio: !!( o.aspectRatio ),
   aspectRatio: o.aspectRatio,
   originalElement: this.element,
   _proportionallyResizeElements: [],
   _helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
  } );

  // Wrap the element if it cannot hold child nodes
  if ( this.element[ 0 ].nodeName.match( /^(canvas|textarea|input|select|button|img)$/i ) ) {

   this.element.wrap(
    $( "<div class='ui-wrapper' style='overflow: hidden;'></div>" ).css( {
     position: this.element.css( "position" ),
     width: this.element.outerWidth(),
     height: this.element.outerHeight(),
     top: this.element.css( "top" ),
     left: this.element.css( "left" )
    } )
   );

   this.element = this.element.parent().data(
    "ui-resizable", this.element.resizable( "instance" )
   );

   this.elementIsWrapper = true;

   margins = {
    marginTop: this.originalElement.css( "marginTop" ),
    marginRight: this.originalElement.css( "marginRight" ),
    marginBottom: this.originalElement.css( "marginBottom" ),
    marginLeft: this.originalElement.css( "marginLeft" )
   };

   this.element.css( margins );
   this.originalElement.css( "margin", 0 );

   // support: Safari
   // Prevent Safari textarea resize
   this.originalResizeStyle = this.originalElement.css( "resize" );
   this.originalElement.css( "resize", "none" );

   this._proportionallyResizeElements.push( this.originalElement.css( {
    position: "static",
    zoom: 1,
    display: "block"
   } ) );

   // Support: IE9
   // avoid IE jump (hard set the margin)
   this.originalElement.css( margins );

   this._proportionallyResize();
  }

  this._setupHandles();

  if ( o.autoHide ) {
   $( this.element )
    .on( "mouseenter", function() {
     if ( o.disabled ) {
      return;
     }
     that._removeClass( "ui-resizable-autohide" );
     that._handles.show();
    } )
    .on( "mouseleave", function() {
     if ( o.disabled ) {
      return;
     }
     if ( !that.resizing ) {
      that._addClass( "ui-resizable-autohide" );
      that._handles.hide();
     }
    } );
  }

  this._mouseInit();
 },

 _destroy: function() {

  this._mouseDestroy();

  var wrapper,
   _destroy = function( exp ) {
    $( exp )
     .removeData( "resizable" )
     .removeData( "ui-resizable" )
     .off( ".resizable" )
     .find( ".ui-resizable-handle" )
      .remove();
   };

  // TODO: Unwrap at same DOM position
  if ( this.elementIsWrapper ) {
   _destroy( this.element );
   wrapper = this.element;
   this.originalElement.css( {
    position: wrapper.css( "position" ),
    width: wrapper.outerWidth(),
    height: wrapper.outerHeight(),
    top: wrapper.css( "top" ),
    left: wrapper.css( "left" )
   } ).insertAfter( wrapper );
   wrapper.remove();
  }

  this.originalElement.css( "resize", this.originalResizeStyle );
  _destroy( this.originalElement );

  return this;
 },

 _setOption: function( key, value ) {
  this._super( key, value );

  switch ( key ) {
  case "handles":
   this._removeHandles();
   this._setupHandles();
   break;
  default:
   break;
  }
 },

 _setupHandles: function() {
  var o = this.options, handle, i, n, hname, axis, that = this;
  this.handles = o.handles ||
   ( !$( ".ui-resizable-handle", this.element ).length ?
    "e,s,se" : {
     n: ".ui-resizable-n",
     e: ".ui-resizable-e",
     s: ".ui-resizable-s",
     w: ".ui-resizable-w",
     se: ".ui-resizable-se",
     sw: ".ui-resizable-sw",
     ne: ".ui-resizable-ne",
     nw: ".ui-resizable-nw"
    } );

  this._handles = $();
  if ( this.handles.constructor === String ) {

   if ( this.handles === "all" ) {
    this.handles = "n,e,s,w,se,sw,ne,nw";
   }

   n = this.handles.split( "," );
   this.handles = {};

   for ( i = 0; i < n.length; i++ ) {

    handle = $.trim( n[ i ] );
    hname = "ui-resizable-" + handle;
    axis = $( "<div>" );
    this._addClass( axis, "ui-resizable-handle " + hname );

    axis.css( { zIndex: o.zIndex } );

    this.handles[ handle ] = ".ui-resizable-" + handle;
    this.element.append( axis );
   }

  }

  this._renderAxis = function( target ) {

   var i, axis, padPos, padWrapper;

   target = target || this.element;

   for ( i in this.handles ) {

    if ( this.handles[ i ].constructor === String ) {
     this.handles[ i ] = this.element.children( this.handles[ i ] ).first().show();
    } else if ( this.handles[ i ].jquery || this.handles[ i ].nodeType ) {
     this.handles[ i ] = $( this.handles[ i ] );
     this._on( this.handles[ i ], { "mousedown": that._mouseDown } );
    }

    if ( this.elementIsWrapper &&
      this.originalElement[ 0 ]
       .nodeName
       .match( /^(textarea|input|select|button)$/i ) ) {
     axis = $( this.handles[ i ], this.element );

     padWrapper = /sw|ne|nw|se|n|s/.test( i ) ?
      axis.outerHeight() :
      axis.outerWidth();

     padPos = [ "padding",
      /ne|nw|n/.test( i ) ? "Top" :
      /se|sw|s/.test( i ) ? "Bottom" :
      /^e$/.test( i ) ? "Right" : "Left" ].join( "" );

     target.css( padPos, padWrapper );

     this._proportionallyResize();
    }

    this._handles = this._handles.add( this.handles[ i ] );
   }
  };

  // TODO: make renderAxis a prototype function
  this._renderAxis( this.element );

  this._handles = this._handles.add( this.element.find( ".ui-resizable-handle" ) );
  this._handles.disableSelection();

  this._handles.on( "mouseover", function() {
   if ( !that.resizing ) {
    if ( this.className ) {
     axis = this.className.match( /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i );
    }
    that.axis = axis && axis[ 1 ] ? axis[ 1 ] : "se";
   }
  } );

  if ( o.autoHide ) {
   this._handles.hide();
   this._addClass( "ui-resizable-autohide" );
  }
 },

 _removeHandles: function() {
  this._handles.remove();
 },

 _mouseCapture: function( event ) {
  var i, handle,
   capture = false;

  for ( i in this.handles ) {
   handle = $( this.handles[ i ] )[ 0 ];
   if ( handle === event.target || $.contains( handle, event.target ) ) {
    capture = true;
   }
  }

  return !this.options.disabled && capture;
 },

 _mouseStart: function( event ) {

  var curleft, curtop, cursor,
   o = this.options,
   el = this.element;

  this.resizing = true;

  this._renderProxy();

  curleft = this._num( this.helper.css( "left" ) );
  curtop = this._num( this.helper.css( "top" ) );

  if ( o.containment ) {
   curleft += $( o.containment ).scrollLeft() || 0;
   curtop += $( o.containment ).scrollTop() || 0;
  }

  this.offset = this.helper.offset();
  this.position = { left: curleft, top: curtop };

  this.size = this._helper ? {
    width: this.helper.width(),
    height: this.helper.height()
   } : {
    width: el.width(),
    height: el.height()
   };

  this.originalSize = this._helper ? {
    width: el.outerWidth(),
    height: el.outerHeight()
   } : {
    width: el.width(),
    height: el.height()
   };

  this.sizeDiff = {
   width: el.outerWidth() - el.width(),
   height: el.outerHeight() - el.height()
  };

  this.originalPosition = { left: curleft, top: curtop };
  this.originalMousePosition = { left: event.pageX, top: event.pageY };

  this.aspectRatio = ( typeof o.aspectRatio === "number" ) ?
   o.aspectRatio :
   ( ( this.originalSize.width / this.originalSize.height ) || 1 );

  cursor = $( ".ui-resizable-" + this.axis ).css( "cursor" );
  $( "body" ).css( "cursor", cursor === "auto" ? this.axis + "-resize" : cursor );

  this._addClass( "ui-resizable-resizing" );
  this._propagate( "start", event );
  return true;
 },

 _mouseDrag: function( event ) {

  var data, props,
   smp = this.originalMousePosition,
   a = this.axis,
   dx = ( event.pageX - smp.left ) || 0,
   dy = ( event.pageY - smp.top ) || 0,
   trigger = this._change[ a ];

  this._updatePrevProperties();

  if ( !trigger ) {
   return false;
  }

  data = trigger.apply( this, [ event, dx, dy ] );

  this._updateVirtualBoundaries( event.shiftKey );
  if ( this._aspectRatio || event.shiftKey ) {
   data = this._updateRatio( data, event );
  }

  data = this._respectSize( data, event );

  this._updateCache( data );

  this._propagate( "resize", event );

  props = this._applyChanges();

  if ( !this._helper && this._proportionallyResizeElements.length ) {
   this._proportionallyResize();
  }

  if ( !$.isEmptyObject( props ) ) {
   this._updatePrevProperties();
   this._trigger( "resize", event, this.ui() );
   this._applyChanges();
  }

  return false;
 },

 _mouseStop: function( event ) {

  this.resizing = false;
  var pr, ista, soffseth, soffsetw, s, left, top,
   o = this.options, that = this;

  if ( this._helper ) {

   pr = this._proportionallyResizeElements;
   ista = pr.length && ( /textarea/i ).test( pr[ 0 ].nodeName );
   soffseth = ista && this._hasScroll( pr[ 0 ], "left" ) ? 0 : that.sizeDiff.height;
   soffsetw = ista ? 0 : that.sizeDiff.width;

   s = {
    width: ( that.helper.width()  - soffsetw ),
    height: ( that.helper.height() - soffseth )
   };
   left = ( parseFloat( that.element.css( "left" ) ) +
    ( that.position.left - that.originalPosition.left ) ) || null;
   top = ( parseFloat( that.element.css( "top" ) ) +
    ( that.position.top - that.originalPosition.top ) ) || null;

   if ( !o.animate ) {
    this.element.css( $.extend( s, { top: top, left: left } ) );
   }

   that.helper.height( that.size.height );
   that.helper.width( that.size.width );

   if ( this._helper && !o.animate ) {
    this._proportionallyResize();
   }
  }

  $( "body" ).css( "cursor", "auto" );

  this._removeClass( "ui-resizable-resizing" );

  this._propagate( "stop", event );

  if ( this._helper ) {
   this.helper.remove();
  }

  return false;

 },

 _updatePrevProperties: function() {
  this.prevPosition = {
   top: this.position.top,
   left: this.position.left
  };
  this.prevSize = {
   width: this.size.width,
   height: this.size.height
  };
 },

 _applyChanges: function() {
  var props = {};

  if ( this.position.top !== this.prevPosition.top ) {
   props.top = this.position.top + "px";
  }
  if ( this.position.left !== this.prevPosition.left ) {
   props.left = this.position.left + "px";
  }
  if ( this.size.width !== this.prevSize.width ) {
   props.width = this.size.width + "px";
  }
  if ( this.size.height !== this.prevSize.height ) {
   props.height = this.size.height + "px";
  }

  this.helper.css( props );

  return props;
 },

 _updateVirtualBoundaries: function( forceAspectRatio ) {
  var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b,
   o = this.options;

  b = {
   minWidth: this._isNumber( o.minWidth ) ? o.minWidth : 0,
   maxWidth: this._isNumber( o.maxWidth ) ? o.maxWidth : Infinity,
   minHeight: this._isNumber( o.minHeight ) ? o.minHeight : 0,
   maxHeight: this._isNumber( o.maxHeight ) ? o.maxHeight : Infinity
  };

  if ( this._aspectRatio || forceAspectRatio ) {
   pMinWidth = b.minHeight * this.aspectRatio;
   pMinHeight = b.minWidth / this.aspectRatio;
   pMaxWidth = b.maxHeight * this.aspectRatio;
   pMaxHeight = b.maxWidth / this.aspectRatio;

   if ( pMinWidth > b.minWidth ) {
    b.minWidth = pMinWidth;
   }
   if ( pMinHeight > b.minHeight ) {
    b.minHeight = pMinHeight;
   }
   if ( pMaxWidth < b.maxWidth ) {
    b.maxWidth = pMaxWidth;
   }
   if ( pMaxHeight < b.maxHeight ) {
    b.maxHeight = pMaxHeight;
   }
  }
  this._vBoundaries = b;
 },

 _updateCache: function( data ) {
  this.offset = this.helper.offset();
  if ( this._isNumber( data.left ) ) {
   this.position.left = data.left;
  }
  if ( this._isNumber( data.top ) ) {
   this.position.top = data.top;
  }
  if ( this._isNumber( data.height ) ) {
   this.size.height = data.height;
  }
  if ( this._isNumber( data.width ) ) {
   this.size.width = data.width;
  }
 },

 _updateRatio: function( data ) {

  var cpos = this.position,
   csize = this.size,
   a = this.axis;

  if ( this._isNumber( data.height ) ) {
   data.width = ( data.height * this.aspectRatio );
  } else if ( this._isNumber( data.width ) ) {
   data.height = ( data.width / this.aspectRatio );
  }

  if ( a === "sw" ) {
   data.left = cpos.left + ( csize.width - data.width );
   data.top = null;
  }
  if ( a === "nw" ) {
   data.top = cpos.top + ( csize.height - data.height );
   data.left = cpos.left + ( csize.width - data.width );
  }

  return data;
 },

 _respectSize: function( data ) {

  var o = this._vBoundaries,
   a = this.axis,
   ismaxw = this._isNumber( data.width ) && o.maxWidth && ( o.maxWidth < data.width ),
   ismaxh = this._isNumber( data.height ) && o.maxHeight && ( o.maxHeight < data.height ),
   isminw = this._isNumber( data.width ) && o.minWidth && ( o.minWidth > data.width ),
   isminh = this._isNumber( data.height ) && o.minHeight && ( o.minHeight > data.height ),
   dw = this.originalPosition.left + this.originalSize.width,
   dh = this.originalPosition.top + this.originalSize.height,
   cw = /sw|nw|w/.test( a ), ch = /nw|ne|n/.test( a );
  if ( isminw ) {
   data.width = o.minWidth;
  }
  if ( isminh ) {
   data.height = o.minHeight;
  }
  if ( ismaxw ) {
   data.width = o.maxWidth;
  }
  if ( ismaxh ) {
   data.height = o.maxHeight;
  }

  if ( isminw && cw ) {
   data.left = dw - o.minWidth;
  }
  if ( ismaxw && cw ) {
   data.left = dw - o.maxWidth;
  }
  if ( isminh && ch ) {
   data.top = dh - o.minHeight;
  }
  if ( ismaxh && ch ) {
   data.top = dh - o.maxHeight;
  }

  // Fixing jump error on top/left - bug #2330
  if ( !data.width && !data.height && !data.left && data.top ) {
   data.top = null;
  } else if ( !data.width && !data.height && !data.top && data.left ) {
   data.left = null;
  }

  return data;
 },

 _getPaddingPlusBorderDimensions: function( element ) {
  var i = 0,
   widths = [],
   borders = [
    element.css( "borderTopWidth" ),
    element.css( "borderRightWidth" ),
    element.css( "borderBottomWidth" ),
    element.css( "borderLeftWidth" )
   ],
   paddings = [
    element.css( "paddingTop" ),
    element.css( "paddingRight" ),
    element.css( "paddingBottom" ),
    element.css( "paddingLeft" )
   ];

  for ( ; i < 4; i++ ) {
   widths[ i ] = ( parseFloat( borders[ i ] ) || 0 );
   widths[ i ] += ( parseFloat( paddings[ i ] ) || 0 );
  }

  return {
   height: widths[ 0 ] + widths[ 2 ],
   width: widths[ 1 ] + widths[ 3 ]
  };
 },

 _proportionallyResize: function() {

  if ( !this._proportionallyResizeElements.length ) {
   return;
  }

  var prel,
   i = 0,
   element = this.helper || this.element;

  for ( ; i < this._proportionallyResizeElements.length; i++ ) {

   prel = this._proportionallyResizeElements[ i ];

   // TODO: Seems like a bug to cache this.outerDimensions
   // considering that we are in a loop.
   if ( !this.outerDimensions ) {
    this.outerDimensions = this._getPaddingPlusBorderDimensions( prel );
   }

   prel.css( {
    height: ( element.height() - this.outerDimensions.height ) || 0,
    width: ( element.width() - this.outerDimensions.width ) || 0
   } );

  }

 },

 _renderProxy: function() {

  var el = this.element, o = this.options;
  this.elementOffset = el.offset();

  if ( this._helper ) {

   this.helper = this.helper || $( "<div style='overflow:hidden;'></div>" );

   this._addClass( this.helper, this._helper );
   this.helper.css( {
    width: this.element.outerWidth(),
    height: this.element.outerHeight(),
    position: "absolute",
    left: this.elementOffset.left + "px",
    top: this.elementOffset.top + "px",
    zIndex: ++o.zIndex //TODO: Don't modify option
   } );

   this.helper
    .appendTo( "body" )
    .disableSelection();

  } else {
   this.helper = this.element;
  }

 },

 _change: {
  e: function( event, dx ) {
   return { width: this.originalSize.width + dx };
  },
  w: function( event, dx ) {
   var cs = this.originalSize, sp = this.originalPosition;
   return { left: sp.left + dx, width: cs.width - dx };
  },
  n: function( event, dx, dy ) {
   var cs = this.originalSize, sp = this.originalPosition;
   return { top: sp.top + dy, height: cs.height - dy };
  },
  s: function( event, dx, dy ) {
   return { height: this.originalSize.height + dy };
  },
  se: function( event, dx, dy ) {
   return $.extend( this._change.s.apply( this, arguments ),
    this._change.e.apply( this, [ event, dx, dy ] ) );
  },
  sw: function( event, dx, dy ) {
   return $.extend( this._change.s.apply( this, arguments ),
    this._change.w.apply( this, [ event, dx, dy ] ) );
  },
  ne: function( event, dx, dy ) {
   return $.extend( this._change.n.apply( this, arguments ),
    this._change.e.apply( this, [ event, dx, dy ] ) );
  },
  nw: function( event, dx, dy ) {
   return $.extend( this._change.n.apply( this, arguments ),
    this._change.w.apply( this, [ event, dx, dy ] ) );
  }
 },

 _propagate: function( n, event ) {
  $.ui.plugin.call( this, n, [ event, this.ui() ] );
  ( n !== "resize" && this._trigger( n, event, this.ui() ) );
 },

 plugins: {},

 ui: function() {
  return {
   originalElement: this.originalElement,
   element: this.element,
   helper: this.helper,
   position: this.position,
   size: this.size,
   originalSize: this.originalSize,
   originalPosition: this.originalPosition
  };
 }

} );

/*
 * Resizable Extensions
 */

$.ui.plugin.add( "resizable", "animate", {

 stop: function( event ) {
  var that = $( this ).resizable( "instance" ),
   o = that.options,
   pr = that._proportionallyResizeElements,
   ista = pr.length && ( /textarea/i ).test( pr[ 0 ].nodeName ),
   soffseth = ista && that._hasScroll( pr[ 0 ], "left" ) ? 0 : that.sizeDiff.height,
   soffsetw = ista ? 0 : that.sizeDiff.width,
   style = {
    width: ( that.size.width - soffsetw ),
    height: ( that.size.height - soffseth )
   },
   left = ( parseFloat( that.element.css( "left" ) ) +
    ( that.position.left - that.originalPosition.left ) ) || null,
   top = ( parseFloat( that.element.css( "top" ) ) +
    ( that.position.top - that.originalPosition.top ) ) || null;

  that.element.animate(
   $.extend( style, top && left ? { top: top, left: left } : {} ), {
    duration: o.animateDuration,
    easing: o.animateEasing,
    step: function() {

     var data = {
      width: parseFloat( that.element.css( "width" ) ),
      height: parseFloat( that.element.css( "height" ) ),
      top: parseFloat( that.element.css( "top" ) ),
      left: parseFloat( that.element.css( "left" ) )
     };

     if ( pr && pr.length ) {
      $( pr[ 0 ] ).css( { width: data.width, height: data.height } );
     }

     // Propagating resize, and updating values for each animation step
     that._updateCache( data );
     that._propagate( "resize", event );

    }
   }
  );
 }

} );

$.ui.plugin.add( "resizable", "containment", {

 start: function() {
  var element, p, co, ch, cw, width, height,
   that = $( this ).resizable( "instance" ),
   o = that.options,
   el = that.element,
   oc = o.containment,
   ce = ( oc instanceof $ ) ?
    oc.get( 0 ) :
    ( /parent/.test( oc ) ) ? el.parent().get( 0 ) : oc;

  if ( !ce ) {
   return;
  }

  that.containerElement = $( ce );

  if ( /document/.test( oc ) || oc === document ) {
   that.containerOffset = {
    left: 0,
    top: 0
   };
   that.containerPosition = {
    left: 0,
    top: 0
   };

   that.parentData = {
    element: $( document ),
    left: 0,
    top: 0,
    width: $( document ).width(),
    height: $( document ).height() || document.body.parentNode.scrollHeight
   };
  } else {
   element = $( ce );
   p = [];
   $( [ "Top", "Right", "Left", "Bottom" ] ).each( function( i, name ) {
    p[ i ] = that._num( element.css( "padding" + name ) );
   } );

   that.containerOffset = element.offset();
   that.containerPosition = element.position();
   that.containerSize = {
    height: ( element.innerHeight() - p[ 3 ] ),
    width: ( element.innerWidth() - p[ 1 ] )
   };

   co = that.containerOffset;
   ch = that.containerSize.height;
   cw = that.containerSize.width;
   width = ( that._hasScroll ( ce, "left" ) ? ce.scrollWidth : cw );
   height = ( that._hasScroll ( ce ) ? ce.scrollHeight : ch ) ;

   that.parentData = {
    element: ce,
    left: co.left,
    top: co.top,
    width: width,
    height: height
   };
  }
 },

 resize: function( event ) {
  var woset, hoset, isParent, isOffsetRelative,
   that = $( this ).resizable( "instance" ),
   o = that.options,
   co = that.containerOffset,
   cp = that.position,
   pRatio = that._aspectRatio || event.shiftKey,
   cop = {
    top: 0,
    left: 0
   },
   ce = that.containerElement,
   continueResize = true;

  if ( ce[ 0 ] !== document && ( /static/ ).test( ce.css( "position" ) ) ) {
   cop = co;
  }

  if ( cp.left < ( that._helper ? co.left : 0 ) ) {
   that.size.width = that.size.width +
    ( that._helper ?
     ( that.position.left - co.left ) :
     ( that.position.left - cop.left ) );

   if ( pRatio ) {
    that.size.height = that.size.width / that.aspectRatio;
    continueResize = false;
   }
   that.position.left = o.helper ? co.left : 0;
  }

  if ( cp.top < ( that._helper ? co.top : 0 ) ) {
   that.size.height = that.size.height +
    ( that._helper ?
     ( that.position.top - co.top ) :
     that.position.top );

   if ( pRatio ) {
    that.size.width = that.size.height * that.aspectRatio;
    continueResize = false;
   }
   that.position.top = that._helper ? co.top : 0;
  }

  isParent = that.containerElement.get( 0 ) === that.element.parent().get( 0 );
  isOffsetRelative = /relative|absolute/.test( that.containerElement.css( "position" ) );

  if ( isParent && isOffsetRelative ) {
   that.offset.left = that.parentData.left + that.position.left;
   that.offset.top = that.parentData.top + that.position.top;
  } else {
   that.offset.left = that.element.offset().left;
   that.offset.top = that.element.offset().top;
  }

  woset = Math.abs( that.sizeDiff.width +
   ( that._helper ?
    that.offset.left - cop.left :
    ( that.offset.left - co.left ) ) );

  hoset = Math.abs( that.sizeDiff.height +
   ( that._helper ?
    that.offset.top - cop.top :
    ( that.offset.top - co.top ) ) );

  if ( woset + that.size.width >= that.parentData.width ) {
   that.size.width = that.parentData.width - woset;
   if ( pRatio ) {
    that.size.height = that.size.width / that.aspectRatio;
    continueResize = false;
   }
  }

  if ( hoset + that.size.height >= that.parentData.height ) {
   that.size.height = that.parentData.height - hoset;
   if ( pRatio ) {
    that.size.width = that.size.height * that.aspectRatio;
    continueResize = false;
   }
  }

  if ( !continueResize ) {
   that.position.left = that.prevPosition.left;
   that.position.top = that.prevPosition.top;
   that.size.width = that.prevSize.width;
   that.size.height = that.prevSize.height;
  }
 },

 stop: function() {
  var that = $( this ).resizable( "instance" ),
   o = that.options,
   co = that.containerOffset,
   cop = that.containerPosition,
   ce = that.containerElement,
   helper = $( that.helper ),
   ho = helper.offset(),
   w = helper.outerWidth() - that.sizeDiff.width,
   h = helper.outerHeight() - that.sizeDiff.height;

  if ( that._helper && !o.animate && ( /relative/ ).test( ce.css( "position" ) ) ) {
   $( this ).css( {
    left: ho.left - cop.left - co.left,
    width: w,
    height: h
   } );
  }

  if ( that._helper && !o.animate && ( /static/ ).test( ce.css( "position" ) ) ) {
   $( this ).css( {
    left: ho.left - cop.left - co.left,
    width: w,
    height: h
   } );
  }
 }
} );

$.ui.plugin.add( "resizable", "alsoResize", {

 start: function() {
  var that = $( this ).resizable( "instance" ),
   o = that.options;

  $( o.alsoResize ).each( function() {
   var el = $( this );
   el.data( "ui-resizable-alsoresize", {
    width: parseFloat( el.width() ), height: parseFloat( el.height() ),
    left: parseFloat( el.css( "left" ) ), top: parseFloat( el.css( "top" ) )
   } );
  } );
 },

 resize: function( event, ui ) {
  var that = $( this ).resizable( "instance" ),
   o = that.options,
   os = that.originalSize,
   op = that.originalPosition,
   delta = {
    height: ( that.size.height - os.height ) || 0,
    width: ( that.size.width - os.width ) || 0,
    top: ( that.position.top - op.top ) || 0,
    left: ( that.position.left - op.left ) || 0
   };

   $( o.alsoResize ).each( function() {
    var el = $( this ), start = $( this ).data( "ui-resizable-alsoresize" ), style = {},
     css = el.parents( ui.originalElement[ 0 ] ).length ?
       [ "width", "height" ] :
       [ "width", "height", "top", "left" ];

    $.each( css, function( i, prop ) {
     var sum = ( start[ prop ] || 0 ) + ( delta[ prop ] || 0 );
     if ( sum && sum >= 0 ) {
      style[ prop ] = sum || null;
     }
    } );

    el.css( style );
   } );
 },

 stop: function() {
  $( this ).removeData( "ui-resizable-alsoresize" );
 }
} );

$.ui.plugin.add( "resizable", "ghost", {

 start: function() {

  var that = $( this ).resizable( "instance" ), cs = that.size;

  that.ghost = that.originalElement.clone();
  that.ghost.css( {
   opacity: 0.25,
   display: "block",
   position: "relative",
   height: cs.height,
   width: cs.width,
   margin: 0,
   left: 0,
   top: 0
  } );

  that._addClass( that.ghost, "ui-resizable-ghost" );

  // DEPRECATED
  // TODO: remove after 1.12
  if ( $.uiBackCompat !== false && typeof that.options.ghost === "string" ) {

   // Ghost option
   that.ghost.addClass( this.options.ghost );
  }

  that.ghost.appendTo( that.helper );

 },

 resize: function() {
  var that = $( this ).resizable( "instance" );
  if ( that.ghost ) {
   that.ghost.css( {
    position: "relative",
    height: that.size.height,
    width: that.size.width
   } );
  }
 },

 stop: function() {
  var that = $( this ).resizable( "instance" );
  if ( that.ghost && that.helper ) {
   that.helper.get( 0 ).removeChild( that.ghost.get( 0 ) );
  }
 }

} );

$.ui.plugin.add( "resizable", "grid", {

 resize: function() {
  var outerDimensions,
   that = $( this ).resizable( "instance" ),
   o = that.options,
   cs = that.size,
   os = that.originalSize,
   op = that.originalPosition,
   a = that.axis,
   grid = typeof o.grid === "number" ? [ o.grid, o.grid ] : o.grid,
   gridX = ( grid[ 0 ] || 1 ),
   gridY = ( grid[ 1 ] || 1 ),
   ox = Math.round( ( cs.width - os.width ) / gridX ) * gridX,
   oy = Math.round( ( cs.height - os.height ) / gridY ) * gridY,
   newWidth = os.width + ox,
   newHeight = os.height + oy,
   isMaxWidth = o.maxWidth && ( o.maxWidth < newWidth ),
   isMaxHeight = o.maxHeight && ( o.maxHeight < newHeight ),
   isMinWidth = o.minWidth && ( o.minWidth > newWidth ),
   isMinHeight = o.minHeight && ( o.minHeight > newHeight );

  o.grid = grid;

  if ( isMinWidth ) {
   newWidth += gridX;
  }
  if ( isMinHeight ) {
   newHeight += gridY;
  }
  if ( isMaxWidth ) {
   newWidth -= gridX;
  }
  if ( isMaxHeight ) {
   newHeight -= gridY;
  }

  if ( /^(se|s|e)$/.test( a ) ) {
   that.size.width = newWidth;
   that.size.height = newHeight;
  } else if ( /^(ne)$/.test( a ) ) {
   that.size.width = newWidth;
   that.size.height = newHeight;
   that.position.top = op.top - oy;
  } else if ( /^(sw)$/.test( a ) ) {
   that.size.width = newWidth;
   that.size.height = newHeight;
   that.position.left = op.left - ox;
  } else {
   if ( newHeight - gridY <= 0 || newWidth - gridX <= 0 ) {
    outerDimensions = that._getPaddingPlusBorderDimensions( this );
   }

   if ( newHeight - gridY > 0 ) {
    that.size.height = newHeight;
    that.position.top = op.top - oy;
   } else {
    newHeight = gridY - outerDimensions.height;
    that.size.height = newHeight;
    that.position.top = op.top + os.height - newHeight;
   }
   if ( newWidth - gridX > 0 ) {
    that.size.width = newWidth;
    that.position.left = op.left - ox;
   } else {
    newWidth = gridX - outerDimensions.width;
    that.size.width = newWidth;
    that.position.left = op.left + os.width - newWidth;
   }
  }
 }

} );

var widgetsResizable = $.ui.resizable;


/*!
 * jQuery UI Dialog 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Dialog
//>>group: Widgets
//>>description: Displays customizable dialog windows.
//>>docs: http://api.jqueryui.com/dialog/
//>>demos: http://jqueryui.com/dialog/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/dialog.css
//>>css.theme: ../../themes/base/theme.css



$.widget( "ui.dialog", {
 version: "1.12.1",
 options: {
  appendTo: "body",
  autoOpen: true,
  buttons: [],
  classes: {
   "ui-dialog": "ui-corner-all",
   "ui-dialog-titlebar": "ui-corner-all"
  },
  closeOnEscape: true,
  closeText: "Close",
  draggable: true,
  hide: null,
  height: "auto",
  maxHeight: null,
  maxWidth: null,
  minHeight: 150,
  minWidth: 150,
  modal: false,
  position: {
   my: "center",
   at: "center",
   of: window,
   collision: "fit",

   // Ensure the titlebar is always visible
   using: function( pos ) {
    var topOffset = $( this ).css( pos ).offset().top;
    if ( topOffset < 0 ) {
     $( this ).css( "top", pos.top - topOffset );
    }
   }
  },
  resizable: true,
  show: null,
  title: null,
  width: 300,

  // Callbacks
  beforeClose: null,
  close: null,
  drag: null,
  dragStart: null,
  dragStop: null,
  focus: null,
  open: null,
  resize: null,
  resizeStart: null,
  resizeStop: null
 },

 sizeRelatedOptions: {
  buttons: true,
  height: true,
  maxHeight: true,
  maxWidth: true,
  minHeight: true,
  minWidth: true,
  width: true
 },

 resizableRelatedOptions: {
  maxHeight: true,
  maxWidth: true,
  minHeight: true,
  minWidth: true
 },

 _create: function() {
  this.originalCss = {
   display: this.element[ 0 ].style.display,
   width: this.element[ 0 ].style.width,
   minHeight: this.element[ 0 ].style.minHeight,
   maxHeight: this.element[ 0 ].style.maxHeight,
   height: this.element[ 0 ].style.height
  };
  this.originalPosition = {
   parent: this.element.parent(),
   index: this.element.parent().children().index( this.element )
  };
  this.originalTitle = this.element.attr( "title" );
  if ( this.options.title == null && this.originalTitle != null ) {
   this.options.title = this.originalTitle;
  }

  // Dialogs can't be disabled
  if ( this.options.disabled ) {
   this.options.disabled = false;
  }

  this._createWrapper();

  this.element
   .show()
   .removeAttr( "title" )
   .appendTo( this.uiDialog );

  this._addClass( "ui-dialog-content", "ui-widget-content" );

  this._createTitlebar();
  this._createButtonPane();

  if ( this.options.draggable && $.fn.draggable ) {
   this._makeDraggable();
  }
  if ( this.options.resizable && $.fn.resizable ) {
   this._makeResizable();
  }

  this._isOpen = false;

  this._trackFocus();
 },

 _init: function() {
  if ( this.options.autoOpen ) {
   this.open();
  }
 },

 _appendTo: function() {
  var element = this.options.appendTo;
  if ( element && ( element.jquery || element.nodeType ) ) {
   return $( element );
  }
  return this.document.find( element || "body" ).eq( 0 );
 },

 _destroy: function() {
  var next,
   originalPosition = this.originalPosition;

  this._untrackInstance();
  this._destroyOverlay();

  this.element
   .removeUniqueId()
   .css( this.originalCss )

   // Without detaching first, the following becomes really slow
   .detach();

  this.uiDialog.remove();

  if ( this.originalTitle ) {
   this.element.attr( "title", this.originalTitle );
  }

  next = originalPosition.parent.children().eq( originalPosition.index );

  // Don't try to place the dialog next to itself (#8613)
  if ( next.length && next[ 0 ] !== this.element[ 0 ] ) {
   next.before( this.element );
  } else {
   originalPosition.parent.append( this.element );
  }
 },

 widget: function() {
  return this.uiDialog;
 },

 disable: $.noop,
 enable: $.noop,

 close: function( event ) {
  var that = this;

  if ( !this._isOpen || this._trigger( "beforeClose", event ) === false ) {
   return;
  }

  this._isOpen = false;
  this._focusedElement = null;
  this._destroyOverlay();
  this._untrackInstance();

  if ( !this.opener.filter( ":focusable" ).trigger( "focus" ).length ) {

   // Hiding a focused element doesn't trigger blur in WebKit
   // so in case we have nothing to focus on, explicitly blur the active element
   // https://bugs.webkit.org/show_bug.cgi?id=47182
   $.ui.safeBlur( $.ui.safeActiveElement( this.document[ 0 ] ) );
  }

  this._hide( this.uiDialog, this.options.hide, function() {
   that._trigger( "close", event );
  } );
 },

 isOpen: function() {
  return this._isOpen;
 },

 moveToTop: function() {
  this._moveToTop();
 },

 _moveToTop: function( event, silent ) {
  var moved = false,
   zIndices = this.uiDialog.siblings( ".ui-front:visible" ).map( function() {
    return +$( this ).css( "z-index" );
   } ).get(),
   zIndexMax = Math.max.apply( null, zIndices );

  if ( zIndexMax >= +this.uiDialog.css( "z-index" ) ) {
   this.uiDialog.css( "z-index", zIndexMax + 1 );
   moved = true;
  }

  if ( moved && !silent ) {
   this._trigger( "focus", event );
  }
  return moved;
 },

 open: function() {
  var that = this;
  if ( this._isOpen ) {
   if ( this._moveToTop() ) {
    this._focusTabbable();
   }
   return;
  }

  this._isOpen = true;
  this.opener = $( $.ui.safeActiveElement( this.document[ 0 ] ) );

  this._size();
  this._position();
  this._createOverlay();
  this._moveToTop( null, true );

  // Ensure the overlay is moved to the top with the dialog, but only when
  // opening. The overlay shouldn't move after the dialog is open so that
  // modeless dialogs opened after the modal dialog stack properly.
  if ( this.overlay ) {
   this.overlay.css( "z-index", this.uiDialog.css( "z-index" ) - 1 );
  }

  this._show( this.uiDialog, this.options.show, function() {
   that._focusTabbable();
   that._trigger( "focus" );
  } );

  // Track the dialog immediately upon openening in case a focus event
  // somehow occurs outside of the dialog before an element inside the
  // dialog is focused (#10152)
  this._makeFocusTarget();

  this._trigger( "open" );
 },

 _focusTabbable: function() {

  // Set focus to the first match:
  // 1. An element that was focused previously
  // 2. First element inside the dialog matching [autofocus]
  // 3. Tabbable element inside the content element
  // 4. Tabbable element inside the buttonpane
  // 5. The close button
  // 6. The dialog itself
  var hasFocus = this._focusedElement;
  if ( !hasFocus ) {
   hasFocus = this.element.find( "[autofocus]" );
  }
  if ( !hasFocus.length ) {
   hasFocus = this.element.find( ":tabbable" );
  }
  if ( !hasFocus.length ) {
   hasFocus = this.uiDialogButtonPane.find( ":tabbable" );
  }
  if ( !hasFocus.length ) {
   hasFocus = this.uiDialogTitlebarClose.filter( ":tabbable" );
  }
  if ( !hasFocus.length ) {
   hasFocus = this.uiDialog;
  }
  hasFocus.eq( 0 ).trigger( "focus" );
 },

 _keepFocus: function( event ) {
  function checkFocus() {
   var activeElement = $.ui.safeActiveElement( this.document[ 0 ] ),
    isActive = this.uiDialog[ 0 ] === activeElement ||
     $.contains( this.uiDialog[ 0 ], activeElement );
   if ( !isActive ) {
    this._focusTabbable();
   }
  }
  event.preventDefault();
  checkFocus.call( this );

  // support: IE
  // IE <= 8 doesn't prevent moving focus even with event.preventDefault()
  // so we check again later
  this._delay( checkFocus );
 },

 _createWrapper: function() {
  this.uiDialog = $( "<div>" )
   .hide()
   .attr( {

    // Setting tabIndex makes the div focusable
    tabIndex: -1,
    role: "dialog"
   } )
   .appendTo( this._appendTo() );

  this._addClass( this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front" );
  this._on( this.uiDialog, {
   keydown: function( event ) {
    if ( this.options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode &&
      event.keyCode === $.ui.keyCode.ESCAPE ) {
     event.preventDefault();
     this.close( event );
     return;
    }

    // Prevent tabbing out of dialogs
    if ( event.keyCode !== $.ui.keyCode.TAB || event.isDefaultPrevented() ) {
     return;
    }
    var tabbables = this.uiDialog.find( ":tabbable" ),
     first = tabbables.filter( ":first" ),
     last = tabbables.filter( ":last" );

    if ( ( event.target === last[ 0 ] || event.target === this.uiDialog[ 0 ] ) &&
      !event.shiftKey ) {
     this._delay( function() {
      first.trigger( "focus" );
     } );
     event.preventDefault();
    } else if ( ( event.target === first[ 0 ] ||
      event.target === this.uiDialog[ 0 ] ) && event.shiftKey ) {
     this._delay( function() {
      last.trigger( "focus" );
     } );
     event.preventDefault();
    }
   },
   mousedown: function( event ) {
    if ( this._moveToTop( event ) ) {
     this._focusTabbable();
    }
   }
  } );

  // We assume that any existing aria-describedby attribute means
  // that the dialog content is marked up properly
  // otherwise we brute force the content as the description
  if ( !this.element.find( "[aria-describedby]" ).length ) {
   this.uiDialog.attr( {
    "aria-describedby": this.element.uniqueId().attr( "id" )
   } );
  }
 },

 _createTitlebar: function() {
  var uiDialogTitle;

  this.uiDialogTitlebar = $( "<div>" );
  this._addClass( this.uiDialogTitlebar,
   "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix" );
  this._on( this.uiDialogTitlebar, {
   mousedown: function( event ) {

    // Don't prevent click on close button (#8838)
    // Focusing a dialog that is partially scrolled out of view
    // causes the browser to scroll it into view, preventing the click event
    if ( !$( event.target ).closest( ".ui-dialog-titlebar-close" ) ) {

     // Dialog isn't getting focus when dragging (#8063)
     this.uiDialog.trigger( "focus" );
    }
   }
  } );

  // Support: IE
  // Use type="button" to prevent enter keypresses in textboxes from closing the
  // dialog in IE (#9312)
  this.uiDialogTitlebarClose = $( "<button type='button'></button>" )
   .button( {
    label: $( "<a>" ).text( this.options.closeText ).html(),
    icon: "ui-icon-closethick",
    showLabel: false
   } )
   .appendTo( this.uiDialogTitlebar );

  this._addClass( this.uiDialogTitlebarClose, "ui-dialog-titlebar-close" );
  this._on( this.uiDialogTitlebarClose, {
   click: function( event ) {
    event.preventDefault();
    this.close( event );
   }
  } );

  uiDialogTitle = $( "<span>" ).uniqueId().prependTo( this.uiDialogTitlebar );
  this._addClass( uiDialogTitle, "ui-dialog-title" );
  this._title( uiDialogTitle );

  this.uiDialogTitlebar.prependTo( this.uiDialog );

  this.uiDialog.attr( {
   "aria-labelledby": uiDialogTitle.attr( "id" )
  } );
 },

 _title: function( title ) {
  if ( this.options.title ) {
   title.text( this.options.title );
  } else {
   title.html( "&#160;" );
  }
 },

 _createButtonPane: function() {
  this.uiDialogButtonPane = $( "<div>" );
  this._addClass( this.uiDialogButtonPane, "ui-dialog-buttonpane",
   "ui-widget-content ui-helper-clearfix" );

  this.uiButtonSet = $( "<div>" )
   .appendTo( this.uiDialogButtonPane );
  this._addClass( this.uiButtonSet, "ui-dialog-buttonset" );

  this._createButtons();
 },

 _createButtons: function() {
  var that = this,
   buttons = this.options.buttons;

  // If we already have a button pane, remove it
  this.uiDialogButtonPane.remove();
  this.uiButtonSet.empty();

  if ( $.isEmptyObject( buttons ) || ( $.isArray( buttons ) && !buttons.length ) ) {
   this._removeClass( this.uiDialog, "ui-dialog-buttons" );
   return;
  }

  $.each( buttons, function( name, props ) {
   var click, buttonOptions;
   props = $.isFunction( props ) ?
    { click: props, text: name } :
    props;

   // Default to a non-submitting button
   props = $.extend( { type: "button" }, props );

   // Change the context for the click callback to be the main element
   click = props.click;
   buttonOptions = {
    icon: props.icon,
    iconPosition: props.iconPosition,
    showLabel: props.showLabel,

    // Deprecated options
    icons: props.icons,
    text: props.text
   };

   delete props.click;
   delete props.icon;
   delete props.iconPosition;
   delete props.showLabel;

   // Deprecated options
   delete props.icons;
   if ( typeof props.text === "boolean" ) {
    delete props.text;
   }

   $( "<button></button>", props )
    .button( buttonOptions )
    .appendTo( that.uiButtonSet )
    .on( "click", function() {
     click.apply( that.element[ 0 ], arguments );
    } );
  } );
  this._addClass( this.uiDialog, "ui-dialog-buttons" );
  this.uiDialogButtonPane.appendTo( this.uiDialog );
 },

 _makeDraggable: function() {
  var that = this,
   options = this.options;

  function filteredUi( ui ) {
   return {
    position: ui.position,
    offset: ui.offset
   };
  }

  this.uiDialog.draggable( {
   cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
   handle: ".ui-dialog-titlebar",
   containment: "document",
   start: function( event, ui ) {
    that._addClass( $( this ), "ui-dialog-dragging" );
    that._blockFrames();
    that._trigger( "dragStart", event, filteredUi( ui ) );
   },
   drag: function( event, ui ) {
    that._trigger( "drag", event, filteredUi( ui ) );
   },
   stop: function( event, ui ) {
    var left = ui.offset.left - that.document.scrollLeft(),
     top = ui.offset.top - that.document.scrollTop();

    options.position = {
     my: "left top",
     at: "left" + ( left >= 0 ? "+" : "" ) + left + " " +
      "top" + ( top >= 0 ? "+" : "" ) + top,
     of: that.window
    };
    that._removeClass( $( this ), "ui-dialog-dragging" );
    that._unblockFrames();
    that._trigger( "dragStop", event, filteredUi( ui ) );
   }
  } );
 },

 _makeResizable: function() {
  var that = this,
   options = this.options,
   handles = options.resizable,

   // .ui-resizable has position: relative defined in the stylesheet
   // but dialogs have to use absolute or fixed positioning
   position = this.uiDialog.css( "position" ),
   resizeHandles = typeof handles === "string" ?
    handles :
    "n,e,s,w,se,sw,ne,nw";

  function filteredUi( ui ) {
   return {
    originalPosition: ui.originalPosition,
    originalSize: ui.originalSize,
    position: ui.position,
    size: ui.size
   };
  }

  this.uiDialog.resizable( {
   cancel: ".ui-dialog-content",
   containment: "document",
   alsoResize: this.element,
   maxWidth: options.maxWidth,
   maxHeight: options.maxHeight,
   minWidth: options.minWidth,
   minHeight: this._minHeight(),
   handles: resizeHandles,
   start: function( event, ui ) {
    that._addClass( $( this ), "ui-dialog-resizing" );
    that._blockFrames();
    that._trigger( "resizeStart", event, filteredUi( ui ) );
   },
   resize: function( event, ui ) {
    that._trigger( "resize", event, filteredUi( ui ) );
   },
   stop: function( event, ui ) {
    var offset = that.uiDialog.offset(),
     left = offset.left - that.document.scrollLeft(),
     top = offset.top - that.document.scrollTop();

    options.height = that.uiDialog.height();
    options.width = that.uiDialog.width();
    options.position = {
     my: "left top",
     at: "left" + ( left >= 0 ? "+" : "" ) + left + " " +
      "top" + ( top >= 0 ? "+" : "" ) + top,
     of: that.window
    };
    that._removeClass( $( this ), "ui-dialog-resizing" );
    that._unblockFrames();
    that._trigger( "resizeStop", event, filteredUi( ui ) );
   }
  } )
   .css( "position", position );
 },

 _trackFocus: function() {
  this._on( this.widget(), {
   focusin: function( event ) {
    this._makeFocusTarget();
    this._focusedElement = $( event.target );
   }
  } );
 },

 _makeFocusTarget: function() {
  this._untrackInstance();
  this._trackingInstances().unshift( this );
 },

 _untrackInstance: function() {
  var instances = this._trackingInstances(),
   exists = $.inArray( this, instances );
  if ( exists !== -1 ) {
   instances.splice( exists, 1 );
  }
 },

 _trackingInstances: function() {
  var instances = this.document.data( "ui-dialog-instances" );
  if ( !instances ) {
   instances = [];
   this.document.data( "ui-dialog-instances", instances );
  }
  return instances;
 },

 _minHeight: function() {
  var options = this.options;

  return options.height === "auto" ?
   options.minHeight :
   Math.min( options.minHeight, options.height );
 },

 _position: function() {

  // Need to show the dialog to get the actual offset in the position plugin
  var isVisible = this.uiDialog.is( ":visible" );
  if ( !isVisible ) {
   this.uiDialog.show();
  }
  this.uiDialog.position( this.options.position );
  if ( !isVisible ) {
   this.uiDialog.hide();
  }
 },

 _setOptions: function( options ) {
  var that = this,
   resize = false,
   resizableOptions = {};

  $.each( options, function( key, value ) {
   that._setOption( key, value );

   if ( key in that.sizeRelatedOptions ) {
    resize = true;
   }
   if ( key in that.resizableRelatedOptions ) {
    resizableOptions[ key ] = value;
   }
  } );

  if ( resize ) {
   this._size();
   this._position();
  }
  if ( this.uiDialog.is( ":data(ui-resizable)" ) ) {
   this.uiDialog.resizable( "option", resizableOptions );
  }
 },

 _setOption: function( key, value ) {
  var isDraggable, isResizable,
   uiDialog = this.uiDialog;

  if ( key === "disabled" ) {
   return;
  }

  this._super( key, value );

  if ( key === "appendTo" ) {
   this.uiDialog.appendTo( this._appendTo() );
  }

  if ( key === "buttons" ) {
   this._createButtons();
  }

  if ( key === "closeText" ) {
   this.uiDialogTitlebarClose.button( {

    // Ensure that we always pass a string
    label: $( "<a>" ).text( "" + this.options.closeText ).html()
   } );
  }

  if ( key === "draggable" ) {
   isDraggable = uiDialog.is( ":data(ui-draggable)" );
   if ( isDraggable && !value ) {
    uiDialog.draggable( "destroy" );
   }

   if ( !isDraggable && value ) {
    this._makeDraggable();
   }
  }

  if ( key === "position" ) {
   this._position();
  }

  if ( key === "resizable" ) {

   // currently resizable, becoming non-resizable
   isResizable = uiDialog.is( ":data(ui-resizable)" );
   if ( isResizable && !value ) {
    uiDialog.resizable( "destroy" );
   }

   // Currently resizable, changing handles
   if ( isResizable && typeof value === "string" ) {
    uiDialog.resizable( "option", "handles", value );
   }

   // Currently non-resizable, becoming resizable
   if ( !isResizable && value !== false ) {
    this._makeResizable();
   }
  }

  if ( key === "title" ) {
   this._title( this.uiDialogTitlebar.find( ".ui-dialog-title" ) );
  }
 },

 _size: function() {

  // If the user has resized the dialog, the .ui-dialog and .ui-dialog-content
  // divs will both have width and height set, so we need to reset them
  var nonContentHeight, minContentHeight, maxContentHeight,
   options = this.options;

  // Reset content sizing
  this.element.show().css( {
   width: "auto",
   minHeight: 0,
   maxHeight: "none",
   height: 0
  } );

  if ( options.minWidth > options.width ) {
   options.width = options.minWidth;
  }

  // Reset wrapper sizing
  // determine the height of all the non-content elements
  nonContentHeight = this.uiDialog.css( {
   height: "auto",
   width: options.width
  } )
   .outerHeight();
  minContentHeight = Math.max( 0, options.minHeight - nonContentHeight );
  maxContentHeight = typeof options.maxHeight === "number" ?
   Math.max( 0, options.maxHeight - nonContentHeight ) :
   "none";

  if ( options.height === "auto" ) {
   this.element.css( {
    minHeight: minContentHeight,
    maxHeight: maxContentHeight,
    height: "auto"
   } );
  } else {
   this.element.height( Math.max( 0, options.height - nonContentHeight ) );
  }

  if ( this.uiDialog.is( ":data(ui-resizable)" ) ) {
   this.uiDialog.resizable( "option", "minHeight", this._minHeight() );
  }
 },

 _blockFrames: function() {
  this.iframeBlocks = this.document.find( "iframe" ).map( function() {
   var iframe = $( this );

   return $( "<div>" )
    .css( {
     position: "absolute",
     width: iframe.outerWidth(),
     height: iframe.outerHeight()
    } )
    .appendTo( iframe.parent() )
    .offset( iframe.offset() )[ 0 ];
  } );
 },

 _unblockFrames: function() {
  if ( this.iframeBlocks ) {
   this.iframeBlocks.remove();
   delete this.iframeBlocks;
  }
 },

 _allowInteraction: function( event ) {
  if ( $( event.target ).closest( ".ui-dialog" ).length ) {
   return true;
  }

  // TODO: Remove hack when datepicker implements
  // the .ui-front logic (#8989)
  return !!$( event.target ).closest( ".ui-datepicker" ).length;
 },

 _createOverlay: function() {
  if ( !this.options.modal ) {
   return;
  }

  // We use a delay in case the overlay is created from an
  // event that we're going to be cancelling (#2804)
  var isOpening = true;
  this._delay( function() {
   isOpening = false;
  } );

  if ( !this.document.data( "ui-dialog-overlays" ) ) {

   // Prevent use of anchors and inputs
   // Using _on() for an event handler shared across many instances is
   // safe because the dialogs stack and must be closed in reverse order
   this._on( this.document, {
    focusin: function( event ) {
     if ( isOpening ) {
      return;
     }

     if ( !this._allowInteraction( event ) ) {
      event.preventDefault();
      this._trackingInstances()[ 0 ]._focusTabbable();
     }
    }
   } );
  }

  this.overlay = $( "<div>" )
   .appendTo( this._appendTo() );

  this._addClass( this.overlay, null, "ui-widget-overlay ui-front" );
  this._on( this.overlay, {
   mousedown: "_keepFocus"
  } );
  this.document.data( "ui-dialog-overlays",
   ( this.document.data( "ui-dialog-overlays" ) || 0 ) + 1 );
 },

 _destroyOverlay: function() {
  if ( !this.options.modal ) {
   return;
  }

  if ( this.overlay ) {
   var overlays = this.document.data( "ui-dialog-overlays" ) - 1;

   if ( !overlays ) {
    this._off( this.document, "focusin" );
    this.document.removeData( "ui-dialog-overlays" );
   } else {
    this.document.data( "ui-dialog-overlays", overlays );
   }

   this.overlay.remove();
   this.overlay = null;
  }
 }
} );

// DEPRECATED
// TODO: switch return back to widget declaration at top of file when this is removed
if ( $.uiBackCompat !== false ) {

 // Backcompat for dialogClass option
 $.widget( "ui.dialog", $.ui.dialog, {
  options: {
   dialogClass: ""
  },
  _createWrapper: function() {
   this._super();
   this.uiDialog.addClass( this.options.dialogClass );
  },
  _setOption: function( key, value ) {
   if ( key === "dialogClass" ) {
    this.uiDialog
     .removeClass( this.options.dialogClass )
     .addClass( value );
   }
   this._superApply( arguments );
  }
 } );
}

var widgetsDialog = $.ui.dialog;


/*!
 * jQuery UI Droppable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Droppable
//>>group: Interactions
//>>description: Enables drop targets for draggable elements.
//>>docs: http://api.jqueryui.com/droppable/
//>>demos: http://jqueryui.com/droppable/



$.widget( "ui.droppable", {
 version: "1.12.1",
 widgetEventPrefix: "drop",
 options: {
  accept: "*",
  addClasses: true,
  greedy: false,
  scope: "default",
  tolerance: "intersect",

  // Callbacks
  activate: null,
  deactivate: null,
  drop: null,
  out: null,
  over: null
 },
 _create: function() {

  var proportions,
   o = this.options,
   accept = o.accept;

  this.isover = false;
  this.isout = true;

  this.accept = $.isFunction( accept ) ? accept : function( d ) {
   return d.is( accept );
  };

  this.proportions = function( /* valueToWrite */ ) {
   if ( arguments.length ) {

    // Store the droppable's proportions
    proportions = arguments[ 0 ];
   } else {

    // Retrieve or derive the droppable's proportions
    return proportions ?
     proportions :
     proportions = {
      width: this.element[ 0 ].offsetWidth,
      height: this.element[ 0 ].offsetHeight
     };
   }
  };

  this._addToManager( o.scope );

  o.addClasses && this._addClass( "ui-droppable" );

 },

 _addToManager: function( scope ) {

  // Add the reference and positions to the manager
  $.ui.ddmanager.droppables[ scope ] = $.ui.ddmanager.droppables[ scope ] || [];
  $.ui.ddmanager.droppables[ scope ].push( this );
 },

 _splice: function( drop ) {
  var i = 0;
  for ( ; i < drop.length; i++ ) {
   if ( drop[ i ] === this ) {
    drop.splice( i, 1 );
   }
  }
 },

 _destroy: function() {
  var drop = $.ui.ddmanager.droppables[ this.options.scope ];

  this._splice( drop );
 },

 _setOption: function( key, value ) {

  if ( key === "accept" ) {
   this.accept = $.isFunction( value ) ? value : function( d ) {
    return d.is( value );
   };
  } else if ( key === "scope" ) {
   var drop = $.ui.ddmanager.droppables[ this.options.scope ];

   this._splice( drop );
   this._addToManager( value );
  }

  this._super( key, value );
 },

 _activate: function( event ) {
  var draggable = $.ui.ddmanager.current;

  this._addActiveClass();
  if ( draggable ) {
   this._trigger( "activate", event, this.ui( draggable ) );
  }
 },

 _deactivate: function( event ) {
  var draggable = $.ui.ddmanager.current;

  this._removeActiveClass();
  if ( draggable ) {
   this._trigger( "deactivate", event, this.ui( draggable ) );
  }
 },

 _over: function( event ) {

  var draggable = $.ui.ddmanager.current;

  // Bail if draggable and droppable are same element
  if ( !draggable || ( draggable.currentItem ||
    draggable.element )[ 0 ] === this.element[ 0 ] ) {
   return;
  }

  if ( this.accept.call( this.element[ 0 ], ( draggable.currentItem ||
    draggable.element ) ) ) {
   this._addHoverClass();
   this._trigger( "over", event, this.ui( draggable ) );
  }

 },

 _out: function( event ) {

  var draggable = $.ui.ddmanager.current;

  // Bail if draggable and droppable are same element
  if ( !draggable || ( draggable.currentItem ||
    draggable.element )[ 0 ] === this.element[ 0 ] ) {
   return;
  }

  if ( this.accept.call( this.element[ 0 ], ( draggable.currentItem ||
    draggable.element ) ) ) {
   this._removeHoverClass();
   this._trigger( "out", event, this.ui( draggable ) );
  }

 },

 _drop: function( event, custom ) {

  var draggable = custom || $.ui.ddmanager.current,
   childrenIntersection = false;

  // Bail if draggable and droppable are same element
  if ( !draggable || ( draggable.currentItem ||
    draggable.element )[ 0 ] === this.element[ 0 ] ) {
   return false;
  }

  this.element
   .find( ":data(ui-droppable)" )
   .not( ".ui-draggable-dragging" )
   .each( function() {
    var inst = $( this ).droppable( "instance" );
    if (
     inst.options.greedy &&
     !inst.options.disabled &&
     inst.options.scope === draggable.options.scope &&
     inst.accept.call(
      inst.element[ 0 ], ( draggable.currentItem || draggable.element )
     ) &&
     intersect(
      draggable,
      $.extend( inst, { offset: inst.element.offset() } ),
      inst.options.tolerance, event
     )
    ) {
     childrenIntersection = true;
     return false; }
   } );
  if ( childrenIntersection ) {
   return false;
  }

  if ( this.accept.call( this.element[ 0 ],
    ( draggable.currentItem || draggable.element ) ) ) {
   this._removeActiveClass();
   this._removeHoverClass();

   this._trigger( "drop", event, this.ui( draggable ) );
   return this.element;
  }

  return false;

 },

 ui: function( c ) {
  return {
   draggable: ( c.currentItem || c.element ),
   helper: c.helper,
   position: c.position,
   offset: c.positionAbs
  };
 },

 // Extension points just to make backcompat sane and avoid duplicating logic
 // TODO: Remove in 1.13 along with call to it below
 _addHoverClass: function() {
  this._addClass( "ui-droppable-hover" );
 },

 _removeHoverClass: function() {
  this._removeClass( "ui-droppable-hover" );
 },

 _addActiveClass: function() {
  this._addClass( "ui-droppable-active" );
 },

 _removeActiveClass: function() {
  this._removeClass( "ui-droppable-active" );
 }
} );

var intersect = $.ui.intersect = ( function() {
 function isOverAxis( x, reference, size ) {
  return ( x >= reference ) && ( x < ( reference + size ) );
 }

 return function( draggable, droppable, toleranceMode, event ) {

  if ( !droppable.offset ) {
   return false;
  }

  var x1 = ( draggable.positionAbs ||
    draggable.position.absolute ).left + draggable.margins.left,
   y1 = ( draggable.positionAbs ||
    draggable.position.absolute ).top + draggable.margins.top,
   x2 = x1 + draggable.helperProportions.width,
   y2 = y1 + draggable.helperProportions.height,
   l = droppable.offset.left,
   t = droppable.offset.top,
   r = l + droppable.proportions().width,
   b = t + droppable.proportions().height;

  switch ( toleranceMode ) {
  case "fit":
   return ( l <= x1 && x2 <= r && t <= y1 && y2 <= b );
  case "intersect":
   return ( l < x1 + ( draggable.helperProportions.width / 2 ) && // Right Half
    x2 - ( draggable.helperProportions.width / 2 ) < r && // Left Half
    t < y1 + ( draggable.helperProportions.height / 2 ) && // Bottom Half
    y2 - ( draggable.helperProportions.height / 2 ) < b ); // Top Half
  case "pointer":
   return isOverAxis( event.pageY, t, droppable.proportions().height ) &&
    isOverAxis( event.pageX, l, droppable.proportions().width );
  case "touch":
   return (
    ( y1 >= t && y1 <= b ) || // Top edge touching
    ( y2 >= t && y2 <= b ) || // Bottom edge touching
    ( y1 < t && y2 > b ) // Surrounded vertically
   ) && (
    ( x1 >= l && x1 <= r ) || // Left edge touching
    ( x2 >= l && x2 <= r ) || // Right edge touching
    ( x1 < l && x2 > r ) // Surrounded horizontally
   );
  default:
   return false;
  }
 };
} )();

/*
 This manager tracks offsets of draggables and droppables
*/
$.ui.ddmanager = {
 current: null,
 droppables: { "default": [] },
 prepareOffsets: function( t, event ) {

  var i, j,
   m = $.ui.ddmanager.droppables[ t.options.scope ] || [],
   type = event ? event.type : null, // workaround for #2317
   list = ( t.currentItem || t.element ).find( ":data(ui-droppable)" ).addBack();

  droppablesLoop: for ( i = 0; i < m.length; i++ ) {

   // No disabled and non-accepted
   if ( m[ i ].options.disabled || ( t && !m[ i ].accept.call( m[ i ].element[ 0 ],
     ( t.currentItem || t.element ) ) ) ) {
    continue;
   }

   // Filter out elements in the current dragged item
   for ( j = 0; j < list.length; j++ ) {
    if ( list[ j ] === m[ i ].element[ 0 ] ) {
     m[ i ].proportions().height = 0;
     continue droppablesLoop;
    }
   }

   m[ i ].visible = m[ i ].element.css( "display" ) !== "none";
   if ( !m[ i ].visible ) {
    continue;
   }

   // Activate the droppable if used directly from draggables
   if ( type === "mousedown" ) {
    m[ i ]._activate.call( m[ i ], event );
   }

   m[ i ].offset = m[ i ].element.offset();
   m[ i ].proportions( {
    width: m[ i ].element[ 0 ].offsetWidth,
    height: m[ i ].element[ 0 ].offsetHeight
   } );

  }

 },
 drop: function( draggable, event ) {

  var dropped = false;

  // Create a copy of the droppables in case the list changes during the drop (#9116)
  $.each( ( $.ui.ddmanager.droppables[ draggable.options.scope ] || [] ).slice(), function() {

   if ( !this.options ) {
    return;
   }
   if ( !this.options.disabled && this.visible &&
     intersect( draggable, this, this.options.tolerance, event ) ) {
    dropped = this._drop.call( this, event ) || dropped;
   }

   if ( !this.options.disabled && this.visible && this.accept.call( this.element[ 0 ],
     ( draggable.currentItem || draggable.element ) ) ) {
    this.isout = true;
    this.isover = false;
    this._deactivate.call( this, event );
   }

  } );
  return dropped;

 },
 dragStart: function( draggable, event ) {

  // Listen for scrolling so that if the dragging causes scrolling the position of the
  // droppables can be recalculated (see #5003)
  draggable.element.parentsUntil( "body" ).on( "scroll.droppable", function() {
   if ( !draggable.options.refreshPositions ) {
    $.ui.ddmanager.prepareOffsets( draggable, event );
   }
  } );
 },
 drag: function( draggable, event ) {

  // If you have a highly dynamic page, you might try this option. It renders positions
  // every time you move the mouse.
  if ( draggable.options.refreshPositions ) {
   $.ui.ddmanager.prepareOffsets( draggable, event );
  }

  // Run through all droppables and check their positions based on specific tolerance options
  $.each( $.ui.ddmanager.droppables[ draggable.options.scope ] || [], function() {

   if ( this.options.disabled || this.greedyChild || !this.visible ) {
    return;
   }

   var parentInstance, scope, parent,
    intersects = intersect( draggable, this, this.options.tolerance, event ),
    c = !intersects && this.isover ?
     "isout" :
     ( intersects && !this.isover ? "isover" : null );
   if ( !c ) {
    return;
   }

   if ( this.options.greedy ) {

    // find droppable parents with same scope
    scope = this.options.scope;
    parent = this.element.parents( ":data(ui-droppable)" ).filter( function() {
     return $( this ).droppable( "instance" ).options.scope === scope;
    } );

    if ( parent.length ) {
     parentInstance = $( parent[ 0 ] ).droppable( "instance" );
     parentInstance.greedyChild = ( c === "isover" );
    }
   }

   // We just moved into a greedy child
   if ( parentInstance && c === "isover" ) {
    parentInstance.isover = false;
    parentInstance.isout = true;
    parentInstance._out.call( parentInstance, event );
   }

   this[ c ] = true;
   this[ c === "isout" ? "isover" : "isout" ] = false;
   this[ c === "isover" ? "_over" : "_out" ].call( this, event );

   // We just moved out of a greedy child
   if ( parentInstance && c === "isout" ) {
    parentInstance.isout = false;
    parentInstance.isover = true;
    parentInstance._over.call( parentInstance, event );
   }
  } );

 },
 dragStop: function( draggable, event ) {
  draggable.element.parentsUntil( "body" ).off( "scroll.droppable" );

  // Call prepareOffsets one final time since IE does not fire return scroll events when
  // overflow was caused by drag (see #5003)
  if ( !draggable.options.refreshPositions ) {
   $.ui.ddmanager.prepareOffsets( draggable, event );
  }
 }
};

// DEPRECATED
// TODO: switch return back to widget declaration at top of file when this is removed
if ( $.uiBackCompat !== false ) {

 // Backcompat for activeClass and hoverClass options
 $.widget( "ui.droppable", $.ui.droppable, {
  options: {
   hoverClass: false,
   activeClass: false
  },
  _addActiveClass: function() {
   this._super();
   if ( this.options.activeClass ) {
    this.element.addClass( this.options.activeClass );
   }
  },
  _removeActiveClass: function() {
   this._super();
   if ( this.options.activeClass ) {
    this.element.removeClass( this.options.activeClass );
   }
  },
  _addHoverClass: function() {
   this._super();
   if ( this.options.hoverClass ) {
    this.element.addClass( this.options.hoverClass );
   }
  },
  _removeHoverClass: function() {
   this._super();
   if ( this.options.hoverClass ) {
    this.element.removeClass( this.options.hoverClass );
   }
  }
 } );
}

var widgetsDroppable = $.ui.droppable;


/*!
 * jQuery UI Progressbar 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Progressbar
//>>group: Widgets
// jscs:disable maximumLineLength
//>>description: Displays a status indicator for loading state, standard percentage, and other progress indicators.
// jscs:enable maximumLineLength
//>>docs: http://api.jqueryui.com/progressbar/
//>>demos: http://jqueryui.com/progressbar/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/progressbar.css
//>>css.theme: ../../themes/base/theme.css



var widgetsProgressbar = $.widget( "ui.progressbar", {
 version: "1.12.1",
 options: {
  classes: {
   "ui-progressbar": "ui-corner-all",
   "ui-progressbar-value": "ui-corner-left",
   "ui-progressbar-complete": "ui-corner-right"
  },
  max: 100,
  value: 0,

  change: null,
  complete: null
 },

 min: 0,

 _create: function() {

  // Constrain initial value
  this.oldValue = this.options.value = this._constrainedValue();

  this.element.attr( {

   // Only set static values; aria-valuenow and aria-valuemax are
   // set inside _refreshValue()
   role: "progressbar",
   "aria-valuemin": this.min
  } );
  this._addClass( "ui-progressbar", "ui-widget ui-widget-content" );

  this.valueDiv = $( "<div>" ).appendTo( this.element );
  this._addClass( this.valueDiv, "ui-progressbar-value", "ui-widget-header" );
  this._refreshValue();
 },

 _destroy: function() {
  this.element.removeAttr( "role aria-valuemin aria-valuemax aria-valuenow" );

  this.valueDiv.remove();
 },

 value: function( newValue ) {
  if ( newValue === undefined ) {
   return this.options.value;
  }

  this.options.value = this._constrainedValue( newValue );
  this._refreshValue();
 },

 _constrainedValue: function( newValue ) {
  if ( newValue === undefined ) {
   newValue = this.options.value;
  }

  this.indeterminate = newValue === false;

  // Sanitize value
  if ( typeof newValue !== "number" ) {
   newValue = 0;
  }

  return this.indeterminate ? false :
   Math.min( this.options.max, Math.max( this.min, newValue ) );
 },

 _setOptions: function( options ) {

  // Ensure "value" option is set after other values (like max)
  var value = options.value;
  delete options.value;

  this._super( options );

  this.options.value = this._constrainedValue( value );
  this._refreshValue();
 },

 _setOption: function( key, value ) {
  if ( key === "max" ) {

   // Don't allow a max less than min
   value = Math.max( this.min, value );
  }
  this._super( key, value );
 },

 _setOptionDisabled: function( value ) {
  this._super( value );

  this.element.attr( "aria-disabled", value );
  this._toggleClass( null, "ui-state-disabled", !!value );
 },

 _percentage: function() {
  return this.indeterminate ?
   100 :
   100 * ( this.options.value - this.min ) / ( this.options.max - this.min );
 },

 _refreshValue: function() {
  var value = this.options.value,
   percentage = this._percentage();

  this.valueDiv
   .toggle( this.indeterminate || value > this.min )
   .width( percentage.toFixed( 0 ) + "%" );

  this
   ._toggleClass( this.valueDiv, "ui-progressbar-complete", null,
    value === this.options.max )
   ._toggleClass( "ui-progressbar-indeterminate", null, this.indeterminate );

  if ( this.indeterminate ) {
   this.element.removeAttr( "aria-valuenow" );
   if ( !this.overlayDiv ) {
    this.overlayDiv = $( "<div>" ).appendTo( this.valueDiv );
    this._addClass( this.overlayDiv, "ui-progressbar-overlay" );
   }
  } else {
   this.element.attr( {
    "aria-valuemax": this.options.max,
    "aria-valuenow": value
   } );
   if ( this.overlayDiv ) {
    this.overlayDiv.remove();
    this.overlayDiv = null;
   }
  }

  if ( this.oldValue !== value ) {
   this.oldValue = value;
   this._trigger( "change" );
  }
  if ( value === this.options.max ) {
   this._trigger( "complete" );
  }
 }
} );


/*!
 * jQuery UI Selectable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Selectable
//>>group: Interactions
//>>description: Allows groups of elements to be selected with the mouse.
//>>docs: http://api.jqueryui.com/selectable/
//>>demos: http://jqueryui.com/selectable/
//>>css.structure: ../../themes/base/selectable.css



var widgetsSelectable = $.widget( "ui.selectable", $.ui.mouse, {
 version: "1.12.1",
 options: {
  appendTo: "body",
  autoRefresh: true,
  distance: 0,
  filter: "*",
  tolerance: "touch",

  // Callbacks
  selected: null,
  selecting: null,
  start: null,
  stop: null,
  unselected: null,
  unselecting: null
 },
 _create: function() {
  var that = this;

  this._addClass( "ui-selectable" );

  this.dragged = false;

  // Cache selectee children based on filter
  this.refresh = function() {
   that.elementPos = $( that.element[ 0 ] ).offset();
   that.selectees = $( that.options.filter, that.element[ 0 ] );
   that._addClass( that.selectees, "ui-selectee" );
   that.selectees.each( function() {
    var $this = $( this ),
     selecteeOffset = $this.offset(),
     pos = {
      left: selecteeOffset.left - that.elementPos.left,
      top: selecteeOffset.top - that.elementPos.top
     };
    $.data( this, "selectable-item", {
     element: this,
     $element: $this,
     left: pos.left,
     top: pos.top,
     right: pos.left + $this.outerWidth(),
     bottom: pos.top + $this.outerHeight(),
     startselected: false,
     selected: $this.hasClass( "ui-selected" ),
     selecting: $this.hasClass( "ui-selecting" ),
     unselecting: $this.hasClass( "ui-unselecting" )
    } );
   } );
  };
  this.refresh();

  this._mouseInit();

  this.helper = $( "<div>" );
  this._addClass( this.helper, "ui-selectable-helper" );
 },

 _destroy: function() {
  this.selectees.removeData( "selectable-item" );
  this._mouseDestroy();
 },

 _mouseStart: function( event ) {
  var that = this,
   options = this.options;

  this.opos = [ event.pageX, event.pageY ];
  this.elementPos = $( this.element[ 0 ] ).offset();

  if ( this.options.disabled ) {
   return;
  }

  this.selectees = $( options.filter, this.element[ 0 ] );

  this._trigger( "start", event );

  $( options.appendTo ).append( this.helper );

  // position helper (lasso)
  this.helper.css( {
   "left": event.pageX,
   "top": event.pageY,
   "width": 0,
   "height": 0
  } );

  if ( options.autoRefresh ) {
   this.refresh();
  }

  this.selectees.filter( ".ui-selected" ).each( function() {
   var selectee = $.data( this, "selectable-item" );
   selectee.startselected = true;
   if ( !event.metaKey && !event.ctrlKey ) {
    that._removeClass( selectee.$element, "ui-selected" );
    selectee.selected = false;
    that._addClass( selectee.$element, "ui-unselecting" );
    selectee.unselecting = true;

    // selectable UNSELECTING callback
    that._trigger( "unselecting", event, {
     unselecting: selectee.element
    } );
   }
  } );

  $( event.target ).parents().addBack().each( function() {
   var doSelect,
    selectee = $.data( this, "selectable-item" );
   if ( selectee ) {
    doSelect = ( !event.metaKey && !event.ctrlKey ) ||
     !selectee.$element.hasClass( "ui-selected" );
    that._removeClass( selectee.$element, doSelect ? "ui-unselecting" : "ui-selected" )
     ._addClass( selectee.$element, doSelect ? "ui-selecting" : "ui-unselecting" );
    selectee.unselecting = !doSelect;
    selectee.selecting = doSelect;
    selectee.selected = doSelect;

    // selectable (UN)SELECTING callback
    if ( doSelect ) {
     that._trigger( "selecting", event, {
      selecting: selectee.element
     } );
    } else {
     that._trigger( "unselecting", event, {
      unselecting: selectee.element
     } );
    }
    return false;
   }
  } );

 },

 _mouseDrag: function( event ) {

  this.dragged = true;

  if ( this.options.disabled ) {
   return;
  }

  var tmp,
   that = this,
   options = this.options,
   x1 = this.opos[ 0 ],
   y1 = this.opos[ 1 ],
   x2 = event.pageX,
   y2 = event.pageY;

  if ( x1 > x2 ) { tmp = x2; x2 = x1; x1 = tmp; }
  if ( y1 > y2 ) { tmp = y2; y2 = y1; y1 = tmp; }
  this.helper.css( { left: x1, top: y1, width: x2 - x1, height: y2 - y1 } );

  this.selectees.each( function() {
   var selectee = $.data( this, "selectable-item" ),
    hit = false,
    offset = {};

   //prevent helper from being selected if appendTo: selectable
   if ( !selectee || selectee.element === that.element[ 0 ] ) {
    return;
   }

   offset.left   = selectee.left   + that.elementPos.left;
   offset.right  = selectee.right  + that.elementPos.left;
   offset.top    = selectee.top    + that.elementPos.top;
   offset.bottom = selectee.bottom + that.elementPos.top;

   if ( options.tolerance === "touch" ) {
    hit = ( !( offset.left > x2 || offset.right < x1 || offset.top > y2 ||
                    offset.bottom < y1 ) );
   } else if ( options.tolerance === "fit" ) {
    hit = ( offset.left > x1 && offset.right < x2 && offset.top > y1 &&
                    offset.bottom < y2 );
   }

   if ( hit ) {

    // SELECT
    if ( selectee.selected ) {
     that._removeClass( selectee.$element, "ui-selected" );
     selectee.selected = false;
    }
    if ( selectee.unselecting ) {
     that._removeClass( selectee.$element, "ui-unselecting" );
     selectee.unselecting = false;
    }
    if ( !selectee.selecting ) {
     that._addClass( selectee.$element, "ui-selecting" );
     selectee.selecting = true;

     // selectable SELECTING callback
     that._trigger( "selecting", event, {
      selecting: selectee.element
     } );
    }
   } else {

    // UNSELECT
    if ( selectee.selecting ) {
     if ( ( event.metaKey || event.ctrlKey ) && selectee.startselected ) {
      that._removeClass( selectee.$element, "ui-selecting" );
      selectee.selecting = false;
      that._addClass( selectee.$element, "ui-selected" );
      selectee.selected = true;
     } else {
      that._removeClass( selectee.$element, "ui-selecting" );
      selectee.selecting = false;
      if ( selectee.startselected ) {
       that._addClass( selectee.$element, "ui-unselecting" );
       selectee.unselecting = true;
      }

      // selectable UNSELECTING callback
      that._trigger( "unselecting", event, {
       unselecting: selectee.element
      } );
     }
    }
    if ( selectee.selected ) {
     if ( !event.metaKey && !event.ctrlKey && !selectee.startselected ) {
      that._removeClass( selectee.$element, "ui-selected" );
      selectee.selected = false;

      that._addClass( selectee.$element, "ui-unselecting" );
      selectee.unselecting = true;

      // selectable UNSELECTING callback
      that._trigger( "unselecting", event, {
       unselecting: selectee.element
      } );
     }
    }
   }
  } );

  return false;
 },

 _mouseStop: function( event ) {
  var that = this;

  this.dragged = false;

  $( ".ui-unselecting", this.element[ 0 ] ).each( function() {
   var selectee = $.data( this, "selectable-item" );
   that._removeClass( selectee.$element, "ui-unselecting" );
   selectee.unselecting = false;
   selectee.startselected = false;
   that._trigger( "unselected", event, {
    unselected: selectee.element
   } );
  } );
  $( ".ui-selecting", this.element[ 0 ] ).each( function() {
   var selectee = $.data( this, "selectable-item" );
   that._removeClass( selectee.$element, "ui-selecting" )
    ._addClass( selectee.$element, "ui-selected" );
   selectee.selecting = false;
   selectee.selected = true;
   selectee.startselected = true;
   that._trigger( "selected", event, {
    selected: selectee.element
   } );
  } );
  this._trigger( "stop", event );

  this.helper.remove();

  return false;
 }

} );


/*!
 * jQuery UI Selectmenu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Selectmenu
//>>group: Widgets
// jscs:disable maximumLineLength
//>>description: Duplicates and extends the functionality of a native HTML select element, allowing it to be customizable in behavior and appearance far beyond the limitations of a native select.
// jscs:enable maximumLineLength
//>>docs: http://api.jqueryui.com/selectmenu/
//>>demos: http://jqueryui.com/selectmenu/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/selectmenu.css, ../../themes/base/button.css
//>>css.theme: ../../themes/base/theme.css



var widgetsSelectmenu = $.widget( "ui.selectmenu", [ $.ui.formResetMixin, {
 version: "1.12.1",
 defaultElement: "<select>",
 options: {
  appendTo: null,
  classes: {
   "ui-selectmenu-button-open": "ui-corner-top",
   "ui-selectmenu-button-closed": "ui-corner-all"
  },
  disabled: null,
  icons: {
   button: "ui-icon-triangle-1-s"
  },
  position: {
   my: "left top",
   at: "left bottom",
   collision: "none"
  },
  width: false,

  // Callbacks
  change: null,
  close: null,
  focus: null,
  open: null,
  select: null
 },

 _create: function() {
  var selectmenuId = this.element.uniqueId().attr( "id" );
  this.ids = {
   element: selectmenuId,
   button: selectmenuId + "-button",
   menu: selectmenuId + "-menu"
  };

  this._drawButton();
  this._drawMenu();
  this._bindFormResetHandler();

  this._rendered = false;
  this.menuItems = $();
 },

 _drawButton: function() {
  var icon,
   that = this,
   item = this._parseOption(
    this.element.find( "option:selected" ),
    this.element[ 0 ].selectedIndex
   );

  // Associate existing label with the new button
  this.labels = this.element.labels().attr( "for", this.ids.button );
  this._on( this.labels, {
   click: function( event ) {
    this.button.focus();
    event.preventDefault();
   }
  } );

  // Hide original select element
  this.element.hide();

  // Create button
  this.button = $( "<span>", {
   tabindex: this.options.disabled ? -1 : 0,
   id: this.ids.button,
   role: "combobox",
   "aria-expanded": "false",
   "aria-autocomplete": "list",
   "aria-owns": this.ids.menu,
   "aria-haspopup": "true",
   title: this.element.attr( "title" )
  } )
   .insertAfter( this.element );

  this._addClass( this.button, "ui-selectmenu-button ui-selectmenu-button-closed",
   "ui-button ui-widget" );

  icon = $( "<span>" ).appendTo( this.button );
  this._addClass( icon, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button );
  this.buttonItem = this._renderButtonItem( item )
   .appendTo( this.button );

  if ( this.options.width !== false ) {
   this._resizeButton();
  }

  this._on( this.button, this._buttonEvents );
  this.button.one( "focusin", function() {

   // Delay rendering the menu items until the button receives focus.
   // The menu may have already been rendered via a programmatic open.
   if ( !that._rendered ) {
    that._refreshMenu();
   }
  } );
 },

 _drawMenu: function() {
  var that = this;

  // Create menu
  this.menu = $( "<ul>", {
   "aria-hidden": "true",
   "aria-labelledby": this.ids.button,
   id: this.ids.menu
  } );

  // Wrap menu
  this.menuWrap = $( "<div>" ).append( this.menu );
  this._addClass( this.menuWrap, "ui-selectmenu-menu", "ui-front" );
  this.menuWrap.appendTo( this._appendTo() );

  // Initialize menu widget
  this.menuInstance = this.menu
   .menu( {
    classes: {
     "ui-menu": "ui-corner-bottom"
    },
    role: "listbox",
    select: function( event, ui ) {
     event.preventDefault();

     // Support: IE8
     // If the item was selected via a click, the text selection
     // will be destroyed in IE
     that._setSelection();

     that._select( ui.item.data( "ui-selectmenu-item" ), event );
    },
    focus: function( event, ui ) {
     var item = ui.item.data( "ui-selectmenu-item" );

     // Prevent inital focus from firing and check if its a newly focused item
     if ( that.focusIndex != null && item.index !== that.focusIndex ) {
      that._trigger( "focus", event, { item: item } );
      if ( !that.isOpen ) {
       that._select( item, event );
      }
     }
     that.focusIndex = item.index;

     that.button.attr( "aria-activedescendant",
      that.menuItems.eq( item.index ).attr( "id" ) );
    }
   } )
   .menu( "instance" );

  // Don't close the menu on mouseleave
  this.menuInstance._off( this.menu, "mouseleave" );

  // Cancel the menu's collapseAll on document click
  this.menuInstance._closeOnDocumentClick = function() {
   return false;
  };

  // Selects often contain empty items, but never contain dividers
  this.menuInstance._isDivider = function() {
   return false;
  };
 },

 refresh: function() {
  this._refreshMenu();
  this.buttonItem.replaceWith(
   this.buttonItem = this._renderButtonItem(

    // Fall back to an empty object in case there are no options
    this._getSelectedItem().data( "ui-selectmenu-item" ) || {}
   )
  );
  if ( this.options.width === null ) {
   this._resizeButton();
  }
 },

 _refreshMenu: function() {
  var item,
   options = this.element.find( "option" );

  this.menu.empty();

  this._parseOptions( options );
  this._renderMenu( this.menu, this.items );

  this.menuInstance.refresh();
  this.menuItems = this.menu.find( "li" )
   .not( ".ui-selectmenu-optgroup" )
    .find( ".ui-menu-item-wrapper" );

  this._rendered = true;

  if ( !options.length ) {
   return;
  }

  item = this._getSelectedItem();

  // Update the menu to have the correct item focused
  this.menuInstance.focus( null, item );
  this._setAria( item.data( "ui-selectmenu-item" ) );

  // Set disabled state
  this._setOption( "disabled", this.element.prop( "disabled" ) );
 },

 open: function( event ) {
  if ( this.options.disabled ) {
   return;
  }

  // If this is the first time the menu is being opened, render the items
  if ( !this._rendered ) {
   this._refreshMenu();
  } else {

   // Menu clears focus on close, reset focus to selected item
   this._removeClass( this.menu.find( ".ui-state-active" ), null, "ui-state-active" );
   this.menuInstance.focus( null, this._getSelectedItem() );
  }

  // If there are no options, don't open the menu
  if ( !this.menuItems.length ) {
   return;
  }

  this.isOpen = true;
  this._toggleAttr();
  this._resizeMenu();
  this._position();

  this._on( this.document, this._documentClick );

  this._trigger( "open", event );
 },

 _position: function() {
  this.menuWrap.position( $.extend( { of: this.button }, this.options.position ) );
 },

 close: function( event ) {
  if ( !this.isOpen ) {
   return;
  }

  this.isOpen = false;
  this._toggleAttr();

  this.range = null;
  this._off( this.document );

  this._trigger( "close", event );
 },

 widget: function() {
  return this.button;
 },

 menuWidget: function() {
  return this.menu;
 },

 _renderButtonItem: function( item ) {
  var buttonItem = $( "<span>" );

  this._setText( buttonItem, item.label );
  this._addClass( buttonItem, "ui-selectmenu-text" );

  return buttonItem;
 },

 _renderMenu: function( ul, items ) {
  var that = this,
   currentOptgroup = "";

  $.each( items, function( index, item ) {
   var li;

   if ( item.optgroup !== currentOptgroup ) {
    li = $( "<li>", {
     text: item.optgroup
    } );
    that._addClass( li, "ui-selectmenu-optgroup", "ui-menu-divider" +
     ( item.element.parent( "optgroup" ).prop( "disabled" ) ?
      " ui-state-disabled" :
      "" ) );

    li.appendTo( ul );

    currentOptgroup = item.optgroup;
   }

   that._renderItemData( ul, item );
  } );
 },

 _renderItemData: function( ul, item ) {
  return this._renderItem( ul, item ).data( "ui-selectmenu-item", item );
 },

 _renderItem: function( ul, item ) {
  var li = $( "<li>" ),
   wrapper = $( "<div>", {
    title: item.element.attr( "title" )
   } );

  if ( item.disabled ) {
   this._addClass( li, null, "ui-state-disabled" );
  }
  this._setText( wrapper, item.label );

  return li.append( wrapper ).appendTo( ul );
 },

 _setText: function( element, value ) {
  if ( value ) {
   element.text( value );
  } else {
   element.html( "&#160;" );
  }
 },

 _move: function( direction, event ) {
  var item, next,
   filter = ".ui-menu-item";

  if ( this.isOpen ) {
   item = this.menuItems.eq( this.focusIndex ).parent( "li" );
  } else {
   item = this.menuItems.eq( this.element[ 0 ].selectedIndex ).parent( "li" );
   filter += ":not(.ui-state-disabled)";
  }

  if ( direction === "first" || direction === "last" ) {
   next = item[ direction === "first" ? "prevAll" : "nextAll" ]( filter ).eq( -1 );
  } else {
   next = item[ direction + "All" ]( filter ).eq( 0 );
  }

  if ( next.length ) {
   this.menuInstance.focus( event, next );
  }
 },

 _getSelectedItem: function() {
  return this.menuItems.eq( this.element[ 0 ].selectedIndex ).parent( "li" );
 },

 _toggle: function( event ) {
  this[ this.isOpen ? "close" : "open" ]( event );
 },

 _setSelection: function() {
  var selection;

  if ( !this.range ) {
   return;
  }

  if ( window.getSelection ) {
   selection = window.getSelection();
   selection.removeAllRanges();
   selection.addRange( this.range );

  // Support: IE8
  } else {
   this.range.select();
  }

  // Support: IE
  // Setting the text selection kills the button focus in IE, but
  // restoring the focus doesn't kill the selection.
  this.button.focus();
 },

 _documentClick: {
  mousedown: function( event ) {
   if ( !this.isOpen ) {
    return;
   }

   if ( !$( event.target ).closest( ".ui-selectmenu-menu, #" +
     $.ui.escapeSelector( this.ids.button ) ).length ) {
    this.close( event );
   }
  }
 },

 _buttonEvents: {

  // Prevent text selection from being reset when interacting with the selectmenu (#10144)
  mousedown: function() {
   var selection;

   if ( window.getSelection ) {
    selection = window.getSelection();
    if ( selection.rangeCount ) {
     this.range = selection.getRangeAt( 0 );
    }

   // Support: IE8
   } else {
    this.range = document.selection.createRange();
   }
  },

  click: function( event ) {
   this._setSelection();
   this._toggle( event );
  },

  keydown: function( event ) {
   var preventDefault = true;
   switch ( event.keyCode ) {
   case $.ui.keyCode.TAB:
   case $.ui.keyCode.ESCAPE:
    this.close( event );
    preventDefault = false;
    break;
   case $.ui.keyCode.ENTER:
    if ( this.isOpen ) {
     this._selectFocusedItem( event );
    }
    break;
   case $.ui.keyCode.UP:
    if ( event.altKey ) {
     this._toggle( event );
    } else {
     this._move( "prev", event );
    }
    break;
   case $.ui.keyCode.DOWN:
    if ( event.altKey ) {
     this._toggle( event );
    } else {
     this._move( "next", event );
    }
    break;
   case $.ui.keyCode.SPACE:
    if ( this.isOpen ) {
     this._selectFocusedItem( event );
    } else {
     this._toggle( event );
    }
    break;
   case $.ui.keyCode.LEFT:
    this._move( "prev", event );
    break;
   case $.ui.keyCode.RIGHT:
    this._move( "next", event );
    break;
   case $.ui.keyCode.HOME:
   case $.ui.keyCode.PAGE_UP:
    this._move( "first", event );
    break;
   case $.ui.keyCode.END:
   case $.ui.keyCode.PAGE_DOWN:
    this._move( "last", event );
    break;
   default:
    this.menu.trigger( event );
    preventDefault = false;
   }

   if ( preventDefault ) {
    event.preventDefault();
   }
  }
 },

 _selectFocusedItem: function( event ) {
  var item = this.menuItems.eq( this.focusIndex ).parent( "li" );
  if ( !item.hasClass( "ui-state-disabled" ) ) {
   this._select( item.data( "ui-selectmenu-item" ), event );
  }
 },

 _select: function( item, event ) {
  var oldIndex = this.element[ 0 ].selectedIndex;

  // Change native select element
  this.element[ 0 ].selectedIndex = item.index;
  this.buttonItem.replaceWith( this.buttonItem = this._renderButtonItem( item ) );
  this._setAria( item );
  this._trigger( "select", event, { item: item } );

  if ( item.index !== oldIndex ) {
   this._trigger( "change", event, { item: item } );
  }

  this.close( event );
 },

 _setAria: function( item ) {
  var id = this.menuItems.eq( item.index ).attr( "id" );

  this.button.attr( {
   "aria-labelledby": id,
   "aria-activedescendant": id
  } );
  this.menu.attr( "aria-activedescendant", id );
 },

 _setOption: function( key, value ) {
  if ( key === "icons" ) {
   var icon = this.button.find( "span.ui-icon" );
   this._removeClass( icon, null, this.options.icons.button )
    ._addClass( icon, null, value.button );
  }

  this._super( key, value );

  if ( key === "appendTo" ) {
   this.menuWrap.appendTo( this._appendTo() );
  }

  if ( key === "width" ) {
   this._resizeButton();
  }
 },

 _setOptionDisabled: function( value ) {
  this._super( value );

  this.menuInstance.option( "disabled", value );
  this.button.attr( "aria-disabled", value );
  this._toggleClass( this.button, null, "ui-state-disabled", value );

  this.element.prop( "disabled", value );
  if ( value ) {
   this.button.attr( "tabindex", -1 );
   this.close();
  } else {
   this.button.attr( "tabindex", 0 );
  }
 },

 _appendTo: function() {
  var element = this.options.appendTo;

  if ( element ) {
   element = element.jquery || element.nodeType ?
    $( element ) :
    this.document.find( element ).eq( 0 );
  }

  if ( !element || !element[ 0 ] ) {
   element = this.element.closest( ".ui-front, dialog" );
  }

  if ( !element.length ) {
   element = this.document[ 0 ].body;
  }

  return element;
 },

 _toggleAttr: function() {
  this.button.attr( "aria-expanded", this.isOpen );

  // We can't use two _toggleClass() calls here, because we need to make sure
  // we always remove classes first and add them second, otherwise if both classes have the
  // same theme class, it will be removed after we add it.
  this._removeClass( this.button, "ui-selectmenu-button-" +
   ( this.isOpen ? "closed" : "open" ) )
   ._addClass( this.button, "ui-selectmenu-button-" +
    ( this.isOpen ? "open" : "closed" ) )
   ._toggleClass( this.menuWrap, "ui-selectmenu-open", null, this.isOpen );

  this.menu.attr( "aria-hidden", !this.isOpen );
 },

 _resizeButton: function() {
  var width = this.options.width;

  // For `width:false`, just remove inline style and stop
  if ( width === false ) {
   this.button.css( "width", "" );
   return;
  }

  // For `width:null`, match the width of the original element
  if ( width === null ) {
   width = this.element.show().outerWidth();
   this.element.hide();
  }

  this.button.outerWidth( width );
 },

 _resizeMenu: function() {
  this.menu.outerWidth( Math.max(
   this.button.outerWidth(),

   // Support: IE10
   // IE10 wraps long text (possibly a rounding bug)
   // so we add 1px to avoid the wrapping
   this.menu.width( "" ).outerWidth() + 1
  ) );
 },

 _getCreateOptions: function() {
  var options = this._super();

  options.disabled = this.element.prop( "disabled" );

  return options;
 },

 _parseOptions: function( options ) {
  var that = this,
   data = [];
  options.each( function( index, item ) {
   data.push( that._parseOption( $( item ), index ) );
  } );
  this.items = data;
 },

 _parseOption: function( option, index ) {
  var optgroup = option.parent( "optgroup" );

  return {
   element: option,
   index: index,
   value: option.val(),
   label: option.text(),
   optgroup: optgroup.attr( "label" ) || "",
   disabled: optgroup.prop( "disabled" ) || option.prop( "disabled" )
  };
 },

 _destroy: function() {
  this._unbindFormResetHandler();
  this.menuWrap.remove();
  this.button.remove();
  this.element.show();
  this.element.removeUniqueId();
  this.labels.attr( "for", this.ids.element );
 }
} ] );


/*!
 * jQuery UI Slider 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Slider
//>>group: Widgets
//>>description: Displays a flexible slider with ranges and accessibility via keyboard.
//>>docs: http://api.jqueryui.com/slider/
//>>demos: http://jqueryui.com/slider/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/slider.css
//>>css.theme: ../../themes/base/theme.css



var widgetsSlider = $.widget( "ui.slider", $.ui.mouse, {
 version: "1.12.1",
 widgetEventPrefix: "slide",

 options: {
  animate: false,
  classes: {
   "ui-slider": "ui-corner-all",
   "ui-slider-handle": "ui-corner-all",

   // Note: ui-widget-header isn't the most fittingly semantic framework class for this
   // element, but worked best visually with a variety of themes
   "ui-slider-range": "ui-corner-all ui-widget-header"
  },
  distance: 0,
  max: 100,
  min: 0,
  orientation: "horizontal",
  range: false,
  step: 1,
  value: 0,
  values: null,

  // Callbacks
  change: null,
  slide: null,
  start: null,
  stop: null
 },

 // Number of pages in a slider
 // (how many times can you page up/down to go through the whole range)
 numPages: 5,

 _create: function() {
  this._keySliding = false;
  this._mouseSliding = false;
  this._animateOff = true;
  this._handleIndex = null;
  this._detectOrientation();
  this._mouseInit();
  this._calculateNewMax();

  this._addClass( "ui-slider ui-slider-" + this.orientation,
   "ui-widget ui-widget-content" );

  this._refresh();

  this._animateOff = false;
 },

 _refresh: function() {
  this._createRange();
  this._createHandles();
  this._setupEvents();
  this._refreshValue();
 },

 _createHandles: function() {
  var i, handleCount,
   options = this.options,
   existingHandles = this.element.find( ".ui-slider-handle" ),
   handle = "<span tabindex='0'></span>",
   handles = [];

  handleCount = ( options.values && options.values.length ) || 1;

  if ( existingHandles.length > handleCount ) {
   existingHandles.slice( handleCount ).remove();
   existingHandles = existingHandles.slice( 0, handleCount );
  }

  for ( i = existingHandles.length; i < handleCount; i++ ) {
   handles.push( handle );
  }

  this.handles = existingHandles.add( $( handles.join( "" ) ).appendTo( this.element ) );

  this._addClass( this.handles, "ui-slider-handle", "ui-state-default" );

  this.handle = this.handles.eq( 0 );

  this.handles.each( function( i ) {
   $( this )
    .data( "ui-slider-handle-index", i )
    .attr( "tabIndex", 0 );
  } );
 },

 _createRange: function() {
  var options = this.options;

  if ( options.range ) {
   if ( options.range === true ) {
    if ( !options.values ) {
     options.values = [ this._valueMin(), this._valueMin() ];
    } else if ( options.values.length && options.values.length !== 2 ) {
     options.values = [ options.values[ 0 ], options.values[ 0 ] ];
    } else if ( $.isArray( options.values ) ) {
     options.values = options.values.slice( 0 );
    }
   }

   if ( !this.range || !this.range.length ) {
    this.range = $( "<div>" )
     .appendTo( this.element );

    this._addClass( this.range, "ui-slider-range" );
   } else {
    this._removeClass( this.range, "ui-slider-range-min ui-slider-range-max" );

    // Handle range switching from true to min/max
    this.range.css( {
     "left": "",
     "bottom": ""
    } );
   }
   if ( options.range === "min" || options.range === "max" ) {
    this._addClass( this.range, "ui-slider-range-" + options.range );
   }
  } else {
   if ( this.range ) {
    this.range.remove();
   }
   this.range = null;
  }
 },

 _setupEvents: function() {
  this._off( this.handles );
  this._on( this.handles, this._handleEvents );
  this._hoverable( this.handles );
  this._focusable( this.handles );
 },

 _destroy: function() {
  this.handles.remove();
  if ( this.range ) {
   this.range.remove();
  }

  this._mouseDestroy();
 },

 _mouseCapture: function( event ) {
  var position, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle,
   that = this,
   o = this.options;

  if ( o.disabled ) {
   return false;
  }

  this.elementSize = {
   width: this.element.outerWidth(),
   height: this.element.outerHeight()
  };
  this.elementOffset = this.element.offset();

  position = { x: event.pageX, y: event.pageY };
  normValue = this._normValueFromMouse( position );
  distance = this._valueMax() - this._valueMin() + 1;
  this.handles.each( function( i ) {
   var thisDistance = Math.abs( normValue - that.values( i ) );
   if ( ( distance > thisDistance ) ||
    ( distance === thisDistance &&
     ( i === that._lastChangedValue || that.values( i ) === o.min ) ) ) {
    distance = thisDistance;
    closestHandle = $( this );
    index = i;
   }
  } );

  allowed = this._start( event, index );
  if ( allowed === false ) {
   return false;
  }
  this._mouseSliding = true;

  this._handleIndex = index;

  this._addClass( closestHandle, null, "ui-state-active" );
  closestHandle.trigger( "focus" );

  offset = closestHandle.offset();
  mouseOverHandle = !$( event.target ).parents().addBack().is( ".ui-slider-handle" );
  this._clickOffset = mouseOverHandle ? { left: 0, top: 0 } : {
   left: event.pageX - offset.left - ( closestHandle.width() / 2 ),
   top: event.pageY - offset.top -
    ( closestHandle.height() / 2 ) -
    ( parseInt( closestHandle.css( "borderTopWidth" ), 10 ) || 0 ) -
    ( parseInt( closestHandle.css( "borderBottomWidth" ), 10 ) || 0 ) +
    ( parseInt( closestHandle.css( "marginTop" ), 10 ) || 0 )
  };

  if ( !this.handles.hasClass( "ui-state-hover" ) ) {
   this._slide( event, index, normValue );
  }
  this._animateOff = true;
  return true;
 },

 _mouseStart: function() {
  return true;
 },

 _mouseDrag: function( event ) {
  var position = { x: event.pageX, y: event.pageY },
   normValue = this._normValueFromMouse( position );

  this._slide( event, this._handleIndex, normValue );

  return false;
 },

 _mouseStop: function( event ) {
  this._removeClass( this.handles, null, "ui-state-active" );
  this._mouseSliding = false;

  this._stop( event, this._handleIndex );
  this._change( event, this._handleIndex );

  this._handleIndex = null;
  this._clickOffset = null;
  this._animateOff = false;

  return false;
 },

 _detectOrientation: function() {
  this.orientation = ( this.options.orientation === "vertical" ) ? "vertical" : "horizontal";
 },

 _normValueFromMouse: function( position ) {
  var pixelTotal,
   pixelMouse,
   percentMouse,
   valueTotal,
   valueMouse;

  if ( this.orientation === "horizontal" ) {
   pixelTotal = this.elementSize.width;
   pixelMouse = position.x - this.elementOffset.left -
    ( this._clickOffset ? this._clickOffset.left : 0 );
  } else {
   pixelTotal = this.elementSize.height;
   pixelMouse = position.y - this.elementOffset.top -
    ( this._clickOffset ? this._clickOffset.top : 0 );
  }

  percentMouse = ( pixelMouse / pixelTotal );
  if ( percentMouse > 1 ) {
   percentMouse = 1;
  }
  if ( percentMouse < 0 ) {
   percentMouse = 0;
  }
  if ( this.orientation === "vertical" ) {
   percentMouse = 1 - percentMouse;
  }

  valueTotal = this._valueMax() - this._valueMin();
  valueMouse = this._valueMin() + percentMouse * valueTotal;

  return this._trimAlignValue( valueMouse );
 },

 _uiHash: function( index, value, values ) {
  var uiHash = {
   handle: this.handles[ index ],
   handleIndex: index,
   value: value !== undefined ? value : this.value()
  };

  if ( this._hasMultipleValues() ) {
   uiHash.value = value !== undefined ? value : this.values( index );
   uiHash.values = values || this.values();
  }

  return uiHash;
 },

 _hasMultipleValues: function() {
  return this.options.values && this.options.values.length;
 },

 _start: function( event, index ) {
  return this._trigger( "start", event, this._uiHash( index ) );
 },

 _slide: function( event, index, newVal ) {
  var allowed, otherVal,
   currentValue = this.value(),
   newValues = this.values();

  if ( this._hasMultipleValues() ) {
   otherVal = this.values( index ? 0 : 1 );
   currentValue = this.values( index );

   if ( this.options.values.length === 2 && this.options.range === true ) {
    newVal =  index === 0 ? Math.min( otherVal, newVal ) : Math.max( otherVal, newVal );
   }

   newValues[ index ] = newVal;
  }

  if ( newVal === currentValue ) {
   return;
  }

  allowed = this._trigger( "slide", event, this._uiHash( index, newVal, newValues ) );

  // A slide can be canceled by returning false from the slide callback
  if ( allowed === false ) {
   return;
  }

  if ( this._hasMultipleValues() ) {
   this.values( index, newVal );
  } else {
   this.value( newVal );
  }
 },

 _stop: function( event, index ) {
  this._trigger( "stop", event, this._uiHash( index ) );
 },

 _change: function( event, index ) {
  if ( !this._keySliding && !this._mouseSliding ) {

   //store the last changed value index for reference when handles overlap
   this._lastChangedValue = index;
   this._trigger( "change", event, this._uiHash( index ) );
  }
 },

 value: function( newValue ) {
  if ( arguments.length ) {
   this.options.value = this._trimAlignValue( newValue );
   this._refreshValue();
   this._change( null, 0 );
   return;
  }

  return this._value();
 },

 values: function( index, newValue ) {
  var vals,
   newValues,
   i;

  if ( arguments.length > 1 ) {
   this.options.values[ index ] = this._trimAlignValue( newValue );
   this._refreshValue();
   this._change( null, index );
   return;
  }

  if ( arguments.length ) {
   if ( $.isArray( arguments[ 0 ] ) ) {
    vals = this.options.values;
    newValues = arguments[ 0 ];
    for ( i = 0; i < vals.length; i += 1 ) {
     vals[ i ] = this._trimAlignValue( newValues[ i ] );
     this._change( null, i );
    }
    this._refreshValue();
   } else {
    if ( this._hasMultipleValues() ) {
     return this._values( index );
    } else {
     return this.value();
    }
   }
  } else {
   return this._values();
  }
 },

 _setOption: function( key, value ) {
  var i,
   valsLength = 0;

  if ( key === "range" && this.options.range === true ) {
   if ( value === "min" ) {
    this.options.value = this._values( 0 );
    this.options.values = null;
   } else if ( value === "max" ) {
    this.options.value = this._values( this.options.values.length - 1 );
    this.options.values = null;
   }
  }

  if ( $.isArray( this.options.values ) ) {
   valsLength = this.options.values.length;
  }

  this._super( key, value );

  switch ( key ) {
   case "orientation":
    this._detectOrientation();
    this._removeClass( "ui-slider-horizontal ui-slider-vertical" )
     ._addClass( "ui-slider-" + this.orientation );
    this._refreshValue();
    if ( this.options.range ) {
     this._refreshRange( value );
    }

    // Reset positioning from previous orientation
    this.handles.css( value === "horizontal" ? "bottom" : "left", "" );
    break;
   case "value":
    this._animateOff = true;
    this._refreshValue();
    this._change( null, 0 );
    this._animateOff = false;
    break;
   case "values":
    this._animateOff = true;
    this._refreshValue();

    // Start from the last handle to prevent unreachable handles (#9046)
    for ( i = valsLength - 1; i >= 0; i-- ) {
     this._change( null, i );
    }
    this._animateOff = false;
    break;
   case "step":
   case "min":
   case "max":
    this._animateOff = true;
    this._calculateNewMax();
    this._refreshValue();
    this._animateOff = false;
    break;
   case "range":
    this._animateOff = true;
    this._refresh();
    this._animateOff = false;
    break;
  }
 },

 _setOptionDisabled: function( value ) {
  this._super( value );

  this._toggleClass( null, "ui-state-disabled", !!value );
 },

 //internal value getter
 // _value() returns value trimmed by min and max, aligned by step
 _value: function() {
  var val = this.options.value;
  val = this._trimAlignValue( val );

  return val;
 },

 //internal values getter
 // _values() returns array of values trimmed by min and max, aligned by step
 // _values( index ) returns single value trimmed by min and max, aligned by step
 _values: function( index ) {
  var val,
   vals,
   i;

  if ( arguments.length ) {
   val = this.options.values[ index ];
   val = this._trimAlignValue( val );

   return val;
  } else if ( this._hasMultipleValues() ) {

   // .slice() creates a copy of the array
   // this copy gets trimmed by min and max and then returned
   vals = this.options.values.slice();
   for ( i = 0; i < vals.length; i += 1 ) {
    vals[ i ] = this._trimAlignValue( vals[ i ] );
   }

   return vals;
  } else {
   return [];
  }
 },

 // Returns the step-aligned value that val is closest to, between (inclusive) min and max
 _trimAlignValue: function( val ) {
  if ( val <= this._valueMin() ) {
   return this._valueMin();
  }
  if ( val >= this._valueMax() ) {
   return this._valueMax();
  }
  var step = ( this.options.step > 0 ) ? this.options.step : 1,
   valModStep = ( val - this._valueMin() ) % step,
   alignValue = val - valModStep;

  if ( Math.abs( valModStep ) * 2 >= step ) {
   alignValue += ( valModStep > 0 ) ? step : ( -step );
  }

  // Since JavaScript has problems with large floats, round
  // the final value to 5 digits after the decimal point (see #4124)
  return parseFloat( alignValue.toFixed( 5 ) );
 },

 _calculateNewMax: function() {
  var max = this.options.max,
   min = this._valueMin(),
   step = this.options.step,
   aboveMin = Math.round( ( max - min ) / step ) * step;
  max = aboveMin + min;
  if ( max > this.options.max ) {

   //If max is not divisible by step, rounding off may increase its value
   max -= step;
  }
  this.max = parseFloat( max.toFixed( this._precision() ) );
 },

 _precision: function() {
  var precision = this._precisionOf( this.options.step );
  if ( this.options.min !== null ) {
   precision = Math.max( precision, this._precisionOf( this.options.min ) );
  }
  return precision;
 },

 _precisionOf: function( num ) {
  var str = num.toString(),
   decimal = str.indexOf( "." );
  return decimal === -1 ? 0 : str.length - decimal - 1;
 },

 _valueMin: function() {
  return this.options.min;
 },

 _valueMax: function() {
  return this.max;
 },

 _refreshRange: function( orientation ) {
  if ( orientation === "vertical" ) {
   this.range.css( { "width": "", "left": "" } );
  }
  if ( orientation === "horizontal" ) {
   this.range.css( { "height": "", "bottom": "" } );
  }
 },

 _refreshValue: function() {
  var lastValPercent, valPercent, value, valueMin, valueMax,
   oRange = this.options.range,
   o = this.options,
   that = this,
   animate = ( !this._animateOff ) ? o.animate : false,
   _set = {};

  if ( this._hasMultipleValues() ) {
   this.handles.each( function( i ) {
    valPercent = ( that.values( i ) - that._valueMin() ) / ( that._valueMax() -
     that._valueMin() ) * 100;
    _set[ that.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
    $( this ).stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );
    if ( that.options.range === true ) {
     if ( that.orientation === "horizontal" ) {
      if ( i === 0 ) {
       that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
        left: valPercent + "%"
       }, o.animate );
      }
      if ( i === 1 ) {
       that.range[ animate ? "animate" : "css" ]( {
        width: ( valPercent - lastValPercent ) + "%"
       }, {
        queue: false,
        duration: o.animate
       } );
      }
     } else {
      if ( i === 0 ) {
       that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
        bottom: ( valPercent ) + "%"
       }, o.animate );
      }
      if ( i === 1 ) {
       that.range[ animate ? "animate" : "css" ]( {
        height: ( valPercent - lastValPercent ) + "%"
       }, {
        queue: false,
        duration: o.animate
       } );
      }
     }
    }
    lastValPercent = valPercent;
   } );
  } else {
   value = this.value();
   valueMin = this._valueMin();
   valueMax = this._valueMax();
   valPercent = ( valueMax !== valueMin ) ?
     ( value - valueMin ) / ( valueMax - valueMin ) * 100 :
     0;
   _set[ this.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
   this.handle.stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );

   if ( oRange === "min" && this.orientation === "horizontal" ) {
    this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
     width: valPercent + "%"
    }, o.animate );
   }
   if ( oRange === "max" && this.orientation === "horizontal" ) {
    this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
     width: ( 100 - valPercent ) + "%"
    }, o.animate );
   }
   if ( oRange === "min" && this.orientation === "vertical" ) {
    this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
     height: valPercent + "%"
    }, o.animate );
   }
   if ( oRange === "max" && this.orientation === "vertical" ) {
    this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
     height: ( 100 - valPercent ) + "%"
    }, o.animate );
   }
  }
 },

 _handleEvents: {
  keydown: function( event ) {
   var allowed, curVal, newVal, step,
    index = $( event.target ).data( "ui-slider-handle-index" );

   switch ( event.keyCode ) {
    case $.ui.keyCode.HOME:
    case $.ui.keyCode.END:
    case $.ui.keyCode.PAGE_UP:
    case $.ui.keyCode.PAGE_DOWN:
    case $.ui.keyCode.UP:
    case $.ui.keyCode.RIGHT:
    case $.ui.keyCode.DOWN:
    case $.ui.keyCode.LEFT:
     event.preventDefault();
     if ( !this._keySliding ) {
      this._keySliding = true;
      this._addClass( $( event.target ), null, "ui-state-active" );
      allowed = this._start( event, index );
      if ( allowed === false ) {
       return;
      }
     }
     break;
   }

   step = this.options.step;
   if ( this._hasMultipleValues() ) {
    curVal = newVal = this.values( index );
   } else {
    curVal = newVal = this.value();
   }

   switch ( event.keyCode ) {
    case $.ui.keyCode.HOME:
     newVal = this._valueMin();
     break;
    case $.ui.keyCode.END:
     newVal = this._valueMax();
     break;
    case $.ui.keyCode.PAGE_UP:
     newVal = this._trimAlignValue(
      curVal + ( ( this._valueMax() - this._valueMin() ) / this.numPages )
     );
     break;
    case $.ui.keyCode.PAGE_DOWN:
     newVal = this._trimAlignValue(
      curVal - ( ( this._valueMax() - this._valueMin() ) / this.numPages ) );
     break;
    case $.ui.keyCode.UP:
    case $.ui.keyCode.RIGHT:
     if ( curVal === this._valueMax() ) {
      return;
     }
     newVal = this._trimAlignValue( curVal + step );
     break;
    case $.ui.keyCode.DOWN:
    case $.ui.keyCode.LEFT:
     if ( curVal === this._valueMin() ) {
      return;
     }
     newVal = this._trimAlignValue( curVal - step );
     break;
   }

   this._slide( event, index, newVal );
  },
  keyup: function( event ) {
   var index = $( event.target ).data( "ui-slider-handle-index" );

   if ( this._keySliding ) {
    this._keySliding = false;
    this._stop( event, index );
    this._change( event, index );
    this._removeClass( $( event.target ), null, "ui-state-active" );
   }
  }
 }
} );


/*!
 * jQuery UI Sortable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Sortable
//>>group: Interactions
//>>description: Enables items in a list to be sorted using the mouse.
//>>docs: http://api.jqueryui.com/sortable/
//>>demos: http://jqueryui.com/sortable/
//>>css.structure: ../../themes/base/sortable.css



var widgetsSortable = $.widget( "ui.sortable", $.ui.mouse, {
 version: "1.12.1",
 widgetEventPrefix: "sort",
 ready: false,
 options: {
  appendTo: "parent",
  axis: false,
  connectWith: false,
  containment: false,
  cursor: "auto",
  cursorAt: false,
  dropOnEmpty: true,
  forcePlaceholderSize: false,
  forceHelperSize: false,
  grid: false,
  handle: false,
  helper: "original",
  items: "> *",
  opacity: false,
  placeholder: false,
  revert: false,
  scroll: true,
  scrollSensitivity: 20,
  scrollSpeed: 20,
  scope: "default",
  tolerance: "intersect",
  zIndex: 1000,

  // Callbacks
  activate: null,
  beforeStop: null,
  change: null,
  deactivate: null,
  out: null,
  over: null,
  receive: null,
  remove: null,
  sort: null,
  start: null,
  stop: null,
  update: null
 },

 _isOverAxis: function( x, reference, size ) {
  return ( x >= reference ) && ( x < ( reference + size ) );
 },

 _isFloating: function( item ) {
  return ( /left|right/ ).test( item.css( "float" ) ) ||
   ( /inline|table-cell/ ).test( item.css( "display" ) );
 },

 _create: function() {
  this.containerCache = {};
  this._addClass( "ui-sortable" );

  //Get the items
  this.refresh();

  //Let's determine the parent's offset
  this.offset = this.element.offset();

  //Initialize mouse events for interaction
  this._mouseInit();

  this._setHandleClassName();

  //We're ready to go
  this.ready = true;

 },

 _setOption: function( key, value ) {
  this._super( key, value );

  if ( key === "handle" ) {
   this._setHandleClassName();
  }
 },

 _setHandleClassName: function() {
  var that = this;
  this._removeClass( this.element.find( ".ui-sortable-handle" ), "ui-sortable-handle" );
  $.each( this.items, function() {
   that._addClass(
    this.instance.options.handle ?
     this.item.find( this.instance.options.handle ) :
     this.item,
    "ui-sortable-handle"
   );
  } );
 },

 _destroy: function() {
  this._mouseDestroy();

  for ( var i = this.items.length - 1; i >= 0; i-- ) {
   this.items[ i ].item.removeData( this.widgetName + "-item" );
  }

  return this;
 },

 _mouseCapture: function( event, overrideHandle ) {
  var currentItem = null,
   validHandle = false,
   that = this;

  if ( this.reverting ) {
   return false;
  }

  if ( this.options.disabled || this.options.type === "static" ) {
   return false;
  }

  //We have to refresh the items data once first
  this._refreshItems( event );

  //Find out if the clicked node (or one of its parents) is a actual item in this.items
  $( event.target ).parents().each( function() {
   if ( $.data( this, that.widgetName + "-item" ) === that ) {
    currentItem = $( this );
    return false;
   }
  } );
  if ( $.data( event.target, that.widgetName + "-item" ) === that ) {
   currentItem = $( event.target );
  }

  if ( !currentItem ) {
   return false;
  }
  if ( this.options.handle && !overrideHandle ) {
   $( this.options.handle, currentItem ).find( "*" ).addBack().each( function() {
    if ( this === event.target ) {
     validHandle = true;
    }
   } );
   if ( !validHandle ) {
    return false;
   }
  }

  this.currentItem = currentItem;
  this._removeCurrentsFromItems();
  return true;

 },

 _mouseStart: function( event, overrideHandle, noActivation ) {

  var i, body,
   o = this.options;

  this.currentContainer = this;

  //We only need to call refreshPositions, because the refreshItems call has been moved to
  // mouseCapture
  this.refreshPositions();

  //Create and append the visible helper
  this.helper = this._createHelper( event );

  //Cache the helper size
  this._cacheHelperProportions();

  /*
   * - Position generation -
   * This block generates everything position related - it's the core of draggables.
   */

  //Cache the margins of the original element
  this._cacheMargins();

  //Get the next scrolling parent
  this.scrollParent = this.helper.scrollParent();

  //The element's absolute position on the page minus margins
  this.offset = this.currentItem.offset();
  this.offset = {
   top: this.offset.top - this.margins.top,
   left: this.offset.left - this.margins.left
  };

  $.extend( this.offset, {
   click: { //Where the click happened, relative to the element
    left: event.pageX - this.offset.left,
    top: event.pageY - this.offset.top
   },
   parent: this._getParentOffset(),

   // This is a relative to absolute position minus the actual position calculation -
   // only used for relative positioned helper
   relative: this._getRelativeOffset()
  } );

  // Only after we got the offset, we can change the helper's position to absolute
  // TODO: Still need to figure out a way to make relative sorting possible
  this.helper.css( "position", "absolute" );
  this.cssPosition = this.helper.css( "position" );

  //Generate the original position
  this.originalPosition = this._generatePosition( event );
  this.originalPageX = event.pageX;
  this.originalPageY = event.pageY;

  //Adjust the mouse offset relative to the helper if "cursorAt" is supplied
  ( o.cursorAt && this._adjustOffsetFromHelper( o.cursorAt ) );

  //Cache the former DOM position
  this.domPosition = {
   prev: this.currentItem.prev()[ 0 ],
   parent: this.currentItem.parent()[ 0 ]
  };

  // If the helper is not the original, hide the original so it's not playing any role during
  // the drag, won't cause anything bad this way
  if ( this.helper[ 0 ] !== this.currentItem[ 0 ] ) {
   this.currentItem.hide();
  }

  //Create the placeholder
  this._createPlaceholder();

  //Set a containment if given in the options
  if ( o.containment ) {
   this._setContainment();
  }

  if ( o.cursor && o.cursor !== "auto" ) { // cursor option
   body = this.document.find( "body" );

   // Support: IE
   this.storedCursor = body.css( "cursor" );
   body.css( "cursor", o.cursor );

   this.storedStylesheet =
    $( "<style>*{ cursor: " + o.cursor + " !important; }</style>" ).appendTo( body );
  }

  if ( o.opacity ) { // opacity option
   if ( this.helper.css( "opacity" ) ) {
    this._storedOpacity = this.helper.css( "opacity" );
   }
   this.helper.css( "opacity", o.opacity );
  }

  if ( o.zIndex ) { // zIndex option
   if ( this.helper.css( "zIndex" ) ) {
    this._storedZIndex = this.helper.css( "zIndex" );
   }
   this.helper.css( "zIndex", o.zIndex );
  }

  //Prepare scrolling
  if ( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
    this.scrollParent[ 0 ].tagName !== "HTML" ) {
   this.overflowOffset = this.scrollParent.offset();
  }

  //Call callbacks
  this._trigger( "start", event, this._uiHash() );

  //Recache the helper size
  if ( !this._preserveHelperProportions ) {
   this._cacheHelperProportions();
  }

  //Post "activate" events to possible containers
  if ( !noActivation ) {
   for ( i = this.containers.length - 1; i >= 0; i-- ) {
    this.containers[ i ]._trigger( "activate", event, this._uiHash( this ) );
   }
  }

  //Prepare possible droppables
  if ( $.ui.ddmanager ) {
   $.ui.ddmanager.current = this;
  }

  if ( $.ui.ddmanager && !o.dropBehaviour ) {
   $.ui.ddmanager.prepareOffsets( this, event );
  }

  this.dragging = true;

  this._addClass( this.helper, "ui-sortable-helper" );

  // Execute the drag once - this causes the helper not to be visiblebefore getting its
  // correct position
  this._mouseDrag( event );
  return true;

 },

 _mouseDrag: function( event ) {
  var i, item, itemElement, intersection,
   o = this.options,
   scrolled = false;

  //Compute the helpers position
  this.position = this._generatePosition( event );
  this.positionAbs = this._convertPositionTo( "absolute" );

  if ( !this.lastPositionAbs ) {
   this.lastPositionAbs = this.positionAbs;
  }

  //Do scrolling
  if ( this.options.scroll ) {
   if ( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
     this.scrollParent[ 0 ].tagName !== "HTML" ) {

    if ( ( this.overflowOffset.top + this.scrollParent[ 0 ].offsetHeight ) -
      event.pageY < o.scrollSensitivity ) {
     this.scrollParent[ 0 ].scrollTop =
      scrolled = this.scrollParent[ 0 ].scrollTop + o.scrollSpeed;
    } else if ( event.pageY - this.overflowOffset.top < o.scrollSensitivity ) {
     this.scrollParent[ 0 ].scrollTop =
      scrolled = this.scrollParent[ 0 ].scrollTop - o.scrollSpeed;
    }

    if ( ( this.overflowOffset.left + this.scrollParent[ 0 ].offsetWidth ) -
      event.pageX < o.scrollSensitivity ) {
     this.scrollParent[ 0 ].scrollLeft = scrolled =
      this.scrollParent[ 0 ].scrollLeft + o.scrollSpeed;
    } else if ( event.pageX - this.overflowOffset.left < o.scrollSensitivity ) {
     this.scrollParent[ 0 ].scrollLeft = scrolled =
      this.scrollParent[ 0 ].scrollLeft - o.scrollSpeed;
    }

   } else {

    if ( event.pageY - this.document.scrollTop() < o.scrollSensitivity ) {
     scrolled = this.document.scrollTop( this.document.scrollTop() - o.scrollSpeed );
    } else if ( this.window.height() - ( event.pageY - this.document.scrollTop() ) <
      o.scrollSensitivity ) {
     scrolled = this.document.scrollTop( this.document.scrollTop() + o.scrollSpeed );
    }

    if ( event.pageX - this.document.scrollLeft() < o.scrollSensitivity ) {
     scrolled = this.document.scrollLeft(
      this.document.scrollLeft() - o.scrollSpeed
     );
    } else if ( this.window.width() - ( event.pageX - this.document.scrollLeft() ) <
      o.scrollSensitivity ) {
     scrolled = this.document.scrollLeft(
      this.document.scrollLeft() + o.scrollSpeed
     );
    }

   }

   if ( scrolled !== false && $.ui.ddmanager && !o.dropBehaviour ) {
    $.ui.ddmanager.prepareOffsets( this, event );
   }
  }

  //Regenerate the absolute position used for position checks
  this.positionAbs = this._convertPositionTo( "absolute" );

  //Set the helper position
  if ( !this.options.axis || this.options.axis !== "y" ) {
   this.helper[ 0 ].style.left = this.position.left + "px";
  }
  if ( !this.options.axis || this.options.axis !== "x" ) {
   this.helper[ 0 ].style.top = this.position.top + "px";
  }

  //Rearrange
  for ( i = this.items.length - 1; i >= 0; i-- ) {

   //Cache variables and intersection, continue if no intersection
   item = this.items[ i ];
   itemElement = item.item[ 0 ];
   intersection = this._intersectsWithPointer( item );
   if ( !intersection ) {
    continue;
   }

   // Only put the placeholder inside the current Container, skip all
   // items from other containers. This works because when moving
   // an item from one container to another the
   // currentContainer is switched before the placeholder is moved.
   //
   // Without this, moving items in "sub-sortables" can cause
   // the placeholder to jitter between the outer and inner container.
   if ( item.instance !== this.currentContainer ) {
    continue;
   }

   // Cannot intersect with itself
   // no useless actions that have been done before
   // no action if the item moved is the parent of the item checked
   if ( itemElement !== this.currentItem[ 0 ] &&
    this.placeholder[ intersection === 1 ? "next" : "prev" ]()[ 0 ] !== itemElement &&
    !$.contains( this.placeholder[ 0 ], itemElement ) &&
    ( this.options.type === "semi-dynamic" ?
     !$.contains( this.element[ 0 ], itemElement ) :
     true
    )
   ) {

    this.direction = intersection === 1 ? "down" : "up";

    if ( this.options.tolerance === "pointer" || this._intersectsWithSides( item ) ) {
     this._rearrange( event, item );
    } else {
     break;
    }

    this._trigger( "change", event, this._uiHash() );
    break;
   }
  }

  //Post events to containers
  this._contactContainers( event );

  //Interconnect with droppables
  if ( $.ui.ddmanager ) {
   $.ui.ddmanager.drag( this, event );
  }

  //Call callbacks
  this._trigger( "sort", event, this._uiHash() );

  this.lastPositionAbs = this.positionAbs;
  return false;

 },

 _mouseStop: function( event, noPropagation ) {

  if ( !event ) {
   return;
  }

  //If we are using droppables, inform the manager about the drop
  if ( $.ui.ddmanager && !this.options.dropBehaviour ) {
   $.ui.ddmanager.drop( this, event );
  }

  if ( this.options.revert ) {
   var that = this,
    cur = this.placeholder.offset(),
    axis = this.options.axis,
    animation = {};

   if ( !axis || axis === "x" ) {
    animation.left = cur.left - this.offset.parent.left - this.margins.left +
     ( this.offsetParent[ 0 ] === this.document[ 0 ].body ?
      0 :
      this.offsetParent[ 0 ].scrollLeft
     );
   }
   if ( !axis || axis === "y" ) {
    animation.top = cur.top - this.offset.parent.top - this.margins.top +
     ( this.offsetParent[ 0 ] === this.document[ 0 ].body ?
      0 :
      this.offsetParent[ 0 ].scrollTop
     );
   }
   this.reverting = true;
   $( this.helper ).animate(
    animation,
    parseInt( this.options.revert, 10 ) || 500,
    function() {
     that._clear( event );
    }
   );
  } else {
   this._clear( event, noPropagation );
  }

  return false;

 },

 cancel: function() {

  if ( this.dragging ) {

   this._mouseUp( new $.Event( "mouseup", { target: null } ) );

   if ( this.options.helper === "original" ) {
    this.currentItem.css( this._storedCSS );
    this._removeClass( this.currentItem, "ui-sortable-helper" );
   } else {
    this.currentItem.show();
   }

   //Post deactivating events to containers
   for ( var i = this.containers.length - 1; i >= 0; i-- ) {
    this.containers[ i ]._trigger( "deactivate", null, this._uiHash( this ) );
    if ( this.containers[ i ].containerCache.over ) {
     this.containers[ i ]._trigger( "out", null, this._uiHash( this ) );
     this.containers[ i ].containerCache.over = 0;
    }
   }

  }

  if ( this.placeholder ) {

   //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately,
   // it unbinds ALL events from the original node!
   if ( this.placeholder[ 0 ].parentNode ) {
    this.placeholder[ 0 ].parentNode.removeChild( this.placeholder[ 0 ] );
   }
   if ( this.options.helper !== "original" && this.helper &&
     this.helper[ 0 ].parentNode ) {
    this.helper.remove();
   }

   $.extend( this, {
    helper: null,
    dragging: false,
    reverting: false,
    _noFinalSort: null
   } );

   if ( this.domPosition.prev ) {
    $( this.domPosition.prev ).after( this.currentItem );
   } else {
    $( this.domPosition.parent ).prepend( this.currentItem );
   }
  }

  return this;

 },

 serialize: function( o ) {

  var items = this._getItemsAsjQuery( o && o.connected ),
   str = [];
  o = o || {};

  $( items ).each( function() {
   var res = ( $( o.item || this ).attr( o.attribute || "id" ) || "" )
    .match( o.expression || ( /(.+)[\-=_](.+)/ ) );
   if ( res ) {
    str.push(
     ( o.key || res[ 1 ] + "[]" ) +
     "=" + ( o.key && o.expression ? res[ 1 ] : res[ 2 ] ) );
   }
  } );

  if ( !str.length && o.key ) {
   str.push( o.key + "=" );
  }

  return str.join( "&" );

 },

 toArray: function( o ) {

  var items = this._getItemsAsjQuery( o && o.connected ),
   ret = [];

  o = o || {};

  items.each( function() {
   ret.push( $( o.item || this ).attr( o.attribute || "id" ) || "" );
  } );
  return ret;

 },

 /* Be careful with the following core functions */
 _intersectsWith: function( item ) {

  var x1 = this.positionAbs.left,
   x2 = x1 + this.helperProportions.width,
   y1 = this.positionAbs.top,
   y2 = y1 + this.helperProportions.height,
   l = item.left,
   r = l + item.width,
   t = item.top,
   b = t + item.height,
   dyClick = this.offset.click.top,
   dxClick = this.offset.click.left,
   isOverElementHeight = ( this.options.axis === "x" ) || ( ( y1 + dyClick ) > t &&
    ( y1 + dyClick ) < b ),
   isOverElementWidth = ( this.options.axis === "y" ) || ( ( x1 + dxClick ) > l &&
    ( x1 + dxClick ) < r ),
   isOverElement = isOverElementHeight && isOverElementWidth;

  if ( this.options.tolerance === "pointer" ||
   this.options.forcePointerForContainers ||
   ( this.options.tolerance !== "pointer" &&
    this.helperProportions[ this.floating ? "width" : "height" ] >
    item[ this.floating ? "width" : "height" ] )
  ) {
   return isOverElement;
  } else {

   return ( l < x1 + ( this.helperProportions.width / 2 ) && // Right Half
    x2 - ( this.helperProportions.width / 2 ) < r && // Left Half
    t < y1 + ( this.helperProportions.height / 2 ) && // Bottom Half
    y2 - ( this.helperProportions.height / 2 ) < b ); // Top Half

  }
 },

 _intersectsWithPointer: function( item ) {
  var verticalDirection, horizontalDirection,
   isOverElementHeight = ( this.options.axis === "x" ) ||
    this._isOverAxis(
     this.positionAbs.top + this.offset.click.top, item.top, item.height ),
   isOverElementWidth = ( this.options.axis === "y" ) ||
    this._isOverAxis(
     this.positionAbs.left + this.offset.click.left, item.left, item.width ),
   isOverElement = isOverElementHeight && isOverElementWidth;

  if ( !isOverElement ) {
   return false;
  }

  verticalDirection = this._getDragVerticalDirection();
  horizontalDirection = this._getDragHorizontalDirection();

  return this.floating ?
   ( ( horizontalDirection === "right" || verticalDirection === "down" ) ? 2 : 1 )
   : ( verticalDirection && ( verticalDirection === "down" ? 2 : 1 ) );

 },

 _intersectsWithSides: function( item ) {

  var isOverBottomHalf = this._isOverAxis( this.positionAbs.top +
    this.offset.click.top, item.top + ( item.height / 2 ), item.height ),
   isOverRightHalf = this._isOverAxis( this.positionAbs.left +
    this.offset.click.left, item.left + ( item.width / 2 ), item.width ),
   verticalDirection = this._getDragVerticalDirection(),
   horizontalDirection = this._getDragHorizontalDirection();

  if ( this.floating && horizontalDirection ) {
   return ( ( horizontalDirection === "right" && isOverRightHalf ) ||
    ( horizontalDirection === "left" && !isOverRightHalf ) );
  } else {
   return verticalDirection && ( ( verticalDirection === "down" && isOverBottomHalf ) ||
    ( verticalDirection === "up" && !isOverBottomHalf ) );
  }

 },

 _getDragVerticalDirection: function() {
  var delta = this.positionAbs.top - this.lastPositionAbs.top;
  return delta !== 0 && ( delta > 0 ? "down" : "up" );
 },

 _getDragHorizontalDirection: function() {
  var delta = this.positionAbs.left - this.lastPositionAbs.left;
  return delta !== 0 && ( delta > 0 ? "right" : "left" );
 },

 refresh: function( event ) {
  this._refreshItems( event );
  this._setHandleClassName();
  this.refreshPositions();
  return this;
 },

 _connectWith: function() {
  var options = this.options;
  return options.connectWith.constructor === String ?
   [ options.connectWith ] :
   options.connectWith;
 },

 _getItemsAsjQuery: function( connected ) {

  var i, j, cur, inst,
   items = [],
   queries = [],
   connectWith = this._connectWith();

  if ( connectWith && connected ) {
   for ( i = connectWith.length - 1; i >= 0; i-- ) {
    cur = $( connectWith[ i ], this.document[ 0 ] );
    for ( j = cur.length - 1; j >= 0; j-- ) {
     inst = $.data( cur[ j ], this.widgetFullName );
     if ( inst && inst !== this && !inst.options.disabled ) {
      queries.push( [ $.isFunction( inst.options.items ) ?
       inst.options.items.call( inst.element ) :
       $( inst.options.items, inst.element )
        .not( ".ui-sortable-helper" )
        .not( ".ui-sortable-placeholder" ), inst ] );
     }
    }
   }
  }

  queries.push( [ $.isFunction( this.options.items ) ?
   this.options.items
    .call( this.element, null, { options: this.options, item: this.currentItem } ) :
   $( this.options.items, this.element )
    .not( ".ui-sortable-helper" )
    .not( ".ui-sortable-placeholder" ), this ] );

  function addItems() {
   items.push( this );
  }
  for ( i = queries.length - 1; i >= 0; i-- ) {
   queries[ i ][ 0 ].each( addItems );
  }

  return $( items );

 },

 _removeCurrentsFromItems: function() {

  var list = this.currentItem.find( ":data(" + this.widgetName + "-item)" );

  this.items = $.grep( this.items, function( item ) {
   for ( var j = 0; j < list.length; j++ ) {
    if ( list[ j ] === item.item[ 0 ] ) {
     return false;
    }
   }
   return true;
  } );

 },

 _refreshItems: function( event ) {

  this.items = [];
  this.containers = [ this ];

  var i, j, cur, inst, targetData, _queries, item, queriesLength,
   items = this.items,
   queries = [ [ $.isFunction( this.options.items ) ?
    this.options.items.call( this.element[ 0 ], event, { item: this.currentItem } ) :
    $( this.options.items, this.element ), this ] ],
   connectWith = this._connectWith();

  //Shouldn't be run the first time through due to massive slow-down
  if ( connectWith && this.ready ) {
   for ( i = connectWith.length - 1; i >= 0; i-- ) {
    cur = $( connectWith[ i ], this.document[ 0 ] );
    for ( j = cur.length - 1; j >= 0; j-- ) {
     inst = $.data( cur[ j ], this.widgetFullName );
     if ( inst && inst !== this && !inst.options.disabled ) {
      queries.push( [ $.isFunction( inst.options.items ) ?
       inst.options.items
        .call( inst.element[ 0 ], event, { item: this.currentItem } ) :
       $( inst.options.items, inst.element ), inst ] );
      this.containers.push( inst );
     }
    }
   }
  }

  for ( i = queries.length - 1; i >= 0; i-- ) {
   targetData = queries[ i ][ 1 ];
   _queries = queries[ i ][ 0 ];

   for ( j = 0, queriesLength = _queries.length; j < queriesLength; j++ ) {
    item = $( _queries[ j ] );

    // Data for target checking (mouse manager)
    item.data( this.widgetName + "-item", targetData );

    items.push( {
     item: item,
     instance: targetData,
     width: 0, height: 0,
     left: 0, top: 0
    } );
   }
  }

 },

 refreshPositions: function( fast ) {

  // Determine whether items are being displayed horizontally
  this.floating = this.items.length ?
   this.options.axis === "x" || this._isFloating( this.items[ 0 ].item ) :
   false;

  //This has to be redone because due to the item being moved out/into the offsetParent,
  // the offsetParent's position will change
  if ( this.offsetParent && this.helper ) {
   this.offset.parent = this._getParentOffset();
  }

  var i, item, t, p;

  for ( i = this.items.length - 1; i >= 0; i-- ) {
   item = this.items[ i ];

   //We ignore calculating positions of all connected containers when we're not over them
   if ( item.instance !== this.currentContainer && this.currentContainer &&
     item.item[ 0 ] !== this.currentItem[ 0 ] ) {
    continue;
   }

   t = this.options.toleranceElement ?
    $( this.options.toleranceElement, item.item ) :
    item.item;

   if ( !fast ) {
    item.width = t.outerWidth();
    item.height = t.outerHeight();
   }

   p = t.offset();
   item.left = p.left;
   item.top = p.top;
  }

  if ( this.options.custom && this.options.custom.refreshContainers ) {
   this.options.custom.refreshContainers.call( this );
  } else {
   for ( i = this.containers.length - 1; i >= 0; i-- ) {
    p = this.containers[ i ].element.offset();
    this.containers[ i ].containerCache.left = p.left;
    this.containers[ i ].containerCache.top = p.top;
    this.containers[ i ].containerCache.width =
     this.containers[ i ].element.outerWidth();
    this.containers[ i ].containerCache.height =
     this.containers[ i ].element.outerHeight();
   }
  }

  return this;
 },

 _createPlaceholder: function( that ) {
  that = that || this;
  var className,
   o = that.options;

  if ( !o.placeholder || o.placeholder.constructor === String ) {
   className = o.placeholder;
   o.placeholder = {
    element: function() {

     var nodeName = that.currentItem[ 0 ].nodeName.toLowerCase(),
      element = $( "<" + nodeName + ">", that.document[ 0 ] );

      that._addClass( element, "ui-sortable-placeholder",
        className || that.currentItem[ 0 ].className )
       ._removeClass( element, "ui-sortable-helper" );

     if ( nodeName === "tbody" ) {
      that._createTrPlaceholder(
       that.currentItem.find( "tr" ).eq( 0 ),
       $( "<tr>", that.document[ 0 ] ).appendTo( element )
      );
     } else if ( nodeName === "tr" ) {
      that._createTrPlaceholder( that.currentItem, element );
     } else if ( nodeName === "img" ) {
      element.attr( "src", that.currentItem.attr( "src" ) );
     }

     if ( !className ) {
      element.css( "visibility", "hidden" );
     }

     return element;
    },
    update: function( container, p ) {

     // 1. If a className is set as 'placeholder option, we don't force sizes -
     // the class is responsible for that
     // 2. The option 'forcePlaceholderSize can be enabled to force it even if a
     // class name is specified
     if ( className && !o.forcePlaceholderSize ) {
      return;
     }

     //If the element doesn't have a actual height by itself (without styles coming
     // from a stylesheet), it receives the inline height from the dragged item
     if ( !p.height() ) {
      p.height(
       that.currentItem.innerHeight() -
       parseInt( that.currentItem.css( "paddingTop" ) || 0, 10 ) -
       parseInt( that.currentItem.css( "paddingBottom" ) || 0, 10 ) );
     }
     if ( !p.width() ) {
      p.width(
       that.currentItem.innerWidth() -
       parseInt( that.currentItem.css( "paddingLeft" ) || 0, 10 ) -
       parseInt( that.currentItem.css( "paddingRight" ) || 0, 10 ) );
     }
    }
   };
  }

  //Create the placeholder
  that.placeholder = $( o.placeholder.element.call( that.element, that.currentItem ) );

  //Append it after the actual current item
  that.currentItem.after( that.placeholder );

  //Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
  o.placeholder.update( that, that.placeholder );

 },

 _createTrPlaceholder: function( sourceTr, targetTr ) {
  var that = this;

  sourceTr.children().each( function() {
   $( "<td>&#160;</td>", that.document[ 0 ] )
    .attr( "colspan", $( this ).attr( "colspan" ) || 1 )
    .appendTo( targetTr );
  } );
 },

 _contactContainers: function( event ) {
  var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, cur, nearBottom,
   floating, axis,
   innermostContainer = null,
   innermostIndex = null;

  // Get innermost container that intersects with item
  for ( i = this.containers.length - 1; i >= 0; i-- ) {

   // Never consider a container that's located within the item itself
   if ( $.contains( this.currentItem[ 0 ], this.containers[ i ].element[ 0 ] ) ) {
    continue;
   }

   if ( this._intersectsWith( this.containers[ i ].containerCache ) ) {

    // If we've already found a container and it's more "inner" than this, then continue
    if ( innermostContainer &&
      $.contains(
       this.containers[ i ].element[ 0 ],
       innermostContainer.element[ 0 ] ) ) {
     continue;
    }

    innermostContainer = this.containers[ i ];
    innermostIndex = i;

   } else {

    // container doesn't intersect. trigger "out" event if necessary
    if ( this.containers[ i ].containerCache.over ) {
     this.containers[ i ]._trigger( "out", event, this._uiHash( this ) );
     this.containers[ i ].containerCache.over = 0;
    }
   }

  }

  // If no intersecting containers found, return
  if ( !innermostContainer ) {
   return;
  }

  // Move the item into the container if it's not there already
  if ( this.containers.length === 1 ) {
   if ( !this.containers[ innermostIndex ].containerCache.over ) {
    this.containers[ innermostIndex ]._trigger( "over", event, this._uiHash( this ) );
    this.containers[ innermostIndex ].containerCache.over = 1;
   }
  } else {

   // When entering a new container, we will find the item with the least distance and
   // append our item near it
   dist = 10000;
   itemWithLeastDistance = null;
   floating = innermostContainer.floating || this._isFloating( this.currentItem );
   posProperty = floating ? "left" : "top";
   sizeProperty = floating ? "width" : "height";
   axis = floating ? "pageX" : "pageY";

   for ( j = this.items.length - 1; j >= 0; j-- ) {
    if ( !$.contains(
      this.containers[ innermostIndex ].element[ 0 ], this.items[ j ].item[ 0 ] )
    ) {
     continue;
    }
    if ( this.items[ j ].item[ 0 ] === this.currentItem[ 0 ] ) {
     continue;
    }

    cur = this.items[ j ].item.offset()[ posProperty ];
    nearBottom = false;
    if ( event[ axis ] - cur > this.items[ j ][ sizeProperty ] / 2 ) {
     nearBottom = true;
    }

    if ( Math.abs( event[ axis ] - cur ) < dist ) {
     dist = Math.abs( event[ axis ] - cur );
     itemWithLeastDistance = this.items[ j ];
     this.direction = nearBottom ? "up" : "down";
    }
   }

   //Check if dropOnEmpty is enabled
   if ( !itemWithLeastDistance && !this.options.dropOnEmpty ) {
    return;
   }

   if ( this.currentContainer === this.containers[ innermostIndex ] ) {
    if ( !this.currentContainer.containerCache.over ) {
     this.containers[ innermostIndex ]._trigger( "over", event, this._uiHash() );
     this.currentContainer.containerCache.over = 1;
    }
    return;
   }

   itemWithLeastDistance ?
    this._rearrange( event, itemWithLeastDistance, null, true ) :
    this._rearrange( event, null, this.containers[ innermostIndex ].element, true );
   this._trigger( "change", event, this._uiHash() );
   this.containers[ innermostIndex ]._trigger( "change", event, this._uiHash( this ) );
   this.currentContainer = this.containers[ innermostIndex ];

   //Update the placeholder
   this.options.placeholder.update( this.currentContainer, this.placeholder );

   this.containers[ innermostIndex ]._trigger( "over", event, this._uiHash( this ) );
   this.containers[ innermostIndex ].containerCache.over = 1;
  }

 },

 _createHelper: function( event ) {

  var o = this.options,
   helper = $.isFunction( o.helper ) ?
    $( o.helper.apply( this.element[ 0 ], [ event, this.currentItem ] ) ) :
    ( o.helper === "clone" ? this.currentItem.clone() : this.currentItem );

  //Add the helper to the DOM if that didn't happen already
  if ( !helper.parents( "body" ).length ) {
   $( o.appendTo !== "parent" ?
    o.appendTo :
    this.currentItem[ 0 ].parentNode )[ 0 ].appendChild( helper[ 0 ] );
  }

  if ( helper[ 0 ] === this.currentItem[ 0 ] ) {
   this._storedCSS = {
    width: this.currentItem[ 0 ].style.width,
    height: this.currentItem[ 0 ].style.height,
    position: this.currentItem.css( "position" ),
    top: this.currentItem.css( "top" ),
    left: this.currentItem.css( "left" )
   };
  }

  if ( !helper[ 0 ].style.width || o.forceHelperSize ) {
   helper.width( this.currentItem.width() );
  }
  if ( !helper[ 0 ].style.height || o.forceHelperSize ) {
   helper.height( this.currentItem.height() );
  }

  return helper;

 },

 _adjustOffsetFromHelper: function( obj ) {
  if ( typeof obj === "string" ) {
   obj = obj.split( " " );
  }
  if ( $.isArray( obj ) ) {
   obj = { left: +obj[ 0 ], top: +obj[ 1 ] || 0 };
  }
  if ( "left" in obj ) {
   this.offset.click.left = obj.left + this.margins.left;
  }
  if ( "right" in obj ) {
   this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
  }
  if ( "top" in obj ) {
   this.offset.click.top = obj.top + this.margins.top;
  }
  if ( "bottom" in obj ) {
   this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
  }
 },

 _getParentOffset: function() {

  //Get the offsetParent and cache its position
  this.offsetParent = this.helper.offsetParent();
  var po = this.offsetParent.offset();

  // This is a special case where we need to modify a offset calculated on start, since the
  // following happened:
  // 1. The position of the helper is absolute, so it's position is calculated based on the
  // next positioned parent
  // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
  // the document, which means that the scroll is included in the initial calculation of the
  // offset of the parent, and never recalculated upon drag
  if ( this.cssPosition === "absolute" && this.scrollParent[ 0 ] !== this.document[ 0 ] &&
    $.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) {
   po.left += this.scrollParent.scrollLeft();
   po.top += this.scrollParent.scrollTop();
  }

  // This needs to be actually done for all browsers, since pageX/pageY includes this
  // information with an ugly IE fix
  if ( this.offsetParent[ 0 ] === this.document[ 0 ].body ||
    ( this.offsetParent[ 0 ].tagName &&
    this.offsetParent[ 0 ].tagName.toLowerCase() === "html" && $.ui.ie ) ) {
   po = { top: 0, left: 0 };
  }

  return {
   top: po.top + ( parseInt( this.offsetParent.css( "borderTopWidth" ), 10 ) || 0 ),
   left: po.left + ( parseInt( this.offsetParent.css( "borderLeftWidth" ), 10 ) || 0 )
  };

 },

 _getRelativeOffset: function() {

  if ( this.cssPosition === "relative" ) {
   var p = this.currentItem.position();
   return {
    top: p.top - ( parseInt( this.helper.css( "top" ), 10 ) || 0 ) +
     this.scrollParent.scrollTop(),
    left: p.left - ( parseInt( this.helper.css( "left" ), 10 ) || 0 ) +
     this.scrollParent.scrollLeft()
   };
  } else {
   return { top: 0, left: 0 };
  }

 },

 _cacheMargins: function() {
  this.margins = {
   left: ( parseInt( this.currentItem.css( "marginLeft" ), 10 ) || 0 ),
   top: ( parseInt( this.currentItem.css( "marginTop" ), 10 ) || 0 )
  };
 },

 _cacheHelperProportions: function() {
  this.helperProportions = {
   width: this.helper.outerWidth(),
   height: this.helper.outerHeight()
  };
 },

 _setContainment: function() {

  var ce, co, over,
   o = this.options;
  if ( o.containment === "parent" ) {
   o.containment = this.helper[ 0 ].parentNode;
  }
  if ( o.containment === "document" || o.containment === "window" ) {
   this.containment = [
    0 - this.offset.relative.left - this.offset.parent.left,
    0 - this.offset.relative.top - this.offset.parent.top,
    o.containment === "document" ?
     this.document.width() :
     this.window.width() - this.helperProportions.width - this.margins.left,
    ( o.containment === "document" ?
     ( this.document.height() || document.body.parentNode.scrollHeight ) :
     this.window.height() || this.document[ 0 ].body.parentNode.scrollHeight
    ) - this.helperProportions.height - this.margins.top
   ];
  }

  if ( !( /^(document|window|parent)$/ ).test( o.containment ) ) {
   ce = $( o.containment )[ 0 ];
   co = $( o.containment ).offset();
   over = ( $( ce ).css( "overflow" ) !== "hidden" );

   this.containment = [
    co.left + ( parseInt( $( ce ).css( "borderLeftWidth" ), 10 ) || 0 ) +
     ( parseInt( $( ce ).css( "paddingLeft" ), 10 ) || 0 ) - this.margins.left,
    co.top + ( parseInt( $( ce ).css( "borderTopWidth" ), 10 ) || 0 ) +
     ( parseInt( $( ce ).css( "paddingTop" ), 10 ) || 0 ) - this.margins.top,
    co.left + ( over ? Math.max( ce.scrollWidth, ce.offsetWidth ) : ce.offsetWidth ) -
     ( parseInt( $( ce ).css( "borderLeftWidth" ), 10 ) || 0 ) -
     ( parseInt( $( ce ).css( "paddingRight" ), 10 ) || 0 ) -
     this.helperProportions.width - this.margins.left,
    co.top + ( over ? Math.max( ce.scrollHeight, ce.offsetHeight ) : ce.offsetHeight ) -
     ( parseInt( $( ce ).css( "borderTopWidth" ), 10 ) || 0 ) -
     ( parseInt( $( ce ).css( "paddingBottom" ), 10 ) || 0 ) -
     this.helperProportions.height - this.margins.top
   ];
  }

 },

 _convertPositionTo: function( d, pos ) {

  if ( !pos ) {
   pos = this.position;
  }
  var mod = d === "absolute" ? 1 : -1,
   scroll = this.cssPosition === "absolute" &&
    !( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
    $.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) ?
     this.offsetParent :
     this.scrollParent,
   scrollIsRootNode = ( /(html|body)/i ).test( scroll[ 0 ].tagName );

  return {
   top: (

    // The absolute mouse position
    pos.top +

    // Only for relative positioned nodes: Relative offset from element to offset parent
    this.offset.relative.top * mod +

    // The offsetParent's offset without borders (offset + border)
    this.offset.parent.top * mod -
    ( ( this.cssPosition === "fixed" ?
     -this.scrollParent.scrollTop() :
     ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) * mod )
   ),
   left: (

    // The absolute mouse position
    pos.left +

    // Only for relative positioned nodes: Relative offset from element to offset parent
    this.offset.relative.left * mod +

    // The offsetParent's offset without borders (offset + border)
    this.offset.parent.left * mod -
    ( ( this.cssPosition === "fixed" ?
     -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 :
     scroll.scrollLeft() ) * mod )
   )
  };

 },

 _generatePosition: function( event ) {

  var top, left,
   o = this.options,
   pageX = event.pageX,
   pageY = event.pageY,
   scroll = this.cssPosition === "absolute" &&
    !( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
    $.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) ?
     this.offsetParent :
     this.scrollParent,
    scrollIsRootNode = ( /(html|body)/i ).test( scroll[ 0 ].tagName );

  // This is another very weird special case that only happens for relative elements:
  // 1. If the css position is relative
  // 2. and the scroll parent is the document or similar to the offset parent
  // we have to refresh the relative offset during the scroll so there are no jumps
  if ( this.cssPosition === "relative" && !( this.scrollParent[ 0 ] !== this.document[ 0 ] &&
    this.scrollParent[ 0 ] !== this.offsetParent[ 0 ] ) ) {
   this.offset.relative = this._getRelativeOffset();
  }

  /*
   * - Position constraining -
   * Constrain the position to a mix of grid, containment.
   */

  if ( this.originalPosition ) { //If we are not dragging yet, we won't check for options

   if ( this.containment ) {
    if ( event.pageX - this.offset.click.left < this.containment[ 0 ] ) {
     pageX = this.containment[ 0 ] + this.offset.click.left;
    }
    if ( event.pageY - this.offset.click.top < this.containment[ 1 ] ) {
     pageY = this.containment[ 1 ] + this.offset.click.top;
    }
    if ( event.pageX - this.offset.click.left > this.containment[ 2 ] ) {
     pageX = this.containment[ 2 ] + this.offset.click.left;
    }
    if ( event.pageY - this.offset.click.top > this.containment[ 3 ] ) {
     pageY = this.containment[ 3 ] + this.offset.click.top;
    }
   }

   if ( o.grid ) {
    top = this.originalPageY + Math.round( ( pageY - this.originalPageY ) /
     o.grid[ 1 ] ) * o.grid[ 1 ];
    pageY = this.containment ?
     ( ( top - this.offset.click.top >= this.containment[ 1 ] &&
      top - this.offset.click.top <= this.containment[ 3 ] ) ?
       top :
       ( ( top - this.offset.click.top >= this.containment[ 1 ] ) ?
        top - o.grid[ 1 ] : top + o.grid[ 1 ] ) ) :
        top;

    left = this.originalPageX + Math.round( ( pageX - this.originalPageX ) /
     o.grid[ 0 ] ) * o.grid[ 0 ];
    pageX = this.containment ?
     ( ( left - this.offset.click.left >= this.containment[ 0 ] &&
      left - this.offset.click.left <= this.containment[ 2 ] ) ?
       left :
       ( ( left - this.offset.click.left >= this.containment[ 0 ] ) ?
        left - o.grid[ 0 ] : left + o.grid[ 0 ] ) ) :
        left;
   }

  }

  return {
   top: (

    // The absolute mouse position
    pageY -

    // Click offset (relative to the element)
    this.offset.click.top -

    // Only for relative positioned nodes: Relative offset from element to offset parent
    this.offset.relative.top -

    // The offsetParent's offset without borders (offset + border)
    this.offset.parent.top +
    ( ( this.cssPosition === "fixed" ?
     -this.scrollParent.scrollTop() :
     ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) )
   ),
   left: (

    // The absolute mouse position
    pageX -

    // Click offset (relative to the element)
    this.offset.click.left -

    // Only for relative positioned nodes: Relative offset from element to offset parent
    this.offset.relative.left -

    // The offsetParent's offset without borders (offset + border)
    this.offset.parent.left +
    ( ( this.cssPosition === "fixed" ?
     -this.scrollParent.scrollLeft() :
     scrollIsRootNode ? 0 : scroll.scrollLeft() ) )
   )
  };

 },

 _rearrange: function( event, i, a, hardRefresh ) {

  a ? a[ 0 ].appendChild( this.placeholder[ 0 ] ) :
   i.item[ 0 ].parentNode.insertBefore( this.placeholder[ 0 ],
    ( this.direction === "down" ? i.item[ 0 ] : i.item[ 0 ].nextSibling ) );

  //Various things done here to improve the performance:
  // 1. we create a setTimeout, that calls refreshPositions
  // 2. on the instance, we have a counter variable, that get's higher after every append
  // 3. on the local scope, we copy the counter variable, and check in the timeout,
  // if it's still the same
  // 4. this lets only the last addition to the timeout stack through
  this.counter = this.counter ? ++this.counter : 1;
  var counter = this.counter;

  this._delay( function() {
   if ( counter === this.counter ) {

    //Precompute after each DOM insertion, NOT on mousemove
    this.refreshPositions( !hardRefresh );
   }
  } );

 },

 _clear: function( event, noPropagation ) {

  this.reverting = false;

  // We delay all events that have to be triggered to after the point where the placeholder
  // has been removed and everything else normalized again
  var i,
   delayedTriggers = [];

  // We first have to update the dom position of the actual currentItem
  // Note: don't do it if the current item is already removed (by a user), or it gets
  // reappended (see #4088)
  if ( !this._noFinalSort && this.currentItem.parent().length ) {
   this.placeholder.before( this.currentItem );
  }
  this._noFinalSort = null;

  if ( this.helper[ 0 ] === this.currentItem[ 0 ] ) {
   for ( i in this._storedCSS ) {
    if ( this._storedCSS[ i ] === "auto" || this._storedCSS[ i ] === "static" ) {
     this._storedCSS[ i ] = "";
    }
   }
   this.currentItem.css( this._storedCSS );
   this._removeClass( this.currentItem, "ui-sortable-helper" );
  } else {
   this.currentItem.show();
  }

  if ( this.fromOutside && !noPropagation ) {
   delayedTriggers.push( function( event ) {
    this._trigger( "receive", event, this._uiHash( this.fromOutside ) );
   } );
  }
  if ( ( this.fromOutside ||
    this.domPosition.prev !==
    this.currentItem.prev().not( ".ui-sortable-helper" )[ 0 ] ||
    this.domPosition.parent !== this.currentItem.parent()[ 0 ] ) && !noPropagation ) {

   // Trigger update callback if the DOM position has changed
   delayedTriggers.push( function( event ) {
    this._trigger( "update", event, this._uiHash() );
   } );
  }

  // Check if the items Container has Changed and trigger appropriate
  // events.
  if ( this !== this.currentContainer ) {
   if ( !noPropagation ) {
    delayedTriggers.push( function( event ) {
     this._trigger( "remove", event, this._uiHash() );
    } );
    delayedTriggers.push( ( function( c ) {
     return function( event ) {
      c._trigger( "receive", event, this._uiHash( this ) );
     };
    } ).call( this, this.currentContainer ) );
    delayedTriggers.push( ( function( c ) {
     return function( event ) {
      c._trigger( "update", event, this._uiHash( this ) );
     };
    } ).call( this, this.currentContainer ) );
   }
  }

  //Post events to containers
  function delayEvent( type, instance, container ) {
   return function( event ) {
    container._trigger( type, event, instance._uiHash( instance ) );
   };
  }
  for ( i = this.containers.length - 1; i >= 0; i-- ) {
   if ( !noPropagation ) {
    delayedTriggers.push( delayEvent( "deactivate", this, this.containers[ i ] ) );
   }
   if ( this.containers[ i ].containerCache.over ) {
    delayedTriggers.push( delayEvent( "out", this, this.containers[ i ] ) );
    this.containers[ i ].containerCache.over = 0;
   }
  }

  //Do what was originally in plugins
  if ( this.storedCursor ) {
   this.document.find( "body" ).css( "cursor", this.storedCursor );
   this.storedStylesheet.remove();
  }
  if ( this._storedOpacity ) {
   this.helper.css( "opacity", this._storedOpacity );
  }
  if ( this._storedZIndex ) {
   this.helper.css( "zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex );
  }

  this.dragging = false;

  if ( !noPropagation ) {
   this._trigger( "beforeStop", event, this._uiHash() );
  }

  //$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately,
  // it unbinds ALL events from the original node!
  this.placeholder[ 0 ].parentNode.removeChild( this.placeholder[ 0 ] );

  if ( !this.cancelHelperRemoval ) {
   if ( this.helper[ 0 ] !== this.currentItem[ 0 ] ) {
    this.helper.remove();
   }
   this.helper = null;
  }

  if ( !noPropagation ) {
   for ( i = 0; i < delayedTriggers.length; i++ ) {

    // Trigger all delayed events
    delayedTriggers[ i ].call( this, event );
   }
   this._trigger( "stop", event, this._uiHash() );
  }

  this.fromOutside = false;
  return !this.cancelHelperRemoval;

 },

 _trigger: function() {
  if ( $.Widget.prototype._trigger.apply( this, arguments ) === false ) {
   this.cancel();
  }
 },

 _uiHash: function( _inst ) {
  var inst = _inst || this;
  return {
   helper: inst.helper,
   placeholder: inst.placeholder || $( [] ),
   position: inst.position,
   originalPosition: inst.originalPosition,
   offset: inst.positionAbs,
   item: inst.currentItem,
   sender: _inst ? _inst.element : null
  };
 }

} );


/*!
 * jQuery UI Spinner 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Spinner
//>>group: Widgets
//>>description: Displays buttons to easily input numbers via the keyboard or mouse.
//>>docs: http://api.jqueryui.com/spinner/
//>>demos: http://jqueryui.com/spinner/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/spinner.css
//>>css.theme: ../../themes/base/theme.css



function spinnerModifer( fn ) {
 return function() {
  var previous = this.element.val();
  fn.apply( this, arguments );
  this._refresh();
  if ( previous !== this.element.val() ) {
   this._trigger( "change" );
  }
 };
}

$.widget( "ui.spinner", {
 version: "1.12.1",
 defaultElement: "<input>",
 widgetEventPrefix: "spin",
 options: {
  classes: {
   "ui-spinner": "ui-corner-all",
   "ui-spinner-down": "ui-corner-br",
   "ui-spinner-up": "ui-corner-tr"
  },
  culture: null,
  icons: {
   down: "ui-icon-triangle-1-s",
   up: "ui-icon-triangle-1-n"
  },
  incremental: true,
  max: null,
  min: null,
  numberFormat: null,
  page: 10,
  step: 1,

  change: null,
  spin: null,
  start: null,
  stop: null
 },

 _create: function() {

  // handle string values that need to be parsed
  this._setOption( "max", this.options.max );
  this._setOption( "min", this.options.min );
  this._setOption( "step", this.options.step );

  // Only format if there is a value, prevents the field from being marked
  // as invalid in Firefox, see #9573.
  if ( this.value() !== "" ) {

   // Format the value, but don't constrain.
   this._value( this.element.val(), true );
  }

  this._draw();
  this._on( this._events );
  this._refresh();

  // Turning off autocomplete prevents the browser from remembering the
  // value when navigating through history, so we re-enable autocomplete
  // if the page is unloaded before the widget is destroyed. #7790
  this._on( this.window, {
   beforeunload: function() {
    this.element.removeAttr( "autocomplete" );
   }
  } );
 },

 _getCreateOptions: function() {
  var options = this._super();
  var element = this.element;

  $.each( [ "min", "max", "step" ], function( i, option ) {
   var value = element.attr( option );
   if ( value != null && value.length ) {
    options[ option ] = value;
   }
  } );

  return options;
 },

 _events: {
  keydown: function( event ) {
   if ( this._start( event ) && this._keydown( event ) ) {
    event.preventDefault();
   }
  },
  keyup: "_stop",
  focus: function() {
   this.previous = this.element.val();
  },
  blur: function( event ) {
   if ( this.cancelBlur ) {
    delete this.cancelBlur;
    return;
   }

   this._stop();
   this._refresh();
   if ( this.previous !== this.element.val() ) {
    this._trigger( "change", event );
   }
  },
  mousewheel: function( event, delta ) {
   if ( !delta ) {
    return;
   }
   if ( !this.spinning && !this._start( event ) ) {
    return false;
   }

   this._spin( ( delta > 0 ? 1 : -1 ) * this.options.step, event );
   clearTimeout( this.mousewheelTimer );
   this.mousewheelTimer = this._delay( function() {
    if ( this.spinning ) {
     this._stop( event );
    }
   }, 100 );
   event.preventDefault();
  },
  "mousedown .ui-spinner-button": function( event ) {
   var previous;

   // We never want the buttons to have focus; whenever the user is
   // interacting with the spinner, the focus should be on the input.
   // If the input is focused then this.previous is properly set from
   // when the input first received focus. If the input is not focused
   // then we need to set this.previous based on the value before spinning.
   previous = this.element[ 0 ] === $.ui.safeActiveElement( this.document[ 0 ] ) ?
    this.previous : this.element.val();
   function checkFocus() {
    var isActive = this.element[ 0 ] === $.ui.safeActiveElement( this.document[ 0 ] );
    if ( !isActive ) {
     this.element.trigger( "focus" );
     this.previous = previous;

     // support: IE
     // IE sets focus asynchronously, so we need to check if focus
     // moved off of the input because the user clicked on the button.
     this._delay( function() {
      this.previous = previous;
     } );
    }
   }

   // Ensure focus is on (or stays on) the text field
   event.preventDefault();
   checkFocus.call( this );

   // Support: IE
   // IE doesn't prevent moving focus even with event.preventDefault()
   // so we set a flag to know when we should ignore the blur event
   // and check (again) if focus moved off of the input.
   this.cancelBlur = true;
   this._delay( function() {
    delete this.cancelBlur;
    checkFocus.call( this );
   } );

   if ( this._start( event ) === false ) {
    return;
   }

   this._repeat( null, $( event.currentTarget )
    .hasClass( "ui-spinner-up" ) ? 1 : -1, event );
  },
  "mouseup .ui-spinner-button": "_stop",
  "mouseenter .ui-spinner-button": function( event ) {

   // button will add ui-state-active if mouse was down while mouseleave and kept down
   if ( !$( event.currentTarget ).hasClass( "ui-state-active" ) ) {
    return;
   }

   if ( this._start( event ) === false ) {
    return false;
   }
   this._repeat( null, $( event.currentTarget )
    .hasClass( "ui-spinner-up" ) ? 1 : -1, event );
  },

  // TODO: do we really want to consider this a stop?
  // shouldn't we just stop the repeater and wait until mouseup before
  // we trigger the stop event?
  "mouseleave .ui-spinner-button": "_stop"
 },

 // Support mobile enhanced option and make backcompat more sane
 _enhance: function() {
  this.uiSpinner = this.element
   .attr( "autocomplete", "off" )
   .wrap( "<span>" )
   .parent()

    // Add buttons
    .append(
     "<a></a><a></a>"
    );
 },

 _draw: function() {
  this._enhance();

  this._addClass( this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content" );
  this._addClass( "ui-spinner-input" );

  this.element.attr( "role", "spinbutton" );

  // Button bindings
  this.buttons = this.uiSpinner.children( "a" )
   .attr( "tabIndex", -1 )
   .attr( "aria-hidden", true )
   .button( {
    classes: {
     "ui-button": ""
    }
   } );

  // TODO: Right now button does not support classes this is already updated in button PR
  this._removeClass( this.buttons, "ui-corner-all" );

  this._addClass( this.buttons.first(), "ui-spinner-button ui-spinner-up" );
  this._addClass( this.buttons.last(), "ui-spinner-button ui-spinner-down" );
  this.buttons.first().button( {
   "icon": this.options.icons.up,
   "showLabel": false
  } );
  this.buttons.last().button( {
   "icon": this.options.icons.down,
   "showLabel": false
  } );

  // IE 6 doesn't understand height: 50% for the buttons
  // unless the wrapper has an explicit height
  if ( this.buttons.height() > Math.ceil( this.uiSpinner.height() * 0.5 ) &&
    this.uiSpinner.height() > 0 ) {
   this.uiSpinner.height( this.uiSpinner.height() );
  }
 },

 _keydown: function( event ) {
  var options = this.options,
   keyCode = $.ui.keyCode;

  switch ( event.keyCode ) {
  case keyCode.UP:
   this._repeat( null, 1, event );
   return true;
  case keyCode.DOWN:
   this._repeat( null, -1, event );
   return true;
  case keyCode.PAGE_UP:
   this._repeat( null, options.page, event );
   return true;
  case keyCode.PAGE_DOWN:
   this._repeat( null, -options.page, event );
   return true;
  }

  return false;
 },

 _start: function( event ) {
  if ( !this.spinning && this._trigger( "start", event ) === false ) {
   return false;
  }

  if ( !this.counter ) {
   this.counter = 1;
  }
  this.spinning = true;
  return true;
 },

 _repeat: function( i, steps, event ) {
  i = i || 500;

  clearTimeout( this.timer );
  this.timer = this._delay( function() {
   this._repeat( 40, steps, event );
  }, i );

  this._spin( steps * this.options.step, event );
 },

 _spin: function( step, event ) {
  var value = this.value() || 0;

  if ( !this.counter ) {
   this.counter = 1;
  }

  value = this._adjustValue( value + step * this._increment( this.counter ) );

  if ( !this.spinning || this._trigger( "spin", event, { value: value } ) !== false ) {
   this._value( value );
   this.counter++;
  }
 },

 _increment: function( i ) {
  var incremental = this.options.incremental;

  if ( incremental ) {
   return $.isFunction( incremental ) ?
    incremental( i ) :
    Math.floor( i * i * i / 50000 - i * i / 500 + 17 * i / 200 + 1 );
  }

  return 1;
 },

 _precision: function() {
  var precision = this._precisionOf( this.options.step );
  if ( this.options.min !== null ) {
   precision = Math.max( precision, this._precisionOf( this.options.min ) );
  }
  return precision;
 },

 _precisionOf: function( num ) {
  var str = num.toString(),
   decimal = str.indexOf( "." );
  return decimal === -1 ? 0 : str.length - decimal - 1;
 },

 _adjustValue: function( value ) {
  var base, aboveMin,
   options = this.options;

  // Make sure we're at a valid step
  // - find out where we are relative to the base (min or 0)
  base = options.min !== null ? options.min : 0;
  aboveMin = value - base;

  // - round to the nearest step
  aboveMin = Math.round( aboveMin / options.step ) * options.step;

  // - rounding is based on 0, so adjust back to our base
  value = base + aboveMin;

  // Fix precision from bad JS floating point math
  value = parseFloat( value.toFixed( this._precision() ) );

  // Clamp the value
  if ( options.max !== null && value > options.max ) {
   return options.max;
  }
  if ( options.min !== null && value < options.min ) {
   return options.min;
  }

  return value;
 },

 _stop: function( event ) {
  if ( !this.spinning ) {
   return;
  }

  clearTimeout( this.timer );
  clearTimeout( this.mousewheelTimer );
  this.counter = 0;
  this.spinning = false;
  this._trigger( "stop", event );
 },

 _setOption: function( key, value ) {
  var prevValue, first, last;

  if ( key === "culture" || key === "numberFormat" ) {
   prevValue = this._parse( this.element.val() );
   this.options[ key ] = value;
   this.element.val( this._format( prevValue ) );
   return;
  }

  if ( key === "max" || key === "min" || key === "step" ) {
   if ( typeof value === "string" ) {
    value = this._parse( value );
   }
  }
  if ( key === "icons" ) {
   first = this.buttons.first().find( ".ui-icon" );
   this._removeClass( first, null, this.options.icons.up );
   this._addClass( first, null, value.up );
   last = this.buttons.last().find( ".ui-icon" );
   this._removeClass( last, null, this.options.icons.down );
   this._addClass( last, null, value.down );
  }

  this._super( key, value );
 },

 _setOptionDisabled: function( value ) {
  this._super( value );

  this._toggleClass( this.uiSpinner, null, "ui-state-disabled", !!value );
  this.element.prop( "disabled", !!value );
  this.buttons.button( value ? "disable" : "enable" );
 },

 _setOptions: spinnerModifer( function( options ) {
  this._super( options );
 } ),

 _parse: function( val ) {
  if ( typeof val === "string" && val !== "" ) {
   val = window.Globalize && this.options.numberFormat ?
    Globalize.parseFloat( val, 10, this.options.culture ) : +val;
  }
  return val === "" || isNaN( val ) ? null : val;
 },

 _format: function( value ) {
  if ( value === "" ) {
   return "";
  }
  return window.Globalize && this.options.numberFormat ?
   Globalize.format( value, this.options.numberFormat, this.options.culture ) :
   value;
 },

 _refresh: function() {
  this.element.attr( {
   "aria-valuemin": this.options.min,
   "aria-valuemax": this.options.max,

   // TODO: what should we do with values that can't be parsed?
   "aria-valuenow": this._parse( this.element.val() )
  } );
 },

 isValid: function() {
  var value = this.value();

  // Null is invalid
  if ( value === null ) {
   return false;
  }

  // If value gets adjusted, it's invalid
  return value === this._adjustValue( value );
 },

 // Update the value without triggering change
 _value: function( value, allowAny ) {
  var parsed;
  if ( value !== "" ) {
   parsed = this._parse( value );
   if ( parsed !== null ) {
    if ( !allowAny ) {
     parsed = this._adjustValue( parsed );
    }
    value = this._format( parsed );
   }
  }
  this.element.val( value );
  this._refresh();
 },

 _destroy: function() {
  this.element
   .prop( "disabled", false )
   .removeAttr( "autocomplete role aria-valuemin aria-valuemax aria-valuenow" );

  this.uiSpinner.replaceWith( this.element );
 },

 stepUp: spinnerModifer( function( steps ) {
  this._stepUp( steps );
 } ),
 _stepUp: function( steps ) {
  if ( this._start() ) {
   this._spin( ( steps || 1 ) * this.options.step );
   this._stop();
  }
 },

 stepDown: spinnerModifer( function( steps ) {
  this._stepDown( steps );
 } ),
 _stepDown: function( steps ) {
  if ( this._start() ) {
   this._spin( ( steps || 1 ) * -this.options.step );
   this._stop();
  }
 },

 pageUp: spinnerModifer( function( pages ) {
  this._stepUp( ( pages || 1 ) * this.options.page );
 } ),

 pageDown: spinnerModifer( function( pages ) {
  this._stepDown( ( pages || 1 ) * this.options.page );
 } ),

 value: function( newVal ) {
  if ( !arguments.length ) {
   return this._parse( this.element.val() );
  }
  spinnerModifer( this._value ).call( this, newVal );
 },

 widget: function() {
  return this.uiSpinner;
 }
} );

// DEPRECATED
// TODO: switch return back to widget declaration at top of file when this is removed
if ( $.uiBackCompat !== false ) {

 // Backcompat for spinner html extension points
 $.widget( "ui.spinner", $.ui.spinner, {
  _enhance: function() {
   this.uiSpinner = this.element
    .attr( "autocomplete", "off" )
    .wrap( this._uiSpinnerHtml() )
    .parent()

     // Add buttons
     .append( this._buttonHtml() );
  },
  _uiSpinnerHtml: function() {
   return "<span>";
  },

  _buttonHtml: function() {
   return "<a></a><a></a>";
  }
 } );
}

var widgetsSpinner = $.ui.spinner;


/*!
 * jQuery UI Tabs 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Tabs
//>>group: Widgets
//>>description: Transforms a set of container elements into a tab structure.
//>>docs: http://api.jqueryui.com/tabs/
//>>demos: http://jqueryui.com/tabs/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/tabs.css
//>>css.theme: ../../themes/base/theme.css



$.widget( "ui.tabs", {
 version: "1.12.1",
 delay: 300,
 options: {
  active: null,
  classes: {
   "ui-tabs": "ui-corner-all",
   "ui-tabs-nav": "ui-corner-all",
   "ui-tabs-panel": "ui-corner-bottom",
   "ui-tabs-tab": "ui-corner-top"
  },
  collapsible: false,
  event: "click",
  heightStyle: "content",
  hide: null,
  show: null,

  // Callbacks
  activate: null,
  beforeActivate: null,
  beforeLoad: null,
  load: null
 },

 _isLocal: ( function() {
  var rhash = /#.*$/;

  return function( anchor ) {
   var anchorUrl, locationUrl;

   anchorUrl = anchor.href.replace( rhash, "" );
   locationUrl = location.href.replace( rhash, "" );

   // Decoding may throw an error if the URL isn't UTF-8 (#9518)
   try {
    anchorUrl = decodeURIComponent( anchorUrl );
   } catch ( error ) {}
   try {
    locationUrl = decodeURIComponent( locationUrl );
   } catch ( error ) {}

   return anchor.hash.length > 1 && anchorUrl === locationUrl;
  };
 } )(),

 _create: function() {
  var that = this,
   options = this.options;

  this.running = false;

  this._addClass( "ui-tabs", "ui-widget ui-widget-content" );
  this._toggleClass( "ui-tabs-collapsible", null, options.collapsible );

  this._processTabs();
  options.active = this._initialActive();

  // Take disabling tabs via class attribute from HTML
  // into account and update option properly.
  if ( $.isArray( options.disabled ) ) {
   options.disabled = $.unique( options.disabled.concat(
    $.map( this.tabs.filter( ".ui-state-disabled" ), function( li ) {
     return that.tabs.index( li );
    } )
   ) ).sort();
  }

  // Check for length avoids error when initializing empty list
  if ( this.options.active !== false && this.anchors.length ) {
   this.active = this._findActive( options.active );
  } else {
   this.active = $();
  }

  this._refresh();

  if ( this.active.length ) {
   this.load( options.active );
  }
 },

 _initialActive: function() {
  var active = this.options.active,
   collapsible = this.options.collapsible,
   locationHash = location.hash.substring( 1 );

  if ( active === null ) {

   // check the fragment identifier in the URL
   if ( locationHash ) {
    this.tabs.each( function( i, tab ) {
     if ( $( tab ).attr( "aria-controls" ) === locationHash ) {
      active = i;
      return false;
     }
    } );
   }

   // Check for a tab marked active via a class
   if ( active === null ) {
    active = this.tabs.index( this.tabs.filter( ".ui-tabs-active" ) );
   }

   // No active tab, set to false
   if ( active === null || active === -1 ) {
    active = this.tabs.length ? 0 : false;
   }
  }

  // Handle numbers: negative, out of range
  if ( active !== false ) {
   active = this.tabs.index( this.tabs.eq( active ) );
   if ( active === -1 ) {
    active = collapsible ? false : 0;
   }
  }

  // Don't allow collapsible: false and active: false
  if ( !collapsible && active === false && this.anchors.length ) {
   active = 0;
  }

  return active;
 },

 _getCreateEventData: function() {
  return {
   tab: this.active,
   panel: !this.active.length ? $() : this._getPanelForTab( this.active )
  };
 },

 _tabKeydown: function( event ) {
  var focusedTab = $( $.ui.safeActiveElement( this.document[ 0 ] ) ).closest( "li" ),
   selectedIndex = this.tabs.index( focusedTab ),
   goingForward = true;

  if ( this._handlePageNav( event ) ) {
   return;
  }

  switch ( event.keyCode ) {
  case $.ui.keyCode.RIGHT:
  case $.ui.keyCode.DOWN:
   selectedIndex++;
   break;
  case $.ui.keyCode.UP:
  case $.ui.keyCode.LEFT:
   goingForward = false;
   selectedIndex--;
   break;
  case $.ui.keyCode.END:
   selectedIndex = this.anchors.length - 1;
   break;
  case $.ui.keyCode.HOME:
   selectedIndex = 0;
   break;
  case $.ui.keyCode.SPACE:

   // Activate only, no collapsing
   event.preventDefault();
   clearTimeout( this.activating );
   this._activate( selectedIndex );
   return;
  case $.ui.keyCode.ENTER:

   // Toggle (cancel delayed activation, allow collapsing)
   event.preventDefault();
   clearTimeout( this.activating );

   // Determine if we should collapse or activate
   this._activate( selectedIndex === this.options.active ? false : selectedIndex );
   return;
  default:
   return;
  }

  // Focus the appropriate tab, based on which key was pressed
  event.preventDefault();
  clearTimeout( this.activating );
  selectedIndex = this._focusNextTab( selectedIndex, goingForward );

  // Navigating with control/command key will prevent automatic activation
  if ( !event.ctrlKey && !event.metaKey ) {

   // Update aria-selected immediately so that AT think the tab is already selected.
   // Otherwise AT may confuse the user by stating that they need to activate the tab,
   // but the tab will already be activated by the time the announcement finishes.
   focusedTab.attr( "aria-selected", "false" );
   this.tabs.eq( selectedIndex ).attr( "aria-selected", "true" );

   this.activating = this._delay( function() {
    this.option( "active", selectedIndex );
   }, this.delay );
  }
 },

 _panelKeydown: function( event ) {
  if ( this._handlePageNav( event ) ) {
   return;
  }

  // Ctrl+up moves focus to the current tab
  if ( event.ctrlKey && event.keyCode === $.ui.keyCode.UP ) {
   event.preventDefault();
   this.active.trigger( "focus" );
  }
 },

 // Alt+page up/down moves focus to the previous/next tab (and activates)
 _handlePageNav: function( event ) {
  if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP ) {
   this._activate( this._focusNextTab( this.options.active - 1, false ) );
   return true;
  }
  if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN ) {
   this._activate( this._focusNextTab( this.options.active + 1, true ) );
   return true;
  }
 },

 _findNextTab: function( index, goingForward ) {
  var lastTabIndex = this.tabs.length - 1;

  function constrain() {
   if ( index > lastTabIndex ) {
    index = 0;
   }
   if ( index < 0 ) {
    index = lastTabIndex;
   }
   return index;
  }

  while ( $.inArray( constrain(), this.options.disabled ) !== -1 ) {
   index = goingForward ? index + 1 : index - 1;
  }

  return index;
 },

 _focusNextTab: function( index, goingForward ) {
  index = this._findNextTab( index, goingForward );
  this.tabs.eq( index ).trigger( "focus" );
  return index;
 },

 _setOption: function( key, value ) {
  if ( key === "active" ) {

   // _activate() will handle invalid values and update this.options
   this._activate( value );
   return;
  }

  this._super( key, value );

  if ( key === "collapsible" ) {
   this._toggleClass( "ui-tabs-collapsible", null, value );

   // Setting collapsible: false while collapsed; open first panel
   if ( !value && this.options.active === false ) {
    this._activate( 0 );
   }
  }

  if ( key === "event" ) {
   this._setupEvents( value );
  }

  if ( key === "heightStyle" ) {
   this._setupHeightStyle( value );
  }
 },

 _sanitizeSelector: function( hash ) {
  return hash ? hash.replace( /[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):"";},refresh:function(){var options=this.options,lis=this.tablist.children(":has(a[href])");options.disabled=$.map(lis.filter(".ui-state-disabled"),function(tab){return lis.index(tab);});this._processTabs();if(options.active===false||!this.anchors.length){options.active=false;this.active=$();}else if(this.active.length&&!$.contains(this.tablist[0],this.active[0])){if(this.tabs.length===options.disabled.length){options.active=false;this.active=$();}else{this._activate(this._findNextTab(Math.max(0,options.active-1),false));}}else{options.active=this.tabs.index(this.active);}
this._refresh();},_refresh:function(){this._setOptionDisabled(this.options.disabled);this._setupEvents(this.options.event);this._setupHeightStyle(this.options.heightStyle);this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1});this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"});if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0);}else{this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0});this._addClass(this.active,"ui-tabs-active","ui-state-active");this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"});}},_processTabs:function(){var that=this,prevTabs=this.tabs,prevAnchors=this.anchors,prevPanels=this.panels;this.tablist=this._getList().attr("role","tablist");this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header");this.tablist.on("mousedown"+this.eventNamespace,"> li",function(event){if($(this).is(".ui-state-disabled")){event.preventDefault();}}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){if($(this).closest("li").is(".ui-state-disabled")){this.blur();}});this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1});this._addClass(this.tabs,"ui-tabs-tab","ui-state-default");this.anchors=this.tabs.map(function(){return $("a",this)[0];}).attr({role:"presentation",tabIndex:-1});this._addClass(this.anchors,"ui-tabs-anchor");this.panels=$();this.anchors.each(function(i,anchor){var selector,panel,panelId,anchorId=$(anchor).uniqueId().attr("id"),tab=$(anchor).closest("li"),originalAriaControls=tab.attr("aria-controls");if(that._isLocal(anchor)){selector=anchor.hash;panelId=selector.substring(1);panel=that.element.find(that._sanitizeSelector(selector));}else{panelId=tab.attr("aria-controls")||$({}).uniqueId()[0].id;selector="#"+panelId;panel=that.element.find(selector);if(!panel.length){panel=that._createPanel(panelId);panel.insertAfter(that.panels[i-1]||that.tablist);}
panel.attr("aria-live","polite");}
if(panel.length){that.panels=that.panels.add(panel);}
if(originalAriaControls){tab.data("ui-tabs-aria-controls",originalAriaControls);}
tab.attr({"aria-controls":panelId,"aria-labelledby":anchorId});panel.attr("aria-labelledby",anchorId);});this.panels.attr("role","tabpanel");this._addClass(this.panels,"ui-tabs-panel","ui-widget-content");if(prevTabs){this._off(prevTabs.not(this.tabs));this._off(prevAnchors.not(this.anchors));this._off(prevPanels.not(this.panels));}},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0);},_createPanel:function(id){return $("<div>").attr("id",id).data("ui-tabs-destroy",true);},_setOptionDisabled:function(disabled){var currentItem,li,i;if($.isArray(disabled)){if(!disabled.length){disabled=false;}else if(disabled.length===this.anchors.length){disabled=true;}}
for(i=0;(li=this.tabs[i]);i++){currentItem=$(li);if(disabled===true||$.inArray(i,disabled)!==-1){currentItem.attr("aria-disabled","true");this._addClass(currentItem,null,"ui-state-disabled");}else{currentItem.removeAttr("aria-disabled");this._removeClass(currentItem,null,"ui-state-disabled");}}
this.options.disabled=disabled;this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,disabled===true);},_setupEvents:function(event){var events={};if(event){$.each(event.split(" "),function(index,eventName){events[eventName]="_eventHandler";});}
this._off(this.anchors.add(this.tabs).add(this.panels));this._on(true,this.anchors,{click:function(event){event.preventDefault();}});this._on(this.anchors,events);this._on(this.tabs,{keydown:"_tabKeydown"});this._on(this.panels,{keydown:"_panelKeydown"});this._focusable(this.tabs);this._hoverable(this.tabs);},_setupHeightStyle:function(heightStyle){var maxHeight,parent=this.element.parent();if(heightStyle==="fill"){maxHeight=parent.height();maxHeight-=this.element.outerHeight()-this.element.height();this.element.siblings(":visible").each(function(){var elem=$(this),position=elem.css("position");if(position==="absolute"||position==="fixed"){return;}
maxHeight-=elem.outerHeight(true);});this.element.children().not(this.panels).each(function(){maxHeight-=$(this).outerHeight(true);});this.panels.each(function(){$(this).height(Math.max(0,maxHeight-
$(this).innerHeight()+$(this).height()));}).css("overflow","auto");}else if(heightStyle==="auto"){maxHeight=0;this.panels.each(function(){maxHeight=Math.max(maxHeight,$(this).height("").height());}).height(maxHeight);}},_eventHandler:function(event){var options=this.options,active=this.active,anchor=$(event.currentTarget),tab=anchor.closest("li"),clickedIsActive=tab[0]===active[0],collapsing=clickedIsActive&&options.collapsible,toShow=collapsing?$():this._getPanelForTab(tab),toHide=!active.length?$():this._getPanelForTab(active),eventData={oldTab:active,oldPanel:toHide,newTab:collapsing?$():tab,newPanel:toShow};event.preventDefault();if(tab.hasClass("ui-state-disabled")||tab.hasClass("ui-tabs-loading")||this.running||(clickedIsActive&&!options.collapsible)||(this._trigger("beforeActivate",event,eventData)===false)){return;}
options.active=collapsing?false:this.tabs.index(tab);this.active=clickedIsActive?$():tab;if(this.xhr){this.xhr.abort();}
if(!toHide.length&&!toShow.length){$.error("jQuery UI Tabs: Mismatching fragment identifier.");}
if(toShow.length){this.load(this.tabs.index(tab),event);}
this._toggle(event,eventData);},_toggle:function(event,eventData){var that=this,toShow=eventData.newPanel,toHide=eventData.oldPanel;this.running=true;function complete(){that.running=false;that._trigger("activate",event,eventData);}
function show(){that._addClass(eventData.newTab.closest("li"),"ui-tabs-active","ui-state-active");if(toShow.length&&that.options.show){that._show(toShow,that.options.show,complete);}else{toShow.show();complete();}}
if(toHide.length&&this.options.hide){this._hide(toHide,this.options.hide,function(){that._removeClass(eventData.oldTab.closest("li"),"ui-tabs-active","ui-state-active");show();});}else{this._removeClass(eventData.oldTab.closest("li"),"ui-tabs-active","ui-state-active");toHide.hide();show();}
toHide.attr("aria-hidden","true");eventData.oldTab.attr({"aria-selected":"false","aria-expanded":"false"});if(toShow.length&&toHide.length){eventData.oldTab.attr("tabIndex",-1);}else if(toShow.length){this.tabs.filter(function(){return $(this).attr("tabIndex")===0;}).attr("tabIndex",-1);}
toShow.attr("aria-hidden","false");eventData.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0});},_activate:function(index){var anchor,active=this._findActive(index);if(active[0]===this.active[0]){return;}
if(!active.length){active=this.active;}
anchor=active.find(".ui-tabs-anchor")[0];this._eventHandler({target:anchor,currentTarget:anchor,preventDefault:$.noop});},_findActive:function(index){return index===false?$():this.tabs.eq(index);},_getIndex:function(index){if(typeof index==="string"){index=this.anchors.index(this.anchors.filter("[href$='"+
$.ui.escapeSelector(index)+"']"));}
return index;},_destroy:function(){if(this.xhr){this.xhr.abort();}
this.tablist.removeAttr("role").off(this.eventNamespace);this.anchors.removeAttr("role tabIndex").removeUniqueId();this.tabs.add(this.panels).each(function(){if($.data(this,"ui-tabs-destroy")){$(this).remove();}else{$(this).removeAttr("role tabIndex "+"aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");}});this.tabs.each(function(){var li=$(this),prev=li.data("ui-tabs-aria-controls");if(prev){li.attr("aria-controls",prev).removeData("ui-tabs-aria-controls");}else{li.removeAttr("aria-controls");}});this.panels.show();if(this.options.heightStyle!=="content"){this.panels.css("height","");}},enable:function(index){var disabled=this.options.disabled;if(disabled===false){return;}
if(index===undefined){disabled=false;}else{index=this._getIndex(index);if($.isArray(disabled)){disabled=$.map(disabled,function(num){return num!==index?num:null;});}else{disabled=$.map(this.tabs,function(li,num){return num!==index?num:null;});}}
this._setOptionDisabled(disabled);},disable:function(index){var disabled=this.options.disabled;if(disabled===true){return;}
if(index===undefined){disabled=true;}else{index=this._getIndex(index);if($.inArray(index,disabled)!==-1){return;}
if($.isArray(disabled)){disabled=$.merge([index],disabled).sort();}else{disabled=[index];}}
this._setOptionDisabled(disabled);},load:function(index,event){index=this._getIndex(index);var that=this,tab=this.tabs.eq(index),anchor=tab.find(".ui-tabs-anchor"),panel=this._getPanelForTab(tab),eventData={tab:tab,panel:panel},complete=function(jqXHR,status){if(status==="abort"){that.panels.stop(false,true);}
that._removeClass(tab,"ui-tabs-loading");panel.removeAttr("aria-busy");if(jqXHR===that.xhr){delete that.xhr;}};if(this._isLocal(anchor[0])){return;}
this.xhr=$.ajax(this._ajaxSettings(anchor,event,eventData));if(this.xhr&&this.xhr.statusText!=="canceled"){this._addClass(tab,"ui-tabs-loading");panel.attr("aria-busy","true");this.xhr.done(function(response,status,jqXHR){setTimeout(function(){panel.html(response);that._trigger("load",event,eventData);complete(jqXHR,status);},1);}).fail(function(jqXHR,status){setTimeout(function(){complete(jqXHR,status);},1);});}},_ajaxSettings:function(anchor,event,eventData){var that=this;return{url:anchor.attr("href").replace(/#.*$/,""),beforeSend:function(jqXHR,settings){return that._trigger("beforeLoad",event,$.extend({jqXHR:jqXHR,ajaxSettings:settings},eventData));}};},_getPanelForTab:function(tab){var id=$(tab).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+id));}});if($.uiBackCompat!==false){$.widget("ui.tabs",$.ui.tabs,{_processTabs:function(){this._superApply(arguments);this._addClass(this.tabs,"ui-tab");}});}
var widgetsTabs=$.ui.tabs;
/*!
 * jQuery UI Tooltip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
$.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var title=$(this).attr("title")||"";return $("<a>").text(title).html();},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,track:false,close:null,open:null},_addDescribedBy:function(elem,id){var describedby=(elem.attr("aria-describedby")||"").split(/\s+/);describedby.push(id);elem.data("ui-tooltip-id",id).attr("aria-describedby",$.trim(describedby.join(" ")));},_removeDescribedBy:function(elem){var id=elem.data("ui-tooltip-id"),describedby=(elem.attr("aria-describedby")||"").split(/\s+/),index=$.inArray(id,describedby);if(index!==-1){describedby.splice(index,1);}
elem.removeData("ui-tooltip-id");describedby=$.trim(describedby.join(" "));if(describedby){elem.attr("aria-describedby",describedby);}else{elem.removeAttr("aria-describedby");}},_create:function(){this._on({mouseover:"open",focusin:"open"});this.tooltips={};this.parents={};this.liveRegion=$("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body);this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible");this.disabledTitles=$([]);},_setOption:function(key,value){var that=this;this._super(key,value);if(key==="content"){$.each(this.tooltips,function(id,tooltipData){that._updateContent(tooltipData.element);});}},_setOptionDisabled:function(value){this[value?"_disable":"_enable"]();},_disable:function(){var that=this;$.each(this.tooltips,function(id,tooltipData){var event=$.Event("blur");event.target=event.currentTarget=tooltipData.element[0];that.close(event,true);});this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var element=$(this);if(element.is("[title]")){return element.data("ui-tooltip-title",element.attr("title")).removeAttr("title");}}));},_enable:function(){this.disabledTitles.each(function(){var element=$(this);if(element.data("ui-tooltip-title")){element.attr("title",element.data("ui-tooltip-title"));}});this.disabledTitles=$([]);},open:function(event){var that=this,target=$(event?event.target:this.element).closest(this.options.items);if(!target.length||target.data("ui-tooltip-id")){return;}
if(target.attr("title")){target.data("ui-tooltip-title",target.attr("title"));}
target.data("ui-tooltip-open",true);if(event&&event.type==="mouseover"){target.parents().each(function(){var parent=$(this),blurEvent;if(parent.data("ui-tooltip-open")){blurEvent=$.Event("blur");blurEvent.target=blurEvent.currentTarget=this;that.close(blurEvent,true);}
if(parent.attr("title")){parent.uniqueId();that.parents[this.id]={element:this,title:parent.attr("title")};parent.attr("title","");}});}
this._registerCloseHandlers(event,target);this._updateContent(target,event);},_updateContent:function(target,event){var content,contentOption=this.options.content,that=this,eventType=event?event.type:null;if(typeof contentOption==="string"||contentOption.nodeType||contentOption.jquery){return this._open(event,target,contentOption);}
content=contentOption.call(target[0],function(response){that._delay(function(){if(!target.data("ui-tooltip-open")){return;}
if(event){event.type=eventType;}
this._open(event,target,response);});});if(content){this._open(event,target,content);}},_open:function(event,target,content){var tooltipData,tooltip,delayedShow,a11yContent,positionOption=$.extend({},this.options.position);if(!content){return;}
tooltipData=this._find(target);if(tooltipData){tooltipData.tooltip.find(".ui-tooltip-content").html(content);return;}
if(target.is("[title]")){if(event&&event.type==="mouseover"){target.attr("title","");}else{target.removeAttr("title");}}
tooltipData=this._tooltip(target);tooltip=tooltipData.tooltip;this._addDescribedBy(target,tooltip.attr("id"));tooltip.find(".ui-tooltip-content").html(content);this.liveRegion.children().hide();a11yContent=$("<div>").html(tooltip.find(".ui-tooltip-content").html());a11yContent.removeAttr("name").find("[name]").removeAttr("name");a11yContent.removeAttr("id").find("[id]").removeAttr("id");a11yContent.appendTo(this.liveRegion);function position(event){positionOption.of=event;if(tooltip.is(":hidden")){return;}
tooltip.position(positionOption);}
if(this.options.track&&event&&/^mouse/.test(event.type)){this._on(this.document,{mousemove:position});position(event);}else{tooltip.position($.extend({of:target},this.options.position));}
tooltip.hide();this._show(tooltip,this.options.show);if(this.options.track&&this.options.show&&this.options.show.delay){delayedShow=this.delayedShow=setInterval(function(){if(tooltip.is(":visible")){position(positionOption.of);clearInterval(delayedShow);}},$.fx.interval);}
this._trigger("open",event,{tooltip:tooltip});},_registerCloseHandlers:function(event,target){var events={keyup:function(event){if(event.keyCode===$.ui.keyCode.ESCAPE){var fakeEvent=$.Event(event);fakeEvent.currentTarget=target[0];this.close(fakeEvent,true);}}};if(target[0]!==this.element[0]){events.remove=function(){this._removeTooltip(this._find(target).tooltip);};}
if(!event||event.type==="mouseover"){events.mouseleave="close";}
if(!event||event.type==="focusin"){events.focusout="close";}
this._on(true,target,events);},close:function(event){var tooltip,that=this,target=$(event?event.currentTarget:this.element),tooltipData=this._find(target);if(!tooltipData){target.removeData("ui-tooltip-open");return;}
tooltip=tooltipData.tooltip;if(tooltipData.closing){return;}
clearInterval(this.delayedShow);if(target.data("ui-tooltip-title")&&!target.attr("title")){target.attr("title",target.data("ui-tooltip-title"));}
this._removeDescribedBy(target);tooltipData.hiding=true;tooltip.stop(true);this._hide(tooltip,this.options.hide,function(){that._removeTooltip($(this));});target.removeData("ui-tooltip-open");this._off(target,"mouseleave focusout keyup");if(target[0]!==this.element[0]){this._off(target,"remove");}
this._off(this.document,"mousemove");if(event&&event.type==="mouseleave"){$.each(this.parents,function(id,parent){$(parent.element).attr("title",parent.title);delete that.parents[id];});}
tooltipData.closing=true;this._trigger("close",event,{tooltip:tooltip});if(!tooltipData.hiding){tooltipData.closing=false;}},_tooltip:function(element){var tooltip=$("<div>").attr("role","tooltip"),content=$("<div>").appendTo(tooltip),id=tooltip.uniqueId().attr("id");this._addClass(content,"ui-tooltip-content");this._addClass(tooltip,"ui-tooltip","ui-widget ui-widget-content");tooltip.appendTo(this._appendTo(element));return this.tooltips[id]={element:element,tooltip:tooltip};},_find:function(target){var id=target.data("ui-tooltip-id");return id?this.tooltips[id]:null;},_removeTooltip:function(tooltip){tooltip.remove();delete this.tooltips[tooltip.attr("id")];},_appendTo:function(target){var element=target.closest(".ui-front, dialog");if(!element.length){element=this.document[0].body;}
return element;},_destroy:function(){var that=this;$.each(this.tooltips,function(id,tooltipData){var event=$.Event("blur"),element=tooltipData.element;event.target=event.currentTarget=element[0];that.close(event,true);$("#"+id).remove();if(element.data("ui-tooltip-title")){if(!element.attr("title")){element.attr("title",element.data("ui-tooltip-title"));}
element.removeData("ui-tooltip-title");}});this.liveRegion.remove();}});if($.uiBackCompat!==false){$.widget("ui.tooltip",$.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var tooltipData=this._superApply(arguments);if(this.options.tooltipClass){tooltipData.tooltip.addClass(this.options.tooltipClass);}
return tooltipData;}});}
var widgetsTooltip=$.ui.tooltip;}));;;"use strict";!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).Popper={})}(this,(function(e){function t(e){return{width:(e=e.getBoundingClientRect()).width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function n(e){return"[object Window]"!==e.toString()?(e=e.ownerDocument)?e.defaultView:window:e}function r(e){return{scrollLeft:(e=n(e)).pageXOffset,scrollTop:e.pageYOffset}}function o(e){return e instanceof n(e).Element||e instanceof Element}function i(e){return e instanceof n(e).HTMLElement||e instanceof HTMLElement}function a(e){return e?(e.nodeName||"").toLowerCase():null}function s(e){return(o(e)?e.ownerDocument:e.document).documentElement}function f(e){return t(s(e)).left+r(e).scrollLeft}function p(e,o,p){void 0===p&&(p=!1),e=t(e);var c={scrollLeft:0,scrollTop:0},u={x:0,y:0};return p||("body"!==a(o)&&(c=o!==n(o)&&i(o)?{scrollLeft:o.scrollLeft,scrollTop:o.scrollTop}:r(o)),i(o)?((u=t(o)).x+=o.clientLeft,u.y+=o.clientTop):(o=s(o))&&(u.x=f(o))),{x:e.left+c.scrollLeft-u.x,y:e.top+c.scrollTop-u.y,width:e.width,height:e.height}}function c(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function u(e){return"html"===a(e)?e:e.parentNode||e.host||document.ownerDocument||document.documentElement}function d(e){return n(e).getComputedStyle(e)}function l(e,t){void 0===t&&(t=[]);var r=function e(t){if(0<=["html","body","#document"].indexOf(a(t)))return t.ownerDocument.body;if(i(t)){var n=d(t);if(/auto|scroll|overlay|hidden/.test(n.overflow+n.overflowY+n.overflowX))return t}return e(u(t))}(e);return r=(e="body"===a(r))?n(r):r,t=t.concat(r),e?t:t.concat(l(u(r)))}function m(e){return i(e)&&"fixed"!==d(e).position?e.offsetParent:null}function h(e){var t=n(e);for(e=m(e);e&&0<=["table","td","th"].indexOf(a(e));)e=m(e);return e&&"body"===a(e)&&"static"===d(e).position?t:e||t}function v(e){var t=new Map,n=new Set,r=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||function e(o){n.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(r){n.has(r)||(r=t.get(r))&&e(r)})),r.push(o)}(e)})),r}function g(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function b(e){return e.split("-")[0]}function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function x(e){void 0===e&&(e={});var t=e.defaultModifiers,n=void 0===t?[]:t,r=void 0===(e=e.defaultOptions)?F:e;return function(e,t,i){function a(){f.forEach((function(e){return e()})),f=[]}void 0===i&&(i=r);var s={placement:"bottom",orderedModifiers:[],options:Object.assign({},F,{},r),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],u=!1,d={state:s,setOptions:function(i){return a(),s.options=Object.assign({},r,{},s.options,{},i),s.scrollParents={reference:o(e)?l(e):e.contextElement?l(e.contextElement):[],popper:l(t)},i=function(e){var t=v(e);return C.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,{},t,{options:Object.assign({},n.options,{},t.options),data:Object.assign({},n.data,{},t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,s.options.modifiers))),s.orderedModifiers=i.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options;n=void 0===n?{}:n,"function"==typeof(e=e.effect)&&(t=e({state:s,name:t,instance:d,options:n}),f.push(t||function(){}))})),d.update()},forceUpdate:function(){if(!u){var e=s.elements,t=e.reference;if(y(t,e=e.popper))for(s.rects={reference:p(t,h(e),"fixed"===s.options.strategy),popper:c(e)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)})),t=0;t<s.orderedModifiers.length;t++)if(!0===s.reset)s.reset=!1,t=-1;else{var n=s.orderedModifiers[t];e=n.fn;var r=n.options;r=void 0===r?{}:r,n=n.name,"function"==typeof e&&(s=e({state:s,options:r,name:n,instance:d})||s)}}},update:g((function(){return new Promise((function(e){d.forceUpdate(),e(s)}))})),destroy:function(){a(),u=!0}};return y(e,t)?(d.setOptions(i).then((function(e){!u&&i.onFirstUpdate&&i.onFirstUpdate(e)})),d):d}}function w(e){return 0<=["top","bottom"].indexOf(e)?"x":"y"}function O(e){var t=e.reference,n=e.element,r=(e=e.placement)?b(e):null;e=e?e.split("-")[1]:null;var o=t.x+t.width/2-n.width/2,i=t.y+t.height/2-n.height/2;switch(r){case"top":o={x:o,y:t.y-n.height};break;case"bottom":o={x:o,y:t.y+t.height};break;case"right":o={x:t.x+t.width,y:i};break;case"left":o={x:t.x-n.width,y:i};break;default:o={x:t.x,y:t.y}}if(null!=(r=r?w(r):null))switch(i="y"===r?"height":"width",e){case"start":o[r]=Math.floor(o[r])-Math.floor(t[i]/2-n[i]/2);break;case"end":o[r]=Math.floor(o[r])+Math.ceil(t[i]/2-n[i]/2)}return o}function M(e){var t,r=e.popper,o=e.popperRect,i=e.placement,a=e.offsets,f=e.position,p=e.gpuAcceleration,c=e.adaptive,u=window.devicePixelRatio||1;e=Math.round(a.x*u)/u||0,u=Math.round(a.y*u)/u||0;var d=a.hasOwnProperty("x");a=a.hasOwnProperty("y");var l,m="left",v="top",g=window;if(c){var b=h(r);b===n(r)&&(b=s(r)),"top"===i&&(v="bottom",u-=b.clientHeight-o.height,u*=p?1:-1),"left"===i&&(m="right",e-=b.clientWidth-o.width,e*=p?1:-1)}return r=Object.assign({position:f},c&&I),p?Object.assign({},r,((l={})[v]=a?"0":"",l[m]=d?"0":"",l.transform=2>(g.devicePixelRatio||1)?"translate("+e+"px, "+u+"px)":"translate3d("+e+"px, "+u+"px, 0)",l)):Object.assign({},r,((t={})[v]=a?u+"px":"",t[m]=d?e+"px":"",t.transform="",t))}function j(e){return e.replace(/left|right|bottom|top/g,(function(e){return _[e]}))}function E(e){return e.replace(/start|end/g,(function(e){return U[e]}))}function D(e,t){var n=!(!t.getRootNode||!t.getRootNode().host);if(e.contains(t))return!0;if(n)do{if(t&&e.isSameNode(t))return!0;t=t.parentNode||t.host}while(t);return!1}function L(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function k(e,o){if("viewport"===o)e=L({width:(e=n(e)).innerWidth,height:e.innerHeight,x:0,y:0});else if(i(o))e=t(o);else{var a=s(e);e=n(a),o=r(a),(a=p(s(a),e)).height=Math.max(a.height,e.innerHeight),a.width=Math.max(a.width,e.innerWidth),a.x=-o.scrollLeft,a.y=-o.scrollTop,e=L(a)}return e}function P(e,t,r){return t="clippingParents"===t?function(e){var t=l(e),n=0<=["absolute","fixed"].indexOf(d(e).position)&&i(e)?h(e):e;return o(n)?t.filter((function(e){return o(e)&&D(e,n)})):[]}(e):[].concat(t),(r=(r=[].concat(t,[r])).reduce((function(t,r){var o=k(e,r),p=n(r=i(r)?r:s(e)),c=i(r)?d(r):{};parseFloat(c.borderTopWidth);var u=parseFloat(c.borderRightWidth)||0,l=parseFloat(c.borderBottomWidth)||0,m=parseFloat(c.borderLeftWidth)||0;c="html"===a(r);var h=f(r),v=r.clientWidth+u,g=r.clientHeight+l;return c&&50<p.innerHeight-r.clientHeight&&(g=p.innerHeight-l),l=c?0:r.clientTop,u=r.clientLeft>m?u:c?p.innerWidth-v-h:r.offsetWidth-v,p=c?p.innerHeight-g:r.offsetHeight-g,r=c?h:r.clientLeft,t.top=Math.max(o.top+l,t.top),t.right=Math.min(o.right-u,t.right),t.bottom=Math.min(o.bottom-p,t.bottom),t.left=Math.max(o.left+r,t.left),t}),k(e,r[0]))).width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}function B(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},{},e)}function W(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function H(e,n){void 0===n&&(n={});var r=n;n=void 0===(n=r.placement)?e.placement:n;var i=r.boundary,a=void 0===i?"clippingParents":i,f=void 0===(i=r.rootBoundary)?"viewport":i;i=void 0===(i=r.elementContext)?"popper":i;var p=r.altBoundary,c=void 0!==p&&p;r=B("number"!=typeof(r=void 0===(r=r.padding)?0:r)?r:W(r,q));var u=e.elements.reference;p=e.rects.popper,a=P(o(c=e.elements[c?"popper"===i?"reference":"popper":i])?c:c.contextElement||s(e.elements.popper),a,f),c=O({reference:f=t(u),element:p,strategy:"absolute",placement:n}),p=L(Object.assign({},p,{},c)),f="popper"===i?p:f;var d={top:a.top-f.top+r.top,bottom:f.bottom-a.bottom+r.bottom,left:a.left-f.left+r.left,right:f.right-a.right+r.right};if(e=e.modifiersData.offset,"popper"===i&&e){var l=e[n];Object.keys(d).forEach((function(e){var t=0<=["right","bottom"].indexOf(e)?1:-1,n=0<=["top","bottom"].indexOf(e)?"y":"x";d[e]+=l[n]*t}))}return d}function T(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function R(e){return["top","right","bottom","left"].some((function(t){return 0<=e[t]}))}var q=["top","bottom","right","left"],A=q.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),S=[].concat(q,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),C="beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),F={placement:"bottom",modifiers:[],strategy:"absolute"},N={passive:!0},I={top:"auto",right:"auto",bottom:"auto",left:"auto"},_={left:"right",right:"left",bottom:"top",top:"bottom"},U={start:"end",end:"start"},V=[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,o=(e=e.options).scroll,i=void 0===o||o,a=void 0===(e=e.resize)||e,s=n(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach((function(e){e.addEventListener("scroll",r.update,N)})),a&&s.addEventListener("resize",r.update,N),function(){i&&f.forEach((function(e){e.removeEventListener("scroll",r.update,N)})),a&&s.removeEventListener("resize",r.update,N)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state;t.modifiersData[e.name]=O({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options;e=void 0===(e=n.gpuAcceleration)||e,n=void 0===(n=n.adaptive)||n,e={placement:b(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:e},t.styles.popper=Object.assign({},t.styles.popper,{},M(Object.assign({},e,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:n}))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,{},M(Object.assign({},e,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];i(o)&&a(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:"absolute",left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{};e=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{}),i(r)&&a(r)&&(Object.assign(r.style,e),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.name,r=void 0===(e=e.options.offset)?[0,0]:e,o=(e=S.reduce((function(e,n){var o=t.rects,i=b(n),a=0<=["left","top"].indexOf(i)?-1:1,s="function"==typeof r?r(Object.assign({},o,{placement:n})):r;return o=(o=s[0])||0,s=((s=s[1])||0)*a,i=0<=["left","right"].indexOf(i)?{x:s,y:o}:{x:o,y:s},e[n]=i,e}),{}))[t.placement],i=o.y;t.modifiersData.popperOffsets.x+=o.x,t.modifiersData.popperOffsets.y+=i,t.modifiersData[n]=e}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options;if(e=e.name,!t.modifiersData[e]._skip){var r=n.fallbackPlacements,o=n.padding,i=n.boundary,a=n.rootBoundary,s=n.altBoundary,f=void 0===(n=n.flipVariations)||n,p=b(n=t.options.placement);r=r||(p!==n&&f?function(e){if("auto"===b(e))return[];var t=j(e);return[E(e),t,E(t)]}(n):[j(n)]);var c=[n].concat(r).reduce((function(e,n){return e.concat("auto"===b(n)?function(e,t){void 0===t&&(t={});var n=t.boundary,r=t.rootBoundary,o=t.padding,i=t.flipVariations,a=t.placement.split("-")[1],s=(a?i?A:A.filter((function(e){return e.split("-")[1]===a})):q).reduce((function(t,i){return t[i]=H(e,{placement:i,boundary:n,rootBoundary:r,padding:o})[b(i)],t}),{});return Object.keys(s).sort((function(e,t){return s[e]-s[t]}))}(t,{placement:n,boundary:i,rootBoundary:a,padding:o,flipVariations:f}):n)}),[]);r=t.rects.reference,n=t.rects.popper;var u=new Map;p=!0;for(var d=c[0],l=0;l<c.length;l++){var m=c[l],h=b(m),v="start"===m.split("-")[1],g=0<=["top","bottom"].indexOf(h),y=g?"width":"height",x=H(t,{placement:m,boundary:i,rootBoundary:a,altBoundary:s,padding:o});if(v=g?v?"right":"left":v?"bottom":"top",r[y]>n[y]&&(v=j(v)),y=j(v),(h=[0>=x[h],0>=x[v],0>=x[y]]).every((function(e){return e}))){d=m,p=!1;break}u.set(m,h)}if(p)for(s=function(e){var t=c.find((function(t){if(t=u.get(t))return t.slice(0,e).every((function(e){return e}))}));if(t)return d=t,"break"},r=f?3:1;0<r&&"break"!==s(r);r--);t.placement!==d&&(t.modifiersData[e]._skip=!0,t.placement=d,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options;e=e.name;var r=n.mainAxis,o=void 0===r||r;r=void 0!==(r=n.altAxis)&&r;var i=n.tether;i=void 0===i||i;var a=n.tetherOffset,s=void 0===a?0:a;n=H(t,{boundary:n.boundary,rootBoundary:n.rootBoundary,padding:n.padding,altBoundary:n.altBoundary}),a=b(t.placement);var f=t.placement.split("-")[1],p=!f,u=w(a);a="x"===u?"y":"x";var d=t.modifiersData.popperOffsets,l=t.rects.reference,m=t.rects.popper,v="function"==typeof s?s(Object.assign({},t.rects,{placement:t.placement})):s;if(s={x:0,y:0},o){var g="y"===u?"top":"left",y="y"===u?"bottom":"right",x="y"===u?"height":"width";o=d[u];var O=d[u]+n[g],M=d[u]-n[y],j=i?-m[x]/2:0,E="start"===f?l[x]:m[x];f="start"===f?-m[x]:-l[x],m=t.elements.arrow,m=i&&m?c(m):{width:0,height:0};var D=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0};g=D[g],y=D[y],m=Math.max(0,Math.min(l[x],m[x])),E=p?l[x]/2-j-m-g-v:E-m-g-v,p=p?-l[x]/2+j+m+y+v:f+m+y+v,v=t.elements.arrow&&h(t.elements.arrow),l=t.modifiersData.offset?t.modifiersData.offset[t.placement][u]:0,v=d[u]+E-l-(v?"y"===u?v.clientTop||0:v.clientLeft||0:0),p=d[u]+p-l,i=Math.max(i?Math.min(O,v):O,Math.min(o,i?Math.max(M,p):M)),d[u]=i,s[u]=i-o}r&&(r=d[a],i=Math.max(r+n["x"===u?"top":"left"],Math.min(r,r-n["x"===u?"bottom":"right"])),t.modifiersData.popperOffsets[a]=i,s[a]=i-r),t.modifiersData[e]=s},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state;e=e.name;var r=n.elements.arrow,o=n.modifiersData.popperOffsets,i=b(n.placement),a=w(i);if(i=0<=["left","right"].indexOf(i)?"height":"width",r){var s=n.modifiersData[e+"#persistent"].padding;r=c(r);var f="y"===a?"top":"left",p="y"===a?"bottom":"right",u=n.rects.reference[i]+n.rects.reference[a]-o[a]-n.rects.popper[i];o=o[a]-n.rects.reference[a];var d=n.elements.arrow&&h(n.elements.arrow);u=(d=d?"y"===a?d.clientHeight||0:d.clientWidth||0:0)/2-r[i]/2+(u/2-o/2),i=Math.max(s[f],Math.min(u,d-r[i]-s[p])),n.modifiersData[e]=((t={})[a]=i,t.centerOffset=i-u,t)}},effect:function(e){var t=e.state,n=e.options;e=e.name;var r=n.element;r=void 0===r?"[data-popper-arrow]":r,n=void 0===(n=n.padding)?0:n,("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&D(t.elements.popper,r)&&(t.elements.arrow=r,t.modifiersData[e+"#persistent"]={padding:B("number"!=typeof n?n:W(n,q))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state;e=e.name;var n=t.rects.reference,r=t.rects.popper,o=t.modifiersData.preventOverflow,i=H(t,{elementContext:"reference"}),a=H(t,{altBoundary:!0});n=T(i,n),r=T(a,r,o),o=R(n),a=R(r),t.modifiersData[e]={referenceClippingOffsets:n,popperEscapeOffsets:r,isReferenceHidden:o,hasPopperEscaped:a},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":o,"data-popper-escaped":a})}}],z=x({defaultModifiers:V});e.createPopper=z,e.defaultModifiers=V,e.detectOverflow=H,e.popperGenerator=x,Object.defineProperty(e,"__esModule",{value:!0})}));;;;(function($,window,document,undefined){function Owl(element,options){this.settings=null;this.options=$.extend({},Owl.Defaults,options);this.$element=$(element);this._handlers={};this._plugins={};this._supress={};this._current=null;this._speed=null;this._coordinates=[];this._breakpoint=null;this._width=null;this._items=[];this._clones=[];this._mergers=[];this._widths=[];this._invalidated={};this._pipe=[];this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null};this._states={current:{},tags:{'initializing':['busy'],'animating':['busy'],'dragging':['interacting']}};$.each(['onResize','onThrottledResize'],$.proxy(function(i,handler){this._handlers[handler]=$.proxy(this[handler],this);},this));$.each(Owl.Plugins,$.proxy(function(key,plugin){this._plugins[key.charAt(0).toLowerCase()+key.slice(1)]=new plugin(this);},this));$.each(Owl.Workers,$.proxy(function(priority,worker){this._pipe.push({'filter':worker.filter,'run':$.proxy(worker.run,this)});},this));this.setup();this.initialize();}
Owl.Defaults={items:3,loop:false,center:false,rewind:false,checkVisibility:true,mouseDrag:true,touchDrag:true,pullDrag:true,freeDrag:false,margin:0,stagePadding:0,merge:false,mergeFit:true,autoWidth:false,startPosition:0,rtl:false,smartSpeed:250,fluidSpeed:false,dragEndSpeed:false,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:window,fallbackEasing:'swing',slideTransition:'',info:false,nestedItemSelector:false,itemElement:'div',stageElement:'div',refreshClass:'owl-refresh',loadedClass:'owl-loaded',loadingClass:'owl-loading',rtlClass:'owl-rtl',responsiveClass:'owl-responsive',dragClass:'owl-drag',itemClass:'owl-item',stageClass:'owl-stage',stageOuterClass:'owl-stage-outer',grabClass:'owl-grab'};Owl.Width={Default:'default',Inner:'inner',Outer:'outer'};Owl.Type={Event:'event',State:'state'};Owl.Plugins={};Owl.Workers=[{filter:['width','settings'],run:function(){this._width=this.$element.width();}},{filter:['width','items','settings'],run:function(cache){cache.current=this._items&&this._items[this.relative(this._current)];}},{filter:['items','settings'],run:function(){this.$stage.children('.cloned').remove();}},{filter:['width','items','settings'],run:function(cache){var margin=this.settings.margin||'',grid=!this.settings.autoWidth,rtl=this.settings.rtl,css={'width':'auto','margin-left':rtl?margin:'','margin-right':rtl?'':margin};!grid&&this.$stage.children().css(css);cache.css=css;}},{filter:['width','items','settings'],run:function(cache){var width=(this.width()/ this.settings.items).toFixed(3)-this.settings.margin,merge=null,iterator=this._items.length,grid=!this.settings.autoWidth,widths=[];cache.items={merge:false,width:width};while(iterator--){merge=this._mergers[iterator];merge=this.settings.mergeFit&&Math.min(merge,this.settings.items)||merge;cache.items.merge=merge>1||cache.items.merge;widths[iterator]=!grid?this._items[iterator].width():width*merge;}
this._widths=widths;}},{filter:['items','settings'],run:function(){var clones=[],items=this._items,settings=this.settings,view=Math.max(settings.items*2,4),size=Math.ceil(items.length / 2)*2,repeat=settings.loop&&items.length?settings.rewind?view:Math.max(view,size):0,append='',prepend='';repeat /=2;while(repeat>0){clones.push(this.normalize(clones.length / 2,true));append=append+items[clones[clones.length-1]][0].outerHTML;clones.push(this.normalize(items.length-1-(clones.length-1)/ 2,true));prepend=items[clones[clones.length-1]][0].outerHTML+prepend;repeat-=1;}
this._clones=clones;$(append).addClass('cloned').appendTo(this.$stage);$(prepend).addClass('cloned').prependTo(this.$stage);}},{filter:['width','items','settings'],run:function(){var rtl=this.settings.rtl?1:-1,size=this._clones.length+this._items.length,iterator=-1,previous=0,current=0,coordinates=[];while(++iterator<size){previous=coordinates[iterator-1]||0;current=this._widths[this.relative(iterator)]+this.settings.margin;coordinates.push(previous+current*rtl);}
this._coordinates=coordinates;}},{filter:['width','items','settings'],run:function(){var padding=this.settings.stagePadding,coordinates=this._coordinates,css={'width':Math.ceil(Math.abs(coordinates[coordinates.length-1]))+padding*2,'padding-left':padding||'','padding-right':padding||''};this.$stage.css(css);}},{filter:['width','items','settings'],run:function(cache){var iterator=this._coordinates.length,grid=!this.settings.autoWidth,items=this.$stage.children();if(grid&&cache.items.merge){while(iterator--){cache.css.width=this._widths[this.relative(iterator)];items.eq(iterator).css(cache.css);}}else if(grid){cache.css.width=cache.items.width;items.css(cache.css);}}},{filter:['items'],run:function(){this._coordinates.length<1&&this.$stage.removeAttr('style');}},{filter:['width','items','settings'],run:function(cache){cache.current=cache.current?this.$stage.children().index(cache.current):0;cache.current=Math.max(this.minimum(),Math.min(this.maximum(),cache.current));this.reset(cache.current);}},{filter:['position'],run:function(){this.animate(this.coordinates(this._current));}},{filter:['width','position','items','settings'],run:function(){var rtl=this.settings.rtl?1:-1,padding=this.settings.stagePadding*2,begin=this.coordinates(this.current())+padding,end=begin+this.width()*rtl,inner,outer,matches=[],i,n;for(i=0,n=this._coordinates.length;i<n;i++){inner=this._coordinates[i-1]||0;outer=Math.abs(this._coordinates[i])+padding*rtl;if((this.op(inner,'<=',begin)&&(this.op(inner,'>',end)))||(this.op(outer,'<',begin)&&this.op(outer,'>',end))){matches.push(i);}}
this.$stage.children('.active').removeClass('active');this.$stage.children(':eq('+matches.join('), :eq(')+')').addClass('active');this.$stage.children('.center').removeClass('center');if(this.settings.center){this.$stage.children().eq(this.current()).addClass('center');}}}];Owl.prototype.initializeStage=function(){this.$stage=this.$element.find('.'+this.settings.stageClass);if(this.$stage.length){return;}
this.$element.addClass(this.options.loadingClass);this.$stage=$('<'+this.settings.stageElement+'>',{"class":this.settings.stageClass}).wrap($('<div/>',{"class":this.settings.stageOuterClass}));this.$element.append(this.$stage.parent());};Owl.prototype.initializeItems=function(){var $items=this.$element.find('.owl-item');if($items.length){this._items=$items.get().map(function(item){return $(item);});this._mergers=this._items.map(function(){return 1;});this.refresh();return;}
this.replace(this.$element.children().not(this.$stage.parent()));if(this.isVisible()){this.refresh();}else{this.invalidate('width');}
this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);};Owl.prototype.initialize=function(){this.enter('initializing');this.trigger('initialize');this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl);if(this.settings.autoWidth&&!this.is('pre-loading')){var imgs,nestedSelector,width;imgs=this.$element.find('img');nestedSelector=this.settings.nestedItemSelector?'.'+this.settings.nestedItemSelector:undefined;width=this.$element.children(nestedSelector).width();if(imgs.length&&width<=0){this.preloadAutoWidthImages(imgs);}}
this.initializeStage();this.initializeItems();this.registerEventHandlers();this.leave('initializing');this.trigger('initialized');};Owl.prototype.isVisible=function(){return this.settings.checkVisibility?this.$element.is(':visible'):true;};Owl.prototype.setup=function(){var viewport=this.viewport(),overwrites=this.options.responsive,match=-1,settings=null;if(!overwrites){settings=$.extend({},this.options);}else{$.each(overwrites,function(breakpoint){if(breakpoint<=viewport&&breakpoint>match){match=Number(breakpoint);}});settings=$.extend({},this.options,overwrites[match]);if(typeof settings.stagePadding==='function'){settings.stagePadding=settings.stagePadding();}
delete settings.responsive;if(settings.responsiveClass){this.$element.attr('class',this.$element.attr('class').replace(new RegExp('('+this.options.responsiveClass+'-)\\S+\\s','g'),'$1'+match));}}
this.trigger('change',{property:{name:'settings',value:settings}});this._breakpoint=match;this.settings=settings;this.invalidate('settings');this.trigger('changed',{property:{name:'settings',value:this.settings}});};Owl.prototype.optionsLogic=function(){if(this.settings.autoWidth){this.settings.stagePadding=false;this.settings.merge=false;}};Owl.prototype.prepare=function(item){var event=this.trigger('prepare',{content:item});if(!event.data){event.data=$('<'+this.settings.itemElement+'/>').addClass(this.options.itemClass).append(item)}
this.trigger('prepared',{content:event.data});return event.data;};Owl.prototype.update=function(){var i=0,n=this._pipe.length,filter=$.proxy(function(p){return this[p]},this._invalidated),cache={};while(i<n){if(this._invalidated.all||$.grep(this._pipe[i].filter,filter).length>0){this._pipe[i].run(cache);}
i++;}
this._invalidated={};!this.is('valid')&&this.enter('valid');};Owl.prototype.width=function(dimension){dimension=dimension||Owl.Width.Default;switch(dimension){case Owl.Width.Inner:case Owl.Width.Outer:return this._width;default:return this._width-this.settings.stagePadding*2+this.settings.margin;}};Owl.prototype.refresh=function(){this.enter('refreshing');this.trigger('refresh');this.setup();this.optionsLogic();this.$element.addClass(this.options.refreshClass);this.update();this.$element.removeClass(this.options.refreshClass);this.leave('refreshing');this.trigger('refreshed');};Owl.prototype.onThrottledResize=function(){window.clearTimeout(this.resizeTimer);this.resizeTimer=window.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate);};Owl.prototype.onResize=function(){if(!this._items.length){return false;}
if(this._width===this.$element.width()){return false;}
if(!this.isVisible()){return false;}
this.enter('resizing');if(this.trigger('resize').isDefaultPrevented()){this.leave('resizing');return false;}
this.invalidate('width');this.refresh();this.leave('resizing');this.trigger('resized');};Owl.prototype.registerEventHandlers=function(){if($.support.transition){this.$stage.on($.support.transition.end+'.owl.core',$.proxy(this.onTransitionEnd,this));}
if(this.settings.responsive!==false){this.on(window,'resize',this._handlers.onThrottledResize);}
if(this.settings.mouseDrag){this.$element.addClass(this.options.dragClass);this.$stage.on('mousedown.owl.core',$.proxy(this.onDragStart,this));this.$stage.on('dragstart.owl.core selectstart.owl.core',function(){return false});}
if(this.settings.touchDrag){this.$stage.on('touchstart.owl.core',$.proxy(this.onDragStart,this));this.$stage.on('touchcancel.owl.core',$.proxy(this.onDragEnd,this));}};Owl.prototype.onDragStart=function(event){var stage=null;if(event.which===3){return;}
if($.support.transform){stage=this.$stage.css('transform').replace(/.*\(|\)| /g,'').split(',');stage={x:stage[stage.length===16?12:4],y:stage[stage.length===16?13:5]};}else{stage=this.$stage.position();stage={x:this.settings.rtl?stage.left+this.$stage.width()-this.width()+this.settings.margin:stage.left,y:stage.top};}
if(this.is('animating')){$.support.transform?this.animate(stage.x):this.$stage.stop()
this.invalidate('position');}
this.$element.toggleClass(this.options.grabClass,event.type==='mousedown');this.speed(0);this._drag.time=new Date().getTime();this._drag.target=$(event.target);this._drag.stage.start=stage;this._drag.stage.current=stage;this._drag.pointer=this.pointer(event);$(document).on('mouseup.owl.core touchend.owl.core',$.proxy(this.onDragEnd,this));$(document).one('mousemove.owl.core touchmove.owl.core',$.proxy(function(event){var delta=this.difference(this._drag.pointer,this.pointer(event));$(document).on('mousemove.owl.core touchmove.owl.core',$.proxy(this.onDragMove,this));if(Math.abs(delta.x)<Math.abs(delta.y)&&this.is('valid')){return;}
event.preventDefault();this.enter('dragging');this.trigger('drag');},this));};Owl.prototype.onDragMove=function(event){var minimum=null,maximum=null,pull=null,delta=this.difference(this._drag.pointer,this.pointer(event)),stage=this.difference(this._drag.stage.start,delta);if(!this.is('dragging')){return;}
event.preventDefault();if(this.settings.loop){minimum=this.coordinates(this.minimum());maximum=this.coordinates(this.maximum()+1)-minimum;stage.x=(((stage.x-minimum)%maximum+maximum)%maximum)+minimum;}else{minimum=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum());maximum=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum());pull=this.settings.pullDrag?-1*delta.x / 5:0;stage.x=Math.max(Math.min(stage.x,minimum+pull),maximum+pull);}
this._drag.stage.current=stage;this.animate(stage.x);};Owl.prototype.onDragEnd=function(event){var delta=this.difference(this._drag.pointer,this.pointer(event)),stage=this._drag.stage.current,direction=delta.x>0^this.settings.rtl?'left':'right';$(document).off('.owl.core');this.$element.removeClass(this.options.grabClass);if(delta.x!==0&&this.is('dragging')||!this.is('valid')){this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed);this.current(this.closest(stage.x,delta.x!==0?direction:this._drag.direction));this.invalidate('position');this.update();this._drag.direction=direction;if(Math.abs(delta.x)>3||new Date().getTime()-this._drag.time>300){this._drag.target.one('click.owl.core',function(){return false;});}}
if(!this.is('dragging')){return;}
this.leave('dragging');this.trigger('dragged');};Owl.prototype.closest=function(coordinate,direction){var position=-1,pull=30,width=this.width(),coordinates=this.coordinates();if(!this.settings.freeDrag){$.each(coordinates,$.proxy(function(index,value){if(direction==='left'&&coordinate>value-pull&&coordinate<value+pull){position=index;}else if(direction==='right'&&coordinate>value-width-pull&&coordinate<value-width+pull){position=index+1;}else if(this.op(coordinate,'<',value)&&this.op(coordinate,'>',coordinates[index+1]!==undefined?coordinates[index+1]:value-width)){position=direction==='left'?index+1:index;}
return position===-1;},this));}
if(!this.settings.loop){if(this.op(coordinate,'>',coordinates[this.minimum()])){position=coordinate=this.minimum();}else if(this.op(coordinate,'<',coordinates[this.maximum()])){position=coordinate=this.maximum();}}
return position;};Owl.prototype.animate=function(coordinate){var animate=this.speed()>0;this.is('animating')&&this.onTransitionEnd();if(animate){this.enter('animating');this.trigger('translate');}
if($.support.transform3d&&$.support.transition){this.$stage.css({transform:'translate3d('+coordinate+'px,0px,0px)',transition:(this.speed()/ 1000)+'s'+(this.settings.slideTransition?' '+this.settings.slideTransition:'')});}else if(animate){this.$stage.animate({left:coordinate+'px'},this.speed(),this.settings.fallbackEasing,$.proxy(this.onTransitionEnd,this));}else{this.$stage.css({left:coordinate+'px'});}};Owl.prototype.is=function(state){return this._states.current[state]&&this._states.current[state]>0;};Owl.prototype.current=function(position){if(position===undefined){return this._current;}
if(this._items.length===0){return undefined;}
position=this.normalize(position);if(this._current!==position){var event=this.trigger('change',{property:{name:'position',value:position}});if(event.data!==undefined){position=this.normalize(event.data);}
this._current=position;this.invalidate('position');this.trigger('changed',{property:{name:'position',value:this._current}});}
return this._current;};Owl.prototype.invalidate=function(part){if($.type(part)==='string'){this._invalidated[part]=true;this.is('valid')&&this.leave('valid');}
return $.map(this._invalidated,function(v,i){return i});};Owl.prototype.reset=function(position){position=this.normalize(position);if(position===undefined){return;}
this._speed=0;this._current=position;this.suppress(['translate','translated']);this.animate(this.coordinates(position));this.release(['translate','translated']);};Owl.prototype.normalize=function(position,relative){var n=this._items.length,m=relative?0:this._clones.length;if(!this.isNumeric(position)||n<1){position=undefined;}else if(position<0||position>=n+m){position=((position-m / 2)%n+n)%n+m / 2;}
return position;};Owl.prototype.relative=function(position){position-=this._clones.length / 2;return this.normalize(position,true);};Owl.prototype.maximum=function(relative){var settings=this.settings,maximum=this._coordinates.length,iterator,reciprocalItemsWidth,elementWidth;if(settings.loop){maximum=this._clones.length / 2+this._items.length-1;}else if(settings.autoWidth||settings.merge){iterator=this._items.length;if(iterator){reciprocalItemsWidth=this._items[--iterator].width();elementWidth=this.$element.width();while(iterator--){reciprocalItemsWidth+=this._items[iterator].width()+this.settings.margin;if(reciprocalItemsWidth>elementWidth){break;}}}
maximum=iterator+1;}else if(settings.center){maximum=this._items.length-1;}else{maximum=this._items.length-settings.items;}
if(relative){maximum-=this._clones.length / 2;}
return Math.max(maximum,0);};Owl.prototype.minimum=function(relative){return relative?0:this._clones.length / 2;};Owl.prototype.items=function(position){if(position===undefined){return this._items.slice();}
position=this.normalize(position,true);return this._items[position];};Owl.prototype.mergers=function(position){if(position===undefined){return this._mergers.slice();}
position=this.normalize(position,true);return this._mergers[position];};Owl.prototype.clones=function(position){var odd=this._clones.length / 2,even=odd+this._items.length,map=function(index){return index%2===0?even+index / 2:odd-(index+1)/ 2};if(position===undefined){return $.map(this._clones,function(v,i){return map(i)});}
return $.map(this._clones,function(v,i){return v===position?map(i):null});};Owl.prototype.speed=function(speed){if(speed!==undefined){this._speed=speed;}
return this._speed;};Owl.prototype.coordinates=function(position){var multiplier=1,newPosition=position-1,coordinate;if(position===undefined){return $.map(this._coordinates,$.proxy(function(coordinate,index){return this.coordinates(index);},this));}
if(this.settings.center){if(this.settings.rtl){multiplier=-1;newPosition=position+1;}
coordinate=this._coordinates[position];coordinate+=(this.width()-coordinate+(this._coordinates[newPosition]||0))/ 2*multiplier;}else{coordinate=this._coordinates[newPosition]||0;}
coordinate=Math.ceil(coordinate);return coordinate;};Owl.prototype.duration=function(from,to,factor){if(factor===0){return 0;}
return Math.min(Math.max(Math.abs(to-from),1),6)*Math.abs((factor||this.settings.smartSpeed));};Owl.prototype.to=function(position,speed){var current=this.current(),revert=null,distance=position-this.relative(current),direction=(distance>0)-(distance<0),items=this._items.length,minimum=this.minimum(),maximum=this.maximum();if(this.settings.loop){if(!this.settings.rewind&&Math.abs(distance)>items / 2){distance+=direction*-1*items;}
position=current+distance;revert=((position-minimum)%items+items)%items+minimum;if(revert!==position&&revert-distance<=maximum&&revert-distance>0){current=revert-distance;position=revert;this.reset(current);}}else if(this.settings.rewind){maximum+=1;position=(position%maximum+maximum)%maximum;}else{position=Math.max(minimum,Math.min(maximum,position));}
this.speed(this.duration(current,position,speed));this.current(position);if(this.isVisible()){this.update();}};Owl.prototype.next=function(speed){speed=speed||false;this.to(this.relative(this.current())+1,speed);};Owl.prototype.prev=function(speed){speed=speed||false;this.to(this.relative(this.current())-1,speed);};Owl.prototype.onTransitionEnd=function(event){if(event!==undefined){event.stopPropagation();if((event.target||event.srcElement||event.originalTarget)!==this.$stage.get(0)){return false;}}
this.leave('animating');this.trigger('translated');};Owl.prototype.viewport=function(){var width;if(this.options.responsiveBaseElement!==window){width=$(this.options.responsiveBaseElement).width();}else if(window.innerWidth){width=window.innerWidth;}else if(document.documentElement&&document.documentElement.clientWidth){width=document.documentElement.clientWidth;}else{console.warn('Can not detect viewport width.');}
return width;};Owl.prototype.replace=function(content){this.$stage.empty();this._items=[];if(content){content=(content instanceof jQuery)?content:$(content);}
if(this.settings.nestedItemSelector){content=content.find('.'+this.settings.nestedItemSelector);}
content.filter(function(){return this.nodeType===1;}).each($.proxy(function(index,item){item=this.prepare(item);this.$stage.append(item);this._items.push(item);this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge')*1||1);},this));this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0);this.invalidate('items');};Owl.prototype.add=function(content,position){var current=this.relative(this._current);position=position===undefined?this._items.length:this.normalize(position,true);content=content instanceof jQuery?content:$(content);this.trigger('add',{content:content,position:position});content=this.prepare(content);if(this._items.length===0||position===this._items.length){this._items.length===0&&this.$stage.append(content);this._items.length!==0&&this._items[position-1].after(content);this._items.push(content);this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge')*1||1);}else{this._items[position].before(content);this._items.splice(position,0,content);this._mergers.splice(position,0,content.find('[data-merge]').addBack('[data-merge]').attr('data-merge')*1||1);}
this._items[current]&&this.reset(this._items[current].index());this.invalidate('items');this.trigger('added',{content:content,position:position});};Owl.prototype.remove=function(position){position=this.normalize(position,true);if(position===undefined){return;}
this.trigger('remove',{content:this._items[position],position:position});this._items[position].remove();this._items.splice(position,1);this._mergers.splice(position,1);this.invalidate('items');this.trigger('removed',{content:null,position:position});};Owl.prototype.preloadAutoWidthImages=function(images){images.each($.proxy(function(i,element){this.enter('pre-loading');element=$(element);$(new Image()).one('load',$.proxy(function(e){element.attr('src',e.target.src);element.css('opacity',1);this.leave('pre-loading');!this.is('pre-loading')&&!this.is('initializing')&&this.refresh();},this)).attr('src',element.attr('src')||element.attr('data-src')||element.attr('data-src-retina'));},this));};Owl.prototype.destroy=function(){this.$element.off('.owl.core');this.$stage.off('.owl.core');$(document).off('.owl.core');if(this.settings.responsive!==false){window.clearTimeout(this.resizeTimer);this.off(window,'resize',this._handlers.onThrottledResize);}
for(var i in this._plugins){this._plugins[i].destroy();}
this.$stage.children('.cloned').remove();this.$stage.unwrap();this.$stage.children().contents().unwrap();this.$stage.children().unwrap();this.$stage.remove();this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr('class',this.$element.attr('class').replace(new RegExp(this.options.responsiveClass+'-\\S+\\s','g'),'')).removeData('owl.carousel');};Owl.prototype.op=function(a,o,b){var rtl=this.settings.rtl;switch(o){case'<':return rtl?a>b:a<b;case'>':return rtl?a<b:a>b;case'>=':return rtl?a<=b:a>=b;case'<=':return rtl?a>=b:a<=b;default:break;}};Owl.prototype.on=function(element,event,listener,capture){if(element.addEventListener){element.addEventListener(event,listener,capture);}else if(element.attachEvent){element.attachEvent('on'+event,listener);}};Owl.prototype.off=function(element,event,listener,capture){if(element.removeEventListener){element.removeEventListener(event,listener,capture);}else if(element.detachEvent){element.detachEvent('on'+event,listener);}};Owl.prototype.trigger=function(name,data,namespace,state,enter){var status={item:{count:this._items.length,index:this.current()}},handler=$.camelCase($.grep(['on',name,namespace],function(v){return v}).join('-').toLowerCase()),event=$.Event([name,'owl',namespace||'carousel'].join('.').toLowerCase(),$.extend({relatedTarget:this},status,data));if(!this._supress[name]){$.each(this._plugins,function(name,plugin){if(plugin.onTrigger){plugin.onTrigger(event);}});this.register({type:Owl.Type.Event,name:name});this.$element.trigger(event);if(this.settings&&typeof this.settings[handler]==='function'){this.settings[handler].call(this,event);}}
return event;};Owl.prototype.enter=function(name){$.each([name].concat(this._states.tags[name]||[]),$.proxy(function(i,name){if(this._states.current[name]===undefined){this._states.current[name]=0;}
this._states.current[name]++;},this));};Owl.prototype.leave=function(name){$.each([name].concat(this._states.tags[name]||[]),$.proxy(function(i,name){this._states.current[name]--;},this));};Owl.prototype.register=function(object){if(object.type===Owl.Type.Event){if(!$.event.special[object.name]){$.event.special[object.name]={};}
if(!$.event.special[object.name].owl){var _default=$.event.special[object.name]._default;$.event.special[object.name]._default=function(e){if(_default&&_default.apply&&(!e.namespace||e.namespace.indexOf('owl')===-1)){return _default.apply(this,arguments);}
return e.namespace&&e.namespace.indexOf('owl')>-1;};$.event.special[object.name].owl=true;}}else if(object.type===Owl.Type.State){if(!this._states.tags[object.name]){this._states.tags[object.name]=object.tags;}else{this._states.tags[object.name]=this._states.tags[object.name].concat(object.tags);}
this._states.tags[object.name]=$.grep(this._states.tags[object.name],$.proxy(function(tag,i){return $.inArray(tag,this._states.tags[object.name])===i;},this));}};Owl.prototype.suppress=function(events){$.each(events,$.proxy(function(index,event){this._supress[event]=true;},this));};Owl.prototype.release=function(events){$.each(events,$.proxy(function(index,event){delete this._supress[event];},this));};Owl.prototype.pointer=function(event){var result={x:null,y:null};event=event.originalEvent||event||window.event;event=event.touches&&event.touches.length?event.touches[0]:event.changedTouches&&event.changedTouches.length?event.changedTouches[0]:event;if(event.pageX){result.x=event.pageX;result.y=event.pageY;}else{result.x=event.clientX;result.y=event.clientY;}
return result;};Owl.prototype.isNumeric=function(number){return!isNaN(parseFloat(number));};Owl.prototype.difference=function(first,second){return{x:first.x-second.x,y:first.y-second.y};};$.fn.owlCarousel=function(option){var args=Array.prototype.slice.call(arguments,1);return this.each(function(){var $this=$(this),data=$this.data('owl.carousel');if(!data){data=new Owl(this,typeof option=='object'&&option);$this.data('owl.carousel',data);$.each(['next','prev','to','destroy','refresh','replace','add','remove'],function(i,event){data.register({type:Owl.Type.Event,name:event});data.$element.on(event+'.owl.carousel.core',$.proxy(function(e){if(e.namespace&&e.relatedTarget!==this){this.suppress([event]);data[event].apply(this,[].slice.call(arguments,1));this.release([event]);}},data));});}
if(typeof option=='string'&&option.charAt(0)!=='_'){data[option].apply(data,args);}});};$.fn.owlCarousel.Constructor=Owl;})(window.Zepto||window.jQuery,window,document);;(function($,window,document,undefined){var AutoRefresh=function(carousel){this._core=carousel;this._interval=null;this._visible=null;this._handlers={'initialized.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.autoRefresh){this.watch();}},this)};this._core.options=$.extend({},AutoRefresh.Defaults,this._core.options);this._core.$element.on(this._handlers);};AutoRefresh.Defaults={autoRefresh:true,autoRefreshInterval:500};AutoRefresh.prototype.watch=function(){if(this._interval){return;}
this._visible=this._core.isVisible();this._interval=window.setInterval($.proxy(this.refresh,this),this._core.settings.autoRefreshInterval);};AutoRefresh.prototype.refresh=function(){if(this._core.isVisible()===this._visible){return;}
this._visible=!this._visible;this._core.$element.toggleClass('owl-hidden',!this._visible);this._visible&&(this._core.invalidate('width')&&this._core.refresh());};AutoRefresh.prototype.destroy=function(){var handler,property;window.clearInterval(this._interval);for(handler in this._handlers){this._core.$element.off(handler,this._handlers[handler]);}
for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};$.fn.owlCarousel.Constructor.Plugins.AutoRefresh=AutoRefresh;})(window.Zepto||window.jQuery,window,document);;(function($,window,document,undefined){var Lazy=function(carousel){this._core=carousel;this._loaded=[];this._handlers={'initialized.owl.carousel change.owl.carousel resized.owl.carousel':$.proxy(function(e){if(!e.namespace){return;}
if(!this._core.settings||!this._core.settings.lazyLoad){return;}
if((e.property&&e.property.name=='position')||e.type=='initialized'){var settings=this._core.settings,n=(settings.center&&Math.ceil(settings.items / 2)||settings.items),i=((settings.center&&n*-1)||0),position=(e.property&&e.property.value!==undefined?e.property.value:this._core.current())+i,clones=this._core.clones().length,load=$.proxy(function(i,v){this.load(v)},this);if(settings.lazyLoadEager>0){n+=settings.lazyLoadEager;if(settings.loop){position-=settings.lazyLoadEager;n++;}}
while(i++<n){this.load(clones / 2+this._core.relative(position));clones&&$.each(this._core.clones(this._core.relative(position)),load);position++;}}},this)};this._core.options=$.extend({},Lazy.Defaults,this._core.options);this._core.$element.on(this._handlers);};Lazy.Defaults={lazyLoad:false,lazyLoadEager:0};Lazy.prototype.load=function(position){var $item=this._core.$stage.children().eq(position),$elements=$item&&$item.find('.owl-lazy');if(!$elements||$.inArray($item.get(0),this._loaded)>-1){return;}
$elements.each($.proxy(function(index,element){var $element=$(element),image,url=(window.devicePixelRatio>1&&$element.attr('data-src-retina'))||$element.attr('data-src')||$element.attr('data-srcset');this._core.trigger('load',{element:$element,url:url},'lazy');if($element.is('img')){$element.one('load.owl.lazy',$.proxy(function(){$element.css('opacity',1);this._core.trigger('loaded',{element:$element,url:url},'lazy');},this)).attr('src',url);}else if($element.is('source')){$element.one('load.owl.lazy',$.proxy(function(){this._core.trigger('loaded',{element:$element,url:url},'lazy');},this)).attr('srcset',url);}else{image=new Image();image.onload=$.proxy(function(){$element.css({'background-image':'url("'+url+'")','opacity':'1'});this._core.trigger('loaded',{element:$element,url:url},'lazy');},this);image.src=url;}},this));this._loaded.push($item.get(0));};Lazy.prototype.destroy=function(){var handler,property;for(handler in this.handlers){this._core.$element.off(handler,this.handlers[handler]);}
for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};$.fn.owlCarousel.Constructor.Plugins.Lazy=Lazy;})(window.Zepto||window.jQuery,window,document);;(function($,window,document,undefined){var AutoHeight=function(carousel){this._core=carousel;this._previousHeight=null;this._handlers={'initialized.owl.carousel refreshed.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.autoHeight){this.update();}},this),'changed.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.autoHeight&&e.property.name==='position'){this.update();}},this),'loaded.owl.lazy':$.proxy(function(e){if(e.namespace&&this._core.settings.autoHeight&&e.element.closest('.'+this._core.settings.itemClass).index()===this._core.current()){this.update();}},this)};this._core.options=$.extend({},AutoHeight.Defaults,this._core.options);this._core.$element.on(this._handlers);this._intervalId=null;var refThis=this;$(window).on('load',function(){if(refThis._core.settings.autoHeight){refThis.update();}});$(window).resize(function(){if(refThis._core.settings.autoHeight){if(refThis._intervalId!=null){clearTimeout(refThis._intervalId);}
refThis._intervalId=setTimeout(function(){refThis.update();},250);}});};AutoHeight.Defaults={autoHeight:false,autoHeightClass:'owl-height'};AutoHeight.prototype.update=function(){var start=this._core._current,end=start+this._core.settings.items,lazyLoadEnabled=this._core.settings.lazyLoad,visible=this._core.$stage.children().toArray().slice(start,end),heights=[],maxheight=0;$.each(visible,function(index,item){heights.push($(item).height());});maxheight=Math.max.apply(null,heights);if(maxheight<=1&&lazyLoadEnabled&&this._previousHeight){maxheight=this._previousHeight;}
this._previousHeight=maxheight;this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass);};AutoHeight.prototype.destroy=function(){var handler,property;for(handler in this._handlers){this._core.$element.off(handler,this._handlers[handler]);}
for(property in Object.getOwnPropertyNames(this)){typeof this[property]!=='function'&&(this[property]=null);}};$.fn.owlCarousel.Constructor.Plugins.AutoHeight=AutoHeight;})(window.Zepto||window.jQuery,window,document);;(function($,window,document,undefined){var Video=function(carousel){this._core=carousel;this._videos={};this._playing=null;this._handlers={'initialized.owl.carousel':$.proxy(function(e){if(e.namespace){this._core.register({type:'state',name:'playing',tags:['interacting']});}},this),'resize.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.video&&this.isInFullScreen()){e.preventDefault();}},this),'refreshed.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.is('resizing')){this._core.$stage.find('.cloned .owl-video-frame').remove();}},this),'changed.owl.carousel':$.proxy(function(e){if(e.namespace&&e.property.name==='position'&&this._playing){this.stop();}},this),'prepared.owl.carousel':$.proxy(function(e){if(!e.namespace){return;}
var $element=$(e.content).find('.owl-video');if($element.length){$element.css('display','none');this.fetch($element,$(e.content));}},this)};this._core.options=$.extend({},Video.Defaults,this._core.options);this._core.$element.on(this._handlers);this._core.$element.on('click.owl.video','.owl-video-play-icon',$.proxy(function(e){this.play(e);},this));};Video.Defaults={video:false,videoHeight:false,videoWidth:false};Video.prototype.fetch=function(target,item){var type=(function(){if(target.attr('data-vimeo-id')){return'vimeo';}else if(target.attr('data-vzaar-id')){return'vzaar'}else{return'youtube';}})(),id=target.attr('data-vimeo-id')||target.attr('data-youtube-id')||target.attr('data-vzaar-id'),width=target.attr('data-width')||this._core.settings.videoWidth,height=target.attr('data-height')||this._core.settings.videoHeight,url=target.attr('href');if(url){id=url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);if(id[3].indexOf('youtu')>-1){type='youtube';}else if(id[3].indexOf('vimeo')>-1){type='vimeo';}else if(id[3].indexOf('vzaar')>-1){type='vzaar';}else{throw new Error('Video URL not supported.');}
id=id[6];}else{throw new Error('Missing video URL.');}
this._videos[url]={type:type,id:id,width:width,height:height};item.attr('data-video',url);this.thumbnail(target,this._videos[url]);};Video.prototype.thumbnail=function(target,video){var tnLink,icon,path,dimensions=video.width&&video.height?'width:'+video.width+'px;height:'+video.height+'px;':'',customTn=target.find('img'),srcType='src',lazyClass='',settings=this._core.settings,create=function(path){icon='<div class="owl-video-play-icon"></div>';if(settings.lazyLoad){tnLink=$('<div/>',{"class":'owl-video-tn '+lazyClass,"srcType":path});}else{tnLink=$('<div/>',{"class":"owl-video-tn","style":'opacity:1;background-image:url('+path+')'});}
target.after(tnLink);target.after(icon);};target.wrap($('<div/>',{"class":"owl-video-wrapper","style":dimensions}));if(this._core.settings.lazyLoad){srcType='data-src';lazyClass='owl-lazy';}
if(customTn.length){create(customTn.attr(srcType));customTn.remove();return false;}
if(video.type==='youtube'){path="//img.youtube.com/vi/"+video.id+"/hqdefault.jpg";create(path);}else if(video.type==='vimeo'){$.ajax({type:'GET',url:'//vimeo.com/api/v2/video/'+video.id+'.json',jsonp:'callback',dataType:'jsonp',success:function(data){path=data[0].thumbnail_large;create(path);}});}else if(video.type==='vzaar'){$.ajax({type:'GET',url:'//vzaar.com/api/videos/'+video.id+'.json',jsonp:'callback',dataType:'jsonp',success:function(data){path=data.framegrab_url;create(path);}});}};Video.prototype.stop=function(){this._core.trigger('stop',null,'video');this._playing.find('.owl-video-frame').remove();this._playing.removeClass('owl-video-playing');this._playing=null;this._core.leave('playing');this._core.trigger('stopped',null,'video');};Video.prototype.play=function(event){var target=$(event.target),item=target.closest('.'+this._core.settings.itemClass),video=this._videos[item.attr('data-video')],width=video.width||'100%',height=video.height||this._core.$stage.height(),html,iframe;if(this._playing){return;}
this._core.enter('playing');this._core.trigger('play',null,'video');item=this._core.items(this._core.relative(item.index()));this._core.reset(item.index());html=$('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>');html.attr('height',height);html.attr('width',width);if(video.type==='youtube'){html.attr('src','//www.youtube.com/embed/'+video.id+'?autoplay=1&rel=0&v='+video.id);}else if(video.type==='vimeo'){html.attr('src','//player.vimeo.com/video/'+video.id+'?autoplay=1');}else if(video.type==='vzaar'){html.attr('src','//view.vzaar.com/'+video.id+'/player?autoplay=true');}
iframe=$(html).wrap('<div class="owl-video-frame" />').insertAfter(item.find('.owl-video'));this._playing=item.addClass('owl-video-playing');};Video.prototype.isInFullScreen=function(){var element=document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement;return element&&$(element).parent().hasClass('owl-video-frame');};Video.prototype.destroy=function(){var handler,property;this._core.$element.off('click.owl.video');for(handler in this._handlers){this._core.$element.off(handler,this._handlers[handler]);}
for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};$.fn.owlCarousel.Constructor.Plugins.Video=Video;})(window.Zepto||window.jQuery,window,document);;(function($,window,document,undefined){var Animate=function(scope){this.core=scope;this.core.options=$.extend({},Animate.Defaults,this.core.options);this.swapping=true;this.previous=undefined;this.next=undefined;this.handlers={'change.owl.carousel':$.proxy(function(e){if(e.namespace&&e.property.name=='position'){this.previous=this.core.current();this.next=e.property.value;}},this),'drag.owl.carousel dragged.owl.carousel translated.owl.carousel':$.proxy(function(e){if(e.namespace){this.swapping=e.type=='translated';}},this),'translate.owl.carousel':$.proxy(function(e){if(e.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)){this.swap();}},this)};this.core.$element.on(this.handlers);};Animate.Defaults={animateOut:false,animateIn:false};Animate.prototype.swap=function(){if(this.core.settings.items!==1){return;}
if(!$.support.animation||!$.support.transition){return;}
this.core.speed(0);var left,clear=$.proxy(this.clear,this),previous=this.core.$stage.children().eq(this.previous),next=this.core.$stage.children().eq(this.next),incoming=this.core.settings.animateIn,outgoing=this.core.settings.animateOut;if(this.core.current()===this.previous){return;}
if(outgoing){left=this.core.coordinates(this.previous)-this.core.coordinates(this.next);previous.one($.support.animation.end,clear).css({'left':left+'px'}).addClass('animated owl-animated-out').addClass(outgoing);}
if(incoming){next.one($.support.animation.end,clear).addClass('animated owl-animated-in').addClass(incoming);}};Animate.prototype.clear=function(e){$(e.target).css({'left':''}).removeClass('animated owl-animated-out owl-animated-in').removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);this.core.onTransitionEnd();};Animate.prototype.destroy=function(){var handler,property;for(handler in this.handlers){this.core.$element.off(handler,this.handlers[handler]);}
for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};$.fn.owlCarousel.Constructor.Plugins.Animate=Animate;})(window.Zepto||window.jQuery,window,document);;(function($,window,document,undefined){var Autoplay=function(carousel){this._core=carousel;this._call=null;this._time=0;this._timeout=0;this._paused=true;this._handlers={'changed.owl.carousel':$.proxy(function(e){if(e.namespace&&e.property.name==='settings'){if(this._core.settings.autoplay){this.play();}else{this.stop();}}else if(e.namespace&&e.property.name==='position'&&this._paused){this._time=0;}},this),'initialized.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.autoplay){this.play();}},this),'play.owl.autoplay':$.proxy(function(e,t,s){if(e.namespace){this.play(t,s);}},this),'stop.owl.autoplay':$.proxy(function(e){if(e.namespace){this.stop();}},this),'mouseover.owl.autoplay':$.proxy(function(){if(this._core.settings.autoplayHoverPause&&this._core.is('rotating')){this.pause();}},this),'mouseleave.owl.autoplay':$.proxy(function(){if(this._core.settings.autoplayHoverPause&&this._core.is('rotating')){this.play();}},this),'touchstart.owl.core':$.proxy(function(){if(this._core.settings.autoplayHoverPause&&this._core.is('rotating')){this.pause();}},this),'touchend.owl.core':$.proxy(function(){if(this._core.settings.autoplayHoverPause){this.play();}},this)};this._core.$element.on(this._handlers);this._core.options=$.extend({},Autoplay.Defaults,this._core.options);};Autoplay.Defaults={autoplay:false,autoplayTimeout:5000,autoplayHoverPause:false,autoplaySpeed:false};Autoplay.prototype._next=function(speed){this._call=window.setTimeout($.proxy(this._next,this,speed),this._timeout*(Math.round(this.read()/ this._timeout)+1)-this.read());if(this._core.is('interacting')||document.hidden){return;}
this._core.next(speed||this._core.settings.autoplaySpeed);}
Autoplay.prototype.read=function(){return new Date().getTime()-this._time;};Autoplay.prototype.play=function(timeout,speed){var elapsed;if(!this._core.is('rotating')){this._core.enter('rotating');}
timeout=timeout||this._core.settings.autoplayTimeout;elapsed=Math.min(this._time%(this._timeout||timeout),timeout);if(this._paused){this._time=this.read();this._paused=false;}else{window.clearTimeout(this._call);}
this._time+=this.read()%timeout-elapsed;this._timeout=timeout;this._call=window.setTimeout($.proxy(this._next,this,speed),timeout-elapsed);};Autoplay.prototype.stop=function(){if(this._core.is('rotating')){this._time=0;this._paused=true;window.clearTimeout(this._call);this._core.leave('rotating');}};Autoplay.prototype.pause=function(){if(this._core.is('rotating')&&!this._paused){this._time=this.read();this._paused=true;window.clearTimeout(this._call);}};Autoplay.prototype.destroy=function(){var handler,property;this.stop();for(handler in this._handlers){this._core.$element.off(handler,this._handlers[handler]);}
for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};$.fn.owlCarousel.Constructor.Plugins.autoplay=Autoplay;})(window.Zepto||window.jQuery,window,document);;(function($,window,document,undefined){'use strict';var Navigation=function(carousel){this._core=carousel;this._initialized=false;this._pages=[];this._controls={};this._templates=[];this.$element=this._core.$element;this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to};this._handlers={'prepared.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.dotsData){this._templates.push('<div class="'+this._core.settings.dotClass+'">'+
$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot')+'</div>');}},this),'added.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.dotsData){this._templates.splice(e.position,0,this._templates.pop());}},this),'remove.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.dotsData){this._templates.splice(e.position,1);}},this),'changed.owl.carousel':$.proxy(function(e){if(e.namespace&&e.property.name=='position'){this.draw();}},this),'initialized.owl.carousel':$.proxy(function(e){if(e.namespace&&!this._initialized){this._core.trigger('initialize',null,'navigation');this.initialize();this.update();this.draw();this._initialized=true;this._core.trigger('initialized',null,'navigation');}},this),'refreshed.owl.carousel':$.proxy(function(e){if(e.namespace&&this._initialized){this._core.trigger('refresh',null,'navigation');this.update();this.draw();this._core.trigger('refreshed',null,'navigation');}},this)};this._core.options=$.extend({},Navigation.Defaults,this._core.options);this.$element.on(this._handlers);};Navigation.Defaults={nav:false,navText:['<span aria-label="'+'Previous'+'">&#x2039;</span>','<span aria-label="'+'Next'+'">&#x203a;</span>'],navSpeed:false,navElement:'button type="button" role="presentation"',navContainer:false,navContainerClass:'owl-nav',navClass:['owl-prev','owl-next'],slideBy:1,dotClass:'owl-dot',dotsClass:'owl-dots',dots:true,dotsEach:false,dotsData:false,dotsSpeed:false,dotsContainer:false};Navigation.prototype.initialize=function(){var override,settings=this._core.settings;this._controls.$relative=(settings.navContainer?$(settings.navContainer):$('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');this._controls.$previous=$('<'+settings.navElement+'>').addClass(settings.navClass[0]).html(settings.navText[0]).prependTo(this._controls.$relative).on('click',$.proxy(function(e){this.prev(settings.navSpeed);},this));this._controls.$next=$('<'+settings.navElement+'>').addClass(settings.navClass[1]).html(settings.navText[1]).appendTo(this._controls.$relative).on('click',$.proxy(function(e){this.next(settings.navSpeed);},this));if(!settings.dotsData){this._templates=[$('<button role="button">').addClass(settings.dotClass).append($('<span>')).prop('outerHTML')];}
this._controls.$absolute=(settings.dotsContainer?$(settings.dotsContainer):$('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');this._controls.$absolute.on('click','button',$.proxy(function(e){var index=$(e.target).parent().is(this._controls.$absolute)?$(e.target).index():$(e.target).parent().index();e.preventDefault();this.to(index,settings.dotsSpeed);},this));for(override in this._overrides){this._core[override]=$.proxy(this[override],this);}};Navigation.prototype.destroy=function(){var handler,control,property,override,settings;settings=this._core.settings;for(handler in this._handlers){this.$element.off(handler,this._handlers[handler]);}
for(control in this._controls){if(control==='$relative'&&settings.navContainer){this._controls[control].html('');}else{this._controls[control].remove();}}
for(override in this.overides){this._core[override]=this._overrides[override];}
for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};Navigation.prototype.update=function(){var i,j,k,lower=this._core.clones().length / 2,upper=lower+this._core.items().length,maximum=this._core.maximum(true),settings=this._core.settings,size=settings.center||settings.autoWidth||settings.dotsData?1:settings.dotsEach||settings.items;if(settings.slideBy!=='page'){settings.slideBy=Math.min(settings.slideBy,settings.items);}
if(settings.dots||settings.slideBy=='page'){this._pages=[];for(i=lower,j=0,k=0;i<upper;i++){if(j>=size||j===0){this._pages.push({start:Math.min(maximum,i-lower),end:i-lower+size-1});if(Math.min(maximum,i-lower)===maximum){break;}
j=0,++k;}
j+=this._core.mergers(this._core.relative(i));}}};Navigation.prototype.draw=function(){var difference,settings=this._core.settings,disabled=this._core.items().length<=settings.items,index=this._core.relative(this._core.current()),loop=settings.loop||settings.rewind;this._controls.$relative.toggleClass('disabled',!settings.nav||disabled);if(settings.nav){this._controls.$previous.toggleClass('disabled',!loop&&index<=this._core.minimum(true));this._controls.$next.toggleClass('disabled',!loop&&index>=this._core.maximum(true));}
this._controls.$absolute.toggleClass('disabled',!settings.dots||disabled);if(settings.dots){difference=this._pages.length-this._controls.$absolute.children().length;if(settings.dotsData&&difference!==0){this._controls.$absolute.html(this._templates.join(''));}else if(difference>0){this._controls.$absolute.append(new Array(difference+1).join(this._templates[0]));}else if(difference<0){this._controls.$absolute.children().slice(difference).remove();}
this._controls.$absolute.find('.active').removeClass('active');this._controls.$absolute.children().eq($.inArray(this.current(),this._pages)).addClass('active');}};Navigation.prototype.onTrigger=function(event){var settings=this._core.settings;event.page={index:$.inArray(this.current(),this._pages),count:this._pages.length,size:settings&&(settings.center||settings.autoWidth||settings.dotsData?1:settings.dotsEach||settings.items)};};Navigation.prototype.current=function(){var current=this._core.relative(this._core.current());return $.grep(this._pages,$.proxy(function(page,index){return page.start<=current&&page.end>=current;},this)).pop();};Navigation.prototype.getPosition=function(successor){var position,length,settings=this._core.settings;if(settings.slideBy=='page'){position=$.inArray(this.current(),this._pages);length=this._pages.length;successor?++position:--position;position=this._pages[((position%length)+length)%length].start;}else{position=this._core.relative(this._core.current());length=this._core.items().length;successor?position+=settings.slideBy:position-=settings.slideBy;}
return position;};Navigation.prototype.next=function(speed){$.proxy(this._overrides.to,this._core)(this.getPosition(true),speed);};Navigation.prototype.prev=function(speed){$.proxy(this._overrides.to,this._core)(this.getPosition(false),speed);};Navigation.prototype.to=function(position,speed,standard){var length;if(!standard&&this._pages.length){length=this._pages.length;$.proxy(this._overrides.to,this._core)(this._pages[((position%length)+length)%length].start,speed);}else{$.proxy(this._overrides.to,this._core)(position,speed);}};$.fn.owlCarousel.Constructor.Plugins.Navigation=Navigation;})(window.Zepto||window.jQuery,window,document);;(function($,window,document,undefined){'use strict';var Hash=function(carousel){this._core=carousel;this._hashes={};this.$element=this._core.$element;this._handlers={'initialized.owl.carousel':$.proxy(function(e){if(e.namespace&&this._core.settings.startPosition==='URLHash'){$(window).trigger('hashchange.owl.navigation');}},this),'prepared.owl.carousel':$.proxy(function(e){if(e.namespace){var hash=$(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');if(!hash){return;}
this._hashes[hash]=e.content;}},this),'changed.owl.carousel':$.proxy(function(e){if(e.namespace&&e.property.name==='position'){var current=this._core.items(this._core.relative(this._core.current())),hash=$.map(this._hashes,function(item,hash){return item===current?hash:null;}).join();if(!hash||window.location.hash.slice(1)===hash){return;}
window.location.hash=hash;}},this)};this._core.options=$.extend({},Hash.Defaults,this._core.options);this.$element.on(this._handlers);$(window).on('hashchange.owl.navigation',$.proxy(function(e){var hash=window.location.hash.substring(1),items=this._core.$stage.children(),position=this._hashes[hash]&&items.index(this._hashes[hash]);if(position===undefined||position===this._core.current()){return;}
this._core.to(this._core.relative(position),false,true);},this));};Hash.Defaults={URLhashListener:false};Hash.prototype.destroy=function(){var handler,property;$(window).off('hashchange.owl.navigation');for(handler in this._handlers){this._core.$element.off(handler,this._handlers[handler]);}
for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null);}};$.fn.owlCarousel.Constructor.Plugins.Hash=Hash;})(window.Zepto||window.jQuery,window,document);;(function($,window,document,undefined){var style=$('<support>').get(0).style,prefixes='Webkit Moz O ms'.split(' '),events={transition:{end:{WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd',transition:'transitionend'}},animation:{end:{WebkitAnimation:'webkitAnimationEnd',MozAnimation:'animationend',OAnimation:'oAnimationEnd',animation:'animationend'}}},tests={csstransforms:function(){return!!test('transform');},csstransforms3d:function(){return!!test('perspective');},csstransitions:function(){return!!test('transition');},cssanimations:function(){return!!test('animation');}};function test(property,prefixed){var result=false,upper=property.charAt(0).toUpperCase()+property.slice(1);$.each((property+' '+prefixes.join(upper+' ')+upper).split(' '),function(i,property){if(style[property]!==undefined){result=prefixed?property:true;return false;}});return result;}
function prefixed(property){return test(property,true);}
if(tests.csstransitions()){$.support.transition=new String(prefixed('transition'))
$.support.transition.end=events.transition.end[$.support.transition];}
if(tests.cssanimations()){$.support.animation=new String(prefixed('animation'))
$.support.animation.end=events.animation.end[$.support.animation];}
if(tests.csstransforms()){$.support.transform=new String(prefixed('transform'));$.support.transform3d=tests.csstransforms3d();}})(window.Zepto||window.jQuery,window,document);;;
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,o){var n,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,o);n=void 0===n?l:n}),void 0!==n?n:t}function h(t,e){t.each(function(t,o){var n=a.data(o,i);n?(n.option(e),n._init()):(n=new s(o,e),a.data(o,i,n))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=n.call(arguments,1);return u(this,t,e)}return h(this,t),this},o(a))}function o(t){!t||t&&t.bridget||(t.bridget=i)}var n=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return o(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},o=i[t]=i[t]||[];return o.indexOf(e)==-1&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},o=i[t]=i[t]||{};return o[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=i.indexOf(e);return o!=-1&&i.splice(o,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var o=this._onceEvents&&this._onceEvents[t],n=0;n<i.length;n++){var s=i[n],r=o&&o[s];r&&(this.off(t,s),delete o[s]),s.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<h;e++){var i=u[e];t[i]=0}return t}function o(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function n(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var n=o(e);r=200==Math.round(t(n.width)),s.isBoxSizeOuter=r,i.removeChild(e)}}function s(e){if(n(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=o(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;l<h;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,I=d&&r,x=t(s.width);x!==!1&&(a.width=x+(I?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(I?0:y+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+z),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var o=e[i],n=o+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var o=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?o.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);i!=-1&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,o){t=i.makeArray(t);var n=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!o)return void n.push(t);e(t,o)&&n.push(t);for(var i=t.querySelectorAll(o),s=0;s<i.length;s++)n.push(i[s])}}),n},i.debounceMethod=function(t,e,i){i=i||100;var o=t.prototype[e],n=e+"Timeout";t.prototype[e]=function(){var t=this[n];clearTimeout(t);var e=arguments,s=this;this[n]=setTimeout(function(){o.apply(s,e),delete s[n]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var s=i.toDashed(o),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(n&&n.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,o,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function o(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=o.prototype=Object.create(t.prototype);d.constructor=o,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var o=h[i]||i;e[o]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=t[e?"left":"right"],n=t[i?"top":"bottom"],s=parseFloat(o),r=parseFloat(n),a=this.layout.size;o.indexOf("%")!=-1&&(s=s/100*a.width),n.indexOf("%")!=-1&&(r=r/100*a.height),s=isNaN(s)?0:s,r=isNaN(r)?0:r,s-=e?a.paddingLeft:a.paddingRight,r-=i?a.paddingTop:a.paddingBottom,this.position.x=s,this.position.y=r},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),n=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[n];e[s]=this.getXValue(a),e[r]="";var u=o?"paddingTop":"paddingBottom",h=o?"top":"bottom",d=o?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),n&&!this.isTransitioning)return void this.layoutPosition();var s=t-i,r=e-o,a={};a.transform=this.getTranslate(s,r),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop");return t=i?t:-t,e=o?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+n(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},o}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,o,n,s){return e(t,i,o,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,o,n){"use strict";function s(t,e){var i=o.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=o.extend({},this.constructor.defaults),this.option(e);var n=++l;this.element.outlayerGUID=n,f[n]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],o=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var n=m[o]||1;return i*n}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=n,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;o.extend(c,e.prototype),c.option=function(t){o.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),o.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0;n<e.length;n++){var s=e[n],r=new i(s,this);o.push(r)}return o},c._filterFindItemElements=function(t){return o.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var o,n=this.options[t];n?("string"==typeof n?o=this.element.querySelector(n):n instanceof HTMLElement&&(o=n),this[t]=o?i(o)[e]:n):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var o=this._getItemLayoutPosition(t);o.item=t,o.isInstant=e||t.isLayoutInstant,i.push(o)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,o,n){o?t.goTo(e,i):(t.stagger(n*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){n.dispatchEvent(t+"Complete",null,[e])}function o(){r++,r==s&&i()}var n=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,o)})},c.dispatchEvent=function(t,e,i){var o=e?[e].concat(i):i;if(this.emitEvent(t,o),h)if(this.$element=this.$element||h(this.element),e){var n=h.Event(e);n.type=t,this.$element.trigger(n,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){o.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o.makeArray(t)},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),o=this._boundingRect,n=i(t),s={left:e.left-o.left-n.marginLeft,top:e.top-o.top-n.marginTop,right:o.right-e.right-n.marginRight,bottom:o.bottom-e.bottom-n.marginBottom};return s},c.handleEvent=o.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},o.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=o.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),o.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=o.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=o.extend({},s.defaults),o.extend(i.defaults,e),i.compatOptions=o.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(n),o.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=n,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),o=i._create;i._create=function(){this.id=this.layout.itemGUID++,o.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var n=i.destroy;return i.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var o=i.prototype,n=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return n.forEach(function(t){o[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),o.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},o._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},o.getColumnWidth=function(){this.getSegmentSize("column","Width")},o.getRowHeight=function(){this.getSegmentSize("row","Height")},o.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},o.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},o.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},o.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function n(){i.apply(this,arguments)}return n.prototype=Object.create(o),n.prototype.constructor=n,e&&(n.options=e),n.prototype.namespace=t,i.modes[t]=n,n},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry-layout/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var o=i.prototype;return o._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},o.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,s=n/o,r=o-n%o,a=r&&r<1?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},o.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,o=e(i);this.containerWidth=o&&o.innerWidth},o._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&e<1?"round":"ceil",o=Math[i](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var n=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",s=this[n](o,t),r={x:this.columnWidth*s.col,y:s.y},a=s.y+t.size.outerHeight,u=o+s.col,h=s.col;h<u;h++)this.colYs[h]=a;return r},o._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},o._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++)e[o]=this._getColGroupY(o,t);return e},o._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},o._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,o=t>1&&i+t>this.cols;i=o?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},o._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this._getOption("originLeft"),s=n?o.left:o.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?o.top:o.bottom)+i.outerHeight,l=a;l<=u;l++)this.colYs[l]=Math.max(d,this.colYs[l])},o._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},o._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/masonry",["../layout-mode","masonry-layout/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),o=i.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)n[s]||(o[s]=e.prototype[s]);var r=o.measureColumns;o.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=o._getOption;return o._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope-layout/js/item","isotope-layout/js/layout-mode","isotope-layout/js/layout-modes/masonry","isotope-layout/js/layout-modes/fit-rows","isotope-layout/js/layout-modes/vertical"],function(i,o,n,s,r,a){return e(t,i,o,n,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope-layout/js/item"),require("isotope-layout/js/layout-mode"),require("isotope-layout/js/layout-modes/masonry"),require("isotope-layout/js/layout-modes/fit-rows"),require("isotope-layout/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,o,n,s,r){function a(t,e){return function(i,o){for(var n=0;n<t.length;n++){var s=t[n],r=i.sortData[s],a=o.sortData[s];if(r>a||r<a){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var o=t[i];o.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&o&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}var e,i,o,n=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?o.push(a):u||a.isHidden||n.push(a)}}return{matches:i,needReveal:o,needHide:n}},l._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t);}:"function"==typeof t?function(e){return t(e.element)}:function(e){return o(e.element,t)}},l.updateSortData=function(t){var e;t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){var o=t[i];o.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),s=n&&n[1],r=e(s,o),a=d.sortDataParsers[i[1]];return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){if(this.options.sortBy){var t=n.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var e=a(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(e)}},l._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;i<n;i++)o=e[i],this.element.appendChild(o.element);var s=this._filter(e).matches;for(i=0;i<n;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<n;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=n.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,o=0;i&&o<i;o++){var s=e[o];n.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var o=t.apply(this,e);return this.options.transitionDuration=i,o},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});;;(function(a){typeof define=="function"&&define.amd?define(["jquery"],a):typeof exports=="object"?a(require("jquery")):a(window.jQuery||window.Zepto)})(function(a){var b="Close",c="BeforeClose",d="AfterClose",e="BeforeAppend",f="MarkupParse",g="Open",h="Change",i="mfp",j="."+i,k="mfp-ready",l="mfp-removing",m="mfp-prevent-close",n,o=function(){},p=!!window.jQuery,q,r=a(window),s,t,u,v,w=function(a,b){n.ev.on(i+a+j,b)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(b,c){n.ev.triggerHandler(i+b,c),n.st.callbacks&&(b=b.charAt(0).toLowerCase()+b.slice(1),n.st.callbacks[b]&&n.st.callbacks[b].apply(n,a.isArray(c)?c:[c]))},z=function(b){if(b!==v||!n.currTemplate.closeBtn)n.currTemplate.closeBtn=a(n.st.closeMarkup.replace("%title%",n.st.tClose)),v=b;return n.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(n=new o,n.init(),a.magnificPopup.instance=n)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(a.transition!==undefined)return!0;while(b.length)if(b.pop()+"Transition"in a)return!0;return!1};o.prototype={constructor:o,init:function(){var b=navigator.appVersion;n.isLowIE=n.isIE8=document.all&&!document.addEventListener,n.isAndroid=/android/gi.test(b),n.isIOS=/iphone|ipad|ipod/gi.test(b),n.supportsTransition=B(),n.probablyMobile=n.isAndroid||n.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),s=a(document),n.popupsCache={}},open:function(b){var c;if(b.isObj===!1){n.items=b.items.toArray(),n.index=0;var d=b.items,e;for(c=0;c<d.length;c++){e=d[c],e.parsed&&(e=e.el[0]);if(e===b.el[0]){n.index=c;break}}}else n.items=a.isArray(b.items)?b.items:[b.items],n.index=b.index||0;if(n.isOpen){n.updateItemHTML();return}n.types=[],u="",b.mainEl&&b.mainEl.length?n.ev=b.mainEl.eq(0):n.ev=s,b.key?(n.popupsCache[b.key]||(n.popupsCache[b.key]={}),n.currTemplate=n.popupsCache[b.key]):n.currTemplate={},n.st=a.extend(!0,{},a.magnificPopup.defaults,b),n.fixedContentPos=n.st.fixedContentPos==="auto"?!n.probablyMobile:n.st.fixedContentPos,n.st.modal&&(n.st.closeOnContentClick=!1,n.st.closeOnBgClick=!1,n.st.showCloseBtn=!1,n.st.enableEscapeKey=!1),n.bgOverlay||(n.bgOverlay=x("bg").on("click"+j,function(){n.close()}),n.wrap=x("wrap").attr("tabindex",-1).on("click"+j,function(a){n._checkIfClose(a.target)&&n.close()}),n.container=x("container",n.wrap)),n.contentContainer=x("content"),n.st.preloader&&(n.preloader=x("preloader",n.container,n.st.tLoading));var h=a.magnificPopup.modules;for(c=0;c<h.length;c++){var i=h[c];i=i.charAt(0).toUpperCase()+i.slice(1),n["init"+i].call(n)}y("BeforeOpen"),n.st.showCloseBtn&&(n.st.closeBtnInside?(w(f,function(a,b,c,d){c.close_replaceWith=z(d.type)}),u+=" mfp-close-btn-in"):n.wrap.append(z())),n.st.alignTop&&(u+=" mfp-align-top"),n.fixedContentPos?n.wrap.css({overflow:n.st.overflowY,overflowX:"hidden",overflowY:n.st.overflowY}):n.wrap.css({top:r.scrollTop(),position:"absolute"}),(n.st.fixedBgPos===!1||n.st.fixedBgPos==="auto"&&!n.fixedContentPos)&&n.bgOverlay.css({height:s.height(),position:"absolute"}),n.st.enableEscapeKey&&s.on("keyup"+j,function(a){a.keyCode===27&&n.close()}),r.on("resize"+j,function(){n.updateSize()}),n.st.closeOnContentClick||(u+=" mfp-auto-cursor"),u&&n.wrap.addClass(u);var l=n.wH=r.height(),m={};if(n.fixedContentPos&&n._hasScrollBar(l)){var o=n._getScrollbarSize();o&&(m.marginRight=o)}n.fixedContentPos&&(n.isIE7?a("body, html").css("overflow","hidden"):m.overflow="hidden");var p=n.st.mainClass;return n.isIE7&&(p+=" mfp-ie7"),p&&n._addClassToMFP(p),n.updateItemHTML(),y("BuildControls"),a("html").css(m),n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo||a(document.body)),n._lastFocusedEl=document.activeElement,setTimeout(function(){n.content?(n._addClassToMFP(k),n._setFocus()):n.bgOverlay.addClass(k),s.on("focusin"+j,n._onFocusIn)},16),n.isOpen=!0,n.updateSize(l),y(g),b},close:function(){if(!n.isOpen)return;y(c),n.isOpen=!1,n.st.removalDelay&&!n.isLowIE&&n.supportsTransition?(n._addClassToMFP(l),setTimeout(function(){n._close()},n.st.removalDelay)):n._close()},_close:function(){y(b);var c=l+" "+k+" ";n.bgOverlay.detach(),n.wrap.detach(),n.container.empty(),n.st.mainClass&&(c+=n.st.mainClass+" "),n._removeClassFromMFP(c);if(n.fixedContentPos){var e={marginRight:""};n.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}s.off("keyup"+j+" focusin"+j),n.ev.off(j),n.wrap.attr("class","mfp-wrap").removeAttr("style"),n.bgOverlay.attr("class","mfp-bg"),n.container.attr("class","mfp-container"),n.st.showCloseBtn&&(!n.st.closeBtnInside||n.currTemplate[n.currItem.type]===!0)&&n.currTemplate.closeBtn&&n.currTemplate.closeBtn.detach(),n.st.autoFocusLast&&n._lastFocusedEl&&a(n._lastFocusedEl).focus(),n.currItem=null,n.content=null,n.currTemplate=null,n.prevHeight=0,y(d)},updateSize:function(a){if(n.isIOS){var b=document.documentElement.clientWidth/window.innerWidth,c=window.innerHeight*b;n.wrap.css("height",c),n.wH=c}else n.wH=a||r.height();n.fixedContentPos||n.wrap.css("height",n.wH),y("Resize")},updateItemHTML:function(){var b=n.items[n.index];n.contentContainer.detach(),n.content&&n.content.detach(),b.parsed||(b=n.parseEl(n.index));var c=b.type;y("BeforeChange",[n.currItem?n.currItem.type:"",c]),n.currItem=b;if(!n.currTemplate[c]){var d=n.st[c]?n.st[c].markup:!1;y("FirstMarkupParse",d),d?n.currTemplate[c]=a(d):n.currTemplate[c]=!0}t&&t!==b.type&&n.container.removeClass("mfp-"+t+"-holder");var e=n["get"+c.charAt(0).toUpperCase()+c.slice(1)](b,n.currTemplate[c]);n.appendContent(e,c),b.preloaded=!0,y(h,b),t=b.type,n.container.prepend(n.contentContainer),y("AfterChange")},appendContent:function(a,b){n.content=a,a?n.st.showCloseBtn&&n.st.closeBtnInside&&n.currTemplate[b]===!0?n.content.find(".mfp-close").length||n.content.append(z()):n.content=a:n.content="",y(e),n.container.addClass("mfp-"+b+"-holder"),n.contentContainer.append(n.content)},parseEl:function(b){var c=n.items[b],d;c.tagName?c={el:a(c)}:(d=c.type,c={data:c,src:c.src});if(c.el){var e=n.types;for(var f=0;f<e.length;f++)if(c.el.hasClass("mfp-"+e[f])){d=e[f];break}c.src=c.el.attr("data-mfp-src"),c.src||(c.src=c.el.attr("href"))}return c.type=d||n.st.type||"inline",c.index=b,c.parsed=!0,n.items[b]=c,y("ElementParse",c),n.items[b]},addGroup:function(a,b){var c=function(c){c.mfpEl=this,n._openClick(c,a,b)};b||(b={});var d="click.magnificPopup";b.mainEl=a,b.items?(b.isObj=!0,a.off(d).on(d,c)):(b.isObj=!1,b.delegate?a.off(d).on(d,b.delegate,c):(b.items=a,a.off(d).on(d,c)))},_openClick:function(b,c,d){var e=d.midClick!==undefined?d.midClick:a.magnificPopup.defaults.midClick;if(!e&&(b.which===2||b.ctrlKey||b.metaKey||b.altKey||b.shiftKey))return;var f=d.disableOn!==undefined?d.disableOn:a.magnificPopup.defaults.disableOn;if(f)if(a.isFunction(f)){if(!f.call(n))return!0}else if(r.width()<f)return!0;b.type&&(b.preventDefault(),n.isOpen&&b.stopPropagation()),d.el=a(b.mfpEl),d.delegate&&(d.items=c.find(d.delegate)),n.open(d)},updateStatus:function(a,b){if(n.preloader){q!==a&&n.container.removeClass("mfp-s-"+q),!b&&a==="loading"&&(b=n.st.tLoading);var c={status:a,text:b};y("UpdateStatus",c),a=c.status,b=c.text,n.preloader.html(b),n.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),n.container.addClass("mfp-s-"+a),q=a}},_checkIfClose:function(b){if(a(b).hasClass(m))return;var c=n.st.closeOnContentClick,d=n.st.closeOnBgClick;if(c&&d)return!0;if(!n.content||a(b).hasClass("mfp-close")||n.preloader&&b===n.preloader[0])return!0;if(b!==n.content[0]&&!a.contains(n.content[0],b)){if(d&&a.contains(document,b))return!0}else if(c)return!0;return!1},_addClassToMFP:function(a){n.bgOverlay.addClass(a),n.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),n.wrap.removeClass(a)},_hasScrollBar:function(a){return(n.isIE7?s.height():document.body.scrollHeight)>(a||r.height())},_setFocus:function(){(n.st.focus?n.content.find(n.st.focus).eq(0):n.wrap).focus()},_onFocusIn:function(b){if(b.target!==n.wrap[0]&&!a.contains(n.wrap[0],b.target))return n._setFocus(),!1},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(f,[b,c,d]),a.each(c,function(c,d){if(d===undefined||d===!1)return!0;e=c.split("_");if(e.length>1){var f=b.find(j+"-"+e[0]);if(f.length>0){var g=e[1];g==="replaceWith"?f[0]!==d[0]&&f.replaceWith(d):g==="img"?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(j+"-"+c).html(d)})},_getScrollbarSize:function(){if(n.scrollbarSize===undefined){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),n.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return n.scrollbarSize}},a.magnificPopup={instance:null,proto:o.prototype,modules:[],open:function(b,c){return A(),b?b=a.extend(!0,{},b):b={},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(b){A();var c=a(this);if(typeof b=="string")if(b==="open"){var d,e=p?c.data("magnificPopup"):c[0].magnificPopup,f=parseInt(arguments[1],10)||0;e.items?d=e.items[f]:(d=c,e.delegate&&(d=d.find(e.delegate)),d=d.eq(f)),n._openClick({mfpEl:d},c,e)}else n.isOpen&&n[b].apply(n,Array.prototype.slice.call(arguments,1));else b=a.extend(!0,{},b),p?c.data("magnificPopup",b):c[0].magnificPopup=b,n.addGroup(c,b);return c};var C="inline",D,E,F,G=function(){F&&(E.after(F.addClass(D)).detach(),F=null)};a.magnificPopup.registerModule(C,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){n.types.push(C),w(b+"."+C,function(){G()})},getInline:function(b,c){G();if(b.src){var d=n.st.inline,e=a(b.src);if(e.length){var f=e[0].parentNode;f&&f.tagName&&(E||(D=d.hiddenClass,E=x(D),D="mfp-"+D),F=e.after(E).detach().removeClass(D)),n.updateStatus("ready")}else n.updateStatus("error",d.tNotFound),e=a("<div>");return b.inlineElement=e,e}return n.updateStatus("ready"),n._parseMarkup(c,{},b),c}}});var H="ajax",I,J=function(){I&&a(document.body).removeClass(I)},K=function(){J(),n.req&&n.req.abort()};a.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){n.types.push(H),I=n.st.ajax.cursor,w(b+"."+H,K),w("BeforeChange."+H,K)},getAjax:function(b){I&&a(document.body).addClass(I),n.updateStatus("loading");var c=a.extend({url:b.src,success:function(c,d,e){var f={data:c,xhr:e};y("ParseAjax",f),n.appendContent(a(f.data),H),b.finished=!0,J(),n._setFocus(),setTimeout(function(){n.wrap.addClass(k)},16),n.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),b.finished=b.loadError=!0,n.updateStatus("error",n.st.ajax.tError.replace("%url%",b.src))}},n.st.ajax.settings);return n.req=a.ajax(c),""}}});var L,M=function(b){if(b.data&&b.data.title!==undefined)return b.data.title;var c=n.st.image.titleSrc;if(c){if(a.isFunction(c))return c.call(n,b);if(b.el)return b.el.attr(c)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=n.st.image,d=".image";n.types.push("image"),w(g+d,function(){n.currItem.type==="image"&&c.cursor&&a(document.body).addClass(c.cursor)}),w(b+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),r.off("resize"+j)}),w("Resize"+d,n.resizeImage),n.isLowIE&&w("AfterChange",n.resizeImage)},resizeImage:function(){var a=n.currItem;if(!a||!a.img)return;if(n.st.image.verticalFit){var b=0;n.isLowIE&&(b=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",n.wH-b)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(n.content&&n.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var b=0,c=a.img[0],d=function(e){L&&clearInterval(L),L=setInterval(function(){if(c.naturalWidth>0){n._onImageHasSize(a);return}b>200&&clearInterval(L),b++,b===3?d(10):b===40?d(50):b===100&&d(500)},e)};d(1)},getImage:function(b,c){var d=0,e=function(){b&&(b.img[0].complete?(b.img.off(".mfploader"),b===n.currItem&&(n._onImageHasSize(b),n.updateStatus("ready")),b.hasSize=!0,b.loaded=!0,y("ImageLoadComplete")):(d++,d<200?setTimeout(e,100):f()))},f=function(){b&&(b.img.off(".mfploader"),b===n.currItem&&(n._onImageHasSize(b),n.updateStatus("error",g.tError.replace("%url%",b.src))),b.hasSize=!0,b.loaded=!0,b.loadError=!0)},g=n.st.image,h=c.find(".mfp-img");if(h.length){var i=document.createElement("img");i.className="mfp-img",b.el&&b.el.find("img").length&&(i.alt=b.el.find("img").attr("alt")),b.img=a(i).on("load.mfploader",e).on("error.mfploader",f),i.src=b.src,h.is("img")&&(b.img=b.img.clone()),i=b.img[0],i.naturalWidth>0?b.hasSize=!0:i.width||(b.hasSize=!1)}return n._parseMarkup(c,{title:M(b),img_replaceWith:b.img},b),n.resizeImage(),b.hasSize?(L&&clearInterval(L),b.loadError?(c.addClass("mfp-loading"),n.updateStatus("error",g.tError.replace("%url%",b.src))):(c.removeClass("mfp-loading"),n.updateStatus("ready")),c):(n.updateStatus("loading"),b.loading=!0,b.hasSize||(b.imgHidden=!0,c.addClass("mfp-loading"),n.findImageSize(b)),c)}}});var N,O=function(){return N===undefined&&(N=document.createElement("p").style.MozTransform!==undefined),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a=n.st.zoom,d=".zoom",e;if(!a.enabled||!n.supportsTransition)return;var f=a.duration,g=function(b){var c=b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+a.duration/1e3+"s "+a.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,c.css(e),c},h=function(){n.content.css("visibility","visible")},i,j;w("BuildControls"+d,function(){if(n._allowZoom()){clearTimeout(i),n.content.css("visibility","hidden"),e=n._getItemToZoom();if(!e){h();return}j=g(e),j.css(n._getOffset()),n.wrap.append(j),i=setTimeout(function(){j.css(n._getOffset(!0)),i=setTimeout(function(){h(),setTimeout(function(){j.remove(),e=j=null,y("ZoomAnimationEnded")},16)},f)},16)}}),w(c+d,function(){if(n._allowZoom()){clearTimeout(i),n.st.removalDelay=f;if(!e){e=n._getItemToZoom();if(!e)return;j=g(e)}j.css(n._getOffset(!0)),n.wrap.append(j),n.content.css("visibility","hidden"),setTimeout(function(){j.css(n._getOffset())},16)}}),w(b+d,function(){n._allowZoom()&&(h(),j&&j.remove(),e=null)})},_allowZoom:function(){return n.currItem.type==="image"},_getItemToZoom:function(){return n.currItem.hasSize?n.currItem.img:!1},_getOffset:function(b){var c;b?c=n.currItem.img:c=n.st.zoom.opener(n.currItem.el||n.currItem);var d=c.offset(),e=parseInt(c.css("padding-top"),10),f=parseInt(c.css("padding-bottom"),10);d.top-=a(window).scrollTop()-e;var g={width:c.width(),height:(p?c.innerHeight():c[0].offsetHeight)-f-e};return O()?g["-moz-transform"]=g.transform="translate("+d.left+"px,"+d.top+"px)":(g.left=d.left,g.top=d.top),g}}});var P="iframe",Q="//about:blank",R=function(a){if(n.currTemplate[P]){var b=n.currTemplate[P].find("iframe");b.length&&(a||(b[0].src=Q),n.isIE8&&b.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){n.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(b+"."+P,function(){R()})},getIframe:function(b,c){var d=b.src,e=n.st.iframe;a.each(e.patterns,function(){if(d.indexOf(this.index)>-1)return this.id&&(typeof this.id=="string"?d=d.substr(d.lastIndexOf(this.id)+this.id.length,d.length):d=this.id.call(this,d)),d=this.src.replace("%id%",d),!1});var f={};return e.srcAction&&(f[e.srcAction]=d),n._parseMarkup(c,f,b),n.updateStatus("ready"),c}}});var S=function(a){var b=n.items.length;return a>b-1?a-b:a<0?b+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=n.st.gallery,d=".mfp-gallery";n.direction=!0;if(!c||!c.enabled)return!1;u+=" mfp-gallery",w(g+d,function(){c.navigateByImgClick&&n.wrap.on("click"+d,".mfp-img",function(){if(n.items.length>1)return n.next(),!1}),s.on("keydown"+d,function(a){a.keyCode===37?n.prev():a.keyCode===39&&n.next()})}),w("UpdateStatus"+d,function(a,b){b.text&&(b.text=T(b.text,n.currItem.index,n.items.length))}),w(f+d,function(a,b,d,e){var f=n.items.length;d.counter=f>1?T(c.tCounter,e.index,f):""}),w("BuildControls"+d,function(){if(n.items.length>1&&c.arrows&&!n.arrowLeft){var b=c.arrowMarkup,d=n.arrowLeft=a(b.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(m),e=n.arrowRight=a(b.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(m);d.click(function(){n.prev()}),e.click(function(){n.next()}),n.container.append(d.add(e))}}),w(h+d,function(){n._preloadTimeout&&clearTimeout(n._preloadTimeout),n._preloadTimeout=setTimeout(function(){n.preloadNearbyImages(),n._preloadTimeout=null},16)}),w(b+d,function(){s.off(d),n.wrap.off("click"+d),n.arrowRight=n.arrowLeft=null})},next:function(){n.direction=!0,n.index=S(n.index+1),n.updateItemHTML()},prev:function(){n.direction=!1,n.index=S(n.index-1),n.updateItemHTML()},goTo:function(a){n.direction=a>=n.index,n.index=a,n.updateItemHTML()},preloadNearbyImages:function(){var a=n.st.gallery.preload,b=Math.min(a[0],n.items.length),c=Math.min(a[1],n.items.length),d;for(d=1;d<=(n.direction?c:b);d++)n._preloadItem(n.index+d);for(d=1;d<=(n.direction?b:c);d++)n._preloadItem(n.index-d)},_preloadItem:function(b){b=S(b);if(n.items[b].preloaded)return;var c=n.items[b];c.parsed||(c=n.parseEl(b)),y("LazyLoad",c),c.type==="image"&&(c.img=a('<img class="mfp-img" />').on("load.mfploader",function(){c.hasSize=!0}).on("error.mfploader",function(){c.hasSize=!0,c.loadError=!0,y("LazyLoadError",c)}).attr("src",c.src)),c.preloaded=!0}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=n.st.retina,b=a.ratio;b=isNaN(b)?b():b,b>1&&(w("ImageHasSize."+U,function(a,c){c.img.css({"max-width":c.img[0].naturalWidth/b,width:"100%"})}),w("ElementParse."+U,function(c,d){d.src=a.replaceSrc(d,b)}))}}}}),A()});;;(function($){'use strict';function MegaMenu(element,options){var self=this;this.$element=$(element);this.options=$.extend(true,{},MegaMenu.defaults,options);this._items=$();Object.defineProperties(this,{itemsSelector:{get:function(){return self.options.classMap.hasSubMenu+','+
self.options.classMap.hasMegaMenu;}},_tempChain:{value:null,writable:true},state:{value:null,writable:true}});this.initialize();};MegaMenu.defaults={event:'hover',direction:'horizontal',breakpoint:991,animationIn:false,animationOut:false,rtl:false,hideTimeOut:300,sideBarRatio:1/4,pageContainer:$('body'),classMap:{initialized:'.hs-menu-initialized',mobileState:'.hs-mobile-state',subMenu:'.hs-sub-menu',hasSubMenu:'.hs-has-sub-menu',hasSubMenuActive:'.hs-sub-menu-opened',megaMenu:'.hs-mega-menu',hasMegaMenu:'.hs-has-mega-menu',hasMegaMenuActive:'.hs-mega-menu-opened'},mobileSpeed:400,mobileEasing:'linear',beforeOpen:function(){},beforeClose:function(){},afterOpen:function(){},afterClose:function(){}};MegaMenu.prototype.initialize=function(){var self=this,$w=$(window);if(this.options.rtl)this.$element.addClass('hs-rtl');this.$element.addClass(this.options.classMap.initialized.slice(1)).addClass('hs-menu-'+this.options.direction);$w.on('resize.HSMegaMenu',function(e){if(self.resizeTimeOutId)clearTimeout(self.resizeTimeOutId);self.resizeTimeOutId=setTimeout(function(){if(window.innerWidth<=self.options.breakpoint&&self.state=='desktop')self.initMobileBehavior();else if(window.innerWidth>self.options.breakpoint&&self.state=='mobile')self.initDesktopBehavior();self.refresh();},50);});$(document).on('click.HSMegaMenu',function(e){var $parents=$(e.target).parents(self.itemsSelector);self.closeAll($parents.add($(e.target)));}).on('keyup.HSMegaMenu',function(e){if(e.keyCode&&e.keyCode==27)self.closeAll();});if(window.innerWidth<=this.options.breakpoint)this.initMobileBehavior();else if(window.innerWidth>this.options.breakpoint)this.initDesktopBehavior();this.smartPositions();return this;};MegaMenu.prototype.smartPositions=function(){var self=this,$submenus=this.$element.find(this.options.classMap.subMenu);$submenus.each(function(i,el){MenuItem.smartPosition($(el),self.options);});};MegaMenu.prototype.bindEvents=function(){var self=this,selector;if(this.options.event==='hover'&&!_isTouch()){this.$element.on('mouseenter.HSMegaMenu',this.options.classMap.hasMegaMenu+':not([data-event="click"]),'+
this.options.classMap.hasSubMenu+':not([data-event="click"])',function(e){var $this=$(this),$chain=$this.parents(self.itemsSelector);if(!$this.data('HSMenuItem')){self.initMenuItem($this,self.getType($this));}
$chain=$chain.add($this);self.closeAll($chain);$chain.each(function(i,el){var HSMenuItem=$(el).data('HSMenuItem');if(HSMenuItem.hideTimeOutId)clearTimeout(HSMenuItem.hideTimeOutId);HSMenuItem.show();});self._items=self._items.not($chain);self._tempChain=$chain;e.preventDefault();e.stopPropagation();}).on('mouseleave.HSMegaMenu',this.options.classMap.hasMegaMenu+':not([data-event="click"]),'+
this.options.classMap.hasSubMenu+':not([data-event="click"])',function(e){var $this=$(this),HSMenuItem=$this.data('HSMenuItem'),$chain=$(e.relatedTarget).parents(self.itemsSelector);HSMenuItem.hideTimeOutId=setTimeout(function(){self.closeAll($chain);},self.options.hideTimeOut);self._items=self._items.add(self._tempChain);self._tempChain=null;e.preventDefault();e.stopPropagation();}).on('click.HSMegaMenu',this.options.classMap.hasMegaMenu+'[data-event="click"] > a, '+
this.options.classMap.hasSubMenu+'[data-event="click"] > a',function(e){var $this=$(this).parent('[data-event="click"]'),HSMenuItem;if(!$this.data('HSMenuItem')){self.initMenuItem($this,self.getType($this));}
self.closeAll($this.add($this.parents(self.itemsSelector)));HSMenuItem=$this.data('HSMenuItem');if(HSMenuItem.isOpened){HSMenuItem.hide();}
else{HSMenuItem.show();}
e.preventDefault();e.stopPropagation();});}
else{this.$element.on('click.HSMegaMenu',(_isTouch()?this.options.classMap.hasMegaMenu+' > a, '+
this.options.classMap.hasSubMenu+' > a':this.options.classMap.hasMegaMenu+':not([data-event="hover"]) > a,'+
this.options.classMap.hasSubMenu+':not([data-event="hover"]) > a'),function(e){var $this=$(this).parent(),HSMenuItem,$parents=$this.parents(self.itemsSelector);if(!$this.data('HSMenuItem')){self.initMenuItem($this,self.getType($this));}
self.closeAll($this.add($this.parents(self.itemsSelector)));HSMenuItem=$this.addClass('hs-event-prevented').data('HSMenuItem');if(HSMenuItem.isOpened){HSMenuItem.hide();}
else{HSMenuItem.show();}
e.preventDefault();e.stopPropagation();});if(!_isTouch()){this.$element.on('mouseenter.HSMegaMenu',this.options.classMap.hasMegaMenu+'[data-event="hover"],'+
this.options.classMap.hasSubMenu+'[data-event="hover"]',function(e){var $this=$(this),$parents=$this.parents(self.itemsSelector);if(!$this.data('HSMenuItem')){self.initMenuItem($this,self.getType($this));}
self.closeAll($this.add($parents));$parents.add($this).each(function(i,el){var HSMenuItem=$(el).data('HSMenuItem');if(HSMenuItem.hideTimeOutId)clearTimeout(HSMenuItem.hideTimeOutId);HSMenuItem.show();});e.preventDefault();e.stopPropagation();}).on('mouseleave.HSMegaMenu',this.options.classMap.hasMegaMenu+'[data-event="hover"],'+
this.options.classMap.hasSubMenu+'[data-event="hover"]',function(e){var $this=$(this),HSMenuItem=$this.data('HSMenuItem');HSMenuItem.hideTimeOutId=setTimeout(function(){self.closeAll($(e.relatedTarget).parents(self.itemsSelector));},self.options.hideTimeOut);e.preventDefault();e.stopPropagation();})}}};MegaMenu.prototype.initMenuItem=function(element,type){var self=this,Item=new MenuItem(element,element.children(self.options.classMap[type==='mega-menu'?'megaMenu':'subMenu']),$.extend(true,{type:type},self.options,element.data()),self.$element);element.data('HSMenuItem',Item);this._items=this._items.add(element);};MegaMenu.prototype.initMobileBehavior=function(){var self=this;this.state='mobile';this.$element.off('.HSMegaMenu').addClass(this.options.classMap.mobileState.slice(1)).on('click.HSMegaMenu',self.options.classMap.hasSubMenu+' > a, '+self.options.classMap.hasMegaMenu+' > a',function(e){var $this=$(this).parent(),MenuItemInstance;if(!$this.data('HSMenuItem')){self.initMenuItem($this,self.getType($this));}
self.closeAll($this.parents(self.itemsSelector).add($this));MenuItemInstance=$this.data('HSMenuItem');console.log(MenuItemInstance.isOpened);if(MenuItemInstance.isOpened){MenuItemInstance.mobileHide();}
else{MenuItemInstance.mobileShow();}
e.preventDefault();e.stopPropagation();}).find(this.itemsSelector).not(this.options.classMap.hasSubMenuActive+','+
this.options.classMap.hasMegaMenuActive).children(this.options.classMap.subMenu+','+
this.options.classMap.megaMenu).hide();};MegaMenu.prototype.initDesktopBehavior=function(){this.state='desktop';this.$element.removeClass(this.options.classMap.mobileState.slice(1)).off('.HSMegaMenu').find(this.itemsSelector).not(this.options.classMap.hasSubMenuActive+','+
this.options.classMap.hasMegaMenuActive).children(this.options.classMap.subMenu+','+
this.options.classMap.megaMenu).hide();this.bindEvents();};MegaMenu.prototype.closeAll=function(except){var self=this;return this._items.not(except&&except.length?except:$()).each(function(i,el){$(el).removeClass('hs-event-prevented').data('HSMenuItem')[self.state=='mobile'?'mobileHide':'hide']();});};MegaMenu.prototype.getType=function(item){if(!item||!item.length)return null;return item.hasClass(this.options.classMap.hasSubMenu.slice(1))?'sub-menu':(item.hasClass(this.options.classMap.hasMegaMenu.slice(1))?'mega-menu':null);};MegaMenu.prototype.getState=function(){return this.state;};MegaMenu.prototype.refresh=function(){return this._items.add(this._tempChain).each(function(i,el){$(el).data('HSMenuItem')._updateMenuBounds();});};function MenuItem(element,menu,options,container){var self=this;this.$element=element;this.menu=menu;this.options=options;this.$container=container;Object.defineProperties(this,{itemClass:{get:function(){return self.options.type==='mega-menu'?self.options.classMap.hasMegaMenu:self.options.classMap.hasSubMenu;}},activeItemClass:{get:function(){return self.options.type==='mega-menu'?self.options.classMap.hasMegaMenuActive:self.options.classMap.hasSubMenuActive;}},menuClass:{get:function(){return self.options.type==='mega-menu'?self.options.classMap.megaMenu:self.options.classMap.subMenu;}},isOpened:{get:function(){return this.$element.hasClass(this.activeItemClass.slice(1));}}});this.menu.addClass('animated').on('click.HSMegaMenu',function(e){self._updateMenuBounds();});if(this.$element.data('max-width'))this.menu.css('max-width',this.$element.data('max-width'));if(this.$element.data('position'))this.menu.addClass('hs-position-'+this.$element.data('position'));if(this.options.animationOut){this.menu.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(e){if(self.menu.hasClass(self.options.animationOut)){self.$element.removeClass(self.activeItemClass.slice(1));self.options.afterClose.call(self,self.$element,self.menu);}
if(self.menu.hasClass(self.options.animationIn)){self.options.afterOpen.call(self,self.$element,self.menu);}
e.stopPropagation();e.preventDefault();});}}
MenuItem.prototype.show=function(){if(!this.menu.length)return this;this.$element.addClass(this.activeItemClass.slice(1));if(this.options.direction=='horizontal')this.smartPosition(this.menu,this.options);this._updateMenuBounds();if(this.options.animationOut){this.menu.removeClass(this.options.animationOut);}
else{this.options.afterOpen.call(this,this.$element,this.menu);}
if(this.options.animationIn)this.menu.addClass(this.options.animationIn);return this;}
MenuItem.prototype.hide=function(){var self=this;if(!this.menu.length)return this;if(!this.options.animationOut){this.$element.removeClass(this.activeItemClass.slice(1));}
if(this.options.animationIn)this.menu.removeClass(this.options.animationIn);if(this.options.animationOut){this.menu.addClass(this.options.animationOut);}
else{this.options.afterClose.call(this,this.$element,this.menu);}
return this;}
MenuItem.prototype.mobileShow=function(){var self=this;if(!this.menu.length)return this;this.menu.removeClass(this.options.animationIn).removeClass(this.options.animationOut).stop().slideDown({duration:self.options.mobileSpeed,easing:self.options.mobileEasing,complete:function(){self.options.afterOpen.call(self,self.$element,self.menu);}});this.$element.addClass(this.activeItemClass.slice(1));return this;};MenuItem.prototype.mobileHide=function(){var self=this;if(!this.menu.length)return this;this.menu.stop().slideUp({duration:self.options.mobileSpeed,easing:self.options.mobileEasing,complete:function(){self.options.afterClose.call(self,self.$element,self.menu);}});this.$element.removeClass(this.activeItemClass.slice(1));return this;};MenuItem.prototype.smartPosition=function(element,options){MenuItem.smartPosition(element,options);};MenuItem.smartPosition=function(element,options){if(!element&&!element.length)return;var $w=$(window);element.removeClass('hs-reversed');if(!options.rtl){if(element.offset().left+element.outerWidth()>window.innerWidth){element.addClass('hs-reversed');}}
else{if(element.offset().left<0){element.addClass('hs-reversed');}}};MenuItem.prototype._updateMenuBounds=function(){var width='auto';if(this.options.direction=='vertical'&&this.options.type=='mega-menu'){if(this.$container&&this.$container.data('HSMegaMenu').getState()=='desktop'){if(!this.options.pageContainer.length)this.options.pageContainer=$('body');width=this.options.pageContainer.outerWidth()*(1-this.options.sideBarRatio);}
else{width='auto';}
this.menu.css({'width':width,'height':'auto'});if(this.menu.outerHeight()>this.$container.outerHeight()){return;}
this.menu.css('height','100%');}};$.fn.HSMegaMenu=function(options){return this.each(function(i,el){var $this=$(this);if(!$this.data('HSMegaMenu')){$this.data('HSMegaMenu',new MegaMenu($this,options));}});};function _isTouch(){return('ontouchstart'in window);}})(jQuery);;;$(document).ready(function(){var owl=$('.owl-carousel')
owl.owlCarousel({loop:true,items:1,slideBy:1,smartSpeed:800,mouseDrag:true,lazyLoad:true,autoplay:true,autoplayTimeout:8000,dotsContainer:'#dotsCustom',dotsEach:true,})
$('#dotsCustom .owl-dot-custom').click(function(){owl.trigger('to.owl.carousel',[$(this).index(),800]);owl.trigger('stop.owl.autoplay')
setTimeout(owl.trigger('play.owl.autoplay',[8000]),7000)});owl.on('changed.owl.carousel',function(event){var item=event.item.index-3;$('.carousel-item > .cr-bg').removeClass('carousel-background ');$('.carousel-item > .carousel-overlay').removeClass('anianimated fadeInLeftBigated');$('.carousel-item > .carousel-overlay > .content').removeClass('animated fadeInRightBig delay-2s');$('.carousel-item > .img-mv').removeClass('animated fadeInLeftBig delay-2s');$('.carousel-item > .carousel-position-wrapper').removeClass('animated fadeInLeftBig delay-1s');$('.owl-item').not('.cloned').eq(item).find('.cr-bg').addClass('carousel-background');$('.owl-item').not('.cloned').eq(item).find('.carousel-overlay').addClass('animated fadeInLeftBig');$('.owl-item').not('.cloned').eq(item).find('.content').addClass('animated fadeInRightBig delay-2s');$('.owl-item').not('.cloned').eq(item).find('.img-mv').addClass('animated fadeInLeftBig delay-2s');$('.owl-item').not('.cloned').eq(item).find('.carousel-position-wrapper').addClass('animated fadeInLeftBig delay-1s');});});;function handleLogin(){var data=$("#login-form").serialize();$.ajax({type:'POST',url:'/account/login.htm',data:data,success:function(data){$('#login-content').html(data);},error:function(data){console.log("error",data);location.reload();},dataType:'html'});return false;}
function handleRegister(){var data=$("#register-form").serialize();$.ajax({type:'POST',url:'/account/register.htm',data:data,beforeSend:function(){var loading='<div class="load-circle"><span class="one"></span></div>';$('#register-form').find('#register-loading').show();},success:function(data){$('#register-form').find('#register-loading').hide();$('#register-content').html(data);},error:function(data){$('#register-form').find('#register-loading').hide();console.log("error",data);},dataType:'html'});return false;}
function openModal(e,url){e.preventDefault();$('#login-modal').modal('hide');$('#forgotpassword-modal').modal('show').find('#forgotpassword-content').load(url);}
function handleRequestPassword(){var data=$("#request-password-reset-form").serialize();$.ajax({type:'POST',url:'/account/request-password-reset.htm',data:data,beforeSend:function(){var loading='<div class="load-circle"><span class="one"></span></div>';$('#request-password-reset-form').find('#request-password-loading').show();},success:function(data){$('#request-password-reset-form').find('#request-password-loading').hide();$('#forgotpassword-content').html(data);},error:function(data){$('#request-password-reset-form').find('#request-password-loading').hide();console.log("error",data);},dataType:'html'});return false;}
function handleChangeUserType(type){if(type==='personal'){$('#register-form').find('.personal').show();$('#register-form').find('.company').hide();}else{$('#register-form').find('.personal').hide();$('#register-form').find('.company').show();}}
(function($){"use strict"
var GNEXT={};GNEXT.WebLoad=function(){document.getElementById("loading").style.display="none";}
GNEXT.HeaderSticky=function(){$(".navbar-toggler").on("click",function(a){a.preventDefault(),$(".navbar").addClass("fixed-header")});}
GNEXT.MenuClose=function(){$('.navbar-nav .nav-link').on('click',function(){var toggle=$('.navbar-toggler').is(':visible');if(toggle){$('.navbar-collapse').collapse('hide');}});}
GNEXT.HeaderScroll=function(){$('a[href*="#"]:not([href="#"])').on('click',function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')||location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html,body').animate({scrollTop:target.offset().top-65,},1000);return false;}}});}
GNEXT.HeaderFixed=function(){if($(window).scrollTop()>=60){$('.navbar').addClass('fixed-header');}
else{return;}}
GNEXT.ProgressBar=function(){$(".progress .progress-bar").each(function(){var bottom_object=$(this).offset().top+$(this).outerHeight();var bottom_window=$(window).scrollTop()+$(window).height();var progressWidth=$(this).attr('aria-valuenow')+'%';if(bottom_window>bottom_object){$(this).css({width:progressWidth});}});}
var a=0;GNEXT.Counter=function(){var oTop=$('.counter-box').offset().top-window.innerHeight;if(a==0&&$(window).scrollTop()>oTop){$('.count').each(function(){$(this).prop('Counter',0).animate({Counter:$(this).text()},{duration:4000,easing:'swing',step:function(now){$(this).text(Math.ceil(now));}});});a=1;}}
GNEXT.MasoNry=function(){var portfolioWork=$('.portfolio-content');$(portfolioWork).isotope({resizable:false,itemSelector:'.portfolio-item',layoutMode:'masonry',filter:'*'});var portfolioFilter=$('.filter li');$(portfolioFilter).on('click',function(){var filterValue=$(this).attr('data-filter');portfolioWork.isotope({filter:filterValue});});$(portfolioFilter).on('click',function(){$(this).addClass('active').siblings().removeClass('active');});}
GNEXT.HomeSlider=function(){var home_slider=$('#home-slider');home_slider.owlCarousel({navigation:false,nav:true,slideSpeed:300,fallbackEasing:'easeInQuad',items:1,singleItem:true,autoplay:true,dots:true,loop:true,smartSpeed:300,slideTransition:'all cubic-bezier(0.550, 0.085, 0.680, 0.530)'});}
GNEXT.PopupVideo=function(){$('.popup-video').magnificPopup({disableOn:700,type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:false,fixedContentPos:false});}
GNEXT.LightboxGallery=function(){$('.portfolio-content').magnificPopup({delegate:'.lightbox-gallery',type:'image',tLoading:'#%curr%',mainClass:'mfp-fade',fixedContentPos:true,closeBtnInside:true,gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]}});}
GNEXT.ScrollTop=function(){var heightShowBackTop=1020;$(".back-to-top").hide(),$(window).scroll(function(){$(this).scrollTop()>heightShowBackTop?$(".back-to-top").fadeIn(400):$(".back-to-top").fadeOut(400);}),$(".back-to-top").on("click",function(){return $("html, body").animate({scrollTop:0},"slow"),!1})}
GNEXT.tabsView=function(){$('.nav-tabs a').on('click',function(e){e.preventDefault()
$(this).tab('show')})}
$(window).on("load",function(){GNEXT.WebLoad();});$(document).on("ready",function(){GNEXT.MasoNry(),GNEXT.HomeSlider(),GNEXT.Counter(),GNEXT.ProgressBar(),GNEXT.HeaderScroll(),GNEXT.PopupVideo(),GNEXT.LightboxGallery(),GNEXT.ScrollTop();GNEXT.tabsView();});$(window).on("scroll",function(){GNEXT.Counter(),GNEXT.ProgressBar(),GNEXT.HeaderFixed();});})(jQuery);$(".checkbox-agree").focus(function(){$('#label-agree').addClass('focus-agree');});;;function scrollToAnchor(aid){var aTag=$("div[name='"+aid+"']");if(aTag.length>0){$('html,body').animate({scrollTop:aTag.offset().top},'slow');}}
$(document).ready(function(){var url_string=window.location.href;var hash=url_string.split('#')[1];setTimeout(function(){if(hash=='apply'){$('#recruitment').modal('toggle');}},10000)
$("#clickFirst").click(function(){$('#nav-ourwork-top').removeClass('dp-none').addClass('dp-flex');$('#nav-ourwork-app').removeClass('dp-flex').addClass('dp-none');$('#nav-ourwork-ai').removeClass('dp-flex').addClass('dp-none');$('#nav-ourwork-bl').removeClass('dp-flex').addClass('dp-none');$('#nav-ourwork-web').removeClass('dp-flex').addClass('dp-none');});$("#webOurwork").click(function(){$('#nav-ourwork-web').removeClass('dp-none').addClass('dp-flex');$('#nav-ourwork-app').removeClass('dp-flex').addClass('dp-none');$('#nav-ourwork-ai').removeClass('dp-flex').addClass('dp-none');$('#nav-ourwork-bl').removeClass('dp-flex').addClass('dp-none');$('#nav-ourwork-top').removeClass('dp-flex').addClass('dp-none');});$("#appOurwork").click(function(){$('#nav-ourwork-app').removeClass('dp-none').addClass('dp-flex');$('#nav-ourwork-web').removeClass('dp-flex').addClass('dp-none');$('#nav-ourwork-ai').removeClass('dp-flex').addClass('dp-none');$('#nav-ourwork-bl').removeClass('dp-flex').addClass('dp-none');$('#nav-ourwork-top').removeClass('dp-flex').addClass('dp-none');});$("#aiOurwork").click(function(){$('#nav-ourwork-ai').removeClass('dp-none').addClass('dp-flex');$('#nav-ourwork-web').removeClass('dp-flex').addClass('dp-none');$('#nav-ourwork-app').removeClass('dp-flex').addClass('dp-none');$('#nav-ourwork-bl').removeClass('dp-flex').addClass('dp-none');$('#nav-ourwork-top').removeClass('dp-flex').addClass('dp-none');});$("#blOurwork").click(function(){$('#nav-ourwork-bl').removeClass('dp-none').addClass('dp-flex');$('#nav-ourwork-web').removeClass('dp-flex').addClass('dp-none');$('#nav-ourwork-ai').removeClass('dp-flex').addClass('dp-none');$('#nav-ourwork-app').removeClass('dp-flex').addClass('dp-none');$('#nav-ourwork-top').removeClass('dp-flex').addClass('dp-none');});setTimeout(function(){scrollToAnchor(hash);},400);});$(function(){$('[data-toggle="collapse"]').on('click',function(){$navMenuCont=$($(this).data('target'));$navMenuCont.animate({'width':'toggle'},200);});})
$.fn.draggable_nav_calc=function(options){return this.each(function(i){var $element=$(this);if($element.is(":visible")){if(options.axis==="x"){var navWidth=1;$element.find("> *").each(function(i){navWidth+=$(this).outerWidth(true);});var parentWidth=$element.parent().width();if(navWidth>parentWidth){$element.css("width",navWidth);}else{$element.css("width",parentWidth);}}else if(options.axis==="y"){var navHeight=1;$element.find("> *").each(function(i){navHeight+=$(this).outerHeight(true);});var parentHeight=$element.parent().width();if(navHeight>parentHeight){$element.css("height",navHeight);}else{$element.css("height",parentHeight);}}}});};$.fn.draggable_nav_check=function(){return this.each(function(i){var $element=$(this);var w=$element.width();var pw=$element.parent().width();var maxPosLeft=0;if(w>pw){maxPosLeft=-(w-pw);}
var h=$element.height();var ph=$element.parent().height();var maxPosTop=0;if(h>ph){maxPosTop=h-ph;}
var left=parseInt($element[0].style.left);if(left>0){$element.css("left",0);}else if(left<maxPosLeft){$element.css("left",maxPosLeft);}
var top=parseInt($element[0].style.top);if(top>0){$element.css("top",0);}else if(top<maxPosTop){$element.css("top",maxPosTop);}});};$.fn.draggable_nav=function(options){return this.each(function(i){var $element=$(this);window.setTimeout(function(e){$element.draggable_nav_calc(options);},100);$element.find('[data-toggle="tab"]').on('shown.bs.tab',function(e){$element.draggable_nav_calc(options);});function draggable_nav_resize_after(){clearTimeout($element.data("draggable_nav_timeout"));var timeout=window.setTimeout(function(e){$element.draggable_nav_calc(options);$element.draggable_nav_check();},0);$element.data("draggable_nav_timeout",timeout);}
$(window).on('resize',draggable_nav_resize_after);$(window).on('scroll',draggable_nav_resize_after);if($element.hasClass("draggable-center")){$element.find('li a[data-toggle="tab"]').on("shown.bs.tab",function(e){var $container=$(this).parents(".draggable-container");var $li=$(this).parents("li");if(options.axis==="x"){var left=-$li.position().left+$container.outerWidth()/ 2-$li.outerWidth()/ 2;$element.css("left",left);}else if(options.axis==="y"){var top=-$li.position().top+$container.outerWidth()/ 2-$li.outerWidth()/ 2;$element.css("top",top);}
$element.draggable_nav_check();});}});};$(".draggable").draggable_nav({axis:'x'});$(".draggable").draggable({axis:'x',drag:function(e,ui){var $element=ui.helper;var w=$element.width();var pw=$element.parent().width();var maxPosLeft=0;if(w>pw){maxPosLeft=-(w-pw);}
var h=$element.height();var ph=$element.parent().height();var maxPosTop=0;if(h>ph){maxPosTop=h-ph;}
if(ui.position.left>0){ui.position.left=0;}else if(ui.position.left<maxPosLeft){ui.position.left=maxPosLeft;}
if(ui.position.top>0){ui.position.top=0;}else if(ui.position.top<maxPosTop){ui.position.top=maxPosTop;}}});function touchHandler(e){var touch=e.originalEvent.changedTouches[0];var simulatedEvent=document.createEvent("MouseEvent");simulatedEvent.initMouseEvent({touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"}[e.type],true,true,window,1,touch.screenX,touch.screenY,touch.clientX,touch.clientY,false,false,false,false,0,null);touch.target.dispatchEvent(simulatedEvent);}
function preventPageScroll(e){e.preventDefault();}
function initTouchHandler($element){$element.on("touchstart touchmove touchend touchcancel",touchHandler);$element.on("touchmove",preventPageScroll);}
initTouchHandler($(".draggable"));$(document).ready(function(){$("#download-form").submit(function(){setTimeout(function(){if($(".input-group div").hasClass("has-error")|$(".field-downloadform-agree").hasClass("has-error")){return 1;}
else{$('#downloadform-email').val('')
$('#downloadform-company').val('')
$('#downloadform-name').val('')
$('#downloadform-department').val('')
setTimeout(function(){$(".input-group div").removeClass('has-error');$(".checkbox-agree").prop("checked",false);},1000)
$('.close-form').click()}},500)})});;function hexToRgb(e){var a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(a,function(e,a,t,i){return a+a+t+t+i+i});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function clamp(e,a,t){return Math.min(Math.max(e,a),t)}function isInArray(e,a){return a.indexOf(e)>-1}var pJS=function(e,a){var t=document.querySelector("#"+e+" > .particles-js-canvas-el");this.pJS={canvas:{el:t,w:t.offsetWidth,h:t.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var i=this.pJS;a&&Object.deepExtend(i,a),i.tmp.obj={size_value:i.particles.size.value,size_anim_speed:i.particles.size.anim.speed,move_speed:i.particles.move.speed,line_linked_distance:i.particles.line_linked.distance,line_linked_width:i.particles.line_linked.width,mode_grab_distance:i.interactivity.modes.grab.distance,mode_bubble_distance:i.interactivity.modes.bubble.distance,mode_bubble_size:i.interactivity.modes.bubble.size,mode_repulse_distance:i.interactivity.modes.repulse.distance},i.fn.retinaInit=function(){i.retina_detect&&window.devicePixelRatio>1?(i.canvas.pxratio=window.devicePixelRatio,i.tmp.retina=!0):(i.canvas.pxratio=1,i.tmp.retina=!1),i.canvas.w=i.canvas.el.offsetWidth*i.canvas.pxratio,i.canvas.h=i.canvas.el.offsetHeight*i.canvas.pxratio,i.particles.size.value=i.tmp.obj.size_value*i.canvas.pxratio,i.particles.size.anim.speed=i.tmp.obj.size_anim_speed*i.canvas.pxratio,i.particles.move.speed=i.tmp.obj.move_speed*i.canvas.pxratio,i.particles.line_linked.distance=i.tmp.obj.line_linked_distance*i.canvas.pxratio,i.interactivity.modes.grab.distance=i.tmp.obj.mode_grab_distance*i.canvas.pxratio,i.interactivity.modes.bubble.distance=i.tmp.obj.mode_bubble_distance*i.canvas.pxratio,i.particles.line_linked.width=i.tmp.obj.line_linked_width*i.canvas.pxratio,i.interactivity.modes.bubble.size=i.tmp.obj.mode_bubble_size*i.canvas.pxratio,i.interactivity.modes.repulse.distance=i.tmp.obj.mode_repulse_distance*i.canvas.pxratio},i.fn.canvasInit=function(){i.canvas.ctx=i.canvas.el.getContext("2d")},i.fn.canvasSize=function(){i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i&&i.interactivity.events.resize&&window.addEventListener("resize",function(){i.canvas.w=i.canvas.el.offsetWidth,i.canvas.h=i.canvas.el.offsetHeight,i.tmp.retina&&(i.canvas.w*=i.canvas.pxratio,i.canvas.h*=i.canvas.pxratio),i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i.particles.move.enable||(i.fn.particlesEmpty(),i.fn.particlesCreate(),i.fn.particlesDraw(),i.fn.vendors.densityAutoParticles()),i.fn.vendors.densityAutoParticles()})},i.fn.canvasPaint=function(){i.canvas.ctx.fillRect(0,0,i.canvas.w,i.canvas.h)},i.fn.canvasClear=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h)},i.fn.particle=function(e,a,t){if(this.radius=(i.particles.size.random?Math.random():1)*i.particles.size.value,i.particles.size.anim.enable&&(this.size_status=!1,this.vs=i.particles.size.anim.speed/100,i.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=t?t.x:Math.random()*i.canvas.w,this.y=t?t.y:Math.random()*i.canvas.h,this.x>i.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>i.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),i.particles.move.bounce&&i.fn.vendors.checkOverlap(this,t),this.color={},"object"==typeof e.value)if(e.value instanceof Array){var s=e.value[Math.floor(Math.random()*i.particles.color.value.length)];this.color.rgb=hexToRgb(s)}else void 0!=e.value.r&&void 0!=e.value.g&&void 0!=e.value.b&&(this.color.rgb={r:e.value.r,g:e.value.g,b:e.value.b}),void 0!=e.value.h&&void 0!=e.value.s&&void 0!=e.value.l&&(this.color.hsl={h:e.value.h,s:e.value.s,l:e.value.l});else"random"==e.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof e.value&&(this.color=e,this.color.rgb=hexToRgb(this.color.value));this.opacity=(i.particles.opacity.random?Math.random():1)*i.particles.opacity.value,i.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=i.particles.opacity.anim.speed/100,i.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var n={};switch(i.particles.move.direction){case"top":n={x:0,y:-1};break;case"top-right":n={x:.5,y:-.5};break;case"right":n={x:1,y:-0};break;case"bottom-right":n={x:.5,y:.5};break;case"bottom":n={x:0,y:1};break;case"bottom-left":n={x:-.5,y:1};break;case"left":n={x:-1,y:0};break;case"top-left":n={x:-.5,y:-.5};break;default:n={x:0,y:0}}i.particles.move.straight?(this.vx=n.x,this.vy=n.y,i.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=n.x+Math.random()-.5,this.vy=n.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var r=i.particles.shape.type;if("object"==typeof r){if(r instanceof Array){var c=r[Math.floor(Math.random()*r.length)];this.shape=c}}else this.shape=r;if("image"==this.shape){var o=i.particles.shape;this.img={src:o.image.src,ratio:o.image.width/o.image.height},this.img.ratio||(this.img.ratio=1),"svg"==i.tmp.img_type&&void 0!=i.tmp.source_svg&&(i.fn.vendors.createSvgImg(this),i.tmp.pushing&&(this.img.loaded=!1))}},i.fn.particle.prototype.draw=function(){function e(){i.canvas.ctx.drawImage(r,a.x-t,a.y-t,2*t,2*t/a.img.ratio)}var a=this;if(void 0!=a.radius_bubble)var t=a.radius_bubble;else var t=a.radius;if(void 0!=a.opacity_bubble)var s=a.opacity_bubble;else var s=a.opacity;if(a.color.rgb)var n="rgba("+a.color.rgb.r+","+a.color.rgb.g+","+a.color.rgb.b+","+s+")";else var n="hsla("+a.color.hsl.h+","+a.color.hsl.s+"%,"+a.color.hsl.l+"%,"+s+")";switch(i.canvas.ctx.fillStyle=n,i.canvas.ctx.beginPath(),a.shape){case"circle":i.canvas.ctx.arc(a.x,a.y,t,0,2*Math.PI,!1);break;case"edge":i.canvas.ctx.rect(a.x-t,a.y-t,2*t,2*t);break;case"triangle":i.fn.vendors.drawShape(i.canvas.ctx,a.x-t,a.y+t/1.66,2*t,3,2);break;case"polygon":i.fn.vendors.drawShape(i.canvas.ctx,a.x-t/(i.particles.shape.polygon.nb_sides/3.5),a.y-t/.76,2.66*t/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,1);break;case"star":i.fn.vendors.drawShape(i.canvas.ctx,a.x-2*t/(i.particles.shape.polygon.nb_sides/4),a.y-t/1.52,2*t*2.66/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,2);break;case"image":if("svg"==i.tmp.img_type)var r=a.img.obj;else var r=i.tmp.img_obj;r&&e()}i.canvas.ctx.closePath(),i.particles.shape.stroke.width>0&&(i.canvas.ctx.strokeStyle=i.particles.shape.stroke.color,i.canvas.ctx.lineWidth=i.particles.shape.stroke.width,i.canvas.ctx.stroke()),i.canvas.ctx.fill()},i.fn.particlesCreate=function(){for(var e=0;e<i.particles.number.value;e++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value))},i.fn.particlesUpdate=function(){for(var e=0;e<i.particles.array.length;e++){var a=i.particles.array[e];if(i.particles.move.enable){var t=i.particles.move.speed/2;a.x+=a.vx*t,a.y+=a.vy*t}if(i.particles.opacity.anim.enable&&(1==a.opacity_status?(a.opacity>=i.particles.opacity.value&&(a.opacity_status=!1),a.opacity+=a.vo):(a.opacity<=i.particles.opacity.anim.opacity_min&&(a.opacity_status=!0),a.opacity-=a.vo),a.opacity<0&&(a.opacity=0)),i.particles.size.anim.enable&&(1==a.size_status?(a.radius>=i.particles.size.value&&(a.size_status=!1),a.radius+=a.vs):(a.radius<=i.particles.size.anim.size_min&&(a.size_status=!0),a.radius-=a.vs),a.radius<0&&(a.radius=0)),"bounce"==i.particles.move.out_mode)var s={x_left:a.radius,x_right:i.canvas.w,y_top:a.radius,y_bottom:i.canvas.h};else var s={x_left:-a.radius,x_right:i.canvas.w+a.radius,y_top:-a.radius,y_bottom:i.canvas.h+a.radius};switch(a.x-a.radius>i.canvas.w?(a.x=s.x_left,a.y=Math.random()*i.canvas.h):a.x+a.radius<0&&(a.x=s.x_right,a.y=Math.random()*i.canvas.h),a.y-a.radius>i.canvas.h?(a.y=s.y_top,a.x=Math.random()*i.canvas.w):a.y+a.radius<0&&(a.y=s.y_bottom,a.x=Math.random()*i.canvas.w),i.particles.move.out_mode){case"bounce":a.x+a.radius>i.canvas.w?a.vx=-a.vx:a.x-a.radius<0&&(a.vx=-a.vx),a.y+a.radius>i.canvas.h?a.vy=-a.vy:a.y-a.radius<0&&(a.vy=-a.vy)}if(isInArray("grab",i.interactivity.events.onhover.mode)&&i.fn.modes.grabParticle(a),(isInArray("bubble",i.interactivity.events.onhover.mode)||isInArray("bubble",i.interactivity.events.onclick.mode))&&i.fn.modes.bubbleParticle(a),(isInArray("repulse",i.interactivity.events.onhover.mode)||isInArray("repulse",i.interactivity.events.onclick.mode))&&i.fn.modes.repulseParticle(a),i.particles.line_linked.enable||i.particles.move.attract.enable)for(var n=e+1;n<i.particles.array.length;n++){var r=i.particles.array[n];i.particles.line_linked.enable&&i.fn.interact.linkParticles(a,r),i.particles.move.attract.enable&&i.fn.interact.attractParticles(a,r),i.particles.move.bounce&&i.fn.interact.bounceParticles(a,r)}}},i.fn.particlesDraw=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h),i.fn.particlesUpdate();for(var e=0;e<i.particles.array.length;e++){var a=i.particles.array[e];a.draw()}},i.fn.particlesEmpty=function(){i.particles.array=[]},i.fn.particlesRefresh=function(){cancelRequestAnimFrame(i.fn.checkAnimFrame),cancelRequestAnimFrame(i.fn.drawAnimFrame),i.tmp.source_svg=void 0,i.tmp.img_obj=void 0,i.tmp.count_svg=0,i.fn.particlesEmpty(),i.fn.canvasClear(),i.fn.vendors.start()},i.fn.interact.linkParticles=function(e,a){var t=e.x-a.x,s=e.y-a.y,n=Math.sqrt(t*t+s*s);if(n<=i.particles.line_linked.distance){var r=i.particles.line_linked.opacity-n/(1/i.particles.line_linked.opacity)/i.particles.line_linked.distance;if(r>0){var c=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+c.r+","+c.g+","+c.b+","+r+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(a.x,a.y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}},i.fn.interact.attractParticles=function(e,a){var t=e.x-a.x,s=e.y-a.y,n=Math.sqrt(t*t+s*s);if(n<=i.particles.line_linked.distance){var r=t/(1e3*i.particles.move.attract.rotateX),c=s/(1e3*i.particles.move.attract.rotateY);e.vx-=r,e.vy-=c,a.vx+=r,a.vy+=c}},i.fn.interact.bounceParticles=function(e,a){var t=e.x-a.x,i=e.y-a.y,s=Math.sqrt(t*t+i*i),n=e.radius+a.radius;n>=s&&(e.vx=-e.vx,e.vy=-e.vy,a.vx=-a.vx,a.vy=-a.vy)},i.fn.modes.pushParticles=function(e,a){i.tmp.pushing=!0;for(var t=0;e>t;t++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value,{x:a?a.pos_x:Math.random()*i.canvas.w,y:a?a.pos_y:Math.random()*i.canvas.h})),t==e-1&&(i.particles.move.enable||i.fn.particlesDraw(),i.tmp.pushing=!1)},i.fn.modes.removeParticles=function(e){i.particles.array.splice(0,e),i.particles.move.enable||i.fn.particlesDraw()},i.fn.modes.bubbleParticle=function(e){function a(){e.opacity_bubble=e.opacity,e.radius_bubble=e.radius}function t(a,t,s,n,c){if(a!=t)if(i.tmp.bubble_duration_end){if(void 0!=s){var o=n-p*(n-a)/i.interactivity.modes.bubble.duration,l=a-o;d=a+l,"size"==c&&(e.radius_bubble=d),"opacity"==c&&(e.opacity_bubble=d)}}else if(r<=i.interactivity.modes.bubble.distance){if(void 0!=s)var v=s;else var v=n;if(v!=a){var d=n-p*(n-a)/i.interactivity.modes.bubble.duration;"size"==c&&(e.radius_bubble=d),"opacity"==c&&(e.opacity_bubble=d)}}else"size"==c&&(e.radius_bubble=void 0),"opacity"==c&&(e.opacity_bubble=void 0)}if(i.interactivity.events.onhover.enable&&isInArray("bubble",i.interactivity.events.onhover.mode)){var s=e.x-i.interactivity.mouse.pos_x,n=e.y-i.interactivity.mouse.pos_y,r=Math.sqrt(s*s+n*n),c=1-r/i.interactivity.modes.bubble.distance;if(r<=i.interactivity.modes.bubble.distance){if(c>=0&&"mousemove"==i.interactivity.status){if(i.interactivity.modes.bubble.size!=i.particles.size.value)if(i.interactivity.modes.bubble.size>i.particles.size.value){var o=e.radius+i.interactivity.modes.bubble.size*c;o>=0&&(e.radius_bubble=o)}else{var l=e.radius-i.interactivity.modes.bubble.size,o=e.radius-l*c;o>0?e.radius_bubble=o:e.radius_bubble=0}if(i.interactivity.modes.bubble.opacity!=i.particles.opacity.value)if(i.interactivity.modes.bubble.opacity>i.particles.opacity.value){var v=i.interactivity.modes.bubble.opacity*c;v>e.opacity&&v<=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}else{var v=e.opacity-(i.particles.opacity.value-i.interactivity.modes.bubble.opacity)*c;v<e.opacity&&v>=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}}}else a();"mouseleave"==i.interactivity.status&&a()}else if(i.interactivity.events.onclick.enable&&isInArray("bubble",i.interactivity.events.onclick.mode)){if(i.tmp.bubble_clicking){var s=e.x-i.interactivity.mouse.click_pos_x,n=e.y-i.interactivity.mouse.click_pos_y,r=Math.sqrt(s*s+n*n),p=((new Date).getTime()-i.interactivity.mouse.click_time)/1e3;p>i.interactivity.modes.bubble.duration&&(i.tmp.bubble_duration_end=!0),p>2*i.interactivity.modes.bubble.duration&&(i.tmp.bubble_clicking=!1,i.tmp.bubble_duration_end=!1)}i.tmp.bubble_clicking&&(t(i.interactivity.modes.bubble.size,i.particles.size.value,e.radius_bubble,e.radius,"size"),t(i.interactivity.modes.bubble.opacity,i.particles.opacity.value,e.opacity_bubble,e.opacity,"opacity"))}},i.fn.modes.repulseParticle=function(e){function a(){var a=Math.atan2(d,p);if(e.vx=u*Math.cos(a),e.vy=u*Math.sin(a),"bounce"==i.particles.move.out_mode){var t={x:e.x+e.vx,y:e.y+e.vy};t.x+e.radius>i.canvas.w?e.vx=-e.vx:t.x-e.radius<0&&(e.vx=-e.vx),t.y+e.radius>i.canvas.h?e.vy=-e.vy:t.y-e.radius<0&&(e.vy=-e.vy)}}if(i.interactivity.events.onhover.enable&&isInArray("repulse",i.interactivity.events.onhover.mode)&&"mousemove"==i.interactivity.status){var t=e.x-i.interactivity.mouse.pos_x,s=e.y-i.interactivity.mouse.pos_y,n=Math.sqrt(t*t+s*s),r={x:t/n,y:s/n},c=i.interactivity.modes.repulse.distance,o=100,l=clamp(1/c*(-1*Math.pow(n/c,2)+1)*c*o,0,50),v={x:e.x+r.x*l,y:e.y+r.y*l};"bounce"==i.particles.move.out_mode?(v.x-e.radius>0&&v.x+e.radius<i.canvas.w&&(e.x=v.x),v.y-e.radius>0&&v.y+e.radius<i.canvas.h&&(e.y=v.y)):(e.x=v.x,e.y=v.y)}else if(i.interactivity.events.onclick.enable&&isInArray("repulse",i.interactivity.events.onclick.mode))if(i.tmp.repulse_finish||(i.tmp.repulse_count++,i.tmp.repulse_count==i.particles.array.length&&(i.tmp.repulse_finish=!0)),i.tmp.repulse_clicking){var c=Math.pow(i.interactivity.modes.repulse.distance/6,3),p=i.interactivity.mouse.click_pos_x-e.x,d=i.interactivity.mouse.click_pos_y-e.y,m=p*p+d*d,u=-c/m*1;c>=m&&a()}else 0==i.tmp.repulse_clicking&&(e.vx=e.vx_i,e.vy=e.vy_i)},i.fn.modes.grabParticle=function(e){if(i.interactivity.events.onhover.enable&&"mousemove"==i.interactivity.status){var a=e.x-i.interactivity.mouse.pos_x,t=e.y-i.interactivity.mouse.pos_y,s=Math.sqrt(a*a+t*t);if(s<=i.interactivity.modes.grab.distance){var n=i.interactivity.modes.grab.line_linked.opacity-s/(1/i.interactivity.modes.grab.line_linked.opacity)/i.interactivity.modes.grab.distance;if(n>0){var r=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+n+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x,i.interactivity.mouse.pos_y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}}},i.fn.vendors.eventsListeners=function(){"window"==i.interactivity.detect_on?i.interactivity.el=window:i.interactivity.el=i.canvas.el,(i.interactivity.events.onhover.enable||i.interactivity.events.onclick.enable)&&(i.interactivity.el.addEventListener("mousemove",function(e){if(i.interactivity.el==window)var a=e.clientX,t=e.clientY;else var a=e.offsetX||e.clientX,t=e.offsetY||e.clientY;i.interactivity.mouse.pos_x=a,i.interactivity.mouse.pos_y=t,i.tmp.retina&&(i.interactivity.mouse.pos_x*=i.canvas.pxratio,i.interactivity.mouse.pos_y*=i.canvas.pxratio),i.interactivity.status="mousemove"}),i.interactivity.el.addEventListener("mouseleave",function(e){i.interactivity.mouse.pos_x=null,i.interactivity.mouse.pos_y=null,i.interactivity.status="mouseleave"})),i.interactivity.events.onclick.enable&&i.interactivity.el.addEventListener("click",function(){if(i.interactivity.mouse.click_pos_x=i.interactivity.mouse.pos_x,i.interactivity.mouse.click_pos_y=i.interactivity.mouse.pos_y,i.interactivity.mouse.click_time=(new Date).getTime(),i.interactivity.events.onclick.enable)switch(i.interactivity.events.onclick.mode){case"push":i.particles.move.enable?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):1==i.interactivity.modes.push.particles_nb?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):i.interactivity.modes.push.particles_nb>1&&i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);break;case"remove":i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);break;case"bubble":i.tmp.bubble_clicking=!0;break;case"repulse":i.tmp.repulse_clicking=!0,i.tmp.repulse_count=0,i.tmp.repulse_finish=!1,setTimeout(function(){i.tmp.repulse_clicking=!1},1e3*i.interactivity.modes.repulse.duration)}})},i.fn.vendors.densityAutoParticles=function(){if(i.particles.number.density.enable){var e=i.canvas.el.width*i.canvas.el.height/1e3;i.tmp.retina&&(e/=2*i.canvas.pxratio);var a=e*i.particles.number.value/i.particles.number.density.value_area,t=i.particles.array.length-a;0>t?i.fn.modes.pushParticles(Math.abs(t)):i.fn.modes.removeParticles(t)}},i.fn.vendors.checkOverlap=function(e,a){for(var t=0;t<i.particles.array.length;t++){var s=i.particles.array[t],n=e.x-s.x,r=e.y-s.y,c=Math.sqrt(n*n+r*r);c<=e.radius+s.radius&&(e.x=a?a.x:Math.random()*i.canvas.w,e.y=a?a.y:Math.random()*i.canvas.h,i.fn.vendors.checkOverlap(e))}},i.fn.vendors.createSvgImg=function(e){var a=i.tmp.source_svg,t=/#([0-9A-F]{3,6})/gi,s=a.replace(t,function(a,t,i,s){if(e.color.rgb)var n="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+e.opacity+")";else var n="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+e.opacity+")";return n}),n=new Blob([s],{type:"image/svg+xml;charset=utf-8"}),r=window.URL||window.webkitURL||window,c=r.createObjectURL(n),o=new Image;o.addEventListener("load",function(){e.img.obj=o,e.img.loaded=!0,r.revokeObjectURL(c),i.tmp.count_svg++}),o.src=c},i.fn.vendors.destroypJS=function(){cancelAnimationFrame(i.fn.drawAnimFrame),t.remove(),pJSDom=null},i.fn.vendors.drawShape=function(e,a,t,i,s,n){var r=s*n,c=s/n,o=180*(c-2)/c,l=Math.PI-Math.PI*o/180;e.save(),e.beginPath(),e.translate(a,t),e.moveTo(0,0);for(var v=0;r>v;v++)e.lineTo(i,0),e.translate(i,0),e.rotate(l);e.fill(),e.restore()},i.fn.vendors.exportImg=function(){window.open(i.canvas.el.toDataURL("image/png"),"_blank")},i.fn.vendors.loadImg=function(e){if(i.tmp.img_error=void 0,""!=i.particles.shape.image.src)if("svg"==e){var a=new XMLHttpRequest;a.open("GET",i.particles.shape.image.src),a.onreadystatechange=function(e){4==a.readyState&&(200==a.status?(i.tmp.source_svg=e.currentTarget.response,i.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),i.tmp.img_error=!0))},a.send()}else{var t=new Image;t.addEventListener("load",function(){i.tmp.img_obj=t,i.fn.vendors.checkBeforeDraw()}),t.src=i.particles.shape.image.src}else console.log("Error pJS - No image.src"),i.tmp.img_error=!0},i.fn.vendors.draw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type?i.tmp.count_svg>=i.particles.number.value?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):void 0!=i.tmp.img_obj?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame))},i.fn.vendors.checkBeforeDraw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type&&void 0==i.tmp.source_svg?i.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(i.tmp.checkAnimFrame),i.tmp.img_error||(i.fn.vendors.init(),i.fn.vendors.draw())):(i.fn.vendors.init(),i.fn.vendors.draw())},i.fn.vendors.init=function(){i.fn.retinaInit(),i.fn.canvasInit(),i.fn.canvasSize(),i.fn.canvasPaint(),i.fn.particlesCreate(),i.fn.vendors.densityAutoParticles(),i.particles.line_linked.color_rgb_line=hexToRgb(i.particles.line_linked.color)},i.fn.vendors.start=function(){isInArray("image",i.particles.shape.type)?(i.tmp.img_type=i.particles.shape.image.src.substr(i.particles.shape.image.src.length-3),i.fn.vendors.loadImg(i.tmp.img_type)):i.fn.vendors.checkBeforeDraw()},i.fn.vendors.eventsListeners(),i.fn.vendors.start()};Object.deepExtend=function(e,a){for(var t in a)a[t]&&a[t].constructor&&a[t].constructor===Object?(e[t]=e[t]||{},arguments.callee(e[t],a[t])):e[t]=a[t];return e},window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),window.pJSDom=[],window.particlesJS=function(e,a){"string"!=typeof e&&(a=e,e="particles-js"),e||(e="particles-js");var t=document.getElementById(e),i="particles-js-canvas-el",s=t.getElementsByClassName(i);if(s.length)for(;s.length>0;)t.removeChild(s[0]);var n=document.createElement("canvas");n.className=i,n.style.width="100%",n.style.height="100%";var r=document.getElementById(e).appendChild(n);null!=r&&pJSDom.push(new pJS(e,a))},window.particlesJS.load=function(e,a,t){var i=new XMLHttpRequest;i.open("GET",a),i.onreadystatechange=function(a){if(4==i.readyState)if(200==i.status){var s=JSON.parse(a.currentTarget.response);window.particlesJS(e,s),t&&t()}else console.log("Error pJS - XMLHttpRequest status: "+i.status),console.log("Error pJS - File config not found")},i.send()};;;$(document).ready(function(){$('#contactform-email').change(function(){var email=$(this).val()
$(this).val(email.trim())})
$('.scroll_top').hide();$(window).scroll(function(){if($(this).scrollTop()>200){$('.scroll_top').show().fadeIn();}else{$('.scroll_top').fadeOut().hide();}});$('.scroll_top').click(function(){$('html, body').animate({scrollTop:0},360);return false;});});;!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},_=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},z=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?_():(document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,f.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||(0,d.default)("[data-aos]",O),w)};e.exports={init:z,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),_?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,z&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(_=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),_?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,z&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(_=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){var n=window.document,r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,a=new r(o);i=t,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),o=t.concat(n).filter(function(e){return e.hasAttribute&&e.hasAttribute("data-aos")}).length;o&&i()})}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){};t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});;;var ua=window.navigator.userAgent;var msie=ua.indexOf("MSIE ");var trident=ua.indexOf('Trident/');if($('#particles-js').length!=0&&msie<0&&trident<0)
particlesJS('particles-js',{"particles":{"number":{"value":40,"density":{"enable":false,"value_area":800}},"color":{"value":"#999999"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"https://static.vnext.work/img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":5,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#999999","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true,"config_demo":{"hide_card":true,"background_color":"#b61924","background_image":"","background_position":"50% 50%","background_repeat":"no-repeat","background_size":"cover"}});;;AOS.init({duration:100,once:true,});;$(".japan").click(function(){$("#address-japan").addClass("active-row-contract");$("#address-danang").removeClass("active-row-contract");$("#address-hanoi").removeClass("active-row-contract");});$(".hanoi").click(function(){$("#address-hanoi").addClass("active-row-contract");$("#address-danang").removeClass("active-row-contract");$("#address-japan").removeClass("active-row-contract");});$(".danang").click(function(){$("#address-danang").addClass("active-row-contract");$("#address-japan").removeClass("active-row-contract");$("#address-hanoi").removeClass("active-row-contract");});;;
/*! lazysizes - v5.2.0 */!function(a,b){var c=b(a,a.document,Date);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}("undefined"!=typeof window?window:{},function(a,b,c){"use strict";var d,e;if(function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};e=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in e||(e[b]=c[b])}(),!b||!b.getElementsByClassName)return{init:function(){},cfg:e,noSupport:!0};var f=b.documentElement,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h].bind(a),k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,c,e,f,g){var h=b.createEvent("Event");return e||(e={}),e.instance=d,h.initEvent(c,!f,!g),h.detail=e,a.dispatchEvent(h),h},w=function(b,c){var d;!g&&(d=a.picturefill||e.pf)?(c&&c.src&&!b[i]("srcset")&&b.setAttribute("srcset",c.src),d({reevaluate:!0,elements:[b]})):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<e.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,d=0,f=e.throttleDelay,g=e.ricTimeout,h=function(){b=!1,d=c.now(),a()},i=m&&g>49?function(){m(h,{timeout:g}),g!==e.ricTimeout&&(g=e.ricTimeout)}:A(function(){k(h)},!0);return function(a){var e;(a=!0===a)&&(g=33),b||(b=!0,e=f-(c.now()-d),e<0&&(e=0),a||e<9?i():k(i,e))}},C=function(a){var b,d,e=99,f=function(){b=null,a()},g=function(){var a=c.now()-d;a<e?k(g,e-a):(m||f)(f)};return function(){d=c.now(),b||(b=k(g,e))}},D=function(){var g,m,o,p,y,D,F,G,H,I,J,K,L=/^img$/i,M=/^iframe$/i,N="onscroll"in a&&!/(gle|ing)bot/.test(navigator.userAgent),O=0,P=0,Q=0,R=-1,S=function(a){Q--,(!a||Q<0||!a.target)&&(Q=0)},T=function(a){return null==K&&(K="hidden"==x(b.body,"visibility")),K||!("hidden"==x(a.parentNode,"visibility")&&"hidden"==x(a,"visibility"))},U=function(a,c){var d,e=a,g=T(a);for(G-=c,J+=c,H-=c,I+=c;g&&(e=e.offsetParent)&&e!=b.body&&e!=f;)(g=(x(e,"opacity")||1)>0)&&"visible"!=x(e,"overflow")&&(d=e.getBoundingClientRect(),g=I>d.left&&H<d.right&&J>d.top-1&&G<d.bottom+1);return g},V=function(){var a,c,h,j,k,l,n,o,q,r,s,t,u=d.elements;if((p=e.loadMode)&&Q<8&&(a=u.length)){for(c=0,R++;c<a;c++)if(u[c]&&!u[c]._lazyRace)if(!N||d.prematureUnveil&&d.prematureUnveil(u[c]))ba(u[c]);else if((o=u[c][i]("data-expand"))&&(l=1*o)||(l=P),r||(r=!e.expand||e.expand<1?f.clientHeight>500&&f.clientWidth>500?500:370:e.expand,d._defEx=r,s=r*e.expFactor,t=e.hFac,K=null,P<s&&Q<1&&R>2&&p>2&&!b.hidden?(P=s,R=0):P=p>1&&R>1&&Q<6?r:O),q!==l&&(D=innerWidth+l*t,F=innerHeight+l,n=-1*l,q=l),h=u[c].getBoundingClientRect(),(J=h.bottom)>=n&&(G=h.top)<=F&&(I=h.right)>=n*t&&(H=h.left)<=D&&(J||I||H||G)&&(e.loadHidden||T(u[c]))&&(m&&Q<3&&!o&&(p<3||R<4)||U(u[c],l))){if(ba(u[c]),k=!0,Q>9)break}else!k&&m&&!j&&Q<4&&R<4&&p>2&&(g[0]||e.preloadAfterLoad)&&(g[0]||!o&&(J||I||H||G||"auto"!=u[c][i](e.sizesAttr)))&&(j=g[0]||u[c]);j&&!k&&ba(j)}},W=B(V),X=function(a){var b=a.target;if(b._lazyCache)return void delete b._lazyCache;S(a),s(b,e.loadedClass),t(b,e.loadingClass),u(b,Z),v(b,"lazyloaded")},Y=A(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,c=a[i](e.srcsetAttr);(b=e.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},aa=A(function(a,b,c,d,f){var g,h,j,l,m,p;(m=v(a,"lazybeforeunveil",b)).defaultPrevented||(d&&(c?s(a,e.autosizesClass):a.setAttribute("sizes",d)),h=a[i](e.srcsetAttr),g=a[i](e.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),m={target:a},s(a,e.loadingClass),p&&(clearTimeout(o),o=k(S,2500),u(a,Z,!0)),l&&q.call(j.getElementsByTagName("source"),_),h?a.setAttribute("srcset",h):g&&!l&&(M.test(a.nodeName)?$(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,e.lazyClass),z(function(){var b=a.complete&&a.naturalWidth>1;p&&!b||(b&&s(a,"ls-is-cached"),X(m),a._lazyCache=!0,k(function(){"_lazyCache"in a&&delete a._lazyCache},9)),"lazy"==a.loading&&Q--},!0)}),ba=function(a){if(!a._lazyRace){var b,c=L.test(a.nodeName),d=c&&(a[i](e.sizesAttr)||a[i]("sizes")),f="auto"==d;(!f&&m||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,e.errorClass)||!r(a,e.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,Q++,aa(a,b,f,d,c))}},ca=C(function(){e.loadMode=3,W()}),da=function(){3==e.loadMode&&(e.loadMode=2),ca()},ea=function(){if(!m){if(c.now()-y<999)return void k(ea,999);m=!0,e.loadMode=3,W(),j("scroll",da,!0)}};return{_:function(){y=c.now(),d.elements=b.getElementsByClassName(e.lazyClass),g=b.getElementsByClassName(e.lazyClass+" "+e.preloadClass),j("scroll",W,!0),j("resize",W,!0),j("pageshow",function(a){if(a.persisted){var c=b.querySelectorAll("."+e.loadingClass);c.length&&c.forEach&&l(function(){c.forEach(function(a){a.complete&&ba(a)})})}}),a.MutationObserver?new MutationObserver(W).observe(f,{childList:!0,subtree:!0,attributes:!0}):(f[h]("DOMNodeInserted",W,!0),f[h]("DOMAttrModified",W,!0),setInterval(W,999)),j("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(a){b[h](a,W,!0)}),/d$|^c/.test(b.readyState)?ea():(j("load",ea),b[h]("DOMContentLoaded",W),k(ea,2e4)),d.elements.length?(V(),z._lsFlush()):W()},checkElems:W,unveil:ba,_aLSL:da}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;f<g;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),d=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width)&&d!==a._lazysizesWidth&&c(a,f,e,d))},f=function(){var b,c=a.length;if(c)for(b=0;b<c;b++)d(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(e.autosizesClass),j("resize",g)},checkElems:g,updateElem:d}}(),F=function(){!F.i&&b.getElementsByClassName&&(F.i=!0,E._(),D._())};return k(function(){e.init&&F()}),d={cfg:e,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}});;;
/*! lazysizes - v4.0.3 */!function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";function d(a,c){if(!g[a]){var d=b.createElement(c?"link":"script"),e=b.getElementsByTagName("script")[0];c?(d.rel="stylesheet",d.href=a):d.src=a,g[a]=!0,g[d.src||d.href]=!0,e.parentNode.insertBefore(d,e)}}var e,f,g={};b.addEventListener&&(f=/\(|\)|\s|'/,e=function(a,c){var d=b.createElement("img");d.onload=function(){d.onload=null,d.onerror=null,d=null,c()},d.onerror=d.onload,d.src=a,d&&d.complete&&d.onload&&d.onload()},addEventListener("lazybeforeunveil",function(a){if(a.detail.instance==c){var b,g,h,i;a.defaultPrevented||("none"==a.target.preload&&(a.target.preload="auto"),b=a.target.getAttribute("data-link"),b&&d(b,!0),b=a.target.getAttribute("data-script"),b&&d(b),b=a.target.getAttribute("data-require"),b&&(c.cfg.requireJs?c.cfg.requireJs([b]):d(b)),h=a.target.getAttribute("data-bg"),h&&(a.detail.firesLoad=!0,g=function(){a.target.style.backgroundImage="url("+(f.test(h)?JSON.stringify(h):h)+")",a.detail.firesLoad=!1,c.fire(a.target,"_lazyloaded",{},!0,!0)},e(h,g)),i=a.target.getAttribute("data-poster"),i&&(a.detail.firesLoad=!0,g=function(){a.target.poster=i,a.detail.firesLoad=!1,c.fire(a.target,"_lazyloaded",{},!0,!0)},e(i,g)))}},!1))});;;$(function(){$(".video-popup").videoPopup();});(function($){$.fn.videoPopup=function(options){var videoPopup={embedLink:''}
var settings=$.extend({autoplay:false,showControls:true,controlsColor:null,loopVideo:false,showVideoInformations:true,width:null,customOptions:{}},options);var parsers={youtube:{regex:/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,test:function(videoUrl,regex){var match=videoUrl.match(regex);return(match&&match[7].length==11)?match[7]:false;},mount:function(videoCode){var youtubeOptions={autoplay:settings.autoplay,color:settings.controlsColor,loop:settings.loopVideo,controls:settings.showControls,showinfo:settings.showVideoInformations,}
Object.assign(youtubeOptions,settings.customOptions);return"https://www.youtube.com/embed/"+videoCode+"/?"+$.param(youtubeOptions);}},vimeo:{regex:/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/,test:function(videoUrl,regex){var match=videoUrl.match(regex);return(match&&match[5].length)?match[5]:false;},mount:function(videoCode){var vimeoOptions={autoplay:settings.autoplay,color:settings.controlsColor,loop:settings.loopVideo,controls:settings.showControls,title:settings.showVideoInformations,}
Object.assign(vimeoOptions,settings.customOptions);return"https://player.vimeo.com/video/"+videoCode+"/?"+$.param(vimeoOptions);}}}
function mountEmbedLink(videoUrl){$.each(parsers,function(index,parser){var videoCode=parser.test(videoUrl,parser.regex);if(videoCode){videoPopup.embedLink=parser.mount(videoCode);return this;}})}
function mountIframe(){var iframeElement='<iframe src="'+videoPopup.embedLink+'" allowfullscreen frameborder="0" width="'+settings.width+'"></iframe>';if(!videoPopup.embedLink){iframeElement='<div class="videopopupjs__block--notfound">Video not found</div>';}
return'<div class="videopopupjs videopopupjs--animation">'+'<div class="videopopupjs__content">'+'<span class="videopopupjs__close"></span>'+
iframeElement+'</div>'+'</div>';}
$(this).css('cursor','pointer');$(this).on('click',function(event){event.preventDefault();var videoUrl=$(this).attr("video-url");var videoIframe=mountEmbedLink(videoUrl);$("body").append(mountIframe());$('.videopopupjs__content').css('max-width',700);if(settings.width){$('.videopopupjs__content').css('max-width',settings.width);}
if($('.videopopupjs').hasClass('videopopupjs--animation')){setTimeout(function(){$('.videopopupjs').removeClass("videopopupjs--animation");},200);}
$(".videopopupjs, .videopopupjs__close").click(function(){$(".videopopupjs").addClass("videopopupjs--hide").delay(515).queue(function(){$(this).remove();});});});$(document).keyup(function(event){if(event.keyCode==27){$('.videopopupjs__close').click();}});return this;};}(jQuery));;;$(document).ready(function(){if(sessionStorage.getItem("is-career-send-email-modal-show")===null){setTimeout(function(){$('#receive-job-information').modal('show');sessionStorage.setItem("is-career-send-email-modal-show","true")},10000)}});;var vtracking=function(trackUrl){$.ajax({url:trackUrl,success:function(response){}})};;$('.skewed-button').mouseenter(function(){if($(".skewed-button > .contact-icon-button").length){$('.contact-icon-button').attr('src','https://static.vnext.work/img/contact_icon_hover.png');}})
$('.skewed-button').mouseleave(function(){if($(".skewed-button > .contact-icon-button").length){$('.contact-icon-button').attr('src','https://static.vnext.work/img/contact_icon.png');}});