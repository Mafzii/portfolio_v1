import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <section id="footer">
      <div className="mt-4 h-12">
        <div className="flex items-center justify-end h-full">
          <p className="text-primary">© 2024 v1.0</p>
          <Image
            alt="personal logo"
            className="rounded-full pointer-events-none ps-2"
            src="/image/favicon-32x32.png"
            width={32}
            height={32}
          />
        </div>
      </div>
    </section>
  );
}
