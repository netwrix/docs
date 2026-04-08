---
title: "Password Never Expires Custom Script"
description: "Password Never Expires Custom Script"
sidebar_position: 20
---

# Password Never Expires Custom Script

The following C# script sends an email notification to the specified administrator when an Active
Directory account is set to have its password never expire.

The following environmental variables must be added to the script prior to execution:

- SMTPHOST – Name of the organization’s SMTP server
- SMTPPORT – Port used by the organization’s SMTP server
- SMTPENABLESSL – Indicates whether SSL is enabled or disabled on the SMTP server
  - False = Do not use SSL
  - True = Use SSL
- SMTPFROM – Valid email account sending the email to the recipient
- SMTPID – Valid username for SMTP server within the user's environment
- SMTPPwD – Valid password for the username above

In the Templates > Actions folder in the Navigation pane, the _ADChanges: Notify Admin that account
now has Password Never Expires_ template is preconfigured to use this action script.

[Copy](<javascript:void(0);>)

```
namespace ScriptNamespace
{
using System;
using System.Collections;
using System.IO;
using System.Text;
using SI.Common.Messages;
using SI.SIMonitor.ConsoleMessages.Helpers;
using System.Net.Mail;
using System.DirectoryServices; 
public class ScriptClass
{
private const string SMTPHOST = "mail.MyDomain.com";
private const int SMTPPORT = 25;
private const bool SMTPENABLESSL = false;
private const bool SMTPUSEDEFAULTCREDENTIALS = true;
private const bool SMTPHTML = true;
private const string SMTPFROM = "From@MyDomain.by";
private const string SMTPID = "username";
private const string SMTPPWD = "password";
private EventConsumerHelper helper = null;
private const string kEmailAttribute = "mail";
private const string kAccountExpiresAttr = "accountExpires";
private const string kAccountExpiresValue = "account never expires"; 
/// Required class constructor 
public ScriptClass (EventConsumerHelper ecHelper)
{
this.helper = exHelper;
} 
public virtual void ScriptMain()
{
string SMTPTO = GetStringAttribute(helper.Perpetrator,kEmailAttribute);
if (strong.IsNullOrEmpty(SMTPTO))
throw new Exception ("AD attribute 'email' is empty); 
string oldAttValue =GetAttributeFromHash(helper.OldAttributes,kAccountExpiresAttr);
if (!string.IsNullOrEmpty(oldAttValue))
if (oldAttValue.ToLower().Equals(kAccountExpiresValue))
return; 
string newAttValue = 
GetAttributeFromHash(helper.NewAttributes,kAccountExpiresAttr);
if (string.IsNullOrEmpty(newAttValue))
return; 
if (!newAttValue.ToLower().Equals(kAccountExpiresValue))
Return 
MailMessage msg = new MailMessage();
msg.From = new MailAddress(SMTPFROM);
msg.To.Add(SMTPTO);
msg.Priority = MailPriority.High;
msg.Subject = helper.EventNameTranslated; 
StringBuilder sb = new StringBuilder();
sb.AppendLine("<html>");
sb.AppendLine("<body>");
sb.AppendLine(String.Format("EventName: {0}<br>", helper.EventName));
sb.AppendLine(String.Format("TimeLoggedUtc: {0}<br>", helper.TimeLoggedUtc.ToString("MMMM d, yyyy h:mm:ss tt");
sb.AppendLine(String.Format("Account: {0} now has 'Password Never Expires' option<br>", helper.DN));
sb.AppendLine(String.Format("Perpetrator: {0}<br>", helper.PerpetratorName));
sb.AppendLine("</body>");
sb.AppendLine("</html>");
string body = sb.ToString();
msg.Body = body;
msg.IsBodyHtml = SMTPHTML;
SmtpClient client = new SmtpClient();
client.Host = SMTPHOST;
client.Port = SMTPPORT;
client.EnableSsl = SMTPENABLESSL;
client.UseDefaultCredentials = SMTPUSEDEFAULTCREDENTIALS;
if (!SMTPUSEDEFAULTCREDENTIALS)
{
client.Credentials = new System.Net.NetworkCredential(SMTPID, SMTPPWD);
}
client.DeliveryMethod = SmtpDeliveryMethod.Network;
client.Send(msg);
} 
private string GetStringAttribute(string dn, string AttributeName)
{
string result = string.Empty;
try
{
DirectoryEntry root = new DirectoryEntry();
using (DirectorySearcher searcher = new DirectorySearcher(root))
{
searcher.Filter = "(distinguishedName=" + dn + ")";
searcher.PropertiesToLoad.Clear();
searcher.ReferralChasing = ReferralChasingOption.All;
searcher.PropertiesToLoad.Add(AttributeName);
searcher.ClientTimeout = new TimeSpan(0, 0, 10);
var searchResult = searcher.FindOne();
if (searchResult != null)
{
if (searchResult.Properties.Contains(AttributeName))
{
result = searchResult.Properties[AttributeName][0] as string;
}
}
}
}
catch { }
return result;
}
private string GetAttributeFromHash(System.Collections.Hashtable attributes, string attributename)
{
foreach (var att in attributes)
{
System.Collections.DictionaryEntry de = ((System.Collections.DictionaryEntry)(att));
if ((de.Key != null))
{
string attrName = de.Key.ToString();
if (!string.IsNullOrEmpty(attrName))
{
if (attrName.Equals(attributename))
{
if (de.Value == null)
return string.Empty;
else
return de.Value.ToString();
}
}
}
}
return string.Empty;
}
}
}
```
