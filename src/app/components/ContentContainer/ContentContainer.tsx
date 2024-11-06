import classNames from 'classnames';

interface ContentContainerProps {
  children: React.ReactNode;
  align?: boolean;
  classes?: string;
}
export function ContentContainer({
  children,
  align = false,
  classes = 'ml-auto mr-auto flex max-w-[87.5rem] flex-col px-10 py-4 sm:px-14 sm:py-20',
}: ContentContainerProps) {
  return (
    <section>
      <div
        className={classNames(classes, {
          'md:px-32': !align,
        })}
      >
        {children}
      </div>
    </section>
  );
}
