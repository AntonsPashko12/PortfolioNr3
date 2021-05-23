anime( {
    targets: ".img-h",
    translateY: "90%",
    duration: "950",
    direction: "alternate",
    loop: true,
    easing: "linear"
});

anime( {
    targets: ".img-c",
    translateY: "90%",
    direction: "alternate",
    duration: "800",
    loop: true,
    easing: "linear"
});

anime( {
    targets: ".img-j",
    translateY: "90%",
    duration: "900",
    direction: "alternate",
    loop: true,
    easing: "linear"
});

anime( {
    targets: ".freepik",
    translateX: "40%",
    duration: "1900",
    easing: "spring(1, 80, 10, 0)"
})

anime( {
    targets: "#moving-worm-hideMe",
    keyframes: [
        {width: "100%", duration: "1000",},
        {translateX: "100%", duration: "1000",}
    ],
    loop: true,
    easing: "easeInOutQuad"
})

anime( {
    targets: "#navbar",
    translateY: "60%",
    duration: "2000",
    easing: "easeOutElastic(2, .3)"
})

// function transformButton() {
//     document.getElementById("button-hideMe").innerText = "";
//     anime( {
//         targets: "#button-hideMe",
//         keyframes: [
//             {scaleY: ".5"},
//             {width: "500px", duration: "1200",},
//         ],
//     })
    
// }


function myFunction() {
    var x = document.getElementById("moving-worm-hideMe");
    var y = document.getElementById("button-hideMe");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
  }