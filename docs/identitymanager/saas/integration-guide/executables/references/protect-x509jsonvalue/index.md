---
title: "Usercube-Protect-X509JsonValue"
description: "Usercube-Protect-X509JsonValue"
sidebar_position: 320
---

# Usercube-Protect-X509JsonValue

This tool is used to encrypt sensitive connection data, for example data from the
`appsettings.agent.json` file, with
[RSA Encryption](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md). The
encryption is based on the information given in your `appsettings.json` file about either a PFX file
or the location of the encryption certificate in the Microsoft store. See the
[Application Settings](/docs/identitymanager/saas/integration-guide/network-configuration/server-configuration/general-purpose/index.md)
topic for additional information.

This tool `Usercube-Protect-X509JsonValue` is used to encrypt only given values, in comparison to
the Usercube-Protect-X509JsonValue tool that encrypts a whole file. This tool is more appropriate
than `Usercube-Protect-X509JsonFile` when you have only a few lines to encrypt.

## Examples

The command below encrypts the task agent configuration `0` and the OpenId Client `secret` used in
the `appsettings.agent.json` file.

```

**./identitymanager-Protect-X509JsonValue.exe --values "0" "secret"**

```

As a response, the powershell returns one string per given value.

```

PS C:/identitymanagerTraining/Runtime> ./identitymanager-Protect-X509JsonValue.exe --values "0" "secret"
kxABACJhXxJwnGJSug/nE6ODGGYwnzhX1WeYUHmS7gkMLpF15K7POOZAVWsl93zuYaVStPK0sV+U6mOE4h5IzbT083Uac+/NKic+qNZLYi4PRum+G17pIeSMBu3z7GQJxGGkAeX7dwf0kc/oDW5yAQ1BtFN+k27UHZkUrz0fe/eOZwTHbgV5sSUM+6pXW6IQd2VnVRRKLyWij0MAKsCNlHtv6QE73b8P8u7liRdzWOueqE2blAZk0rm0JzFxZlUQKgIMBTk2cuFWph7rp8dp8h8mDKJl9xbYzAtmM/rgXuhcMYryIrlqFeBWt1J65cfL7HNQb6OX7Imb2LQZmZMI2xc1gFyiXjeINeMriYm3zecnSBMiYEGW6RddE6doJOtrTyznrg==
kxABAJT+2u1C1r0JI8criUz15QkI71x6/BPeNMlPWEL5ZHkTvZWVnMLG/zNJz9PvnjfecROC4fkxPRI5U+sF8W1caH8DtxnzM0ctYD0QtRcpS9z48y2mUzOzl3pU68BQyosyZGZW0ifXVI9UJVGMzMTfWloCw+R+xfZHviYLVGT8y2PKkCBdNp7IcZN4qT6mq8AmTIMSgwagR854n1EHn8lT5nUUFmhZ7iIJ/sonEVG4uyTAjND9YXSsfL9dm2ipTzXrybruIkVU051aczdohreMRsfeSB6TDAYa3GEMNeAb3CzI5I/6NpKYEzZEoYu4JXAzE6bqHeK2oVJyrmTL11kwq4m9fTMwlwmB0GaPeJtbQoih6TIX2qlOPfQdsrZt0dl5qw==

```

Then you just need to copy and paste them.

The following example shows how to update the OpenId ClientSecret matching the "ContosoCharlotte"
OpenId ClientId in the `appsettings.encrypted.agent.json` file.

The initial `appsettings.encrypted.agent.json` file resembles the following:

```
appsettings.encrypted.agent.json before update
{
  ...
  "OpenId": {
    "OpenIdClients": {
      "ContosoCharlotte": "dKIHkloXG6i1LkxkhjkKoVKS9gFO7Hx8VUm"
    }
  }
}
```

The new ClientSecret to encrypt is _charlotte2028_.

Using the `Usercube-Protect-X509JsonValue.exe`:

```
./identitymanager-Protect-X509JsonValue.exe --values charlotte2028
```

The `--values` parameter also accepts multiple white-space-separated values for encryption.

The output, in the console, shows the encrypted value for the _charlotte2028_ string.

```

**kxABABJR7wYaQIqNjHT/rhYVMp5Vmsao7/eBLb7JCIiHMOKbi2sC0dY0SAJgj50NQ0kEH5LS3Y3TYso98+IdnxAzpURrtNu/LUWCJo1kTLM/taygebc0MK4XbkFmWzEgzLcVhAIy8GyFgEWqgNhOx7vwSPXFRrhQTVqIjwO0QNqxlZ5s6uyQm5fk9es2o6aLL0xwbvqspReFxZwuHrguAoIvkBnaKSsDfTLSuheP6VN7yOglLHvZ8Sn9R42M2BpG/dKIHXG6i1LkxkKoVKS9gFO7Hx8VUmYgxG+qIKTRVHdpMctqWKNUJTsQkmRKs+S3qiA2mgK/iC/dp923TfigAnBLWtyXw8eKDJjZ+s6n878BIf55iEjpgOrbm5FLzj8dfqPhQw==**

```

The last step is to update the `appsettings.encrypted.agent.json` file by copy/pasting this new
encrypted value to replace the old one. It results in:

```
appsettings.encrypted.agent.json after update
{
  "OpenId": {
    "OpenIdClients": {
      "ContosoCharlotte": "kxABABJR7wYaQIqNjHT/rhYVMp5Vmsao7/eBLb7JCIiHMOKbi2sC0dY0SAJgj50NQ0kEH5LS3Y3TYso98+IdnxAzpURrtNu/LUWCJo1kTLM/taygebc0MK4XbkFmWzEgzLcVhAIy8GyFgEWqgNhOx7vwSPXFRrhQTVqIjwO0QNqxlZ5s6uyQm5fk9es2o6aLL0xwbvqspReFxZwuHrguAoIvkBnaKSsDfTLSuheP6VN7yOglLHvZ8Sn9R42M2BpG/dKIHXG6i1LkxkKoVKS9gFO7Hx8VUmYgxG+qIKTRVHdpMctqWKNUJTsQkmRKs+S3qiA2mgK/iC/dp923TfigAnBLWtyXw8eKDJjZ+s6n878BIf55iEjpgOrbm5FLzj8dfqPhQw=="
    }
  }
}
```

## Arguments

| Name              | Details                                                    |
| ----------------- | ---------------------------------------------------------- |
| --values required | **Type** String **Description** List of values to encrypt. |
