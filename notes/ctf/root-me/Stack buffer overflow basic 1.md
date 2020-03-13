# Writeup

Initially I tried to overflow as much as possible and seeing which string the check finally became from my input.
Trying things like abcdefg all the way to Z t o find out at which character does it start overflowing to the check. 

Then I knew that I had to input my stdin as a piped input, since it's hard to just type ASCII strings into my terminal. So I used the command

All that's finally left is to keep the shell open before it is closed by the program. We keep it open by running the command for `cat` afterwards with a `-` which interpreted as stdin

```sh
# or
(python -c 'print("a"*40 + "\xef\xbe\xad\xde")'; cat -) | ./ch13
```

and we get the password!
