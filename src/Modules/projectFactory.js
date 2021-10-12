const projectFactory = (name, selected = false) => {
    let project = {};
    project.name = name;
    project.isSelected = selected;
    project.tasks = [];

    project.addTask = (task) => {
        project.tasks.push(task);
    }
    return project;
} 

export default projectFactory;