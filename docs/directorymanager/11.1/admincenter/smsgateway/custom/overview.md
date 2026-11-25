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

- [ISmsGateway.AccountId Property](/docs/directorymanager/11.1/admincenter/smsgateway/custom/accountid.md)
- [ISmsGateway.Clone Method](/docs/directorymanager/11.1/admincenter/smsgateway/custom/clone.md)
- [ISmsGateway.Password Property](/docs/directorymanager/11.1/admincenter/smsgateway/custom/password.md)
- [ISmsGateway.ProxyDomain Property](/docs/directorymanager/11.1/admincenter/smsgateway/custom/proxydomain.md)
- [ISmsGateway.ProxyHostName Property](/docs/directorymanager/11.1/admincenter/smsgateway/custom/proxyhostname.md)
- [ISmsGateway.ProxyPassword](/docs/directorymanager/11.1/admincenter/smsgateway/custom/proxypassword.md)
- [ISmsGateway.ProxyPort](/docs/directorymanager/11.1/admincenter/smsgateway/custom/proxyport.md)
- [ISmsGateway.ProxyUsername](/docs/directorymanager/11.1/admincenter/smsgateway/custom/proxyusername.md)
- [ISmsGateway.SendShortMessage](/docs/directorymanager/11.1/admincenter/smsgateway/custom/sendshortmessage.md)
- [ISmsGateway.TestConnection Method (SMS Gateway API)](/docs/directorymanager/11.1/admincenter/smsgateway/custom/testconnection.md)
- [ISmsGateway.TestCredentials Method (SMS Gateway API)](/docs/directorymanager/11.1/admincenter/smsgateway/custom/testcredentials.md)
- [ISmsGateway.TestProxy Method (SMS Gateway API)](/docs/directorymanager/11.1/admincenter/smsgateway/custom/testproxy.md)
- [ISmsGateway.Url Property for Custom SMS Gateways](/docs/directorymanager/11.1/admincenter/smsgateway/custom/url.md)
- [ISmsGateway.UserId Property for Custom SMS Gateways](/docs/directorymanager/11.1/admincenter/smsgateway/custom/userid.md)

- ShortMessage ([ShortMessage class](/docs/directorymanager/11.1/admincenter/smsgateway/custom/sendsmsmessageresult/class.md))

    - [ShortMessage.AccessCode property](/docs/directorymanager/11.1/admincenter/smsgateway/custom/shortmessage/accsscode.md)
    - [ShortMessage.MaxLength field](/docs/directorymanager/11.1/admincenter/smsgateway/custom/shortmessage/maxlength.md)
    - [ShortMessage.Message property](/docs/directorymanager/11.1/admincenter/smsgateway/custom/shortmessage/message.md)
    - [ShortMessage.PhoneNumbers Property (SMS Gateway API)](/docs/directorymanager/11.1/admincenter/smsgateway/custom/shortmessage/phonenumbers.md)
    - [ShortMessage.ReferenceId Property (SMS Gateway API)](/docs/directorymanager/11.1/admincenter/smsgateway/custom/shortmessage/referenceid.md)
    - [ShortMessage.Validate Method (SMS Gateway API)](/docs/directorymanager/11.1/admincenter/smsgateway/custom/shortmessage/validate.md)

- SendSmsMessageResult ([SendSmsMessageResult class for custom SMS gateways](/docs/directorymanager/11.1/admincenter/smsgateway/custom/shortmessage/class.md))
    - [SendSmsMessageResult.ExceptionMessage](/docs/directorymanager/11.1/admincenter/smsgateway/custom/sendsmsmessageresult/exceptionmessage.md)
    - [SendSmsMessageResult.Message property](/docs/directorymanager/11.1/admincenter/smsgateway/custom/sendsmsmessageresult/message.md)
    - [SendSmsMessageResult.Success property](/docs/directorymanager/11.1/admincenter/smsgateway/custom/sendsmsmessageresult/success.md)