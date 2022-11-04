"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5057],{3905:function(e,n,t){t.d(n,{Zo:function(){return b},kt:function(){return c}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},b=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),m=s(t),c=l,k=m["".concat(u,".").concat(c)]||m[c]||p[c]||o;return t?a.createElement(k,r(r({ref:n},b),{},{components:t})):a.createElement(k,r({ref:n},b))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(7294),l=t(4334),o="tabItem_Ymn6";function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(3117),l=t(7294),o=t(4334),r=t(2389),i=t(7392),u=t(7094),s=t(2466),b="tabList__CuJ",p="tabItem_LNqP";function m(e){var n,t,r=e.lazy,m=e.block,c=e.defaultValue,k=e.values,d=e.groupId,g=e.className,h=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),T=null!=k?k:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),N=(0,i.l)(T,(function(e,n){return e.value===n.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(n=null!=c?c:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:h[0].props.value;if(null!==v&&!T.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+T.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,u.U)(),x=f.tabGroupChoices,y=f.setTabGroupChoices,j=(0,l.useState)(v),E=j[0],_=j[1],B=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var I=x[d];null!=I&&I!==E&&T.some((function(e){return e.value===I}))&&_(I)}var q=function(e){var n=e.currentTarget,t=B.indexOf(n),a=T[t].value;a!==E&&(O(n),_(a),null!=d&&y(d,String(a)))},K=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,l=B.indexOf(e.currentTarget)+1;t=null!=(a=B[l])?a:B[0];break;case"ArrowLeft":var o,r=B.indexOf(e.currentTarget)-1;t=null!=(o=B[r])?o:B[B.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",b)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},g)},T.map((function(e){var n=e.value,t=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return B.push(e)},onKeyDown:K,onFocus:q,onClick:q},r,{className:(0,o.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),r?(0,l.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function c(e){var n=(0,r.Z)();return l.createElement(m,(0,a.Z)({key:String(n)},e))}},8173:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return b},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=t(3117),l=t(102),o=(t(7294),t(3905)),r=t(5488),i=t(5162),u=["components"],s={sidebar_position:4,title:"Table\u548cTableEx"},b=void 0,p={unversionedId:"jimmer-sql/table-and-table-ex",id:"jimmer-sql/table-and-table-ex",title:"Table\u548cTableEx",description:"\u96c6\u5408\u5173\u8054\u7684\u95ee\u9898",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/jimmer-sql/table-and-table-ex.mdx",sourceDirName:"jimmer-sql",slug:"/jimmer-sql/table-and-table-ex",permalink:"/jimmer/zh/docs/jimmer-sql/table-and-table-ex",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-sql/table-and-table-ex.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Table\u548cTableEx"},sidebar:"tutorialSidebar",previous:{title:"SqlClient",permalink:"/jimmer/zh/docs/jimmer-sql/sql-client"},next:{title:"\u8868\u8fde\u63a5",permalink:"/jimmer/zh/docs/jimmer-sql/table-join"}},m={},c=[{value:"\u96c6\u5408\u5173\u8054\u7684\u95ee\u9898",id:"\u96c6\u5408\u5173\u8054\u7684\u95ee\u9898",level:2},{value:"Table\u548cTableEx",id:"table\u548ctableex",level:2},{value:"\u53ea\u80fd\u57fa\u4e8eTable\u521b\u5efa\u7684\u9876\u5c42\u67e5\u8be2",id:"\u53ea\u80fd\u57fa\u4e8etable\u521b\u5efa\u7684\u9876\u5c42\u67e5\u8be2",level:3},{value:"\u5141\u8bb8\u57fa\u4e8eTableEx\u521b\u5efa\u7684\u5b50\u67e5\u8be2",id:"\u5141\u8bb8\u57fa\u4e8etableex\u521b\u5efa\u7684\u5b50\u67e5\u8be2",level:3},{value:"\u7a81\u7834\u8f6f\u6027\u9650\u5236",id:"\u7a81\u7834\u8f6f\u6027\u9650\u5236",level:2}],k={toc:c};function d(e){var n=e.components,t=(0,l.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u96c6\u5408\u5173\u8054\u7684\u95ee\u9898"},"\u96c6\u5408\u5173\u8054\u7684\u95ee\u9898"),(0,o.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u770b\u8fd9\u4e2a\u5b9e\u4f53\u5b9a\u4e49"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'\npackage org.babyfish.jimmer.sql.example.model;\n\nimport java.math.BigDecimal;\nimport java.util.List;\nimport javax.validation.constraints.Null;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\npublic interface Book {\n\n    @Id\n    long id();\n\n    String name();\n\n    int edition();\n\n    BigDecimal price();\n\n    @Null\n    @ManyToOne\n    // highlight-next-line\n    BookStore store();\n\n    @ManyToMany\n    @JoinTable(\n            name = "BOOK_AUTHOR_MAPPING",\n            joinColumnName = "BOOK_ID",\n            inverseJoinColumnName = "AUTHOR_ID"\n    )\n    // highlight-next-line\n    List<Author> authors();\n}\n'))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'\npackage org.babyfish.jimmer.sql.example.model\n\nimport java.math.BigDecimal;\n\nimport org.babyfish.jimmer.sql.*;\n\n@Entity\ninterface Book {\n\n    @Id\n    val id: Long\n\n    val name: String\n\n    val edition: Int\n\n    val price: BigDecimal\n\n    @ManyToOne\n    // highlight-next-line\n    val store: BookStore?\n\n    @ManyToMany\n    @JoinTable(\n            name = "BOOK_AUTHOR_MAPPING",\n            joinColumnName = "BOOK_ID",\n            inverseJoinColumnName = "AUTHOR_ID"\n    )\n    // highlight-next-line\n    val authors: List<Author>\n}\n')))),(0,o.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"store"),"\u662f\u4e00\u4e2a\u591a\u5bf9\u4e00\u5173\u8054"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"authors"),"\u662f\u4e00\u4e2a\u591a\u5bf9\u591a\u5173\u8054")),(0,o.kt)("p",null,"one-to-one\u5173\u8054\u548cmany-to-one\u5173\u8054\u7edf\u79f0\u5f15\u7528\u5173\u8054\uff0cone-to-many\u5173\u8054\u548cmany-to-many\u5173\u8054\u7edf\u79f0\u96c6\u5408\u5173\u8054\u3002"),(0,o.kt)("p",null,"\u5f15\u7528\u5173\u8054\u548c\u96c6\u5408\u5173\u8054\u4e4b\u95f4\u6709\u5982\u4e0b\u5dee\u5f02"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u4e00\u4e2a\u5bf9\u8c61\uff0c\u901a\u8fc7\u5f15\u7528\u5173\u8054\u8fdb\u884ctable join\uff0c\u5728SQL\u67e5\u8be2\u7ed3\u679c\u4e2d\uff0c\u5f53\u524d\u4e3b\u5bf9\u8c61\u4e0d\u4f1a\u51fa\u73b0\u91cd\u590d\u8bb0\u5f55\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u4e00\u4e2a\u5bf9\u8c61\uff0c\u901a\u8fc7\u96c6\u5408\u5173\u8054\u8fdb\u884ctable join\uff0c\u5728SQL\u67e5\u8be2\u7ed3\u679c\u4e2d\uff0c\u5f53\u524d\u4e3b\u5bf9\u8c61\u4f1a\u51fa\u73b0\u91cd\u590d\u8bb0\u5f55\u3002")),(0,o.kt)("p",null,"\u57fa\u4e8e\u96c6\u5408\u5173\u8054\u7684table join\u4f1a\u5bfc\u81f4\u91cd\u590d\u6570\u636e\uff0c\u8fdb\u800c\u5f15\u53d1\u4ee5\u4e0b\u95ee\u9898\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u5f00\u53d1\u8005\u5fd8\u8bb0\u53bb\u91cd\uff0c\u5c31\u4f1a\u5f15\u5165bug\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5373\u4fbf\u5f00\u53d1\u8005\u6ca1\u6709\u5fd8\u8bb0\u53bb\u91cd\uff0c\u4e5f\u4e0d\u662f\u4e00\u4e2a\u597d\u7684\u9009\u62e9\u3002\u5f00\u53d1\u4eba\u5458\u901a\u5e38\u4f1a\u9009\u62e9\u5728\u5ba2\u6237\u7aef\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"java.util.LinkedHashSet"),"\u8fdb\u884c\u53bb\u91cd\u3002\u8fd9\u79cd\u505a\u6cd5\u8017\u8d39\u786c\u4ef6\u8d44\u6e90\u53bb\u5904\u7406\u91cd\u590d\u6570\u636e\uff0c\u5bf9\u7f51\u7edc\u548cJVM\u5185\u5b58\u800c\u8a00\u90fd\u662f\u4e0d\u5fc5\u8981\u538b\u529b\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u6700\u91cd\u8981\u7684\u4e00\u70b9\uff0c\u5bf9\u5206\u9875\u67e5\u8be2\u4e0d\u53cb\u597d"),"\u3002"),(0,o.kt)("p",{parentName:"li"},"\u5728SQL\u5c42\u9762\u5bf9table join\u8fde\u63a5\u7ed3\u679c\u8fdb\u884c\u5206\u9875\uff0c\u5f80\u5f80\u4e0d\u662f\u4eba\u4eec\u6240\u9700\uff1b\u66f4\u591a\u7684\u573a\u666f\u4e0b\uff0c\u4eba\u4eec\u5e0c\u671b\u5206\u9875\u64cd\u4f5c\u88ab\u5e94\u7528\u5728\u4e3b\u5bf9\u8c61 ",(0,o.kt)("em",{parentName:"p"},"\uff08\u5373\u805a\u5408\u6839\u5bf9\u8c61\uff09"),"\u4e0a\u3002"),(0,o.kt)("p",{parentName:"li"},"\u4ee5Hibernate\u4e3a\u4f8b\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cHibernate\u4e0d\u5f97\u4e0d\u653e\u5f03SQL\u5c42\u9762\u7684\u5206\u9875\u7b56\u7565\uff0c\u800c\u91c7\u7528\u5185\u5b58\u5c42\u9762\u7684\u5206\u9875\u7b56\u7565\u3002\u8fd9\u6837\u505a\u6027\u80fd\u975e\u5e38\u4f4e\u4e0b\uff0c\u4e3a\u4e86\u5f15\u8d77\u5f00\u53d1\u4eba\u5458\u7684\u91cd\u89c6\uff0cHibernate\u4f1a\u5728\u65e5\u5fd7\u4e2d\u8fdb\u884c\u544a\u8b66\u3002\u5982\u679c\u8bfb\u8005\u4f60\u6709Hibernate\u4f7f\u7528\u7ecf\u9a8c\uff0c\u76f8\u4fe1\u4e0b\u9762\u8fd9\u6761\u65e5\u5fd7\u4f1a\u8ba9\u4f60\u611f\u5230\u975e\u5e38\u5934\u75bc\u3002"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://tech.asimio.net/2021/05/19/Fixing-Hibernate-HHH000104-firstResult-maxResults-warning-using-Spring-Data-JPA.html"},"firstResult/maxResults specified with collection fetch; applying in memory")),(0,o.kt)("p",{parentName:"li"},"\u4e8b\u5b9e\u4e0a\uff0cjimmer-sql\u63d0\u4f9b\u975e\u5e38\u5f3a\u5927\u7684\u5173\u8054\u5bf9\u8c61fetch\u529f\u80fd\uff0c",(0,o.kt)("a",{parentName:"p",href:"./query/fetcher"},"Object Fetcher"),"\u3002\u800c\u6b63\u662f\u56e0\u4e3a\u8fd9\u4e2a\u539f\u56e0\uff0cObject Fetcher\u5e76\u4e0d\u4f7f\u7528table join\u3002"))),(0,o.kt)("p",null,"\u7efc\u4e0a\uff0c\u5728\u9876\u7ea7\u67e5\u8be2\u4e2d\u4f7f\u7528\u96c6\u5408\u8fde\u63a5\u7684\u7f3a\u70b9\u975e\u5e38\u660e\u663e\uff0c\u4f46\u4e0d\u53ef\u5426\u8ba4\uff0c\u5728\u5b50\u67e5\u8be2\u4e2d\u4f7f\u7528\u96c6\u5408\u8fde\u63a5\u4ecd\u7136\u6709\u5ba2\u89c2\u7684\u4ef7\u503c\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\uff0cjimmer-sql\u6709\u4e00\u4e2a\u91cd\u8981\u7684\u8bbe\u8ba1\u76ee\u6807"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u96c6\u5408\u5173\u8054\u7684table join\uff0c\u5728",(0,o.kt)("strong",{parentName:"li"},"\u9876\u7ea7"),"\u67e5\u8be2\u4e2d\u9700\u8981\u88ab\u7981\u6b62\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u96c6\u5408\u5173\u8054\u7684table join\uff0c\u5728\u5b50\u67e5\u8be2\u3001update\u8bed\u53e5\u548cdelete\u8bed\u53e5\u4e2d\u4ecd\u7136\u53ef\u7528\u3002"))),(0,o.kt)("h2",{id:"table\u548ctableex"},"Table\u548cTableEx"),(0,o.kt)("p",null,"\u4e3a\u4e86\u652f\u6301\u5f3a\u7c7b\u578b\u67e5\u8be2\uff0cAnnotation processor\u4f1a\u6839\u636e\u7528\u6237\u5b9a\u4e49\u7684\u5b9e\u4f53\u63a5\u53e3\u751f\u6210\u4e00\u4e9b\u6e90\u4ee3\u7801\u3002"),(0,o.kt)("p",null,"\u8fd8\u662f\u4ee5\u6587\u7ae0\u5f00\u5934\u7684Book\u5b9e\u4f53\u63a5\u53e3\u4e3a\u4f8b\uff0c\u5982\u4e0b\u4e24\u4e2a\u7c7b\u578b\u4f1a\u88ab\u81ea\u52a8\u751f\u6210"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Generated java code"',title:'"Generated',java:!0,'code"':!0},'/* \n * BookTable.java\n */\npackage org.babyfish.jimmer.sql.example.model;\n\nimport java.lang.Integer;\nimport java.math.BigDecimal;\nimport javax.persistence.criteria.JoinType;\nimport org.babyfish.jimmer.sql.ast.Expression;\nimport org.babyfish.jimmer.sql.ast.PropExpression;\nimport org.babyfish.jimmer.sql.ast.table.Table;\nimport org.babyfish.jimmer.sql.ast.table.spi.AbstractTableWrapper;\n\npublic class BookTable extends AbstractTableWrapper<Book> {\n    public BookTable(Table<Book> table) {\n        super(table);\n    }\n\n    public Expression<Long> id() {\n        return get("id");\n    }\n\n    public PropExpression.Str name() {\n        return get("name");\n    }\n\n    public PropExpression.Num<Integer> edition() {\n        return get("edition");\n    }\n\n    public PropExpression.Num<BigDecimal> price() {\n        return get("price");\n    }\n\n    public BookStoreTable store() {\n        return join("store");\n    }\n\n    public BookStoreTable store(JoinType joinType) {\n        return join("store", joinType);\n    }\n}\n\n/* \n * BookTableEx.java\n */\npackage org.babyfish.jimmer.sql.example.model;\n\nimport javax.persistence.criteria.JoinType;\nimport org.babyfish.jimmer.sql.ast.table.TableEx;\n\npublic class BookTableEx extends BookTable implements TableEx<Book> {\n    public BookTableEx(TableEx<Book> table) {\n        super(table);\n    }\n\n    public AuthorTableEx authors() {\n        return join("authors");\n    }\n\n    public AuthorTableEx authors(JoinType joinType) {\n        return join("authors", joinType);\n    }\n}\n'))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Generated kotlin code"',title:'"Generated',kotlin:!0,'code"':!0},'package org.babyfish.jimmer.example.kt.sql.model\n\nimport java.math.BigDecimal\nimport org.babyfish.jimmer.sql.ast.Selection\nimport org.babyfish.jimmer.sql.kt.ast.expression.KNonNullPropExpression\nimport org.babyfish.jimmer.sql.kt.ast.expression.KNullablePropExpression\nimport org.babyfish.jimmer.sql.kt.ast.table.KNonNullTable\nimport org.babyfish.jimmer.sql.kt.ast.table.KNonNullTableEx\nimport org.babyfish.jimmer.sql.kt.ast.table.KNullableTable\nimport org.babyfish.jimmer.sql.kt.ast.table.KNullableTableEx\nimport org.babyfish.jimmer.sql.kt.ast.table.KTable\nimport org.babyfish.jimmer.sql.kt.ast.table.KTableEx\n\n/* \n * Extension for Table<Book>\n */\npublic val KTable<Book>.id: KNullablePropExpression<Long>\n    get() = get("id")\n\npublic val KNonNullTable<Book>.id: KNonNullPropExpression<Long>\n    get() = get("id")\n\npublic val KTable<Book>.name: KNullablePropExpression<String>\n    get() = get("name")\n\npublic val KNonNullTable<Book>.name: KNonNullPropExpression<String>\n    get() = get("name")\n\npublic val KTable<Book>.edition: KNullablePropExpression<Int>\n    get() = get("edition")\n\npublic val KNonNullTable<Book>.edition: KNonNullPropExpression<Int>\n    get() = get("edition")\n\npublic val KTable<Book>.price: KNullablePropExpression<BigDecimal>\n    get() = get("price")\n\npublic val KNonNullTable<Book>.price: KNonNullPropExpression<BigDecimal>\n    get() = get("price")\n\npublic val KNullableTable<Book>.store: KNullableTable<BookStore>\n    get() = join("store")\n\npublic val KNonNullTable<Book>.store: KNonNullTable<BookStore>\n    get() = join("store")\n\npublic val KTable<Book>.`store?`: KNullableTable<BookStore>\n    get() = outerJoin("store")\n\n/* \n * Extension for TableEx<Book>\n */\n\npublic val KNullableTableEx<Book>.authors: KNullableTableEx<Author>\n    get() = join("authors")\n\npublic val KNonNullTableEx<Book>.authors: KNonNullTableEx<Author>\n    get() = join("authors")\n\npublic val KTableEx<Book>.`authors?`: KNullableTableEx<Author>\n    get() = outerJoin("authors")\n')))),(0,o.kt)("p",null,"\u89c2\u5bdf\u8fd9\u4e24\u4e2a\u81ea\u52a8\u751f\u6210\u7684\u7c7b\u578b\uff0c\u4e0d\u96be\u770b\u51fa"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BookTableEx"),"\u7ee7\u627f\u4e86",(0,o.kt)("inlineCode",{parentName:"li"},"BookTable"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BookTable"),"\u4e0d\u652f\u6301\u96c6\u5408\u5173\u8054\uff0c\u4f46\u652f\u6301\u666e\u901a\u5b57\u6bb5\u548c\u5f15\u7528\u5173\u8054(\u672c\u4f8b\u4e2d\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"store"),")\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BookTableEx"),"\u589e\u52a0\u4e86\u5bf9\u96c6\u5408\u5173\u8054\u7684\u652f\u6301\uff08\u672c\u4f8b\u4e2d\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"authors"),"\uff09\u3002")),(0,o.kt)("p",null,"\u56e0\u6b64jimmer-sql\u7684API\u9075\u5faa\u5982\u4e0b\u7684\u6a21\u5f0f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9876\u7ea7\u67e5\u8be2\u53ea\u80fd\u57fa\u4e8e",(0,o.kt)("inlineCode",{parentName:"li"},"Table"),"\u521b\u5efa\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5b50\u67e5\u8be2\u3001update\u8bed\u53e5\u548cdelete\u8bed\u53e5\u65e2\u53ef\u57fa\u4e8e",(0,o.kt)("inlineCode",{parentName:"li"},"Table"),"\u521b\u5efa\uff0c\u4e5f\u53ef\u57fa\u4e8e",(0,o.kt)("inlineCode",{parentName:"li"},"TableEx"),"\u521b\u5efa\u3002")),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u4ee5\u9876\u5c42\u67e5\u8be2\u548c\u5b50\u67e5\u8be2\u4e3a\u4f8b\uff0c\u505a\u5bf9\u6bd4\u6027\u793a\u8303\u3002"),(0,o.kt)("h3",{id:"\u53ea\u80fd\u57fa\u4e8etable\u521b\u5efa\u7684\u9876\u5c42\u67e5\u8be2"},"\u53ea\u80fd\u57fa\u4e8eTable\u521b\u5efa\u7684\u9876\u5c42\u67e5\u8be2"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = BookTable.$;\n\nsqlClient\n    // `query`\u53ea\u63a5\u53d7`BookTable`\u7c7b\u578b\u7684\u5b9e\u4f8b,\n    // \u5982\u679c\u53c2\u6570\u7684\u7c7b\u578b\u662f`BookTableEx`\uff0c\u4f1a\u5bfc\u81f4\u5f02\u5e38\n    .createQuery(book)\n    ...\u7565...\n"))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient.createQuery(Book::class) {\n    // \u4f60\u53ef\u4ee5\u518d\u6b21\u8bbf\u95ee\u9690\u542b\u7684\u53d8\u91cf`table`.\n    // \u5176\u7d2f\u5fc3\u4e3a`Table<Book>`, \u800c\u975e`TableEx<Book>`\n    ...\n}\n")))),(0,o.kt)("p",null,"\u6240\u4ee5\uff0c\u4f60\u7684\u4ee3\u7801\u770b\u8d77\u6765\u5982\u6b64"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'BookTable book = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .where(\n        book\n            // highlight-next-line\n            .name() // \u53ef\u4ee5\u8bbf\u95ee\u666e\u901a\u5b57\u6bb5name\n            .eq("Book Name")\n    )\n    .where(\n        book\n            // highlight-next-line\n            .store() // \u4e5f\u53ef\u4ee5\u5bf9\u5f15\u7528\u5173\u8054store\u8fdb\u884cjoin\n            .name()\n            .eq("Store Name")\n    )\n    /* \n     * \u7136\u800c\uff0c\u65e0\u6cd5\u4f7f\u7528"book.authors()"\uff0c\u56e0\u4e3aauthors()\n     * \u65b9\u6cd5\u88ab\u5b9a\u4e49\u5728\u4e86BookTableEx\u4e2d\uff0c\u800c\u975eBookTable\u4e2d\u3002\n     * \n     * \u5373\uff0c\u7f16\u8bd1\u65f6\u7981\u6b62\u4e86\u7528\u6237\u5728\u9876\u7ea7\u67e5\u8be2\u4e2d\u5bf9\u96c6\u5408\u5173\u8054\u8fdb\u884cjoin\n     */\n    .select(book)\n    .execute();\n'))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table\n                // highlight-next-line\n                .name // \u53ef\u4ee5\u8bbf\u95ee\u666e\u901a\u5b57\u6bb5name\n                eq "Book Name"\n        )\n        where(\n            table\n                // highlight-next-line\n                .store // \u4e5f\u53ef\u4ee5\u5bf9\u5f15\u7528\u5173\u8054store\u8fdb\u884cjoin\n                .name\n                eq "Store Name"\n        )\n        /* \n         * \u7136\u800c\uff0c\u65e0\u6cd5\u4f7f\u7528"table.authors"\uff0c\u56e0\u4e3a\u6269\u5c55\u5c5e\u6027authors\n         * \u88ab\u5b9a\u4e49\u4e3aTableEx<Book>\u5b9a\u4e49\uff0c\u800c\u975eTable<Book>\u3002\n         * \n         * \u5373\uff0c\u7f16\u8bd1\u65f6\u7981\u6b62\u4e86\u7528\u6237\u5728\u9876\u7ea7\u67e5\u8be2\u4e2d\u5bf9\u96c6\u5408\u5173\u8054\u8fdb\u884cjoin\n         */\n        select(table)\n    }\n    .execute()\n')))),(0,o.kt)("p",null,"\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \ninner join BOOK_STORE as tb_2_ on tb_1_.STORE_ID = tb_2_.ID \nwhere \n    tb_1_.NAME = ? \nand \n    tb_2_.NAME = ?\n")),(0,o.kt)("h3",{id:"\u5141\u8bb8\u57fa\u4e8etableex\u521b\u5efa\u7684\u5b50\u67e5\u8be2"},"\u5141\u8bb8\u57fa\u4e8eTableEx\u521b\u5efa\u7684\u5b50\u67e5\u8be2"),(0,o.kt)("p",null,"\u548c\u9876\u7ea7\u67e5\u8be2\u4e0d\u540c\uff0c\u5b50\u67e5\u8be2\u3001update\u8bed\u53e5\u548cdelete\u8bed\u53e5\u5141\u8bb8\u4f7f\u7528TableEx\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u4f8b\u5b50\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Author.books"),"\u548c\u4e0a\u9762\u8ba8\u8bba\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Book.authors"),"\u4e00\u6837\uff0c\u4e5f\u662f\u4e00\u4e2a\u591a\u5bf9\u591a\u5173\u8054\u3002"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'BookTable book = BookTable.$;\n\n// `author`\u4e3a\u5b50\u67e5\u8be2\u6240\u7528\uff0c\u91c7\u7528TableEx\nAuthorTableEx author = AuthorTableEx.$;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .where(sqlClient\n        .createSubQuery(author)\n        .where(\n            author\n                // `author`\u662fTableEx\uff0c\n                // \u6240\u4ee5\u96c6\u5408\u5173\u8054`books`\u662f\u5141\u8bb8\u7684\n                .books()\n                .eq(book),\n\n            author.firstName().eq("Alex")\n        )\n        .exists()\n    )\n    .select(book)\n    .execute();\n'))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n\n        // \u5728\u7236\u67e5\u8be2\u4e2d`table`\u8868\u793a`Table<Book>`\n        \n        where(\n            exists(\n                wildSubQuery(Author::class) {\n\n                    // \u5728\u5b50\u67e5\u8be2\u4e2d\uff0c`table`\u8868\u793aTableEx<Author>\n                    \n                    where(\n                        table\n                            // \u5b50\u67e5\u8be2\u7684`table`\u662fTableEx\uff0c\n                            // \u6240\u4ee5\u96c6\u5408\u5173\u8054`books`\u662f\u5141\u8bb8\u7684\n                            .books\n                            eq\n                            parentTable,\n\n                        table.firstName.eq("Alex")\n                    )\n                }\n            )\n        )\n        select(table)\n    }\n    .execute()\n')))),(0,o.kt)("p",null,"\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \nwhere exists(\n    select 1 \n    from AUTHOR as tb_2_ \n    // highlight-start\n    inner join BOOK_AUTHOR_MAPPING as tb_3_ \n        on tb_2_.ID = tb_3_.AUTHOR_ID \n    // highlight-end\n    where \n        tb_3_.BOOK_ID = tb_1_.ID \n    and \n        tb_2_.FIRST_NAME = ?\n)\n")),(0,o.kt)("h2",{id:"\u7a81\u7834\u8f6f\u6027\u9650\u5236"},"\u7a81\u7834\u8f6f\u6027\u9650\u5236"),(0,o.kt)("p",null,"\u7981\u6b62\u5728\u9876\u7ea7\u67e5\u8be2\u4e2d\u4f7f\u7528\u96c6\u5408\u5173\u8054\uff0c\u7edd\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u90fd\u662f\u5408\u7406\u7684\uff0c\u4f46\u5e76\u975e\u6240\u6709\u60c5\u51b5\u90fd\u5408\u7406\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\uff0c\u7528\u6237\u5e76\u4e0d\u67e5\u8be2\u6574\u4e2a\u5bf9\u8c61\uff0c\u800c\u4e14\u67e5\u8be2\u4e2a\u522b\u5b57\u6bb5\uff0c\u5e76\u4f7f\u7528SQL\u5173\u952e\u5b57",(0,o.kt)("inlineCode",{parentName:"p"},"distinct"),"\u6765\u62b5\u6d88\u5bf9\u96c6\u5408\u5173\u8054join\u6240\u5e26\u6765\u7684\u526f\u4f5c\u7528\u3002\u8fd9\u79cd\u573a\u666f\u662f\u5b8c\u5168\u5408\u7406\u7684\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\uff0c\u7981\u6b62\u5728\u9876\u7ea7\u67e5\u8be2\u4e2d\u4f7f\u7528\u96c6\u5408\u5173\u8054\u662f\u4e00\u4e2a\u8f6f\u6027\u9650\u5236\uff0c\u800c\u975e\u521a\u6027\u9650\u5236\u3002\u53ef\u4ee5\u8f7b\u677e\u7a81\u7834\u3002"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'BookTable book = BookTable.$;\n\nList<Long> bookIds = sqlClient\n    .createQuery(book)\n    .where(\n        book\n            // highlight-next-line\n            .asTableEx()\n            .authors()\n            .firstName()\n            .ilike("A%")\n    )\n    .select(book.id())\n    .distinct()\n    .execute();\n'))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val bookIds = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table\n                // highlight-next-line\n                .asTableEx()\n                .authors\n                .firstName ilike "A%"\n        )\n        select(table.id)\n    }\n    .distinct()\n    .execute()\n')))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"asTableEx()"),"\u65b9\u6cd5\u628a",(0,o.kt)("inlineCode",{parentName:"p"},"Table"),"\u8f6c\u5316\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"TableEx"),"\uff0c\u4f60\u53ef\u4ee5\u5728\u9876\u7ea7\u67e5\u8be2\u4e2d\u4f7f\u7528\u96c6\u5408\u5173\u8054\u3002\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    distinct tb_1_.ID \nfrom BOOK as tb_1_ \n/* highlight-start */\ninner join BOOK_AUTHOR_MAPPING as tb_2_ \n    on tb_1_.ID = tb_2_.BOOK_ID \ninner join AUTHOR as tb_3_ \n    on tb_2_.AUTHOR_ID = tb_3_.ID \n/* highlight-end */\nwhere lower(tb_3_.FIRST_NAME) like ?\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u52a0\u4e0a\u8fd9\u4e2a\u9650\u5236\uff0c\u53c8\u8ba9\u8fd9\u4e2a\u9650\u5236\u53ef\u4ee5\u8f7b\u677e\u7a81\u7834\u3002\u5982\u6b64\u770b\u4f3c\u77db\u76fe\u7684\u505a\u6cd5\u76ee\u7684\u4f55\u5728\uff1f"),(0,o.kt)("p",{parentName:"admonition"},"\u5f53\u5f00\u53d1\u4eba\u5458\u771f\u8981\u8fd9\u4e48\u505a\u65f6\uff0c\u786e\u4fdd\u4ed6\u660e\u767d\u81ea\u5df1\u5728\u5e72\u4ec0\u4e48\u3002")))}d.isMDXComponent=!0}}]);