(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{438:function(t,e,a){"use strict";a.r(e);var s=a(13),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"writeup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writeup"}},[t._v("#")]),t._v(" Writeup")]),t._v(" "),e("p",[t._v("Initially I tried to overflow as much as possible and seeing which string the check finally became from my input.\nTrying things like abcdefg all the way to Z t o find out at which character does it start overflowing to the check.")]),t._v(" "),e("p",[t._v("Then I knew that I had to input my stdin as a piped input, since it's hard to just type ASCII strings into my terminal. So I used the command")]),t._v(" "),e("p",[t._v("All that's finally left is to keep the shell open before it is closed by the program. We keep it open by running the command for "),e("code",[t._v("cat")]),t._v(" afterwards with a "),e("code",[t._v("-")]),t._v(" which interpreted as stdin")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("python "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'print("a"*40 + "\\xef\\xbe\\xad\\xde")\'')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" -"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" ./ch13\n")])])]),e("p",[t._v("and we get the password!")])])}),[],!1,null,null,null);e.default=n.exports}}]);