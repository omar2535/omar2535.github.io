# Popcorn

IP: `10.10.10.6`

## Enum

- Port 22: OpenSSH 5.1p1 Debian
- Port 80: Default site running `PHP 5.2.10-2ubuntu6.10`

## Port 80

- We can create an account on torret hoster and upload a torrent
- We see that we can't upload any other files in the torrent upload part
- Now we can edit the file we uploaded by uploading a screenshot
- Upload a php file via the torrent edit screenshot mode

## Priv esc

Just use dirty cow /etc/passwd [method](https://www.exploit-db.com/exploits/40839)

- the creation will hang so just make a new shell and switch user `su firefart`
