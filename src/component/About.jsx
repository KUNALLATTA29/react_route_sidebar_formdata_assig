import './about.css'

export default function About() {
  return (
    <div className="about-container">
      <h1>My Resume</h1>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>CSS</li>
          <li>Node.js</li>
          <li>Git</li>
          <li>Python</li>
        </ul>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div className="job">
          <h3>MERN Stack Intern at Regex</h3>
          <p>February 2024 - Present</p>
          <p>Worked on developing full-stack web applications using MongoDB, Express.js, React, and Node.js.</p>
        </div>
        <div className="job">
          <h3>Freelancer Frontend Developer</h3>
          <p>January 2023 - February 2024</p>
          <p>Providing Frontend Solutions as Freelancer.</p>
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="school">
          <h3>BTech in Computer Science</h3>
          <p>College of Engineering and Technology, 2022</p>
        </div>
      </section>
    </div>
  )
}
