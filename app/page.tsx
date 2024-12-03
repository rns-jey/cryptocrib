"use client";

import Header from "@/components/organisms/header";
import SideBar from "@/components/organisms/sidebar";

// const userNavigation = [
//   { name: "Your profile", href: "#" },
//   { name: "Sign out", href: "#" },
// ];

export default function Home() {
  return (
    <>
      <div>
        <SideBar />

        <div className="lg:pl-72">
          <Header />

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
          </main>
        </div>
      </div>
    </>
  );
}
