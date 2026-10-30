import { FanChart } from "./fan-chart";

/** Placement of the forecast lines behind a page title (also used on the Résumé). */
export const introChartClass =
  "kc-fan-mask absolute -top-36 -right-40 -z-10 w-[32rem] opacity-90 sm:-top-40 sm:-right-56 sm:w-[46rem]";

type PageIntroProps = {
  title: string;
  children?: React.ReactNode;
};

export function PageIntro({ title, children }: PageIntroProps) {
  return (
    <section className="relative isolate">
      <FanChart seed={title} className={introChartClass} />
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
