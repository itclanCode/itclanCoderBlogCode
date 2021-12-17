(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{1731:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"伪类与伪元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪类与伪元素"}},[s._v("#")]),s._v(" 伪类与伪元素")]),s._v(" "),a("h2",{attrs:{id:"快速导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[s._v("#")]),s._v(" 快速导航")]),s._v(" "),a("TOC"),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("对于做前端的小伙伴来说,都用过 css 的伪类与伪元素,但是很多时候,容易将他们混淆,一段时间没有接触,便会抛掷脑后,容易混淆")]),s._v(" "),a("p",[s._v("即使自己用过伪类,伪元素,但是未必就真清楚的")]),s._v(" "),a("h2",{attrs:{id:"为什么要引入伪类与伪元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要引入伪类与伪元素"}},[s._v("#")]),s._v(" 为什么要引入伪类与伪元素")]),s._v(" "),a("p",[s._v("在 css 中引入伪类和伪元素,是为了格式化文档树以外的信息,它并不是直接存在于 DOM 树当中的,它们是用来修饰不在文档树中的部分")]),s._v(" "),a("h2",{attrs:{id:"伪类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪类"}},[s._v("#")]),s._v(" 伪类")]),s._v(" "),a("p",[s._v("用于在已有 DOM 元素处于某个状态时,为该元素添加额外的样式,这个状态是根据用户行为而动态变化的")]),s._v(" "),a("p",[s._v("比如:当用户鼠标悬停在指定元素时,可以通过"),a("code",[s._v(":hover")]),s._v("来描述这个元素的状态,当用户访问一个元素过后时,可以用"),a("code",[s._v("visited")]),s._v(",当时一个活跃状态时,可以用"),a("code",[s._v(":active")]),s._v(",当"),a("code",[s._v("input")]),s._v("表单聚焦表单时,可以用"),a("code",[s._v(":focus")])]),s._v(" "),a("p",[s._v("它和普通的 css 类相似,可以为已有的元素添加样式,但是它只有处于 "),a("code",[s._v("dom")]),s._v(" 树无法描述的状态下才能为元素添加样式,所以将它称为伪类")]),s._v(" "),a("p",[a("strong",[s._v("形式上")]),s._v(":伪类用单冒号")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("点击即可查看常见伪类")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("link "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("向未被访问的链接添加样式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("visited "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("向已被访问的链接添加样式。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("hover "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("当鼠标悬浮在元素上方时，向元素添加样式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("active "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("向被激活的元素添加样式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("focus "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("向拥有键盘输入焦点的元素添加样式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("not")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("排除某个元素之外")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("first-child "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("选择元素的第一个子元素")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("last-child  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("选择元素的最后一个子元素")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("nth-child")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("nth-last-child "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("从后面计数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("only-child "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("只满足一个子元素")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("target "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("当URL带有锚名称，指向文档内某个具体的元素时，")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("target匹配该元素。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("checked "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("被选中的input元素")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("empty "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("匹配没有子元素的元素")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("valid 匹配条件验证正确的表单元素\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])]),s._v(" "),a("h2",{attrs:{id:"伪元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪元素"}},[s._v("#")]),s._v(" 伪元素")]),s._v(" "),a("p",[s._v("用于创建一些不在文档树中的元素,并为其添加样式。")]),s._v(" "),a("p",[s._v("换言之,‘伪元素’，就是本身不存在的页面元素，HTML 代码里并没有这样的元素，但在页面显示时，你却能看到这些本来不存在的元素发挥着作用")]),s._v(" "),a("p",[s._v("比如说，我们可以通过"),a("code",[s._v(":before")]),s._v(","),a("code",[s._v(":after")]),s._v(" 来在一个元素前或后增加一些文本,并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中")]),s._v(" "),a("p",[a("strong",[s._v("形式上")]),s._v(":伪元素前面是两个冒号，"),a("code",[s._v("E::first-line 伪元素")]),s._v("。会创造出不存在的新元素")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("css3")]),s._v("中 已经明确规定了伪类用单冒号，伪元素双冒号的规则,虽然都用单冒号,也不会报错,两者能实现一致,主要在于区分两者")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("点击即可查看伪元素")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("before/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("before "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("在被选元素前插入内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("after/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("after 在被选元素后插入内容，其用法和特性与`"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("before`"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("相似。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("first-letter/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("first-letter "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("匹配元素中文本的首字母。被修饰的首字母不在文档树中")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("first-line/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("first-line "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("匹配元素中第一行的文本。这个伪元素只能用在块元素中，不能用在内联元素中。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("selection 匹配用户被用户选中或者处于高亮状态的部分。在火狐浏览器使用时需要添加`-moz`"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("前缀。该伪元素只支持双冒号的形式。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("placeholder 匹配占位符的文本，只有元素设置了`placeholder`属性时，该伪元素才能生效"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("具体实例可见 [表单输入框聚焦效果]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("./example-input-focus-animate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])]),s._v(" "),a("ul",[a("li",[s._v("对于伪元素 "),a("code",[s._v(":before")]),s._v(" 和 "),a("code",[s._v(":after")]),s._v("而言，属性 "),a("code",[s._v("content")]),s._v("是必须设置的，这个属性的值可以为字符串，也可以有其它形式，比如指向一张图片的 URL:")])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'img/icon.png'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("配合伪类使用")])]),s._v(" "),a("p",[s._v("伪元素 "),a("code",[s._v(":before")]),s._v(" 还可以配合伪类使用，这里举经常与 "),a("code",[s._v(":before")]),s._v(" 配合使用的伪类 "),a("code",[s._v(":hover")]),s._v(" 为例")]),s._v(" "),a("p",[s._v("具体实例可见"),a("a",{attrs:{href:"./example-hover-underline-sides"}},[s._v("css 实现鼠标经过元素下划线由左向右或由中间向两侧展开")])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".before:hover:before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'在before之前插入内容'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n<div class="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"before"')]),s._v("> me</div>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("配合取值函数 "),a("code",[s._v("attr()")]),s._v(" 使用")])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("a::before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("attr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n<a href="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://coder.itclan.cn/"')]),s._v(" title="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"itclanCoder"')]),s._v("></a>\n\n效果\n<a href="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://coder.itclan.cn/"')]),s._v(" title="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"itclanCoder"')]),s._v(">itclanCoder</a>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"伪类与伪元素的具体区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪类与伪元素的具体区别"}},[s._v("#")]),s._v(" 伪类与伪元素的具体区别")]),s._v(" "),a("p",[s._v("在上面主要是罗列了一些硬知识点,仍然是比较难以理解的,下面用具体的代码示例来学习下的")]),s._v(" "),a("p",[s._v("下面是一个简单的 "),a("code",[s._v("html")]),s._v(" 列表片段")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("我是第一个li"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("我是第二个li"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("如果想要给第一项添加样式，可以在为第一个"),a("code",[s._v("<li>")]),s._v("内联上添加一个类，并在该类中定义对应样式,如下所示")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("<ul>\n  <li class="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first-li"')]),s._v(">我是第一个li</li>\n  <li>我是第二个li</li>\n</ul>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("那么对应的 css")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".first-li")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #abcdef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("有时候,如果不想添加类的方法,我们可以通过给设置第一个"),a("code",[s._v("<li>")]),s._v(" 的"),a("code",[s._v(":first-child")]),s._v("伪类来为其添加样式")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("我是第一个li"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("我是第二个li"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("对应的 CSS")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("li:first-child")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #abcdef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("上面两种方法,想要改变一个元素样式,一种方式是直接在元素身上添加"),a("code",[s._v("class")]),s._v(",另一个就是通过添加伪类选择器的方式进行实现")]),s._v(" "),a("p",[s._v("比如下面这段"),a("code",[s._v("html")]),s._v("代码")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Hello World, itclanCoder"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果想要给该段落的第一个字母添加样式,可以在第一个字母中包裹一个"),a("code",[s._v("<span>")]),s._v(" 元素，并设置该 "),a("code",[s._v("span")]),s._v("元素的样式")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("first-word"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("H"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("ello World, itclanCoder"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("对应的 css 代码")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".first-word")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 30px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如果不创建一个"),a("code",[s._v("<span>")]),s._v(" 元素，我们可以通过设置"),a("code",[s._v("<p>")]),s._v("的"),a("code",[s._v(":first-letter伪元素")]),s._v("来为其添加样式。这个时候，看起来好像是创建了一个虚拟的"),a("code",[s._v("<span>")]),s._v("元素并添加了样式，但实际上文档树中并不存在这个"),a("code",[s._v("<span>")]),s._v(" 元素")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Hello World, itclanCoder"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("对应的 CSS")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("p:first-letter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 30px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("通过上面的代码,可知,伪类往往表示一些元素的动态状态,常见的比如,鼠标经过元素"),a("code",[s._v("hover")]),s._v(","),a("code",[s._v("active")]),s._v(","),a("code",[s._v("visited")]),s._v(","),a("code",[s._v("link")]),s._v("等")]),s._v(" "),a("p",[s._v("而伪元素可以理解为代表了某个元素的子元素,这个子元素虽然在逻辑上存在,但是却不存在于文档树中,它是通过 css 方式添加进去实现的")]),s._v(" "),a("p",[s._v("换而言之,伪类的操作对象是文档树中已有的元素，而伪元素则创建了一个文档数外的元素。因此，"),a("strong",[s._v("伪类与伪元素的区别在于：有没有创建一个文档树之外的元素")]),s._v(",没有创建那么就是伪类,有创建那么就是伪元素")])],1)}),[],!1,null,null,null);t.default=e.exports}}]);