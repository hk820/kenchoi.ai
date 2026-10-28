// Cached so the year is captured in the static shell; Cache Components
// does not allow a bare `new Date()` during prerendering.
export async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}
