(function () {
  let buttons = document.querySelectorAll(".btn");
  let storeItems = document.querySelectorAll(".item");
  let inputText = document.getElementById("searchInput");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // prevent the default link jump to top of page
      e.preventDefault();
      // grab the filter button that was clicked
      let filter = e.target.dataset.filter;
      if (filter === "all") {
        // show all items
        storeItems.forEach(function (item) {
          item.style.display = "flex";
        });
      } else if (filter === "cakes") {
        storeItems.forEach(function (item) {
          console.log(item);
          if (item.classList.contains("cake")) {
            item.style.display = "flex";
          } else {
            item.style.display = "none";
          }
        });
      } else if (filter === "cupcakes") {
        storeItems.forEach(function (item) {
          if (item.classList.contains("cupcake")) {
            item.style.display = "flex";
          } else {
            item.style.display = "none";
          }
        });
      } else if (filter === "sweets") {
        storeItems.forEach(function (item) {
          if (item.classList.contains("sweets")) {
            item.style.display = "flex";
          } else {
            item.style.display = "none";
          }
        });
      } else if (filter === "doughnuts") {
        storeItems.forEach(function (item) {
          if (item.classList.contains("doughnut")) {
            item.style.display = "flex";
          } else {
            item.style.display = "none";
          }
        });
      }
    });
  });
})();

(function () {
  let searchBox = document.querySelector("#searchInput");
  let storeItems = document.querySelectorAll(".item");

  searchBox.addEventListener("keyup", (e) => {
    // display only items that contain filter input
    let searchFilter = e.target.value.toLowerCase().trim();

    storeItems.forEach((item) => {
      if (item.textContent.includes(searchFilter)) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  });
})();
