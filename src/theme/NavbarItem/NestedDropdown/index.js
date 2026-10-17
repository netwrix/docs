/**
 * Nested dropdown navbar item (type: 'custom-nestedDropdown').
 *
 * Docusaurus dropdowns don't nest, so a group inside a dropdown (for example
 * ITDR > PingCastle > Enterprise/Pro/Community) is a custom item. On desktop
 * it renders as a flyout. On mobile it delegates to the stock collapsible
 * dropdown, which already nests lists.
 */
import React, {useRef, useState} from 'react';
import clsx from 'clsx';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import NavbarItem from '@theme/NavbarItem';
import styles from './styles.module.css';

function NestedDropdownDesktop({items, label, className}) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  return (
    <li
      className={clsx(styles.submenu, {[styles.submenuOpen]: open})}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setOpen(false);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && open) {
          e.stopPropagation();
          setOpen(false);
          toggleRef.current?.focus();
        } else if (e.key === 'ArrowLeft' && open) {
          setOpen(false);
          toggleRef.current?.focus();
        }
      }}>
      <a
        ref={toggleRef}
        href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded={open}
        className={clsx('dropdown__link', styles.submenuToggle, className)}
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(!open);
          }
        }}>
        {label}
      </a>
      <ul className={styles.submenuMenu}>
        {items.map((childItemProps, i) => (
          <NavbarItem
            isDropdownItem
            activeClassName="dropdown__link--active"
            {...childItemProps}
            key={i}
          />
        ))}
      </ul>
    </li>
  );
}

export default function NestedDropdown(props) {
  // isDropdownItem is added by the parent dropdown and would leak onto the DOM <a> in mobile
  const {isDropdownItem, ...rest} = props;
  if (rest.mobile) {
    return <DropdownNavbarItem {...rest} />;
  }
  return <NestedDropdownDesktop {...props} />;
}
