import Image from "next/image";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Coffee from "./components/Coffee";

export default function Home() {
  return (
    <main className="flex h-[100vh] container mx-auto flex-col gap-3 items-center justify-center p-6 md:p-12">
      {/* Navigation */}
      <Nav />
      {/* Content */}
      <Profile />
      <Coffee />
    </main>
  );
}
