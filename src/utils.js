export function createElement(type, props = {}, children = []) {
  const element = document.createElement(type);

  // props: {textContent: "Hello world!", id: "header1", "data-productId": 123, ...}
  Object.entries(props).forEach(([key, value]) => {
    if (~key.indexOf("-")) {
      element.setAttribute(key, value); // data attributes
    } else {
      element[key] = value;
    }
  });

  children.forEach((child) => {
    element.appendChild(child);
  });

  return element;
}

export function getInput() {
  const input = document.getElementById("pokeName").value;
  const nameButton = document.getElementById("nameButton");
  const searchResult = document.getElementById("searchResult");
}

export async function getPokemon(input) {
  const url = `https://pokeapi.co/api/v2/pokemon/${input}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      console.log(data);

      const pokeimg = createElement("img", {
        src: `${data.sprites.front_default}`,
        alt: "Pokemon image",
      });

      const name = createElement("h3", { textContent: data.species.name });
      const elementTypes = createElement("p", {
        textContent: `Types: ${data.types
          .map((type) => type.type.name)
          .join(", ")}`,
      });
      const addPokemon = createElement("button", {
        textContent: "Add Pokemon",
      });
      addPokemon.addEventListener("click", () => {
        localStorage.setItem("team", JSON.stringify(data));
      });

      const pokemon = createElement("div", {});
      pokemon.appendChild(name);
      pokemon.appendChild(elementTypes);
      pokemon.appendChild(pokeimg);
      pokemon.appendChild(addPokemon);
      console.log(pokemon);

      // const a = createElement("div", { textContent: "test" });
      document.querySelector("#searchResult").appendChild(pokemon);

      // return createElement("div", {}, [pokemon]);
    }
  } catch (error) {
    console.error(error);
    searchResult.textContent =
      "There is no Pokemon with that name in our Database";
  }
}
