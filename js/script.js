// =====================
// AURELIA HOTEL
// JAVASCRIPT FUNKCIONALNOSTI
// =====================

// =====================
// PRIKAZ I SAKRIVANJE PONUDA
// =====================

const toggleBtn = document.getElementById("toggle-offers-btn");
const offersContainer = document.getElementById("offers-container");

if (toggleBtn && offersContainer) {
  toggleBtn.addEventListener("click", function () {
    offersContainer.classList.toggle("hidden");

    if (offersContainer.classList.contains("hidden")) {
      toggleBtn.textContent = "Prikaži ponude";
    } else {
      toggleBtn.textContent = "Sakrij ponude";
    }
  });
}

// =====================
// PROMENA TEME
// =====================

function setTheme(theme) {
  document.body.classList.remove("light-theme", "gold-theme");

  if (theme === "light") {
    document.body.classList.add("light-theme");
  }

  if (theme === "gold") {
    document.body.classList.add("gold-theme");
  }

  localStorage.setItem("theme", theme);
}

// UČITAVANJE SAČUVANE TEME
window.addEventListener("load", function () {
  const saved = localStorage.getItem("theme");

  if (saved) {
    setTheme(saved);
  }
});

// =====================
// DINAMIČKI SADRŽAJ
// =====================

// HOME ABOUT KARTICE

const aboutCardsData = [
  {
    title: "Luksuzne sobe",
    text: "Elegantne sobe i apartmani kreirani za maksimalan komfor, privatnost i vrhunsko iskustvo boravka.",
  },

  {
    title: "Spa & Wellness",
    text: "Ekskluzivni wellness tretmani, sauna i premium spa iskustvo za potpuno opuštanje i regeneraciju.",
  },

  {
    title: "Gourmet restoran",
    text: "Savremena gastronomija, pažljivo odabrani sastojci i sofisticirana atmosfera luksuznog restorana.",
  },
];

const aboutCardsContainer = document.getElementById("about-cards");

if (aboutCardsContainer) {
  aboutCardsData.forEach((card) => {
    aboutCardsContainer.innerHTML += `
      <div class="about-card">
        <h3>${card.title}</h3>
        <p>${card.text}</p>
      </div>
    `;
  });
}

// PREMIUM PAKETI

const premiumPackages = [
  {
    title: "Romantic Escape",
    text: "Premium apartman, privatni spa tretman i ekskluzivna večera za nezaboravan boravak udvoje.",
  },

  {
    title: "Wellness Retreat",
    text: "Luksuzni wellness paket sa masažama, saunom i kompletnim iskustvom potpune relaksacije.",
  },

  {
    title: "Executive Experience",
    text: "Poslovni paket sa VIP uslugom, privatnim lounge prostorom i dodatnim premium pogodnostima.",
  },
];

const premiumContainer = document.getElementById("premium-packages");

if (premiumContainer) {
  premiumPackages.forEach((item) => {
    premiumContainer.innerHTML += `
      <div class="dynamic-card">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    `;
  });
}

// ABOUT PAGE KARTICE

const aboutPageCards = [
  {
    title: "Naša priča",
    text: "Aurelia Hotel je osmišljen kao spoj modernog luksuza, sofisticiranog dizajna i vrhunske usluge u jedinstveno iskustvo boravka. Prostori su pažljivo oblikovani da pruže udobnost, privatnost i nenametljivu eleganciju. Svaki detalj prati ritam gosta i doprinosi osećaju mirnog, kvalitetnog odmora.",
  },

  {
    title: "Vizija",
    text: "Naša vizija je da kroz promišljen dizajn, premium sadržaje i besprekornu uslugu postavimo novi standard savremenog hotelijerstva. Cilj je da svaki boravak postane iskustvo koje se pamti kroz atmosferu, kvalitet i lakoću boravka. Luksuz vidimo kao preciznost i ravnotežu u svakom detalju.",
  },

  {
    title: "Lokacija",
    text: "Hotel je smešten u prestižnom delu grada, pažljivo odabranom da spoji urbano okruženje i potpunu privatnost. Omogućava blizinu glavnih gradskih sadržaja uz mir i diskreciju kada su najpotrebniji. Ta ravnoteža čini lokaciju ključnim delom celokupnog iskustva boravka.",
  },
];

const aboutPageContainer = document.getElementById("about-page-cards");

if (aboutPageContainer) {
  aboutPageCards.forEach((card) => {
    aboutPageContainer.innerHTML += `
      <div class="about-card">
        <h3>${card.title}</h3>
        <p>${card.text}</p>
      </div>
    `;
  });
}

// =====================
// KONTAKT VALIDACIJA
// =====================

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name.length < 3) {
      alert("Ime mora imati bar 3 slova");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Email nije validan");
      return;
    }

    if (message.length < 10) {
      alert("Poruka mora imati bar 10 karaktera");
      return;
    }

    alert("Poruka uspešno poslata!");
    contactForm.reset();
  });
}

// =====================
// DINAMIČKE REZERVACIJE
// =====================

const reservationForm = document.getElementById("reservation-form");
const reservationList = document.getElementById("reservations-list");

if (reservationForm && reservationList) {
  reservationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("res-name").value.trim();
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;

    const formattedCheckin = new Date(checkin).toLocaleDateString("sr-RS", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const formattedCheckout = new Date(checkout).toLocaleDateString("sr-RS", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    if (name.length < 3) {
      alert("Unesi validno ime");
      return;
    }

    if (!checkin || !checkout) {
      alert("Izaberi datume");
      return;
    }

    if (!guests || guests < 1) {
      alert("Unesi broj gostiju");
      return;
    }

    const card = document.createElement("div");
    card.classList.add("offer-card");

    card.innerHTML = `
            <h3>${name}</h3>
            <p>Vreme dolaska: ${formattedCheckin}</p>
            <p>Vreme odlaska: ${formattedCheckout}</p>
            <p>Gosti: ${guests}</p>
        `;

    reservationList.appendChild(card);

    reservationForm.reset();
  });
}
