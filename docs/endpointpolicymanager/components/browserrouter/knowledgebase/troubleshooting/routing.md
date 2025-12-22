---
title: "I'm attempting to use an older CSE but routing from Edge / Chrome to other browsers is not working. Why is this?"
description: "I'm attempting to use an older CSE but routing from Edge / Chrome to other browsers is not working. Why is this?"
sidebar_position: 200
---

# I'm attempting to use an older CSE but routing from Edge / Chrome to other browsers is not working. Why is this?

Netwrix Endpoint Policy Manager (formerly PolicyPak) was contacted by Google about the Endpoint
Policy Manager Browser Router Chrome Extension. This is NOT a security concern. They have a policy
which basically says … that we're not allowed to have more than one extension which does
(essentially) the same thing.

We were able to perform some negotiations with them to KEEP some, but we were REQUIRED to delete /
take down others.

So what's the problem exactly?: When you install the Endpoint Policy Manager CSE and use the
Endpoint Policy Manager Browser Router Chrome

Extension, we tie a specific CSE version to download a specific Chrome Extension browser. For YEARS
it's been OK to just keep publishing NEW versions of the Chrome Extension, when we had MAJOR updates
to the CSE. One Major Update = One Chrome Extension. Chrome is changing the rules and saying,
basically, we cannot do that since the Extension ostensibly does the same thing. Our position is
that we are only doing this because we technically have to. But, Google being Google, rules are
rules.

In the short term, nothing. Endpoint Policy Manager Browser Router will continue to operate on the
machines where the OLDER CSE is also downloading an OLDER version of the Chrome Extension. This is
because the older extension is ALREADY DOWNLOADED, so those users are unaffected.

When would you notice a problem?

There are a few scenarios where you could notice that routing from Chrome or Edge to other browsers
is not working any longer. The typical ways you could encounter this are:

1. If you manually delete the older Chrome extension, then the older Endpoint Policy Manager Browser
   Router CSE will not be able to re-download the old Chrome Extension.
2. If you delete a user's profile and then re-log on, then the older Endpoint Policy Manager Browser
   Router CSE will not be able to re-download the old Chrome Extension.
3. If you bring up a brand new machine and then users log on, then the older Endpoint Policy Manager
   Browser Router CSE will not be able to re-download the old Chrome Extension.

How would I know if I'm affected by Endpoint Policy Manager being forced to take down some older
Endpoint Policy Manager Browser Router Chrome Extensions? We have the list of extensions which ARE
and WERE valid on this list
[What is the Chrome Extension ID for all the published versions of Endpoint Policy Manager Browser Router Client Side Extension?](/docs/endpointpolicymanager/components/browserrouter/knowledgebase/troubleshooting/chromeextensionid.md)

What should you do now?

Our general guidance is, and has always been… please try to stick closely to us in our release
schedule as possible. We know this is not always possible, but have generalized guidance here of how
you should update the CSE and exactly what "supported" means.
[https://www.policypak.com/resources/pp-blog/using-rings-to-test-and-update-the-policypak-client-side-extension-and-how-to-stay-supported/](https://www.policypak.com/resources/pp-blog/using-rings-to-test-and-update-the-policypak-client-side-extension-and-how-to-stay-supported/)

Will we have this problem in the future?

We do have one problem to solve. Since we now are under specific pressure to attempt to have ONE
Chrome Extension for all versions, that's going to take some work. We are investigating how to take
the latest Chrome Extension … with the easy to remember name "fmbfiodledfjldlhiemaadmgppoeklbn" … to
be the "going forward one" that we can just always use. We're not 100% sure we can do that, but
we're going to try. If you stick closely to our release schedule and guidance we think you won't
likely have a problem.

If you still have questions about this concern email support.


