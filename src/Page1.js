import getInput, {
  createElement,
  getPokemon,
  getValue,
  getInput,
  getLocalStorage,
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

  const searchButtonName = createElement("button", {
    className: "searchButton nameButton ",
    textContent: "Search by Name",
  });

  searchButtonName.addEventListener("click", () => {
    const input = document.getElementById("pokeName").value;

    getPokemon(input);
  });

  const searchResult = createElement("div", { id: "searchResult" });

  const team = getLocalStorage("team");
  const pokemonDiv = createElement("div", { className: "pokemonDiv" });

  team.forEach((pokemon) => {
    const pokeimg = createElement("img", {
      src: `${pokemon.sprites.front_default}`,
      alt: "Pokemon image",
      className: "pokeImg",
    });

    const name = createElement("h3", { textContent: pokemon.species.name });
    const elementTypes = createElement("p", {
      textContent: `Types: ${pokemon.types
        .map((type) => type.type.name)
        .join(", ")}`,
    });

    const onePokemon = createElement("div", {});

    onePokemon.appendChild(name);
    onePokemon.appendChild(elementTypes);
    onePokemon.appendChild(pokeimg);
    pokemonDiv.appendChild(onePokemon);
  });

  return createElement("div", {}, [
    title,
    // page3Link,
    label1,
    input1,
    searchButtonName,
    searchResult,
    pokemonDiv,
  ]);
}

export default Page1;
