let Menu = document.getElementById("Bar")
let FloatNav = document.getElementById("FloatNav")
let MenuClose = document.getElementById("MenuClose")
let arrowBack = document.getElementById("arrowBack")
let arrowForward = document.getElementById("arrowForward")
let ratingCard = document.querySelector("RatingCard")
const card = document.querySelectorAll(".Card")

Menu.addEventListener("click", (e) => {
    if (e) {
        FloatNav.style.display = 'flex'

    } else {
        FloatNav.style.display = 'none'

    }
    MenuClose.addEventListener("click", function(e) {
        if (e) {
            FloatNav.style.display = 'none'

        } else {
            FloatNav.style.display = 'flex'

        }
    })

})
let counter = 0
let indexValue = card.length;
console.log(card);
card.forEach((card, index) => {

    card.style.left = `${index *100}%`
})
arrowBack.addEventListener("click", function() {
    if (counter > 0) {
        console.log("hii");
        counter--
        CardDiv()
    }

})
arrowForward.addEventListener("click", function() {

    if (counter < indexValue - 3) {
        console.log("hii");
        counter++
        CardDiv()
    }
})
const CardDiv = () => {
    card.forEach(
        (card) => {
            card.style.transform = `translateX(-${counter *115}%)`
        })
}