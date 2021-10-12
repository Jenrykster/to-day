const domManager = (function(){
    let sideBar;
    let taskList;
    const render = (domElement, projects) => {
        domElement.innerHTML = ''; //Clean the page contents 

        sideBar = document.createElement('div');
        sideBar.classList.add('side-bar');
        addProjectsToSidebar(projects);

        taskList = document.createElement('div');
        taskList.classList.add('task-list');
        addTasklistContents(projects);
        
        domElement.appendChild(sideBar);
        domElement.appendChild(taskList);
    }
    const createProjectElement = (project) => {
        let newProjectElement = document.createElement('div');
        newProjectElement.innerHTML = `<div class="project"><h2>${project.name}</h3></div>`;
        if(project.isSelected){
            newProjectElement.classList.add('selected');
        }
        return newProjectElement;
    }
    const createTaskElement = (task) => {
        let newProjectElement = document.createElement('div');
        newProjectElement.innerHTML = `<div class="task">
        <div class="task-header">
                <h2>${task.title}</h2>
                <h3>${task.dueDate}</h3>
            </div>
            <p>${task.description}</p>
        </div>`;
        return newProjectElement;
    }
    const addProjectsToSidebar = (projects) => {
        projects.forEach(project => {
            let newProject = createProjectElement(project);
            sideBar.appendChild(newProject);
        })
    }
    const addTasklistContents = (projects) => {
        let title = document.createElement('h1');
        title.innerHTML = projects[0].name;
        taskList.appendChild(title);
        projects[0].tasks.forEach(task =>{
            let newTask = createTaskElement(task);
            taskList.appendChild(newTask);
        })
    }
    return {
        render
    } 
})();

export default domManager;