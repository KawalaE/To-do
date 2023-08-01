export class Task{
    constructor(description, dueDate, priority, status){
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
    }
}
const myTask = new Task('cleaning', '12.9.2023', 'low', 0);
console.log(myTask)