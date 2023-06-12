let json1="Ramya"
let json2=5
let json3=true
let json4=[4,6,7,9]
let json5={

    "Product1":"Sweet item",
    "Product2":"spicy"

   
}

let json6= `[
    {
        "Product1":"Sweet item",
        "Product2":"spicy"

    },
    {
        "Product1":"snacks",
        "Product2":"Ice"

    },
    {
        "Product1":"cosmetic item ",
        "Product2":"beauty items"

    }
]`//paresd- json object
let paresd=JSON.parse(json6)
console.log(paresd[2].Product2)
console.log(JSON.stringify(paresd))
//console.log(paresd)