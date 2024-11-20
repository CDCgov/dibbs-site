import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationLinkProps extends Pick<LinkProps, 'href' | 'onClick'> {
  children: React.ReactNode;
}

export function NavigationLink({
  href,
  children,
  onClick,
}: NavigationLinkProps) {
  const isActive = useIsActive(href);

  return (
    <Link
      href={href}
      passHref
      onClick={onClick}
      {...(isActive ? { 'aria-current': 'page' } : {})}
    >
      <span
        className={classNames('text-white', {
          'underline underline-offset-8': isActive,
        })}
      >
        {children}
      </span>
    </Link>
  );
}

function useIsActive(url: NavigationLinkProps['href']) {
  const pathname = usePathname();

  // top-level match
  if (pathname === url.toString()) {
    return true;
  }

  // child routes also match
  const pathSegments = pathname.split('/').filter((segment) => segment !== '');
  if (url.toString().includes(pathSegments[0])) return true;

  return false;
}
