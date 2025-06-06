# Implement and Deploy a Custom SMS Gateway

You can integrate with additional SMS gateways using the Custom Gateway API. After creating a gateway, you can add an account for it. See the [Create an SMS Gateway Account](/docs/product_docs/groupid/groupid/admincenter/smsgateway/manage.md#Create-an-SMS-Gateway-Account) topic.

What do you want to do?

- [Implement a Custom SMS Gateway](#Implement-a-Custom-SMS-Gateway)
- [Deploy a Custom SMS Gateway](#Deploy-a-Custom-SMS-Gateway)

## Implement a Custom SMS Gateway

1. Define a class that implements the __ISMSGateway interface__ which is defined in the __Imanami.PublicInterfaces__ namespace (_Imanami.PublicInterfaces.dll_).
   The core method for dispatching text messages makes use of objects that are defined in the __Imanami.GroupID.DataTransferObjects.DataContracts.SMS__ namespace (_Imanami.GroupID.DataTransferObjects.dll_).  
   The DLLs for both the namespaces are available at the Directory Manager installation directory. A list of __ISMSGateway members__ that you must implement are discussed in
   the following table:

   | Member | Description |
   | --- | --- |
   | [ISmsGateway.SendShortMessage](/docs/product_docs/groupid/groupid/admincenter/smsgateway/custom/sendshortmessage.md) method | Takes as input the [ShortMessage class](/docs/product_docs/groupid/groupid/admincenter/smsgateway/custom/shortmessage/class.md) object, which defines elements of the text message, sends messages to the target recipients, and returns the [SendSmsMessageResult class](/docs/product_docs/groupid/groupid/admincenter/smsgateway/custom/sendsmsmessageresult/class.md) object, which contains  message delivery status and exception details |
   | [ISmsGateway.TestCredentials](/docs/product_docs/groupid/groupid/admincenter/smsgateway/custom/testcredentials.md) method | Returns a boolean value indicating whether the credentials for communicating with the SMS gateway are valid. |
   | [ISmsGateway.TestConnection](/docs/product_docs/groupid/groupid/admincenter/smsgateway/custom/testconnection.md) method | Returns a boolean value indicating whether the connection with the SMS gateway is established successfully. |
   | [ISmsGateway.TestProxy](/docs/product_docs/groupid/groupid/admincenter/smsgateway/custom/testproxy.md) method | Returns a boolean value informing whether the given proxy setting are valid. |
   | [ISmsGateway.Clone](/docs/product_docs/groupid/groupid/admincenter/smsgateway/custom/clone.md) method | Returns the member-wise clone of the ISMSGateway interface. |
   | [ISmsGateway.AccountId](/docs/product_docs/groupid/groupid/admincenter/smsgateway/custom/accountid.md) property | Gets or sets the account ID for connecting to the SMS gateway. |
   | [ISmsGateway.Password](/docs/product_docs/groupid/groupid/admincenter/smsgateway/custom/password.md) property | Gets or sets the password of the user name assigned by the SMS gateway provider. |
   | [ISmsGateway.Url](/docs/product_docs/groupid/groupid/admincenter/smsgateway/custom/url.md) property | Gets or sets the URL that the SMS gateway provides for sending messages. |
   | [ISmsGateway.UserId](/docs/product_docs/groupid/groupid/admincenter/smsgateway/custom/userid.md) property | Gets or sets the user name assigned to you by the SMS gateway provider. |
   | [ISmsGateway.ProxyHostName](/docs/product_docs/groupid/groupid/admincenter/smsgateway/custom/proxyhostname.md) property | Gets or sets the host name of the proxy server. |
   | [ISmsGateway.ProxyPort](/docs/product_docs/groupid/groupid/admincenter/smsgateway/custom/proxyport.md) property | Gets or sets the port number used by the proxy server. |
   | [ISmsGateway.ProxyUsername](/docs/product_docs/groupid/groupid/admincenter/smsgateway/custom/proxyusername.md) property | Gets or set the user name for connecting to the proxy server. |
   | [ISmsGateway.ProxyPassword](/docs/product_docs/groupid/groupid/admincenter/smsgateway/custom/proxypassword.md) property | Gets or sets the password of the user account that will be used for connecting to the proxy server. |
   | [ISmsGateway.ProxyDomain](/docs/product_docs/groupid/groupid/admincenter/smsgateway/custom/proxydomain.md) property | Gets or sets the domain name or IP address of the proxy server. |
2. Reference __System.ComponentModel.Composition__  
   (_System.ComponentModel.Composition.dll_).

   This namespace is required as the __ISMSGateway__ is built on top of Microsoft Extensibility Framework (MEF) and at the core uses it for most of its functionality.

## Deploy a Custom SMS Gateway

After you have implemented all members of the __ISMSGateway__ interface for your custom SMS gateway, you must add to it the metadata for the MEF's importing interface. This metadata contains basic attributes that define the custom
gateway assembly.

### Adding the MEF Exporting Interface

The following example code shows how to set the SMS gateways basic, defining attributes. You must add these attributes before the class definition.

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
   X:\Program Files\Imanami\GroupID 11.0\GroupIDDataService\Inetpub\GroupIDDataService\Web\SMSGateways\  
   (X represents the Directory Manager installation drive).
2. Create a new folder here using the name that was specified for the __Name__ SMS gateway meta data attribute.
3. Compile and generate the DLL file for your custom SMS gateway.
4. Restart IIS services by typing the following command in the __Run__ dialog box:  
    _iisreset_

If the SMS gateway is successfully registered, it will get listed in the __Gateway Type__ list (on the __Create SMS Gateway__ page) for selection when creating an SMS gateway account.

__See Also__

- [SMS Gateway](/docs/product_docs/groupid/groupid/admincenter/smsgateway/overview.md)
- [ISMSGateway Members](/docs/product_docs/groupid/groupid/admincenter/smsgateway/custom/overview.md)
