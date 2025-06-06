# Elevating Scripts

__NOTE:__ For an overview on elevating scripts and preventing scripts from running, which could need admin rights, see the [Elevate (or smack down) scripts and Java JAR files](/docs/product_docs/policypak/policypak/video/leastprivilege/elevate/scripts.md) video.

You might need to elevate a script that has contents that would perform admin-only functions, like editing the Registry, turning on or off Services, and so on. You might also want to block scripts from running to prevent attacks that originate over email or on USB flash drives. In these cases, you can use Endpoint Policy Manager Least Privilege Manager to elevate or block scripts from running.

Kick off the process to create a policy for scripts by going to __Add__ > __New Script Policy__.

![A screenshot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/elevate/elevating_scripts.png)

The script types that are supported for elevation and for blocking are:

- BAT
- CMD
- PS1
- JS
- JSE
- VBS
- VBE
- JAR

These script types can also be blocked automatically and universally by using the Endpoint Policy Manager Least Privilege Manager SecureRun™ feature, as described in later topics.
