import { createFileRoute, Link } from "@tanstack/react-router";
import m1 from "@/assets/moment-1.jpg";
import m2 from "@/assets/moment-2.jpg";
import m3 from "@/assets/moment-3.jpg";
import m4 from "@/assets/moment-4.jpg";
import m5 from "@/assets/moment-5.jpg";
import m6 from "@/assets/moment-6.jpg";

export const Route = createFileRoute("/moments")({
  head: () => ({
    meta: [
      { title: "Les moments de la classe — 6e" },
      { name: "description", content: "Une galerie de souvenirs de notre année en 6e : la classe, la cour, les amis, et tout le reste." },
      { property: "og:title", content: "Les moments de la classe — 6e" },
      { property: "og:description", content: "Une galerie de souvenirs de notre année en 6e." },
      { property: "og:image", content: m4 },
    ],
  }),
  component: MomentsPage,
});

const moments = [
  { src: m1, title: "Les cours", text: "Maths, français, histoire... on a appris plein de nouvelles choses." },
  { src: m2, title: "La cour", text: "Les récrés sous les arbres, à discuter et à courir partout." },
  { src: m3, title: "Le tableau", text: "Les leçons, les schémas, et parfois quelques petits dessins en cachette." },
  { src: m4, title: "Les amis", text: "Les nouvelles rencontres et les fous rires partagés jusqu'au soir." },
  { src: m5, title: "Le cahier", text: "Les notes, les souvenirs, et les petites choses glissées entre les pages." },
  { src: m6, title: "Le CDI", text: "Les heures passées à lire, à chercher, à découvrir." },
];

function MomentsPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--gradient-sky)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full opacity-50 blur-3xl"
        style={{ background: "var(--gradient-warm)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          ← Retour à l&apos;accueil
        </Link>

        <header className="mt-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm font-semibold text-muted-foreground backdrop-blur">
            📸 Galerie de souvenirs
          </span>
          <h1 className="mt-4 text-5xl leading-tight text-foreground sm:text-6xl md:text-7xl">
            Les moments de la classe
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Quelques images qui racontent notre année en 6e, à feuilleter comme un album.
          </p>
        </header>

        <section className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {moments.map((m, i) => (
            <article
              key={m.title}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1"
              style={{
                boxShadow: "var(--shadow-card)",
                transform: `rotate(${i % 2 === 0 ? "-0.6deg" : "0.6deg"})`,
              }}
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={m.src}
                  alt={m.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-3xl text-foreground">{m.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{m.text}</p>
              </div>
            </article>
          ))}
        </section>

        <footer className="mt-20 text-center">
          <p className="font-display text-3xl text-primary">Merci pour cette année ❤</p>
          <p className="mt-2 text-sm text-muted-foreground">À bientôt en 5e !</p>
        </footer>
      </div>
    </main>
  );
}