import './About.css';

export default function About() {
  return (
    <div className="about">
      <div className="about-hero">
        <div className="neon-grid"></div>
        <div className="hero-content">
          <h1 className="page-title">
            <span className="title-line">THE LEGACY OF</span>
            <span className="title-name">DR. ELENA VOLT</span>
          </h1>
          <p className="hero-subtitle">FOUNDER & VISIONARY (1982-2023)</p>
        </div>
      </div>

      <div className="story-section">
        <div className="story-content">
          <div className="chapter">
            <div className="chapter-number">01</div>
            <h2 className="chapter-title">THE SPARK</h2>
            <p className="chapter-text">
              Born in the smog-choked industrial district of Detroit, Elena Volt witnessed her younger
              brother succumb to respiratory failure at age seven—a casualty of the very combustion
              engines that powered her city's economy. That day, standing in the rain outside St. Mary's
              Hospital, she made a vow: to end the age of fossil fuels, no matter the cost.
            </p>
            <p className="chapter-text">
              By 24, she had earned dual PhDs in electrical engineering and materials science from MIT.
              By 28, she had revolutionized battery technology with her breakthrough in solid-state quantum
              cells. The automotive giants offered billions for the patent. She refused them all.
            </p>
          </div>

          <div className="chapter">
            <div className="chapter-number">02</div>
            <h2 className="chapter-title">THE RISE</h2>
            <p className="chapter-text">
              VoltMotors was founded in a abandoned warehouse in 2015 with three employees and Elena's
              life savings. Working 120-hour weeks, surviving on cold coffee and determination, she
              personally assembled the first prototype—the Volt-1. When it hit 0-60 in 2.1 seconds
              on its maiden test run, she wept for the first time since her brother's funeral.
            </p>
            <p className="chapter-text">
              The company exploded. By 2019, VoltMotors had disrupted the entire automotive industry.
              Elena became the youngest self-made female billionaire in history. She didn't celebrate.
              She reinvested everything into research, into making electric vehicles accessible to everyone,
              not just the wealthy elite.
            </p>
          </div>

          <div className="chapter">
            <div className="chapter-number">03</div>
            <h2 className="chapter-title">THE FALL</h2>
            <p className="chapter-text">
              Success bred enemies. Oil conglomerates watched their empires crumble. Rumors of sabotage
              swirled when three VoltMotors factories suffered mysterious fires in 2022. Elena received
              death threats daily. She ignored them, too consumed by her mission to care for her own safety.
            </p>
            <p className="chapter-text">
              On a cold November night in 2023, Elena was working late in the lab, perfecting the
              revolutionary V-Core battery that would extend range to 1,000 miles. The explosion was
              heard for miles. Official reports called it an accidental lithium fire. Those who knew
              Elena knew better—she was meticulous, brilliant, incapable of such a mistake.
            </p>
            <p className="chapter-text">
              She was 41 years old.
            </p>
          </div>

          <div className="chapter memorial">
            <div className="chapter-number">∞</div>
            <h2 className="chapter-title">THE LEGACY</h2>
            <p className="chapter-text">
              Today, every VoltMotors vehicle carries a small lightning bolt etched beneath the hood—a
              tribute to Dr. Elena Volt. Her final designs, recovered from encrypted servers, became
              the foundation for our current fleet. The V-Core battery she died perfecting now powers
              millions of vehicles worldwide, each one a testament to her sacrifice.
            </p>
            <p className="chapter-text">
              We don't just build cars. We honor a promise made by a seven-year-old girl in the rain.
              We carry forward a dream that cost everything.
            </p>
            <p className="memorial-quote">
              "The future isn't powered by oil. It's powered by those brave enough to imagine something better."
              <span className="quote-author">— Dr. Elena Volt, 2022</span>
            </p>
          </div>
        </div>
      </div>

      <div className="values-section">
        <h2 className="section-title">OUR MISSION</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">⚡</div>
            <h3>INNOVATION</h3>
            <p>Pushing the boundaries of electric vehicle technology</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🌍</div>
            <h3>SUSTAINABILITY</h3>
            <p>Building a cleaner future for the next generation</p>
          </div>
          <div className="value-card">
            <div className="value-icon">💚</div>
            <h3>ACCESSIBILITY</h3>
            <p>Making electric vehicles available to everyone</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🔬</div>
            <h3>EXCELLENCE</h3>
            <p>Honoring Elena's standard of perfection</p>
          </div>
        </div>
      </div>
    </div>
  );
}
