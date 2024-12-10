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
        className={classNames(
          "lg:text-l font-['Public Sans'] font-bold leading-7 lg:text-white",
          {
            'underline underline-offset-8': isActive,
          },
        )}
      >
        {children}
      </span>
    </Link>
  );
}

/**
 * Given a nav Link URL, returns `true` if the current page in the application matches
 * the navigation Link's URL. If the user is on a subroute of a matching page, that will also match.
 * @param url URL of the navigation Link
 * @returns `true` if the current route matches the nav Link's URL, otherwise `false`
 */
function useIsActive(url: NavigationLinkProps['href']) {
  const pathname = usePathname();

  // top-level route (/products, /case-studies) match
  if (pathname === url.toString()) {
    return true;
  }

  // subroutes (/products/ecr-viewer) match
  const pathSegments = pathname.split('/').filter((segment) => segment !== '');
  if (pathSegments.length > 0 && url.toString().includes(pathSegments[0])) {
    return true;
  }

  return false;
}
