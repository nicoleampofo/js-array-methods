// The filter method
const bears = [
    {name: "bear", price: 15},
    {name: "sweater", price: 3},
    {name: "shoes", price: 7}
  ]


function filterMethod(){
    let inputValue = document.getElementById("entry").value;
    const filteredItems = bears.filter((bear) => {
        return bear.price <= inputValue
      })
    document.getElementById("filterDisplay").innerHTML = filteredItems.length;
}

function lengthMethod(){
    let inputValue = document.getElementById("word").value;
    let lengthOfWord = inputValue.length;
    document.getElementById("wordLengthDisplay").innerHTML = lengthOfWord;
}