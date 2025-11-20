---
title: "I'm using Endpoint Policy Manager Java Rules Manager, but I still get Java prompts when visiting a webpage, or attempting to run a Java applet. What can I do?"
description: "I'm using Endpoint Policy Manager Java Rules Manager, but I still get Java prompts when visiting a webpage, or attempting to run a Java applet. What can I do?"
sidebar_position: 10
---

# I'm using Endpoint Policy Manager Java Rules Manager, but I still get Java prompts when visiting a webpage, or attempting to run a Java applet. What can I do?

First, Java Applets work in Internet Explorer and in Firefox. They do not work in Chrome or
Microsoft Edge.

Second, there are messages which apply to:

- Firefox AND Internet Explorer (Generic Java messages; which could apply to either browser.)
- Firefox specifically and
- Internet Explorer specifically

### Type 1: Messages for both Firefox and Internet Explorer

If you see a message "Application Blocked by Java Security" (like what is seen below) and you want
to automate and work around this message; you can try to add the site to the Java Exceptions Site
list.

![558_1_ppjrm-img-01](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/558_1_ppjrm-img-01.webp)

The fastest way to automate this is with Netwrix Endpoint Policy Manager (formerly PolicyPak)
Application Settings Manager's Java Paks (any of them starting with Java 7 U 25 have this feature).
The video is here:
[Manage and Lock down Java Site List Exceptions](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/java/lockdown.md).

Other Java prompts you might encounter, which Endpoint Policy Manager Application Settings Manager
can overcome are:

- "Java has discovered application components that could indicate a security concern."
- "Your Java Version if out of date"
- "Your Java Version is insecure"
- "Do you want to run this application"

To see exactly how to work around these prompts, see
[https://www.policypak.com/support-sharing/preconfigured-paks.html](https://www.policypak.com/support-sharing/preconfigured-paks.html)
and look for the KB articles which start with the word "Java:"

### Type 2: Java Messages specifically found in Firefox

When an end user sees a Java applet on a website, they are asked to Activate Java.

![558_2_ppjrm-img-02](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/558_2_ppjrm-img-02.webp)

Then they are asked to "Allow Now" or "Allow and Remember".

![558_3_ppjrm-img-03](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/558_3_ppjrm-img-03.webp)

The fastest way to automate "Allow and Remember" for Firefox per website is to read and follow this
KB:
[Firefox: How do I set "Allow Now", "Allow and Remember" or "Block Plugin" as plug-ins are requested?](/docs/endpointpolicymanager/components/applicationsettingsmanager/technotes/preconfiguredappsets/allowremember.md)

### Type 3: Java Messages Specifically Found in Internet Explorer

IE Message 1:

"This webpage wants to run "Java™ Platform SE binary' which isn't compatible with Internet
Explorer's enhanced security features. If you trust this site, you can disable Enhanced Protected
Mode for this site and allow the control to run."

The message can be seen below.

![558_4_ppjrm-img-04](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/558_4_ppjrm-img-04.webp)

Or this occurs...

![558_5_2017-01-23_1038](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/558_5_2017-01-23_1038.webp)

This message occurs when these items are set manually or with Group Policy:

![558_6_ppjrm-img-05](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/558_6_ppjrm-img-05.webp)

The way to remove the prompt when running the Java applet is the make the site a Trusted Site in IE.
You can do this manually in IE like this:

![558_7_ppjrm-img-06](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/558_7_ppjrm-img-06.webp)

Or using Endpoint Policy Manager Application Settings Manager like this:

![558_8_ppjrm-img-07](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/558_8_ppjrm-img-07.webp)

Or use Endpoint Policy Manager Application Settings Manager to merge your site with what the user
already has:

![558_9_ppjrm-img-08](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/558_9_ppjrm-img-08.webp)

IE Message 2:

"This program will open outside of Protected mode. Interent Explorer's Protected mode helps protect
your computer. If you do not trust this website, do not open this program."

Name: icacls.exe
Publisher: Microsoft Windows

The message can be seen as below:

![558_10_ppjrm-img-09](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/558_10_ppjrm-img-09.webp)

You get this specific prompt when these are set manually or via Group Policy / PolicyPak:

![558_11_ppjrm-img-10](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/558_11_ppjrm-img-10.webp)

You can automatically make this prompt never occur again (automatically) using Group Policy
Preferences:

```
HKEY_CURRENT_USER\SOFTWARE\Microsoft\Internet Explorer\Low Rights\ElevationPolicy\
{0F31AF05-4595-4736-BEF3-80ABE79E9211}
```

And set the following values:

| Registry | Values    | Type                  |
| -------- | --------- | --------------------- |
| AppName  | REG_SZ    | Icacls.exe            |
| AppPath  | REG_SZ    | `C:\Windows\SysWOW64` |
| Policy   | REG_DWord | 3                     |

Like this:

![558_12_ppjrm-img-11](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/558_12_ppjrm-img-11.webp)

Result:You no longer get the prompt for iCacls, but the Java applet will not run.

IE Message 3:

"This program will open outside of Protected mode. Internet Explorer's Protected mode helps protect
your computer. If you do not trust this website, do not open this program."

Name: Java SE Runntime Environment 8 Update…
Publisher: Oracle America, Inc.

![558_13_ppjrm-img-12](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/558_13_ppjrm-img-12.webp)

You see this message when these are set like this manually or using Group Policy / PolicyPak:

![558_14_ppjrm-img-13](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/558_14_ppjrm-img-13.webp)

You can automatically make this prompt never occur again (automatically) using Group Policy
Preferences:

```
HKEY_CURRENT_USER\SOFTWARE\Microsoft\Internet Explorer\Low Rights\ElevationPolicy\`{GUID}`
```

Where `{GUID}` is `{GUID}` for @the latest version of Java on your machine

And set the following values:

| Registry Values | Type      | Description                                    | Notes                                                 |
| --------------- | --------- | ---------------------------------------------- | ----------------------------------------------------- |
| AppName         | REG_SZ    | jp2launcher.exe                                |                                                       |
| AppPath         | REG_SZ    | `C:\Program Files (x86)\Java\jre1.8.0_111\bin` | Or whatever the path to the latest version of Java is |
| Policy          | REG_DWord | 3                                              |                                                       |

Like this:

![558_15_ppjrm-img-14](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/558_15_ppjrm-img-14.webp)

Result: The Java applet is ALLOWED.


