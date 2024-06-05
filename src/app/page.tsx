
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/alsiam.png"
              alt="Al Siam Profile"
              className="shadow-dark"
            />
            <h1>Rasel Shikdar</h1>
            <p>Web Developer</p>
            <div className="social-links">
              <a href="https://twitter.com/raselshikdar_" target="_blank">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://facebook.com/raselshiikdar" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/raselshikdar" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://instagram.com/raselshiikdar" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://linkedin.com/in/rasel597" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
