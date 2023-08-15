import { Task } from "./task";
export const projects = [];

export class Project{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }
    getName(){
        return this.name;
    }
    getTasks(){
        return this.tasks;
    }
    removeProject(){
        projects.splice(projects.indexOf(this.getName()),1);
    }
    getTask(taskName){
        return this.tasks.find((task) => task.getDescription() === taskName);
    }
    deleteTask(taskName){
        this.tasks = this.tasks.filter((task) => task.getDescription() !== taskName)
    }
}