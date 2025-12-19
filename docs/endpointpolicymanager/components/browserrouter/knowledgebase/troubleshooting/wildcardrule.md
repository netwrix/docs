---
title: "Why is my Wildcard rule not applying to top level WWW site?"
description: "Why is my Wildcard rule not applying to top level WWW site?"
sidebar_position: 160
---

# Why is my Wildcard rule not applying to top level WWW site?

The reason this happens is that "WWW" is specific, and since browsers in some cases strip, or
mishandle "WWW" we treat http://www.site.com the same way as http://site.com to avoid any issues.

More Info:

Let's say your goal is to have everyone use Internet Explorer as their default browser unless they
are visiting Microsoft websites, and for Microsoft websites you want everyone to use Edge instead of
IE.

To try to accomplish this you have created a Default Browser policy set to Internet Explorer, and a
wildcard policy to redirect \*.microsoft.com to Edge, however, users report that they when they try
to visit

http://www.microsoft.com that the site still opens in Internet Explorer instead of Edge. The website
http://docs.microsoft.com however, opens correctly in Edge.

![712_1_image-20201230005141-1](/images/endpointpolicymanager/troubleshooting/browserrouter/712_1_image-20201230005141-1.webp)

Assuming that the Browser Router Policy and prerequisites are all configured correctly, (i.e., the
Default Browser policy, and/or other BR policies are working as expected) the reason this is
happening is because wildcard rules like \*.site.com ignore "www" and only apply to subdomains of
the URL specified in the wildcard policy. The URL http://www.microsoft.com will be treated like
http://microsoft.com and be opened in the default browser, Internet Explorer in this case, whereas
subdomains like http://docs.microsoft.com will be redirected to Edge as they match the wildcard
policy.

Said another way, wildcard rules like \*.site.com apply to all subdomains of .site.com, EXCEPT www.

To workaround this issue you can either create a URL policy for http://microsoft.com or a wildcard
policy for \*Microsoft\*. Either of the policies below will resolve this issue.

:::note
There is no "www" in the URL rule below.
:::


![712_2_image-20201230005141-2](/images/endpointpolicymanager/troubleshooting/browserrouter/712_2_image-20201230005141-2.webp)

OR

![712_3_image-20201230005141-3](/images/endpointpolicymanager/troubleshooting/browserrouter/712_3_image-20201230005141-3.webp)


