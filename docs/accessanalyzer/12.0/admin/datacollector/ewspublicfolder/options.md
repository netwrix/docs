# EWSPublicFolder: Options

The Scan options page provides general scan options. It is a wizard page for all of the categories.

![options](/img/product_docs/accessanalyzer/12.0/admin/datacollector/ewspublicfolder/options.webp)

Select any desired scan options:

- Ignore certificate errors – Ignores certificate errors when connecting to Exchange Web Services
- Match job host against autodiscovered host – Matches the name of the job host against the host
  name returned from autodiscover

    **_RECOMMENDED:_** Use this option when scanning multiple Exchange environments with a single
    job and the Connection Profile has multiple credentials in it.

- Authentication – Select an Authentication type from the drop down:

    - Negotiate
    - Basic
    - NTLM
    - Kerberos
    - Digest
