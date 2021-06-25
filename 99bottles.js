function beer() {
    var numberOfBeer = 99;
    while (numberOfBeer >= 0) {
        var keywords = "bottles";
        
        if (numberOfBeer <= 1) {
            var keyword = "bottle";
            console.log(numberOfBeer + " " + keyword + " of  beer on the wall,");
        console.log(numberOfBeer + " " + keyword + " of beer");
        console.log("Take one down and pass it around, ");
        numberOfBeer--;
        console.log(numberOfBeer + " " + keyword + " of beer on the wall");
        } else {
        console.log(numberOfBeer + " " + keywords + " of  beer on the wall,");
        console.log(numberOfBeer + " " + keywords + " of beer");
        console.log("Take one down and pass it around, ");
        numberOfBeer--;
        console.log(numberOfBeer + " " + keywords + " of beer on the wall");
    } }
}
