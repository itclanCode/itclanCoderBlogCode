(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1044:function(s,n,a){s.exports=a.p+"assets/img/JSX02.9d694e4f.jpg"},1045:function(s,n,a){s.exports=a.p+"assets/img/JSX03.78e7a991.jpg"},1046:function(s,n,a){s.exports=a.p+"assets/img/jsx04.861e9d67.gif"},1708:function(s,n,a){"use strict";a.r(n);var e=a(11),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"深入浅出-jsx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深入浅出-jsx"}},[s._v("#")]),s._v(" 深入浅出 JSX")]),s._v(" "),e("h2",{attrs:{id:"快速导航"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[s._v("#")]),s._v(" 快速导航")]),s._v(" "),e("TOC"),s._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("p",[s._v("在 Jq,原生 javascript 时期,在写页面时,往往强调的是内容结构,层叠样式,行为动作要分离,三者之间分工明确,不要耦合在一起")]),s._v(" "),e("p",[s._v("然而在 React 出现后,一切皆 js,对于在 JS 里面写 HTML 代码,刚开始是非常反感的,甚至有违背当初的原则")]),s._v(" "),e("p",[s._v("但是,对于原先那种仅仅是把三种语言技术放在了三种不同文件位置里进行分开管理了,实际上,它并没有实现逻辑上的分离")]),s._v(" "),e("p",[s._v("既然前端 UI 显示就是 HTML,CSS,javascript,那么把实现一个功能的所有代码放在一个文件里管理,也是一种宏观上代码的封装,模块化处理.")]),s._v(" "),e("p",[s._v("使用 JSX 并不是倒退,它只是一个语法糖而已,虽然在 React 中,不强制要求使用 JSX,但是官方却推荐使用.")]),s._v(" "),e("p",[s._v("因为在 javascript 代码中将 JSX 和 UI 放在一起在视觉上有辅助作用,另外,它还可以使 React 显示跟过有用的错误和警告信息")]),s._v(" "),e("p",[s._v("下面就一起来学习下 JSX 吧,当你习惯它之后呢,并不会嗤之以鼻,反而会引以为爱的!")]),s._v(" "),e("h2",{attrs:{id:"jsx-是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsx-是什么"}},[s._v("#")]),s._v(" JSX 是什么?")]),s._v(" "),e("p",[e("strong",[s._v("全称")]),s._v(": javascript and XML")]),s._v(" "),e("p",[e("strong",[s._v("定义")]),s._v(": 可拓展(自定义)标记性语言,基于 javascript,融入了 XML,我们可以在 js 中书写 xml,使用 JSX 可以很好的描述 UI 在页面中应该呈现它应有的交互形式")]),s._v(" "),e("p",[s._v("类似下面的这种,非官方提供的普通标签,而是自己定义具有一定含义的特殊标签")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<person>\n  <name></name>\n  <age></age>\n  <height></height>\n  <weight></weight>\n</person>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("其实,你可把这些自定义的标签,称为组件,页面中的某一部分,具有独立的功能和逻辑. 实现组件化的好处,不言而喻,下面来看看 React 的 JSX 是怎么样的")]),s._v(" "),e("p",[s._v("当你用"),e("code",[s._v("create-react-app")]),s._v("脚手架,初始化一个 react 应用后,在入口文件 index.js 中最后一行代码,"),e("code",[s._v("ReactDOM.render()")]),s._v("函数调用的第一个实参数的写法"),e("code",[s._v("<App />")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("import React from 'react'; // 引入react.js库,并用import关键字定义实例化了一个React对象\nimport ReactDOM from 'react-dom'; // 引入react-dom.js,同上,实例化了ReactDOM对象\n\nReactDOM.render(<App />, document.getElementById('root')) // 将App组件通过ReactDOM.render()函数,挂载到root根节点上,插入到页面中去\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("为了更好的理解,你可以在"),e("code",[s._v("index.js")]),s._v("中,将代码更改成如下")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('const element = <App />;\nconst container = documnent.getElementById("root");\n\nReactDOM.render(element, container);\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("其中"),e("code",[s._v("ReactDOM")]),s._v("是"),e("code",[s._v("react-dom")]),s._v("的一个实例对象,它是用来将虚拟 dom 转换为真实 DOM 的,ReactDOM 实例化对象下的一个 render 方法")]),s._v(" "),e("p",[s._v("接收两个实际参数,第一个实参数,是要渲染的组件,第二个实参数,是该组件的挂载点,将该组件渲染到什么位置上,上面是渲染到根节点 root 上")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ReactDOM.render(要渲染的组件, 组件要挂载的位置);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("其中类似这种 JSX")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// 等价于\nvar element = React.createElement(\'h1\',{title:"h1标签"}, "hello， itclanCoder" );\n// React.createElement() 会预先执行一些检查，以帮助你创建了这么一个对象,但是在实际中不要这么写,它是会报错的\nvar element = {\n   type: \'h1\',\n   props: {\n   title: "h1标签",\n   children: "hello,itclanCoder"\n  }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("这些对象被称为 “React 元素”。它们描述了你希望在屏幕上看到的内容。React 通过读取这些对象,然后使用它们来构建 DOM 以及保持随时更新")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("React")]),s._v("中并没有模板语言(类似 Vue 的 template 的),但是它具有 JavaScript 的全部的功能")]),s._v(" "),e("li",[s._v("可以在"),e("code",[s._v("JS")]),s._v("中书写"),e("code",[s._v("XML(HTML)")]),s._v("只能有且仅有一个顶层元素 ,当然也可以借助"),e("code",[s._v("React")]),s._v("提供的"),e("code",[s._v("Fragment")]),s._v("(也叫占位符)这个内置组件将你写的 JSX 子元素给包裹起来,可以包含子节点 ,也支持插值表达式 {表达式}")]),s._v(" "),e("li",[s._v("为了便于阅读,"),e("code",[s._v("return")]),s._v("返回的"),e("code",[s._v("jsx")]),s._v("内容,用一个圆括号()包裹起来,这样可以将 JSX 拆分为多行。这样做不是强制要求的，但是这可以避免遇到自动插入分号陷阱")])])]),s._v(" "),e("p",[s._v("如下代码所示:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('import React from "react";\nimport ReactDOM from "react-dom";\n\n\nclass Acomponent extends React.Component {\n    render() {\n// return 后面带着一个圆括号,只是为了换行显示,根节点最顶层只能是一个元素\n      return (\n       <div>\n         <h1 title="我是川川">一个靠前排的90后帅小伙</h1>\n         <h2>欢迎关注微信itclanCoder公众号</h2>\n       </div>\n       )\n     }\n}\n\n// 或者使用React提供的Fragement占位符组件也可以,但是先引入\nimport React, { Componnet, Fragment } from "react";\nimport ReactDOM from "react-dom";\n\nclass Acomponent extends Component {\n  render() {\n    return (\n     <Fragment>\n        <h1 title="我是川川">一个靠前排的90后帅小伙</h1>\n        <h2>欢迎关注微信itclanCoder公众号</h2>\n     </Fragment>\n    )\n   }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br")])]),e("p",[s._v("下面来具体来看看 JSX 是如何使用的")]),s._v(" "),e("h2",{attrs:{id:"jsx-的具体使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsx-的具体使用"}},[s._v("#")]),s._v(" JSX 的具体使用")]),s._v(" "),e("ul",[e("li",[s._v("在"),e("code",[s._v("JSX")]),s._v("中嵌入表达式{ 表达式 }")])]),s._v(" "),e("p",[s._v("双大括号内可以是变量,字符串,数组,函数调用, 但是不可以是对象,也不支持 if,for 语句")]),s._v(" "),e("p",[s._v("例如:你在插值表达式里写对象:它是会报错的")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{ {name: "川川", age: "一个靠前排的90后帅小伙"} }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("错误如下所示")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Objects are not valid as a React child (found: object with keys {name, age}). If you meant to render a collection of children, use an array instead\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("该错误的意思是:对象无效作为 React 子对象（找到：具有键{name，age}的对象）。如果您要渲染子集合，请使用数组")]),s._v(" "),e("p",[s._v('当然如果是数组的话,它会自动的给拼接起来,本质上是通过数组中的 join("")方法处理后的结果')]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{ ["川川", "全宇宙最帅"]} //川川全宇宙最帅\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("当然对于在 JSX 里面写 if,for 语句也是会报错的")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<li>\n {\n   if(this.isBtn) { <Button />\n }\n</li>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("其实,"),e("code",[s._v("JSX")]),s._v("也是一个表达式,"),e("strong",[s._v("它虽然不支持 if,for 语句,但是它在"),e("code",[s._v("if")]),s._v("，"),e("code",[s._v("fo")]),s._v("r 循环的代码块中是可以使用 JSX 的,将 JSX 赋值给变量,把 JSX 当作参数传入,以及从函数中返回 JSX")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function getMessage(user) {\n  if (user) {\n    return <h1>Hello, { formatName(user) }!</h1>;\n  }\n  return <h1>Hello, itClanCoder.</h1>;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),e("p",[s._v("布尔类型、"),e("code",[s._v("Null")]),s._v(" 以及 "),e("code",[s._v("Undefined")]),s._v("将会被忽略,"),e("code",[s._v("false")]),s._v(", "),e("code",[s._v("null")]),s._v(", "),e("code",[s._v("undefined")]),s._v(", "),e("code",[s._v("true")]),s._v("是合法的子元素。但它们并不会被渲染。以下的 JSX 表达式渲染结果都是相同的")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<div />\n\n<div></div>\n\n<div>{ false }</div>\n\n<div>{ null }</div>\n\n<div>{ undefined }</div>\n\n<div>{ true }</div>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[e("strong",[s._v("具体作用")]),s._v(": 这有助于在特定条件来渲染其他的 "),e("code",[s._v("React")]),s._v(" 元素。例如，在以下"),e("code",[s._v("JSX")]),s._v(" 中，仅当"),e("code",[s._v("isBtn")]),s._v(" 为 "),e("code",[s._v("true")]),s._v("时，才会渲染"),e("code",[s._v("<Button />")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<div>\n  { isBtn && <Button /> }\n  <Content />\n</div>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("有一点需要注意的是:有一些 false 值,例如:数字 0,仍然会被 React 渲染,例如:如下所示")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<div>\n{\n  this.aBtns.length &&\n  <Button content="我是按钮" />\n}\n</div>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("要解决这个问题，确保 && 之前的表达式总是布尔值,就可以了")]),s._v(" "),e("p",[s._v("反之，如果你想渲染 "),e("code",[s._v("false")]),s._v("、"),e("code",[s._v("true")]),s._v("、"),e("code",[s._v("null")]),s._v("、"),e("code",[s._v("undefined")]),s._v("等值，你需要先将它们转换为字符串：")]),s._v(" "),e("p",[s._v("转换字符串有如下三种方法")]),s._v(" "),e("ul",[e("li",[s._v("对象.toString(),注意此方法,针对数据类型是 null 对象,及 undefined,不适用")]),s._v(" "),e("li",[s._v("用空字符串拼接:variable+'';此方法比较普遍,但是可读性有些差")]),s._v(" "),e("li",[s._v("用 String(variable):用 String 字符串对象方法进行转化,推荐使用")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<div>\n  <p>对象.toString(){ myVariable.toString() }</p>\n  <p>用空字符串拼接{ myVariable + '' }</p>\n  <p>用String(variable){ String(myVariable) }</p>\n</div>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("当然,插值表达式中变量也可以用 Es6 中的反引号")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("hello, { `${String(false)}` } // false\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("介绍了那么多,依然还是不够的,下面来看看 JSX 的原理,理解了这个,你将会知道一个 JSX 究竟是怎么工作,以及怎么渲染到页面上去的")]),s._v(" "),e("h2",{attrs:{id:"jsx-原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsx-原理"}},[s._v("#")]),s._v(" JSX 原理")]),s._v(" "),e("p",[s._v("页面中的 DOM 元素结构都可以用 javascript 对象来描述,包括的信息有,标签名,属性,子元素,事件对象")]),s._v(" "),e("p",[s._v("在 JS 里面,一切皆对象,对象的特点就是,含有属性或者方法,,其实任何东西,都可以用对象去描述")]),s._v(" "),e("p",[s._v("例如:如下的 JSX 结构")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<div class="input-wrap">\n  <input\n     type="text"\n     autocomplete="off"\n     value=""\n     id="mq"\n     class="input"\n     title="请输入搜索文字" />\n  <button>搜索</button>\n</div>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("假如用对象来描述一下上面的信息")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{\n  tagName: \'div\',\n  attribute: { className: \'input-wrap\'},\n  children: [\n   {\n     tagName: \'input\',\n     attribute: {\n       type: "text",\n       autocomplete:"off",\n       value:"",\n       id:"mq",\n       class:"input",\n       title:"请输入搜索文字"\n      }\n  },\n  {\n   tagName: "button",\n   attribute: null,\n   children: \'搜索\'\n  }\n]\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("p",[s._v("当直接把这个"),e("code",[s._v("HTML")]),s._v("段代码写在"),e("code",[s._v("React")]),s._v("中,它背后其实是通过"),e("code",[s._v("React.createElement()")]),s._v("方法进行创建的,创建类似这样的")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("{\n  type: 'div',\n  props: {className: 'input-wrap' },\n  children: [\n   {\n     type: 'input',\n     props: {\n         type:'text',\n         autocomplete:\"off\",\n         value:\"\",id:\"mq\",\n         class:\"input\",\n         title:\"请输入搜索文字\"\n     },\n     {\n        type: 'button',\n        props: null,\n        children: '搜索'\n     }\n  ]\n\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("p",[s._v("你可以联想一下原生"),e("code",[s._v("javascript")]),s._v("的"),e("code",[s._v("document.createElement()")]),s._v("与"),e("code",[s._v("JQ")]),s._v("中的"),e("code",[s._v('$("")')]),s._v("创建一个 js 对象与 jQ 对象的,而在 React 中,React 就是一个实例化对象,更深层次探讨的话,React 也是基于原型对象构建出来的")]),s._v(" "),e("p",[s._v("尽管 React 与前两者不同,但是笔者仍然觉得有类似,异曲同工之妙,例如 React 下面的 createElement 方法,仍然与原生 document 文档对象下面的创建元素方法相同")]),s._v(" "),e("p",[s._v("如果原生 javascript 扎实的话,便不难理解 React 在这做了一层转化")]),s._v(" "),e("p",[s._v("既然 js 对象描述的 UI(DOM)信息与 HTML 所展示的结构信息是一样的,那为什么不用 Js 对象来代替呢,因为用对象字面量写的方式太繁琐了,又臭又长的,结构又不清晰,如果用 HTML 来展示 UI 信息,那么就简单多了")]),s._v(" "),e("p",[e("code",[s._v("React.js")]),s._v(" 就把 js 语法扩展了一下，让 Js 语言能够支持这种直接在 Js 代码里面编写类似 HTML 标签结构的语法，这样写起来就方便很多了。编译的过程会把类似 HTML 的 JSX 结构转换成 JavaScript 的对象结构")]),s._v(" "),e("p",[s._v("上面的代码:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('import React from \'react\'\nimport ReactDOM from \'react-dom\'\n\nclass Search extends React.Component {\nrender () {\n  return (\n   <div class="input-wrap">\n     <input\n        type="text"\n        autocomplete="off"\n        value=""\n        id="mq"\n        class="input"\n        title="请输入搜索文字" />\n     <button>搜索</button>\n   </div>\n  )\n }\n}\n\nReactDOM.render(\n<Search />,\ndocument.getElementById(\'root\')\n)\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("p",[s._v("经过 babel 编译，Babel 会把 JSX 转译成一个名为 "),e("code",[s._v("React.createElement()")]),s._v(" 函数调用")]),s._v(" "),e("p",[s._v("如下所示")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('import React from \'react\'\nimport ReactDOM from \'react-dom\'\n\nclass Search extends React.Component {\n   render () {\n     return (\n       React.createElement(\n        "div",\n        {className: \'input-wrap\'},\n       React.createElement(\n         "input",\n         { type:\'text\',\n           autocomplete:"off",\n           value:"",\n           id:"mq",\n           class:"input",\n           title:"请输入搜索文字"\n         }\n     ),\n     React.createElement(\n       \'button\',\n       null,\n       "搜索"\n      )\n\n    )\n  )\n }\n}\n\nReactDOM.render(\nReact.createElement(Search, null),\ndocument.getElementById(\'root\')\n);\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br")])]),e("p",[s._v("换言之,如果你自定义的一个组件:例如:"),e("code",[s._v('<ElButton bgColor="green">绿色按钮</ElButton>')])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("import React from 'react';\nimport ReactDOM from 'react-dom'\n\n\nclass ElButton extends React.Component {\n    constructor(props){\n      super(props);\n    }\n   render() {\n     return (\n       <button\n          style={ {color: this.props.bgColor} }>{ this.props.children }</button>\n      )\n}\n}\n\n\nReactDOM.render(<ElButton bgColor=\"green\">绿色按钮</ElButton>, document.getElementById('root'));\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("p",[s._v("经过 Babel 的转化后")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('React.createElement(\n  ElButton,\n  { bgColor: green},\n  children: "绿色按钮"\n)\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("最终渲染到浏览器上,结果如下所示")]),s._v(" "),e("div",{attrs:{align:"center"}},[e("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:a(1044),alt:"JSX"}})]),s._v("\n在编译之后,`JSX` 表达式会被转为普通` JavaScript `函数调用，并且对其取值后得到 `JavaScript` 对象\n"),e("p",[e("code",[s._v("React.createELmenet")]),s._v("会构建一个 js 对象来描述你的 HTML 结构信息,包括标签名,属性,子元素以及事件对象等")]),s._v(" "),e("p",[e("strong",[s._v("使用 React 一定要引入 React 库,引入这个是为了解析识别 JSX 语法糖("),e("code",[s._v("React.createElement()")]),s._v("函数的替代)")])]),s._v(" "),e("p",[s._v("当然另一方面也是为了"),e("strong",[s._v("创建虚拟 DOM(所谓虚拟 DOM,它就是一个 JS 对象,是用它来描述真实的 DOM,上面的例子,已经很明白了)")])]),s._v(" "),e("p",[s._v("而"),e("strong",[s._v("引入"),e("code",[s._v("react-dom")]),s._v("的原因就是,为了将虚拟 DOM 转换为真实 DOM")]),s._v(",然后把这个 DOM 元素插入到页面中,这正是 ReactDOM.render()做的事情,把组件渲染并且构造 DOM 树，然后插入到页面上某个特定的元素上")]),s._v(" "),e("p",[s._v("所以在你编写一个组件的时候,一开始就要引入 react.js 和 react-dom 这两个文件的")]),s._v(" "),e("p",[s._v("当使用 JSX 到最终展现页面结构到浏览器上:经历了如下过程:如果你在代码中进行断言一下,就非常清晰这一过程了")]),s._v(" "),e("div",{attrs:{align:"center"}},[e("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:a(1045),alt:"JSX"}}),s._v(" "),e("img",{staticClass:"medium-zoom lazy",attrs:{loading:"lazy",src:a(1046),alt:"JSX"}})]),s._v("\n所以归纳一下:**JSX其实就是javascript对象,是用来描述UI结构信息的,JSX语法并不是真实的DOM**, 使用JSX是为了方便开发人员写代码更简单，简洁\n"),e("p",[s._v("当然实际开发中,我们并不会去用 React.createElement()去创建元素,不是说它不能完成需求,只是因为它写起来比较鸡肋,代码维护起来非常麻烦,可读性差")]),s._v(" "),e("p",[e("strong",[s._v("相比于写 JS,写 HTML 还是比较容易吧,但也是不简单的哦,因为写 JS 比较烧脑，容易掉头发呀,HTML 本身是不具备逻辑可言的")])]),s._v(" "),e("p",[s._v("然而,到手的人民币的高低,更多的是取决于你的 JS 水平...,这个的确是滴,JS 水平高,真的是可以直接喊高价的")]),s._v(" "),e("p",[e("strong",[s._v("小结")])]),s._v(" "),e("ul",[e("li",[e("code",[s._v("JSX")]),s._v("是 "),e("code",[s._v("JavaScript")]),s._v("语言的一种语法扩展，长得像 HTML，但并不是 HTML,附加了原生 HTML 标签不具备的能力,例如:自定义属性,以及后续的组件传值")]),s._v(" "),e("li",[e("code",[s._v("UI")]),s._v("界面显示什么样,取决于 JSX 对象结构,换句话说,取决于"),e("code",[s._v("render()")]),s._v("函数里面的 return 关键字后面返回的 JSX 结构")]),s._v(" "),e("li",[s._v("引入"),e("code",[s._v("React.js")]),s._v("库是为了解析识别 JSX 语法,同时创建虚拟 DOM,而引入"),e("code",[s._v("react-dom")]),s._v("是为了渲染组件,将组件挂载到特定的位置上,同时将虚拟 DOM 转换为真实 DOM,插入到页面中")])]),s._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),e("p",[s._v("本文主要讲述了"),e("code",[s._v("JSX")]),s._v("是什么?以及 JSX 的一些注意事项,JSX 的具体使用,嵌入表达式,最重要的是 JSX 的原理,在使用 JSX 中,react 是如何将 jsx 语法糖装换为真实 DOM,并渲染到页面中的,当然,JSX 仍然还有一些注意事项,边边角角的知识的,限于篇幅,贪多嚼不烂,我们下次再继续了")]),s._v(" "),e("footer-FooterLink",{attrs:{isShareLink:!0,isDaShang:!0}}),s._v(" "),e("footer-FeedBack")],1)}),[],!1,null,null,null);n.default=t.exports}}]);