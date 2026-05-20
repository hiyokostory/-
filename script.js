const filterButtons = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll(".work-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    cards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const shouldShow = filter === "all" || categories.includes(filter);
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});
