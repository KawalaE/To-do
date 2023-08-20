import format from 'date-fns/format';

export class Task{
    constructor(description, dueDate, priority, status){
        this.description = description;
        this.dueDate = Date.parse(dueDate);
        this.priority = priority;
        this.status = status;
    }
    getDescription(){
        return this.description;
    }
    getFormatedDueDate(){
        return format(this.dueDate,'dd/MM/yyyy');
    }
    getDueDate(){
        return this.dueDate;
    }
    getMonth(){
        return Number(format(this.getDueDate(), 'MM'));
    }
    getDay(){
        return Number(format(this.getDueDate(), 'dd'));
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

