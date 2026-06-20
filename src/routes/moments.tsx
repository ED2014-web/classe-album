import { createFileRoute, Link } from "@tanstack/react-router";
import p1 from "@/assets/souvenirs/6af7184d-32b4-4a79-acff-a06d19288324.JPG.asset.json";
import p2 from "@/assets/souvenirs/8e1d0bee-348e-4cbc-a122-18ef9257b02e.JPG.asset.json";
import p3 from "@/assets/souvenirs/PHOTO-2026-02-13-21-29-32.jpg.asset.json";
import p4 from "@/assets/souvenirs/PHOTO-2026-02-13-21-39-24.jpg.asset.json";
import p5 from "@/assets/souvenirs/PHOTO-2026-02-13-21-39-28_2.jpg.asset.json";
import p6 from "@/assets/souvenirs/PHOTO-2026-02-13-21-39-31.jpg.asset.json";
import v1 from "@/assets/souvenirs/VIDEO-2026-02-13-21-39-26_4.mp4.asset.json";
import v2 from "@/assets/souvenirs/VIDEO-2026-02-13-21-39-27_3.mp4.asset.json";
import p7 from "@/assets/souvenirs/PHOTO-2025-12-24-18-44-39.jpg.asset.json";
import p8 from "@/assets/souvenirs/PHOTO-2025-12-21-14-17-56.jpg.asset.json";
import p9 from "@/assets/souvenirs/PHOTO-2026-01-04-17-58-40.jpg.asset.json";
import p10 from "@/assets/souvenirs/PHOTO-2025-12-31-22-13-19.jpg.asset.json";
import p11 from "@/assets/souvenirs/PHOTO-2025-12-24-19-30-21.jpg.asset.json";
import p12 from "@/assets/souvenirs/PHOTO-2026-02-13-21-28-49.jpg.asset.json";

export const Route = createFileRoute("/moments")({
  head: () => ({
    meta: [
      { title: "Les moments de la classe — 6ème 2" },
      { name: "description", content: "Une galerie de souvenirs de notre année en 6ème 2 : la classe, la cour, les amis, et tout le reste." },
      { property: "og:title", content: "Les moments de la classe — 6ème 2" },
      { property: "og:description", content: "Une galerie de souvenirs de notre année en 6ème 2." },
      { property: "og:image", content: p1.url },
    ],
  }),
  component: MomentsPage,
});

type Item = { type: "image" | "video"; src: string };

const moments: Item[] = [
  { type: "image", src: p1.url },
  { type: "image", src: p2.url },
  { type: "image", src: p3.url },
  { type: "video", src: v1.url },
  { type: "image", src: p4.url },
  { type: "image", src: p5.url },
  { type: "video", src: v2.url },
  { type: "image", src: p6.url },
  { type: "image", src: p7.url },
  { type: "image", src: p8.url },
  { type: "image", src: p9.url },
  { type: "image", src: p10.url },
  { type: "image", src: p11.url },
  { type: "image", src: p12.url },
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
            Quelques images qui racontent notre année en 6ème 2, à feuilleter comme un album.
          </p>
        </header>

        <section className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {moments.map((m, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1"
              style={{
                boxShadow: "var(--shadow-card)",
                transform: `rotate(${i % 2 === 0 ? "-0.6deg" : "0.6deg"})`,
              }}
            >
              <div className="aspect-square overflow-hidden bg-muted">
                {m.type === "image" ? (
                  <img
                    src={m.src}
                    alt="Souvenir"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <video
                    src={m.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            </div>
          ))}
        </section>

        <footer className="mt-20 text-center">
          <p className="font-display text-3xl text-primary">Merci pour cette année ❤</p>
          <p className="mt-2 text-sm text-muted-foreground">{"\n"}</p>
        </footer>
      </div>
    </main>
  );
}