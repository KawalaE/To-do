import '/home/Edyta/Desktop/repos/To-do/src/style.css'
import {DOM} from './DOM';
import { Project } from './project';
import { projects } from './project';
import format from 'date-fns/format';
import { Task } from './task';
import { endOfWeek, startOfISOWeek, startOfWeek } from 'date-fns';
import { endOfISOWeek } from 'date-fns/esm';

export class Logic{
    static deleteProject(project){
        project.removeProject(); 
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
    static createDefaultProject(){
        const today = new Date();
        const home = new Project('Home');
        projects.push(home);
        const taskHome = new Task("do the dishes", today, "medium", "0");
        home.tasks.push(taskHome);
        
        const date = new Date();
        date.setDate(date.getDate()+7);
        const garden = new Project('Garden');
        projects.push(garden);
        const taskGarden = new Task("water the lawn", date, "high", "1");
        garden.tasks.push(taskGarden);  
    }
}

