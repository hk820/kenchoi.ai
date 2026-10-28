type PageIntroProps = {
  title: string;
  children?: React.ReactNode;
};

export function PageIntro({ title, children }: PageIntroProps) {
  return (
    <section>
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
        {title}
      </h1>
      {children && (
        <p className="mt-6 max-w-prose text-lg leading-8 text-muted">
          {children}
        </p>
      )}
    </section>
  );
}
