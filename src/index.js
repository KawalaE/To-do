import './style.css'
const page = document.getElementById('page');

class UserInterface{

    static horizontalNav(){
        const upperNav = document.createElement('div');
        upperNav.classList.add('upper-nav');
        page.appendChild(upperNav);
        const hamburger = document.createElement('div');
        hamburger.classList.add('hamburger');
        upperNav.appendChild(hamburger);
    }
    
}

UserInterface.horizontalNav();

