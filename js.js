/* 
Clone an active button on the screen

Set the text of each button to a value from a list

Put an event handler that is set to each button 
*/

// suit: value
var data = [
    [0, 0],
    [0, 1],
    [3, 2]
]

cardOg = document.getElementById("OG")


for (var i = 0; i < data.length; i++) {
    y_per = data[i][0] * (100/4);
    x_per = data[i][1] * (100/12);

    dup = cardOg.cloneNode(true);

    dup.style["background-position-x"] = `${x_per}%`;
    dup.style["background-position-y"] = `${y_per}%`;

    document.body.append(dup);
}


for (var i = 0; i < 4; i++) {
    y_per = i * (100/4)
    for (var j = 0; j < 13; j++) {
        x_per = j * (100/12);

        var newCard = cardOg.cloneNode(true);
        newCard.style["background-position-x"] = `${x_per}%`
        newCard.style["background-position-y"] = `${y_per}%`
        document.body.append(newCard);
    }
}