export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`kto-layout-section ${className}`.trim()}>
      {children}
    </section>
  );
}
