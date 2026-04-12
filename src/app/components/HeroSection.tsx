import { Play } from "lucide-react";
import { useRef, useState } from "react";

export function HeroSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF7F3] via-[#FFF1EC] to-white px-6">

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #FF6F61 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* TITLE */}
      <div className="relative z-10 text-center max-w-3xl mb-10 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-[#2A1F1D]">
          Aprende español con{" "}
          <span className="text-[#FF6F61]">elegancia</span>
        </h1>

       
      </div>

      {/* VIDEO */}
      <div className="relative z-10 w-full max-w-4xl">

        <div className="relative rounded-3xl overflow-hidden border border-[#FF6F61]/20 shadow-2xl bg-white">

          <video
            ref={videoRef}
            src="/vi.mp4"
            className="w-full aspect-video object-cover"
            playsInline
            preload="metadata"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FF6F61]/10 to-transparent pointer-events-none" />

          {/* PLAY BUTTON (desaparece cuando reproduce) */}
          {!isPlaying && (
            <button
              onClick={handleToggle}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-20 h-20 rounded-full bg-[#FF6F61] hover:bg-[#FF5A4D] flex items-center justify-center shadow-xl transition-transform hover:scale-110">
                <Play className="w-10 h-10 text-white ml-1" fill="white" />
              </div>
            </button>
          )}

        </div>
      </div>

      {/* BUTTON */}
      <div className="relative z-10 mt-10">
        <button className="px-10 py-4 rounded-full bg-[#FF6F61] hover:bg-[#FF5A4D] text-white shadow-lg transition hover:scale-105">
          Reserva tu clase gratis
        </button>
      </div>

    </section>
  );
}