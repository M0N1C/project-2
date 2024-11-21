import React, { Suspense, lazy } from "react";

// Lazy load an image to improve performance
const BikeTourImage = lazy(() => import('../components/BikeTourImage'));

function AboutPage() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us - BikeTours Berlin</h1>
      </header>

      <main>
        <section className="about-section">
          <h2>Explore Berlin on Two Wheels</h2>
          <p>
            At <strong>BikeTours Berlin</strong>, we believe the best way to experience Berlin is by bike.
            Whether you're a seasoned cyclist or a first-timer, our tours are designed to offer you a unique way
            to explore the city, learn about its history, and enjoy its vibrant culture—all while staying active.
          </p>

          <p>
            <strong>Our Mission</strong>: We offer expertly guided bike tours across Berlin, showing you the city from
            a local's perspective. Our goal is to provide an enriching experience, filled with historical insights,
            hidden gems, and some of the most iconic landmarks in Berlin. Our tours are suitable for all skill levels,
            ensuring that everyone can enjoy cycling through this beautiful city.
          </p>

          <p>
            <strong>Why Choose Us?</strong>
            <ul>
              <li><strong>Expert Guides</strong>: Our friendly and knowledgeable guides will ensure you have a safe and informative experience.</li>
              <li><strong>Eco-Friendly</strong>: Cycling is one of the most environmentally friendly ways to explore a city, and we are committed to promoting sustainable travel.</li>
              <li><strong>Small Group Sizes</strong>: We believe in keeping our tours personal and enjoyable by limiting group sizes, allowing for a more intimate experience.</li>
              <li><strong>Customizable Routes</strong>: From the historical heart of Berlin to the trendy neighborhoods, we offer various routes that can be tailored to your interests.</li>
            </ul>
          </p>

          <p>
            <strong>Safety First</strong>: Your safety is our priority. All of our bikes are well-maintained and we provide
            helmets, locks, and other necessary equipment for a secure and comfortable ride. Our routes are carefully
            planned to avoid heavy traffic, ensuring a smooth and enjoyable experience.
          </p>

          <Suspense fallback={<div>Loading image...</div>}>
            <BikeTourImage />
          </Suspense>

        </section>
      </main>

      <footer className="about-footer">
        <p>&copy; 2024 BikeTours Berlin. All rights reserved.</p>
      </footer>

      {/* Existing part of AboutPage */}
      <div className="contact-info">
        <h1>Ironhack 2024, Berlin</h1>
        <p>For inquiries, please fill the form.</p>
      </div>
    </div>
  );
}

export default AboutPage;

