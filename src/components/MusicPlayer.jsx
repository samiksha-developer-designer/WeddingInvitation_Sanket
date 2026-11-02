
import { useRef, useState, useEffect } from "react";
import weddingMusic from "../assets/music/wedding-instrumental.mp3";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.25;

    const startMusic = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        console.log("Autoplay blocked. Waiting for user interaction.");
        setIsPlaying(false);
      }
    };

    startMusic();

    // Start music after the visitor interacts with the website
    const handleFirstInteraction = async () => {
      if (audio.paused) {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch {
          console.log("Music playback could not start.");
        }
      }

      // Remove listeners after the first interaction
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("keydown", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      audio.pause();

      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  const playMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Unable to play music:", error);
    }
  };

  const pauseMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();
    setIsPlaying(false);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={weddingMusic}
        autoPlay
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {!isPlaying ? (
        <button
          className="music-button"
          type="button"
          onClick={playMusic}
        >
          ▶ Play Music
        </button>
      ) : (
        <button
          className="music-button"
          type="button"
          onClick={pauseMusic}
        >
          ⏸ Pause Music
        </button>
      )}
    </>
  );
}


// import { useRef, useState, useEffect } from "react";
// import weddingMusic from "../assets/music/wedding-instrumental.mp3";

// export default function MusicPlayer() {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio) return;

//     audio.volume = 0.25;

//     const startMusic = async () => {
//       try {
//         await audio.play();
//         setIsPlaying(true);
//       } catch  {
//         // Browsers may block autoplay with sound.
//         console.log("Autoplay was blocked by the browser.");
//         setIsPlaying(false);
//       }
//     };

//     startMusic();

//     return () => {
//       audio.pause();
//     };
//   }, []);

//   const playMusic = async () => {
//   try {
//     await audioRef.current.play();
//     setIsPlaying(true);
//   } catch (error) {
//     console.error("Unable to play music:", error);
//   }
// };

// // const pauseMusic = () => {
// //   audioRef.current.pause();
// //   setIsPlaying(false);
// // };
//   const pauseMusic = () => {
//     const audio = audioRef.current;
//     if (!audio) return;

//     audio.pause();
//     setIsPlaying(false);
//   };

//   return (
//     <>
//       <audio
//         ref={audioRef}
//         src={weddingMusic}
//         loop
//         preload="auto"
//         onPlay={() => setIsPlaying(true)}
//         onPause={() => setIsPlaying(false)}
//       />

//       {!isPlaying ? (
//   <button
//   className="music-button"
//   type="button"
//   onClick={playMusic}>
//     ▶ Play Music
//   </button>
// ) : (
//   <button
//   className="music-button"
//   type="button"
//   onClick={pauseMusic}>
//     ⏸ Pause Music
//   </button>
// )}
//     </>
//   );
// }