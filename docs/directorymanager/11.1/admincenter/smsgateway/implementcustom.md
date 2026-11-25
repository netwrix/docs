---
title: "Implement and Deploy a Custom SMS Gateway in Directory Manager"
description: "Implement the ISMSGateway interface, add MEF metadata, and register a custom SMS gateway so you can create accounts for it in Directory Manager."
keywords:
  - custom SMS gateway
  - ISMSGateway interface
  - Custom Gateway API
  - Managed Extensibility Framework
  - SMS gateway deployment
sidebar_position: 20
---

# Implement and Deploy a Custom SMS Gateway in Directory Manager

You can integrate with additional SMS gateways using the Custom Gateway API. After creating a
gateway, you can add an account for it. See
[Create an SMS Gateway Account](manage.md#create-an-sms-gateway-account).

## Implement a Custom SMS Gateway

1. Define a class that implements the **ISMSGateway interface**, which is defined in the
   **Imanami.PublicInterfaces** namespace (_Imanami.PublicInterfaces.dll_). The core method for
   dispatching text messages makes use of objects that are defined in the
   **Imanami.directorymanager.DataTransferObjects.DataContracts.SMS** namespace
   (_Imanami.directorymanager.DataTransferObjects.dll_).  
   The DLLs for both the namespaces are available at the Directory Manager installation directory. The
   following table lists the **ISMSGateway members** that you must implement:

    | Member                                                            | Description                                                                                                                                                                                                                                                                                                                 |
    | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | [ISmsGateway.SendShortMessage](/docs/directorymanager/11.1/admincenter/smsgateway/custom/sendshortmessage.md) method | Takes as input the [ShortMessage class](/docs/directorymanager/11.1/admincenter/smsgateway/custom/sendsmsmessageresult/class.md) object, which defines elements of the text message, sends messages to the target recipients, and returns the [SendSmsMessageResult class for custom SMS gateways](/docs/directorymanager/11.1/admincenter/smsgateway/custom/shortmessage/class.md) object, which contains message delivery status and exception details |
    | [ISmsGateway.TestCredentials Method (SMS Gateway API)](/docs/directorymanager/11.1/admincenter/smsgateway/custom/testcredentials.md) method   | Returns a boolean value indicating whether the credentials for communicating with the SMS gateway are valid.                                                                                                                                                                                                                |
    | [ISmsGateway.TestConnection Method (SMS Gateway API)](/docs/directorymanager/11.1/admincenter/smsgateway/custom/testconnection.md) method     | Returns a boolean value indicating whether the connection with the SMS gateway is established successfully.                                                                                                                                                                                                                 |
    | [ISmsGateway.TestProxy Method (SMS Gateway API)](/docs/directorymanager/11.1/admincenter/smsgateway/custom/testproxy.md) method               | Returns a boolean value indicating whether the given proxy settings are valid.                                                                                                                                                                                                                                                |
    | [ISmsGateway.Clone Method](/docs/directorymanager/11.1/admincenter/smsgateway/custom/clone.md) method                       | Returns the member-wise clone of the ISMSGateway interface.                                                                                                                                                                                                                                                                 |
    | [ISmsGateway.AccountId Property](/docs/directorymanager/11.1/admincenter/smsgateway/custom/accountid.md) property             | Gets or sets the account ID for connecting to the SMS gateway.                                                                                                                                                                                                                                                              |
    | [ISmsGateway.Password Property](/docs/directorymanager/11.1/admincenter/smsgateway/custom/password.md) property               | Gets or sets the password of the user name assigned by the SMS gateway provider.                                                                                                                                                                                                                                            |
    | [ISmsGateway.Url Property for Custom SMS Gateways](/docs/directorymanager/11.1/admincenter/smsgateway/custom/url.md) property                         | Gets or sets the URL that the SMS gateway provides for sending messages.                                                                                                                                                                                                                                                    |
    | [ISmsGateway.UserId Property for Custom SMS Gateways](/docs/directorymanager/11.1/admincenter/smsgateway/custom/userid.md) property                   | Gets or sets the user name assigned by the SMS gateway provider.                                                                                                                                                                                                                                                     |
    | [ISmsGateway.ProxyHostName Property](/docs/directorymanager/11.1/admincenter/smsgateway/custom/proxyhostname.md) property     | Gets or sets the host name of the proxy server.                                                                                                                                                                                                                                                                             |
    | [ISmsGateway.ProxyPort](/docs/directorymanager/11.1/admincenter/smsgateway/custom/proxyport.md) property             | Gets or sets the port number used by the proxy server.                                                                                                                                                                                                                                                                      |
    | [ISmsGateway.ProxyUsername](/docs/directorymanager/11.1/admincenter/smsgateway/custom/proxyusername.md) property     | Gets or sets the user name for connecting to the proxy server.                                                                                                                                                                                                                                                               |
    | [ISmsGateway.ProxyPassword](/docs/directorymanager/11.1/admincenter/smsgateway/custom/proxypassword.md) property     | Gets or sets the password of the user account used for connecting to the proxy server.                                                                                                                                                                                                                         |
    | [ISmsGateway.ProxyDomain Property](/docs/directorymanager/11.1/admincenter/smsgateway/custom/proxydomain.md) property         | Gets or sets the domain name or IP address of the proxy server.                                                                                                                                                                                                                                                             |

2. Reference **System.ComponentModel.Composition**  
   (_System.ComponentModel.Composition.dll_).

    This namespace is required because **ISMSGateway** is built on top of Microsoft Extensibility
    Framework (MEF) and at the core uses it for most of its functionality.

## Deploy a Custom SMS Gateway

After you have implemented all members of the **ISMSGateway** interface for your custom SMS gateway,
you must add to it the metadata for the MEF exporting interface. This metadata contains basic
attributes that define the custom gateway assembly.

### Adding the MEF Exporting Interface

The following example code shows how to set the basic defining attributes of the SMS gateway. You must
add these attributes before the class definition.

```
namespace ClickatellCustomSMSGateway 
{
/// Exporting interface of ISMSGateway 
[Export(typeof(ISmsGateway))] 
/// The syntax of initializing the meta data attributes 
// [SMSGatewayMetadataAttribute ( AccountIdRequired=Is Account ID required by the SMS Gateway? Possible values can be true or False, 
// Description = "a description of the Custom SMS Gateway", 
// Name="Name by which the SMS Gateway should appear in GroupID Management Console", 
// PasswordRequired= Does the SMS Gateway require a password for connecting with it? Possible values can be true or False, 
// UserIdRequired=Does the SMS Gateway require a user ID for connecting with it? Possible values can be true or False,      
// UrlRequired=Does the SMS Gateway expose some URL for sending text messages? Possible values can be true or False, 
// ProxyDomainRequired=Does a proxy domain require for communicating with the SMS Gateway? Possible values can be true or False,      
// ProxyHostNameRequired=Is proxy host name required for connecting with the proxy server? Possible values can be true or False, 
// ProxyPasswordRequired=Does the proxy server require a password for connecting with it? Possible values can be true or False,      
// ProxyPortRequired=Does the port number required for connecting with the proxy server? Possible values can be true or False, 
// ProxyUsernameRequired=Does the proxy server require a user name for connecting with it? Possible values can be true or False,,      
// URL="The address provided by SMS gateway for sending messages. If no URL is required by the SMS gateway, provide an empty string like """)]
/// Meta data attributes initialization 
[SMSGatewayMetadataAttribute ( AccountIdRequired=false, Description = "Clickatell SMS Gateway",Name="Clickatell",PasswordRequired=true, UserIdRequired=true,UrlRequired=true,ProxyDomainRequired=false,ProxyHostNameRequired=false,      ProxyPasswordRequired=false,ProxyPortRequired=false, ProxyUsernameRequired=false,URL="http://api.clickatell.com/http/sendmsg?")] 
Class ClickatellCustomSMSGatewayBasic : ISMSGateway 
{
...
...
...
}
}

```

### Register your Custom SMS Gateway with Directory Manager

1. On the Directory Manager server, go to:  
   X:\Program Files\Imanami\GroupID
   11.0\GroupIDDataService\Inetpub\GroupIDDataService\Web\SMSGateways\  
   (X represents the Directory Manager installation drive).
2. Create a new folder here using the name specified for the **Name** SMS gateway metadata
   attribute.
3. Compile and generate the DLL file for your custom SMS gateway.
4. Restart IIS services by typing the following command in the **Run** dialog box:  
   _iisreset_

If the SMS gateway is successfully registered, it is listed in the **Gateway Type** list (on
the **Create SMS Gateway** page) for selection when you create an SMS gateway account.