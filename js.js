var coolThing = [
    "what it means",
    "austin texaws",
    "austin hillas",
    "amin shun hil"
];

var button = document.getElementById("amin");

function Funny(event) {
    alert("ouch ouch my name is aminnn");
    console.log(event);
}

button.addEventListener("click", Funny);

for (var i = 0; i < coolThing.length; i++) {
    var b2 = button.cloneNode(true);

    b2.innerHTML = coolThing[i];
    document.body.append(b2);

    b2.addEventListener("click", Funny);
}
