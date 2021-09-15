---
title: Passed OSCP!
description: I finally passed OSCP on my second attempt
image: /images/blog/oscp_image_2.png
date: 2020-08-30
author: Omar Tsai
---

## OSCP Attempt \# 2

![OSCP image](/images/blog/oscp_image_2.png)

For my second attempt, I scheduled it at 9:00pm at night. The reason I chose to start at night was because I knew I needed breaks in the middle and a good night's rest will help me reset my mental model.

## 9:00 pm

Exam starts, I use Autorecon on the 4 other machines while working on the buffer overflow

## 9:50pm

Buffer overflow finished. Some scans for machines were still going. I decide to take on one of the 20 pointers next.

## 11:30 pm

20 pointer finished. I realized that the other 20 pointer was the same machine as I had seen in my previous attempt and I already got low privileges on it before. So I decide to save it for last.

## 12:30am

Find interesting hints with 25 pointer but nowhere conrete. I decide to call it a night and go to sleep.

## 9am

Wake up and came back. Take a look again at the scans. Decide I want to get the free low user points for the 20 pointer machine I had seen from my first attempt. Finished the low user shell on the 20 pointer and moved on to the 10 pointer machine.

## 11 am

Found a way into the 10 pointer. Tried it out and it seems promising

## 12pm

10 pointer done. At this point I have 25 (bof) + 10 + 20 + 10 = 65 points. I also had done the labs and excercises for bonus points so I could pass with 70 points. However, I didn't want to take any chances, so I kept on going at 25 pointer.

## 3pm

Found more interesting things for 25 pointer. Still no shell.

## 6pm

I decide to start writing my exam report. I re-traced all my steps to make sure that I had all the screenshots I needed to create the report.

## 8:45pm

Exam finishes and I start writing my report.

## Report writing

I took another 12 hours to write the report and submitted at 1pm the following day.

## Result

My results came in 2 days after I submitted my report. I finally passed! That's it for my journey through the OSCP. It was definitely a fun ride and I learned a lot about pen-testing!
