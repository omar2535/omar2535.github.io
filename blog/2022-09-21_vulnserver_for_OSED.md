---
title: 'Vulnserver for OSED'
description: Setting up vulnserver for OSED practice
image: /images/blog/osed_x_vulnserver.png
date: 2022-09-21
author: Omar Tsai
---

![OSED X Vulnserver](/images/blog/osed_x_vulnserver.png)

## Setting up vulnserver for OSED

For some background, I'm currently taking the OSED course. I started in June but my lab time ended in August. I haven't taken my exam yet so I'd like to emulate what the lab machines looked like through setting up my own virtual machine with Vulnserver to practice. Below I will outline the steps I took to get my machine to simulate a lab environment.

### 1. Setting up my windows 10 VM

For this section, I used VMware and set up a simple windows 10 pro virtual machine. There are already many many guides online so I will skip this part.

### 2. Setting up WinDBG

For windbg, I'm going to download the one on microsoft's website instead of the preview edition as that's what the course teaches. You can find the link below for those who struggled to find it (like I did haha).

[WinSDK](https://developer.microsoft.com/en-us/windows/downloads/windows-sdk/) (comes with winDBG)

### 3. Setting up IDA Free

Only the free version of IDA is allowed on the exam, so that is what I download:

[IDA Free](https://hex-rays.com/ida-free/#download)

### 4. Process Monitor & Process hacker

Set up process monitor & Process Hacker

[Procmon](https://learn.microsoft.com/en-us/sysinternals/downloads/procmon)
[Process Hacker](https://sourceforge.net/projects/processhacker/)

### 5. Vulnserver

Install vulnserver from the git repo by using the "download as ZIP" option and extracting it to the desktop

[Vulnserver](https://github.com/stephenbradshaw/vulnserver.git)

### 6. Results

Finally, we get our server up and running on port 9999 of the machine! My installed apps will be shown below!

![Vulnserver machine desktop](/images/blog/vulnserver-machine-desktop.png)

And now time to do some practice!
