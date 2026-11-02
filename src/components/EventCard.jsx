
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import engagementVideo from "../assets/vedios/sanket_pranjali_ring_exchange.mp4";
import sangeetVideo from "../assets/vedios/sanket_pranjali_sangeet_twirl.mp4";
import haldiVideo from "../assets/vedios/Sanket_and_Pranjali_Haldi_Celebration.mp4";
import weddingVideo from "../assets/vedios/sanket_and_pranjali_varmala.mp4";

const eventVideos = {
  engagement: {
    src: engagementVideo,
    eyebrow: "A MOMENT TO CHERISH",
    caption: "A promise of forever 💍",
  },
  sangeet: {
    src: sangeetVideo,
    eyebrow: "LET THE MUSIC PLAY",
    caption: "A joyful twirl beneath the festive lights ✨",
  },
  haldi: {
    src: haldiVideo,
    eyebrow: "HALDI, FLOWERS & FUN",
    caption: "A beautiful celebration filled with love 🌼",
  },
  wedding: {
    src: weddingVideo,
    eyebrow: "TWO HEARTS, ONE FOREVER",
    caption: "A beautiful beginning to a lifetime together 🌺",
  },
};

export default function EventCard({ event }) {
  const [showVideo, setShowVideo] = useState(false);
  const video = eventVideos[event.id];

  function closeVideo() {
    setShowVideo(false);
  }

  return (
    <>
      <motion.article
        className={`event-card ${event.id}`}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <button
          className="event-card-trigger"
          type="button"
          onClick={() => setShowVideo(true)}
          aria-label={`Watch ${event.name} video`}
        >
          <div className="event-image">
            <img
              src={event.image}
              alt={`${event.name} celebration illustration`}
              loading="lazy"
            />

            <span className="event-image-label">
              {event.tagline}
            </span>
          </div>

          <div className="event-details">
            <p className="event-date">{event.date}</p>

            <h3>{event.name}</h3>

            <p className="event-time">
              ◷ {event.time}
            </p>

            <p className="event-venue">
              ⌖ {event.venue}
            </p>

            {/* <span className="event-action">
              ▶ Watch Our Moment
            </span> */}
            <span className="event-action">
              <svg
                className="event-play-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M10 8.5L16 12L10 15.5V8.5Z" />
              </svg>
            
              <span>Watch Our Moment</span>
            </span>
          </div>
        </button>
      </motion.article>

      {/* Video popup: rendered only after the button is clicked */}
      <AnimatePresence>
        {showVideo && video && (
          <motion.div
            className="video-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${event.name} video`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
          >
            <motion.div
              className="video-modal-content"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="video-close"
                aria-label="Close video"
                onClick={closeVideo}
              >
                ✕
              </button>

              <p className="video-eyebrow">
                {video.eyebrow}
              </p>

              <h3>Sanket &amp; Pranjali</h3>

              <video
                key={video.src}
                className="event-video"
                src={video.src}
                controls
                autoPlay
                playsInline
                preload="none"
              >
                Your browser does not support HTML video.
              </video>

              <p className="video-caption">
                {video.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
