const toggles = document.querySelectorAll(".input");
const good = document.querySelector("#good");
const fast = document.querySelector("#fast");
const cheap = document.querySelector("#cheap");

toggles.forEach((toggle) => {
  toggle.addEventListener("change", (e) => {
    if (good.checked && cheap.checked && fast.checked) {
      if (good == e.target) {
        cheap.checked = false;
      }
      if (cheap == e.target) {
        fast.checked = false;
      }
      if (fast == e.target) {
        good.checked = false;
      }
    }
  });
});
