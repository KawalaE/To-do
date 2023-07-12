import './style.css'
import Favicon from './assets/favicon.png';
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
}

UserInterface.horizontalNav();
UserInterface.setFavicon();

