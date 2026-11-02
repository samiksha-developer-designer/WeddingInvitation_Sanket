
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import EventCard from "./components/EventCard";
import Footer from "./components/Footer";

import engagementImage from "./assets/images/engagement_card.png";
import sangeetImage from "./assets/images/sangeet_card.png";
import haldiImage from "./assets/images/haldi_card.png";
import weddingImage from "./assets/images/wedding_card.png";

const events = [
  {
    id: "engagement",
    number: "01",
    name: "Engagement",
    date: "16th Dec 2026",
    time: "4:00 PM",
    venue: "Chandralok Creation, Datala Road, Chandrapur",
    tagline: "A promise of forever",
    image: engagementImage,
  },
  {
    id: "sangeet",
    number: "02",
    name: "Sangeet",
    date: "16th Dec 2026",
    time: "7:00 PM",
    venue: "Chandralok Creation, Datala Road, Chandrapur",
    tagline: "Dance, music and memories",
    image: sangeetImage,
  },
  {
    id: "haldi",
    number: "03",
    name: "Haldi",
    date: "17th Dec 2026",
    time: "6:00 PM – 10:00 PM",
    venue: "Our Home, Trimurti Nagar, Haveli Garden Road, Chandrapur",
    tagline: "A splash of happiness",
    image: haldiImage,
  },
  {
    id: "wedding",
    number: "04",
    name: "Wedding",
    date: "18th Dec 2026",
    time: "12:30 PM",
    venue: "Chandralok Creation, Datala Road, Chandrapur",
    tagline: "Two souls, one journey",
    image: weddingImage,
  },
];

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Countdown />

      <section id="events" className="events-section">
        <header className="section-heading">
          <p className="eyebrow">✿ SAVE THE DATES ✿</p>
          <h2>Our Wedding Celebrations</h2>
          <p>Join us in celebrating love, togetherness and new beginnings</p>
        </header>

        <div className="events-grid">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <p className="interaction-hint">
          Click on Watch Our Moment to Explore Each Celebration
        </p>
      </section>

      <Footer />
    </>
  );
}
