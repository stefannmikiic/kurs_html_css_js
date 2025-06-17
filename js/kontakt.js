pitanja=[
    {
        pitanje: "Kako mogu da naručim proizvode?",
        odgovor: "Da biste naručili proizvode, jednostavno dodajte željene artikle u korpu i pratite uputstva na ekranu."
    },
    {
        pitanje: "Koje su opcije plaćanja?",
        odgovor: "Prihvatamo različite metode plaćanja, uključujući kreditne kartice, PayPal i bankovne transfere."
    },
    {
        pitanje: "Kako mogu da pratim svoju narudžbinu?",
        odgovor: "Nakon što je vaša narudžbina poslana, dobićete e-mail sa informacijama o praćenju."
    }
]

pitanja.forEach(pitanjce => {
    const pitanjeElement = document.createElement("div");
    pitanjeElement.classList.add("pitanje");
    pitanjeElement.innerHTML = 
    `<h3>${pitanjce.pitanje}</h3>
    <div class="odgovor" style="display: none;">
    <p>${pitanjce.odgovor}</p>
    </div>`;
    document.querySelector(".svapitanja").appendChild(pitanjeElement);
    pitanjeElement.addEventListener("click", function() {
        const odgovorElement = pitanjeElement.querySelector(".odgovor");
        if (odgovorElement.style.display === "none" || odgovorElement.style.display === "") {
            odgovorElement.style.display = "block";
            odgovorElement.textContent = `${pitanjce.odgovor}`;
        } else {
            odgovorElement.style.display = "none";
            pitanjeElement.querySelector("h3").textContent = `${pitanjce.pitanje}`;
        }
    });
});

function prikazi_pitanje(){
    const pitanjeElement = document.querySelector(".pitanje");
    const odgovorElement = document.querySelector(".odgovor");
    pitanjeElement.addEventListener("click", function() {
        
        if (odgovorElement.style.display === "none" || odgovorElement.style.display === "") {
            odgovorElement.style.display = "block";
            pitanjeElement.textContent = "Sakrij odgovor";
        } else {
            odgovorElement.style.display = "none";
            pitanjeElement.textContent = "Pitanje: Kako mogu da naručim proizvode?";
        }
    });
}


