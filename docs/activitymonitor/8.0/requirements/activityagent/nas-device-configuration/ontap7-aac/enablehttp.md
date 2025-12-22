---
title: "Enable HTTP or HTTPS"
description: "Enable HTTP or HTTPS"
sidebar_position: 20
---

# Enable HTTP or HTTPS

The Activity Monitor Activity Agent must be able to send ONTAPI calls to the vFiler’s data LIF over
HTTP or HTTPS. The following commands will enable the HTTP or HTTPS communication between the vFiler
and the Activity Monitor.

Use the following command to enable HTTP:

```
options httpd.admin.enable on
```

Check HTTP Status:

```
options httpd.admin.enable
```

Use the following command to enable HTTPS:

```
options httpd.admin.ssl.enable on
```

Check HTTP Status:

```
options httpd.admin.ssl.enable
```
