// Funcion para agrega ceros al inicio de un número si corresponde.
export const addZeros = (numero) => {
  const numeroStr = numero.toString();
  return numeroStr.length < 4 ? numeroStr.padStart(3, "0") : numeroStr;
};

// Funcion para obtener el Background del CSS según el tipo.
export const getBackgroundColorClass = (type) => {
  switch (type) {
    case "fire":
      return "bg-fire";
    case "water":
      return "bg-water";
    case "bug":
      return "bg-bug";
    case "dark":
      return "bg-dark";
    case "dragon":
      return "bg-dragon";
    case "electric":
      return "bg-electric";
    case "fairy":
      return "bg-fairy";
    case "fighting":
      return "bg-fighting";
    case "flying":
      return "bg-flying";
    case "ghost":
      return "bg-ghost";
    case "normal":
      return "bg-normal";
    case "grass":
      return "bg-grass";
    case "ground":
      return "bg-ground";
    case "ice":
      return "bg-ice";
    case "poison":
      return "bg-poison";
    case "psychic":
      return "bg-psychic";
    case "rock":
      return "bg-rock";
    case "steel":
      return "bg-steel";
    default:
      return "";
  }
};

// Funcion para obtener la fuente del CSS según el tipo
export const getFontColorClass = (type) => {
  switch (type) {
    case "fire":
      return "font-clr-fire";
    case "water":
      return "font-clr-water";
    case "bug":
      return "font-clr-bug";
    case "dark":
      return "font-clr-dark";
    case "dragon":
      return "font-clr-dragon";
    case "electric":
      return "font-clr-electric";
    case "fairy":
      return "font-clr-fairy";
    case "fighting":
      return "font-clr-fighting";
    case "flying":
      return "font-clr-flying";
    case "ghost":
      return "font-clr-ghost";
    case "normal":
      return "font-clr-normal";
    case "grass":
      return "font-clr-grass";
    case "ground":
      return "font-clr-ground";
    case "ice":
      return "font-clr-ice";
    case "poison":
      return "font-clr-poison";
    case "psychic":
      return "font-clr-psychic";
    case "rock":
      return "font-clr-rock";
    case "steel":
      return "font-clr-steel";
    default:
      return "";
  }
};

// Funcion para obtener el Background con opacida del CSS según el tipo.
export const getBackgroundOpacityClass = (type) => {
  switch (type) {
    case "bug":
      return "bg-op-Bug";
    case "dark":
      return "bg-op-Dark";
    case "dragon":
      return "bg-op-Dragon";
    case "electric":
      return "bg-op-Electric";
    case "fairy":
      return "bg-op-Fairy";
    case "fighting":
      return "bg-op-Fighting";
    case "fire":
      return "bg-op-Fire";
    case "flying":
      return "bg-op-Flying";
    case "ghost":
      return "bg-op-Ghost";
    case "normal":
      return "bg-op-Normal";
    case "grass":
      return "bg-op-Grass";
    case "ground":
      return "bg-op-Ground";
    case "ice":
      return "bg-op-Ice";
    case "poison":
      return "bg-op-Poison";
    case "psychic":
      return "bg-op-Psychic";
    case "rock":
      return "bg-op-Rock";
    case "steel":
      return "bg-op-Steel";
    case "water":
      return "bg-op-Water";
    default:
      return "";
  }
};

// Funcion para obtener la fuente en valor hexadecimal
export const getBackgroundCompleteHex = (type) => {
  switch (type) {
    case "fire":
      return "#F57D31";
    case "water":
      return "#6493EB";
    case "bug":
      return "#A7B723";
    case "dark":
      return "#7557AC";
    case "dragon":
      return "#7037FF";
    case "electric":
      return "#F9CF30";
    case "fairy":
      return "#E69EAC";
    case "fighting":
      return "#C12239";
    case "flying":
      return "#A891EC";
    case "ghost":
      return "#70559B";
    case "normal":
      return "#AAA67F";
    case "grass":
      return "#74CB48";
    case "ground":
      return "#DEC16B";
    case "ice":
      return "#9AD6DF";
    case "poison":
      return "#A43E9E";
    case "psychic":
      return "#FB5584";
    case "rock":
      return "#B69E31";
    case "steel":
      return "#B7B9D0";
    default:
      return "";
  }
};

// Funcion para obtener el background en valor hexadecimal
export const getBackgroundEmptyHex = (type) => {
  switch (type) {
    case "fire":
      return "#F57D3133";
    case "water":
      return "#6493EB33";
    case "bug":
      return "#A7B72333";
    case "dark":
      return "#7557AC33";
    case "dragon":
      return "#7037FF33";
    case "electric":
      return "#F9CF3033";
    case "fairy":
      return "#E69EAC33";
    case "fighting":
      return "#C1223933";
    case "flying":
      return "#A891EC33";
    case "ghost":
      return "#70559B33";
    case "normal":
      return "#AAA67F33";
    case "grass":
      return "#74CB4833";
    case "ground":
      return "#DEC16B33";
    case "ice":
      return "#9AD6DF33";
    case "poison":
      return "#A43E9E33";
    case "psychic":
      return "#FB558433";
    case "rock":
      return "#B69E3133";
    case "steel":
      return "#B7B9D033";
    default:
      return "";
  }
};
