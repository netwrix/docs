# Configuring Login Page Disclaimer

Users can add a disclaimer message to the logon screen by adding a custom `Disclaimer.txt` file in
the Web folder in the Enterprise Auditor directory and configuring the `WebServer.exe.config` file.
Follow the steps to configure the optional disclaimer message:

**Step 1 –** Navigate to the Web folder of the installation directory:
` …\STEALTHbits\StealthAUDIT\Web`.

![Disclaimer.txt file added to the Web folder](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/disclaimertxt.webp)

**Step 2 –** Create a `Disclaimer.txt` file in the Web folder. Write a custom disclaimer that
displays on the login page for the Web Console.

- The text file must be named `Disclaimer.txt`. The disclaimer message option is not configured
  properly if using a text file with a different name.

![File Explorer WebServer.exe.config](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/webserverexeconfigfile.webp)

**Step 3 –** Locate the `WebServer.exe.config` file and open it.

![WebServer.exe.config file in Notepad](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/webserverexeconfigdisclaimer.webp)

**Step 4 –** Find the following line in the text:

```
<add key="ShowDisclaimerMessage" value="false"/>
```

**Step 5 –** Replace the value with `true` so that the line now reads as:

```
<add key="ShowDisclaimerMessage" value="true"/>
```

**Step 6 –** Save the changes to enable the disclaimer message on the Web Console login page.

![Web Console login page with disclaimer message](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/webconsolelogindisclaimer.webp)

**Step 7 –** To check if the disclaimer message was configured correctly, open the Web Console to
access the login page.

- If the disclaimer is configured correctly, the custom disclaimer message displays at the bottom of
  the login page.

The disclaimer message displays on the Web Console login page.
