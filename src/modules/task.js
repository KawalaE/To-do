import { projects } from "./project";
export class Task{
    constructor(description, dueDate, priority, status){
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
    }
}