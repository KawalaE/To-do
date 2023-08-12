import '/home/Edyta/Desktop/repos/To-do/src/style.css'
import {DOM} from './DOM';
import { Project } from './project';
import { projects } from './project';
import { Task } from './task';
import format from 'date-fns/format';
const page = document.getElementById('page');

import Close from '/home/Edyta/Desktop/repos/To-do/src/assets/close.svg';
const myClose = new Image();
myClose.src = Close;


export class UI{

    static projectOpen = false; 
    static minWindowWidth = 943;
    
    static projectInputForm(){
        const projectForm = document.createElement('form');
        projectForm.method = 'dialog';
        const projectModalContent = document.createElement('div');
        projectModalContent.classList.add('modal-content');
        const projectName = document.createElement('input');
        projectName.maxLength = 11;
        projectName.id = 'project-title';
        projectName.type = 'text';
        projectName.placeholder = 'Project title'
        projectForm.appendChild(projectName);
        document.querySelector('#project-modal').appendChild(projectModalContent);
        document.querySelector('#project-modal').appendChild(projectForm);
        document.querySelector('.modal-content').appendChild(projectForm);
    }
    
    static projectModalAddBtn(){
        const inputField = document.querySelector('#project-title');
        const projectAddButton = document.createElement('button');
        projectAddButton.classList.add('project-add-btn');
        projectAddButton.innerHTML = 'Add project';
        
        document.querySelector('#project-modal').appendChild(projectAddButton);
        projectAddButton.addEventListener('click', ()=>{
            const newProject = new Project(inputField.value);
            if(!inputField.value){
                alert('Project name cannot be empty!')
            }else{
                projects.push(newProject);
                let project = document.createElement('div');
                project.classList.add('pro-instance');
                project.innerHTML = newProject.getName();
                inputField.value = '';
                document.querySelector('#project-modal').close();
                DOM.addProject(project);
                DOM.addSwitchListener(project);  
                DOM.disableOrEnableButtons(false);

            }
            console.log(projects)
        })
        document.addEventListener('keypress',(event)=>{
            if(event.key === "Enter"){
                projectAddButton.click();
            }
        })
        document.querySelector('.modal-content').appendChild(projectAddButton);

    }
    
    static createTaskModal(){
        const taskModal = document.createElement('dialog');
        taskModal.classList.add('task-modal');
        document.querySelector('.task-display').appendChild(taskModal);
        const taskForm = document.createElement('form');
        taskForm.classList.add('task-form');

        const closeTaskModal = document.createElement('img');
        closeTaskModal.classList.add('close-btn');
        closeTaskModal.src = myClose.src;
        taskModal.appendChild(closeTaskModal);

        closeTaskModal.addEventListener('click', () => {
            taskModal.close();

            DOM.disableOrEnableButtons(false);
            document.querySelectorAll('.remove-project').forEach((element)=>{
                element.disabled = false;
            })
            document.querySelectorAll('.pro-instance').forEach((element) => {
                element.disabled = false;
            })
        })

        const taskDesc = document.createElement('textarea');
        taskDesc.classList.add('text-area');
        taskDesc.maxLength = "55";
        taskDesc.placeholder = 'Task description';

        const taskDate = document.createElement('input');
        taskDate.type = 'date';
        taskDate.classList.add('task-date');

        const taskPriotity = document.createElement('select');
        taskPriotity.classList.add('task-priority');
        const selectPlaceholder = document.createElement('option');
        selectPlaceholder.value ='';
        selectPlaceholder.disabled = true;
        selectPlaceholder.selected = true;
        selectPlaceholder.innerHTML = 'Select priority';
        taskPriotity.appendChild(selectPlaceholder);
        let lowOption = document.createElement('option');
        lowOption.value = 'low';
        lowOption.innerHTML = 'low';
        taskPriotity.appendChild(lowOption);
        let medOption = document.createElement('option');
        medOption.value = 'medium';
        medOption.innerHTML = 'medium';
        taskPriotity.appendChild(medOption);
        let highOption = document.createElement('option');
        highOption.value = 'high';
        highOption.innerHTML = 'high';
        taskPriotity.appendChild(highOption);
        
        const submitTask = document.createElement('submit-task');
        submitTask.innerHTML = 'Add task';
        submitTask.classList.add('submit-task');

        
        submitTask.addEventListener('click', () =>{
            if(!taskDesc.value){alert('Please, fill task description')};
            if(!taskDate.value){alert('Please, fill end date')};
            if(!taskPriotity.value){alert('Please, select priority.')}
            else{
                console.log('task added');
                let newTask = new Task(taskDesc.value, taskDate.value, taskPriotity.value, '0');
                let currentProject = document.querySelector('.project-active').innerHTML;
        
                projects.forEach((project) => {
                    if(project.getName() === currentProject){
                        project.tasks.push(newTask);
                        this.taskDisplay()
                        
                    }
                });

                taskDesc.value = '';
                taskDate.value = '';
                taskPriotity.value = '';
                taskModal.close();

                DOM.disableOrEnableButtons(false);
                document.querySelectorAll('.remove-project').forEach((element)=>{
                    element.disabled = false;
                })
                document.querySelectorAll('.pro-instance').forEach((element) => {
                    element.disabled = false;
                })
                
            }
        })
        taskForm.appendChild(taskDesc);
        taskForm.appendChild(taskDate);
        taskForm.appendChild(taskPriotity);
        taskForm.appendChild(submitTask);
        taskModal.appendChild(taskForm);
    }
  
    static taskDisplay(){
        const taskDOM = document.createElement('div');
        while (taskDOM.firstChild){
            taskDOM.removeChild(taskDOM.lastChild);
        }
        const previousTasks = document.querySelectorAll('.task-item');
        previousTasks.forEach((previous) => {
            previous.remove();
        })

        document.querySelectorAll('.pro-instance').forEach((element) => {
            if(element.classList.contains('project-active')){
                projects.forEach((project)=>{
                    if(project.getName() === element.innerHTML && projects.length !==0) {
                        
                        for(let i = 0; i < project.tasks.length; i++){

                            const taskDOM = document.createElement('div');
                            document.querySelector('.task-display').appendChild(taskDOM);
                            taskDOM.classList.add('task-item');
                            console.log(project.tasks);

                            let taskDesc = document.createElement('div');
                            taskDesc.classList.add('task-disp-desc');
                            taskDesc.innerHTML = project.tasks[i].getDescription();
                            taskDOM.appendChild(taskDesc)

                            let taskDate = document.createElement('div');
                            taskDate.classList.add('task-disp-date');
                            let currentDate = Date.parse(project.tasks[i].getDueDate());
                            taskDate.innerHTML = format(currentDate,'dd/MM/yyyy');
                            taskDOM.appendChild(taskDate);

                            
                            let taskPriotity = document.createElement('div');
                            taskPriotity.innerHTML = project.tasks[i].getPriority();
                            if(taskPriotity.innerHTML === 'low'){
                                taskPriotity.classList.add('task-disp-priority-low');
                            }else if(taskPriotity.innerHTML === 'medium'){
                                taskPriotity.classList.add('task-disp-priority-medium');
                            }else if(taskPriotity.innerHTML ==='high'){
                                taskPriotity.classList.add('task-disp-priority-high');
                            }

                            taskDOM.appendChild(taskPriotity);

                            let taskState = document.createElement('input');
                            taskState.type = 'checkbox';
                            taskState.classList.add('task-state');
                            taskDOM.appendChild(taskState);
                            console.log(projects)
                            this.checkboxHandler(taskState);
                        
                            if(project.tasks[i].getStatus() === "1"){
                                taskDesc.classList.add('grey-out');
                                taskDate.classList.add('grey-out');
                                taskPriotity.classList.add('grey-out');
                                taskState.value = "1";
                                taskState.checked = true;
                            }else{
                                taskDesc.classList.remove('grey-out');
                                taskDate.classList.remove('grey-out');
                                taskPriotity.classList.remove('grey-out');
                                taskState.value = "0";
                                taskState.checked = false;
                            }
                            
                            const deleteTaskBtn = document.createElement('button');
                            taskDOM.appendChild(deleteTaskBtn);
                            deleteTaskBtn.innerHTML = 'x';
                            deleteTaskBtn.classList.add('remove-task');
                            this.deleteTaskHandler(deleteTaskBtn, taskDOM, taskDesc);

                        } 
                    }
                })
            }  
        })

    }
    static deleteTaskHandler(deleteButton, taskInfo, taskName){
            deleteButton.addEventListener('click', (e) =>{
                if(confirm('Do you want to remove this task?')){
                    const currentProject = document.querySelector('.project-active').innerHTML;
                    const currentTask = taskName.innerHTML;
                    console.log(currentTask)
                    projects.forEach((project)=>{
                        if(project.getName() === currentProject){
                            project.getTasks().forEach((task) =>{
                                if(task.getDescription() === currentTask){
                                    project.deleteTask(currentTask);
                                }
                            })
                        }
                    })
                    taskInfo.remove();
                }
            })
    }

    static checkboxHandler(checkbox){
            checkbox.addEventListener('click',()=>{
                let siblings = Array.from(checkbox.parentNode.childNodes).slice(0, -1);
                if(checkbox.value === "1") {
                    checkbox.value = "0";
                    
                    siblings.forEach((sibling)=>{
                        sibling.classList.remove('grey-out');
                    });
                    console.log('unchecked!')
                } else{
                    checkbox.value = "1";
                    siblings.forEach((sibling)=>{
                        sibling.classList.add('grey-out');
                    });
                    console.log('checked!');
                }
                let currentTaskName = checkbox.parentNode.firstChild.innerHTML;
                let currentProject = document.querySelector('.project-active').innerHTML;
                projects.forEach((project)=>{
                    if(project.getName() === currentProject){
                        project.tasks.forEach((task)=>{
                            if(task.getDescription() === currentTaskName){
                                if(checkbox.value === '1'){
                                    task.setStatus('1');
                                }else if(checkbox.value ==='0'){
                                    task.setStatus('0');
                                }
                            }
                        })
                    }
                })   
                console.log(projects);   
            })
    }
}


export function createUI(){
    UI.projectInputForm();
    UI.projectModalAddBtn();
    UI.createTaskModal();
    document.querySelector('.project-div').firstChild.click(); 
  
}

