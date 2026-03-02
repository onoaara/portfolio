import ThemedText from "@/components/ThemedText";

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <ThemedText as="h1" variant="title" weight="bold">
        Contact
      </ThemedText>
      <ThemedText>Let’s work together.</ThemedText>
      <a
        href="mailto:hello@joey.dev"
        className="inline-flex rounded-full bg-black px-5 py-2 text-white transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
      >
        hello@joey.dev
      </a>
    </div>
  );
}
