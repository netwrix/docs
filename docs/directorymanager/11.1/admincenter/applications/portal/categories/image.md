---
title: "Image Display Type in Directory Manager Portal"
description: "Create an image display type so portal users can upload photos to Active Directory attributes such as thumbnailPhoto and jpegPhoto."
keywords:
  - image display type
  - custom display types
  - thumbnailPhoto attribute
  - jpegPhoto attribute
  - Directory Manager Portal
sidebar_position: 50
---

# Image Display Type in Directory Manager Portal

Use the image display type for schema attributes of the user object type that can store image data. The following table lists the supported attributes for Active Directory:

| AD Attribute   | CN        | Description                                                                                                                                             | Max. Image Size (KB) |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| jpegPhoto      | JpegPhoto | Stores one or more images of a user in JPEG File Interchange Format (JFIF). The image stored in this attribute is mainly used by SharePoint.            | 10240                |
| Photo          | Photo     | An object encoded in G3 fax as explained in recommendation T.4, with an ASN.1 wrapper to make it compatible with an X.400 BodyPart as defined in X.420. | NA                   |
| thumbnailPhoto | Picture   | An image of a user for display in Outlook. A space-efficient format like JPEG or GIF is recommended.                                                    | 100                  |
| thumbnailLogo  | Logo      | A small-sized image; a user’s logo.                                                                                                                     | 32                   |

To define an image display type, specify the display dimensions (height and width) of the image in the portal. You must also specify the maximum image size that users can upload for this display type.

A custom image display type is rendered on a portal page as:

![Photo placeholder with edit and delete buttons next to it](/images/directorymanager/11.1/admincenter/portal/displaytype/photo_placeholder.webp)

Click **Edit** to launch the **Manage Photo** dialog box for uploading a photo. The dialog box also provides many image editing options, including rotate, crop, flip, and resize.

## Define an image display type

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, each portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to define a custom display type for it. All identity stores associated with the portal are listed under **Design Settings**. You can design a different portal for each of them.
4. Click **Custom Display Types** in the left pane.
5. On the **Custom Display Types** page, click **Add** on the **Custom Display Types** tab.
6. On the **New Display Type** pane, enter a name for the display type and select _Image_ in the **Type** dropdown list. You can't change the name of a custom display type after you create it.
7. In the **Height** and **Width** boxes, enter the image dimensions in pixels. The portal displays the image with these dimensions. The default is 100 x 100 pixels.
8. In the **Maximum Size (KB)** box, enter the maximum image size in kilobytes that users can upload for this display type.
9. Click **OK**.
10. Click **Save** on the **Custom Display Types** page.

You can link this custom image display type to a schema attribute (such as the Active Directory attributes _jpegPhoto_, _Photo_, _thumbnailPhoto_, and _thumbnailLogo_) on the **Search Forms,
Properties, Create Object**, and **Property Validation** pages in **Design Settings**. The respective portal page then displays the image placeholder, and users can use it to upload their photos.
