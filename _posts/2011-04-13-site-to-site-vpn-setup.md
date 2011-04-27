--- 
name: site-to-site-vpn-setup
layout: post
title: Site-to-Site VPN Setup
time: 2011-04-13 22:27:00 -04:00
tags: []

---
Finally got around to re-installing routers at home and in the office.

I had a really nice setup running Open-WRT on a pair of Linksys WRT54G's for a few years.
But when one of the routers died, I thought it would be a good time to upgrade to newer 802.11n wireless,
and maybe get some attached storage as well.

I ended up get a Netgear WNR3500L, the (Ahem) open-source router.
I also had an extra WRTSL54GS lying around which could go to the office since wireless is infrequently used there and speed is not an issue.

As long as I was re-installing everything, I thought that surveying the latest developments was in order.
Things haven't dramatically changed, although everything seems to have gotten incrementally better and easier.

I ended up choosing the [Tomato](http://www.polarcloud.com/tomato) v-1.28 distro, 
actualy, a rebuilt version of it which has both [openvpn and usb-storge support](http://tomatousb.org/) all ready to go.

I managed to bring up a site-to-site vpn setup using only the GUI.
Although key generation was done on an ubuntu machine (and the certificates pasted in the GUI).

The VPN came up right away, but to see the network on the client side, I had to follow 
[these instructions](http://www.wasagacomputers.com/home/2010/8/10/tutorial-site-to-site-vpn-using-tomato-firmware-and-openvpn.html).

{% highlight bash %}
VPN-Server-Config / Server1 / Advanced :
 check: Manage Client-Specific Options
 enable: push to rd-client|192.168.3.0/24.
{% endhighlight %}

* *keys generated* on `cantor:/etc/openvpn/easy-rsa/[keys|vars]`
* *archived* on `[cantor|goedel]:/archive/mirror/tomato/[netgear-wnr3500l|wrtsl54gs|openvpn-easy-rsa]`

 