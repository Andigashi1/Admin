// components/TableStrategyOverview.tsx
export function Strategy() {
  return (
    <section className="space-y-8">
      <h1 className="text-5xl font-semibold tracking-tight">
        Pagination vs Virtualization in Data-Heavy Interfaces
      </h1>

      <p className="text-muted-foreground max-w-4xl text-2xl">
        Modern admin dashboards often deal with large datasets, but not every
        scenario requires the same rendering strategy. This project demonstrates
        two common approaches to handling thousands of rows in a table:
        <strong> pagination</strong> and <strong>virtualization</strong>.
        Each approach solves a different problem and comes with its own tradeoffs.
      </p>

      <div className="space-y-4 max-w-4xl">
        <h2 className="text-4xl font-medium">When to Use Pagination</h2>
        <p className="text-muted-foreground text-2xl">
          Pagination is ideal when data is consumed in discrete chunks and often
          comes from an API.
        </p>

        <ul className="list-disc pl-5 text-muted-foreground text-2xl space-y-1">
          <li>Data is fetched page-by-page from a backend</li>
          <li>Users expect clear page boundaries (e.g. “Page 3 of 20”)</li>
          <li>SEO or URL-based navigation matters</li>
          <li>Predictable rendering and simpler state management are preferred</li>
        </ul>
      </div>

      <div className="space-y-4 max-w-4xl">
        <h2 className="text-4xl font-medium">When to Use Virtualization</h2>
        <p className="text-muted-foreground text-2xl">
          Virtualization is designed for very large datasets that must feel fast
          and fluid on the client.
        </p>

        <ul className="list-disc pl-5 text-muted-foreground text-2xl space-y-1">
          <li>Thousands (or tens of thousands) of rows need to be rendered</li>
          <li>All data is already available client-side</li>
          <li>Smooth scrolling and performance are critical</li>
          <li>Users scan, filter, or select many rows continuously</li>
        </ul>
      </div>

      <div className="space-y-2 max-w-4xl">
        <h2 className="font-medium text-4xl">Why Both Matter</h2>
        <p className="text-muted-foreground text-2xl">
          There is no single “best” solution — only the right tool for the
          context. This project intentionally implements both approaches with
          the same feature set to highlight performance characteristics,
          rendering behavior, and real-world tradeoffs.
        </p>
      </div>
    </section>
  )
}
