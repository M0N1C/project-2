import React, { Suspense, lazy } from "react";

// Lazy load an image for improved performance
const RouteImage = lazy(() => import("../Components/RouteImage"));

function HomePage() {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="image-container">
          <Suspense fallback={<div>Loading...</div>}>
            <RouteImage />
          </Suspense>
        </div>
        <h1>Explore Berlin on Two Wheels!</h1>
        <p>Join us for an unforgettable bike tour and experience Berlin like never before!</p>
      </header>

      <main>
        <section className="home-routes">
          <h2>Our Bike Routes</h2>
          <p>
            We offer a variety of exciting bike tours, each designed to show you a different side of Berlin.
            Whether you're interested in the city's rich history, vibrant culture, or hidden gems, we have a route for you!
          </p>

          <ul>
            <li>
              <strong>The Classic Berlin Tour</strong>: Explore Berlin's most iconic landmarks, including the Brandenburg Gate, the Berlin Wall Memorial, and Checkpoint Charlie.
              <br />
              <em>Duration:</em> 3 hours | <em>Difficulty:</em> Easy
            </li>
            <li>
              <strong>The Historical Berlin Tour</strong>: Dive into Berlin’s history with a focus on World War II and the Cold War. Visit historic sites such as the Reichstag and the Holocaust Memorial.
              <br />
              <em>Duration:</em> 4 hours | <em>Difficulty:</em> Medium
            </li>
            <li>
              <strong>The Hidden Berlin Tour</strong>: Discover Berlin's off-the-beaten-path locations, from trendy neighborhoods to secret gardens and alternative street art.
              <br />
              <em>Duration:</em> 2.5 hours | <em>Difficulty:</em> Easy
            </li>
            <li>
              <strong>Night Ride</strong>: See the city in a different light on our night bike ride, featuring a slower pace and stunning nighttime views of Berlin’s monuments and architecture.
              <br />
              <em>Duration:</em> 2 hours | <em>Difficulty:</em> Easy
            </li>
          </ul>
        </section>

        <section className="home-schedule">
          <h2>Tour Schedules</h2>
          <p>
            Our tours are available daily, and we run several departures throughout the day. Below are our standard times:
          </p>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Tour</th>
                <th>Time</th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Classic Berlin Tour</td>
                <td>10:00 AM | 2:00 PM</td>
                <td>Available Daily</td>
              </tr>
              <tr>
                <td>The Historical Berlin Tour</td>
                <td>11:00 AM | 4:00 PM</td>
                <td>Available Daily</td>
              </tr>
              <tr>
                <td>The Hidden Berlin Tour</td>
                <td>9:30 AM | 3:30 PM</td>
                <td>Available Daily</td>
              </tr>
              <tr>
                <td>Night Ride</td>
                <td>8:00 PM</td>
                <td>Available Wednesday - Sunday</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="home-booking">
          <h2>Book Your Tour</h2>
          <p>Ready to explore Berlin on two wheels? Book your tour now!</p>
          <button onClick={() => window.location.href = "/booking"}>Book Now</button>
        </section>
      </main>

      <footer className="home-footer">
        <p>&copy; 2024 BikeTours Berlin. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
