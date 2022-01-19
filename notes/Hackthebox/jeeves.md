# Jeeves

IP: `10.10.10.63`

## Enumeration

- Port 80: Microsoft IIS httpd 10.0
- Port 135: Microsoft RPC
- Port 334: Microsoft-ds
- Port 50000: Jetty 9.4.z-SNAPSHOT
  - Accessing gives 404 not found

### Port 80

- Served a ask jeeves prompt
- Entering anything inside will prompt a PNG to show up that seems like a stack trace but is actually an image called `jeeves.png`

#### Gobuster

```sh
gobuster dir -u http://10.10.10.63:80 --wordlist /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
```
