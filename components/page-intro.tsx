type PageIntroProps = {
  title: string;
  children: React.ReactNode;
};

export function PageIntro({ title, children }: PageIntroProps) {
  return (
    <section>
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h1>
      <p className="mt-6 max-w-prose text-lg leading-8 text-muted">
        <span className="mr-2 rounded bg-accent-soft px-1.5 py-0.5 font-mono text-xs font-medium text-accent">
          [PLACEHOLDER]
        </span>
        {children}
      </p>
    </section>
  );
}
