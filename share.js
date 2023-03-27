const share = document.querySelector(".share");

share.addEventListener("click", () => {
    share.classList.toggle('share-active');

    const modal = document.querySelector('.share-modal');
    console.log(modal);
    if(modal.style.display === "flex") {
        modal.style.display = "none";
        share.src = "./images/icon-share.svg";
    } else {
        modal.style.display = "flex";
        share.src = "./images/icon-share-active.svg";
    }
})