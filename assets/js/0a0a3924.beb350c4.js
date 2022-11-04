"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7355],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(b,r(r({ref:t},c),{},{components:n})):a.createElement(b,r({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),l=n(4334),o="tabItem_Ymn6";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(3117),l=n(7294),o=n(4334),r=n(2389),i=n(7392),u=n(7094),s=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,r=e.lazy,m=e.block,d=e.defaultValue,b=e.values,y=e.groupId,h=e.className,k=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=b?b:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var _=null===d?d:null!=(t=null!=d?d:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==_&&!f.some((function(e){return e.value===_})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+_+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,u.U)(),N=v.tabGroupChoices,q=v.setTabGroupChoices,w=(0,l.useState)(_),T=w[0],O=w[1],C=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var E=N[y];null!=E&&E!==T&&f.some((function(e){return e.value===E}))&&O(E)}var x=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;a!==T&&(I(t),O(a),null!=y&&q(y,String(a)))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,l=C.indexOf(e.currentTarget)+1;n=null!=(a=C[l])?a:C[0];break;case"ArrowLeft":var o,r=C.indexOf(e.currentTarget)-1;n=null!=(o=C[r])?o:C[C.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},h)},f.map((function(e){var t=e.value,n=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return C.push(e)},onKeyDown:j,onFocus:x,onClick:x},r,{className:(0,o.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),r?(0,l.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,r.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},6302:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(3117),l=n(102),o=(n(7294),n(3905)),r=n(5488),i=n(5162),u=["components"],s={sidebar_position:2,title:"Pagination Query"},c=void 0,p={unversionedId:"jimmer-sql/query/pagination",id:"jimmer-sql/query/pagination",title:"Pagination Query",description:"Automatically create count-query",source:"@site/docs/jimmer-sql/query/pagination.mdx",sourceDirName:"jimmer-sql/query",slug:"/jimmer-sql/query/pagination",permalink:"/jimmer/docs/jimmer-sql/query/pagination",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-sql/query/pagination.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Pagination Query"},sidebar:"tutorialSidebar",previous:{title:"Subquery",permalink:"/jimmer/docs/jimmer-sql/query/sub-query"},next:{title:"Selection",permalink:"/jimmer/docs/jimmer-sql/query/selection"}},m={},d=[{value:"Automatically create count-query",id:"automatically-create-count-query",level:2},{value:"Automatically optimize count-query",id:"automatically-optimize-count-query",level:2},{value:"Optimization rule",id:"optimization-rule",level:3},{value:"Scenario that cannot be optimized",id:"scenario-that-cannot-be-optimized",level:3},{value:"Scenario that can be optimized",id:"scenario-that-can-be-optimized",level:3},{value:"Dialect and data-query",id:"dialect-and-data-query",level:2},{value:"Default behavior(including DefaultDialect, H2Dialect and PostgresDialect)",id:"default-behaviorincluding-defaultdialect-h2dialect-and-postgresdialect",level:3},{value:"MySqlDialect",id:"mysqldialect",level:3},{value:"SqlServerDialect",id:"sqlserverdialect",level:3},{value:"OracleDialect",id:"oracledialect",level:3}],b={toc:d};function y(e){var t=e.components,n=(0,l.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"automatically-create-count-query"},"Automatically create count-query"),(0,o.kt)("p",null,"Usually, paging query requires two SQL statements, one for querying the total row count of data, and the other one for querying data in one page, let's call them count-query and data-query."),(0,o.kt)("p",null,"These two SQL statements have both the same parts and different parts, and it is difficult to share code unless the SQL logic is very simple."),(0,o.kt)("p",null,"jimmer-sql is specially designed for paging queries. Developers only need to write data-query, and jimmer-sql will automatically create count-query."),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = BookTable.$;\n\nConfigurableRootQuery<Book> query = sqlClient\n    .createQuery(book)\n    ... Omit some code logic, including: ...\n    ... 1. Arbitrarily complex dynamic conditions ...\n    ... 2. Arbitrarily complex dynamic sorting ...\n    ... 3. Arbitrarily complex subqueries ...\n    .select(book);\n\nint rowCount = query.count();\nList<Book> books = query\n    .limit(rowCount / 3, rowCount / 3)\n    .execute();\n"))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val query = sqlClient.createQuery(Book::class) {\n    ... Omit some code logic, including: ...\n    ... 1. Arbitrarily complex dynamic conditions ...\n    ... 2. Arbitrarily complex dynamic sorting ...\n    ... 3. Arbitrarily complex subqueries ...\n    select(table)\n}\n\nval rowCount = query.count()\nval books = query\n    .limit(rowCount / 3, rowCount / 3)\n    .execute()\n")))),(0,o.kt)("p",null,"Among them, ",(0,o.kt)("inlineCode",{parentName:"p"},"query.count()")," is a convenient way of writing, and its actual operation is as follows"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="ConfigurableRootQuery.java"',title:'"ConfigurableRootQuery.java"'},"public interface ConfigurableRootQuery<T extends Table<?>, R> \n    extends TypedRootQuery<R> {\n\n    default int count() {\n        return count(null);\n    }\n\n    default int count(Connection con) {\n        // highlight-next-line\n        return reselect(\n                (q, t) -> q.select(t.count())\n            )\n            .withoutSortingAndPaging()\n            .execute(con)\n            .get(0)\n            .intValue();\n    }\n\n    @NewChain\n    <X> ConfigurableRootQuery<T, X> reselect(\n        BiFunction<\n            MutableRootQuery<T>, \n            T, \n            ConfigurableRootQuery<T, X>\n        > block\n    );\n}\n"))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kt",metastring:'title="KConfigurableRootQuery.kt"',title:'"KConfigurableRootQuery.kt"'},"interface KConfigurableRootQuery<E: Any, R> : KTypedRootQuery<R>\n    \n    fun count(con: Connection? = null): Int =\n        // highlight-next-line\n        reselect { \n            select(org.babyfish.jimmer.sql.kt.ast.expression.count(table)) \n        }\n        .withoutSortingAndPaging()\n        .execute(con)[0]\n        .toInt()\n\n    @NewChain\n    fun <X> reselect(\n        block: KMutableRootQuery<E>.() -> KConfigurableRootQuery<E, X>\n    ): KConfigurableRootQuery<E, X>\n}\n")))),(0,o.kt)("p",null,"The key lies in the ",(0,o.kt)("inlineCode",{parentName:"p"},"reselect")," method, which creates a new query without affecting the current query, and the new query returns the number of records."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Restrictions of ",(0,o.kt)("inlineCode",{parentName:"p"},"reselect")),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"A query created by reselect cannot be further reselected, which will result in an exception."),(0,o.kt)("li",{parentName:"ol"},"If the select clause of the original query contains an aggregate function, an exception will be thrown."),(0,o.kt)("li",{parentName:"ol"},"If the original query contains a ",(0,o.kt)("inlineCode",{parentName:"li"},"group by")," clause, an exception will be thrown."))),(0,o.kt)("h2",{id:"automatically-optimize-count-query"},"Automatically optimize count-query"),(0,o.kt)("h3",{id:"optimization-rule"},"Optimization rule"),(0,o.kt)("p",null,"In order to make the performance of count-query as high as possible, jimmer-sql optimizes count-query and deletes unnecessary table joins for the original data-query query."),(0,o.kt)("p",null,"Note that the following table joins cannot be removed by the optimizer"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The table join used by the where clause."),(0,o.kt)("p",{parentName:"li"},"That is, table joins only used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"order by")," clauses of the original data-query's top-level query may be deleted by optimization.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Table joins based on collection associations."),(0,o.kt)("p",{parentName:"li"},"Collection associations, that is, one-to-many or many-to-many associations. Such table joins inevitably affect the row count of joined results, so these table joins must be preserved in count-query."),(0,o.kt)("p",{parentName:"li"},"Obviously, the table joins that can be deleted by the optimizer are all based on reference associations, that is, many-to-one or one-to-one associations."))),(0,o.kt)("p",null,"If the table join base on reference association does not affect the row count result, it can be removed. there are two possibilities"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The join type is left outer join")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Although the join type is an inner join, the association is based on a foreign key and the foreign key is not null."))),(0,o.kt)("p",null,"In summary, to determine whether a table join copied from the original data-query can be automatically deleted in the count-query, the following optimization rules need to be adopted"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",{rowspan:"4"},"AND"),(0,o.kt)("td",{colspan:"2"},"Whether the association is based on reference, i.e. many-to-one or one-to-one")),(0,o.kt)("tr",null,(0,o.kt)("td",{colspan:"2"},"Is it only used by the `select` or `order by` clause of the original data-query's top-level query")),(0,o.kt)("tr",null,(0,o.kt)("td",{rowspan:"2"},"OR"),(0,o.kt)("td",null,"Is it a left outer join")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Is the association non-null"))),(0,o.kt)("h3",{id:"scenario-that-cannot-be-optimized"},"Scenario that cannot be optimized"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = BookTable.$;\nAuthorTableEx author = AuthorTableEx.$;\n\nConfigurableRootQuery<BookTable, Book> query = sqlClient\n    .createQuery(book)\n    .where(\n        book.price().between(\n            new BigDecimal(20),\n            new BigDecimal(30)\n        )\n    )\n    // highlight-next-line\n    .orderBy(book.store().name())\n    .orderBy(book.name())\n    .select(book);\n\nint rowCount = query.count();\n"))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val query = sqlClient.createQuery(Book::class) {\n    where(\n        table.price.between(\n            BigDecimal(20),\n            BigDecimal(30)\n        )\n    )\n    // highlight-next-line\n    orderBy(table.store.name) // \u03b1\n    orderBy(table.name)\n    select(table)\n}\n\nval rowCount = query.count()\n")))),(0,o.kt)("p",null,"Code at ",(0,o.kt)("inlineCode",{parentName:"p"},"\u03b1")),(0,o.kt)("p",null,"Although ",(0,o.kt)("inlineCode",{parentName:"p"},"table.store()")," is only used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"order by")," clause, not by the where clause, but"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"table.store()")," is an inner join"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Book.store")," association is nullable")),(0,o.kt)("p",null,"Therefore, the optimization rules do not take effect, and count-query still needs to retain ",(0,o.kt)("inlineCode",{parentName:"p"},"table.store()"),", and finally generate a JOIN clause in SQL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    count(tb_1_.ID) \nfrom BOOK as tb_1_ \n/* highlight-start */\ninner join BOOK_STORE as tb_2_ \n    on tb_1_.STORE_ID = tb_2_.ID\n/* highlight-end */ \nwhere tb_1_.PRICE between ? and ?\n")),(0,o.kt)("h3",{id:"scenario-that-can-be-optimized"},"Scenario that can be optimized"),(0,o.kt)("p",null,"For the situation discussed above that cannot be optimized, any of the following ways can be used to make the optimization take effect"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Modify the ",(0,o.kt)("inlineCode",{parentName:"li"},"Book.store")," association to non-null, ie ",(0,o.kt)("inlineCode",{parentName:"li"},"@ManyToOne(optional = false)")),(0,o.kt)("li",{parentName:"ol"},"Use left outer join")),(0,o.kt)("p",null,"Here, we choose the second option, use the left outer join"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = BookTable.$;\nAuthorTableEx author = AuthorTableEx.$;\n\nConfigurableRootQuery<BookTable, Book> query = sqlClient\n    .createQuery(book)\n    .where(\n        book.price().between(\n            new BigDecimal(20),\n            new BigDecimal(30)\n        )\n    )\n    // highlight-next-line\n    .orderBy(book.store(JoinType.LEFT).name())\n    .orderBy(book.name())\n    .select(book);\n\nint rowCount = query.count();\n"))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val query = sqlClient.createQuery(Book::class) {\n    where(\n        table.price.between(\n            BigDecimal(20),\n            BigDecimal(30)\n        )\n    )\n    // highlight-next-line\n    orderBy(table.`store?`.name) // \u03b1\n    orderBy(table.name)\n    select(table)\n}\n\nval rowCount = query.count()\n")))),(0,o.kt)("p",null,"Now, the optimization can take effect, and the final count-query generates SQL as follows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    count(tb_1_.ID) \nfrom BOOK as tb_1_ \nwhere tb_1_.PRICE between ? and ?\n")),(0,o.kt)("h2",{id:"dialect-and-data-query"},"Dialect and data-query"),(0,o.kt)("p",null,"What we discussed above are all count-query, paging query finally needs to execute the original data-query query data"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> books = query\n    // highlight-next-line\n    .limit(10, 90)\n    .execute();\n"))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = query\n    // highlight-next-line\n    .limit(10, 90)\n    .execute()\n")))),(0,o.kt)("p",null,"Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"limit(limit, offset)")," sets the pagination range."),(0,o.kt)("p",null,"Unfortunately, different databases support paginated queries quite differently. Therefore, you need to specify the dialect when creating the JSqlClient"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    // highlight-next-line\n    .setDialect(new H2Dialect())\n    ... ...\n    .build();\n"))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    // highlight-next-line\n    setDialect(H2Dialect())\n}\n")))),(0,o.kt)("p",null,"The currently supported dialects and their respective generated pagination SQL are as follows"),(0,o.kt)("h3",{id:"default-behaviorincluding-defaultdialect-h2dialect-and-postgresdialect"},"Default behavior(including DefaultDialect, H2Dialect and PostgresDialect)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID\nfrom BOOK as tb_1_ \nleft join BOOK_STORE as tb_2_ \n    on tb_1_.STORE_ID = tb_2_.ID \nwhere tb_1_.PRICE between ? and ? \norder by tb_2_.NAME asc, tb_1_.NAME asc \n/* highlight-next-line */\nlimit ? offset ?\n")),(0,o.kt)("h3",{id:"mysqldialect"},"MySqlDialect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID\nfrom BOOK as tb_1_ \nleft join BOOK_STORE as tb_2_ \n    on tb_1_.STORE_ID = tb_2_.ID \nwhere tb_1_.PRICE between ? and ? \norder by tb_2_.NAME asc, tb_1_.NAME asc \n/* highlight-next-line */\nlimit ?, ?\n")),(0,o.kt)("h3",{id:"sqlserverdialect"},"SqlServerDialect"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID\nfrom BOOK as tb_1_ \nleft join BOOK_STORE as tb_2_ \n    on tb_1_.STORE_ID = tb_2_.ID \nwhere tb_1_.PRICE between ? and ? \norder by tb_2_.NAME asc, tb_1_.NAME asc \n/* highlight-next-line */\noffset ? rows fetch next ? rows only\n")),(0,o.kt)("h3",{id:"oracledialect"},"OracleDialect"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When offset is not zero"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select * from (\n    select core__.*, rownum rn__ \n    from (\n        select \n            tb_1_.ID, \n            tb_1_.NAME, \n            tb_1_.EDITION, \n            tb_1_.PRICE, \n            tb_1_.STORE_ID\n        from BOOK as tb_1_ \n        left join BOOK_STORE as tb_2_ \n            on tb_1_.STORE_ID = tb_2_.ID \n        where tb_1_.PRICE between ? and ? \n        order by tb_2_.NAME asc, tb_1_.NAME asc \n    /* highlight-next-line */\n    ) core__ where rownum <= ? /* \u03b1 */\n/* highlight-next-line */\n) limited__ where rn__ > ? /* \u03b2 */\n")),(0,o.kt)("p",{parentName:"li"},"The variable at ",(0,o.kt)("inlineCode",{parentName:"p"},"\u03b1")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"limit + offset"),", and the variable at ",(0,o.kt)("inlineCode",{parentName:"p"},"\u03b2")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"offset"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When offset is zero"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select core__.* from (\n    select \n        tb_1_.ID, \n        tb_1_.NAME, \n        tb_1_.EDITION, \n        tb_1_.PRICE, \n        tb_1_.STORE_ID\n    from BOOK as tb_1_ \n    left join BOOK_STORE as tb_2_ \n        on tb_1_.STORE_ID = tb_2_.ID \n    where tb_1_.PRICE between ? and ? \n    order by tb_2_.NAME asc, tb_1_.NAME asc \n/* highlight-next-line */\n) core__ where rownum <= ? /* \u03b1 */\n")),(0,o.kt)("p",{parentName:"li"},"The variable at ",(0,o.kt)("inlineCode",{parentName:"p"},"\u03b1")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"limit")))))}y.isMDXComponent=!0}}]);