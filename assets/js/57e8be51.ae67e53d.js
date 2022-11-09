"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3033],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,N=m["".concat(i,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(N,l(l({ref:t},p),{},{components:a})):n.createElement(N,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(4334),o="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(3117),r=a(7294),o=a(4334),l=a(2389),d=a(7392),i=a(7094),s=a(2466),p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,a,l=e.lazy,m=e.block,u=e.defaultValue,N=e.values,f=e.groupId,k=e.className,T=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=N?N:T.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,d.l)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===u?u:null!=(t=null!=u?u:null==(a=T.find((function(e){return e.props.default})))?void 0:a.props.value)?t:T[0].props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,i.U)(),y=v.tabGroupChoices,D=v.setTabGroupChoices,j=(0,r.useState)(g),x=j[0],C=j[1],I=[],w=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var Z=y[f];null!=Z&&Z!==x&&b.some((function(e){return e.value===Z}))&&C(Z)}var O=function(e){var t=e.currentTarget,a=I.indexOf(t),n=b[a].value;n!==x&&(w(t),C(n),null!=f&&D(f,String(n)))},P=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=I.indexOf(e.currentTarget)+1;a=null!=(n=I[r])?n:I[0];break;case"ArrowLeft":var o,l=I.indexOf(e.currentTarget)-1;a=null!=(o=I[l])?o:I[I.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},k)},b.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return I.push(e)},onKeyDown:P,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(T.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},T.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function u(e){var t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},7083:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),l=a(5488),d=a(5162),i=["components"],s={sidebar_position:3,title:"Draft Proxies"},p=void 0,c={unversionedId:"jimmer-core/draft",id:"jimmer-core/draft",title:"Draft Proxies",description:"Use AnnotationProcessor/KSP plugin",source:"@site/docs/jimmer-core/draft.mdx",sourceDirName:"jimmer-core",slug:"/jimmer-core/draft",permalink:"/jimmer/docs/jimmer-core/draft",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-core/draft.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Draft Proxies"},sidebar:"tutorialSidebar",previous:{title:"Get started",permalink:"/jimmer/docs/jimmer-core/usage"},next:{title:"Dynamic Object",permalink:"/jimmer/docs/jimmer-core/dynamic"}},m={},u=[{value:"Use AnnotationProcessor/KSP plugin",id:"use-annotationprocessorksp-plugin",level:2},{value:"Scalar property",id:"scalar-property",level:2},{value:"Reference association",id:"reference-association",level:2},{value:"Override getter <code>parent()</code>",id:"override-getter-parent",level:3},{value:"Add getter <code>parent(boolean)</code>",id:"add-getter-parentboolean",level:3},{value:"Add setter <code>setParent</code>",id:"add-setter-setparent",level:3},{value:"Added lambda based <code>setParent</code>",id:"added-lambda-based-setparent",level:3},{value:"Collection association",id:"collection-association",level:2},{value:"Inherit getter <code>childNodes()</code>",id:"inherit-getter-childnodes",level:3},{value:"Add getter <code>childNodes(boolean)</code>",id:"add-getter-childnodesboolean",level:3},{value:"Add setter <code>setChildNodes</code>",id:"add-setter-setchildnodes",level:3},{value:"Add <code>addIntoChildNodes</code>",id:"add-addintochildnodes",level:3}],N={toc:u};function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"use-annotationprocessorksp-plugin"},"Use AnnotationProcessor/KSP plugin"),(0,o.kt)("p",null,"User defines immutable data interface"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNode.java"',title:'"TreeNode.java"'},"package yourpackage;\n\nimport javax.validation.constraints.Null;\nimport java.util.List;\n\nimport org.babyfish.jimmer.Immutable;\n\n@Immutable\npublic interface TreeNode {\n    \n    String name();\n\n    @Null\n    TreeNode parent();\n\n    List<TreeNode> childNodes();\n}\n"))),(0,o.kt)(d.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNode.kt"',title:'"TreeNode.kt"'},"package yourpackage\n\nimport org.babyfish.jimmer.Immutable\n\n@Immutable\ninterface TreeNode {\n\n    val name: String\n\n    val parent: TreeNode?\n\n    val childNodes: List<TreeNode>\n}\n")))),(0,o.kt)("p",null,"Due to the existence of Annotation Processor/KSP plugin in the gradle configuration file"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"java",label:"For java project",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},"dependencies {\n\n    implementation 'org.babyfish.jimmer:jimmer-core:0.4.10'\n\n    // highlight-next-line\n    annotationProcessor 'org.babyfish.jimmer:jimmer-apt:0.4.10'\n    // This annotation processor generates source code\n    // for INTERFACEs marked by\n    // `@org.babyfish.jimmer.Immutable` or\n    // `@org.babyfish.jimmer.sql.Entity`\n}\n"))),(0,o.kt)(d.Z,{value:"kotlin",label:"For kotlin project",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="build.gradle.kts"',title:'"build.gradle.kts"'},'plugins {\n    id("com.google.devtools.ksp") version "1.7.10-1.0.6"\n    ... other code...\n}\ndependencies {\n\n    implementation("org.babyfish.jimmer:jimmer-core-kotlin:0.4.10")\n    // highlight-next-line\n    ksp("org.babyfish.jimmer:jimmer-ksp:0.4.10")\n    // The ksp plugin generates source code\n    // for INTERFACEs marked by\n    // `@org.babyfish.jimmer.Immutable` or\n    // `@org.babyfish.jimmer.sql.Entity`\n}\n\nkotlin {\n    sourceSets.main {\n        kotlin.srcDir("build/generated/ksp/main/kotlin")\n    }\n}\n')))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Annotation Processor/KSP plugin")," will generate an interface named ",(0,o.kt)("inlineCode",{parentName:"p"},"TreeNodeDraft")," as follows:"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNodeDraft.java"',title:'"TreeNodeDraft.java"'},"package org.babyfish.jimmer.example.core.model;\n\nimport java.util.List;\nimport org.babyfish.jimmer.DraftConsumer;\nimport org.babyfish.jimmer.lang.OldChain;\n\npublic interface TreeNodeDraft extends TreeNode, Draft {\n\n    // highlight-next-line\n    TreeNodeDraft.Producer $ = Producer.INSTANCE;\n\n\n    @OldChain\n    TreeNodeDraft setName(String name);\n\n\n    TreeNodeDraft parent();\n\n    TreeNodeDraft parent(boolean autoCreate);\n\n\n    @OldChain\n    TreeNodeDraft setParent(TreeNode parent);\n\n    @OldChain\n    TreeNodeDraft setParent(DraftConsumer<TreeNodeDraft> block);\n\n    @OldChain\n    TreeNodeDraft setParent(TreeNode base, DraftConsumer<TreeNodeDraft> block);\n\n\n\n    List<TreeNodeDraft> childNodes(boolean autoCreate);\n\n    @OldChain\n    TreeNodeDraft setChildNodes(List<TreeNode> childNodes);\n\n    @OldChain\n    TreeNodeDraft addIntoChildNodes(DraftConsumer<TreeNodeDraft> block);\n\n    @OldChain\n    TreeNodeDraft addIntoChildNodes(TreeNode base, DraftConsumer<TreeNodeDraft> block);\n\n\n\n    class Producer {\n\n        private Producer() {}\n\n        // highlight-next-line\n        public TreeNode produce(\n            DraftConsumer<TreeNodeDraft> block\n        ) {\n            return produce(null, block);\n        }\n\n        // highlight-next-line\n        public TreeNode produce(\n            TreeNode base, \n            DraftConsumer<TreeNodeDraft> block\n        ) {\n            ...omit...\n        }\n\n        ...omit other code...\n    }\n\n    ...omit other code...\n}\n"))),(0,o.kt)(d.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNodeDraft.kt"',title:'"TreeNodeDraft.kt"'},"@DslScope\npublic interface TreeNodeDraft : TreeNode {\n    public override var name: String\n\n    public override var parent: TreeNode?\n\n    public override var childNodes: List<TreeNode>\n\n    public fun parent(): TreeNodeDraft\n\n    public fun childNodes(): MutableList<TreeNodeDraft>\n\n    public object `$` {\n        \n        ...omit other code...\n\n        public fun produce(\n            base: TreeNode? = null, \n            block: TreeNodeDraft.() -> Unit\n        ): TreeNode {\n            ...omit code...\n        }\n    }\n\n    ...omit other code...\n}\n\n// highlight-next-line\npublic fun ImmutableCreator<TreeNode>.`by`(\n    base: TreeNode? = null, \n    block: TreeNodeDraft.() -> Unit\n): TreeNode = \n    TreeNodeDraft.`$`.produce(base, block)\n\npublic fun MutableList<TreeNodeDraft>.addBy(\n    base: TreeNode? = null,\n    block: TreeNodeDraft.() -> Unit\n): MutableList<TreeNodeDraft> {\n    add(TreeNodeDraft.`$`.produce(base, block) as TreeNodeDraft)\n    return this\n}\n")))),(0,o.kt)("p",null,"You can use it like this"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new object from scratch"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"TreeNode oldTreeNode = TreeNodeDraft.$\n    .produce(treeNodeDraft -> {\n        ...omit...\n    });\n"))),(0,o.kt)(d.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"vak oldTreeNode = new(TreeNode::class).by {\n    ...omit...\n}\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Create a new object after making some "changes" based on an existing object'),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"TreeNode newTreeNode = TreeNodeDraft.$\n    .produce(oldTreeNode, treeNodeDraft -> {\n        ...omit...\n    });\n"))),(0,o.kt)(d.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val newTreeNode = new(TreeNode::class).by(oldTreeNode) {\n    ...omit...\n}\n")))))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The complete code of these two usages has been demonstrated in ",(0,o.kt)("a",{parentName:"p",href:"./usage"},"First experience"),", so the code inside the lambda expression is omitted here, and repeated pasting will not be done.")),(0,o.kt)("h2",{id:"scalar-property"},"Scalar property"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TreeNode.name")," is a scalar property. ",(0,o.kt)("inlineCode",{parentName:"p"},"TreeNodeDraft")," defines the following ",(0,o.kt)("inlineCode",{parentName:"p"},"setter method/writable property")," for it"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNodeDraft.java"',title:'"TreeNodeDraft.java"'},"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    @OldChain\n    TreeNodeDraft setName(String name);\n\n    ...omit other code...\n}\n"))),(0,o.kt)(d.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNodeDraft.kt"',title:'"TreeNodeDraft.kt"'},"@DslScope\npublic interface TreeNodeDraft : TreeNode {\n    \n    // var, not val\n    public override var name: String\n\n    ...omit other code...\n}\n")))),(0,o.kt)("p",null,"Developers can set the property ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," of the draft proxy through this method"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = TreeNodeDraft.$\n    .produce(draft -> {\n        draft.setName("Root Node");\n    });\n'))),(0,o.kt)(d.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by {\n    name = "Root Node"\n} \n')))),(0,o.kt)("h2",{id:"reference-association"},"Reference association"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TreeNode.store")," is an associative property. Its type is an object, not a collection. In terms of ORM, it is a one-to-one or many-to-one association."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TreeNodeDraft")," defines several methods for it"),(0,o.kt)("h3",{id:"override-getter-parent"},"Override getter ",(0,o.kt)("inlineCode",{parentName:"h3"},"parent()")),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNodeDraft.java"',title:'"TreeNodeDraft.java"'},"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    TreeNodeDraft parent();\n\n    ...omit other code...\n}\n"))),(0,o.kt)(d.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNodeDraft.kt"',title:'"TreeNodeDraft.kt"'},"@DslScope\npublic interface TreeNodeDraft : TreeNode {\n    \n    public fun parent(): TreeNodeDraft\n\n    ...omit other code...\n}\n")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note that the return type of this method is ",(0,o.kt)("inlineCode",{parentName:"p"},"TreeNodeDraft"),", not ",(0,o.kt)("inlineCode",{parentName:"p"},"TreeNode"),"."),(0,o.kt)("p",{parentName:"admonition"},"That is, if the draft object's reference association has been set and is set to non-null, then the method always returns the draft object. In this way, the user can directly modify the deeper associated objects.")),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode newTreeNode = TreeNodeDraft.$\n    .produce(treeNode, draft -> {\n        draft.parent().setName("Daddy");\n        draft.parent().parent().setName("Grandpa");\n    });\n'))),(0,o.kt)(d.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@DslScope\nvar newTreeNode = new(TreeNode::class).by(treeNode) {\n    parent().name = "Daddy"\n    parent().parent().name = "Grandpa"\n}\n')))),(0,o.kt)("h3",{id:"add-getter-parentboolean"},"Add getter ",(0,o.kt)("inlineCode",{parentName:"h3"},"parent(boolean)")),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNodeDraft.java"',title:'"TreeNodeDraft.java"'},"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    TreeNode parent(boolean autoCreate);\n\n    ...omit other code...\n}\n"))),(0,o.kt)(d.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNodeDraft.kt"',title:'"TreeNodeDraft.kt"'},"@DslScope\npublic interface TreeNodeDraft : TreeNode {\n\n    // The getter of this property is \n    // equivalent to java's `parent(false)` \n    override fun parent: TreeNode\n    \n    // This function is \n    // equivalent to java's `parent(true)` \n    public fun parent(): TreeNodeDraft\n\n    ...omit other code...\n}\n")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"parent(false)")," is equivalent to ",(0,o.kt)("inlineCode",{parentName:"p"},"parent()"),", with the following two problems:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the property ",(0,o.kt)("inlineCode",{parentName:"li"},"parent")," of the draft object is not set, accessing it will cause an exception"),(0,o.kt)("li",{parentName:"ul"},"If the property ",(0,o.kt)("inlineCode",{parentName:"li"},"parent")," of the draft object is set to null, accessing it will get null, and null cannot support further modification.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"parent(true)")," can solve the above problems. If any of the above conditions are satisfied, an associated object is automatically created and set, and then the user is allowed to modify it. This is a useful feature, especially when creating objects from scratch."),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = TreeNodeDraft.$\n    .produce(/* No `base` here */ draft -> {\n        draft.parent(true).setName("Daddy");\n        draft.parent(true).parent(true).setName("Grandpa");\n    });\n'))),(0,o.kt)(d.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by /* No `base` here */ {\n    parent().setName("Daddy");\n    parent().parent().setName("Grandpa");\n}\n')))),(0,o.kt)("h3",{id:"add-setter-setparent"},"Add setter ",(0,o.kt)("inlineCode",{parentName:"h3"},"setParent")),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNodeDraft.java"',title:'"TreeNodeDraft.java"'},"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    @OldChain\n    TreeNodeDraft setParent(TreeNode parent);\n\n    ...omit other code...\n}\n"))),(0,o.kt)(d.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNodeDraft.kt"',title:'"TreeNodeDraft.kt"'},"@DslScope\npublic interface TreeNodeDraft : TreeNode, Draft {\n\n    // var, not val\n    public var parent: TreeNode\n\n    ...omit other code...\n}\n")))),(0,o.kt)("p",null,"This setter allows the user to replace the entire associated object."),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = TreeNodeDraft.$\n    .produce(draft -> {\n        draft.setParent(\n            TreeNodeDraft.$.produce(daddyDraft -> {\n                daddyDraft.setName("Daddy")\n            })\n        )\n    });\n'))),(0,o.kt)(d.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'var treeNode = new(TreeNode::class).by {\n    parent = new(TreeNode::class).by {\n        name = "Daddy"\n    }\n}\n')))),(0,o.kt)("h3",{id:"added-lambda-based-setparent"},"Added lambda based ",(0,o.kt)("inlineCode",{parentName:"h3"},"setParent")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This feature is only available for Java. "),(0,o.kt)("p",{parentName:"admonition"},"The kotlin code is concise enough, and is not needed to simplify the code by this way.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNodeDraft.java"',title:'"TreeNodeDraft.java"'},"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    @OldChain\n    TreeNodeDraft setParent(\n        DraftConsumer<TreeNodeDraft> block\n    );\n\n    @OldChain\n    TreeNodeDraft setParent(\n        TreeNode base, \n        DraftConsumer<TreeNodeDraft> block\n    );\n\n    ...omit other code...\n}\n")),(0,o.kt)("p",null,"These two setters are used for simplified code. Since the usage of the two methods is highly similar, only the first one is used as an example."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verbose code"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode oldTreeNode = TreeNodeDraft.$\n    .produce(draft -> {\n        draft.setParent(\n            TreeNodeDraft.$.produce(daddyDraft -> {\n                daddyDraft.setName("Daddy")\n            })\n        )\n    });\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clean code"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode oldTreeNode = TreeNodeDraft.$\n    .produce(draft -> {\n        draft.setParent(daddyDraft -> {\n            daddyDraft.setName("Daddy")\n        })\n    });\n')))),(0,o.kt)("p",null,"The two are completely equivalent."),(0,o.kt)("h2",{id:"collection-association"},"Collection association"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TreeNode.childNodes")," is an associated property. Its type is a collection, not an object. In terms of ORM, it is a one-to-many or many-to-many association."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TreeNodeDraft")," defines several methods for it"),(0,o.kt)("h3",{id:"inherit-getter-childnodes"},"Inherit getter ",(0,o.kt)("inlineCode",{parentName:"h3"},"childNodes()")),(0,o.kt)("p",null,"For both java and kotlin, ",(0,o.kt)("inlineCode",{parentName:"p"},"TreeNodeDraft")," cannot override the ",(0,o.kt)("inlineCode",{parentName:"p"},"childNodes()")," method or ",(0,o.kt)("inlineCode",{parentName:"p"},"childNodes")," property, from a syntactical level, it can only inherit the ",(0,o.kt)("inlineCode",{parentName:"p"},"childNodes()")," method of ",(0,o.kt)("inlineCode",{parentName:"p"},"TreeNode"),"."),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"List<TreeNode> childNodes();\n"))),(0,o.kt)(d.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"var childNodes: List<TreeNode>\n")))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Although the return type of this method/property defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"TreeNode")," interface is ",(0,o.kt)("inlineCode",{parentName:"p"},"List<TreeNode>"),", after being inherited by the ",(0,o.kt)("inlineCode",{parentName:"p"},"TreeNodeDraft")," interface, its return type should be understood as ",(0,o.kt)("inlineCode",{parentName:"p"},"List<TreeNodeDraft>"),"."),(0,o.kt)("p",{parentName:"admonition"},"The incompatibility of return types also explains why this method cannot be overridden.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If the draft object's collection association is set, all elements in the collection obtained by accessing this property are draft objects. In this way, users can directly modify related objects deeper in the collection.")),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode newTreeNode = TreeNodeDraft.$\n    .produce(treeNode, draft -> {\n        ((TreeNodeDraft)\n            draft\n                .childNodes().get(0)\n        ).setName("Son");\n        ((TreeNodeDraft)\n            draft\n                .childNodes().get(0)\n                .childNodes().get(0)\n        ).setName("Grandson");\n    });\n'))),(0,o.kt)(d.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val newTreeNode = new(TreeNode::class).by(treeNode) {\n    (childNodes[0] as TreeNodeDraft)\n        .name = "Son"\n    (childNodes[0].childNodes[0] as TreeNodeDraft)\n        .name = "Son"\n}\n')))),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"In the above code, the two type casts have significantly disrupted the development experience, so it is not recommended to use them in real projects."),(0,o.kt)("p",{parentName:"admonition"},"To achieve the same purpose, the ",(0,o.kt)("inlineCode",{parentName:"p"},"childNodes(boolean)")," method described next is more recommended.")),(0,o.kt)("h3",{id:"add-getter-childnodesboolean"},"Add getter ",(0,o.kt)("inlineCode",{parentName:"h3"},"childNodes(boolean)")),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNodeDraft.java"',title:'"TreeNodeDraft.java"'},"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    List<TreeNodeDraft> childNodes(boolean autoCreate);\n\n    ...omit other code...\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"childNodes(false)")," is equivalent to ",(0,o.kt)("inlineCode",{parentName:"p"},"childNodes()"),", if the property ",(0,o.kt)("inlineCode",{parentName:"p"},"childNodes")," of the draft object is not set, accessing it will cause an exception.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"childNodes(true)")," will solve this problem, automatically create and set a collection if the property has not been set, and then allow the user to modify the collection.")))),(0,o.kt)(d.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNodeDraft.kt"',title:'"TreeNodeDraft.kt"'},"@DslScope\npublic interface TreeNodeDraft : TreeNode, Draft {\n\n    override var childNodes: List<TreeNode>\n    \n    fun childNodes(): MutableList<TreeNode>\n\n    ...omit other code...\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The getter of ",(0,o.kt)("inlineCode",{parentName:"li"},"childNodes")," is equivalent to ",(0,o.kt)("inlineCode",{parentName:"li"},"childNodes(false)")," of java. if the property childNodes of the draft object is not set, accessing it will cause an exception."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"childNodes()")," is equivalent to ",(0,o.kt)("inlineCode",{parentName:"li"},"childNodes(true)")," of java, automatically create and set a collection if the property has not been set, and then allow the user to modify the collection.\n")))),(0,o.kt)("p",null,"Now, we can create another object based on old object."),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode newTreeNode = TreeNodeDraft.$\n    .produce(treeNode, draft -> {\n        draft\n            .childNodes(false)\n            .get(0)\n            .setName("Son");\n        draft\n            .childNodes(false)\n            .get(0)\n            .childNodes(false)\n            .get(0)\n            .setName("Grandson");\n    });\n'))),(0,o.kt)(d.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val newTreeNode = new(TreeNode::class).by(treeNode) {\n    childNodes()[0].name = "Son"\n    childNodes()[0].childNodes()[0].name = "Grandson"\n}\n')))),(0,o.kt)("h3",{id:"add-setter-setchildnodes"},"Add setter ",(0,o.kt)("inlineCode",{parentName:"h3"},"setChildNodes")),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNodeDraft.java"',title:'"TreeNodeDraft.java"'},"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    @OldChain\n    TreeNodeDraft setChildNodes(List<TreeNode> childNodes);\n\n    ...omit other code...\n}\n"))),(0,o.kt)(d.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNodeDraft.kt"',title:'"TreeNodeDraft.kt"'},"@DslScope\npublic interface TreeNodeDraft : TreeNode, Draft {\n\n    // var, not val\n    overrie var childNodes: List<TreeNode>\n\n    ...omit other code...\n}\n")))),(0,o.kt)("p",null,"This setter allows the user to replace the entire collection."),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = TreeNodeDraft.$\n    .produce(draft -> {\n        draft.setChildNodes(\n            Arrays.asList(\n                TreeNodeDraft.$.produce(childDraft -> {\n                    childDraft.setName("Eldest son")\n                }),\n                TreeNodeDraft.$.produce(childDraft -> {\n                    childDraft.setName("Second son")\n                })\n            )\n        )\n    });\n'))),(0,o.kt)(d.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by {\n    childNodes = listOf(\n        new(TreeNode::class).by {\n            name = "Eldest son"\n        },\n        new(TreeNode::class).by {\n            name = "Second son"\n        }\n    )\n}\n')))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"It's slightly cumbersome, ",(0,o.kt)("inlineCode",{parentName:"p"},"addIntoChildNodes")," that will be introduced below is recommanded")),(0,o.kt)("h3",{id:"add-addintochildnodes"},"Add ",(0,o.kt)("inlineCode",{parentName:"h3"},"addIntoChildNodes")),(0,o.kt)("p",null,"In the above example, we replaced the entire collection with ",(0,o.kt)("inlineCode",{parentName:"p"},"setChildNodes"),", but there is another way to add collection elements one by one instead of replacing the entire collection at once."),(0,o.kt)("p",null,"The generated source code is"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNodeDraft.java"',title:'"TreeNodeDraft.java"'},"public interface TreeNodeDraft extends TreeNode, Draft {\n\n    @OldChain\n    TreeNodeDraft addIntoChildNodes(\n        DraftConsumer<TreeNodeDraft> block\n    );\n\n    @OldChain\n    TreeNodeDraft addIntoChildNodes(\n        TreeNode base, \n        DraftConsumer<TreeNodeDraft> block\n    );\n\n    ...omit other code...\n}\n"))),(0,o.kt)(d.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNodeDraft.java"',title:'"TreeNodeDraft.java"'},"@DslScope\npublic interface TreeNodeDraft : TreeNode, Draft {\n\n    public fun childNodes(): MutableList<TreeNodeDraft>\n\n    ...omit other code...\n}\n\n// highlight-next-line\npublic fun MutableList<TreeNodeDraft>.addBy(\n    base: TreeNode? = null,\n    block: TreeNodeDraft.() -> Unit\n): MutableList<TreeNodeDraft> {\n    ...omit...\n    return this;\n}\n")))),(0,o.kt)("p",null,"You can use it like this"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = TreeNodeDraft.$\n    .produce(draft -> {\n        draft\n            .addIntoChildNodes(childDraft ->\n                childDraft.setName("Eldest son");\n            )\n            .addIntoChildNodes(childDraft ->\n                childDraft.setName("Second son");\n            )\n    });\n'))),(0,o.kt)(d.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by {\n    childNodes().addBy {\n        name = "Eldest son"\n    }\n    childNodes().addBy {\n        name = "Second son"\n    }\n}\n')))))}f.isMDXComponent=!0}}]);