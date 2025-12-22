---
title: "Security Best Practices"
description: "Security Best Practices"
sidebar_position: 50
---

# Security Best Practices

Review the following recommendations to harden the solution security:

- Day to day administrative access to Netwrix Privilege Secure should be achieved with an Active
  Directory account secured with strong multi-factor authentication. Use the built-in admin user
  account for emergency access only; protect it by physical or software means.
- Limit the number of Privilege Secure administrators to the lowest possible.
- Do not create additional local administrator accounts on the Privilege Secure server unless
  absolutely required. If created, make sure their passwords are long enough (>20 characters), not
  shared with any other account, and well-protected.
- Use multi-factor authentication (MFA) for all users. Protect MFA recovery codes in a physical safe
  or secure them with a password manager.
- By default, Privilege Secure creates a self-signed SSL certificate for Privilege Secure web
  services. To strengthen the security, replace it with the certificate signed by an authority your
  organization trusts.
- Make sure that the clocks of the virtual machine where the appliance deployed is synced to an NTP
  Server, we recommend the same NTP source as your domain controllers are synced to.
- Ensure Windows Updates are enabled and automatically installed with a plan to manually reboot
  created. Do not enable automatic reboot.
