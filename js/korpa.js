function prikaziKorpu(){
    const teloDiv = document.querySelector("tbody");
    teloDiv.innerHTML = ""; // Očisti postojeći sadržaj tabele
    const korpa = JSON.parse(localStorage.getItem("korpa")) || [];

    korpa.forEach((proizvod, index) => {
        const red = document.createElement("tr");
        red.innerHTML = `
            <td class="flex"><img class="slikaukorpi" src="${proizvod.slika}" alt="Slika parmezana">${proizvod.naziv}</td>
            <td>${proizvod.novaCena} RSD</td>
            <td><input data-index="${index}" type="number" value="1" min="1"></td>
            <td>${proizvod.novaCena} RSD</td>
            <td><button class="btn"><i class="fa-solid fa-trash"></i></button></td>
        `;
        teloDiv.appendChild(red);
    });
    const btns = document.querySelectorAll(".btn");
    btns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            if(!confirm("Da li ste sigurni da želite da uklonite proizvod iz korpe?")) {
                return; // Ako korisnik otkaže, ne radi ništa
            }
            const index = Array.from(teloDiv.children).indexOf(e.target.closest("tr"));
            const korpa = JSON.parse(localStorage.getItem("korpa")) || [];
            korpa.splice(index, 1); // Ukloni proizvod iz korpe
            localStorage.setItem("korpa", JSON.stringify(korpa));
            prikaziKorpu(); // Ponovo prikaži korpu
        });
    });
    const inputPolja = document.querySelectorAll("input[type='number']");
    inputPolja.forEach(input => {
        input.addEventListener("input", (e) => {
            const index = e.target.getAttribute("data-index");
            const kolicina = parseInt(e.target.value, 10);
            const korpa = JSON.parse(localStorage.getItem("korpa")) || [];
            
            const cenaProizvoda = korpa[index].novaCena;
            const ukupnaCena = cenaProizvoda * kolicina;
            e.target.closest("tr").children[3].textContent = `${ukupnaCena} RSD`;
            if (kolicina === 0){
                ukupnaCena = 0;
            }
        });
    });
}

prikaziKorpu();