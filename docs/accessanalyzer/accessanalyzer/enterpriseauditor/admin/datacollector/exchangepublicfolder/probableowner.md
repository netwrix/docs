# ExchangePublicFolder: Probable Owner

The Probable Owner Settings page provides configuration options to determine an owner. It is enabled when the Probable Owner property is selected on the Properties page. See the [ExchangePublicFolder: Properties](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangepublicfolder/properties.md) topic for additional information.

![Exchange Public Folder Data Collector Wizard Probable Owner page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangepublicfolder/probableowner.png)

In the Determine owner section, select the desired option to specify what setting to use to determine an owner:

- Determine owner from folder hierarchy – Select to determine the probable owner with a weight of one hundred percent on file hierarchy
- Determine owner from content count – Select to determine the probable owner with a weight of one hundred percent of content count
- Determine owner from content size – Select to determine the probable owner with weight of 100 percent on content size
- Use custom weights – Select to enable the __Result weights__ option to assign custom weights to the ownership categories

  ![Probable Owner Settings window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangepublicfolder/probableownersettingswindow.png)
- Result weights – This option is enabled when the __Use custom weights__ option is selected. Click the ellipses to open the Probable Owner Settings window and assign ownership weights to distribute between the parameters.

In the Exclusions section, select one or more of the following checkboxes to specify exclusions:

- Exclude locked out users
- Exclude disabled users
- Exclude Zombie Owners
- Exclude users from analysis – Select this checkbox to enable the Exclude users list and add users for exclusion.

  - Add user – Enter a user in the box and click __Add user__ to add the user to the exclusion list
  - Import from file – Click __Import from file__ to open the Import File Dialog page and browse for a file to import
  - Select from GAL – Click __Select from GAL__ to select a user from the Global Address Book
  - Clear list – Click __Clear list__ to remove all users from the Exclude users list
  - Remove selected – Select a user or users to remove from the Exclude users list and click __Remove selected__ to remove the users

In the Output Options section, select the desired output option:

- Get one most probable owner – Return one probable owner
- Get probable owners with relative deviation to the most probable owner – Return probable owners based on the deviation from percentage from the most probable owner

  - Maximum deviation [number] percents – Use the arrow buttonss to enter the desired percent of deviation from the most probable owner from which to return probable owners
- Get multiple probable owners – Return multiple probable owners

  - Count – Use the arrow buttons to enter the desired number of probable owners to return
