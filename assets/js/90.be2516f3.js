(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{431:function(a,e,s){"use strict";s.r(e);var t=s(13),r=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"shocker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shocker"}},[a._v("#")]),a._v(" Shocker")]),a._v(" "),e("h2",{attrs:{id:"enum"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enum"}},[a._v("#")]),a._v(" Enum")]),a._v(" "),e("ul",[e("li",[a._v("Port 80: Apache/2.4.18")]),a._v(" "),e("li",[a._v("Port 2222: openssh 7.2p2 ubuntu 4ubuntu2.2 exploit")])]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("gobuster "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("dir")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" http://10.10.10.56/cgi-bin/ "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-w")]),a._v(" /usr/share/wordlists/dirb/common.txt "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("30")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-x")]),a._v(" .php,.sh,.html\n")])])]),e("p",[a._v("we find a "),e("code",[a._v("user.sh")]),a._v(" file at "),e("code",[a._v("cgi-bin/user.sh")]),a._v(".")]),a._v(" "),e("p",[a._v("Now firing off the script found on [exploit-db] for apache shellshock and adding in the extra path, we get a shell for shelly.")]),a._v(" "),e("p",[a._v("user.txt: "),e("code",[a._v("2ec24e11320026d1e70ff3e16695b233")])]),a._v(" "),e("h2",{attrs:{id:"privilege-escalation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#privilege-escalation"}},[a._v("#")]),a._v(" Privilege escalation")]),a._v(" "),e("p",[a._v("doing a quick "),e("code",[a._v("sudo -l")]),a._v(" let's us see that we can run perl as sudo without password. So we can just simply run perl as sudo and raise privileges.")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" perl "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'exec \"/bin/bash\";'")]),a._v("\n")])])]),e("p",[a._v("root.txt: "),e("code",[a._v("52c2715605d70c7619030560dc1ca467")])])])}),[],!1,null,null,null);e.default=r.exports}}]);