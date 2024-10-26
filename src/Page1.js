import getInput, {
  createElement,
  getPokemon,
  getValue,
  getInput,
} from "./utils";

function Page1() {
  const title = createElement("h2", { textContent: "Search" });
  const label1 = createElement("label", {
    textContent: "Pokemon Name: ",
    className: "label1",
  });

  const input1 = createElement("input", {
    name: "pokeName",
    type: "text",
    id: "pokeName",
    textContent: "or",
  });
  const label2 = createElement("label", {
    textContent: "Pokemon Number: ",
    className: "label2",
  });
  const input2 = createElement("input", { name: "pokeNumber" });
  const searchButtonName = createElement("button", {
    className: "searchButton nameButton ",
    textContent: "Search by Name",
  });

  searchButtonName.addEventListener("click", () => {
    const input = document.getElementById("pokeName").value;
    const nameButton = document.getElementById("nameButton");
    const searchResult = document.getElementById("searchResult");
    getPokemon(input);
  
  });

  const searchButtonNumber = createElement("button", {
    type: "submit",
    value: "submit",
    className: "searchButton numberButton",
    textContent: "Search by Number",
  });

  const searchResult = createElement("div", { id: "searchResult" });

  // const page3Link = createElement("a", {
  //   href: "/#/page3",
  //   textContent: "Link to Page 3",
  // });

  return createElement("div", {}, [
    title,
    // page3Link,
    label1,
    input1,
    label2,
    input2,
    searchButtonName,
    searchButtonNumber,
    searchResult,
  ]);
}

export default Page1;
