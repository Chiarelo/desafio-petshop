const modal = document.querySelector(".modal");
const button = document.getElementById("new-scheduled");

button.onclick = () => {
  modal.setAttribute("style", "display: block");
};

export function closeModal() {
  modal.setAttribute("style", "display: none");
}

modal.addEventListener("click", (event) => {
  if (event.target.classList.contains("close-form")) {
    closeModal();  
  }

});
