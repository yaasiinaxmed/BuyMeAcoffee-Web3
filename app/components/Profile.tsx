import Image from "next/image";
import React from "react";

function Profile() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <Image
        src="/avatar.jpg"
        width={200}
        height={120}
        alt="Yasin Ahmed"
        className="rounded-full"
      />
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-white text-2xl font-bold">Yasin Ahmed</h1>
        <h3 className="text-white text-lg">Web Developer</h3>
      </div>
    </div>
  );
}

export default Profile;
