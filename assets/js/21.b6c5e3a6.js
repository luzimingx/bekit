(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{357:function(t,e,a){"use strict";a.r(e);var n=a(34),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"notice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notice"}},[t._v("#")]),t._v(" notice")]),t._v(" "),a("p",[t._v("提供业务中常见的通知，包含 toast、messageBox、alert、confirm、prompt，因为 bekit 是无 UI 的，所以在某个项目中引入 bekit 后需要写相应的样式，参见 "),a("a",{attrs:{href:"https://github.com/luzimingx/bekit/blob/master/examples/src/example.less",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例"),a("OutboundLink")],1),t._v("。这种设计是为了解决 Element UI 等组件库中的样式无法满足业务需求这种场景。")]),t._v(" "),a("h2",{attrs:{id:"toast"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#toast"}},[t._v("#")]),t._v(" toast")]),t._v(" "),a("h4",{attrs:{id:"bekit-notice-toast-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bekit-notice-toast-options"}},[t._v("#")]),t._v(" bekit.notice.toast(options)")]),t._v(" "),a("ul",[a("li",[t._v("参数：\n"),a("ul",[a("li",[t._v("{String | Object} options")])])])]),t._v(" "),a("h5",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" options")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("是否必填")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("message")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("''")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("支持 info、warning、success、error")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("info")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("iconClass")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("内容前面的 icon 的类名")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("bicon")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("duration")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("内容展示时间")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2500")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("timeWait")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("内容在展示结束后，清空 DOM 的延迟时间")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("200")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])])])]),t._v(" "),a("h5",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("bekit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("notice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbekit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("notice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    duration"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"messagebox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#messagebox"}},[t._v("#")]),t._v(" messageBox")]),t._v(" "),a("h4",{attrs:{id:"bekit-notice-messagebox-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bekit-notice-messagebox-options"}},[t._v("#")]),t._v(" bekit.notice.messageBox(options)")]),t._v(" "),a("ul",[a("li",[t._v("参数：\n"),a("ul",[a("li",[t._v("{Object} options")])])]),t._v(" "),a("li",[t._v("返回值：{Promise}")])]),t._v(" "),a("h5",{attrs:{id:"options-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-2"}},[t._v("#")]),t._v(" options")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("是否必填")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("title")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("标题")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("''")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("message")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("''")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("showCancelButton")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否展示取消按钮")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("cancelButtonText")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("取消按钮的内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'取消'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("confirmButtonText")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("确定按钮的内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'确定'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("cancelButtonClass")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("取消按钮的类名")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'b-btn b-btn-cancel'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("confirmButtonClass")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("确定按钮的类名")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'b-btn b-btn-confirm'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("showInput")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否展示输入框")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("inputPattern")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("RegExp")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("输入框的校验正则")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("inputErrorMessage")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("输入框的错误提示")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("''")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])])])]),t._v(" "),a("h5",{attrs:{id:"示例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("bekit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("notice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("messageBox")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    confirmButtonText"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我知道了'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"alert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alert"}},[t._v("#")]),t._v(" alert")]),t._v(" "),a("h4",{attrs:{id:"bekit-notice-alert-message-title-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bekit-notice-alert-message-title-options"}},[t._v("#")]),t._v(" bekit.notice.alert(message[, title, options])")]),t._v(" "),a("ul",[a("li",[t._v("参数：\n"),a("ul",[a("li",[t._v("{String} message")]),t._v(" "),a("li",[t._v("{String} [title]")]),t._v(" "),a("li",[t._v("{Object} [options]")])])]),t._v(" "),a("li",[t._v("返回值：{Promise}")]),t._v(" "),a("li",[t._v("详细：模拟原生的 alert")])]),t._v(" "),a("h5",{attrs:{id:"options-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-3"}},[t._v("#")]),t._v(" options")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("是否必填")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("confirmButtonText")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("确定按钮的内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'确定'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("confirmButtonClass")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("确定按钮的类名")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'b-btn b-btn-confirm'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])])])]),t._v(" "),a("h5",{attrs:{id:"示例-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-3"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("bekit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("notice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"confirm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#confirm"}},[t._v("#")]),t._v(" confirm")]),t._v(" "),a("h4",{attrs:{id:"bekit-notice-confirm-message-title-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bekit-notice-confirm-message-title-options"}},[t._v("#")]),t._v(" bekit.notice.confirm(message[, title, options])")]),t._v(" "),a("ul",[a("li",[t._v("参数：\n"),a("ul",[a("li",[t._v("{String} message")]),t._v(" "),a("li",[t._v("{String} [title]")]),t._v(" "),a("li",[t._v("{Object} [options]")])])]),t._v(" "),a("li",[t._v("返回值：{Promise}")]),t._v(" "),a("li",[t._v("详细：模拟原生的 confirm")])]),t._v(" "),a("h5",{attrs:{id:"options-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-4"}},[t._v("#")]),t._v(" options")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("是否必填")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("cancelButtonText")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("取消按钮的内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'取消'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("confirmButtonText")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("确定按钮的内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'确定'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("cancelButtonClass")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("取消按钮的类名")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'b-btn b-btn-cancel'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("confirmButtonClass")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("取消按钮的类名")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'b-btn b-btn-confirm'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])])])]),t._v(" "),a("h5",{attrs:{id:"示例-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-4"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("bekit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("notice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("confirm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cofirm here")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cancel here")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"prompt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prompt"}},[t._v("#")]),t._v(" prompt")]),t._v(" "),a("h4",{attrs:{id:"bekit-notice-prompt-message-title-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bekit-notice-prompt-message-title-options"}},[t._v("#")]),t._v(" bekit.notice.prompt(message[, title, options])")]),t._v(" "),a("ul",[a("li",[t._v("参数：\n"),a("ul",[a("li",[t._v("{String} message")]),t._v(" "),a("li",[t._v("{String} [title]")]),t._v(" "),a("li",[t._v("{Object} [options]")])])]),t._v(" "),a("li",[t._v("返回值：{Promise}")]),t._v(" "),a("li",[t._v("详细：模拟原生的 prompt")])]),t._v(" "),a("h5",{attrs:{id:"options-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-5"}},[t._v("#")]),t._v(" options")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("是否必填")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("cancelButtonText")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("取消按钮的内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'取消'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("confirmButtonText")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("确定按钮的内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'确定'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("cancelButtonClass")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("取消按钮的类名")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'b-btn b-btn-cancel'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("confirmButtonClass")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("确定按钮的类名")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("'b-btn b-btn-confirm'")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("inputPattern")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("RegExp")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("输入框的校验正则")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("inputErrorMessage")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("输入框的错误提示")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("''")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])])])]),t._v(" "),a("h5",{attrs:{id:"示例-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-5"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("bekit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("notice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("prompt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    inputPattern"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/abc/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    inputErrorMessage"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'格式错误'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cofirm here")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cancel here")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},[],!1,null,null,null);e.default=s.exports}}]);