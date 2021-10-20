import projectFactory from "./projectFactory";
import taskFactory from "./taskFactory";

const projectManager = (function(){
    let projects = []
    const getProjects = () => {
        return projects;
    }
    const getProjectByName = (projectName) => {
        let project = projects.find(project=>{
            return project.name == projectName;
        })
        return project;
    }
    const addProject = (newProject) => {  //Returns true if project is a duplicate
        let isDuplicate = projects.some((project)=>{
            return project.name == newProject.name;
        })
        if(isDuplicate){
            return true; 
        }else{
            projects.push(newProject);
        }
    }
    const removeProject = (projectName) => {
        getProjectByName(projectName).removeAllTasks();
        projects = projects.filter((project)=>{
            return project.name != projectName;
        })
    }
    const moveTask = (taskToMove, destination) => {
        if(taskToMove.originProject == destination){
            return;
        }
        getProjectByName(taskToMove.originProject).removeTask(taskToMove);
        taskToMove.originProject = destination.name;
        destination.addTask(taskToMove);
    }
    const saveData = () => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }
    const loadData = () => {
        let projectsData = JSON.parse(localStorage.getItem('projects'));
        if(projectsData != null){
            projectsData.forEach(project => {
                let loadedProject = projectFactory(project.name, project.isSelected, project.type);
                let loadedTasks = [];
                project.tasks.forEach(task=>{
                    loadedTasks.push(taskFactory(task.title, task.description, task.dueDate, task.priority, task.isDone, task.originProject));
                })
                loadedProject.tasks = loadedTasks;
                addProject(loadedProject);
            })
        }else{
            console.log('Creating new data');
            return
        }
        
    }
    return {
        getProjects,
        getProjectByName,
        addProject,
        removeProject,
        moveTask,
        saveData,
        loadData
    }
})()

export default projectManager;