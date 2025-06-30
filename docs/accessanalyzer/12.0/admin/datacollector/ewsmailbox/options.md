# EWSMailbox: Options

The Scan options page provides general scan options. It is a wizard page for all categories.

![EWS Mailbox Data Collector Wizard Options page](/img/product_docs/accessanalyzer/12.0/install/application/options.webp)

Select the checkboxes to apply any desired scan options:

- Ignore certificate errors – Ignores certificate errors when connecting to Exchange Web Services
- Match job host against autodiscovered host – Matches the name of the job host against the host
  name returned from autodiscover

    **_RECOMMENDED:_** Use this option when scanning multiple Exchange environments with a single
    job and the Connection Profile has multiple credentials in it.

- Scan options

    - Scan archives – Scans for archived mailbox data
    - Scan recoverable items – Scans for recoverable items

- Authentication – Select an Authentication type from the drop down:

    - Negotiate
    - Basic
    - NTLM
    - Kerberos
    - Digest
