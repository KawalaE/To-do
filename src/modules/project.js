export class Project{
    constructor(name){
        this.name = name;
    }
    get projectName(){
        console.log(this.name)
    }
}
const dom = new Project('Dom');
dom.projectName;