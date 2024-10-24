import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/Home.module.scss';

interface NavigationLinkProps extends Pick<LinkProps, 'href' | 'onClick'> {
  children: React.ReactNode;
}

export function NavigationLink({
  href,
  children,
  onClick,
}: NavigationLinkProps) {
  const pathname = usePathname(); // Use usePathname hook to get the current path
  const isActive = pathname === href;
  return (
    <Link href={href} passHref className="usa-nav__link" onClick={onClick}>
      <span
        className={classNames(styles.navbarItemText, {
          'navbar-item-active': isActive,
        })}
      >
        {children}
      </span>
    </Link>
  );
}
