function getElement(id) {
  const getElements = document.getElementById(id);
  return getElements;
}
// Clicking on the 💗 heart icon of any card will increase the count in the Navbar

let heartIcon = document.getElementsByClassName("heart-icons");
for (let allHeartIcon of heartIcon) {
 allHeartIcon.addEventListener("click", function () {
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
      "flex justify-between items-center p-4 bg-[#fafafa] rounded-lg mt-4 space-y-2"
    );

    callCard.innerHTML = `
    
               <div>
                  <h1 class="font-bold text-lg font-sans block">
                    ${cardName}
                  </h1>
                  <p class="text-[#5C5C5C] text-lg">${cardNum}</p>
                </div>

                <div>
                  <p class="text-lg font-sans">${new Date().toLocaleTimeString()}</p>
                </div>

    `;
    callHistory.append(callCard);
  });

  getElement("btn-clears").addEventListener("click", function(){
    const callHistory = getElement("call-history");
    callHistory.innerHTML =""
  })
  
  
}
// challange section in number copy---(opied on click)


const copyBtn = document.querySelectorAll(".copy-button");

for(let btns of copyBtn){

  btns.addEventListener("click", function(){
    
    let copyNum = btns.closest(".cards").querySelector(".card-number").innerText.trim();
      navigator.clipboard.writeText(copyNum).then(() => {
        alert(`Hotline Number is copied: ${copyNum}  `)
  
        
        const copyCountEl = document.getElementById("copy-count");
        const copyCount = Number(copyCountEl.innerText);
        let increaseCopy = copyCount + 1;
        
        copyCountEl.innerText = increaseCopy;
      })
  
  
})
}






