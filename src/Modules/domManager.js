import formModule from "./formModule";
import projectFactory from "./projectFactory";
import projectManager from "./projectManager";
import taskFactory from "./taskFactory";
import settings from "./settings";
import { format } from "date-fns";
const domManager = (function(){
    let display; 
    let sideBarButton;
    let sideBar;
    let taskList;
    let projects;
    let selectedProject;
    let scrollPosition = 0;
    const render = (domElement) => {
        projects = projectManager.getProjects();
        projectManager.saveData();
        display = domElement;
        display.innerHTML = ''; //Clean the page contents 

        sideBar = document.createElement('div');
        sideBar.classList.add('side-bar');
        addProjectsToSidebar(projects);

        sideBarButton = document.createElement(`div`);
        sideBarButton.innerHTML = 'OPEN';
        sideBarButton.classList.add('side-bar-button');
        sideBarButton.addEventListener('click', toggleSideBar);
        
        taskList = document.createElement('div');
        taskList.classList.add('task-list');
        addTasklistContents(projects);
        
        display.appendChild(sideBar);
        display.appendChild(sideBarButton);
        display.appendChild(taskList);
        taskList.scrollTop = scrollPosition
    }
    const createProjectElement = (project) => {
        let newProjectElement = document.createElement('div');
        newProjectElement.innerHTML = `
            ${project.type == 'normal' ? "<p class='project-delete-emoji'>❌</p>" : ''}
            <h2>${project.name}</h2>`;

        newProjectElement.classList.add('project');
        if(project.isSelected){
            newProjectElement.classList.add('selected');
            selectedProject = project;
        }
        newProjectElement.addEventListener('click', changeSelectedProject.bind(null, project));
        if(project.type == 'normal'){
            let deleteProjectButton = newProjectElement.querySelector('.project-delete-emoji');
            deleteProjectButton.addEventListener('click', onProjectDelete.bind(null, project.name));
        }
        return newProjectElement;
    }
    const createTaskElement = (task) => {
        let newTaskElement = document.createElement('details');
        newTaskElement.innerHTML = `
        <summary class="task-header">
            <input type="checkbox" ${task.isDone? 'checked':''}> 
            <div style="display:flex;align-items:center">
                <h2>${task.title}</h2>
                <p class="edit-task-emoji">✏️</p>
            </div>
            <p class="delete-task-emoji">🗑️</p>
            <p class="move-task-emoji">📁</p>
            <h3>${task.dueDate}</h3>
        </summary>
        <p>${task.description}</p>`;
        newTaskElement.classList.add('task');

        newTaskElement.dataset.index = projectManager.getProjectByName(task.originProject).tasks.findIndex((element)=>{
            return element==task;
        });
        // Gets a reference to the index of the project where the task was created 
        newTaskElement.dataset.originProjectIndex = projects.findIndex((project)=>{ 
            return project.name == task.originProject;
        });

        if(task.isDone){
            newTaskElement.style.backgroundColor = 'blueViolet';
            newTaskElement.style.textDecoration = 'line-through';
            newTaskElement.style.color = 'rgba(255,255,255,0.3)'
        }else{
            newTaskElement.style.backgroundColor = settings.priorityColors[task.priority]; //Add color based on priority settings 
        }
        newTaskElement.querySelector('input').addEventListener('change', onTaskComplete.bind(null, task));
        newTaskElement.querySelector('.edit-task-emoji').addEventListener('click', onTaskEdit.bind(null, newTaskElement));
        newTaskElement.querySelector('.delete-task-emoji').addEventListener('click', onTaskDelete.bind(null, newTaskElement));
        newTaskElement.querySelector('.move-task-emoji').addEventListener('click', onTaskMove.bind(null, newTaskElement));
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
        if(selectedProject.type == 'all'){
            projects.forEach(project=>{
                project.tasks.forEach(task=>{
                    let newTask = createTaskElement(task);
                    taskList.appendChild(newTask);
                })
            })
        }else if(selectedProject.type == 'today'){
            projects.forEach(project=>{
                project.tasks.forEach(task=>{
                    if(task.dueDate == format(new Date(), 'dd/MM/yyyy')){
                        let newTask = createTaskElement(task);
                        taskList.appendChild(newTask);
                    }
                })
            })
        }else if(selectedProject.type == 'normal'){
            selectedProject.tasks.forEach(task =>{
                let newTask = createTaskElement(task);
                taskList.appendChild(newTask);
            })             
        }
        if(selectedProject.tasks.length > 0 || (selectedProject.type != 'normal' && taskList.children.length > 2)){
            taskList.appendChild(createAddTaskButton('end'));
        }
    }
    const changeSelectedProject = (newSelectedProject, e) => {
        if(e && e.target.nodeName == 'P'){
            return;
        }
        projects.forEach((project)=>{
            project.toggleSelected(false); // Unselect all projects
        })
        newSelectedProject.toggleSelected(true); 
        selectedProject = newSelectedProject;
        render(display); // Clean the page and draw again
    }
    const onTaskComplete = (completedTask, e) => {
        completedTask.setCompleted();
        scrollPosition = taskList.scrollTop;
        render(display);
    }  
    const onTaskEdit = (newTaskElement, e ) => {
        let taskOriginalProject = projects[newTaskElement.dataset.originProjectIndex];
        let currentTask = taskOriginalProject.tasks[newTaskElement.dataset.index];
        formModule.askTaskInfo(currentTask).then((taskData)=>{
            if(taskData){
                let newTaskData = JSON.parse(taskData);
                currentTask.title = newTaskData.title;
                currentTask.description = newTaskData.description;
                currentTask.dueDate = newTaskData.date;
                currentTask.priority = newTaskData.priority;
                scrollPosition = taskList.scrollTop;
                render(display);
            }else{
                return
            }
        })
    }
    const onTaskDelete = (taskElement) => {
        formModule.askConfirm().then(result=>{
            if(result){
                let currentTask = selectedProject.tasks[taskElement.dataset.index];
                selectedProject.removeTask(currentTask);
                render(display, projects);
            }else{
                return
            }
        })
    }
    const onTaskMove = (taskElement) => {
        let taskOriginalProject = projects[taskElement.dataset.originProjectIndex];
        let currentTask = taskOriginalProject.tasks[taskElement.dataset.index];
        formModule.askProjectMove(projects).then(projectDestName =>{
            if(projectDestName){
                let projectIndex = projects.findIndex(project=>{
                    return project.name == projectDestName;
                });
                projectManager.moveTask(currentTask, projects[projectIndex]);
                render(display);
            }else{
                return;
            }
        })
    }
    const onProjectDelete = (project) => {
        formModule.askConfirm().then(result=>{
            if(result){
                projectManager.removeProject(project);
                changeSelectedProject(projects[0]);
                render(display);
            }
            else{
                return
            }
        })
    }
    const addTaskToProject = (pos, e) => {
        formModule.askTaskInfo().then((taskData)=>{
            if(taskData){
                let newTaskData = JSON.parse(taskData);
                selectedProject.addTask(taskFactory(newTaskData.title, newTaskData.description, newTaskData.date, newTaskData.priority, false, selectedProject.name), pos);
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
    const toggleSideBar = (e) => {
        if(sideBar.style.width == '25vw'){
            sideBar.style.width = '0px';
            e.target.innerHTML = 'OPEN';
        }else if(sideBar.style.width == '0px' || !sideBar.style.width){
            sideBar.style.width = '25vw';
            e.target.innerHTML = 'CLOSE';
        }
    }
    return {
        render
    } 
})();

export default domManager;