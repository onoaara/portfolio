import Header from "@/components/Header";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="page-wrapper">
      <Header />
      <main className="h-full">{children}</main>
    </div>
  );
}
