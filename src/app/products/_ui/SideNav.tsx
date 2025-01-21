'use client';
import { useState, useEffect, SetStateAction } from 'react';
import { SideNav as UswdsSideNav } from '@trussworks/react-uswds';
import classNames from 'classnames';

export type NavItem = { title: string; id: string };

interface SideNavProps {
  items: NavItem[];
}
export const SideNav = ({ items }: SideNavProps) => {
  const [selectedHash, setSelectedHash] = useState(`#${items[0].id}`);

  // Add effect to update URL when selectedHash changes
  useEffect(() => {
    window.history.replaceState(null, '', selectedHash);
  }, [selectedHash]);

  useEffect(() => {
    const handleScroll = () => {
      // Don't update side nav on mobile/tablet screens
      if (window.innerWidth <= 1023) {
        return;
      }

      // Check if we're at the top or bottom of the page
      if (window.scrollY === 0) {
        setSelectedHash(`#${items[0].id}`);
        return;
      }

      const scrolledToBottom =
        Math.ceil(window.scrollY + window.innerHeight) >=
        document.documentElement.scrollHeight;

      if (scrolledToBottom) {
        setSelectedHash(`#${items[items.length - 1].id}`);
        return;
      }

      // Get section element in or near center of viewport
      const viewportCenter = window.innerHeight * 0.2;
      const element = document
        .elementFromPoint(
          document.documentElement.clientWidth / 2,
          viewportCenter,
        )
        ?.closest('section'); // Find nearest section element

      if (element?.id && items.some((item) => item.id === element.id)) {
        setSelectedHash(`#${element.id}`);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [items]);

  return (
    <div className="bg-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] lg:sticky lg:top-4 lg:w-[12.5rem]">
      <UswdsSideNav
        items={items.map(({ title, id }) => (
          <NavItem
            title={title}
            id={id}
            key={id}
            selectedHash={selectedHash}
            setSelectedHash={setSelectedHash}
          />
        ))}
      />
    </div>
  );
};

interface NavItemProps {
  title: string;
  id: string;
  selectedHash: string;
  setSelectedHash: (value: SetStateAction<string>) => void;
}
function NavItem({ title, id, selectedHash, setSelectedHash }: NavItemProps) {
  const itemHash = `#${id}`;
  return (
    <a
      href={itemHash}
      key={id}
      className={classNames({
        'usa-current !text-blue-cool-80 after:!bg-blue-cool-50':
          itemHash === selectedHash,
        '!text-blue-cool-50': itemHash !== selectedHash,
      })}
      onClick={() => setSelectedHash(itemHash)}
    >
      {title}
    </a>
  );
}
