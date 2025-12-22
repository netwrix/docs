---
title: "Supported Formats for Scanning & Metadata"
description: "Supported Formats for Scanning & Metadata"
sidebar_position: 10
---

# Supported Formats for Scanning & Metadata

This topic provides a comprehensive listing of all formats supported by the Sensitive Data Discovery
Add-On. The list is divided into three major categories:

- [Scan-able Formats](#scan-able-formats)
- [Metadata Only Formats](#metadata-only-formats)
- [Scans Against Files with no Extensions](#scans-against-files-with-no-extensions)

## Scan-able Formats

The Sensitive Data Discovery Add-On can identify any file type, extract text, and extract metadata
from the following formats. It will also identify file types and extract metadata of any
attachments. If the attachment’s file type is a scan-able format, then it can extract text from the
attachment as well.

### Archive

| Document Format             | Extension         |
| --------------------------- | ----------------- |
| 7-zip Archive               | .7Z               |
| Bzip 2 UNIX Compressed File | .BOZ, .BZ2, .TBZ2 |
| Bzip UNIX Compressed File   | .BZ, .TBZ         |
| Gzip Compressed Archive     | .GZ, .TGZ         |
| Java Archive                | .JAR              |
| UNIX AR Archive             | .A, .AR           |
| UNIX CPIO Archive           | .CPIO             |
| UNIX Tar                    | .TAR              |
| XZ Compression Archive      | .XZ               |
| Zip Archive                 | .ZIP              |

### Database

| Database   | Data Type                                                                                                                                                                                                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MYSQL      | BIGINT, BINARY, BIT, BLOB, CHAR, DATE, DATETIME, DECIMAL, DOUBLE, ENUM, FLOAT, INT, INTEGER, JSON, LONGBLOB, LONGTEXT, MEDIUMBLOB, MEDIUMINT, MEDIUMTEXT, NCHAR, NUMERIC, NVARCHAR, SET, SMALLINT, TEXT, TIME, TIMESTAMP, TINYBLOB, TINYINT, TINYTEXT, VARBINARY, VARCHAR, YEAR                         |
| Oracle     | ANSISTRING, ANSISTRINGFIXEDLENGTH, BFILE, BLOB, CHAR, CLOB, DATE, DATETIME, DECIMAL, DOUBLE, FLOAT, INT, INT16, INT32, INT64, INTERVALDS, INTERVALYM, LONG, LONGRAW, NCHAR, NCLOB, NUMBER, NVARCHAR2, RAW, SBYTE, SINGLE, STRING, System.String, TIMESTAMP, TIMESTAMPLTZ, VARCHAR2, VARNUMERIC, XMLTYPE |
| PostgreSQL | BIGINT, BIT, BOOLEAN, BYTEA, CHAR, CHARACTER, CHARACTER VARYING, DATE, DOUBLE PRECISION, ENUM, INTEGER, JSON, JSONB, MONEY, NUMERIC, REAL, SERIAL, SMALLINT, SMALLSERIAL, TEST, TEXT, TIMESTAMP, TIME, VARBIT, XML                                                                                      |
| SQL        | TEXT, DATE, TIME, DATETIME2, TINYINT, SMALLINT, INT, SMALLDATETIME, REAL, MONEY, DATETIME, FLOAT, NTEXT, DECIMAL, NUMERIC, SMALLMONEY, BIGINT, VARBINARY, VARCHAR, BINARY, CHAR, NVARCHAR, NCHAR, XML, SYSNAME                                                                                          |

### Document

| Document Format                                    | Extension                              |
| -------------------------------------------------- | -------------------------------------- |
| Apple iWork Pages                                  | .PAGES                                 |
| Microsoft Publisher                                | .PUB                                   |
| Microsoft Word Document / Office Open XML Document | .DOC, .DOCM, .DOCX, .DOT, .DOTM, .DOTX |
| OpenDocument: Text Document                        | .ODT, .OTH, .OTM, .OTT                 |
| OpenOffice: Writer Document                        | .SXW                                   |
| Portable Document Format                           | .PDF                                   |

### Email & Messaging

| Document Format                                | Extension                |
| ---------------------------------------------- | ------------------------ |
| Email Message / Microsoft Outlook Message      | .EML, .MBOX, .MIME, .MSG |
| Microsoft Outlook Personal Folders File Format | .OST, .PST               |

### Other

| Document Format                                                 | Extension                                         |
| --------------------------------------------------------------- | ------------------------------------------------- |
| Adobe Font Metric                                               | .ACFM, .AFM, .AMFM                                |
| Apple iBooks Author Publication Format                          | .IBOOKS                                           |
| C/C++ Object File                                               | .O                                                |
| C/C++ Shared Library/Object                                     | .SO                                               |
| Core Dump                                                       | .DMP                                              |
| Electronic Publication                                          | .EPUB                                             |
| Executable and Linkable Format                                  | .AXF, .BIN, .ELF, .KO, .MOD, .O, .PRX, .PUFF, .SO |
| Hierarchical Data Format File                                   | .H5, .HDF, .HE5                                   |
| Java Class File                                                 | .CLASS                                            |
| MATLAB Binary Data Container                                    | .MAT                                              |
| Microsoft Project                                               | .MPP, .MPT                                        |
| NetCDF (Network Common Data Form)                               | .NC                                               |
| S/MIME (Secure/Multipurpose Internet Mail Extensions)           | .P7C, .P7M                                        |
| S/MIME (Secure/Multipurpose Internet Mail Extensions) Signature | .P7S                                              |
| Transport Neutral Encapsulation Format                          | .TNEF                                             |
| TrueType Font                                                   | .TTC, .TTF                                        |

### Presentation

| Document Format                                     | Extension                                                                     |
| --------------------------------------------------- | ----------------------------------------------------------------------------- |
| Apple iWork Keynote                                 | .KEY                                                                          |
| Microsoft PowerPoint / Office Open XML Presentation | .PPA, .PPS, .PPT, .PPZ, .PPAM, .PPSM, .PPSX, .PPTM, .PPTX, .POT, .POTX, .THMX |
| OpenDocument: Presentation Document                 | .ODP, .OTP                                                                    |

### Raster Image

| Document Format                         | Extension                            |
| --------------------------------------- | ------------------------------------ |
| Graphics Interchange Format (GIF)       | .GIF, .GIFF                          |
| Joint Photographic Experts Group (JPEG) | .JFI, .JFIF, .JIF, .JPE, .JPEG, .JPG |
| Microsoft Windows Bitmap                | .BMP, .DIB                           |
| Portable Network Graphic                | .webp                                 |
| Tagged Image File Format                | .TIF, .TIFF                          |

:::note
The **FileSystem** > **0.Collection** > **1-SEEK System Scans** job can perform Optical
Character Recognition (OCR) scans for Raster image files by enabling the option on the SDD Audit
Settings page in the File System Access Auditor Data Collector Wizard. This is an option for the
Sensitive Data Scan category. See the
[1-SEEK System Scans Job](/docs/accessanalyzer/11.6/solutions/filesystem/collection/1-seek_system_scans.md)
topic for additional information.
:::


### Spreadsheet

| Document Format                        | Extension                                                                               |
| -------------------------------------- | --------------------------------------------------------------------------------------- |
| Apple iWork Numbers                    | .NUMBERS                                                                                |
| Microsoft Excel Spreadsheet            | .XLA, .XLC, .XLD, .XLL, .XLM, .XLR, .XLS, .XLT, .XLW, .XLAM, .XLSM, .XLSX, .XLTM, .XLTX |
| OpenDocument: Chart / Formula Document | .ODC, .ODF, .ODFT, .ODS, .OTC, .OTS                                                     |

### Text & Markup

| Document Format                                                | Extension               |
| -------------------------------------------------------------- | ----------------------- |
| Active Server Pages (ASP) / ASP.NET                            | .ASP, .ASPX             |
| American Newspaper Publishers Association Wire Feeds           | .ANPA                   |
| Atom + XML                                                     | .ATOM                   |
| C++ Source Code                                                | .C, .CC, .CPP, .CXX     |
| Compiled HTML                                                  | .CHM                    |
| Extensible HyperText Markup Language                           | .XHT, .XHTML, .XHTML2   |
| Extensible Markup Language                                     | .XML, .XSD, .XSL        |
| FictionBook Document                                           | .FB2                    |
| Groovy Source Code                                             | .GROOVY                 |
| HyperText Markup Language                                      | .HTM, .HTML             |
| Java Source Code                                               | .JAVA                   |
| Microsoft HTML Help                                            | .CHM                    |
| RDF Site Summary                                               | .RSS                    |
| Rich Text Format                                               | .RTF                    |
| Text File (Other)                                              | .CSV, .TEXT, .TSV, .TXT |
| XHTML MP (eXtensible HyperText Markup Language Mobile Profile) | .HTM, .HTML, .XHTML     |

## Metadata Only Formats

The Sensitive Data Discovery Add-On can identify file type and extract only metadata from images and
multimedia. The following file formats are supported as metadata only formats.

### Image Files

| Document Format                            | Extension              |
| ------------------------------------------ | ---------------------- |
| Favicon                                    | .GIF, .ICO, .JPG, .webp |
| GIMP eXperimental Computing Facility (XCF) | .XCF                   |
| OpenDocument: Graphics / Image Document    | .ODG, .ODI, .OTG, .OTI |
| Wireless Bitmap File Format                | .WBMP                  |

### Vector Image

| Document Format          | Extension                 |
| ------------------------ | ------------------------- |
| AutoCad Drawing          | .DWG                      |
| Microsoft Visio Diagram  | .VSD, .VSS, .VST, .VSW    |
| Photoshop Image          | .PSD                      |
| Scalable Vector Graphics | .SVG, .SVGZ               |
| SolidWorks CAD program   | .SLDASM, .SLDDRW, .SLDPRT |

## Scans Against Files with no Extensions

Files with no extensions can be scanned by modifying the XML file for each job where this type of
scan is desired. Add the following line to the `PerScanExtraScanOptions` section of a job's XML
script:

```
<ScanNoExtension>true</ScanNoExtension>
```

This line must be added to a specific location within the XML script. See below:

```
<DLPSScanOptions>
<PerScanExtraScanOptions>
    <IsFileSizeLimit>false</IsFileSizeLimit>
    <FileSizeLimitValue>2097152</FileSizeLimitValue>
    <IsLimitByValue>false</IsLimiteByTypes>
    <ScanNoExtension>true</ScanNoExtension>
    <LimitByTypesValue>0</LimitByTypesValue>
    <SelectedTypesList/>
    <MaxHitsPerFileForPattern>100</MaxHitsPerFileForPattern>
    <MaxCutOffFilesForPattern>0</MaxHitsPerFileForPattern>
    <MinFileSizeLimitValue>0</MinFileSizeLimitVaue>
    <IncludeOfflineFiles>true</IncludeOfflineFiles>
    <OcrEnabled>false</OcrEnabled>
</PerScanExtraScanOptions>
```

Once this line has been added to the job's XML script and the XML file is saved, files with no
extensions are included in scans for the job.
