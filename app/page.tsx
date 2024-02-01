import Projects from "./components/projects";


export default function Home() {
  return (
    <main>

      <section className="title">
        <h2>HI, I am Linford.<br></br> Pleased to meet you. </h2>
      </section>

      <section className="icons">
        <div className="contact_icons">
          <span className="material-symbols-rounded">mail</span>
          <p>Email</p>
        </div>

        <div className="contact_icons">
          <span className="material-symbols-rounded">article</span>
          <p>CV</p>
        </div>

        <div className="contact_icons">
          <span className="material-symbols-rounded">south</span>
          <p>Contact me</p>
        </div>

      </section>
      <section className="description">
        <p>&#8226; Who am i? Just a fullstack developer showcasing his projects.</p>
        <p>&#8226; Enjoy yourself! Don't forget to contact me if you have any queries. </p>
      </section>

      <Projects />

    </main>
  );
}
