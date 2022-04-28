# Practical ethical hacking

Notes on the Practical Ethical Hacking - The Complete Course by Heath Adams

## Networking

###  MAC addresss

Example: `08:00:27:1f:30:76`
- Layer 2, related to switching
- Switches connect over MAC addresses
- First 3 pairs identify the device

### TCP, UDP and the Three-way handshake

- **UDP**: No consistent connection like DNS or VoIP
- **TCP**: Consistent connection (HTTPS, FTP, SSH, ect.)
  - 3 way handshake
  - SYN (client) -> SYN ACK (server) -> ACK (client)

### Common ports

- **TCP**
  - FTP (21)
  - SSH (22)
  - Telnet (23)
  - SMTP (25)
  - DNS (53)
  - HTTP (80) / HTTPS (443)
  - POP3 (110)
  - SMB (139 + 445)
  - IMAP (143)
- **UDP**
  - DNS (53)
  - DHCP (67, 68)
  - TFTP (69)
  - SNMP (161)

### OSI Model

Layer 1 -> 7
1. **P** = Physical - data cables, CAT6
2. **D** = Data - Switching, MAC addresses
3. **N** = Network - IP addresses, routing
4. **T** = Transport - TCP/UDP
5. **S** = Session - session management
6. **P** = Presentation - WMV, JPEG, MOV
7. **A** = Application - HTTP, SMTP

Recieving data goes from layer 1 -> 7\
Transmitting data goes from layer 7 -> 1

### Subnetting

Subnetting is used to divide networks into smaller sub-networks

How many bits are switched off = how many hosts available\
IE. `255:255:255:0` => `8` bits switched **off** => $2^8 = 256$ hosts, the subnet is `/24` since there are `24` bits on or in other words, `8` bits off.

| CIDR | Subnet mask  | Hosts  |  
|---|:-:|---|---|---|
| \1  | 128:0:0:0  | $2^{31}$  |  
| \2  | 192:0:0:0 | $2^{32-2}$  |
| \10  | 255:192:0:0 | $2^{32-10}$  |
| \22  | 255:255:252:0 | $2^{32-22}$ | 
| \32 | 255:255:255:255  | $2^{32-32}$  | 

Usually, the `.0` is the network ID and the `.255` is the broadcast ID

Quick way to calculate the subnet from the **CIDR** is by seeing how many groups of 8 are missing from the **CIDR**. Then we can identify which parts of the subnet mask require calculations

#### Example 1

```
IP = 192.168.1.0/24
Subnet = 255.255.255.0
Hosts = 256 - 2 = 254
Network ID: 192.168.1.0
Broadcast ID: 192.168.1.255
```

#### Example 2

```
# Sub-Network 1
IP = 192.168.1.0/28
Subnet = 255.255.255.240
Hosts = 2^(4) - 2 = 16 - 2 = 14
Network ID: 192.168.1.0
Broadcast ID: 192.168.1.15

# Sub-Network 2
IP = 192.168.1.16/28
Subnet = 255.255.255.240
Hosts = 2^(4) - 2 = 16 - 2 = 14
Network ID: 192.168.1.16
Broadcast ID: 192.168.1.31
```

#### Example 3

```
# Sub-network 1
IP = 192.168.0.0/23
Subnet = 255.255.254.0
Hosts = 512 - 2 = 510
Network ID: 192.168.0.0
Broadcast ID: 192.168.1.255

# Sub-network 2
IP = 192.168.2.0/23
Subnet = 255.255.254.0
Hosts = 512 - 2 = 510
Network ID: 192.168.2.0
Broadcast ID: 192.168.3.255
```

#### Exercise 1

```
IP = 192.168.0.0/22
Subnet = 255.255.252.0
Hosts = 2^(32-22) = 2^(10) = 1024 -> 1024 - 2 = 1022
Network ID: 192.168.0.0
Broadcast ID: 192.168.3.255
```


#### Excercise 2

```
IP = 192.168.1.0/26
Subnet = 255.255.255.192
Hosts = 2^(32-26) = 2^(6) = 64 -> 64 - 2 = 62
Network ID: 192.168.1.0
Broadcast ID: 192.168.1.63
```

#### Excercise 3

```
IP = 192.168.1.0/27
Subnet = 255.255.224
Hosts = 2^(32 - 27) = 2^(5) = 32 -> 32 - 2 = 30
Network ID: 192.168.1.0
Broadcast ID: 192.168.31
```

## Exploitation Basics

### Reverse shell vs Bind shell

#### Reverse shell

Targets connects to our machine, we listen
- most common form of shell

#### Bind shell

Attacker opens a port on the target machine and connects into it
- Useful for bypassing firewalls or not having to port forward on local port

### Staged vs Non-staged payloads

#### Staged payloads

- Sends exploit shellcode in stages
- Less stable
- example: windows/meterpreter/reverse_tcp

#### Non-Staged payloads

- Sends exploit shellcode all at once
- Larger in size and won't always work
- example: windows/meterpreter_reverse_tcp
