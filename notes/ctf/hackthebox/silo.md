# Silo

IP: `10.10.10.82`

## Enumeration

### TCP

- Port 80: IIS 8.5 server, default landing page
- Port 1521: Oracle server (oracle-tns)
- Port 5985: wsman?
- Port 47001: winrm?
- Port 49161: Unknown
- Port 49160: Unknown

### UDP

- Port 68: dhcpc
- Port 69: tftp

### Oracle port 1521

```sh
odat all -s 10.10.10.82
```
