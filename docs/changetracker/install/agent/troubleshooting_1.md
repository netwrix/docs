---
title: "Common Troubleshooting Tips"
description: "Common Troubleshooting Tips"
sidebar_position: 80
---

# Common Troubleshooting Tips

## Permission denied

Check file permissions, especially execute permissions for the user account the
Netwrix Change Tracker Proxy Agent uses.

[root@IP141-Oracle-Linux-7 ~]# NNT_FILEHASH_LINUX_X64

-bash: /usr/bin/NNT_FILEHASH_LINUX_X64: Permission denied

[root@IP141-Oracle-Linux-7 ~]#

## No file or directory

Check that NNT_Filehash is on a path for the user account you're using. Use $PATH to
show the path variable settings for the user account. You can modify the user path by creating a
custom.sh shell script in /etc/profile.d/, or by modifying /etc/bashrc or /etc/profile. Reference
the guidance for your platform OS for details.

[root@IP141-Oracle-Linux-7 ~]# NNT_FILEHASH_LINUX_X64

-bash: /usr/bin/NNT_FILEHASH_LINUX_X64: No such file or directory

[root@IP141-Oracle-Linux-7 ~]#

## Error while loading shared libraries

This error suggests there might be missing dependencies, or that required libraries aren't on an
executable path for the user account you're using.

[[root@IP141-Oracle-Linux-7 ~]# NNT_FILEHASH_LINUX_X64

NNT_FILEHASH_LINUX_X64: error while loading shared libraries: libstdc++.so.6: can't open shared
object file: No such file or directory

[root@IP141-Oracle-Linux-7 ~]#

Check the dependencies of NNT Filehash using the `ldd` command:

[root@IP141-Oracle-Linux-7 bin]# ldd NNT_FILEHASH_LINUX_X64

linux-vdso.so.1 => (0x00007ffdca7f1000)

libstdc++.so.6 => not found

libm.so.6 => /lib64/libm.so.6 (0x00007ff4efd3a000)

libgcc_s.so.1 => /lib64/libgcc_s.so.1 (0x00007ff4efb24000)

libc.so.6 => /lib64/libc.so.6 (0x00007ff4ef762000)

/lib64/ld-linux-x86-64.so.2 (0x000055e3dd177000)

In this output, `libstdc++.so.6` shows as `not found`, while all other dependencies resolve
correctly.

- Check whether `libstdc++.*` is present on the platform you want to monitor using the command
  `find / -name libstdc++.*`.
- If you locate the file, copy it to the standard default path, for example `/usr/bin`, or
  create a link from the path to the file.
- If you can't locate the libstdc file on this host, run the find command on other similar
  servers, especially any with compiler capabilities. If you locate it, copy the file, move it
  to the other servers, and place it on the `/usr/bin` path.
- If libstdc++ doesn't exist anywhere in your server estate, get the binary from the
  manufacturer's repository or contact
  [Netwrix Support](https://www.netwrix.com/support.html).
