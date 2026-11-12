
import { motion } from "motion/react";
import heroImage from "../assets/images/hero_couple_reference.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <p className="ganesh">॥ श्री गणेशाय नमः ॥</p>
        <p className="hero-overline">TOGETHER WITH OUR FAMILIES</p>

        <h1>
          Sanket <span>&</span>
          <br />
          Pranjali
        </h1>

        <div className="gold-divider">❧ ✦ ❧</div>
        <p className="hero-subtitle">Two hearts · One journey · Forever</p>

        <div className="hero-date">
          <span>▦ &nbsp;18th Dec 2026</span>
          <span>12:35 PM</span>
        </div>

        <a href="#events" className="primary-button">
          ✿ &nbsp; Open Invitation &nbsp; →
        </a>
      </div>

      <motion.div
        className="hero-art"
        initial={{ opacity: 0.7, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src={heroImage}
          alt="Wedding illustration of Sanket and Pranjali"
        />
        <span className="hero-art-caption">सोबत तू, आणि स्वप्नं...</span>
      </motion.div>
    </section>
  );
}
