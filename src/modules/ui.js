import '/home/Edyta/Desktop/repos/To-do/src/style.css'
import Favicon from '/home/Edyta/Desktop/repos/To-do/src/assets/logo.svg';
import Close from '/home/Edyta/Desktop/repos/To-do/src/assets/close.svg';
import Hamburger from '/home/Edyta/Desktop/repos/To-do/src/assets/menu-icon.svg'
import { Project } from './project';
import { projects } from './project';
import { Task } from './task';
import format from 'date-fns/format';
const page = document.getElementById('page');
const myFavicon = new Image();
myFavicon.src = Favicon;
const myClose = new Image();
myClose.src = Close;
const myHamburger = new Image();
myHamburger.src = Hamburger;

class UserInterface{
    
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
    static mainContentArea(){
        const mainContent = document.createElement('div');
        mainContent.classList.add('main-content');
        page.appendChild(mainContent);
        return mainContent;
    }
    static projectsNavArea(mainContent){
        const projectsNav = document.createElement('div');
        projectsNav.classList.add('projects-nav');
        mainContent.appendChild(projectsNav);
        return projectsNav;
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
                project.innerHTML = newProject.name;
                inputField.value = '';
                document.querySelector('#project-modal').close();
                this.addProject(project);
                this.disableOrEnableButtons(false);

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
    static disableOrEnableButtons(state){
        document.querySelector('.projects-button').disabled  = state;
        document.querySelector('.task-button').disabled = state;
    }
    static projectModalHandler(projectDialogElement, projectAddBtn){
        projectAddBtn.addEventListener('click', () =>{
            projectDialogElement.show();
            this.disableOrEnableButtons(true);
        })
    }
    static taskDisplayArea(mainContent){
        const taskDisplay = document.createElement('div');
        taskDisplay.classList.add('task-display');
        mainContent.appendChild(taskDisplay);
    }
    static removeProjectButtonHandler(button){
        button.addEventListener('click', (e) => {
            if(confirm('Do you want to remove this project?')){
                let projectNumber = 0;
                const parent = e.target.parentNode;
                const element = parent.firstChild.textContent;
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

                for(let index in projects){
                    if(projects[index].name === element){
                        projects.splice(index, 1);
                    }

                }
                
                if(projectNumber === projects.length){
                    document.querySelector('.task-button').style.visibility= 'hidden';
                }
                console.log(projects)
                }
        })
    }
    static addProject(project){
        const projectDiv = document.createElement('div');
        const removeProject = document.createElement('button');
        removeProject.classList.add('remove-project');
        removeProject.innerHTML = 'x';
        this.removeProjectButtonHandler(removeProject);
        projectDiv.classList.add('project-div');
        document.querySelector('.projects-display').appendChild(projectDiv);
        projectDiv.appendChild(project);
        projectDiv.appendChild(removeProject);
        this.taskModalHandler();
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

            this.disableOrEnableButtons(false);
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
                    if(project.name === currentProject){
                        project.tasks.push(newTask);
                        this.taskDisplay()
                        
                    }
                });

                taskDesc.value = '';
                taskDate.value = '';
                taskPriotity.value = '';
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
        taskForm.appendChild(taskDesc);
        taskForm.appendChild(taskDate);
        taskForm.appendChild(taskPriotity);
        taskForm.appendChild(submitTask);
        taskModal.appendChild(taskForm);
    }
    static switchingProjectTask(projectDisplay, taskDisplay){
        document.querySelector('.projects-nav').style.display = projectDisplay;
        document.querySelector('.task-display').style.display = taskDisplay;
    }
    static hamburgerMenuHandler(){
        const hamburgerButton = document.querySelector('.hamburger');
            let projectOpen = false;
            hamburgerButton.addEventListener('click', ()=>{
                if(projectOpen === false){
                    this.switchingProjectTask('flex', 'none');
                    projectOpen = true;
                }
                else if(projectOpen === true){
                    this.switchingProjectTask('none', 'flex');
                    projectOpen = false;
                }
                document.querySelectorAll('.pro-instance').forEach((project)=>{
                    project.addEventListener('click', ()=>{
                        if(window.innerWidth <= 943){
                            this.switchingProjectTask('none', 'flex');
                            projectOpen = false;
                        }
                        
                    })
                })
            })
            return projectOpen;
    }
    static windowHandler(){
        window.addEventListener('resize', ()=>{
            if(window.innerWidth <= 943){
                this.switchingProjectTask('none','flex');
                this.hamburgerMenuHandler();
            } else if(window.innerWidth > 943){
                this.switchingProjectTask('flex', 'flex');
            }
        })
        if(window.innerWidth <= 943){
            this.switchingProjectTask('none','flex');
            this.hamburgerMenuHandler();
        }else if(window.innerWidth > 943){
            this.switchingProjectTask('flex', 'flex');
        }

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
                    if(project.name === element.innerHTML){
                        if(projects.length !== 0){
                            for(let i = 0; i < project.tasks.length; i++){

                                const taskDOM = document.createElement('div');
                                document.querySelector('.task-display').appendChild(taskDOM);
                                taskDOM.classList.add('task-item');
                                console.log(project.tasks);
    
                                let taskDesc = document.createElement('div');
                                taskDesc.classList.add('task-disp-desc');
                                taskDesc.innerHTML = project.tasks[i].description;
                                taskDOM.appendChild(taskDesc)
    
                                let taskDate = document.createElement('div');
                                taskDate.classList.add('task-disp-date');
                                let currentDate = Date.parse(project.tasks[i].dueDate);
                                taskDate.innerHTML = format(currentDate,'dd/MM/yyyy');
                                taskDOM.appendChild(taskDate);
    
                                
                                let taskPriotity = document.createElement('div');
                                taskPriotity.innerHTML = project.tasks[i].priority;
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
                                console.log(project.tasks[i].description);
                                console.log(projects)
                                this.checkboxHandler(taskState);
                            
                                if(project.tasks[i].status === "1"){
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
                        if(project.name === currentProject){
                            project.tasks.forEach((task) =>{
                                if(task.description === currentTask){
                                    delete project.tasks.splice(project.tasks.indexOf(task), 1);
                                }
                            })
                        }
                    })
                    taskInfo.remove();
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
        taskButton.innerHTML = 'Add tasks'
        taskButton.classList.add('task-button');
        taskButton.style.visibility ='hidden';
    }
    static displayInitialProjects(){
        for(let i = 0; i< projects.length; i++){
            let project = document.createElement('button');
            project.classList.add('pro-instance');
            project.innerHTML = projects[i].name;
            this.addProject(project);   
        }
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
                    if(project.name === currentProject){
                        project.tasks.forEach((task)=>{
                            if(task.description === currentTaskName){
                                if(checkbox.value === '1'){
                                    task.status = '1';
                                }else if(checkbox.value ==='0'){
                                    task.status = '0';
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
    UserInterface.setFavicon();
    UserInterface.horizontalNav();
    const mainContent = UserInterface.mainContentArea();
    const projectNavigation = UserInterface.projectsNavArea(mainContent);
    const projectsAddition = UserInterface.projectsAdditionSection(projectNavigation);
    UserInterface.sectionTitle(projectsAddition);
    const projectButton = UserInterface.projectAddBtn(projectsAddition);
    const projectDialog = UserInterface.projectModal(mainContent);
    const projectModal = UserInterface.projectModalHandler(projectDialog, projectButton);
    UserInterface.projectModalCloseBtn(projectDialog);
    UserInterface.projectInputForm();
    UserInterface.projectModalAddBtn();
    UserInterface.taskDisplayArea(mainContent);
    UserInterface.displayCurrentProjects(projectNavigation);
    UserInterface.displayInitialProjects();
    UserInterface.addTaskButton();
    UserInterface.createTaskModal();
    UserInterface.hamburgerMenuHandler();
    document.querySelector('.project-div').firstChild.click();
    UserInterface.windowHandler();
}

