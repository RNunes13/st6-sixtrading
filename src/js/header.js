export default function Header() {
  const header = document.getElementById("header");
  const menuBtn = document.getElementById("menu-btn");
  const menuNav = document.getElementById("menu-nav");

  function onMenuButtonClick() {
    menuNav.classList.toggle("hidden");
  }

  function onMenuItemClick(event) {
    const { tagName } = event.target;

    if (tagName.toLocaleLowerCase() === "a") {
      onMenuButtonClick();
    }
  }

  menuBtn.addEventListener("click", onMenuButtonClick);

  menuNav.querySelector("ul").addEventListener("click", onMenuItemClick);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });
}
