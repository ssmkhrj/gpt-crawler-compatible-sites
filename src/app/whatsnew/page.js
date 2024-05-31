import Crew from "@/assets/Crew.jpeg";
import Dunki from "@/assets/Dunki.jpg";
import Fighter from "@/assets/Fighter.jpg";
import Shaitaan from "@/assets/Shaitaan.jpeg";
import Image from "next/image";

export default function WhatsNew() {
  return (
    <main className="p-16 space-y-16">
      <section>
        <h1 className="text-2xl font-bold mb-4">Whats new in Netflix</h1>
        <div className="flex gap-4">
          <Image src={Crew} alt="Crew" />
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image src={Dunki} />
        </div>
      </section>
      <section>
        <h1 className="text-2xl font-bold mb-4">Whats new in Hotstar</h1>
        <div className="flex gap-4">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image src={Fighter} />
          <Image src={Shaitaan} alt="Shaitaan" />
        </div>
      </section>
    </main>
  );
}
