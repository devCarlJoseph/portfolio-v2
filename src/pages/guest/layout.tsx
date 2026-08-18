import { Outlet } from "react-router-dom";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { ScrollToTop } from "@/components/common/scroll-to-top";

export default function GuestLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <ScrollToTop />
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
