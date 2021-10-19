const projectManager = (function(){
    let projects = []
    const getProjects = () => {
        return projects;
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
        projects = projects.filter((project)=>{
            return project.name != projectName;
        })
    }
    const moveTask = (taskToMove, destination) => {
        if(taskToMove.originProject == destination){
            return;
        }
        taskToMove.originProject.removeTask(taskToMove);
        taskToMove.originProject = destination;
        destination.addTask(taskToMove);
    }
    return {
        getProjects,
        addProject,
        removeProject,
        moveTask
    }
})()

export default projectManager;