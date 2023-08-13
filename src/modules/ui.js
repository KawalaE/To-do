import '/home/Edyta/Desktop/repos/To-do/src/style.css'
import {DOM} from './DOM';
import { Project } from './project';
import { projects } from './project';
import { Task } from './task';
import Close from '/home/Edyta/Desktop/repos/To-do/src/assets/close.svg';
const myClose = new Image();
myClose.src = Close;

export class UI{
    static removeProject(project){
        console.log(project);
        project.removeProject();
        console.log(projects);
        
    }
    static removeTask(project, taskName){
         project.deleteTask(taskName);
    }

    static createAndAddNewTask(description, date, priority, projectHTML){
        let newTask = new Task(description.value, date.value, priority.value, '0');
        projects.forEach((project) => {
            if(project.getName() === projectHTML){
                project.tasks.push(newTask);
                DOM.taskDisplay()
            }
        });
    }
    static taskStatusHandler(project, taskName, checkbox){
        let task = project.getTask(taskName);
        if(checkbox.value === '1'){
            task.setStatus('1');
        }else if(checkbox.value ==='0'){
            task.setStatus('0');
        }      
    }
}
export function createUI(){
    document.querySelector('.project-div').firstChild.click(); 

}

