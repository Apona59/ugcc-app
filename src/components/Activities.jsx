import { useEffect } from "react";
import './Activity.css';

export default function Activities() {
  useEffect(() => {
    const today = new Date();
    const actcards = document.getElementsByClassName("activitycard");

    for (let i = 0; i < actcards.length; i++) {
      const card = actcards[i];
      const dateElement = card.getElementsByClassName("date")[0];
      const dateText = dateElement.textContent;
      const eventDate = new Date(dateText);

      if (eventDate < today) {
        card.parentElement.style.display = "none";
      }
    }
  }, []);

  return (
    <section className="activities">
      <h1 className="activities-title text-center">Upcoming Activities</h1>
      <div className="actrow">
        <div className="column">
          <div className="activitycard">
            <img
              src="/murdermystery.jpg"
              alt="murder mystery poster"
            />
            <div className="actdetails">
              <h4>
                <b>Murder Mystery Fundraiser</b>
              </h4>
              <p className="date">March 29, 2025</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="activitycard">
            <img
              src="/summit2025-og-image.jpeg"
              alt="Image featuring a link and invite for the online session. Will be added later"
            />
            <div className="actdetails">
              <h4>
                <b>
                  Monthly Session on Cybersecurity - Focus on Network Security
                </b>
              </h4>
              <p className="date">August 29, 2025</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="activitycard">
            <img
              src="/summit2025-og-image.jpeg"
              alt="Open Source Summit Poster with the Date"
            />
            <div className="actdetails">
              <h4>
                <b>Open Source Security Summit</b>
              </h4>
              <p className="date">September 25, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
