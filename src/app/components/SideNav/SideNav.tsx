import { useState, useEffect, SetStateAction } from 'react';
import { SideNav as UswdsSideNav } from '@trussworks/react-uswds';
import classNames from 'classnames';

interface Section {
  title: string;
  id: string;
}

interface SideNavProps {
  sections: Section[];
}

export const SideNav = ({ sections }: SideNavProps) => {
  const [selectedHash, setSelectedHash] = useState(`#${sections[0].id}`);

  useEffect(() => {
    let currentSection = '';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newSection = `#${entry.target.id}`;
            if (currentSection !== newSection) {
              currentSection = newSection;
              setSelectedHash(newSection);
            }
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  return (
    <>
      <div
        id="detection-zone"
        style={{
          position: 'fixed',
          top: '20%',
          bottom: '70%',
          left: 0,
          right: 0,
          backgroundColor: 'rgba(255, 0, 0, 0.2)',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
      <UswdsSideNav
        items={sections.map(({ title, id }) => (
          <NavItem
            title={title}
            id={id}
            key={id}
            selectedHash={selectedHash}
            setSelectedHash={setSelectedHash}
          />
        ))}
      />
    </>
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
        'usa-current': itemHash === selectedHash,
      })}
      onClick={() => setSelectedHash(itemHash)}
    >
      {title}
    </a>
  );
}
