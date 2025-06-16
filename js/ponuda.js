const proizvodi = [

    {
        id: 1,
        slika:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Parmigiano_reggiano_piece.jpg/640px-Parmigiano_reggiano_piece.jpg",
        naziv: "Parmezan",
        opis: "Opis proizvoda",
        staraCena: 1000,
        novaCena: 900
    },
    {
        id: 2,
        slika:"https://thecheeseatlas.com/wp-content/uploads/2020/05/Mauri-Gorgonzola-Piccante-1024x819.jpeg",
        naziv: "Gorgonzola",
        opis: "Opis proizvoda",
        staraCena: 800,
        novaCena: 800
    }


]

function dodajUKorpu(index) {
    const korpa = JSON.parse(localStorage.getItem("korpa")) || [];
    korpa.push(proizvodi[index]);
    localStorage.setItem("korpa", JSON.stringify(korpa));
    alert("Proizvod je dodat u korpu!");
}

function prikaziProizvode(){
    const elementDiv = document.getElementById("sviproizvodi");
    elementDiv.innerHTML = "";

    proizvodi.forEach((proizvod,index) => {
        const div = document.createElement("div");
        div.className = "proizvod";

        if(proizvod.staraCena !== proizvod.novaCena) {
        div.innerHTML = `
            <img src="${proizvod.slika}" alt="${proizvod.naziv}">
            <h3>${proizvod.naziv}</h3>
            <p>${proizvod.opis}</p>
            <span class="staracena"><i class="fa-solid fa-tags"></i>Stara cena: ${proizvod.staraCena} RSD</span> <br>
            <span class="novacena">Nova cena: ${proizvod.novaCena} RSD</span>
            <button class="btn" data-id=${index}><i class="fa-solid fa-cart-plus"></i>Dodaj u korpu</button>
        `;
        }
        if(proizvod.staraCena === proizvod.novaCena) {
            div.innerHTML = `
                <img src="${proizvod.slika}" alt="${proizvod.naziv}">
                <h3>${proizvod.naziv}</h3>
                <p>${proizvod.opis}</p>
                <span class="nova-cena">Cena: ${proizvod.novaCena} RSD</span>
                <button class="btn" data-id=${index}><i class="fa-solid fa-cart-plus"></i>Dodaj u korpu</button>
            `;
        }
        elementDiv.appendChild(div);
    })

    const btns = document.querySelectorAll(".btn");
    btns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const index = e.target.closest(".btn").getAttribute("data-id");
            dodajUKorpu(index);
        });
        
    });
}

prikaziProizvode();