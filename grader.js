function kalkuler() {

    let tall = document.getElementById("tall").value;

    let celsius = (tall - 32) * 5 / 9;
    

    let svar = `Fahrenheit ${tall}.
    let celsius ${celsius}.`;

    document.getElementById("output").innerHTML = svar;
}
