export function renderHome(){
    const content = document.querySelector("#content")

    const firstHeading = document.createElement("h1")

    firstHeading.textContent = "First heading"

    const fparagraph = document.createElement("p")

    fparagraph.textContent = "This is a paragraph hehehe of home"

    content.appendChild(firstHeading)
    content.appendChild(fparagraph)
}