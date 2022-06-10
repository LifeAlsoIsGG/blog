(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{785:function(a,t,s){a.exports=s.p+"assets/img/springboot_error_1-1.79460399.png"},786:function(a,t,s){a.exports=s.p+"assets/img/springboot_error_1-2.08f9649c.png"},923:function(a,t,s){"use strict";s.r(t);var e=s(1),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"springboot相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#springboot相关"}},[a._v("#")]),a._v(" SpringBoot相关")]),a._v(" "),e("h3",{attrs:{id:"解决springboot无法注入service的原因之一testcontroller-required-a-bean-of-type-com-yifeng-study-service-userservice-that-could-not-be-found-报错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决springboot无法注入service的原因之一testcontroller-required-a-bean-of-type-com-yifeng-study-service-userservice-that-could-not-be-found-报错"}},[a._v("#")]),a._v(" 解决SpringBoot无法注入service的原因之一TestController required a bean of type ‘com.yifeng.study.service.UserService’ that could not be found.报错")]),a._v(" "),e("p",[a._v("参考")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("Tips")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/xzxToney/article/details/105248704?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1.control",target:"_blank",rel:"noopener noreferrer"}},[a._v("参考"),e("OutboundLink")],1)])]),a._v(" "),e("h4",{attrs:{id:"原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[a._v("#")]),a._v(" 原因")]),a._v(" "),e("p",[a._v("如果此时service上已经加了注解"),e("code",[a._v("@Service")]),a._v("或者没有其他基本问题，那么可能是"),e("strong",[a._v("主启动类与被扫描的文件夹不在同一路径")]),a._v("下，所以扫描不到。")]),a._v(" "),e("p",[e("img",{attrs:{src:s(785),alt:"",loading:"lazy"}})]),a._v(" "),e("h4",{attrs:{id:"解决办法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[a._v("#")]),a._v(" 解决办法")]),a._v(" "),e("p",[a._v("将启动器类放在与扫描包同级即可，一般是和controller包的上一层的包的同一级。例如")]),a._v(" "),e("blockquote",[e("p",[a._v("我在这里多了一层web,将主启动类放入study文件夹下，和web同级即可。")])]),a._v(" "),e("p",[e("img",{attrs:{src:s(786),alt:"",loading:"lazy"}})]),a._v(" "),e("h3",{attrs:{id:"将枚举类型输出时转换为json类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将枚举类型输出时转换为json类型"}},[a._v("#")]),a._v(" 将枚举类型输出时转换为JSON类型")]),a._v(" "),e("p",[a._v("加上注解")]),a._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@JsonFormat")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("shape "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JsonFormat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Shape")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("OBJECT"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"security的key最短四个字符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#security的key最短四个字符"}},[a._v("#")]),a._v(" security的key最短四个字符")]),a._v(" "),e("p",[a._v("报错")]),a._v(" "),e("p",[a._v("secret key byte array cannot be null or empty.")]),a._v(" "),e("h3",{attrs:{id:"不自动注入datasource而启动springboot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不自动注入datasource而启动springboot"}},[a._v("#")]),a._v(" 不自动注入dataSource而启动Springboot")]),a._v(" "),e("p",[a._v("参考："),e("a",{attrs:{href:"https://blog.csdn.net/qq_25811101/article/details/109410072",target:"_blank",rel:"noopener noreferrer"}},[a._v("@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)不生效"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("方案一：在启动方法添加exclude")]),a._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@SpringBootApplication")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("exclude "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DataSourceAutoConfiguration")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DataSourceTransactionManagerAutoConfiguration")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DruidDataSourceAutoConfigure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HibernateJpaAutoConfiguration")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("方案二：在yml文件中配置")]),a._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spring")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("application")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" order\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("autoconfigure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("exclude")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h2",{attrs:{id:"gradle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gradle"}},[a._v("#")]),a._v(" Gradle")]),a._v(" "),e("h3",{attrs:{id:"no-cached-version-of-com-android-tools-build-gradle-3-6-2-available-for-offline-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#no-cached-version-of-com-android-tools-build-gradle-3-6-2-available-for-offline-mode"}},[a._v("#")]),a._v(" No cached version of com.android.tools.build:gradle:3.6.2 available for offline mode")]),a._v(" "),e("p",[a._v("参考："),e("a",{attrs:{href:"https://www.cnblogs.com/flay/p/12641381.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("No cached version of com.android.tools.build:gradle:3.6.2 available for offlin 解决办法"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("在IDEA中点击右边Gradle设为非无线模式")]),a._v(" "),e("h2",{attrs:{id:"mybatisplus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mybatisplus"}},[a._v("#")]),a._v(" MybatisPlus")]),a._v(" "),e("h3",{attrs:{id:"myabtisplus执行方法异常-cause-java-lang-indexoutofboundsexception-index-22-size-22"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#myabtisplus执行方法异常-cause-java-lang-indexoutofboundsexception-index-22-size-22"}},[a._v("#")]),a._v(" myabtisplus执行方法异常 Cause: java.lang.IndexOutOfBoundsException: Index: 22, Size: 22")]),a._v(" "),e("p",[a._v("调用自带方法  selectById()")]),a._v(" "),e("h3",{attrs:{id:"the-error-occurred-while-handling-results"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-error-occurred-while-handling-results"}},[a._v("#")]),a._v(" The error occurred while handling results")]),a._v(" "),e("h3",{attrs:{id:"cause-java-lang-indexoutofboundsexception-index-22-size-22"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cause-java-lang-indexoutofboundsexception-index-22-size-22"}},[a._v("#")]),a._v(" Cause: java.lang.IndexOutOfBoundsException: Index: 22, Size: 22")]),a._v(" "),e("p",[a._v("解决办法\n方法一：去除@Builder注解。")]),a._v(" "),e("p",[a._v("方法二：增加构造函数，如Lombok提供的@NoArgsConstructor、@AllArgsConstructor。")])])}),[],!1,null,null,null);t.default=r.exports}}]);