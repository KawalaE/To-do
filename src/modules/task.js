export class Task{
    constructor(description, dueDate, priority, status){
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
    }
    getDescription(){
        return this.description;
    }
    getDueDate(){
        return this.dueDate;
    }
    getPriority(){
        return this.priority;
    }
    getStatus(){
        return this.status;
    }
    setDescription(name){
        this.name = name;
    }
    setDueDate(date){
        this.date = date;
    }
    setPriority(priority){
        this.priority = priority;
    }
    setStatus(status){
        this.status = status;
    }
}

