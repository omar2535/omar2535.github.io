# Format string bug basic 1 writeup

By reading the source code and the name of the challenge, we know that we need to exploit the printf function that takes in our argument passed to our program.

We need to know how printf even works first. 

After watching live overflow's video on printf and reading some of the comments in the video, I learned that everytime printf is called, it takes in values from the stack. And since in our case the printf didn't have any arguments appended to it, we have access to the entire stack.

I tried `./ch5 "%x %x %x" and behold, we printed out random addresses. I know that everytime I call %x, something is popped from the stack. So we just have to keep popping elements from the stack until we get to the flag.

After a while of digging around, I got the answer.
I have to print out 64 bits (32 for our buffer, 32 for buffer address).
Then reverse it due to little endianness.

Using the code:

```sh
./ch5 `python -c "print '%02x,'*20"`
```

and converting it to little endianness, we get our answer
