import '/home/Edyta/Desktop/repos/To-do/src/style.css'
import Favicon from '/home/Edyta/Desktop/repos/To-do/src/assets/logo.svg';
import { Project } from './project';
import { projects } from './project';
const page = document.getElementById('page');
const myFavicon = new Image();
myFavicon.src = Favicon;

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
        const projectName = document.createElement('input');
        projectName.id = 'project-title';
        projectName.type = 'text';
        projectName.placeholder = 'Project title'
        projectForm.appendChild(projectName);
        document.querySelector('#project-modal').appendChild(projectForm);
        
    }
    static projectModalCloseBtn(){
        const inputField = document.querySelector('#project-title');
        const projectCloseButton = document.createElement('button');
        document.querySelector('#project-modal').appendChild(projectCloseButton);
        projectCloseButton.addEventListener('click', ()=>{
            const newProject = new Project(inputField.value);
            projects.push(newProject);
            inputField.value = '';
            document.querySelector('#project-modal').close();
            console.log(projects)
        })
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
    UserInterface.projectInputForm();
    UserInterface.projectModalCloseBtn();
    UserInterface.taskDisplayArea(mainContent);
}

