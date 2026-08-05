---
title: "Express Agent Troubleshooting"
description: "Express Agent Troubleshooting"
sidebar_position: 90
---

# Express Agent Troubleshooting

If you experience problem with the Express Agent then please sent the express agent log files found
in `/var/nnt/expressagent` to [Netwrix Support](https://www.netwrix.com/support.html).

There are also a few simple checks that can be done to aid troubleshooting. Check that all the
agent’s dependencies are present using the `ldd` command:

# ldd /opt/nnt/expressagent/expressAgent

/opt/nnt/expressagent/expressAgent needs:

/usr/lib/libc.a(shr.o)

/usr/lib/libpthread.a(shr_xpg5.o)

/opt/freeware/lib/gcc/powerpc-ibm-aix6.1.0.0/4.8.5/../../../libcrypto.a(libcrypto.so.1.0.2)

/usr/lib/libpthread.a(shr_comm.o)

/opt/freeware/lib/gcc/powerpc-ibm-aix6.1.0.0/4.8.5/../../../libssl.a(libssl.so.1.0.2)

/unix

/usr/lib/libcrypt.a(shr.o)

/usr/lib/libpthreads.a(shr_comm.o)

If the details of the user account who made caused a FIM change are not included in the change
information, check that AIX® Event Infrastructure is installed and the aha folder mounted
correctly.

# lslpp -l bos.aha\*

Fileset Level State Description

---

Path: /usr/lib/objrepos

bos.ahafs 7.2.2.15 COMMITTED Aha File System

Path: /etc/objrepos

bos.ahafs 7.2.0.0 COMMITTED Aha File System

# df

Filesystem 512-blocks Free %Used Iused %Iused Mounted on

/dev/hd4 1048576 658256 38% 13807 15% /

/dev/hd2 5636096 288216 95% 55150 53% /usr

/dev/hd9var 917504 324336 65% 2973 8% /var

/dev/hd3 393216 210072 47% 264 2% /tmp

/dev/hd1 131072 130288 1% 13 1% /home

/dev/hd11admin 262144 261384 1% 5 1% /admin

/proc - - - - - /proc

/dev/hd10opt 1703936 326792 81% 3961 10% /opt

/dev/livedump 524288 523552 1% 4 1% /var/adm/ras/livedump

/aha - - - 330 2% /aha

If you do not get an output similar to the above, please repeat the steps at the start of this
section to install and/or mount the aha fs.
