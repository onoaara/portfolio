import ThemedText from "@/components/ThemedText";

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <ThemedText as="h1" variant="title" weight="bold">
        Projects
      </ThemedText>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-neutral-900"
          >
            <div className="aspect-[4/3] rounded-xl bg-neutral-100 dark:bg-neutral-800" />
            <ThemedText className="mt-3" weight="semibold">
              Case Study {i + 1}
            </ThemedText>
            <ThemedText variant="caption" tone="muted">
              Coming soon
            </ThemedText>
          </div>
        ))}
      </div>
    </div>
  );
}
