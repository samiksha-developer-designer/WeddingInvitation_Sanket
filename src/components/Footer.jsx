
import { useState } from "react";
import storyImage from "../assets/images/couple_bannerimage.jpeg";
import couplePhoto from "../assets/images/engagement_moments.png";
import couplePhoto1 from "../assets/images/sangeet_moment.png";
import couplePhoto2 from "../assets/images/haldi_moments.png";
import couplePhoto3 from "../assets/images/wedding_moments.png";

// const invitationMessage =
//   "With love, we invite you to celebrate the wedding of Sanket & Pranjali on 18 December 2026 at 12:30 PM at Chandralok Creation, Chandrapur.";


export default function Footer() {
  const [recipientName, setRecipientName] = useState("");
  const [copied, setCopied] = useState(false);

  const inviteUrl =
    typeof window !== "undefined" ? window.location.href : "";

  // const shareMessage = `${invitationMessage}\n\nOur wedding events invitation: ${inviteUrl}`;


  // const shareMessage = `Hi @all,

  // We are excited to share the dates for our upcoming wedding celebrations and hope you can join us!

  // 📅 Schedule at a glance:
  // • 16th Dec: Engagement (4:00 PM) & Sangeet (7:00 PM) @ Chandralok Creation
  // • 17th Dec: Haldi @ Respective Homes
  // • 18th Dec: Wedding (12:30 PM) @ Chandralok Creation

  // 🕺 Get your dance shoes ready and start preparing for the Sangeet performances!

  // Official invitation and details to follow separately. Please save the dates to celebrate with us! 💛

  // Our wedding invitation:
  // ${inviteUrl}

  // Warm regards,
  // Sanket & Pranjali`;


const shareMessage = `Hi ${recipientName.trim() || "there"},

We are excited to share the dates for our upcoming wedding celebrations. It would mean so much to us to have you join our family in celebrating these beautiful moments!

 \u{1F5D3}\u{FE0F}
 📅 Schedule at a glance:

 • 16th Dec: Engagement (3:00 PM) & Sangeet (7:00 PM) @Chandralok Creation, Datala Road, Chandrapur
 • 17th Dec: Haldi (2:00 PM) @Our Home (Trimurti Nagar, Haveli Garden Road, Chandrapur)
 • 18th Dec: Wedding (12:30 PM) @Chandralok Creation, Datala Road, Chandrapur

 \u{1F57A}
 🕺 Get your dance shoes ready and start preparing for the Sangeet performances!

 Please save the dates to celebrate with us! 💛
 \u{1F49B}

 Our wedding invitation:
 ${inviteUrl}

 Warm regards,
 Sanket Sapat & Family`;


  // function shareOnWhatsApp() {
  //   window.open(
  //     `https://wa.me/?text=${encodeURIComponent(shareMessage)}`,
  //     "_blank",
  //     "noopener,noreferrer"
  //   );
  // }

  function shareOnWhatsApp() {
    const message = shareMessage.normalize("NFC");

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  async function shareOnInstagram() {
    try {
      await navigator.clipboard.writeText(shareMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 3000);
    } catch {
      window.prompt("Copy and share your wedding invitation:", shareMessage);
    }
  }

  async function copyInviteLink() {
    try {
      await navigator.clipboard.writeText(inviteUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 3000);
    } catch {
      window.prompt("Copy your wedding invitation link:", inviteUrl);
    }
  }

  const galleryPhotos = [
    {
      src: couplePhoto,
      alt: "Romantic illustration of a couple",
      caption: "Our beginning",
    },
    {
      src: couplePhoto1,
      alt: "Sanket and Pranjali together",
      caption: "You & me",
    },
    {
      src: couplePhoto2,
      alt: "A special memory of Sanket and Pranjali",
      caption: "Little moments",
    },
    {
      src: couplePhoto3,
      alt: "A beautiful memory of the couple",
      caption: "Forever starts here",
    },
  ];

  return (
    <section className="wedding-finale">
      {/* Our story */}
      <section className="story-section" id="story">
        <p className="finale-eyebrow">A LITTLE LOVE STORY</p>
        <h2 className="finale-heading">Every love has a story...</h2>
        <div className="finale-ornament">❧ ✦ ❧</div>

        <div className="story-intro">
          <img
            className="story-feature-image"
            src={storyImage}
            alt="Romantic couple illustration"
            loading="lazy"
          />

          <div className="story-copy">
            <p className="script-text">Sanket & Pranjali</p>
            <h3>Two hearts, one beautiful journey</h3>
            <p>
              From little moments to lifelong promises, our journey has
              brought us to the beginning of something beautiful. With
              the blessings of our families and the love of our dear ones,
              we are ready to begin our forever.
            </p>
            <p className="story-signature">
              And our favourite chapter is yet to begin...
            </p>
          </div>
        </div>
      </section>

      {/* Couple gallery */}
      <section className="couple-gallery" aria-labelledby="gallery-title">
        <p className="finale-eyebrow">OUR FAVOURITE MEMORIES</p>
        <h2 className="finale-heading" id="gallery-title">
          Moments to cherish
        </h2>

        <div className="couple-gallery-grid">
          {galleryPhotos.map((photo, index) => (
            <figure className="gallery-photo" key={photo.src}>
              <div className="gallery-image-frame">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="gallery-heart" aria-hidden="true">
                  ♡
                </span>
              </div>
              <figcaption>
                <span className="gallery-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Centered venue */}
      <section className="venue-section" id="venue">
        <p className="finale-eyebrow">SAVE THE LOCATION</p>
        <h2 className="finale-heading">Where our forever begins</h2>
        <div className="venue-icon" aria-hidden="true">⌖</div>

        <div className="venue-main">
          <p className="venue-label">THE WEDDING CELEBRATION</p>
          <h3>Chandralok Creation</h3>
          <p>Datala Road, Chandrapur, Maharashtra</p>

          <a
            className="gold-outline-button"
            href="https://maps.app.goo.gl/ZdkjJYRTdN8zL72o8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
            {/* <span aria-hidden="true">↗</span> */}
            <svg className="link-arrow" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 17L17 7M7 7H17V17" />
            </svg>
          </a>
        </div>

        <div className="venue-divider">
          <span>✦</span>
        </div>

        <div className="haldi-location">
          <p className="venue-label">A COLOURFUL HALDI CELEBRATION</p>
          <h3>At Our Home</h3>
          <p>Trimurti Nagar, Haveli Garden Road, Chandrapur</p>
          <a
            className="text-link"
            href="https://maps.app.goo.gl/bnhfWNWmAJTiZuKr9?g_st=iw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find the location
            <svg className="link-arrow" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 17L17 7M7 7H17V17" />
            </svg>
          </a>
        </div>

        <p className="venue-note">
          We can't wait to celebrate these beautiful moments with you
        </p>
      </section>

      {/* Share invitation */}
      <section className="share-section" aria-labelledby="share-title">
        <span className="share-sparkle" aria-hidden="true">✧</span>
        <p className="finale-eyebrow">LOVE IS MEANT TO BE SHARED</p>
        <h2 className="finale-heading" id="share-title">
          Spread the happiness
        </h2>
        <p className="share-description">
          Share our invitation with family and friends and help us
          make this celebration even more special
        </p>

        <div className="share-actions">

          {/* Recipient name */}
          <input
            type="text"
            className="recipient-name-input"
            placeholder="Enter recipient's name (e.g. Rahul)"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            aria-label="Recipient's name"
          />
          <button
            type="button"
            className="share-button whatsapp-button"
            onClick={shareOnWhatsApp}
          >
            <span aria-hidden="true">♡</span> Share on WhatsApp
          </button>

          <button
            type="button"
            className="share-button instagram-button"
            onClick={shareOnInstagram}
          >
            <span aria-hidden="true">◎</span> Share for Instagram
          </button>

          <button
            type="button"
            className="share-button copy-button"
            onClick={copyInviteLink}
          >
            <span aria-hidden="true">⌁</span> {copied ? "Copied!" : "Copy Invite Link"}
          </button>
        </div>

        <p className="share-feedback" aria-live="polite">
          {copied
            ? "Invitation copied! Paste it into Instagram or send it to your loved ones."
            : "Share the love, one message at a time"}
        </p>
      </section>

      {/* Wedding footer */}
      <footer className="wedding-bottom">
        <div className="gold-divider">❧ ✦ ❧</div>
        <p className="bottom-kicker">WITH ALL OUR LOVE</p>
        {/* <h2 className="bottom-couple">Sanket <span>&</span> Pranjali</h2> */}
        <h2 className="bottom-couple">Sapat Family</h2>
        <p className="bottom-date">16 — 18 December 2026</p>
        <p className="footer-message">
          Your presence will make our celebration even more special.
        </p>
        {/* <p className="copyright">Made with love · December 2026</p> */}
        <span className="made-with-love">
          Made with Love
          <svg
            className="love-heart"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 21s-9-5.8-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.2-9 12-9 12Z" />
          </svg>
        </span>
      </footer>
    </section>
  );
}
