import React from 'react';
function Projects() {
  return (
    <section>
      <h2 id="my-projects">My Projects</h2>
      <div id="projects-container">
        <div id="project1">
            <h3>
                Project 1
            </h3>
            <a href="https://agile-sierra-02047.herokuapp.com/">Tech Blog (MVC)</a>
        </div>

        <div id="project2">
            <h3>
                Project 2
            </h3>
            <a href="https://stormy-depths-69854.herokuapp.com/">Book Search Engine (MERN)</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;