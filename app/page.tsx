import Image from "next/image";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Coffee from "./components/Coffee";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="container mx-auto">
      {/* Navigation */}
      <Nav />
      {/* Content */}
      <div className="flex h-[100vh] container mx-auto flex-col gap-3 items-center justify-center">
        <Profile />
        <Coffee />
      </div>
      {/* Footer */}
      {/* <Footer/> */}
    </main>
  );
}
