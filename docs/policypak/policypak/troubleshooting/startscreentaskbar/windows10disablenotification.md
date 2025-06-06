# How to Disable the "How do you want to open this? Keep using this app" Notification in Windows 10

When you install a new app in Windows 10 you may see a notification letting you know that you have a new app that can open an application that already has a default file association defined. Below are some examples of how the notifications appear and also two ways to disable these "New App Installed" notifications.

Notification Examples:

![76_1_image-20200728223133-1](/static/img/product_docs/policypak/policypak/troubleshooting/startscreentaskbar/76_1_image-20200728223133-1.png)

![76_3_image-20200728223133-2](/static/img/product_docs/policypak/policypak/troubleshooting/startscreentaskbar/76_3_image-20200728223133-2.png)

![76_5_image-20200728223134-3](/static/img/product_docs/policypak/policypak/troubleshooting/startscreentaskbar/76_5_image-20200728223134-3.png)

## OPTION1: Using Group Policy Preferences > Registry

__Step 1 –__ Create a new GPO for Group Policy Preferences and give it a descriptive name.

__Step 2 –__ Select Computer Configuration > Preferences > Windows Settings > Registry

__Step 3 –__ Right-click on Registry and choose New > Registry Item

__Step 4 –__ Create the Registry policy item using the values below as a guide.

Hive: HKEY\_LOCAL\_MACHINE  
Key Path: SOFTWARE\Policies\Microsoft\Windows\Explorer  
Value name: NoNewAppAlert  
Value type: REG\_DWORD  
Value data: 00000001

![76_7_image-20200728223134-4](/static/img/product_docs/policypak/policypak/troubleshooting/startscreentaskbar/76_7_image-20200728223134-4.png)

Policy should look like below when created:

![76_9_image-20200728223134-5_950x59](/static/img/product_docs/policypak/policypak/troubleshooting/startscreentaskbar/76_9_image-20200728223134-5_950x59.png)

__Step 5 –__ Lastly, apply policy to computer OU or domain where you want New App notifications to be disabled.

## OPTION2: Using Endpoint Policy Scripts Manager

__Step 1 –__ Create a new GPO for Netwrix Endpoint Policy Manager (formerly PolicyPak) Scripts Manager and give it a descriptive name.

__Step 2 –__ Select Computer Configuration > PolicyPak > Scripts Manager

__Step 3 –__ Right-click on Scripts Manager and select "Add Policy…"

![76_11_image-20200728223134-6](/static/img/product_docs/policypak/policypak/troubleshooting/startscreentaskbar/76_11_image-20200728223134-6.png)

__Step 4 –__ At the "Specify policy target" screen stick with the default "Apply this policy to the computer (default)" then click "Next".

![76_13_image-20200728223134-7](/static/img/product_docs/policypak/policypak/troubleshooting/startscreentaskbar/76_13_image-20200728223134-7.png)

__Step 5 –__ At the "On apply action" screen select "PowerShell script" from the dropdown and then copy in the text below then click "Next".

```
# Disable New app Alerts    if((Test-Path -LiteralPath  
                        "HKLM:\SOFTWARE\Policies\Microsoft\Windows\Explorer") -ne $true)  
                        { New-Item "HKLM:\SOFTWARE\Policies\Microsoft\Windows\Explorer"  
                        -force -ea SilentlyContinue };    New-ItemProperty -LiteralPath  
                        'HKLM:\SOFTWARE\Policies\Microsoft\Windows\Explorer'  
                        -Name 'NoNewAppAlert' -Value 1 -PropertyType DWord -Force  
                -ea SilentlyContinue;
```

![76_15_image-20200728223134-8](/static/img/product_docs/policypak/policypak/troubleshooting/startscreentaskbar/76_15_image-20200728223134-8.png)

__Step 6 –__ OPTIONAL: At the "On revert action" screen select "PowerShell script" from the dropdown and then copy in the text below then click "Next".

```
#Enable new app alerts    if((Test-Path -LiteralPath "HKLM:\SOFTWARE\Policies\Microsoft\Windows\Explorer") -ne $true)   
{ New-Item "HKLM:\SOFTWARE\Policies\Microsoft\Windows\Explorer" -force -ea SilentlyContinue }  
;    New-ItemProperty -LiteralPath 'HKLM:\SOFTWARE\Policies\Microsoft\Windows\Explorer'  
                        -Name 'NoNewAppAlert' -Value 0 -PropertyType DWord -Force -ea  
                SilentlyContinue;
```

![76_17_image-20200728223134-9](/static/img/product_docs/policypak/policypak/troubleshooting/startscreentaskbar/76_17_image-20200728223134-9.png)

__Step 7 –__ At the "Specify process mode" screen select the "Once or when forced" option then click next.

![76_19_image-20200728223134-10](/static/img/product_docs/policypak/policypak/troubleshooting/startscreentaskbar/76_19_image-20200728223134-10.png)

__Step 8 –__ Give the policy a descriptive name and then click finish.

__Step 9 –__ Lastly, apply policy to computer OU or domain where you want New App notifications to be disabled.
