const taskFactory = (title, description, dueDate, priority, isDone = false, originProject = 'selected') => {
    let task = {}
    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;
    task.isDone = isDone;
    task.originProject = originProject;
    task.setCompleted = () =>{
        task.isDone = !task.isDone;
    }
    return task
}

export default taskFactory