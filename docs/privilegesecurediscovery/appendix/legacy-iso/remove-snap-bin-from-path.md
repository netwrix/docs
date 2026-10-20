---
title: "Remove /snap/bin from PATH"
description: "Remove the /snap/bin directory from the PATH variable on a node when a vulnerability scan requires it."
sidebar_position: 80
---

This page applies to ISO-based installations. For the supported deployment method, see [Legacy ISO installation](./legacy-iso-installation.md).

Vulnerability scans can require that the `/snap/bin` directory isn't in the `PATH` environment variable of the node. Complete the following steps on each node.

1. Remove `/snap/bin` from the `PATH` value in `/etc/environment`. The result resembles the following:

   ```text
   PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games"
   ```

2. In `/etc/profile.d/apps-bin-path.sh`, comment out the lines that add the snap directory to the path:

   ```bash
   # Expand $PATH to include the directory where snappy applications go.
   # snap_bin_path="/snap/bin"
   # if [ -n "${PATH##*${snap_bin_path}}" ] && [ -n "${PATH##*${snap_bin_path}:*}" ]; then
   #   export PATH=$PATH:${snap_bin_path}
   # fi
   ```

3. Open a new SSH session and check the path:

   ```bash
   echo $PATH
   ```

   The output doesn't contain `/snap/bin`.
