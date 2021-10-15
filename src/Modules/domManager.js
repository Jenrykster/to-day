import formModule from "./formModule";
import projectFactory from "./projectFactory";
import projectManager from "./projectManager";
import taskFactory from "./taskFactory";
import settings from "./settings";
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
        let newTaskElement = document.createElement('details');
        newTaskElement.innerHTML = `
        <summary class="task-header">
            <input type="checkbox" ${task.isDone? 'checked':''}> 
            <h2>${task.title}</h2>
            <h3>${task.dueDate}</h3>
        </summary>
        <p>${task.description}</p>`;
        newTaskElement.classList.add('task');
        if(task.isDone){
            newTaskElement.style.backgroundColor = 'blueViolet';
            newTaskElement.style.textDecoration = 'line-through';
            newTaskElement.style.color = 'rgba(255,255,255,0.3)'
        }else{
            newTaskElement.style.backgroundColor = settings.priorityColors[task.priority]; //Add color based on priority settings 
        }
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
    const createAddProjectButton = () => {
        let newProjectButtonElement = document.createElement('div');
        newProjectButtonElement.innerHTML = `
        <div class="add-task-button">
            <h2>Add project<h2>
        </div>
        `;
        newProjectButtonElement.addEventListener('click', addNewProject);
        return newProjectButtonElement;
    }
    const addProjectsToSidebar = (projects) => {
        projects.forEach(project => {
            let newProject = createProjectElement(project);
            sideBar.appendChild(newProject);
        })
        sideBar.appendChild(createAddProjectButton());
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
        if(selectedProject.tasks.length > 0){
            taskList.appendChild(createAddTaskButton('end'));
        }
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
        formModule.askTaskInfo().then((taskData)=>{
            if(taskData){
                let newTaskData = JSON.parse(taskData);
                selectedProject.addTask(taskFactory(newTaskData.title, newTaskData.description, newTaskData.date, newTaskData.priority), pos);
                scrollPosition = taskList.scrollTop;
                render(display, projects);  
            }else{
                console.log('No task was created');
                return
            }
        });
    }
    const addNewProject = (e) => {
            formModule.askProjectInfo().then((projectName)=>{
                if(projectName){
                    let isDuplicate = projectManager.addProject(projectFactory(projectName));
                    if(isDuplicate){
                        formModule.showDuplicateMessage();
                    }
                    render(display, projects);
                }
        })
    }
    return {
        render
    } 
})();

export default domManager;