import Image from "next/image";

export function CardWithCSS({ img, name, company, talkTitle }) {
  return (
    <div className="w-96 space-y-4">
      <div className="relative rounded-2xl overflow-hidden group">
        <Image src={img} alt={name} className="grayscale" />
        <div className="absolute inset-0 hidden group-hover:flex flex-col bg-orange-400 p-8 justify-end gap-1 backdrop-blur-md">
          <p>Talk Title</p>
          <p className="text-2xl font-bold">{talkTitle}</p>
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-xl font-bold">{name}</p>
        <p>{company}</p>
      </div>
    </div>
  );
}
