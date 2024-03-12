class MobileNavbar {
    constructor(mobileMemu, menuL, navLinks) {
        this.mobileMemu = document.querySelector(mobileMemu);
        this.menuL = document.querySelector(menuL);
        this.navLinks = document.querySelectorAll(navLinks);
        this.aciveClass = "active";

        this.handleClick = this.handleClick.bind();
    }


    handleClick() {
        console.log(this);
        this.menuL.classList.togglr(this.aciveClass);
    }


    addClickEvent() {
        this.mobileMemu = addEventListener("click", this.handleClick);
    }


    init() {
        if (this.mobileMemu) {
            this.addClickEvent();
        }
        return this;
    }

}

const mobileNavar = new MobileNavbar (
    ".menu-re",
    ".menu",
    ".menu li",
);
mobileNavar.init();
