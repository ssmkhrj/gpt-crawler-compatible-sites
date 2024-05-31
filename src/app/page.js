import ArloImg from "@/assets/Arlo.jpeg";
import JaxonImg from "@/assets/Jaxon.jpeg";
import LyraImg from "@/assets/Lyra.jpeg";
import NovaImg from "@/assets/Nova.jpeg";
import { CardWithCSS } from "@/components/CardWithCSS";
import { CardWithJS } from "@/components/CardWithJS";

const react2030Speakers = [
  {
    name: "Jaxon Anderton",
    talkTitle: "Quantum Hooks in React",
    company: "NeuralNet Synergy",
    img: JaxonImg,
  },
  {
    name: "Lyra Zeller",
    talkTitle: "Quantum Reactivity",
    company: "QuantumSphere Innovations",
    img: LyraImg,
  },
];

const react2035Speakers = [
  {
    name: "Nova Eldridge",
    talkTitle: "AI-Powered React UIs",
    company: "Synaptic Web Tech",
    img: NovaImg,
  },
  {
    name: "Arlo Vance",
    talkTitle: "Neural Interfaces with React",
    company: "MindWave Solutions",
    img: ArloImg,
  },
];

export default function Home() {
  return (
    <main className="p-16">
      <h1 className="text-3xl font-bold mb-8">Speakers from the Future</h1>
      <h2 className="text-xl font-bold mb-4">React 2030 Speakers</h2>
      <div className="flex gap-16 mb-16">
        {react2030Speakers.map((speakerData) => (
          <CardWithCSS key={speakerData.name} {...speakerData} />
        ))}
      </div>
      <h2 className="text-xl font-bold mb-4">React 2035 Speakers</h2>
      <div className="flex gap-16">
        {react2035Speakers.map((speakerData) => (
          <CardWithJS key={speakerData.name} {...speakerData} />
        ))}
      </div>
    </main>
  );
}
