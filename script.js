function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  // instead doing an if/else, we have a toggle method to help us:

  html.classList.toggle("light")

  // pegar imagem //

  const img = document.querySelector("#profile img")

  // aplicar condiçao do mode//

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Mobile/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/Mobile/Avatar.png")
  }
}
