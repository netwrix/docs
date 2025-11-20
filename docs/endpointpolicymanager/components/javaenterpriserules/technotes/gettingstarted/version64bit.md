---
title: "Does Endpoint Policy Manager Java Rules Manager work with 64-bit versions of Java?"
description: "Does Endpoint Policy Manager Java Rules Manager work with 64-bit versions of Java?"
sidebar_position: 50
---

# Does Endpoint Policy Manager Java Rules Manager work with 64-bit versions of Java?

Yes. But you can think of it as two separate systems:

- If you have 32-bit Javas, those can only map to 32-bit browsers.
- If you have 64-bit Javas, those can only map to 64-bit browsers.

For instance if you have:

- 32-bit Java 7 Update 80
- 32-bit Java 7 Update 95
- 32-bit Java 6 Update 81

And

- 64-bit Java 8 Update 121
- 64-Bit Java 7 Update 99
- 64-bit Java 7 Update 51

Then you can map 32-bit Javas to the 32-bit browsers you have.

- When running 32-bit IE, www.foo.com –> 32-bit Java 7 U 80.
- When running 32-bit IE www.bar.com –> 32-bit Java 7 U 95.
- When running 64-bit IE www.xyz.com –> 64-bit Java 7 U 99.
- When running 64-bit IE www.pdq.com –> 64-bit Java U 51.


