"use client";

import ThemedText from "@/components/ThemedText";
import { useGetProjectsQuery } from "@/lib/api";

export default function Projects() {
  const { data: projects, isLoading, error } = useGetProjectsQuery();

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <ThemedText as="h1" variant="title" weight="bold">
        Projects
      </ThemedText>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {isLoading ? (
          <div className="col-span-full py-10 text-center">
            <ThemedText tone="muted">Loading projects...</ThemedText>
          </div>
        ) : error ? (
          <div className="col-span-full py-10 text-center">
            <ThemedText tone="muted">Error loading projects</ThemedText>
          </div>
        ) : (
          projects?.map((c, i) => (
            <div
              key={c.id || i}
              className="rounded-2xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-neutral-900"
            >
              <div
                className={[
                  "aspect-4/3 rounded-xl bg-linear-to-br",
                  c.color || "from-neutral-100 to-neutral-200",
                ].join(" ")}
                style={
                  c.image_url
                    ? {
                        backgroundImage: `url(${c.image_url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : {}
                }
              />
              <ThemedText className="mt-3" weight="semibold">
                {c.title}
              </ThemedText>
              <ThemedText variant="caption" tone="muted">
                {c.tag}
              </ThemedText>
              {c.description && (
                <ThemedText
                  variant="body"
                  tone="muted"
                  className="mt-2 line-clamp-2 text-sm"
                >
                  {c.description}
                </ThemedText>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
