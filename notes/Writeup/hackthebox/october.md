# October

IP: `10.10.10.16`

## Port 80

- Runs vanilla CMS
- `/backend` login password of `admin` / `admin`
- We have code execution inside media tab where we can upload `php5` files
- Upload a shell from the media tab and change the extension to `php5` with burp
- Now navigate to `http://10.10.10.16/storage/app/media/php-reverse-shell.php5` and we have a reverse shell on our listener

Get user.txt: `29161ca87aa3d34929dc46efc40c89c0`

## Priv esc

Spawn a TTY shell:

```sh
python -c 'import pty; pty.spawn("/bin/sh")'
```

- Running linux 4.4.0-78-generic (2017)
- Interesting file called `/usr/local/bin/ovrflw`
  - Seems like this file will have to be exploited via buffer overflow

## Buffer overflow

- Putting in `112` A's will trigger a crash on the `overflw` program

- Using EDB, we can find out information to use EIP to our advantage

Generate a pattern to find the offset for EIP using

```sh
msf-pattern_create -l 1000
```

offset at `112`.

