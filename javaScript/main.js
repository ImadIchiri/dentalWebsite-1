/*-------------------------------------*\
    #Start Sign (in / up)
\*-------------------------------------*/
const btnsBackground = document.getElementById("btns-bground");
const signBtns = document.querySelectorAll(".sign");

signBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    signBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    // Change The Position Of The Background
    btnsBackground.style.left = `${btn.dataset.left}`;
  });
});
/*-------------------------------------*\
    #End Sign (in / up)
\*-------------------------------------*/

/*-------------------------------------*\
    #Start Toggle Menu
\*-------------------------------------*/
const mainNav = document.getElementById("main-nav");
const toggleMenu = document.querySelector("#toggle-menue");
const toggleMenuList = document.querySelectorAll("#toggle-menue i");
const navItems = document.querySelectorAll(".list li");

const openMenu = () => {
  mainNav.classList.add("active");
  toggleMenu.dataset.state = "opened";
};

const closeMenu = () => {
  mainNav.classList.remove("active");
  toggleMenu.dataset.state = "closed";
};

toggleMenu.addEventListener("click", () => {
  toggleMenuList.forEach((icon) => {
    icon.classList.toggle("active");
  });

  if (toggleMenu.dataset.state === "closed") {
    openMenu();
    return false; // To Do Not Access The Next If Statement
  }

  if (toggleMenu.dataset.state === "opened") {
    closeMenu();
  }
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    closeMenu();
  });
});
/*-------------------------------------*\
    #End Toggle Menu
\*-------------------------------------*/
