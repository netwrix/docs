# Exchange2K: MAPI Settings

The MAPI Settings page is used to enter configurations to connect to target Exchange servers. By
default, Access Analyzer connects to Exchange using System Attendant. For Exchange 2010 and 2013, a
mailbox and a client access server need to be entered in order to make a MAPI connection. These
settings only need to be configured if not configured at the Global Settings level. It is a wizard
page for the categories of:

- Exchange Organization > Users
- Mailbox Stores
- Public Folders
- OrphanedMailboxes
- OrphanedPublicFolders

![Exchange 2K+ Data Collector Wizard MAPI Settings page](/img/product_docs/accessanalyzer/admin/datacollector/exchange2k/mapisettings.webp)

Configure the Connection Setting by selecting from the following:

- Use Global settings:
- System Attendant (2003 & 2007)
- Use the mailbox associated with the Windows account that Access Analyzer is run with
- Exchange Mailbox (2010 and newer)
- Client Access Server

Enter a server to Test Connection Setting:

- Exchange Server – Enter the Exchange Mailbox Server to use to test the connection setting to make
  sure that there is access to the server entered
- Test connection setting – Click to test the connection to the Exchange server

The box at the bottom of the page displays information regarding the test connection in progress.
