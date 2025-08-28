export default function Constitution() {
  return (
    <div className="constitution">
      <h1 className="constitution-title">
        Constitution of the University of Guyana Cybersecurity Club
      </h1>

      <section className="article1">
        <h2 className="article-title">Article 1 - Name of Club</h2>
        <p>
          The club's official name will be the "UNIVERSITY OF GUYANA
          CYBERSECURITY CLUB", and may be referred to as "UG - Cyber Security
          Club”. No other names will be used to advertise or represent the club.
        </p>
      </section>

      <section className="article2">
        <h2 className="article-title">Article 2 - Club Mandate</h2>
        <p>
          <strong>Vision:</strong> To be a highly respected and principled team
          of skilled Cyber-security practitioners.
        </p>
        <p>
          <strong>Mission:</strong> To provide members with knowledge and
          experience of Cyber Security principles and tools to improve their
          academic and professional careers.
        </p>
        <p>
          <strong>Strategy:</strong> The UG Cybersecurity Club will emphasize
          self-learning and focus on freely available literature and exercises.
          The Club will utilise FOSS (Free and Open Source Software).
        </p>
        <div className="objectives">
          <strong>Objectives:</strong>
          <ul className="objectives-list">
            <li>To educate the members with relevant cyber security skills</li>
            <li>To discuss issues related to Cyber Security</li>
            <li>To share with its members information relevant to securing information</li>
            <li>
              To prepare for and participate in local, regional and international
              Capture The Flag competitions
            </li>
            <li>
              To establish linkages with relevant organizations involved in securing information
            </li>
          </ul>
        </div>
      </section>

      <section className="article3">
        <h2 className="article-title">Article 3 - Membership</h2>
        <p>
          Membership is open to all undergraduate students and faculty members in
          the Computer Science Department at the University of Guyana.
        </p>
      </section>

      <section className="article4">
        <h2 className="article-title">Article 4 - Duties of Members</h2>
        <p>
          The Executive Committee will consist of a President, Vice President,
          Secretary, Treasurer, Events Coordinator and Club Advisor.
        </p>

        <div className="president">
          <h3 className="role-title">President</h3>
          <ul className="duties-list">
            <li>Chair all meetings</li>
            <li>Represent the club when necessary</li>
            <li>Perform club administration functions</li>
            <li>Plan strategies and set goals</li>
          </ul>
        </div>

        <div className="vice-president">
          <h3 className="role-title">Vice President</h3>
          <ul className="duties-list">
            <li>Assist the President in duties</li>
            <li>
              Assume responsibilities of the President in the absence of the
              President, or if the President is unable or unwilling to perform
              duties
            </li>
          </ul>
        </div>

        <div className="secretary">
          <h3 className="role-title">Secretary</h3>
          <ul className="duties-list">
            <li>Distribute newsletters or notices to members</li>
            <li>Record minutes of all meetings</li>
            <li>Represent the club on social media</li>
            <li>Maintain a complete and accurate list of members</li>
          </ul>
        </div>

        <div className="treasurer">
          <h3 className="role-title">Treasurer</h3>
          <ul className="duties-list">
            <li>Maintain accurate financial records</li>
            <li>
              Work with President and Vice President to prepare and present
              budget requests
            </li>
          </ul>
        </div>

        <div className="events-coordinator">
          <h3 className="role-title">Events Coordinator</h3>
          <ul className="duties-list">
            <li>Organize club programs, activities and events</li>
          </ul>
        </div>

        <div className="club-advisor">
          <h3 className="role-title">Club Advisor</h3>
          <ul className="duties-list">
            <li>Be a staff member of the Department of Computer Science</li>
            <li>Serve as a non-voting member of the Executive Committee</li>
            <li>Provide guidance and administrative assistance for events</li>
          </ul>
        </div>
      </section>

      <section className="article5">
        <h2 className="article-title">Article 5 - Meetings</h2>
        <ul className="meetings-list">
          <li>
            General Meetings shall be held at least three times per semester
          </li>
          <li>
            A meeting is quorate if at least one third of the membership is present,
            including the President or Vice-President and Secretary
          </li>
          <li>
            At least one meeting will review the Constitution and long-term goals
          </li>
          <li>
            All Executive Committee members shall be notified at least three
            days before a meeting
          </li>
        </ul>
      </section>

      <section className="article6">
        <h2 className="article-title">Article 6 - Elections/Voting</h2>
        <ul className="elections-list">
          <li>Elections will be held annually by September 30th</li>
          <li>Each club member has one vote</li>
          <li>A candidate is declared successful by simple majority</li>
        </ul>
      </section>

      <section className="article7">
        <h2 className="article-title">Article 7 - Amendments</h2>
        <ul className="amendments-list">
          <li>
            Proposed amendments must be made known to members at least one week
            before discussion
          </li>
          <li>At least 2/3 of members must approve any proposed changes</li>
        </ul>
        <p className="constitution-date">Dated: 27th November, 2017</p>
      </section>
    </div>
  );
}
