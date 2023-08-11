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
        return this.tasks.find((task) => task.getName() === taskName);
    }

}
const home = new Project('Home');
const taskHome = new Task("do the dishes", "2023-08-24", "medium", "0");
home.tasks[0] = taskHome;

const garden = new Project('Garden');
const taskGarden = new Task("water the lawn", "2024-08-22", "high", "1");
garden.tasks[0] = taskGarden;
projects.push(home);
projects.push(garden);
