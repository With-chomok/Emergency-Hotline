function getElement(id) {
  const getElements = document.getElementById(id);
  return getElements;
}
// Clicking on the 💗 heart icon of any card will increase the count in the Navbar

let heartIcon = document.getElementsByClassName("heart-icons");
for (let allHeartIcon of heartIcon) {
  const heartIcons = allHeartIcon.addEventListener("click", function () {
    const increaseHeart = getElement("increase-heart").innerText;
    let totalHeart = Number(increaseHeart) + 1;
    getElement("increase-heart").innerText = Number(totalHeart);






  });
}


// after click call button 

getElement("")

