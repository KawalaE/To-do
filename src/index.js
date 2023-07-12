import './style.css'
const page = document.getElementById('page');

class UserInterface{

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

    
}

UserInterface.horizontalNav();

