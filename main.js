function wordMult(arr) {
  const nextList = document.createElement("ul");
  document.getElementById("counts").appendChild(nextList);
  let unique = new Map();
  let clean = null;

  arr.forEach((word) => {
    clean = word;
    if (!unique.has(clean)) {
      unique.set(clean, word);
    }
  });

  let uniqueWords = [...unique.values()];
  uniqueWords.forEach((word) => {
    let counted = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === word) {
        counted += 1;
      }
    }
    const listItem = document.createElement("li");
    const textnode = document.createTextNode(word + ": " + counted);
    listItem.appendChild(textnode);
    const currentList = document.getElementById("counts").lastElementChild;
    currentList.appendChild(listItem);
  });
}

function count() {
  reset();
  let input = document.getElementById("input").value;
  let stripped = input.replace(/[^\w\s\']|_/g, "").toLowerCase();
  let trimmed = stripped.replace(/\s+/g, "");
  let letters = trimmed.split("");
  let words = stripped.split(" ");
  wordMult(letters);
  wordMult(words);
  document.getElementById("result").innerHTML =
    "Letters: " + letters.length + " Words: " + words.length;
}

function reset() {
  let ul = document.getElementById("counts");
  ul.innerHTML = "";
}
