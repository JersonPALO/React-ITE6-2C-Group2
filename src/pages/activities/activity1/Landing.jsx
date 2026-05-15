import "./landing.css";

const Landing = () => {
  return (
    <>
    <main className="homes">
      <header className="headerrr">
        <h1>OurLandingPage</h1>
        <nav>
            <a href="#homepage">Home</a>
            <a href="#members">Members</a>
        </nav>
      </header>
      <section id="homepage" className="homepage">
          <h1>Welcome To Our Landing Page</h1>
          <h2>We are the GROUP 2</h2>
          <h3>BSIT - 2C</h3>
      </section>
      <section id="members" className="members">
        <h1>MEMBERS:</h1>
        <h2>Jerson M. Palomeras</h2>
        <h2>Maria Mae G. Gonzaga</h2>          
        <h2>Denzel Winston R. Ortiz</h2>
        <h2>Maria Fe S. Velasco</h2>
      </section>
      <footer className="footer">
          <h4>@2026 OurLandingPage.</h4>
          <h4>Address: NorthWest Samar State University</h4>
          <h4>Contact: 09207259692</h4>
      </footer>
    </main>
    </>
  );
}

export default Landing;