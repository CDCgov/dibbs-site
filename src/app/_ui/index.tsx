interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export function Heading({ children, className = '' }: TextProps) {
  return <h2 className={className}>{children}</h2>;
}

export function Paragraph({ children, className = '' }: TextProps) {
  return (
    <p className={`font-normal leading-relaxed ${className}`}>{children}</p>
  );
}
