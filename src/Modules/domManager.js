const domManager = (function(){
    let sideBar;
    const init = (domElement, projects) => {
        sideBar = document.createElement('div');
        sideBar.classList.add('side-bar');
        
        addProjectsToSidebar(projects);
        domElement.appendChild(sideBar);
    }
    const createProjectElement = (project) => {
        let newProjectElement = document.createElement('div');
        newProjectElement.innerHTML = `<div class="project"><h2>${project.name}</h3></div>`;
        return newProjectElement;
    }
    const addProjectsToSidebar = (projects) => {
        projects.forEach(project => {
            let newProject = createProjectElement(project);
            sideBar.appendChild(newProject);
        })
    }
    return {
        init
    } 
})();

export default domManager;