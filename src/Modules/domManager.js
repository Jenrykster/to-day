import taskFactory from "./taskFactory";

const domManager = (function(){
    let display; 
    let sideBar;
    let taskList;
    let projects;
    let selectedProject;
    let scrollPosition = 0;
    const render = (domElement, projectsList) => {
        display = domElement;
        display.innerHTML = ''; //Clean the page contents 
        projects = projectsList;

        sideBar = document.createElement('div');
        sideBar.classList.add('side-bar');
        addProjectsToSidebar(projects);

        taskList = document.createElement('div');
        taskList.classList.add('task-list');
        addTasklistContents(projects);
        
        display.appendChild(sideBar);
        display.appendChild(taskList);
        taskList.scrollTop = scrollPosition
    }
    const createProjectElement = (project) => {
        let newProjectElement = document.createElement('div');
        newProjectElement.innerHTML = `<div class="project"><h2>${project.name}</h3></div>`;
        if(project.isSelected){
            newProjectElement.classList.add('selected');
            selectedProject = project;
        }
        newProjectElement.addEventListener('click', changeSelectedProject.bind(null, project));
        return newProjectElement;
    }
    const createTaskElement = (task) => {
        let newTaskElement = document.createElement('div');
        newTaskElement.innerHTML = `<div class="task">
        <div class="task-header">
        <input type="checkbox" ${task.isDone? 'checked':''}> 
                <h2>${task.title}</h2>
                <h3>${task.dueDate}</h3>
            </div>
            <p>${task.description}</p>
        </div>`;

        if (task.isDone) newTaskElement.classList.add('done');
        newTaskElement.querySelector('input').addEventListener('change', onTaskComplete.bind(null, task));

        return newTaskElement;
    }
    const createAddTaskButton = (pos) => {
        let newTaskButtonElement = document.createElement('div');
        newTaskButtonElement.innerHTML = `
        <div class="add-task-button">
            <h2>Add task</h2>
        </div>
        `;
        newTaskButtonElement.addEventListener('click', addTaskToProject.bind(null, pos));
        return newTaskButtonElement;
    }
    const addProjectsToSidebar = (projects) => {
        projects.forEach(project => {
            let newProject = createProjectElement(project);
            sideBar.appendChild(newProject);
        })
    }
    const addTasklistContents = () => {
        let title = document.createElement('h1');
        title.innerHTML = selectedProject.name;
        taskList.appendChild(title);
        taskList.appendChild(createAddTaskButton('start'));
        selectedProject.tasks.forEach(task =>{
            let newTask = createTaskElement(task);
            taskList.appendChild(newTask);
        })
        taskList.appendChild(createAddTaskButton('end'));
    }
    const changeSelectedProject = (newSelectedProject, e) => {
        projects.forEach((project)=>{
            project.toggleSelected(false); // Unselect all projects
        })
        newSelectedProject.toggleSelected(true); 
        selectedProject = newSelectedProject;
        render(display, projects); // Clean the page and draw again
    }
    const onTaskComplete = (completedTask, e) => {
        completedTask.setCompleted();
        scrollPosition = taskList.scrollTop;
        render(display, projects);
    }  
    const addTaskToProject = (pos, e) => {
        selectedProject.addTask(taskFactory('AB', "dopso", '20/20/2000',1), pos);
        scrollPosition = taskList.scrollTop;
        render(display, projects);
    }
    return {
        render
    } 
})();

export default domManager;