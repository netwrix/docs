import React from 'react';
import Content from '@theme-original/DocSidebar/Desktop/Content';
import VersionSwitcher from '@site/src/components/VersionSwitcher';

export default function ContentWrapper(props) {
  return (
    <>
      <VersionSwitcher />
      <Content {...props} />
    </>
  );
}
