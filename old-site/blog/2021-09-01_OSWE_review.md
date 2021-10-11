---
title: AWAE & OSWE, a review from a software developer
description: My review of the AWAE course
image: https://www.offensive-security.com/wp-content/uploads/2021/03/WEB-300-course-icon.svg
date: 2021-08-31
author: Omar Tsai
---

![AWAE Icon](https://www.offensive-security.com/wp-content/uploads/2021/03/WEB-300-course-icon.svg)

## AWAE

The Advanced Web Attacks and Exploitation (AWAE) course by Offensive Security is a course that focuses on primarily on white-box penetration testing. It is more akin to code-reviews that software developers frequently go through than a black-box reconnaissance that the OSCP was like.

The syllabus for the AWAE course sums up what is learned. However, I really felt like they should have dived into vulnerabilities using popular web frameworks such as Django, Rails, Angular, or even express.

## Studying for the OSWE

I signed up for 90 days of lab time. In hindsight, this was overkill. But given that when I attempted the OSCP which took over just shy of 5 months to get, I didn't want to take any chances.

My course material and lab started in the beginning of August. I studied around 5 hours a day and completed the majority of the PDF / videos by the 20th day. Since the course goes through finding and exploiting the lab machines, there were only a couple of extra lab machines which were not touched on in the course. By the time I attempted my exam, I finished all but one of the extra-miles and completed all of the excercises & lab machines.

## OSWE Exam Booking

I signed up for the OSWE realizing that I wanted to get it done before my classes resume in September. So I quickly booked my exam to start at 5pm on a Monday which gives me until Wednesday at 4:45pm to hack the two web applications. Surprisingly, there were no hiccups in booking the exam and there were many slots available. I have read experiences of other people who had to book 1 month in advance, but this was not the case for me.

## OSWE Exam

My exam began with the usual check in process to make sure the proctors can see my screens and my webcam. I go through the process and was emailed the exam connection at 5pm sharp.

### First machine

The first machine took me until midnight to figure out the path to get full remote code execution. It took me until the next day to get everything coded up in one exploit and gain remote code execution on the target machine. This machine in total took me around 7 hours (minus the sleeping at night).

### Second machine

The second machine was what really tripped me up. I staretd on this right after finishing machine #1, went through the source code many many times, reading every single line over 2-3 times, yet still couldn't find anything to exploit. While I was lying in bed at 3am, with my mind racing through everything I had seen when reading the source code, something perculiar jumped to me which kept me from sleeping. I quickly realize that it was the missing piece of the puzzle I needed to get an exploit working. So I jump out of bed, try the idea I came up with, and it worked! I go back to bed after verifying I have everything I needed to fully exploit the machine. After waking up, I quickly write the proof-of-concept script and fully finish the machine by 12pm. This machine took me the longest, at a full 24 hours without sleep. With a few hours left, I take screenshots, write up my report, and submit it.

## Conclusion

Was this certification worth the money? Probably if I went with the 30 day package instead of the 90 day one. Since I already had a lot of development experience doing code reviews and creating web-apps, it took me much less time to digest and understand the material. 

## My (opinionated) advice to anyone taking the OSWE exam

### I: Build a methodology

Have a methodolgy and stick to it. Here is what I had for mine:

1. Make sure to record all traffic through burp
2. Make sure you know where the log files are (if any)
3. Check all public web pages
4. Check all authenticated web pages
    1. Make note of authentication entpoints (login, password reset), admin areas, file upload, forms, restricted areas
5. Prioritise unauthenticated functinoalities, then authenticated ones like password reset and session management
6. Check for SQLInjection on publicly accessible endpoints or pages
7. Check for programming-language specific issues (ie. readObject in java, eval in javascript)

### II: Take breaks

Take breaks often. I cannot stress how often I came up with ideas during my break time than when I was in front of the computer staring at the screen.

### III: It's not over until it's over

To me during my second machine when I couldn't find any way in after a whole day of looking, I was demoralized. My mindset was that if I couldn't find anything in 24 hours, how would I be able to find anything in the next 24 hours. However, by the 26th hour, I found something that I accidentally overlooked! So don't give up.

### IV: Do everything in the PDFs

Do all the excercises and extra miles. Seriously.

### V: Treat the exam as a learning experience

The exam is also content the AWAE material covers! Why not make the most of the material by also learning during the exam! My mindset has been that you don't fail by failing the exam. You only fail when you give up.

## Till next time

Thank you so much for reading! I hope to learn much more in the cybersecurity space and hope to record this journey in my blog!
