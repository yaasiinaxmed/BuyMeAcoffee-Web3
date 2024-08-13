import Image from "next/image";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <main className="flex h-[100vh] container mx-auto flex-col items-center justify-center p-6 md:p-12">
      {/* Navigation */}
      <Nav />
      {/* Content */}
      <Profile />
    </main>
  );
}
