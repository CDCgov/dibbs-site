interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export function Heading({ children, className = '' }: TextProps) {
  return (
    <h2
      className={`text-[1.5rem] font-bold text-[#224a58] xl:text-[2rem] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Paragraph({ children, className = '' }: TextProps) {
  return (
    <p className={`font-normal leading-relaxed text-[#224a58] ${className}`}>
      {children}
    </p>
  );
}
