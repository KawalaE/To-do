import '/home/Edyta/Desktop/repos/To-do/src/style.css'
import { Storage } from './storage';
import { projects } from './project';

import { Project } from './project';
import {Logic} from './logic';
import Favicon from '/home/Edyta/Desktop/repos/To-do/src/assets/logo.svg';
const myFavicon = new Image();
myFavicon.src = Favicon;

import GithubIcon from '/home/Edyta/Desktop/repos/To-do/src/assets/github-mark-white.svg';
const myGithubIcon = new Image();
myGithubIcon.src = GithubIcon;

import Box from '/home/Edyta/Desktop/repos/To-do/src/assets/box.svg';
const myBox = new Image();
myBox.src = Box;

import Calendar from '/home/Edyta/Desktop/repos/To-do/src/assets/calendar-card.svg';
const myCalendar = new Image();
myCalendar.src = Calendar;

import CofeeMug from '/home/Edyta/Desktop/repos/To-do/src/assets/starbucks.svg';
const myCoffeeMug = new Image();
myCoffeeMug.src = CofeeMug;

import Hamburger from '/home/Edyta/Desktop/repos/To-do/src/assets/menu-icon.svg'
const myHamburger = new Image();
myHamburger.src = Hamburger;

import Close from '/home/Edyta/Desktop/repos/To-do/src/assets/close.svg';
const myClose = new Image();
myClose.src = Close;

export class DOM{
    static projectOpen = false; 
    static minWindowWidth = 1000;

    static setFavicon(){
        const head = document.querySelector('head');
        const favicon = document.createElement('link');
        favicon.setAttribute('rel', 'shortcut icon');
        favicon.setAttribute('href', myCoffeeMug.src);
        head.append(favicon);
    }
    static horizontalNav(){
        const upperNav = document.createElement('div');
        upperNav.classList.add('upper-nav');
        page.append(upperNav);

        const leftNavSide = document.createElement('div');
        leftNavSide.classList.add('left-side')
        upperNav.append(leftNavSide);

        const navigatorName = document.createElement('p');
        navigatorName.classList.add('navigator-name');
        navigatorName.textContent = 'To do';
        leftNavSide.append(navigatorName);

        const logo = document.createElement('img');
        logo.classList.add('logo');
        logo.src = myFavicon.src;
        leftNavSide.append(logo);
        logo.addEventListener('click', () => location.reload());

        const hamburger = document.createElement('button');
        const hamburgerImg = document.createElement('img');
        hamburgerImg.classList.add('hamburger-img');
        hamburger.append(hamburgerImg);
        hamburgerImg.classList.add('hamburger');
        upperNav.append(hamburger);
        hamburgerImg.src = myHamburger.src;
    }
    static projectsNavArea(mainContent){
        const projectsNav = document.createElement('div');
        projectsNav.classList.add('projects-nav');
        mainContent.append(projectsNav);
        return projectsNav;
    }
    static menuButtonHandler(button, state, month = 0){
        button.addEventListener('click', ()=>{
            document.querySelector('.task-display').style.margin = "20px 0 20px 0";
            document.querySelector('.task-button').style.display = 'none';
            document.querySelectorAll('.pro-instance').forEach((e)=>{
                e.classList.remove('project-active');
            })
            document.querySelectorAll('.tasks-active').forEach((e) => {
                e.classList.remove('tasks-active');
            })
            button.classList.add('tasks-active');
            this.taskDisplay(state, month);
        })
    } 
    static allTasks(projectsNav){
        const allTasksDOM = document.createElement('div');
        allTasksDOM.classList.add('all-tasks');
        const coffeeIcon = document.createElement('img');
        coffeeIcon.src = myCoffeeMug.src;
        coffeeIcon.classList.add('coffee-icon');
        const allTasks = document.createElement('button');
        allTasks.textContent = 'All tasks';
        allTasks.classList.add('all-tasks-btn');
        allTasksDOM.append(coffeeIcon, allTasks);
        projectsNav.append(allTasksDOM);
        this.addSwitchListener(allTasks); 
        this.menuButtonHandler(allTasks, false);
    }
    
    static thisWeek(projectsNav){
        const thisWeekBtn = document.createElement('div');
        thisWeekBtn.classList.add('this-week');
        const calendarCard = document.createElement('img');
        calendarCard.src = myCalendar.src;
        calendarCard.classList.add('calendar-card');
        thisWeekBtn.textContent = "This week";
        const thisWeekDOM = document.createElement('div');
        thisWeekDOM.classList.add('this-week-parent');
        thisWeekDOM.append(calendarCard, thisWeekBtn);
        projectsNav.append(thisWeekDOM);
        this.addSwitchListener(thisWeekBtn);
        this.menuButtonHandler(thisWeekBtn, false, 2)
    }
    static thisMonth(projectsNav){
        const thisMonthDOM = document.createElement('div');
        thisMonthDOM.classList.add('this-month-dom');
        projectsNav.appendChild(thisMonthDOM);
        const thisMonthBtn = document.createElement('button');
        thisMonthBtn.textContent = "This month";
        thisMonthBtn.classList.add('this-month-btn');
        const boxIcon = document.createElement('img');
        boxIcon.src = myBox.src;
        boxIcon.classList.add('box-icon');
        thisMonthDOM.append(boxIcon, thisMonthBtn);
        this.addSwitchListener(thisMonthBtn); 
        this.menuButtonHandler(thisMonthBtn, false, 1);
    }
    static mainContentArea(){
        const mainContent = document.createElement('div');
        mainContent.classList.add('main-content');
        page.append(mainContent);
        return mainContent;
    }
    static displayCurrentProjects(projectsNav){
        const projectsDisplay = document.createElement('div');
        projectsDisplay.classList.add('projects-display');
        projectsNav.append(projectsDisplay);
        return projectsDisplay;
    }
    static projectsAdditionSection(projectsNav){
        const projectsAdditionSection = document.createElement('div');
        projectsAdditionSection.classList.add('projects-add-section');
        projectsNav.append(projectsAdditionSection)
        return projectsAdditionSection;
    }
    static sectionTitle(projectsAdditionSection){
        const projectSectionTitle = document.createElement('div');
        projectSectionTitle.textContent = 'Projects';
        projectSectionTitle.classList.add('projects-title');
        projectsAdditionSection.append(projectSectionTitle);
    }
    static projectAddBtn(projectsAdditionSection){
        const projectAddBtn = document.createElement('button');
        projectAddBtn.classList.add('projects-button');
        projectAddBtn.innerHTML = '+';
        projectsAdditionSection.append(projectAddBtn);
        return projectAddBtn;
    }
    static projectModal(mainContent){
        const projectDialogElement = document.createElement('dialog');
        projectDialogElement.id = 'project-modal';
        mainContent.append(projectDialogElement);
        return projectDialogElement;
    }
    static projectModalCloseBtn(modal){
        const closeBtn = document.createElement('img');
        closeBtn.classList.add('close-btn');
        closeBtn.src = myClose.src;
        modal.append(closeBtn);
        closeBtn.addEventListener('click', ()=>{
            modal.close();
            document.querySelector('#project-title').value = '';
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
        projectForm.append(projectName);
        document.querySelector('#project-modal').append(projectModalContent, projectForm);
        document.querySelector('.modal-content').append(projectForm);
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
    static projectInstanceDOM(instance){
        let project = document.createElement('div');
        project.classList.add('pro-instance');
        project.innerHTML = instance.getName();
        return project;
    }
    static projectModalAddBtn(){
        const inputField = document.querySelector('#project-title');
        const projectAddButton = document.createElement('button');
        projectAddButton.classList.add('project-add-btn');
        projectAddButton.innerHTML = 'Add project';
        document.querySelector('#project-modal').append(projectAddButton);
        projectAddButton.addEventListener('click', ()=>{
            const newProject = new Project(inputField.value);
            if(!inputField.value){
                alert('Project name cannot be empty!');
            }else{
                projects.push(newProject);
                Storage.saveProjectsList(projects);
                const project = this.projectInstanceDOM(newProject);
                inputField.value = '';
                document.querySelector('#project-modal').close();
                this.addProject(project, newProject);
                this.addSwitchListener(project);  
            }
        })
        document.addEventListener('keypress',(event)=>{
            if(event.key === "Enter" && document.querySelector('#project-modal').open){
                projectAddButton.click();
            }
        })
        document.querySelector('.modal-content').append(projectAddButton);

    }
    
    static addProject(project, projectInstance){
        const projectDiv = document.createElement('div');
        const removeProject = document.createElement('button');
        removeProject.classList.add('remove-project');
        removeProject.innerHTML = 'x';
        console.log("addProject: ", projectInstance);
        this.removeProjectButtonHandler(removeProject, projectInstance);
        projectDiv.classList.add('project-div');
        document.querySelector('.projects-display').append(projectDiv);
        projectDiv.append(project, removeProject);
        this.taskModalHandler();
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
                Logic.deleteProject(projectInstance);
                if(projectNumber === projects.length){
                    document.querySelector('.task-button').style.display = 'block';
                }
                Storage.saveProjectsList(projects);
            }
        })
    }
    static taskDisplayArea(mainContent){
        const taskDisplay = document.createElement('div');
        taskDisplay.classList.add('task-display');
        mainContent.append(taskDisplay);
    }
    static taskDisplay(state, month = 0){
        const taskDOM = document.createElement('div');
        while (taskDOM.firstChild){
            taskDOM.removeChild(taskDOM.lastChild);
        }
        const previousTasks = document.querySelectorAll('.task-item');
        previousTasks.forEach((previous) => {
            previous.remove();
        })
        document.querySelectorAll('.pro-instance').forEach((element) => {
            console.log(projects)
            if(element.classList.contains('project-active') === state){
                projects.forEach((project)=>{
                    let currentTasks = project.getTasks();
                    if(project.getName() === element.innerHTML && projects.length !==0) {
                        if(month === 1){
                            currentTasks = project.getCurrentMonthTasks();
                        } else if(month === 2){
                            currentTasks = project.getCurrentWeekTasks();
                        }
                        currentTasks.forEach((task) => {
                            const taskDOM = document.createElement('div');
                            document.querySelector('.task-display').append(taskDOM);
                            taskDOM.classList.add('task-item');
                            console.log(project.tasks);
    
                            let taskDesc = document.createElement('div');
                            taskDesc.classList.add('task-disp-desc');
                            taskDesc.innerHTML = task.getDescription();
    
                            let taskDate = document.createElement('div');
                            taskDate.classList.add('task-disp-date');
                            let currentDate = task.getFormatedDueDate();
                            taskDate.innerHTML = currentDate;
                            
                            let taskPriotity = document.createElement('div');
                            taskPriotity.innerHTML = task.getPriority();
                            if(taskPriotity.innerHTML === 'low'){
                                taskPriotity.classList.add('task-disp-priority-low');
                            } else if(taskPriotity.innerHTML === 'medium'){
                                taskPriotity.classList.add('task-disp-priority-medium');
                            } else if(taskPriotity.innerHTML ==='high'){
                                taskPriotity.classList.add('task-disp-priority-high');
                            }
    
                            let taskState = document.createElement('input');
                            taskState.type = 'checkbox';
                            taskState.classList.add('task-state');
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
                            taskDOM.append(taskDesc, taskDate, taskPriotity, taskState, deleteTaskBtn);
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
                document.querySelector('.all-tasks-btn').classList.remove('tasks-active');
                document.querySelector('.this-week').classList.remove('tasks-active');
                document.querySelector('.this-month-btn').classList.remove('tasks-active');
                document.querySelector('.task-display').style.margin = " 0 0 0 0 "
                projectsDOM.forEach((siblingProject)=>{
                    if(siblingProject !== project){
                        siblingProject.classList.remove('project-active');
                    }
                })
                project.classList.add('project-active');
                this.taskDisplay(true);
                document.querySelector('.task-button').style.display= 'block';
                
                document.querySelector('.task-button').addEventListener('click', () =>{
                    document.querySelector('.task-modal').showModal();
                })
                document.addEventListener('keypress',(event)=>{
                    if(event.key === "Enter" && document.querySelector('.task-modal').open){
                        document.querySelector('.submit-task').click();
                    }
                })
            })
               
        })  
    }
    static addTaskButton(){
        const taskButton = document.createElement('button');
        document.querySelector('.task-display').append(taskButton);
        taskButton.innerHTML = 'Add tasks';
        taskButton.classList.add('task-button');
        taskButton.style.display ='block';
    }
    static projectModalHandler(projectDialogElement, projectAddBtn){
        projectAddBtn.addEventListener('click', () =>{
            projectDialogElement.showModal();
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
        dialogElement.append(closeTaskModal);
        closeTaskModal.addEventListener('click', ()=>dialogElement.close())
    }
    static createTaskModalDescription(){
        const taskDesc = document.createElement('textarea');
        taskDesc.classList.add('text-area');
        taskDesc.maxLength = '40';
        taskDesc.placeholder = 'Task description';
        return taskDesc;
    } 
    static createTaskModalDate(){
        const taskDate = document.createElement('input');
        taskDate.type = 'date';
        taskDate.classList.add('task-date');
        console.log(taskDate);
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
        let lowOption = document.createElement('option');
        lowOption.value = 'low';
        lowOption.innerHTML = 'low';
        let medOption = document.createElement('option');
        medOption.value = 'medium';
        medOption.innerHTML = 'medium';
        let highOption = document.createElement('option');
        highOption.value = 'high';
        highOption.innerHTML = 'high';
        taskPriority.append(selectPlaceholder,lowOption, medOption, highOption);
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
                this.taskDisplay(true);
                Storage.saveProjectsList(projects);
            }
        })
    }
    static createTaskModal(){
        const taskModal = document.createElement('dialog');
        taskModal.classList.add('task-modal');
        document.querySelector('.task-display').append(taskModal);
        const taskForm = document.createElement('form');
        taskForm.classList.add('task-form');

        this.closeTaskModal(taskModal);

        const taskDescription = this.createTaskModalDescription();
        const taskDueDate  = this.createTaskModalDate();
        const taskUrgnecy = this.createTaskModalPriority();
        const submitTaskBtn = this.createSubmitTaskModalBtn();
        
        this.submitTask(submitTaskBtn, taskDescription, taskDueDate, taskUrgnecy, taskModal);
        taskForm.append(taskDescription, taskDueDate, taskUrgnecy, submitTaskBtn);
        taskModal.append(taskForm);
    }
    static deleteTaskHandler(deleteButton, taskInfo, taskName, project){
        deleteButton.addEventListener('click', (e) =>{
            if(confirm('Do you want to remove this task?')){
                const currentTask = taskName.innerHTML;
                Logic.removeTask(project, currentTask);
                taskInfo.remove();
                Storage.saveProjectsList(projects);
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
            Storage.saveProjectsList(projects);
        })
    }
    static createFooter(){
        const footer = document.createElement('div');
        footer.classList.add('footer');
        document.querySelector('#page').append(footer);
        const footerInfo = document.createElement('div');
        footerInfo.textContent = "Created by KawalaE";
        const githubIcon = document.createElement('img');
        githubIcon.src = myGithubIcon.src;
        githubIcon.classList.add('footer-img');
        footer.append(footerInfo, githubIcon);
        githubIcon.addEventListener('click', ()=>{
            window.location.href="https://github.com/KawalaE/To-do";
        })
    }
}

export function createDOM(){
    DOM.setFavicon();
    DOM.horizontalNav();
    const mainContent = DOM.mainContentArea();
    const projectNavigation = DOM.projectsNavArea(mainContent);
    DOM.allTasks(projectNavigation);
    DOM.thisWeek(projectNavigation);
    DOM.thisMonth(projectNavigation);
    const projectsAddition = DOM.projectsAdditionSection(projectNavigation);
    DOM.sectionTitle(projectsAddition);
    DOM.displayCurrentProjects(projectNavigation);
    const projectDialog = DOM.projectModal(mainContent);
    DOM.projectModalCloseBtn(projectDialog);
    DOM.projectInputForm();
    DOM.projectModalAddBtn();
    DOM.taskDisplayArea(mainContent);
    const projectButton = DOM.projectAddBtn(projectsAddition);
    DOM.projectModalHandler(projectDialog, projectButton);
    DOM.addTaskButton();
    DOM.createTaskModal();
    console.log(document.querySelector('.projects-nav').firstChild)
    document.querySelector('.projects-nav').firstChild.lastChild.click();
    DOM.hamburgerMenuHandler();
    DOM.windowHandler();
    DOM.createFooter();
    projects = Storage.getProjectsList() || Logic.createDefaultProject();
    document.querySelector('.all-tasks-btn').click();
}