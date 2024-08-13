import Image from "next/image";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="flex min-h-screen container mx-auto flex-col items-center justify-between p-6 md:p-12">
      {/* Navigation */}
      <Nav />
      {/* Content */}
    </main>
  );
}
