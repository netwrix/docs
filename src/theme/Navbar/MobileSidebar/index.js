/**
 * Swizzled NavbarMobileSidebar.
 *
 * The original only renders this component when windowSize === 'mobile'
 * (Docusaurus hardcodes the breakpoint at 996px), so between 997–1310px the
 * sidebar is never put in the DOM and the toggle only shows the backdrop.
 *
 * Fix: always render the sidebar (it is invisible by default via infima CSS:
 * opacity:0, visibility:hidden, transform:translateX(-100%)). CSS in custom.css
 * hides it above 1310px with display:none. Below 1310px, the existing
 * .navbar-sidebar--show rules handle show/hide correctly.
 */
import React from 'react';
import {
  useLockBodyScroll,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarMobileSidebarLayout from '@theme/Navbar/MobileSidebar/Layout';
import NavbarMobileSidebarHeader from '@theme/Navbar/MobileSidebar/Header';
import NavbarMobileSidebarPrimaryMenu from '@theme/Navbar/MobileSidebar/PrimaryMenu';
import NavbarMobileSidebarSecondaryMenu from '@theme/Navbar/MobileSidebar/SecondaryMenu';

export default function NavbarMobileSidebar() {
  const mobileSidebar = useNavbarMobileSidebar();
  useLockBodyScroll(mobileSidebar.shown);

  if (mobileSidebar.disabled) {
    return null;
  }

  return (
    <NavbarMobileSidebarLayout
      header={<NavbarMobileSidebarHeader />}
      primaryMenu={<NavbarMobileSidebarPrimaryMenu />}
      secondaryMenu={<NavbarMobileSidebarSecondaryMenu />}
    />
  );
}
