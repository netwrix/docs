---
title: "Revoke Company's Certificate"
description: "Revoke Company's Certificate"
sidebar_position: 50
---

# Revoke Company's Certificate

Endpoint machines join PolicyPak Cloud via the Cloud client MSI download (see the
[Downloads](/docs/policypak/gettingstarted/cloudmanual/interface/companydetails/downloads.md) section ). Inside the Cloud client MSI (for each company) is a unique x509
certificate. This identifies your MSI among all other PolicyPak customers. This way,
only your PolicyPak Cloud client MSI can be used to join computers to your PolicyPak Cloud account. If your MSI is lost, you see unexpected machines in your PolicyPak Cloud, or you want to replace the MSI, you have the option to select **Revoke
company's certificate**.

![web_interface_and_controls_89_499x212](/images/policypak/cloud/interface/companydetails/web_interface_and_controls_89_499x212.webp)

This is a security mechanism that will re-issue the x509 certificate, which has the following
effects:

- New MSIs will be encoded with a new x509 certificate.
- All existing clients using PolicyPak Cloud remain working as they are currently.
- Future computers that join PolicyPak Cloud will need to use your newly-issued MSIs
  to join PolicyPak Cloud.

Therefore, if you've lost your MSIs, or published them on the Internet, and you see machines
consuming licenses you hadn't anticipated being consumed, you have a way to ensure all new computers
start using your new MSI (encoded with a new x509 certificate). As soon as you perform the action,
existing MSIs will stop functioning. Attempts to use them will fail and the installer gets a
message:.

![web_interface_and_controls_90_624x510](/images/policypak/cloud/interface/companydetails/web_interface_and_controls_90_624x510.webp)


