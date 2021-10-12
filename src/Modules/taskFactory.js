const taskFactory = (title, description, dueDate, priority, isDone = false) => {
    let task = {}
    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;
    task.isDone = isDone;
    task.setCompleted = () =>{
        task.isDone = !task.isDone;
    }
    return task
}

export default taskFactory