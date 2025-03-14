(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{370:function(t,a,s){"use strict";s.r(a);var e=s(13),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/blog/vscode_markdown_pdf.PNG",alt:"vscode image"}})]),t._v(" "),a("p",[t._v("Today I was really struggling to convert my pentesting writeups to PDF. For a little context, my notes are kept in a vscode workspace fully written in markdown. Each machine has their own markdown file and images are simply imported into the markdown file by path inclusion. The main reason I chose to do this was because I was already familiar with markdown and I liked having easy files to commit to github which I use as my main source of backup.")]),t._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" Context")]),t._v(" "),a("p",[t._v("I tried to export all of my markdown files into a single pdf with "),a("a",{attrs:{href:"https://pandoc.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pandoc"),a("OutboundLink")],1),t._v(" but it didn't help as all of my code blocks ended looking up like this:")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/blog/code_block_overflow.PNG",alt:"code_block_overflow"}})]),t._v(" "),a("p",[t._v("After digging through stack overflow and stack exchange ansewers, it seemed like there weren't really any good answers to mitigate this. I also disliked the formatting that pandoc output by default, so I decided to stick with the vscode pdf generator.")]),t._v(" "),a("h2",{attrs:{id:"problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem"}},[t._v("#")]),t._v(" Problem")]),t._v(" "),a("p",[t._v("Now the problem came when I tried to export my PDF file in WSL1. My WSL is running Ubuntu 20.02 and using the markdown PDF generator, it always gave me errors either with shared libraries or chrome not being available in Ubuntu. It however "),a("em",[t._v("did")]),t._v(" work fine in Windows VScode - just not WSL vscode.")]),t._v(" "),a("h2",{attrs:{id:"solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[t._v("#")]),t._v(" Solution")]),t._v(" "),a("p",[t._v("The solution is to simply install all of the missing libraries and required dependencies.")]),t._v(" "),a("p",[t._v("The following commands below is what worked for me; however, your mileage may vary. Also be warned that I'm not sure if all of these commands are necessary; this is just what worked for me and it may be different for you. If you do find any commands that weren't necessary please feel free to let me know and I'll gladly update my post.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" puppeteer "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" chromium-browser\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Have to do this because of some issue with WSL1: https://github.com/microsoft/WSL/issues/4898")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://launchpad.net/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("~rafaeldtinoco/+archive/ubuntu/lp1871129/+files/libc6_2.31-0ubuntu8+lp1871129"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("~1_amd64.deb\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" dpkg "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--install")]),t._v(" libc6_2.31-0ubuntu8+lp1871129~1_amd64.deb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-mark hold libc6\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" --fix-broken "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" full-upgrade\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install chrome")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-q")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-O")]),t._v(" - https://dl.google.com/linux/linux_signing_key.pub "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://dl.google.com/linux/direct/google-chrome-beta_current_amd64.deb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" dpkg "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" google-chrome-beta_current_amd64.deb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" dpkg "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" google-chrome-beta_current_amd64.deb\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install libraries")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gconf-service libasound2 libatk1.0-0 libc6 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" libcairo2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nlibcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nlibgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nlibpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nlibxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nlibxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nlibappindicator1 libnss3 lsb-release xdg-utils "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" x11vnc x11-xkb-utils "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nxfonts-100dpi xfonts-75dpi xfonts-scalable xfonts-cyrillic x11-apps xvfb\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);