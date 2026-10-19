---
title: "Linux: Remove /snap/bin from PATH"
description: "Linux: Remove /snap/bin from PATH"
sidebar_position: 10
---

# Linux: Remove /snap/bin from PATH

Linux: Remove /snap/bin from PATH

# Linux: Remove /snap/bin from PATH

Vulnerability scans may require that "/snap/bin" be remove from the environment PATH variable.

**Step 1 –** Remove "/snab/bin" from the PATH in the **/etc/environment**, example:

```
PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games"

```

**Step 2 –** Comment the below section in this file: **/etc/profile.d/apps-bin-path.sh**

```
## Expand $PATH to include the directory where snappy applications go.
# snap_bin_path="/snap/bin"
#if [ -n "${PATH##*${snap_bin_path}}" ] && [ -n "${PATH##*${snap_bin_path}:*}" ]; then
# export PATH=$PATH:$`{snap_bin_path}`
#fi

```

**Step 3 –** Open new SSH session and check PATH with: `echo $PATH`.
