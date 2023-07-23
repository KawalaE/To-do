export const projects = [];

export class Project{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }
    get projectName(){
        console.log(this.name)
    }
    
}
const home = new Project('Home');
const garden = new Project('Garden');
projects.push(home);
projects.push(garden);

console.log(projects)