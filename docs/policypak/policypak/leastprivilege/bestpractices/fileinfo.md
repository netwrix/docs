# Deeper Dive on File Info

The __File Info Condition__ enables you to match inner criteria of your EXE or MSI. In this example, we have selected the __Process Monitor__, and the __File Info__ and __Product Info__ have been populated.

![A screenshot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/bestpractices/deeper_dive_on_file_info.png)

The MMC-based File Info editor can read file attributes and perform work depending on the internal values of the program.

- __File Info Name__ and __File Info Version__ in the Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager GUI correspond to __File description__ and __File version__ in the file’s internal values, as highlighted in red in these examples.
- __Product Info Name__ and __Product Info Version__ in the Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager GUI correspond to __Product Name__ and __Product Version__ in the file’s internal values, as highlighted in blue in these examples.

![A screenshot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/bestpractices/deeper_dive_on_file_info_1.png)

This screen shot shows an older iTunes Setup as an additional example.

![A screenshot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/bestpractices/deeper_dive_on_file_info_2.png)

MSI files have different characteristics than EXE files, so Endpoint Policy Manager Least Privilege Manager has a different GUI when you are using the __File Match__ condition. Here you can see the MSI and File Match GUI after Skype Installer MSI has been selected.

![A screenshot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/bestpractices/deeper_dive_on_file_info_3.png)

Getting the product code from the file system isn’t possible, which is why you need the Endpoint Policy Manager File Information Viewer.

![A screenshot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/bestpractices/deeper_dive_on_file_info_4.png)

To get to the information you need, use the Endpoint Policy Manager File Information Viewer (found in the Extras folder in the Download) and select the application to see some of the MSI internals, as shown here.

Product Info match for MSI files will match on all the fields highlighted in red:

- Product Version
- Manufacturer
- Product Code
- Upgrade Code

![A screenshot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/bestpractices/deeper_dive_on_file_info_5.png)

One way to use File Info match could be to make a rule that says, "Allow install of Skype Setup .MSI, provided it is version 7 or later." In order to do that, you would make an MSI Combo rule with three conditions, as shown here.

![A screenshot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/bestpractices/deeper_dive_on_file_info_6.png)

The three conditions could be:

- Path Condition - the name of the File (SkypeSetup.Msi)
- Signature Condition - the digital signature of Skype Technologies S.A.
- Product Info - a version higher than 7.0

You can see the __Product Info Condition__ here. You can also see that you can add additional GUIDs for matching MSI product codes.

![A screenshot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/bestpractices/deeper_dive_on_file_info_7.png)

This makes the __Product Info Condition__ a powerful tool, when used alone or with a Combo rule.
