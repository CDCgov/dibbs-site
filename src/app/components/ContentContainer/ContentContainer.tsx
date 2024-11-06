import classNames from 'classnames';

interface ContentContainerProps {
  children: React.ReactNode;
  align?: boolean;
  classes?: string;
  extraClasses?: string;
}
export function ContentContainer({
  children,
  align = false,
  classes = 'ml-auto mr-auto flex max-w-[87.5rem] flex-col px-10 py-4 sm:px-14 sm:py-20',
  extraClasses = '',
}: ContentContainerProps) {
  return (
    <section>
      <div
        className={classNames(classes, extraClasses, {
          'md:px-32': !align,
        })}
      >
        {children}
      </div>
    </section>
  );
}
