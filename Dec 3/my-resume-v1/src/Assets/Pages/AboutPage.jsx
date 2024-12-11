import React from 'react'
import "../CSS/AboutPage.css"

function AboutPage() {
  return (
    <div>
      <header>
    <h1>Nilesh Agarwalla</h1>
    
</header>

<section>
    <h2>Objective</h2>
    <p>A recent graduate in Electronics and Computer Engineering, I have a strong interest in Cloud Computing and Cybersecurity. My foundational knowledge spans AWS, Azure and GCP.</p>
</section>

<section>
    <h2>Skills</h2>
    <ul className="skills">
        <li><u>Programming Languages:</u> Python, Java, C++</li>
        <li><u>Databases:</u> MySQL</li>
        <li><u>Version Control:</u> Git, GitHub</li>
    </ul>
</section>

<section>
    <h2>Education</h2>
    <ul className="education">
        <li><strong>B.tech in Electronics and Computer Engineering</strong>, VIT University - 2024</li>
    </ul>
</section>


<section>
    <h2>Languages</h2>
    <ul>
        <li>English (Intermediate)</li>
        <li>Hindi (Native)</li>
    </ul>
</section>
    </div>
  );
    
}

export default AboutPage