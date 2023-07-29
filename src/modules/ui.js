import '/home/Edyta/Desktop/repos/To-do/src/style.css'
import Favicon from '/home/Edyta/Desktop/repos/To-do/src/assets/logo.svg';
import Close from '/home/Edyta/Desktop/repos/To-do/src/assets/close.svg';
import { Project } from './project';
import { projects } from './project';
import { Task } from './task';
const page = document.getElementById('page');
const myFavicon = new Image();
myFavicon.src = Favicon;
const myClose = new Image();
myClose.src = Close;

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

        const navigatorName = document.createElement('p');
        navigatorName.classList.add('navigator-name');
        navigatorName.textContent = 'To do';
        upperNav.appendChild(navigatorName);

        const logo = document.createElement('img');
        logo.classList.add('logo');
        logo.src = myFavicon.src;
        upperNav.appendChild(logo);
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
                project.classList.add('project');
                project.innerHTML = newProject.name;
                inputField.value = '';
                document.querySelector('#project-modal').close();
                this.addProject(project);
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
    static projectModalHandler(projectDialogElement, projectAddBtn){
        projectAddBtn.addEventListener('click', () =>{
            projectDialogElement.show();
        })
    }
    static taskDisplayArea(mainContent){
        const taskDisplay = document.createElement('div');
        taskDisplay.classList.add('task-display');
        mainContent.appendChild(taskDisplay);
    }
    static removeProjectButtonHandler(button){
        button.addEventListener('click', (e) => {
            alert('Do you want to remove this project?');
            let projectNumber = 0;
            const parent = e.target.parentNode;
            const element = parent.firstChild.textContent;
            console.log(projectNumber);
            parent.remove();
            const allProjects = document.querySelectorAll('.project');
            allProjects.forEach((element) => {
                if(!element.classList.contains('project-active')){
                    projectNumber++;
                }
            })
            projects.splice(projects.indexOf(element), 1);
            if(projectNumber === projects.length){
                document.querySelector('.task-button').style.visibility= 'hidden';
            }
            console.log(projects)
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
        return taskModal;
    }
    
    static taskModalHandler(){
        const projects = document.querySelectorAll('.project');
        projects.forEach((project) => {
            project.addEventListener('click', () =>{
                projects.forEach((siblingProject)=>{
                    if(siblingProject !== project){
                        siblingProject.classList.remove('project-active');
                    }
                })
                console.log('clicked');
                project.classList.add('project-active');
                document.querySelector('.task-button').style.visibility= 'visible';
            })
        })
    }
    static addTaskButton(){
        const taskButton = document.createElement('button');
        document.querySelector('.task-display').appendChild(taskButton);
        taskButton.innerHTML = 'Add tasks'
        taskButton.classList.add('task-button');
        taskButton.style.visibility='hidden';
    }
    static displayInitialProjects(){
        for(let i = 0; i< projects.length; i++){
            let project = document.createElement('div');
            project.classList.add('project');
            project.innerHTML = projects[i].name;
            this.addProject(project);
            
        }
    }
}
 console.log(projects)
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

}

