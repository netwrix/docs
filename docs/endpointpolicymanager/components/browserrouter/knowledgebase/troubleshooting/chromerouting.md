---
title: "An older CSE isn't routing from Chrome or Edge to other browsers, because the older CSE isn't downloading the latest Chrome extension. What can I do?"
description: "An older CSE isn't routing from Chrome or Edge to other browsers, because the older CSE isn't downloading the latest Chrome extension. What can I do?"
sidebar_position: 190
---

# An older CSE isn't routing from Chrome or Edge to other browsers, because the older CSE isn't downloading the latest Chrome extension. What can I do?

This is a quick Q & A about this concern.

Q: What's the (business) problem exactly ?

A:Netwrix Endpoint Policy Manager (formerly PolicyPak) was contacted by Google about theEndpoint
Policy Manager Browser Router Chrome Extension.

:::note
This is NOT a security concern. They have a policy which basically says … that we're not
allowed to have more than one extension which does (essentially) the same thing.
:::


Q: So what's the (technical) problem exactly ?

A: When you install theEndpoint Policy Manager CSE and use theEndpoint Policy Manager Browser Router
Chrome Extension, we tie a specific CSE version to download a specific Chrome Extension browser. For
YEARS it's been OK to just keep publishing NEW versions of the Chrome Extension, when we had MAJOR
updates to the CSE. One Major Update = One Chrome Extension. Chrome is changing the rules and
saying, basically, we cannot do that since the Extension ostensibly does the same thing. Our
position is that we are only doing this because we technically have to. But, Google being Google,
rules are rules.

Q: What does this mean for me?

A: In the short term, nothing.Endpoint Policy Manager Browser Router will continue to operate within
user profiles where Chrome or Edge has ALREADY DOWNLOADED the OLDER version of the Chrome Extension.
Again: because the older extension is ALREADY DOWNLOADED, those users are unaffected.

Q: When would I notice a problem and have unhappy users?

A: There are a few scenarios where you could notice that routing from Chrome or Edge to other
browsers is not working any longer. The typical ways you could encounter this are:

- If you manually delete the older Chrome extension, then the olderEndpoint Policy Manager Browser
  Router CSE will not be able to re-download the old Chrome Extension.
- If you delete a user's profile and then re-log on, then the olderEndpoint Policy Manager Browser
  Router CSE will not be able to re-download the old Chrome Extension.
- If you bring up a brand new machine and then users log on, then the olderEndpoint Policy Manager
  Browser Router CSE will not be able to re-download the old Chrome Extension.

Q: How would I know if I'm affected byEndpoint Policy Manager being forced to take down some
olderEndpoint Policy Manager Browser Router Chrome Extensions?

A: We have the list of extensions which ARE VALID (now, it is exactly ONE extension) and which WERE
valid (100% of the older ones are now turned off) which are on this list

[What is the Chrome Extension ID for all the published versions of Endpoint Policy Manager Browser Router Client Side Extension?](/docs/endpointpolicymanager/components/browserrouter/knowledgebase/troubleshooting/chromeextensionid.md)

Q: What should I now?

A: You have two choices: Upgrade to the latest CSE (recommended) or perform the "workaround" which
enables OLDER CSEs to keep using the NEW (only published) extension.

Q: How should I update to the latest extension?

A: Our general guidance is, and has always been… please try to stick closely to us in our release
schedule as possible. We know this is not always possible, but have generalized guidance here of how
you should update the CSE and exactly what "supported" means.
[https://www.policypak.com/resources/pp-blog/using-rings-to-test-and-update-the-policypak-client-side-extension-and-how-to-stay-supported/](https://www.policypak.com/resources/pp-blog/using-rings-to-test-and-update-the-policypak-client-side-extension-and-how-to-stay-supported/)

Q: I cannot update to the latest extension, but I am using builds CSE 18.7.1779.937 -
19.12.2283.849. What is this workaround of which you speak?

A: We have a KB article about it here: "How can I use the onlyEndpoint Policy Manager published
Chrome Extension with my older CSE? (CSE 18.7.1779.937 - 19.12.2283.849)"
[How can I use the only remaining Endpoint Policy Manager published Chrome Extension with my older CSE? (CSE 18.7.1779.937 - 19.12.2283.849)](/docs/endpointpolicymanager/components/browserrouter/knowledgebase/troubleshooting/chromeextension.md)

Q: I'm using a CSE before 18.7.1779.937. What is the workaround?

A: You must upgrade affected machines to the latest CSE to fix this problem.

Q: Will we have this problem in the future?

A: We have figured out how to have ONE Chrome Extension for all versions going forward. The latest
Chrome Extension … with the easy to remember name "fmbfiodledfjldlhiemaadmgppoeklbn" … is going to
be the "going forward one" that we can just always use. If you upgrade to the latest CSE then stick
reasonably close to our release schedule and guidance we think you won't likely have a problem.


