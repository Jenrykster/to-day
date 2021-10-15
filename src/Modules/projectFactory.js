const projectFactory = (name, selected = false) => {
    let project = {};
    project.name = name;
    project.isSelected = selected;
    project.tasks = [];

    project.addTask = (task, position = 'end') => {
        if(position == 'start'){
            project.tasks.unshift(task)
        }else{
            project.tasks.push(task);
        }
    }
    project.removeTask = (taskToDelete) => {
        let index = project.tasks.findIndex((task)=>{
            return task == taskToDelete;
        })
        project.tasks.splice(index,1);
    }
    project.toggleSelected = (selected) => {
        if(selected && project.isSelected){
            return // Do nothing if the project is already selected
        }
        project.isSelected = selected;
    }
    return project;
} 

export default projectFactory;