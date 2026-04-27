"use client";
import { useEffect, useState, useRef } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Swords, Shield, Trophy, Volume2, VolumeX, Heart } from "lucide-react";

export default function RijuBirthday() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Toggle music and prevent default browser download behavior
  const toggleMusic = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => console.log("Playback blocked:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const triggerConfetti = () => {
    const end = Date.now() + 5 * 1000;
    (function frame() {
      confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: ["#EAB308", "#EF4444"] });
      confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: ["#3B82F6", "#ffffff"] });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  useEffect(() => {
    if (isOpen) {
      triggerConfetti();
      if (audioRef.current) {
        audioRef.current.volume = 0.5;
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => console.log("Autoplay blocked. User toggle required."));
      }
    }
  }, [isOpen]);

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-4 font-sans">
      {/* Audio Setup */}
      <audio 
        ref={audioRef} 
        src="/audio/bday-song.mp3" 
        preload="auto" 
        loop 
        controlsList="nodownload" 
      />

      {/* Background: Faded Aston Martin */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 scale-105 transition-all duration-1000"
        style={{ backgroundImage: "url('/images/bg-car.jpg')" }}
      />

      <AnimatePresence>
        {!isOpen ? (
          <motion.div exit={{ opacity: 0, scale: 0.9 }} className="z-20 text-center">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="px-12 py-6 bg-yellow-500 text-black font-black rounded-full shadow-[0_0_50px_rgba(234,179,8,0.4)] animate-bounce text-2xl uppercase tracking-tighter"
            >
              FOR MY BLUD AYUSH 🎊
            </motion.button>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 w-full max-w-3xl p-6 md:p-10 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-[3rem] shadow-2xl overflow-y-auto max-h-[90vh] custom-scrollbar"
          >
            {/* Music Controller */}
            <button 
              onClick={toggleMusic}
              className="absolute top-8 right-8 p-3 bg-yellow-500/10 rounded-full border border-yellow-500/40 text-yellow-500 hover:bg-yellow-500/20 transition-all z-50"
            >
              {isPlaying ? <Volume2 size={24} className="animate-pulse" /> : <VolumeX size={24} />}
            </button>

            <div className="text-center mb-10">
              <motion.h1 
                initial={{ scale: 0.5 }} 
                animate={{ scale: 1 }}
                className="text-5xl md:text-7xl font-black bg-gradient-to-r from-red-600 via-yellow-400 to-blue-500 bg-clip-text text-transparent italic leading-tight"
              >
                Happy 27th BDay AYUSH!
              </motion.h1>
              <p className="text-gray-400 tracking-[0.4em] text-xs mt-2 uppercase font-bold">
                Ayush Jaipuriar • Liverpool Edition Card
              </p>
            </div>

            <div className="space-y-6 text-white text-center mb-10 text-lg">
              <p>
                HAPPY BIRTHDAY TO YOU <span className="text-yellow-400 font-bold underline decoration-yellow-400/50">AYUSH</span> !! 🎂 🎉 🎈 🍫 ☃️ 🍧 ⚽ 🏆 
                From our  <span className="text-blue-400">KIIT college days to </span> Academics, Placements, Career talks to the endless 
                <span className="text-green-400"> worlds of Football & Gaming</span> , you've been a truly great brother🥳.
              </p>
              
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.5 }}
                className="p-5 bg-yellow-500/5 rounded-2xl border border-yellow-500/20 italic text-yellow-100 shadow-inner"
              >
                "You'll Never Walk Alone" ✊ Enjoy your Day, <span className="text-red-400 font-bold">Have A Blast</span> today & have a  <strong>Great Year Ahead Bhai</strong>💎
              </motion.div>
            </div>

            {/* Birthday Video */}
            <div className="mb-10 rounded-3xl overflow-hidden border-4 border-yellow-500/20 shadow-2xl bg-black">
              <video controls className="w-full aspect-video">
                <source src="/videos/bday-video.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Expanded Memory Grid (12 Images) */}
            <h2 className="text-white font-bold text-center mb-4 uppercase tracking-widest text-sm opacity-50">Our Memories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.05, zIndex: 1 }}
                  className="aspect-square bg-gray-900 rounded-xl overflow-hidden border border-white/10 shadow-lg"
                >
                  <img 
                    src={`/images/pic${i + 1}.jpg`} 
                    alt={`Memory ${i + 1}`} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                  />
                </motion.div>
              ))}
            </div>

            {/* Interest Badges */}
            <div className="flex justify-around items-center pt-8 border-t border-white/10 text-yellow-500">
              {/*
              <div className="flex flex-col items-center gap-1">
                <Car size={28}/>
                <span className="text-[10px] text-white uppercase font-bold">DBS</span>
              </div>*/}
              <div className="flex flex-col items-center gap-1">
                <Swords size={28}/>
                <span className="text-[10px] text-white uppercase font-bold">Alex Becker</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Shield size={28}/>
                <span className="text-[10px] text-white uppercase font-bold">YNWA</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Trophy size={28} className="text-blue-500" />
                <span className="text-[10px] text-white uppercase font-bold">Liverpool</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Heart size={28} className="text-red-500 fill-red-500 animate-pulse" />
                <span className="text-[10px] text-white uppercase font-bold">Klopp</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}