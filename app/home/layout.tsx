import Header from "@/components/Header";
// import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="page-wrapper">
      <Header />
      <main className="bg-gray-50 h-full">{children}</main>
    </div>
  );
}
