(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{286:function(s,t,a){s.exports=a.p+"assets/img/The_six_design_principles.4d906d2e.jpg"},287:function(s,t,a){s.exports=a.p+"assets/img/OpenClosedPrincipleDemo.8101c6d6.jpg"},288:function(s,t,a){s.exports=a.p+"assets/img/OpenClosedPrincipleDemo_2.0aa2abd1.jpg"},865:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("参考")]),s._v(" "),n("ul",[n("li",[s._v("https://www.runoob.com/design-pattern/design-pattern-intro.html")]),s._v(" "),n("li",[s._v("http://c.biancheng.net/view/1317.html")]),s._v(" "),n("li",[n("a",{attrs:{href:"TheZen0fDesignPattern_2.pdf"}},[s._v("设计模式之禅")])]),s._v(" "),n("li",[n("a",{attrs:{href:"https://so.csdn.net/so/search/blog?q=%E5%85%AD%E5%A4%A7%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99&t=blog&p=1&s=0&tm=0&lv=-1&ft=0&l=&u=hfreeman2008",target:"_blank",rel:"noopener noreferrer"}},[s._v("六大设计原则"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://www.bilibili.com/video/BV1G4411c7N4",target:"_blank",rel:"noopener noreferrer"}},[s._v("尚硅谷"),n("OutboundLink")],1)])])]),s._v(" "),n("p",[n("img",{attrs:{src:a(286),alt:"六大设计原则"}})]),s._v(" "),n("h2",{attrs:{id:"_1-开闭原则-open-closed-principle-ocp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-开闭原则-open-closed-principle-ocp"}},[s._v("#")]),s._v(" 1. 开闭原则(Open Closed Principle,OCP)")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("参考")]),s._v(" "),n("ul",[n("li",[s._v("http://c.biancheng.net/view/1322.html")]),s._v(" "),n("li",[n("a",{attrs:{href:"https://blog.csdn.net/hfreeman2008/article/details/52344022?ops_request_misc=%25257B%252522request%25255Fid%252522%25253A%252522160853876616780261982313%252522%25252C%252522scm%252522%25253A%25252220140713.130102334.pc%25255Fblog.%252522%25257D&request_id=160853876616780261982313&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_v2~rank_v29-4-52344022.pc_v2_rank_blog_default&utm_term=%E5%85%AD%E5%A4%A7%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99",target:"_blank",rel:"noopener noreferrer"}},[s._v("六大设计原则之开闭原则"),n("OutboundLink")],1)])])]),s._v(" "),n("h3",{attrs:{id:"_1-1-介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-介绍"}},[s._v("#")]),s._v(" 1.1 介绍")]),s._v(" "),n("p",[n("code",[s._v("开闭原则（Open Closed Principle，OCP）")]),s._v("由勃兰特·梅耶（Bertrand Meyer）提出，他在 1988 年的著作《面向对象软件构造》（Object Oriented Software Construction）中提出：")]),s._v(" "),n("div",{staticClass:"custom-block info"},[n("p",{staticClass:"custom-block-title"},[s._v("定义")]),s._v(" "),n("p",[s._v("Software entities should be open for extension，but closed for modification。")]),s._v(" "),n("p",[s._v("(一个软件实体如类，模块和函数应该对扩展开放，对修改关闭)")])]),s._v(" "),n("p",[s._v("开闭原则明确的告诉我们：软件实现应该对扩展开放，对修改关闭，其含义是说一个软件实体应该通过扩展来实现变化，而不是通过修改已有的代码来实现变化的。那什么是软件实体呢？这里的软件实体包括以下几个部分：")]),s._v(" "),n("div",{staticClass:"custom-block info"},[n("p",{staticClass:"custom-block-title"},[s._v("软件实体")]),s._v(" "),n("ol",[n("li",[s._v("项目中划分出的模块")]),s._v(" "),n("li",[s._v("类与接口")]),s._v(" "),n("li",[s._v("方法")])])]),s._v(" "),n("p",[s._v("开闭原则的含义是")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("开闭原则的含义")]),s._v(" "),n("p",[s._v("当应用的需求改变时，在不修改软件实体的源代码或者二进制代码的前提下，可以扩展模块的功能，使其满足新的需求。一个软件产品只要在生命周期内，都会发生变化，即然变化是一个事实，我们就应该在设计时尽量适应这些变化，以提高项目的稳定性和灵活性，真正实现“拥抱变化”。开闭原则告诉我们应尽量通过扩展软件实体的行为来实现变化，而不是通过修改现有代码来完成变化，它是为软件实体的未来事件而制定的对现行开发设计进行约束的一个原则。")])]),s._v(" "),n("h3",{attrs:{id:"_1-2-作用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-作用"}},[s._v("#")]),s._v(" 1.2 作用")]),s._v(" "),n("p",[s._v("开闭原则是面向对象程序设计的终极目标，它使软件实体拥有一定的适应性和灵活性的同时具备稳定性和延续性。具体来说，其作用如下。")]),s._v(" "),n("div",{staticClass:"custom-block info"},[n("p",{staticClass:"custom-block-title"},[s._v("作用")]),s._v(" "),n("ol",[n("li",[n("p",[n("strong",[s._v("对软件测试的影响")]),s._v("：")]),s._v(" "),n("p",[s._v("软件遵守开闭原则的话，软件测试时"),n("code",[s._v("只需要对扩展的代码进行测试")]),s._v("就可以了，因为原有的测试代码仍然能够正常运行。")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("可以提高代码的可复用性")]),s._v("：")]),s._v(" "),n("p",[s._v("粒度越小，被复用的可能性就越大；在面向对象的程序设计中，根据原子和抽象编程可以提高代码的可复用性。")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("可以提高软件的可维护性")]),s._v("：")]),s._v(" "),n("p",[s._v("遵守开闭原则的软件，其稳定性高和延续性强，从而易于扩展和维护。")])])])]),s._v(" "),n("h3",{attrs:{id:"_1-3-示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-示例"}},[s._v("#")]),s._v(" 1.3 示例")]),s._v(" "),n("p",[s._v("以书店销售书籍为例，其类图如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(287),alt:"开闭原则示例"}})]),s._v(" "),n("p",[s._v("书籍接口")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IBook")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getPrice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getAuthor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("小说类书籍：")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NovelBook")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IBook")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" price"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" author"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NovelBook")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" price"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" author"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("price "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" price"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("author "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" author"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getAutor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("author"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getPrice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("price"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("p",[s._v("Client类：")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Client")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Strings")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IBook")]),s._v(" novel "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NovelBook")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"笑傲江湖"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"金庸"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"书籍名字："')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("novel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"书籍作者："')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("novel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getAuthor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"书籍价格："')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("novel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getPrice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("项目投产生，书籍正常销售，但是我们经常因为各种原因，要打折来销售书籍，这是一个变化，我们要如何应对这样一个需求变化呢？")]),s._v(" "),n("p",[s._v("我们有下面三种方法可以解决此问题：")]),s._v(" "),n("div",{staticClass:"custom-block info"},[n("p",{staticClass:"custom-block-title"},[s._v("解决方案")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("修改接口")]),s._v("\n在IBook接口中，增加一个方法getOffPrice(),专门用于进行打折处理，所有的实现类实现此方法。但是这样的一个修改方式，实现类NovelBook要修改，同时IBook接口应该是稳定且可靠，不应该经常发生改变，否则接口作为契约的作用就失去了。因此，此方案否定。")]),s._v(" "),n("li",[n("strong",[s._v("修改实现类")]),s._v("\n修改NovelBook类的方法，直接在getPrice()方法中实现打折处理。此方法是有问题的，例如我们如果getPrice()方法中只需要读取书籍的打折前的价格呢？这不是有问题吗？当然我们也可以再增加getOffPrice()方法，这也是可以实现其需求，但是这就有二个读取价格的方法，因此，该方案也不是一个最优方案。")]),s._v(" "),n("li",[n("strong",[s._v("通过扩展实现变化")]),s._v("\n我们可以增加一个子类OffNovelBook,覆写getPrice方法。此方法修改少，对现有的代码没有影响，风险少，是个好办法。")])])]),s._v(" "),n("p",[n("img",{attrs:{src:a(288),alt:"修改后的类图"}})]),s._v(" "),n("p",[s._v("打折类：")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("OffNovelBook")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NovelBook")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("OffNovelBook")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" price"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" author"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("price"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("author"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//覆写价格方法，当价格大于40，就打8析，其他价格就打9析")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getPrice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("price "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("price "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("price "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("     \n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h3",{attrs:{id:"_1-4-实现方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-实现方法"}},[s._v("#")]),s._v(" 1.4 实现方法")]),s._v(" "),n("p",[s._v("第一："),n("strong",[s._v("抽象约束")]),s._v("\n抽象是对一组事物的通用描述，没有具体的实现，也就表示它可以有非常多的可能性，可以跟随需求的变化而变化。因此，通过接口或抽象类可以约束一组可能变化的行为，并且能够实现对扩展开放，其包含三层含义：")]),s._v(" "),n("ul",[n("li",[s._v("通过接口或抽象类约束扩散，对扩展进行边界限定，不允许出现在接口或抽象类中不存在的public方法。")]),s._v(" "),n("li",[s._v("参数类型，引用对象尽量使用接口或抽象类，而不是实现类，这主要是实现里氏替换原则的一个要求")]),s._v(" "),n("li",[s._v("抽象层尽量保持稳定，一旦确定就不要修改")])]),s._v(" "),n("p",[s._v("第二："),n("strong",[s._v("元数据(metadata)控件模块行为")]),s._v("\n编程是一个很苦很累的活，那怎么才能减轻压力呢？答案是尽量使用元数据来控制程序的行为，减少重复开发。什么是元数据？用来描述环境和数据的数据，通俗的说就是配置参数，参数可以从文件中获得，也可以从数据库中获得。")]),s._v(" "),n("p",[s._v("第三："),n("strong",[s._v("制定项目章程")]),s._v("\n在一个团队中，建立项目章程是非常重要的，因为章程是所有人员都必须遵守的约定，对项目来说，约定优于配置。这比通过接口或抽象类进行约束效率更高，而扩展性一点也没有减少。")]),s._v(" "),n("p",[s._v("第四："),n("strong",[s._v("封装变化")]),s._v("\n对变化封装包含两层含义：\n(1)将相同的变化封装到一个接口或抽象类中\n(2)将不同的变化封装到不同的接口或抽象类中，不应该有两个不同的变化出现在同一个接口或抽象类中。\n封装变化，也就是受保护的变化，找出预计有变化或不稳定的点，我们为这些变化点创建稳定的接口。")]),s._v(" "),n("h2",{attrs:{id:"_2-依赖倒置原则-dependency-inversion-principle-dip"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-依赖倒置原则-dependency-inversion-principle-dip"}},[s._v("#")]),s._v(" 2 依赖倒置原则(Dependency Inversion Principle,DIP)")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("参考")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/hfreeman2008/article/details/52289571?ops_request_misc=%25257B%252522request%25255Fid%252522%25253A%252522160853876616780261982313%252522%25252C%252522scm%252522%25253A%25252220140713.130102334.pc%25255Fblog.%252522%25257D&request_id=160853876616780261982313&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_v2~rank_v29-2-52289571.pc_v2_rank_blog_default&utm_term=%E5%85%AD%E5%A4%A7%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99",target:"_blank",rel:"noopener noreferrer"}},[s._v("六大设计原则之依赖倒置原则"),n("OutboundLink")],1)])]),s._v(" "),n("h3",{attrs:{id:"_2-1-介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-介绍"}},[s._v("#")]),s._v(" 2.1 介绍")]),s._v(" "),n("p",[s._v("依赖倒置原则(Dependence Inversion Principle ,DIP)定义如下：")]),s._v(" "),n("div",{staticClass:"custom-block info"},[n("p",{staticClass:"custom-block-title"},[s._v("定义")]),s._v(" "),n("p",[n("strong",[s._v("High level modules should not depend upon low level modules,Both should depend upon abstractions.Abstractions should not depend upon details.Details should depend upon abstracts.")])])]),s._v(" "),n("p",[s._v("翻译过来为：")]),s._v(" "),n("div",{staticClass:"custom-block info"},[n("p",{staticClass:"custom-block-title"},[s._v("相关信息")]),s._v(" "),n("ul",[n("li",[s._v("高层模块不应该依赖低层模块，两者都应该依赖抽象")]),s._v(" "),n("li",[s._v("抽象不应该依赖细节")]),s._v(" "),n("li",[s._v("细节应该依赖抽象")])])]),s._v(" "),n("p",[n("strong",[s._v("也可以说高层模块，低层模块，细节都应该依赖抽象")])]),s._v(" "),n("div",{staticClass:"custom-block info"},[n("p",{staticClass:"custom-block-title"},[s._v("相关信息")]),s._v(" "),n("p",[s._v("每一个逻辑的实现都是由颗粒原子逻辑组成的，颗粒原子逻辑就是低层模块，而颗粒原子逻辑组成的模块就是高层模块。在java语言中，抽象就是接口或抽象类，两都都是不能直接被实例化的，细节就是实现类，实现接口或继承抽象类而产生的类就是细节，两者都可以直接被实例化。")])]),s._v(" "),n("p",[s._v("依赖倒置原则在java语言中，表现是：")]),s._v(" "),n("div",{staticClass:"custom-block info"},[n("p",{staticClass:"custom-block-title"},[s._v("相关信息")]),s._v(" "),n("ul",[n("li",[s._v("模块间的依赖通过抽象发生，实现类之间不发生直接的依赖关系，其依赖关系是通过接口或抽象类产生的。")]),s._v(" "),n("li",[s._v("接口或抽象类不依赖实现类")]),s._v(" "),n("li",[s._v("实现类依赖接口或抽象类")])])]),s._v(" "),n("p",[s._v("更加精简的定义就是“面向接口编程”—OOD(Object-Oriented Design，面向对象设计)的精髓之一。")]),s._v(" "),n("h3",{attrs:{id:"_2-2-好处"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-好处"}},[s._v("#")]),s._v(" 2.2 好处")]),s._v(" "),n("p",[s._v("采用依赖倒置原则可以减少类间的耦合性，提高系统的稳定，降低并行开发引起的风险，提高代码的可读性和可维护性。")]),s._v(" "),n("h2",{attrs:{id:"_3-迪米特原则-law-of-demeter-lod"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-迪米特原则-law-of-demeter-lod"}},[s._v("#")]),s._v(" 3. 迪米特原则(Law of Demeter,LoD)")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("参考")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/hfreeman2008/article/details/52335601?ops_request_misc=%25257B%252522request%25255Fid%252522%25253A%252522160862280716780257419145%252522%25252C%252522scm%252522%25253A%25252220140713.130102334.pc%25255Fblog.%252522%25257D&request_id=160862280716780257419145&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_v2~rank_v29-3-52335601.pc_v2_rank_blog_default&utm_term=%E5%85%AD%E5%A4%A7%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99",target:"_blank",rel:"noopener noreferrer"}},[s._v("六大设计原则之迪米特原则"),n("OutboundLink")],1)])]),s._v(" "),n("h3",{attrs:{id:"_3-1-介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-介绍"}},[s._v("#")]),s._v(" 3.1 介绍")]),s._v(" "),n("p",[s._v("迪米特原则(Law of Demeter,LoD)，也叫最少知识原则(Low knowledge Principle,LKP):")]),s._v(" "),n("p",[n("strong",[s._v("一个对象应该对其他对象有最少的了解。")])]),s._v(" "),n("p",[s._v("通俗的讲：一个类对自己需要耦合或调用的类知道的最少，你(被耦合或调用的类)的内部是如何复杂和我没有关系，我就知道你提供的public方法，我只调用这些方法，其它的我不关心。")]),s._v(" "),n("h2",{attrs:{id:"_4-里氏替换原则-liskov-substitution-principle-lsp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-里氏替换原则-liskov-substitution-principle-lsp"}},[s._v("#")]),s._v(" 4. 里氏替换原则(Liskov Substitution Principle,LSP)")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("参考")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/hfreeman2008/article/details/52344343?ops_request_misc=%25257B%252522request%25255Fid%252522%25253A%252522160862280716780257419145%252522%25252C%252522scm%252522%25253A%25252220140713.130102334.pc%25255Fblog.%252522%25257D&request_id=160862280716780257419145&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_v2~rank_v29-1-52344343.pc_v2_rank_blog_default&utm_term=%E5%85%AD%E5%A4%A7%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99",target:"_blank",rel:"noopener noreferrer"}},[s._v("六大设计原则之里氏替换原则"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"_5-单一职责原则-single-responsibility-principle-spr"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-单一职责原则-single-responsibility-principle-spr"}},[s._v("#")]),s._v(" 5. 单一职责原则(Single Responsibility Principle,SPR)")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("参考")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/hfreeman2008/article/details/52234287?ops_request_misc=%25257B%252522request%25255Fid%252522%25253A%252522160862280716780257419145%252522%25252C%252522scm%252522%25253A%25252220140713.130102334.pc%25255Fblog.%252522%25257D&request_id=160862280716780257419145&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_v2~rank_v29-6-52234287.pc_v2_rank_blog_default&utm_term=%E5%85%AD%E5%A4%A7%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99",target:"_blank",rel:"noopener noreferrer"}},[s._v("六大设计原则之单一职责原则"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"_6-接口隔离原则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-接口隔离原则"}},[s._v("#")]),s._v(" 6. 接口隔离原则")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("参考")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/hfreeman2008/article/details/52304172?ops_request_misc=%25257B%252522request%25255Fid%252522%25253A%252522160862280716780257419145%252522%25252C%252522scm%252522%25253A%25252220140713.130102334.pc%25255Fblog.%252522%25257D&request_id=160862280716780257419145&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_v2~rank_v29-5-52304172.pc_v2_rank_blog_default&utm_term=%E5%85%AD%E5%A4%A7%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%88%99",target:"_blank",rel:"noopener noreferrer"}},[s._v("六大设计原则之接口隔离原则"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);