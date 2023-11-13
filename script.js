let api = "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";

let input = document.getElementById("statement");

let btn = document.getElementById("btn");

let images = document.querySelector(".images");

images.style.cssText =
  "  display: grid;grid-template-columns: repeat(4, 1fr);gap: 10px;";

let divs = document.querySelectorAll(".images div");

divs.forEach((d) => {
  d.style.cssText =
    "width: 200px; height: 200px; background-color: #292c31; border-radius: 10px; border: 3px solid #36383d;";
});

// document.querySelector(".images div img");

let getImages = async function () {
  // request api
  let methods = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api}`,
    },
    body: JSON.stringify({
      prompt: input.value,
      n: 4,
      size: "256x256",
    }),
  };

  let response = await fetch(
    "https://api.openai.com/v1/images/generations",
    methods
  );

  // parse response as json
  let data = await response.json();

  let listImgs = data.data;
  images.innerHTML = "";

  listImgs.map((i) => {
    let box = document.createElement("div");
    images.append(box);
    let img = document.createElement("img");
    box.append(img);
    img.src = i.url;
  });
};

btn.onclick = getImages;
