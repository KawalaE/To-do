const projects = [];

export class Project{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }
    get projectName(){
        console.log(this.name)
    }
    
}
const dom = new Project('Dom');
const ogrod = new Project('Ogrod');
projects.push(dom);
projects.push(ogrod);

console.log(dom.tasks)