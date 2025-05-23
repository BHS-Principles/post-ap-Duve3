/* 
Clone an active button on the screen

Set the text of each button to a value from a list

Put an event handler that is set to each button 
*/

var coolThing = [
    "what it means",
    "austin texaws",
    "austin hillas",
    "amin shun hil"
];

var HTML = document.getElementById("frame");

function Funny(event, data) {
    alert("ouch ouch");
    console.log(event);
    console.log(data);

    
}

HTML.addEventListener("click", (e) => {Funny(e, "abc");});

for (var i = 0; i < coolThing.length; i++) {

    var d = coolThing[i];
    var copy = HTML.cloneNode(true);


    copy.addEventListener("click", (e) => {Funny(e, d);}); 

    // copy.appendChild(coolThing[i]);
    console.log(`jj: ${d}`)
    document.body.append(copy);
}
