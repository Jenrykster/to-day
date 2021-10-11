const projectFactory = (name) => {
    let project = {};
    project.name = name;
    project.tasks = [];

    project.addTask = (task) => {
        project.tasks.push(task);
    }
    return project;
} 

export default projectFactory;