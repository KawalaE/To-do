import { Task } from "./task";
export const projects = [];

export class Project{
    constructor(name){
        this.name = name;
        this.tasks = [];
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
