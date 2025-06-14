let prijavaDugme = document.getElementById("loginBTN");

prijavaDugme.addEventListener("click", function(e){

    e.preventDefault();

    let email = document.getElementById("email_login").value; 
    let lozinka = document.getElementById("lozinka_login").value;

    let korisnici = JSON.parse(localStorage.getItem("korisnici")) || [];

    if(korisnici.length === 0){
        alert("Nema registrovanih korisnika");
        return;
    }

    for(let i = 0;i<korisnici.length;i++){
        if(korisnici[i].email === email && korisnici[i].lozinka === lozinka){
            alert("Prijava uspesna!");
            window.location.href="index.html";
            return;
        }
    }
    alert("Pogresan email ili lozinka")

    
    

    let loginForma = document.getElementById("loginForma");
    loginForma.reset();

});
