import { Outlet } from "react-router-dom";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";

export default function MainLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
