# Dynasties

A [Dynasty](/docs/directorymanager/11.1/group-management/overview.md)is a Smart Group that creates and manages other Smart Groups using
information in the directory. This view lists only the Dynasties created in Directory Manager in the
connected identity store, and does not include expired and deleted Dynasties.

The **Type** column shows whether a Dynasty is a parent, middle, or leaf Dynasty. Both middle and
leaf Dynasties are child Dynasties. The parent Dynasty comes at the top of the hierarchy, followed
by middle and then leaf Dynasties.

Dynasty names help you group a parent Dynasty with its respective child Dynasties.

- For a Geographical/Organizational/Custom Dynasty - The name of a child Dynasty starts with the
  name of its parent Dynasty (unless you change the naming template for Dynasty children).
- For a Managerial Dynasty - By default, the naming template for its child Dynasties starts with
  "Direct reports of `manager`".

You can [Modify Search Directory](/docs/directorymanager/11.1/group-management/allgroups.md#modify-search-directory) to search dynasties and add
[Filter All Groups](/docs/directorymanager/11.1/group-management/allgroups.md#filter-all-groups)by clicking **Dynasties Grid Filters**. All the
dynasties matching the filters will be displayed.
