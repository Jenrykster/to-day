const taskFactory = (title, description, dueDate, priority, isDone = false) => {
    let task = {
        title,
        description, 
        dueDate,
        priority,
        isDone
    }
    return task
}

export default taskFactory