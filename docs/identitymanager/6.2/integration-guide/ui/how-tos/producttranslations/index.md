# Import Product Translations into Identity Manager

This topic shows how to import product translations into Identity Manager. A product translation
means a translation of a Identity Manager's component, for example a button display message, not the
translation of a configured component.

## JSON Translation File

The translations are given to Identity Manager in a JSON file, through the configuration deployment
tool. This section first explains how to write the JSON file, then how to use it with the deployment
tool.

**JSON translation file format**

Example with the translation keys`accessCertificationReview.recommendation.manuallyAuthorized`,
`app.common.button.create.label` and `app.common.labels.whenCreated`:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
{
    "accessCertificationReview.recommendation.manuallyAuthorized": "<Manually authorized>",
    "app.common.button.create.label": "<Create>",
    "app.common.labels.whenCreated": "<Request Date>"
}
```

The JSON file must only contain string properties: no object, array or number.

The properties' name must match the wanted translation keys.

**Find the translation keys**

A translation key is an identifier for a given translation: Identity Manager uses those keys to find
the translation it needs in the interface.

To find these keys, go on [Netwrix Portal](https://www.netwrix.com/sign_in.html?rf=my_products.html)
, download the SDK of your product version and unzip the folder.

The Translations folder contains two JSON files: en-US.json and fr-FR.json. These files both contain
all the translation keys and respectively contain English (US) and french translations.

The configuration tool throws an error only when the format is wrong, not the keys: if you do not
write correct keys, the file will be imported anyway without a warning. Netwrix strongly recommends
to copy paste the keys from the JSON files in Translations.

### Key overriding

There is no need to rewrite all the keys if you do not want to modify all the translations: in your
JSON file, put only the keys of the translations you need to modify.

For languages other than french and English (US), when you do not override a given translation,
Identity Manager uses the English (US) one.

### JSON translation file name

Product translations must be linked to a defined Language in the configuration. For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<Language Code="en-US" IndicatorNumber="1" JsonPath="translation.en-US.json" />
```

A translation file must be named: translation.`language code`.json.

For example, for en-US, the translation file must be named translation.en-US.json.

## Use the Configuration Tool to Import the JSON Translation File

Place the JSON file described in the previous part in your XML configuration folder: you can place
it anywhere in it, but the root is recommended.

Deploy your configuration as usual but add the --product-translation argument to your command line.

The custom product translations are now imported and usable by Identity Manager.

## Export the Translation File

If you need to export the custom product translations of your languages, export your configuration
as usual but add the `--export-translation` argument to your command line.

It will generate the translation files at the root of your XML configuration folder.
