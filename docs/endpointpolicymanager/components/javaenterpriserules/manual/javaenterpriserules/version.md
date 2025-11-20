---
title: "Checking the Version"
description: "Checking the Version"
sidebar_position: 20
---

# Checking the Version

Each rule you specify attempts to map an RIA to a specific version of Java (as best it can). When
you specify to use an "Exact" version, Java Rules Manager will only try to match the exact version
(see Figure 30).

![troubleshooting_policypak_1](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/troubleshooting_endpointpolicymanager_1.webp)

Figure 30. The "Exact" specification for a Java version won't be exact, but it will be close.

If that version is not present, then Java Rules will notify you as shown in Figure 31.

![troubleshooting_policypak_2](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/troubleshooting_endpointpolicymanager_2.webp)

Figure 31. You will receive this prompt if your "Exact" specification doesn't have a Java version
match.

Also note that if you specify "Latest in family" (as demonstrated in Figure 32), then the latest
version of Java is utilized.

![troubleshooting_policypak_3](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/troubleshooting_endpointpolicymanager_3.webp)

Figure 32. "Latest on machine" does what it implies; it utilizes the latest version of Java
available and installs it on the machine.


