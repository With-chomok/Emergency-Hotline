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

const callButton = document.getElementsByClassName("call-button");

for (let allCalls of callButton) {
  allCalls.addEventListener("click", function () {
    const card = allCalls.closest(".cards");

    const cardName = card.querySelector(".card-name").innerText.trim();
    const cardNum = card.querySelector(".card-number").innerText.trim();

    alert(`Service Name: ${cardName}\nService Number: ${cardNum}`);

    // coin reduce after each click

    const coinButton = getElement("coin-button");

    const totalCurrentCoin = Number(coinButton.innerText);

    if (totalCurrentCoin < 20) {
      alert("A minimum of 20 coins is required to make a call.");
      return;
    }

    const newAmountCoin = totalCurrentCoin - 20;
    coinButton.innerText = newAmountCoin;

    const callHistory = getElement("call-history");

    const callCard = document.createElement("div");

    callCard.setAttribute(
      "class",
      "flex justify-between items-center p-4 bg-[#fafafa] rounded-lg mt-2"
    );

    callCard.innerHTML = `
    
               <div>
                  <h1 class="font-bold text-lg font-sans">
                    ${cardName}
                  </h1>
                  <p class="text-[#5C5C5C] text-lg">${cardNum}</p>
                </div>

                <div>
                  <p class="text-lg font-sans">4.56.89 Am</p>
                </div>

    `;
    callHistory.append(callCard);
  });

  getElement("btn-clears").addEventListener("click", function(){
    const callHistory = getElement("call-history");
    callHistory.innerHTML =""
  })
}

