---
title: "[TUTORIAL] Installing nginx on a debian 12 vps"
layout: base
tags: tutorial
---
Hello.

In this tutorial, I will explain how you can install `nginx` on a debian 12 vps.

## Updating apt
First, we need to update our apt repositories.
This can be done using the following command:
```bash
apt update -y
```

## Installing nginx
Now we can install nginx
```bash
apt install nginx -y
```

## Testing
To test if everything works, execute the following command:
```bash
curl http://localhost/
```
If `curl` is not installed, install it using `apt`
