const taskFactory = (title, description, dueDate, priority) => {
    let task = {
        title,
        description, 
        dueDate,
        priority
    }
    return task
}

export default taskFactory