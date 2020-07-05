# Shocker

## Enum

- Port 80: Apache/2.4.18
- Port 2222: openssh 7.2p2 ubuntu 4ubuntu2.2 exploit

```sh
gobuster dir -u http://10.10.10.56/cgi-bin/ -w /usr/share/wordlists/dirb/common.txt -t 30 -x .php,.sh,.html
```

we find a `user.sh` file at `cgi-bin/user.sh`.

Now firing off the script found on [exploit-db] for apache shellshock and adding in the extra path, we get a shell for shelly.

user.txt: `2ec24e11320026d1e70ff3e16695b233`

## Privilege escalation


doing a quick `sudo -l` let's us see that we can run perl as sudo without password. So we can just simply run perl as sudo and raise privileges.

```sh
sudo perl -e 'exec "/bin/bash";'
```

root.txt: `52c2715605d70c7619030560dc1ca467`
