---
title: "ISMSGateway Members for Custom SMS Gateways"
description: "Review the ISMSGateway, ShortMessage, and SendSmsMessageResult members that you implement to define a custom SMS gateway in Directory Manager."
keywords:
  - ISMSGateway members
  - custom SMS gateway
  - ShortMessage class
  - SendSmsMessageResult class
  - Directory Manager SMS gateway
sidebar_position: 30
---

# ISMSGateway Members for Custom SMS Gateways

To define a custom gateway, you must implement the following ISMSGateway members:

- [ISmsGateway.AccountId Property](/docs/directorymanager/11.0/signin/smsgateway/custom/accountid.md)
- [ISmsGateway.Clone Method](/docs/directorymanager/11.0/signin/smsgateway/custom/clone.md)
- [ISmsGateway.Password Property](/docs/directorymanager/11.0/signin/smsgateway/custom/password.md)
- [ISmsGateway.ProxyDomain Property](/docs/directorymanager/11.0/signin/smsgateway/custom/proxydomain.md)
- [ISmsGateway.ProxyHostName Property](/docs/directorymanager/11.0/signin/smsgateway/custom/proxyhostname.md)
- [ISmsGateway.ProxyPassword](/docs/directorymanager/11.0/signin/smsgateway/custom/proxypassword.md)
- [ISmsGateway.ProxyPort](/docs/directorymanager/11.0/signin/smsgateway/custom/proxyport.md)
- [ISmsGateway.ProxyUsername](/docs/directorymanager/11.0/signin/smsgateway/custom/proxyusername.md)
- [ISmsGateway.SendShortMessage](/docs/directorymanager/11.0/signin/smsgateway/custom/sendshortmessage.md)
- [ISmsGateway.TestConnection Method (SMS Gateway API)](/docs/directorymanager/11.0/signin/smsgateway/custom/testconnection.md)
- [ISmsGateway.TestCredentials Method (SMS Gateway API)](/docs/directorymanager/11.0/signin/smsgateway/custom/testcredentials.md)
- [ISmsGateway.TestProxy Method (SMS Gateway API)](/docs/directorymanager/11.0/signin/smsgateway/custom/testproxy.md)
- [ISmsGateway.Url Property for Custom SMS Gateways](/docs/directorymanager/11.0/signin/smsgateway/custom/url.md)
- [ISmsGateway.UserId Property for Custom SMS Gateways](/docs/directorymanager/11.0/signin/smsgateway/custom/userid.md)

- ShortMessage
  ([ShortMessage class](/docs/directorymanager/11.0/signin/smsgateway/custom/class/class.md))

    - [ShortMessage.AccessCode Property](/docs/directorymanager/11.0/signin/smsgateway/custom/class/accesscode.md)
    - [ShortMessage.MaxLength field](/docs/directorymanager/11.0/signin/smsgateway/custom/class/maxlength.md)
    - [ShortMessage.Message property](/docs/directorymanager/11.0/signin/smsgateway/custom/class/message.md)
    - [ShortMessage.PhoneNumbers Property (SMS Gateway API)](/docs/directorymanager/11.0/signin/smsgateway/custom/class/phonenumbers.md)
    - [ShortMessage.ReferenceId Property (SMS Gateway API)](/docs/directorymanager/11.0/signin/smsgateway/custom/class/referenceid.md)
    - [ShortMessage.Validate Method (SMS Gateway API)](/docs/directorymanager/11.0/signin/smsgateway/custom/class/validate.md)

- SendSmsMessageResult
  ([SendSmsMessageResult class](/docs/directorymanager/11.0/signin/smsgateway/custom/class/class_1.md))
    - [SendSmsMessageResult.ExceptionMessage](/docs/directorymanager/11.0/signin/smsgateway/custom/class/exceptionmessage.md)
    - [SendSmsMessageResult.Message property](/docs/directorymanager/11.0/signin/smsgateway/custom/class/message_1.md)
    - [SendSmsMessageResult.Success property](/docs/directorymanager/11.0/signin/smsgateway/custom/class/success.md)

**See Also**

- [Implement and Deploy a Custom SMS Gateway in Directory Manager](/docs/directorymanager/11.0/signin/smsgateway/implementcustom.md)
