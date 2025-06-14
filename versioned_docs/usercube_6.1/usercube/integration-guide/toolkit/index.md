# Toolkit for XML Configuration

A Usercube configuration is **a set of XML files** edited according the **Usercube schema**. The
[recommendations](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/recommendations/index.md)
part of this section explains how to set up an editing environment for the configuration.

Regardless of the editing space, the **configuration persists in the Usercube database**. It's this
stored configuration that is used at runtime.

The
[Deploy configuration tool](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/jobs/tasks/server/deployconfigurationtask/index.md)
is used to **import** a new version of the configuration (from the XML files set). The
[Export configuration tool](/versioned_docs/usercube_6.1/usercube/integration-guide/executables/references/export-configuration/index.md)
can be used to **export** the current configuration (to a XML files set).

The Usercube project's integration cycle consists in developing a configuration by successive
imports in a test instance.

![Integration cycle](/img/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/configurationcycle.png)
