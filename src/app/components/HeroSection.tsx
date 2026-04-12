import { Play, Pause } from "lucide-react";
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
      console.log("Video error:", err);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF5F0] via-[#FFEDE6] to-white px-6">

      {/* 🌿 BACKGROUND TERRACOTA LATINO */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #C65A3A 1.4px, transparent 1.4px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* 🌅 GLOW WARM */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C65A3A]/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[600px] bg-[#E07A5F]/20 blur-[160px] rounded-full" />
      </div>

      {/* TITLE */}
      <div className="relative z-10 text-center max-w-3xl mb-10 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-[#2A1F1D] leading-tight">
          Aprende español con{" "}
          <span className="text-[#C65A3A]">calidez latina</span>
        </h1>

      </div>

      {/* VIDEO */}
      <div className="relative z-10 w-full max-w-4xl">

        <div className="relative rounded-3xl overflow-hidden border border-[#C65A3A]/30 shadow-2xl bg-white">

          <video
            ref={videoRef}
            src="/vi.mp4"
            poster="/vi-poster.jpg"
            className="w-full aspect-video object-cover"
            playsInline
            preload="metadata"
          />

          {/* overlay suave */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#C65A3A]/10 to-transparent pointer-events-none" />

          {/* PLAY / PAUSE BUTTON */}
          <button
            onClick={handleToggle}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-20 h-20 rounded-full bg-[#C65A3A] hover:bg-[#E07A5F] flex items-center justify-center shadow-xl transition-transform hover:scale-110">
              {isPlaying ? (
                <Pause className="w-10 h-10 text-white" />
              ) : (
                <Play className="w-10 h-10 text-white ml-1" fill="white" />
              )}
            </div>
          </button>

        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 mt-10">
        <button className="px-10 py-4 rounded-full bg-[#C65A3A] hover:bg-[#E07A5F] text-white shadow-lg transition hover:scale-105">
          Reserva tu clase gratis
        </button>
      </div>

    </section>
  );
}