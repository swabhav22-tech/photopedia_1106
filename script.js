// Gallery category filtering
const filters = document.querySelectorAll(".filter");
const tiles = document.querySelectorAll(".tile");

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.filter;

    filters.forEach((b) => {
      b.classList.remove("is-active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");

    tiles.forEach((tile) => {
      const match = category === "all" || tile.dataset.cat === category;
      tile.classList.toggle("is-hidden", !match);
    });
  });
});
