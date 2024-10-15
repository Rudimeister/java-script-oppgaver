function kalkuler() {
    
    let tall = document.getElementById("tall").value;

    let halvparten = tall / 2;
    let dobbelt = tall * 2;
    let trippel = tall * 3;
    let kvadrat = tall * tall;

    let svar = `Tallet er ${tall}.
    halvparten er ${halvparten},
    dobbelt er ${dobbelt},
    trippel er ${trippel},
    kvadrat er ${kvadrat}.`;

    document.getElementById("output").innerHTML = svar;
    
}