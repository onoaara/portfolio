"use client";

import React from "react";
import Link from "next/link";
import ThemedText from "@/components/ThemedText";

import { useGetProjectsQuery } from "@/lib/api";

export default function Home() {
  const { data: projects, isLoading, error } = useGetProjectsQuery();

  return (
    <div className="mx-auto max-w-6xl space-y-16">
      <section className="pt-6 md:pt-10">
        <h1 className="text-[160px] font-bold tracking-tight leading-[0.95]">
          Websites &amp;<span className="block">Branding</span>
        </h1>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <ThemedText variant="subtitle" weight="semibold">
              Let’s Talk
            </ThemedText>
            <ThemedText variant="body" tone="muted">
              akinrodiamond@gmail.com
            </ThemedText>
          </div>
          <div>
            <ThemedText variant="body" weight="semibold">
              Hello, I’m Diamond an independent designer focusing on brand
              systems, storytelling, and clean interfaces.
            </ThemedText>
          </div>
        </div>
      </section>

      <section className="pt-6 md:pt-10">
        <ThemedText as="h2" variant="subtitle" weight="semibold">
          Projects
        </ThemedText>
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {isLoading ? (
            <div className="col-span-full py-10 text-center">
              <ThemedText tone="muted">Loading projects...</ThemedText>
            </div>
          ) : error ? (
            <div className="col-span-full py-10 text-center">
              <ThemedText tone="muted">Error loading projects</ThemedText>
            </div>
          ) : (
            projects?.slice(0, 3).map((c, i) => (
              <Link
                key={c.id || i}
                href="/projects"
                className="group block rounded-2xl border border-black/10 bg-white p-3 transition hover:shadow-md dark:border-white/10 dark:bg-neutral-900"
              >
                <div
                  className={[
                    "aspect-4/3 w-full rounded-xl bg-linear-to-br",
                    c.color || "from-neutral-200 to-neutral-400",
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
                <div className="mt-3 flex items-center justify-between">
                  <ThemedText weight="semibold">{c.title}</ThemedText>
                  <ThemedText variant="caption" tone="muted">
                    {c.tag}
                  </ThemedText>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>

      <section>
        <ThemedText as="h2" variant="subtitle" weight="semibold">
          Expertise
        </ThemedText>
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          {[
            { h: "Branding", p: "Visual identity, systems, guidelines." },
            { h: "UI Design", p: "Interfaces, layouts, microcopy." },
            { h: "UX Design", p: "Flows, prototyping, usability." },
            { h: "Development", p: "Modern front-end, performance." },
          ].map((x, i) => (
            <div
              key={i}
              className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-neutral-900"
            >
              <ThemedText weight="semibold">{x.h}</ThemedText>
              <ThemedText variant="body" tone="muted" className="mt-1">
                {x.p}
              </ThemedText>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-black p-8 text-white dark:bg-white dark:text-black">
        <ThemedText as="h2" variant="subtitle" tone="invert" weight="bold">
          Testimonials
        </ThemedText>
        <p className="mt-2 max-w-3xl text-lg opacity-90">
          “Joey is a remarkable artist. He grasps abstract ideas and transforms
          them into exceptional visuals.”
        </p>
      </section>

      <section className="py-8 text-center">
        <ThemedText variant="subtitle" weight="bold">
          Let’s talk!
        </ThemedText>
        <Link
          href="/contact"
          className="mt-3 inline-flex rounded-full bg-black px-5 py-2 text-white transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
        >
          hello@joey.dev
        </Link>
      </section>
    </div>
  );
}
