const projectManager = (function(){
    let projects = []
    const getProjects = () => {
        return projects;
    }
    const addProject = (newProject) => {
        projects.push(newProject);
    }
    const removeProject = (projectName) => {
        projects = projects.filter((project)=>{
            return project.name != projectName;
        })
    }
    return {
        getProjects,
        addProject,
        removeProject
    }
})()

export default projectManager;