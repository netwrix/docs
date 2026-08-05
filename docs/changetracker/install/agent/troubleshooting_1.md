---
title: "Common Troubleshooting Tips"
description: "Common Troubleshooting Tips"
sidebar_position: 80
---

# Common Troubleshooting Tips

## Permission Denied

Check file permissions, especially execute permissions for the user account to be used by the
Netwrix Change Tracker Proxy Agent.

[root@IP141-Oracle-Linux-7 ~]# NNT_FILEHASH_LINUX_X64

-bash: /usr/bin/NNT_FILEHASH_LINUX_X64: Permission denied

[root@IP141-Oracle-Linux-7 ~]#

## No File or Directory

Check that the NNT_Filehash has been placed on a path for the user account being used. Use $PATH to
show the path variable settings for the user account. You can modify the user path by creating a
custom.sh shell script in /etc/profile.d/ or by modifying /etc/bashrc or /etc/profile but reference
the appropriate guidance for your platform OS.

[root@IP141-Oracle-Linux-7 ~]# NNT_FILEHASH_LINUX_X64

-bash: /usr/bin/NNT_FILEHASH_LINUX_X64: No such file or directory

[root@IP141-Oracle-Linux-7 ~]#

## Error While Loading Shared Libraries

Suggests there may be missing dependencies or required libs are not on an executable path for the
user account being used.

[[root@IP141-Oracle-Linux-7 ~]# NNT_FILEHASH_LINUX_X64

NNT_FILEHASH_LINUX_X64: error while loading shared libraries: libstdc++.so.6: cannot open shared
object file: No such file or directory

[root@IP141-Oracle-Linux-7 ~]#

Check dependencies of NNT Filehash using a ldd NNT_FILEHASH_LINUX_X64

[root@IP141-Oracle-Linux-7 bin]# ldd NNT_FILEHASH_LINUX_X64

linux-vdso.so.1 => (0x00007ffdca7f1000)

libstdc++.so.6 => not found

libm.so.6 => /lib64/libm.so.6 (0x00007ff4efd3a000)

libgcc_s.so.1 => /lib64/libgcc_s.so.1 (0x00007ff4efb24000)

libc.so.6 => /lib64/libc.so.6 (0x00007ff4ef762000)

/lib64/ld-linux-x86-64.so.2 (0x000055e3dd177000)

Here the libstdc++.so.6 file is reported as ‘not found’, while all other dependencies have been
located OK.

- Check if libstdc++.\* is present on the platform to be monitored using command find / -name
  libstdc++.\*
- If the file is located then it will be necessary to either copy the file to the standard default
  path, e.g. /usr/bin, or at least create a link from the path to the file
- If the libstdc file is not located on this host, please run the find command on any other similar
  servers, especially any with compiler capabilities. If located, please take a copy of the file,
  move it to all other servers and place it on the /usr/bin path
- if libstdc++ does not exist anywhere within your server estate, then it will be necessary to get
  the binary from the Manufacturer repo or contact
  [Netwrix Support](https://www.netwrix.com/support.html)
