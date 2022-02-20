const shareButton = document.querySelector(".btn-share");
const cardFooter = document.querySelector(".card-footer");
let shareButtonRestore;

shareButton.addEventListener("click", () => {
  if (document.querySelector(".share-block")) removeShareBlock();
  else createShareBlock();
});

function createShareBlock() {
  const shareBlock = document.createElement("div");

  shareBlock.classList.add("share-block");

  shareBlock.innerHTML = `<span>SHARE</span>
  <a href="#"><img src="images/icon-facebook.svg" /></a>
  <a href="#"><img src="images/icon-twitter.svg" /></a>
  <a href="#"><img src="images/icon-pinterest.svg" /></a>
  <button class="btn-share" id="btn-close-share-block">
  <ion-icon class="btn-img" name="arrow-redo"></ion-icon>
  </button>`;

  cardFooter.appendChild(shareBlock);

  shareButtonRestore = document.querySelector("#btn-close-share-block");

  shareButtonRestore.addEventListener("click", () => {
    shareButton.classList.remove("btn-share-active");
    shareBlock.remove();
  });

  shareButton.classList.add("btn-share-active");
  shareButtonRestore.classList.add("btn-share-active");
}

function removeShareBlock() {
  shareButton.classList.remove("btn-share-active");
  shareButtonRestore.classList.remove("btn-share-active");
  document.querySelector(".share-block").remove();
}
