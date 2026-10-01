import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Liturgia Master — Editor de Folhetos Litúrgicos" },
      {
        name: "description",
        content: "Crie, organize, visualize e exporte folhetos litúrgicos profissionais.",
      },
      { property: "og:title", content: "Liturgia Master — Editor de Folhetos Litúrgicos" },
      {
        property: "og:description",
        content: "Editor completo para preparar folhetos e cantos de celebrações litúrgicas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="h-screen w-full overflow-hidden bg-background">
      <iframe
        className="h-full w-full border-0"
        src="/liturgia-master.html"
        title="Editor Liturgia Master"
      />
    </main>
  );
}
