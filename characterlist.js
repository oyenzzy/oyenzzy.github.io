const filter = document.getElementById("filter");
const character = document.querySelectorAll("table");

filter.addEventListener("input", (e) => filterData(e.target.value));

function filterData(search) {
  character.forEach((char) => {
    if (char.innerText.toLowerCase().includes(search.toLowerCase())) {
      char.classList.remove("d-none");
    } else {
      char.classList.add("d-none");
    }
  });
}
