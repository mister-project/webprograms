document.querySelector(".burger-top").addEventListener("click", () => {
  if (
    (document.querySelector(".menu-footer").style.display =
      "" || document.querySelector(".menu-footer").style.display === "block")
  ) {
    document.querySelector(".menu-footer").style.display = "none";
  } else {
    document.querySelector(".menu-footer").style.display = "block";
  }
});

document.querySelector("#btn_close_menu").addEventListener("click", () => {
  document.querySelector(".menu-footer").style.display = "none";
});
