---
title: "Firefox: How do I troubleshoot adding Certificates with Endpoint Policy Manager and Firefox?"
description: "Firefox: How do I troubleshoot adding Certificates with Endpoint Policy Manager and Firefox?"
sidebar_position: 100
---

# Firefox: How do I troubleshoot adding Certificates with Endpoint Policy Manager and Firefox?

There are various areas you should troubleshoot FIRST with FF and Certificates.

Shortest possible answer to 99% of problems with FF + Certificates:

1. Are you using FF ESR? You must use FF ESR…
   [Read THIS](https://www.policypak.com/pp-blog/endpointpolicymanager-will-soon-only-support-firefox-esr).
2. Do you have the LATEST CSE on the endpoint? STOP: Make sure.
3. Also; couldn't hurt to upgrade your MMC console to latest version.
4. Are you using the LATEST Firefox pak? STOP: Make sure.
5. Re-open and re-save the cert as a DER binary; even if you think it is that way already. (See Step
   3 in the longer article below.)
6. Change the file extention from .cer to .der
7. Ensure your syntax is correct \DCShareFabrikam-CA.cer, 2, ROOT, add And NOT:
   \DCShareFabrikam-CA.cer, ROOT, 2, add
8. If you tried CA or ROOT… try the other one.

Longer troubleshooting (which you absolutely must go thru before we can do anything more… and you
must do these step by step.)

**Step 1 –** Check the compatibility chart first

[Firefox: What versions of the Endpoint Policy Manager CSE support managing certificates in what versions of Firefox?](/docs/endpointpolicymanager/components/applicationsettingsmanager/technotes/preconfiguredappsets/version.md)

**Step 2 –** Watch the Netwrix Endpoint Policy Manager (formerly PolicyPak) and Firefox cert video
for a how-to

**Step 3 –** The most common reason certificates fail to import is because they are the WRONG
FORMAT.

Endpoint Policy Manager only imports certificates which are ALREADY in what's called the BINARY DER
format.

Full details on how to do this are in the document Endpoint Policy Manager Application Settings
Manager – Using the Firefox Pak.PDF Located in the customer portal.

If you are UNSURE if your cert is BINARY DER or not, here's what you can do to ENSURE that it is
BINARY DER.

If the CERT is a-ok inside Firefox ALREADY, you can then EXPORT it like this to ensure it is a
BINARY DER file.

![214_1_image002](/images/endpointpolicymanager/troubleshooting/applicationsettings/firefox/214_1_image002.webp)

When you save, save it as a .DER extension.

**Step 4 –** Look at the Endpoint Policy Manager ppSwitched.log file

Look in appdatalocalusernamepolicypakpolicypak application manager inside ppSwitched.log.

Does it appear that Endpoint Policy Manager is trying at all?

```
Processing FF: Certificates
{Adding certificate C:\ABC.cer to root store. Replace interval: always
Adding certificate C:\DEF.cer to ca store. Replace interval: always}
```

If yes, that's good.

**Step 5 –** Is the Endpoint Policy Manager Firefox Plug in working?

You can also use Firefox's log by being on any page and clicking Ctrl+Shift+J.

In the log below certificates being added to the proper stores. You can also see ERROR CONDITIONS as
well which are helpful for troubleshooting.

![214_2_image007](/images/endpointpolicymanager/troubleshooting/applicationsettings/firefox/214_2_image007.webp)

**Step 6 –** Other reasons your cert just isn't working

- The certificate is not designed to work in the store of your choice. For instance, you've selected
  an email certificate and tried to use it in the ROOT or CA store. Self signed certs are best in
  the ROOT store, and not the CA store.
- You have misspelled the name of the file. For instance, the file is really named
  \serversharefile123.cer but you specified \serversharefile123 or \serversharefile123.x509 or
  \serversharefile1.DER ?
- When specifying a certificate and the number of days that Endpoint Policy Manager should check for
  updates, you transpose the values. The correct way to specify a cert and check every, say, 2 days
  is\DCShareFabrikam-CA.cer, 2, CA, add
  And NOT:
   \DCShareFabrikam-CA.cer, CA, 2, add
   In the logs, you would see this transposition error demonstrated as:

![214_3_image008](/images/endpointpolicymanager/troubleshooting/applicationsettings/firefox/214_3_image008.webp)

**Step 7 –** Send us your cert, and we'll send you ours.

We can try to see if YOUR CERT works in OUR environment.
We can also send you OUR TEST CERT and see if it works in YOURs.


