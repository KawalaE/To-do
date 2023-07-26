export class Task{
    constructor(name, description, dueDate, priority, status){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
    }
}
const myTask = new Task('cleaning', 'sddd', '12.9.2023', 'low', 0);
console.log(myTask)