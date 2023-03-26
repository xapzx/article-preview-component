const share = document.querySelector(".share");

share.addEventListener("click", () => {
    share.classList.toggle('share-active');

    const modal = document.querySelector('.share-modal');
    console.log(modal);
    if(modal.style.display === "flex") {
        modal.style.display = "none";
    } else {
        modal.style.display = "flex";
    }
})