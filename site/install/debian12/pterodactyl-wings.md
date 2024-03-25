---
title: "[TUTORIAL] Installing pterodactyl and wings on a debian 12 vps"
layout: base
tags: tutorial
---
Hello.

In this tutorial, I will explain how you can install `pterodactyl and wings` on a debian 12 vps.

run this: apt-get update && apt install sudo && sudo su
apt install curl -y

bash <(curl -s https://raw.githubusercontent.com/pterodactyl-installer/pterodactyl-installer/master/install.sh)
and select 2 if you want pterodactyl and wings, select 0 if just pterodactyl and select 1 if just wings .

now fqdn of the panel should be:
your-ip-from-vps:your-forwarded-port
you can find forward ports in bot dm


then after installing run this:
nano /etc/nginx/sites-available/pterodactyl.conf
if it types nano command not found run apt install nano
you will see the pterodactyl config

<image coming soon>

we need only listen 80 and listen [::]:80
you need to change 80 to your forwarded port
in my way forwarded port its 33261
so i installed pterodactyl with fqdn 185.234.69.13:33261
change listen 80 and listen [::]:80 to listen 33261 and listen [::]:33261
then run ufw allow 33261 (change on your forwarded port)
after this run sudo systemctl restart nginx
and done you can access your pterodactyl with link http://<ip>:33261/

now node
run ufw allow 33262 (change to your 2 forwarded port)
ufw allow 33263 (change to your 3 forwarded port)
then run nano /etc/pterodactyl/config.yml and go to node settings, then go to configuration tab
copy the config (not auto deploy) and paste in /etc/pterodactyl/config.yml
now save the config and click generate token in configuration tab, paste this token and press enter

paste this: iptables -t nat -A OUTPUT -d <ip> -j DNAT --to-destination $(hostname -i) and press enter, then run sudo wings and boom your node is alive
to make it 24/7 run systemctl enable --now wings
