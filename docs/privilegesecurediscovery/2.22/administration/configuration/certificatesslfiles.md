---
title: "Certificate (SSL) Files"
description: "Certificate (SSL) Files"
sidebar_position: 70
---

# Certificate (SSL) Files

Certificate (SSL) Files

# Certificate (SSL) Files

This article will cover some of the different formats use for transferring/extracting the SSL
Certificate and Key from a CA (Certificate Authority) provided file.

## PFX files

The PKCS#12 or PFX format is a binary format for storing the server certificate, any intermediate
certificates, and the private key into a single encrypt-able file. PFX files are usually found with
the extensions .pfx and .p12. PFX files are typically used on Windows and macOS machines to import
and export certificates and private keys.

PFX is one of the many file formats that Certificate Authorities can provide a certificate in
response to a CSR (Certificate Signing Request). Other formats that we can pull certificate and key
details from are:

- PEM ( .crt, .key, .cer, and .crt extensions) - Preferred for extracting the certificate and key
- PKCS#12 (.pfx and .p12 extensions)
- DER (.der and .cer extensions)
- PKCS#7 (.p7b and .p7c extensions)

## PEM Format

Most CAs (Certificate Authority) provide certificates in PEM format in Base64 ASCII encoded files.
The certificate file types can be .pem, .crt, .cer, or .key. The .pem file can include the server
certificate, the intermediate certificate and the private key in a single file. The server
certificate and intermediate certificate can also be in a separate .crt or .cer file. The private
key can be in a .key file.

PEM files use ASCII encoding, so you can open them in any text editor such as notepad, MS word etc.
Each certificate in the PEM file is contained between the ---- BEGIN CERTIFICATE---- and ----END
CERTIFICATE---- statements. The private key is contained between the ---- BEGIN RSA PRIVATE KEY-----
and -----END RSA PRIVATE KEY----- statements. The CSR is contained between the -----BEGIN
CERTIFICATE REQUEST----- and -----END CERTIFICATE REQUEST----- statements. This is the preferred
format to extract the certificate and keys needed to copy into Privilege Secure's UI.

## PKCS#12 Format

The PKCS#12 certificates are in binary form, contained in .pfx or .p12 files.

The PKCS#12 can store the server certificate, the intermediate certificate and the private key in a
single .pfx file with password protection. These certificates are mainly used on the Windows
platform.

## PKCS#7 Format

The PKCS#7 format is a Cryptographic Message Syntax Standard. The PKCS#7 certificate uses Base64
ASCII encoding with file extension .p7b or .p7c. Only certificates can be stored in this format, not
private keys. The P7B certificates are contained between the "-----BEGIN PKCS7-----" and "-----END
PKCS7-----" statements.

## DER Format

The DER certificates are in binary form, contained in .der or .cer files. These certificates are
mainly used in Java-based web servers.

## How to extract private key and certificate from PFX file using OpenSSL in Linux

**PREREQUISITE**Ensure OpenSSL is installed in the server that contains the SSL certificate.

1. Start OpenSSL from the `OpenSSL\bin` folder.
2. Open the command prompt and go to the folder that contains your `.pfx` file.
3. Run the following command to extract the private key:

    ```
    openssl pkcs12 -in [yourfile.pfx] -nocerts -out [drlive.key]
    ```

You will be prompted to type the import password. Type the password that you used to protect your
keypair when you created the `.pfx `file. You will be prompted again to provide a new password to
protect the `.key` file that you are creating. Store the password to your key file in a secure place
to avoid misuse.

1. Run the following command to extract the certificate:

    ```
    openssl pkcs12 -in [yourfile.pfx] -clcerts -nokeys -out [drlive.crt]
    ```

2. Run the following command to decrypt the private key (If the previous steps required a password
   to complete then the next step #2 is needed):

    ```
    openssl rsa -in [drlive.key] -out [drlive-decrypted.key]
    ```

Type the password that you created to protect the private key file in the previous step. 
The `.crt` file and the decrypted and encrypted `.key` files are available in the path, where you
started OpenSSL.

## How to extract private key and certificate from PFX file using OpenSSL in Windows

You now need to use Openssl to extract the private key. You can view the 3rd party URL
[here](http://www.openssl.org/). The windows implementation has been done by Shining Light
Productions and you can download Win32/64 OpenSSL
[here.](http://slproweb.com/products/Win32OpenSSL.html)

This guide will use Win32 OpenSSL as reference.

Once you have installed Win32 OpenSSL, start the cmd prompt as administrator and navigate to the
install location i.e. C:\Program Files\OpenSSL-Win32\bin

Type openssl to run
![Command Prompt for OpenSSL](https://www.nuttyabouthosting.co.uk/images/img/kb/lOpenSSL_CmdLPrompt.webp)

Here are the commands using a wildcard certificate for an example

1. Extract Private Key.
   pkcs12 -in "C:\CA-PovidedSSLCert.pfx" -nocerts -out "C:\ExtractedKey.pem"

2. Now to remove the passphrase from the private key pem file.
   rsa -in "C:\ExtractedSSL.pem" -out "C:\ExtractedKey.key"

3. Now extract the certificate file.
   pkcs12 -in "C:\CA-PovidedSSLCert.pfx" -clcerts -nokeys -out "C: \ExtractedCert.pem"

4. Now use a program such as Notepad ++, Word, or any text editor to open and view the above
   exported files.

- ExtractedKey.key
- ExtractedCert.pem
