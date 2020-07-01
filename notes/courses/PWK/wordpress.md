# Wordpress

## WPSCAN

### Enumerating a wordpress site

```sh
wpscan --url http://10.11.1.234/ --enumerate ap
```

### Brute force wordpress

```sh
wpscan --url http://10.11.1.234/  admin -P /usr/share/wordlists/rockyou.txt
```

