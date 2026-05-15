import { Link } from "react-router-dom";
import "./mcostyle.css";

const MCO = () => {
  return (
    <>
      {/* Header */}
      <header>
        <h1>OURPG</h1>
        <nav>
          <a className="a1" href="#homepage">Home</a>
          <a className="a2" href="#AboutUs">About Us</a>
          <a className="a3" href="#Activities">Activities</a>
        </nav>
      </header>

      {/* Homepage Section */}
      <section id="homepage" className="homepg">
        <h1>MAJOR COURSE OUTPUT 2</h1>
        <h2>ITE 6 - Application Development and Emerging Technologies</h2>
      </section>

      {/* About Ourself Section */}
      <section id="AboutUs" className="about-ourself">
        <h2>About Us:</h2>
        <h5 className="group-name">Group 6</h5>

        <h2>MEMBERS:</h2>
        <div className="Inline">
          {/* Member 1 */}
          <div className="cards">
            <p><strong>Name:</strong> Maria Fe Velasco Erella</p>
            <p><strong>Age:</strong> 26</p>
            <p><strong>Address:</strong> Brgy. Carayman, Calbayog City</p>
            <p><strong>Course:</strong> BS Information Technology</p>
            <p><strong>Year Level:</strong> 2nd Year</p>
            <p><strong>Hobbies:</strong></p>
            <ul>
              <li>Cooking</li>
              <li>Reading novels</li>
              <li>Watching movies</li>
              <li>Listening to music</li>
              <li>Traveling</li>
            </ul>
          </div>

          {/* Member 2 */}
          <div className="cards">
            <p><strong>Name:</strong> Jerson Palomeras</p>
            <p><strong>Age:</strong> 19</p>
            <p><strong>Address:</strong> Brgy. Dagum, Calbayog City, Samar</p>
            <p><strong>Course:</strong> BS Information Technology</p>
            <p><strong>Year Level:</strong> 2nd Year</p>
            <p><strong>Hobbies:</strong></p>
            <ul>
              <li>Playing Mobile Games</li>
              <li>Reading Manwha</li>
              <li>Watching Anime</li>
            </ul>
          </div>

          {/* Member 3 */}
          <div className="cards">
            <p><strong>Name:</strong> Denzel Winston Ortiz</p>
            <p><strong>Age:</strong> 21</p>
            <p><strong>Address:</strong> Brgy. West Awang, Calbayog City, Samar</p>
            <p><strong>Course:</strong> BS Information Technology</p>
            <p><strong>Year Level:</strong> 2nd Year</p>
            <p><strong>Hobbies:</strong></p>
            <ul>
              <li>Playing Online Games</li>
              <li>Playing Basketball</li>
              <li>Listening to Music</li>
            </ul>
          </div>

          {/* Member 4 */}
          <div className="cards">
            <p><strong>Name:</strong> Maria Mae Gonzaga</p>
            <p><strong>Age:</strong> 20</p>
            <p><strong>Address:</strong> Brgy. Palale, Sta. Margarita, Samar</p>
            <p><strong>Course:</strong> BS Information Technology</p>
            <p><strong>Year Level:</strong> 2nd Year</p>
            <p><strong>Hobbies:</strong></p>
            <ul>
              <li>Reading Novels and Comics</li>
              <li>Watching Anime</li>
              <li>Singing</li>
              <li>Cooking</li>
              <li>Doing Household Chores</li>
              <li>Sleeping</li>
              <li>Journaling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="Activities" className="activities">
        <h2>Our Laboratory Activities:</h2>
        <Link to="/Activity1">Activity 1</Link>
        <Link to="/Activity2">Activity 2</Link>
        <Link to="/Activity3">Activity 3</Link>
        <Link to="/Activity4">Activity 4</Link>
        <Link to="/Activity5">Activity 5</Link>
      </section>

      {/* Footer */}
      <footer>
        <h4>@2026 THANK YOU FOR VISITING.</h4>
      </footer>
    </>
  );
};

export default MCO;

