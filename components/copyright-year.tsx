// The year is fixed when the site is built (see `env` in next.config.ts),
// so every page stays fully static with no timed refresh.
export function CopyrightYear() {
  return <>{process.env.SITE_BUILD_YEAR}</>;
}
