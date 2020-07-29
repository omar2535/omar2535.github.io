---
title: VScode markdown pdf in WSL1
description: How do I convert markdown to pdf in vscode WSL
image: /images/blog/vscode_markdown_pdf.PNG
date: 2020-07-29
author: Omar Tsai
---

## Introduction

![vscode image](/images/blog/vscode_markdown_pdf.PNG)

Today I was really struggling to convert my pentesting writeups to PDF. For a little context, my notes are kept in a vscode workspace fully written in markdown. Each machine has their own markdown file and images are imply imported into the markdown file by path inclusion. The main reason I chose to do this was because I was already familiar with markdown and I liked having easy files to commit to github which I use as my main source of backup.

## Context

I tried to export all of my markdown files into a single pdf with [pandoc](https://pandoc.org/) but it didn't help as all of my code blocks ended looking up like this:

![code_block_overflow](/images/blog/code_block_overflow.PNG)

After digging through stack overflow and stack exchange ansewers, it seemed like there weren't really any good answers to mitigate this. I also disliked the formatting that pandoc output by default, so I decided to stick with the vscode pdf generator.

## Problem

Now the problem came when I tried to export my PDF file in WSL1. My WSL is running Ubuntu 20.02 and using the markdown PDF generator, it always gave me errors either with shared libraries or chrome not being available in Ubuntu. It however *did* work fine in Windows VScode - just not WSL vscode.

## Solution

The solution is to simply install all of the missing libraries and required dependencies.

The following commands below is what worked for me; however, your mileage may vary. Also be warned that I'm not sure if all of these commands are necessary; this is just what worked for me and it may be different for you. If you do find any commands that weren't necessary please feel free to let me know and I'll gladly update my post.

```sh
sudo apt-get update
npm install puppeteer -g
sudo apt-get install chromium-browser

# Have to do this because of some issue with WSL1: https://github.com/microsoft/WSL/issues/4898
wget https://launchpad.net/\~rafaeldtinoco/+archive/ubuntu/lp1871129/+files/libc6_2.31-0ubuntu8+lp1871129\~1_amd64.deb

sudo dpkg --install libc6_2.31-0ubuntu8+lp1871129~1_amd64.deb
sudo apt-mark hold libc6
sudo apt --fix-broken install
sudo apt full-upgrade

# install chrome
wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
wget https://dl.google.com/linux/direct/google-chrome-beta_current_amd64.deb
sudo dpkg -i google-chrome-beta_current_amd64.deb
sudo apt -f install
sudo dpkg -i google-chrome-beta_current_amd64.deb

# install libraries
sudo apt-get install gconf-service libasound2 libatk1.0-0 libc6 \ libcairo2 \
libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 \
libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 \
libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 \
libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 \
libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation \
libappindicator1 libnss3 lsb-release xdg-utils wget x11vnc x11-xkb-utils \
xfonts-100dpi xfonts-75dpi xfonts-scalable xfonts-cyrillic x11-apps xvfb
```
