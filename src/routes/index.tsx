import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Merci pour cette première année en 6e" },
      { name: "description", content: "Un petit site souvenir pour célébrer notre première année au collège, en 6e." },
      { property: "og:title", content: "Merci pour cette première année en 6e" },
      { property: "og:description", content: "Un petit site souvenir pour célébrer notre première année au collège, en 6e." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--gradient-sky)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-60 blur-3xl"
        style={{ background: "var(--gradient-warm)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full opacity-50 blur-3xl"
        style={{ background: "var(--gradient-warm)" }}
      />

      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm font-semibold text-muted-foreground backdrop-blur">
          ✨ Année scolaire — souvenirs de 6e
        </span>

        <h1 className="text-balance text-6xl leading-[0.95] text-foreground sm:text-7xl md:text-8xl">
          Merci pour cette
          <span className="block text-primary"> première année en 6e</span>
        </h1>

        <p className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
          Une année pleine de découvertes, de fous rires, de nouveaux amis et de
          souvenirs qu&apos;on n&apos;oubliera pas. Merci à tous ceux qui l&apos;ont rendue si belle.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/moments"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
          >
            Découvrir les moments de la classe
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

      </section>
    </main>
  );
}
