import '/home/Edyta/Desktop/repos/To-do/src/style.css'
import { projects } from './project';
import { Project } from './project';
import {Logic} from './logic';
import Favicon from '/home/Edyta/Desktop/repos/To-do/src/assets/logo.svg';
const myFavicon = new Image();
myFavicon.src = Favicon;

import Hamburger from '/home/Edyta/Desktop/repos/To-do/src/assets/menu-icon.svg'
const myHamburger = new Image();
myHamburger.src = Hamburger;

import Close from '/home/Edyta/Desktop/repos/To-do/src/assets/close.svg';
const myClose = new Image();
myClose.src = Close;

export class DOM{
    static projectOpen = false; 
    static minWindowWidth = 943;

    static setFavicon(){
        const head = document.querySelector('head');
        const favicon = document.createElement('link');
        favicon.setAttribute('rel', 'shortcut icon');
        favicon.setAttribute('href', myFavicon.src);
        head.appendChild(favicon);
    }
    static horizontalNav(){
        const upperNav = document.createElement('div');
        upperNav.classList.add('upper-nav');
        page.appendChild(upperNav);

        const leftNavSide = document.createElement('div');
        leftNavSide.classList.add('left-side')
        upperNav.appendChild(leftNavSide);

        const navigatorName = document.createElement('p');
        navigatorName.classList.add('navigator-name');
        navigatorName.textContent = 'To do';
        leftNavSide.appendChild(navigatorName);

        const logo = document.createElement('img');
        logo.classList.add('logo');
        logo.src = myFavicon.src;
        leftNavSide.appendChild(logo);

        const hamburger = document.createElement('button');
        const hamburgerImg = document.createElement('img');
        hamburgerImg.classList.add('hamburger-img');
        hamburger.appendChild(hamburgerImg);
        hamburgerImg.classList.add('hamburger');
        upperNav.appendChild(hamburger);
        hamburgerImg.src = myHamburger.src;
    }
    static projectsNavArea(mainContent){
        const projectsNav = document.createElement('div');
        projectsNav.classList.add('projects-nav');
        mainContent.appendChild(projectsNav);
        return projectsNav;
    } 
    static mainContentArea(){
        const mainContent = document.createElement('div');
        mainContent.classList.add('main-content');
        page.appendChild(mainContent);
        return mainContent;
    }
    static displayCurrentProjects(projectsNav){
        const projectsDisplay = document.createElement('div');
        projectsDisplay.classList.add('projects-display')
        projectsNav.appendChild(projectsDisplay);
        return projectsDisplay;
    }
    static projectsAdditionSection(projectsNav){
        const projectsAdditionSection = document.createElement('div');
        projectsAdditionSection.classList.add('projects-add-section');
        projectsNav.appendChild(projectsAdditionSection)
        return projectsAdditionSection;
    }
    static sectionTitle(projectsAdditionSection){
        const projectSectionTitle = document.createElement('div');
        projectSectionTitle.textContent = 'Projects';
        projectSectionTitle.classList.add('projects-title');
        projectsAdditionSection.appendChild(projectSectionTitle);
    }
    static projectAddBtn(projectsAdditionSection){
        const projectAddBtn = document.createElement('button');
        projectAddBtn.classList.add('projects-button');
        projectAddBtn.innerHTML = '+';
        projectsAdditionSection.appendChild(projectAddBtn);
        return projectAddBtn;
    }
    static projectModal(mainContent){
        const projectDialogElement = document.createElement('dialog');
        projectDialogElement.id = 'project-modal';
        mainContent.appendChild(projectDialogElement);
        return projectDialogElement;
    }
    static disableOrEnableButtons(state){
        document.querySelector('.projects-button').disabled  = state;
        document.querySelector('.task-button').disabled = state;
    }
    static projectModalCloseBtn(modal){
        const closeBtn = document.createElement('img');
        closeBtn.classList.add('close-btn');
        closeBtn.src = myClose.src;
        modal.appendChild(closeBtn);
        closeBtn.addEventListener('click', ()=>{
            modal.close();
            document.querySelector('#project-title').value = '';
            this.disableOrEnableButtons(false);
        })
    }   
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
    static switchingProjectTask(projectDisplay, taskDisplay){
        document.querySelector('.projects-nav').style.display = projectDisplay;
        document.querySelector('.task-display').style.display = taskDisplay;
    }
    static addSwitchListener(element){
        element.addEventListener('click', ()=>{
            if(window.innerWidth <= DOM.minWindowWidth){
                this.switchingProjectTask('none', 'flex');
                DOM.projectOpen = false;
            }
        })  
    }
    static projectModalAddBtn(){
        const inputField = document.querySelector('#project-title');
        const projectAddButton = document.createElement('button');
        projectAddButton.classList.add('project-add-btn');
        projectAddButton.innerHTML = 'Add project';
        Logic.createDefaultProject();
        document.querySelector('#project-modal').appendChild(projectAddButton);
        projectAddButton.addEventListener('click', ()=>{
            const newProject = new Project(inputField.value);
            if(!inputField.value){
                alert('Project name cannot be empty!');
            }else{
                projects.push(newProject);
                let project = document.createElement('div');
                project.classList.add('pro-instance');
                project.innerHTML = newProject.getName();
                inputField.value = '';
                document.querySelector('#project-modal').close();
                console.log("projectModalAddBtn: ", newProject);
                this.addProject(project, newProject);
                this.addSwitchListener(project);  
                this.disableOrEnableButtons(false);
            }
        })
        document.addEventListener('keypress',(event)=>{
            if(event.key === "Enter"){
                projectAddButton.click();
            }
        })
        document.querySelector('.modal-content').appendChild(projectAddButton);

    }
    static addProject(project, projectInstance){
        const projectDiv = document.createElement('div');
        const removeProject = document.createElement('button');
        removeProject.classList.add('remove-project');
        removeProject.innerHTML = 'x';
        console.log("addProject: ", projectInstance);
        this.removeProjectButtonHandler(removeProject, projectInstance);
        projectDiv.classList.add('project-div');
        document.querySelector('.projects-display').appendChild(projectDiv);
        projectDiv.appendChild(project);
        projectDiv.appendChild(removeProject);
        this.taskModalHandler();
    }
    static displayInitialProjects(){
        projects.forEach((project) => {
            let projectBtn = document.createElement('button');
            projectBtn.classList.add('pro-instance');
            projectBtn.innerHTML = project.getName();
            this.addProject(projectBtn);  
            this.addSwitchListener(projectBtn);
        })     
    }
    static removeProjectButtonHandler(button, projectInstance){
        console.log("Before button.addEvent", projectInstance);
        button.addEventListener('click', (e) => {
            if(confirm('Do you want to remove this project?')){
                let projectNumber = 0;
                const parent = e.target.parentNode;
                const element = parent.firstChild.textContent;
                console.log("removeProjectButtonHandler:", element, projectInstance);
                parent.remove();
                const allProjects = document.querySelectorAll('.pro-instance');
                const allTasks = document.querySelectorAll('.task-item');
                allProjects.forEach((element) => {
                    if(!element.classList.contains('project-active')){
                        projectNumber++;
                        allTasks.forEach((task) =>{
                            task.remove();
                        })
                    }
                })
                Logic.removeProject(projectInstance);
                if(projectNumber === projects.length){
                    document.querySelector('.task-button').style.visibility= 'hidden';
                }
            }
        })
    }
    static taskDisplayArea(mainContent){
        const taskDisplay = document.createElement('div');
        taskDisplay.classList.add('task-display');
        mainContent.appendChild(taskDisplay);
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
                        project.tasks.forEach((task) => {
                            const taskDOM = document.createElement('div');
                            document.querySelector('.task-display').appendChild(taskDOM);
                            taskDOM.classList.add('task-item');
                            console.log(project.tasks);
    
                            let taskDesc = document.createElement('div');
                            taskDesc.classList.add('task-disp-desc');
                            taskDesc.innerHTML = task.getDescription();
                            taskDOM.appendChild(taskDesc)
    
                            let taskDate = document.createElement('div');
                            taskDate.classList.add('task-disp-date');
                            let currentDate = task.getDueDate();
                            taskDate.innerHTML = currentDate;
                            taskDOM.appendChild(taskDate);
    
                            
                            let taskPriotity = document.createElement('div');
                            taskPriotity.innerHTML = task.getPriority();
                            if(taskPriotity.innerHTML === 'low'){
                                taskPriotity.classList.add('task-disp-priority-low');
                            } else if(taskPriotity.innerHTML === 'medium'){
                                taskPriotity.classList.add('task-disp-priority-medium');
                            } else if(taskPriotity.innerHTML ==='high'){
                                taskPriotity.classList.add('task-disp-priority-high');
                            }
    
                            taskDOM.appendChild(taskPriotity);
    
                            let taskState = document.createElement('input');
                            taskState.type = 'checkbox';
                            taskState.classList.add('task-state');
                            taskDOM.appendChild(taskState);
                            console.log(project);
                            this.checkboxHandler(project, taskState);
                        
                            if(task.getStatus() === "1"){
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
                            this.deleteTaskHandler(deleteTaskBtn, taskDOM, taskDesc, project);
                        
                        })        
                    }
                })
            }  
        })
    
    }
    static taskModalHandler(){
        const projectsDOM = document.querySelectorAll('.pro-instance');

        projectsDOM.forEach((project) => { 
            project.addEventListener('click', () =>{
                projectsDOM.forEach((siblingProject)=>{
                    if(siblingProject !== project){
                        siblingProject.classList.remove('project-active');
                    }
                })
                project.classList.add('project-active');
                this.taskDisplay();
                document.querySelector('.task-button').style.visibility= 'visible';
                
                document.querySelector('.task-button').addEventListener('click', () =>{
                    document.querySelector('.task-modal').show();

                    projectsDOM.forEach((element) => {
                        element.disabled = true;
                    })
                    document.querySelectorAll('.remove-project').forEach((element)=>{
                        element.disabled = true;
                    })
                    this.disableOrEnableButtons(true);
                })
            })
               
        })  
    }
    static addTaskButton(){
        const taskButton = document.createElement('button');
        document.querySelector('.task-display').appendChild(taskButton);
        taskButton.innerHTML = 'Add tasks';
        taskButton.classList.add('task-button');
        taskButton.style.visibility ='hidden';
    }
    static projectModalHandler(projectDialogElement, projectAddBtn){
        projectAddBtn.addEventListener('click', () =>{
            projectDialogElement.show();
            this.disableOrEnableButtons(true);
        })
    }
    static hamburgerMenuHandler(){
        const hamburgerButton = document.querySelector('.hamburger');
            hamburgerButton.addEventListener('click', ()=>{
                if(DOM.projectOpen === false){
                    this.switchingProjectTask('flex', 'none');
                    DOM.projectOpen = true;
                    
                } else if(DOM.projectOpen === true){
                    this.switchingProjectTask('none', 'flex');
                    DOM.projectOpen = false;
                }   
            })
    }
    static visibilityDueSizeHandler(){
        if(window.innerWidth <= DOM.minWindowWidth){
            this.switchingProjectTask('none','flex');
        }else if(window.innerWidth > DOM.minWindowWidth){
            this.switchingProjectTask('flex', 'flex');
        }
    }
    static windowHandler(){
        window.addEventListener('resize', ()=>{
            this.visibilityDueSizeHandler();
        })
        this.visibilityDueSizeHandler();

    }
    static closeTaskModal(dialogElement){
        const closeTaskModal = document.createElement('img');
        closeTaskModal.classList.add('close-btn');
        closeTaskModal.src = myClose.src;
        dialogElement.appendChild(closeTaskModal);

        closeTaskModal.addEventListener('click', () => {
            dialogElement.close();
            this.disableOrEnableButtons(false);
            document.querySelectorAll('.remove-project').forEach((element)=>{
                element.disabled = false;
            })
            document.querySelectorAll('.pro-instance').forEach((element) => {
                element.disabled = false;
            })
        })
    }
    static createTaskModalDescription(){
        const taskDesc = document.createElement('textarea');
        taskDesc.classList.add('text-area');
        taskDesc.maxLength = "55";
        taskDesc.placeholder = 'Task description';
        return taskDesc;
    } 
    static createTaskModalDate(){
        const taskDate = document.createElement('input');
        taskDate.type = 'date';
        taskDate.classList.add('task-date');
        return taskDate;
    }
    static createTaskModalPriority(){
        const taskPriority = document.createElement('select');
        taskPriority.classList.add('task-priority');
        const selectPlaceholder = document.createElement('option');
        selectPlaceholder.value ='';
        selectPlaceholder.disabled = true;
        selectPlaceholder.selected = true;
        selectPlaceholder.innerHTML = 'Select priority';
        taskPriority.appendChild(selectPlaceholder);
        let lowOption = document.createElement('option');
        lowOption.value = 'low';
        lowOption.innerHTML = 'low';
        taskPriority.appendChild(lowOption);
        let medOption = document.createElement('option');
        medOption.value = 'medium';
        medOption.innerHTML = 'medium';
        taskPriority.appendChild(medOption);
        let highOption = document.createElement('option');
        highOption.value = 'high';
        highOption.innerHTML = 'high';
        taskPriority.appendChild(highOption);
        return taskPriority;
    }
    static createSubmitTaskModalBtn(){
        const submitTaskButton = document.createElement('submit-task');
        submitTaskButton.innerHTML = 'Add task';
        submitTaskButton.classList.add('submit-task');
        return submitTaskButton;
    }
    static submitTask(submitBtn, taskDesc, taskDueDate, taskUrgnecy, taskModal){
        submitBtn.addEventListener('click', () =>{
            if(!taskDesc.value){alert('Please, fill task description')};
            if(!taskDueDate.value){alert('Please, fill end date')};
            if(!taskUrgnecy.value){alert('Please, select priority.')}
            else{
                let currentProject = document.querySelector('.project-active').innerHTML;
                Logic.createAndAddNewTask(taskDesc, taskDueDate, taskUrgnecy, currentProject);
                taskDesc.value = '';
                taskDueDate.value = '';
                taskUrgnecy.value = '';
                taskModal.close();

                this.disableOrEnableButtons(false);
                document.querySelectorAll('.remove-project').forEach((element)=>{
                    element.disabled = false;
                })
                document.querySelectorAll('.pro-instance').forEach((element) => {
                    element.disabled = false;
                })
                
            }
        })
    }
    static createTaskModal(){
        const taskModal = document.createElement('dialog');
        taskModal.classList.add('task-modal');
        document.querySelector('.task-display').appendChild(taskModal);
        const taskForm = document.createElement('form');
        taskForm.classList.add('task-form');

        this.closeTaskModal(taskModal);

        const taskDescription = this.createTaskModalDescription();
        const taskDueDate  = this.createTaskModalDate();
        const taskUrgnecy = this.createTaskModalPriority();
        const submitTaskBtn = this.createSubmitTaskModalBtn();
        
        this.submitTask(submitTaskBtn, taskDescription, taskDueDate, taskUrgnecy, taskModal);

        taskForm.appendChild(taskDescription);
        taskForm.appendChild(taskDueDate);
        taskForm.appendChild(taskUrgnecy);
        taskForm.appendChild(submitTaskBtn);
        taskModal.appendChild(taskForm);
    }
    static deleteTaskHandler(deleteButton, taskInfo, taskName, project){
        deleteButton.addEventListener('click', (e) =>{
            if(confirm('Do you want to remove this task?')){
                const currentTask = taskName.innerHTML;
                Logic.removeTask(project, currentTask);
                taskInfo.remove();
            }
        })
    }

static checkboxHandler(project, checkbox){
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
            Logic.taskStatusHandler(project, currentTaskName, checkbox);
        })
    }

}
export function createDOM(){
    DOM.setFavicon();
    DOM.horizontalNav();
    const mainContent = DOM.mainContentArea();
    const projectNavigation = DOM.projectsNavArea(mainContent);
    const projectsAddition = DOM.projectsAdditionSection(projectNavigation);
    DOM.sectionTitle(projectsAddition);
    const projectDialog = DOM.projectModal(mainContent);
    DOM.projectModalCloseBtn(projectDialog);
    DOM.projectInputForm();
    DOM.projectModalAddBtn();  
    DOM.taskDisplayArea(mainContent);
    const projectButton = DOM.projectAddBtn(projectsAddition);
    DOM.projectModalHandler(projectDialog, projectButton);
    DOM.displayCurrentProjects(projectNavigation);
    DOM.addTaskButton();
    DOM.createTaskModal();
    DOM.displayInitialProjects();
    document.querySelector('.project-div').firstChild.click();
    DOM.hamburgerMenuHandler();
    DOM.windowHandler();
    
}

