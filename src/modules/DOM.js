import '/home/Edyta/Desktop/repos/To-do/src/style.css'
import { projects } from './project';
import { Task } from './task';
import { Project } from './project';
import {UI} from './ui'
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
    static taskDisplayArea(mainContent){
        const taskDisplay = document.createElement('div');
        taskDisplay.classList.add('task-display');
        mainContent.appendChild(taskDisplay);
    }
    static switchingProjectTask(projectDisplay, taskDisplay){
        console.log(document.querySelector('.projects-nav'))
        document.querySelector('.projects-nav').style.display = projectDisplay;
        document.querySelector('.task-display').style.display = taskDisplay;
    }
    static addTaskButton(){
        const taskButton = document.createElement('button');
        document.querySelector('.task-display').appendChild(taskButton);
        taskButton.innerHTML = 'Add tasks'
        taskButton.classList.add('task-button');
        taskButton.style.visibility ='hidden';
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

                projects.forEach((project) =>{
                    if(project.getName() === element){
                        project.removeProject();
                    }
                })
                
                if(projectNumber === projects.length){
                    document.querySelector('.task-button').style.visibility= 'hidden';
                }
                console.log(projects)
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
                UI.taskDisplay();
                document.querySelector('.task-button').style.visibility= 'visible';
                
                document.querySelector('.task-button').addEventListener('click', () =>{
                    document.querySelector('.task-modal').show();

                    projectsDOM.forEach((element) => {
                        element.disabled = true;
                    })
                    document.querySelectorAll('.remove-project').forEach((element)=>{
                        element.disabled = true;
                    })
                    DOM.disableOrEnableButtons(true);
                })
            })
               
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
    static displayInitialProjects(){
        for(let i = 0; i< projects.length; i++){
            let project = document.createElement('button');
            project.classList.add('pro-instance');
            project.innerHTML = projects[i].name;
            this.addProject(project);  
            this.addSwitchListener(project);
        }
       
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
    static projectModalCloseBtn(modal){
        const closeBtn = document.createElement('img');
        closeBtn.classList.add('close-btn');
        closeBtn.src = myClose.src;
        modal.appendChild(closeBtn);
        closeBtn.addEventListener('click', ()=>{
            modal.close();
            document.querySelector('#project-title').value = '';
            DOM.disableOrEnableButtons(false);
        })
    }
    static hamburgerMenuHandler(){
        const hamburgerButton = document.querySelector('.hamburger');
            hamburgerButton.addEventListener('click', ()=>{
                console.log(DOM.projectOpen);
                if(DOM.projectOpen === false){
                    this.switchingProjectTask('flex', 'none');
                    DOM.projectOpen = true;
                    
                } else if(DOM.projectOpen === true){
                    this.switchingProjectTask('none', 'flex');
                    DOM.projectOpen = false;
                    
                }   
            })
    }
    static windowHandler(){
        window.addEventListener('resize', ()=>{
            if(window.innerWidth <= DOM.minWindowWidth){
                this.switchingProjectTask('none','flex');
            } else if(window.innerWidth > DOM.minWindowWidth){
                this.switchingProjectTask('flex', 'flex');
            }
        })
        if(window.innerWidth <= DOM.minWindowWidth){
            this.switchingProjectTask('none','flex');
        }else if(window.innerWidth > DOM.minWindowWidth){
            this.switchingProjectTask('flex', 'flex');
        }

    }
    static addSwitchListener(element){
        element.addEventListener('click', ()=>{
            if(window.innerWidth <= UI.minWindowWidth){
                DOM.switchingProjectTask('none', 'flex');
                UI.projectOpen = false;
            }
        })  
    }
}

export function createDOM(){
    DOM.setFavicon();
    DOM.horizontalNav();
    const mainContent = DOM.mainContentArea();  
    const projectNavigation = DOM.projectsNavArea(mainContent);
    const projectsAddition = DOM.projectsAdditionSection(projectNavigation);
    DOM.taskDisplayArea(mainContent);
    DOM.sectionTitle(projectsAddition);
    const projectButton = DOM.projectAddBtn(projectsAddition);
    const projectDialog = DOM.projectModal(mainContent);
    DOM.displayCurrentProjects(projectNavigation);
    DOM.addTaskButton();
    DOM.displayInitialProjects();
    DOM.hamburgerMenuHandler();
    DOM.windowHandler();
    DOM.projectModalCloseBtn(projectDialog);
}

