# Endpoint Policy Manager Network Security Manager

Network Security Manager enables you to restrict processes to communicate with specific IP addresses or DNS addresses. This increases the security of applications (or browsers) so end-users (or anonymous users) on the endpoints cannot use programs to connect to unwanted network addresses.

Some examples of use are:

- Ensuring your Quickbooks client application only connects to your Quickbooks server (and not some rogue server)
- Ensuring specific browsers can only communicate with specifically named websites.
- Ensuring a networking app, like Telnet or WinSCP or FileZilla can only communicate and transfer files to specifically named servers.

## Getting started with Endpoint Policy Manager Network Security Manager

___RECOMMENDED:___ For an overview of this section, see this video: See [Endpoint Policy Manager Network Security Manager - The Basics](/docs/product_docs/policypak/policypak/video/networksecurity/basics.md) topic for additional information.

Pick an application you wish to restrict, like a browser (such as Edge, Firefox, PaleMoon, etc) or a networking application (like Telnet, WinSCP, etc.). Then pick the destinations you wish for that application to be restricted to.

In this example, we'll restrict the Edge browser to only be allowed to communicate with [www.Netwrix.com](http://www.netwrix.com/). All other communication will be rejected.

Start out by creating a GPO and linking it over to where your computer objects are.

Then use Computer Configuration | Netwrix Endpoint Policy Manager | Desktop Automation Pak | Network Security Manager.

### Creating a Global Settings Policy

Your first stop is to create a __New Global settings policy__ like what's seen here.

![nsm01](/static/img/product_docs/policypak/policypak/scriptstriggers/nsm01.png)

Once selected you can see your configurable options for the machines.

![nsm02](/static/img/product_docs/policypak/policypak/scriptstriggers/nsm02.png)

- Enable Network Security Manager – This is the master ON switch for the feature.
- Show Management Notifications – You can choose to show if the processes are being managed by Endpoint Policy Manager Network Security Manager (or not)
- Notification message should close in X seconds – Provides a countdown in seconds before the message is removed.
- Disable recurring notifications after X impressions – Useful to set so the user can get the idea that there is control; but eventually you can tamp down the number of pop-ups.
- Text Customization (Window Title, Notification Title, Customized Message) – Various settings to configure the dialog

### Creating a Process Matching Policy

Next you'll want to create a process matching policy. Again, in our examples, we'll match on Microsoft Edge.

Create a New Policy like what's seen here.

![nsm03](/static/img/product_docs/policypak/policypak/scriptstriggers/nsm03.png)

Next you'll want to match a specific application. You can do this via Simple or Combo rules. This example will use a Simple rule.

___RECOMMENDED:___ For details about Simple and Combo rules, refer to the Endpoint Policy Manager Least Privilege Manager Manual (as they won't be repeated here).

Specify the location for Microsoft Edge via Path rule which is ```C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe```

![nsm04](/static/img/product_docs/policypak/policypak/scriptstriggers/nsm04.png)

Then in the __Add Connections Conditions__ dialog, specify the following values to Allow Any activity to www.Netwrix.com by Domain Name.

![nsm05](/static/img/product_docs/policypak/policypak/scriptstriggers/nsm05.png)

Then click __Add__ and make policy #2 a Block policy which blocks everything else.

![nsm06](/static/img/product_docs/policypak/policypak/scriptstriggers/nsm06.png)

Results should look like this.

![nsm07](/static/img/product_docs/policypak/policypak/scriptstriggers/nsm07.png)

Click __Next__ to continue. Accept the defaults on the final Wizard page and click __Finish__.

![nsm08](/static/img/product_docs/policypak/policypak/scriptstriggers/nsm08.png)

### Testing your Policy Out

On your endpoint which has the Endpoint Policy Manager CSE installed and licensed, run GPupdate or reboot the machine to acquire the policies.

The results will be that when Edge is launched, end users cannot go to any network location, like Microsoft.com, but are restricted to the specific network location you specified, www.Netwrix.com.

![nsm09](/static/img/product_docs/policypak/policypak/scriptstriggers/nsm09.png)

## Auditing Events

___RECOMMENDED:___ See the [Endpoint Policy Manager Network Security Manager - Auditing Events](/docs/product_docs/policypak/policypak/video/networksecurity/auditingevents.md) topic for additional information.

Auditing Events can be useful if you want to determine if your rules are working. Each rule may be individually enabled like what's seen here.

![nsm10](/static/img/product_docs/policypak/policypak/scriptstriggers/nsm10.png)

In this example I'll have both rules set to Log.

![nsm11](/static/img/product_docs/policypak/policypak/scriptstriggers/nsm11.png)

The results can be pretty noisy depending on the application. In this case whenever Edge is run you will get a myriad of Blocked events like what's seen here.

![nsm12](/static/img/product_docs/policypak/policypak/scriptstriggers/nsm12.png)

You may wish to audit for blocks for a while then change gears to audit only for successes later to reduce the amount of noise.

## Additional Topics & References

Because Network Security Manager uses the same basic UI as Endpoint Policy Manager Least Privilege Manager, you can learn more about Simple rules here:

- [Elevating Executables](/docs/product_docs/policypak/policypak/leastprivilege/elevate/executables.md)
- [Creating and Using Executable Combo Rules](/docs/product_docs/policypak/policypak/leastprivilege/bestpractices/rules/executablecombo.md)

You can learn more about the following additional Endpoint Policy Manager Network Security manager topics via our How-To videos:

- Understanding Applications & Ports: [Endpoint Policy Manager Network Security Manager - Applications and Ports](/docs/product_docs/policypak/policypak/video/networksecurity/applicationsports.md)
- Deeper Dive into Customizations & Notifications: [Endpoint Policy Manager Network Security Manager - Global settings](/docs/product_docs/policypak/policypak/video/networksecurity/globalsettings.md)
