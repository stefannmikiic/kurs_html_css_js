
const submitElement = document.getElementById("submit");

submitElement.addEventListener("click", function(e) {

    e.preventDefault(); // Sprečava da se forma pošalje odmah

    let imePrezime = document.getElementById("imePrezime").value.trim();
    let email = document.getElementById("email").value;
    let lozinka = document.getElementById("lozinka").value;
    let potvrdaLozinke = document.getElementById("potvrdaLozinke").value;
    let adresa = document.getElementById("adresa").value;
    let telefon = document.getElementById("telefon").value;
    let datum = document.getElementById("datum").value;
    let pol = document.getElementById("pol").value;

    if (lozinka !== potvrdaLozinke) {
        alert("Lozinke se ne poklapaju!");
        return;
    }

    if(lozinka.length < 6) {
        alert("Lozinka mora imati najmanje 6 karaktera!");
        return;
    }

    if(!telefon.startsWith("+381")) {
        alert("Broj telefona mora biti u formatu +381XXXXXXXXX!");
        return;
    }

    

    let danas = new Date();
    let datumRodjenja = new Date(datum);
    if (datumRodjenja >= danas) {
        alert("Datum rođenja mora biti pre današnjeg datuma!");
        return;
    }
    let korisnici = JSON.parse(localStorage.getItem("korisnici")) || [];

    let sviMejlovi = korisnici.map(korisnik => korisnik.email);
    
    if (sviMejlovi.includes(email)) {
        alert("Korisnik sa ovim emailom već postoji!");
        return;
    }

    let noviKorisnik = {
        imePrezime: imePrezime,
        email: email,
        lozinka: lozinka,
        adresa: adresa,
        telefon: telefon,
        datum: datum,
        pol: pol
    };

    korisnici.push(noviKorisnik);
    localStorage.setItem("korisnici", JSON.stringify(korisnici));
    alert("Registracija uspešna!");
    window.location.href = "login.html";

    let registracijaForma = document.getElementById("registracijaForma");
    registracijaForma.reset(); // Resetuje formu nakon uspešne registracije
});



