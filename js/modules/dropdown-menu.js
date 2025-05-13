import outSideClick from "./outsideclick.js";

export default function initDropDownMenu() {
  const dropDownMenus = document.querySelectorAll("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");

    outSideClick(this, () => {
      this.classList.remove("active");
    });
  }

  dropDownMenus.forEach((menu) => {
    menu.addEventListener("touchstart", handleClick);
    menu.addEventListener("click", handleClick);
  });
}
