---
title: 'What is Internet and how it works'
date: '08-03-2021'
---

Internet is an inter-connected network of computers. They connect with each other to transfer information, typically through wire like cables or wireless like wifi.

However, people don't just plug cables from one computer to another because it's so costly. So they use an already exist infrastructure which is the telephone line. And the thing used to connect computers to telephone line is called modem. Modem will translate digital information to analog. And finally the modem is connected to the internet provider, those internet providers will be the one who communicate directly with each other to deliver information from computer to computer. All of those networks create what we call internet.

## Web browser is built on top of the internet.

Through those networks, computers communicate with each other using their address (called IP, a chain of numbers) and each website hosted on web server has its own IP address. However, to human beings it's difficult to remember those numbers so they create domain name which is the sugar coating on IP.

And whenever we type a domain name like google.com to web browser, DNS or domain name system will lookup IP according to the domain name and direct us to the computer that hosts that website.

## What happens when you type a website name into browser search bar?

For example when you type github.com into the browser search bar.

First, browser will use DNS like the phonebook to find the IP address of github.com
  But it will have to search which web server is hosting github.com

Next, browser will start reaching out to top-level domain like .org, .net, until it finds .com and from that make several queries to find the exact web server.
  When found, it will open TCP connection to send HTTP request to find the website and display it to the screen.

Finally, browser has a rendering engine for displaying the content and an HTML parsing algorithm for parsing the resources. First it take HTML pages and generate the DOM tree. Then it will parse the assets (images, JS, CSS) to each node. When everything has been loaded to the browser window, the connection will be closed.  
  
