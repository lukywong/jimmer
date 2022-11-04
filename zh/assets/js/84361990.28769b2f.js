"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9172],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),m=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=m(r),f=a,d=s["".concat(u,".").concat(f)]||s[f]||p[f]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8849:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:8,title:"\u4fee\u6539"},u=void 0,m={unversionedId:"jimmer-sql/mutation/index",id:"jimmer-sql/mutation/index",title:"\u4fee\u6539",description:"jimmer-sql\u63d0\u4f9b\u4e86\u4e24\u79cd\u4fee\u6539\u65b9\u5f0f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/jimmer-sql/mutation/index.md",sourceDirName:"jimmer-sql/mutation",slug:"/jimmer-sql/mutation/",permalink:"/jimmer/zh/docs/jimmer-sql/mutation/",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-sql/mutation/index.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"\u4fee\u6539"},sidebar:"tutorialSidebar",previous:{title:"\u5168\u5c40\u8fc7\u6ee4\u5668",permalink:"/jimmer/zh/docs/jimmer-sql/query/filter"},next:{title:"Update\u8bed\u53e5",permalink:"/jimmer/zh/docs/jimmer-sql/mutation/update-statement"}},c={},p=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",level:2}],s={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"jimmer-sql\u63d0\u4f9b\u4e86\u4e24\u79cd\u4fee\u6539\u65b9\u5f0f"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4fee\u6539\u8bed\u53e5"),(0,i.kt)("p",{parentName:"li"},"\u4fee\u6539\u8bed\u53e5\u5bf9\u5e94SQL\u7684update\u548cdelete\u8bed\u53e5\uff0c\u9002\u7528\u4e8e\u903b\u8f91\u7b80\u5355\u4f46\u9700\u8981\u6279\u91cf\u64cd\u4f5c\u7684\u573a\u5408\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4fee\u6539\u6307\u4ee4"),(0,i.kt)("p",{parentName:"li"},"\u4fee\u6539\u6307\u4ee4\uff0c\u9002\u7528\u4e8e\u903b\u8f91\u590d\u6742\u7684\u573a\u5408\u3002"),(0,i.kt)("p",{parentName:"li"},"\u5176\u4e2dsave\u6307\u4ee4\u975e\u5e38\u5f3a\u5927\uff0c\u5982\u679c\u8bf4GraphQL\u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u52a8\u6001\u6811\u8f93\u51fa\u624b\u6bb5\uff0c\u90a3\u4e48save\u6307\u4ee4\u5c31\u662f\u4e00\u4e2a\u52a8\u6001\u6811\u8f93\u5165\u624b\u6bb5\u3002"))),(0,i.kt)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./update-statement"},"Update\u8bed\u53e5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./delete-statement"},"Delete\u8bed\u53e5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./save-command"},"Save\u6307\u4ee4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./delete-command"},"Delete\u6307\u4ee4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./association"},"\u4fee\u6539\u4e2d\u95f4\u8868"))))}f.isMDXComponent=!0}}]);