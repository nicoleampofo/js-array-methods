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

// The reduce method
function reduceMethod(){
  // let inputValue = document.getElementById("reduceInput").value;
  // let currentTotal = inputValue.reduce((currentTotal, inputValue) => {
  //   return inputValue + currentTotal
  // }, 0
  // );
  // document.getElementById("reduceDisplay").innerHTML = currentTotal;
  // console.log(currentTotal)
}

let total = bears.reduce((currentTotal, bear) => {
  return bear.price + currentTotal
}, 0
)
console.log(total)

// template
function lengthMethod(){
    let inputValue = document.getElementById("word").value;
    let lengthOfWord = inputValue.length;
    document.getElementById("wordLengthDisplay").innerHTML = lengthOfWord;
}