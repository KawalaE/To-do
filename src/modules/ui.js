import '/home/Edyta/Desktop/repos/To-do/src/style.css'
import Favicon from '/home/Edyta/Desktop/repos/To-do/src/assets/favicon.png';
const page = document.getElementById('page');

class UserInterface{

    static setFavicon(){
        const myFavicon = new Image();
        myFavicon.src = Favicon;
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

        const logo = document.createElement('div');
        logo.classList.add('logo');
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

        const projectsAdditionSection = document.createElement('div');
        projectsAdditionSection.classList.add('projects-add-section');
        projectsNav.appendChild(projectsAdditionSection)

        const projectSectionTitle = document.createElement('div');
        projectSectionTitle.textContent = 'Projects';
        projectSectionTitle.classList.add('projects-title');
        projectsAdditionSection.appendChild(projectSectionTitle);

        const projectAddBtn = document.createElement('div');
        projectAddBtn.classList.add('projects-button');
        projectAddBtn.innerHTML = '+';
        projectsAdditionSection.appendChild(projectAddBtn);
        return projectAddBtn;

    }
    static createProjectModal(mainContent){
        const projectDialogElement = document.createElement('dialog');
        projectDialogElement.id = 'modal';
        projectDialogElement.textContent = 'fsdfsdfsdf';
        mainContent.appendChild(projectDialogElement);
        return projectDialogElement;
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
    UserInterface.horizontalNav();
    UserInterface.setFavicon();
    const myMainContent =  UserInterface.mainContentArea();
    const projectModal = UserInterface.createProjectModal(myMainContent);
    const myProjectAddBtn = UserInterface.projectsNavArea(myMainContent);
    UserInterface.projectModalHandler(projectModal,myProjectAddBtn);
    UserInterface.taskDisplayArea(myMainContent);
}

