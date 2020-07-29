---
title: OSCP Attempt 1
description: I really wish I could say I passed
image: /images/blog/oscp_image.png
date: 2020-07-19
author: Omar Tsai
---

## OSCP Attempt \# 1

![OSCP image](/images/blog/oscp_image.png)

Here are my thoughts and experiences after taking the OSCP exam for the first time.

### Preperation

Going into the exam, I only did around 20 machines - just enough to get the 5 bonus points for finishing the course excercises and lab report. Asides from the lab machines, I also used hack the box (doing TJnull's list [here](https://pbs.twimg.com/media/ECG-gPnW4AMs32A.jpg:largeS)) and going through virtual hacking lab machines ([list](https://github.com/J3rryBl4nks/VirtualHackingLabs) here).

### Exam booking

I booked my exam for 8:00 am on saturday through the OSCP console. I suggest anyone reading to book your exam at least a month ahead because weekends will most likely be fully booked leaving only weekdays open. I learned this the hard way nad had to constantly check daily for a closer slot to when my labs ended.

### Exam start

Proctoring starts 15 minutes before the exam. The proctoring steps involve logging in, setting up a chrome extension doing an ID check, and  turning the webcam 360 degrees around to let the proctor assess my surroundings. Once this was complete, I just had to wait until 8:00am sharp to get an email about the exam.

### 8:00 - 10:00

The first machine I did was the BOF. It was straight forward except I forgot a few bad characters which eventually took me an extra hour to finish.

### 10:00 - 10:30

The second machine was the 10 pointer. I found the exploit and finished this within 10 minutes.

### 10:30 - 16:00

This was mostly spent around trying to crack one of the 20 point machines, which I could never get a shell but had read access as user account.

### 16:00 - 18:00

Got a reverse shell on the other 20 point machine, so far only 45 points. Trying to figure out privilege escalation.

### 18:00 - 22:00

Can't figure out privilege escalation. Feeling lost. Trying the 25 pointer machine got me nowhere either.

### 22:00 - 02:00

Found something interesting on the 25 pointer but still can't get an initial foothold. I call it a night and go to sleep.

### 06:00 - 08:00

I wake up to try and push one last time. I got nothing in. I called it a day and messaged my proctor to end my exam 10 minute early. I disconnected off the VPN and cleared my mind of everything.

### Finish

I only ended up with 45 points. Not even close enough to pass. Honestly a bit through the exam on one of the 20 point machines, I seriously felt that it was an impossible machine. I enumerated all the ports and left no stones unturned yet still couldn't get a shell. I went into the exam confidently yet left the exam confused.

### Lessons learned

- Enumerate more
- Learn more about privilege escalation
- Learn more about networking
- Take more breaks

### Future

For the next exam, I will try to book it at night. This way once I finish the buffer overflow machine and the 10 pointer, I can sleep and feel refreshed to tackle the rest of the machines.
