import ThemedText from "@/components/ThemedText";

export default function About() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <ThemedText as="h1" variant="title" weight="bold">
        About
      </ThemedText>
      <ThemedText variant="lead">
        I design and build clear, accessible, and robust digital experiences.
      </ThemedText>
      <ThemedText tone="muted">
        With a background in branding and interface design, my focus is creating cohesive visual
        systems that scale—from early concepts to production-ready UI. I enjoy collaborating
        closely with product and engineering to ship thoughtful, maintainable work.
      </ThemedText>
    </div>
  );
}
