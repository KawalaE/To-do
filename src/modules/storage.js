import { DOM } from './DOM';
import { Project } from './project';
import { Task } from './task';

export class Storage{
    static saveProjectsList(data){
        localStorage.removeItem("projects");
        localStorage.setItem("projects", JSON.stringify(data));
    }
    static getProjectsList(){
        let storageProjectsList = [];
        const storageProjects = JSON.parse(localStorage.getItem("projects"))
        storageProjects.forEach(project => {
            const projectStorage = new Project(project.name);
            project.tasks.forEach((task)=>{
                const taskStorage = new Task(task.description, task.dueDate, task.priority, task.status);
                projectStorage.tasks.push(taskStorage);      
            })
            DOM.addProject(DOM.projectInstanceDOM(projectStorage), projectStorage);
            storageProjectsList.push(projectStorage);
            
        });
        return storageProjectsList;
    }
}