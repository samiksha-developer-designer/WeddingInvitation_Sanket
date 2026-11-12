
import { useEffect, useState } from "react";

const weddingDate = new Date("2026-12-18T12:30:00+05:30").getTime();

function getRemainingTime() {
  const difference = Math.max(0, weddingDate - Date.now());

  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isWeddingDay: difference === 0,
  };
}

export default function Countdown() {
  const [remaining, setRemaining] = useState(getRemainingTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(getRemainingTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const units = [
    ["DAYS", remaining.days],
    ["HOURS", remaining.hours],
    ["MINUTES", remaining.minutes],
    ["SECONDS", remaining.seconds],
  ];

  return (
    <section id="countdown" className="countdown-section">
      <div className="countdown-side">
        <span className="ganesh-symbol">ॐ</span>
        <p>शुभमंगल</p>
        <p>सावधान</p>
      </div>

      <div className="countdown-main">
        <p className="eyebrow">✧ THE BIG DAY IS APPROACHING ✧</p>

        {remaining.isWeddingDay ? (
          <h2 className="countdown-celebration">
            Today is the day! Sanket & Pranjali 💛
          </h2>
        ) : (
          <div className="countdown-grid">
            {units.map(([label, value]) => (
              <div className="countdown-box" key={label}>
                <span>{String(value).padStart(2, "0")}</span>
                <small>{label}</small>
              </div>
            ))}
          </div>
        )}

        <p className="countdown-footer">
          Two hearts &nbsp; ✦ &nbsp; One journey &nbsp; ✦ &nbsp; Forever
        </p>
      </div>

      <div className="countdown-side countdown-couple">
        <p>Sanket & Pranjali</p>
        <span>18th Dec 2026</span>
        <span>12:35 PM</span>
      </div>
    </section>
  );
}
