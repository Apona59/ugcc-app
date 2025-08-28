import React from "react";
import styles from "./styles.module.css";

export default function UGCCImportantLinks() {
  return (
    <>
      <section>
        <div className="importlinks">
          <h2>Important Organizations in Cybersecurity</h2>
          <ul>
            <li>
              <a href="https://www.nist.gov/">
                National Institute of Standards and Technology
              </a>
              <div style={{ textAlign: "center" }}>
                <iframe
                  width="1000"
                  height="500"
                  src="https://www.youtube.com/embed/o2to3l-Tn6M?si=xXngKBijQyMq1WVF"
                  title="NIST Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <article>
                The National Institute of Standards and Technology (NIST) is a key
                player in developing standards and best practices within the
                industry. They are also directly responsible for the selection
                and approval of the Advanced Encryption Standards used worldwide
                for encryption. They are a US Government Organization.
              </article>
            </li>

            <li>
              <a href="https://www.cisa.gov/">
                Cybersecurity & Infrastructure Security Agency
              </a>
              <div style={{ textAlign: "center" }}>
                <iframe
                  width="1000"
                  height="500"
                  src="https://www.youtube.com/embed/eedQCiI3NoM?si=XAJIBNIqkqmyVstA"
                  title="CISA Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <article>
                CISA, created in 2018 in the US, offers free resources on
                cybersecurity as its central aim is to safeguard individuals,
                organizations, and government from threats.
              </article>
            </li>

            <li>
              <a href="https://ecs-org.eu/">
                European Cyber Security Organisation
              </a>
              <article>
                The European Cyber Security Organisation (ECSO) is a European,
                cross-sectoral membership organisation that contributes to
                developing cybersecurity communities and building the European
                cybersecurity ecosystem. They usually host events and coordinate
                within the EU to provide facts on cybersecurity risks to a wide
                variety of organizations.
              </article>
            </li>
          </ul>
        </div>
      </section>

      <footer>
        <a href="https://www.facebook.com/uogcyberclub">
          <h3>Contact Us: https://www.facebook.com/uogcyberclub</h3>
        </a>
        <p>© 2025 University of Guyana Cybersecurity Club</p>
      </footer>
    </>
  );
}
