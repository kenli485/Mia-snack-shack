const snacks = [
  {
    name: "Granola Bar",
    price: "$1.00",
    description: "Chewy oats with a little chocolate. Easy to carry to class.",
    pickup: "Pickup time: 12:00 PM to 12:30 PM.",
    image: snackImage("bar")
  },
  {
    name: "Fruit Cup",
    price: "$2.00",
    description: "Cold mixed fruit with a spoon included.",
    pickup: "Pickup time: 12:00 PM to 12:30 PM.",
    image: snackImage("fruit")
  },
  {
    name: "Pretzel Bag",
    price: "$1.25",
    description: "Crunchy mini pretzels in a quick grab-and-go bag.",
    pickup: "Pickup time: 12:00 PM to 12:30 PM.",
    image: snackImage("pretzel")
  },
  {
    name: "Yogurt Cup",
    price: "$1.75",
    description: "Vanilla yogurt with a sealed spoon on the side.",
    pickup: "Pickup time: 12:00 PM to 12:30 PM.",
    image: snackImage("yogurt")
  },
  {
    name: "Cheese Crackers",
    price: "$1.50",
    description: "Small pack of crackers with cheddar cheese.",
    pickup: "Pickup time: 12:00 PM to 12:30 PM.",
    image: snackImage("crackers")
  },
  {
    name: "Juice Box",
    price: "$1.00",
    description: "Chilled apple juice for a quick lunch drink.",
    pickup: "Pickup time: 12:00 PM to 12:30 PM.",
    image: snackImage("juice")
  }
];

const menuGrid = document.querySelector("#menuGrid");
const pickupModal = document.querySelector("#pickupModal");
const pickupMessage = document.querySelector("#pickupMessage");
const modalSnackName = document.querySelector("#modalSnackName");
const closeModal = document.querySelector("#closeModal");

snacks.forEach((snack, index) => {
  const card = document.createElement("button");
  card.className = "snack-card";
  card.type = "button";
  card.setAttribute("aria-label", `${snack.name}, ${snack.price}. Show pickup details.`);
  card.innerHTML = `
    <img class="snack-picture" src="${snack.image}" alt="${snack.name}">
    <span class="snack-info">
      <span class="snack-name-row">
        <span class="snack-name">${snack.name}</span>
        <span class="snack-price">${snack.price}</span>
      </span>
      <span class="snack-description">${snack.description}</span>
      <span class="snack-action">Tap for pickup details</span>
    </span>
  `;

  card.addEventListener("click", () => {
    document.querySelectorAll(".snack-card").forEach((item) => {
      item.classList.remove("is-selected");
    });
    card.classList.add("is-selected");
    modalSnackName.textContent = snack.name;
    pickupMessage.textContent = snack.pickup;
    pickupModal.hidden = false;
    closeModal.focus();
  });

  if (index === 0) {
    card.classList.add("is-selected");
  }

  menuGrid.appendChild(card);
});

closeModal.addEventListener("click", closePickupModal);

pickupModal.addEventListener("click", (event) => {
  if (event.target === pickupModal) {
    closePickupModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !pickupModal.hidden) {
    closePickupModal();
  }
});

function closePickupModal() {
  pickupModal.hidden = true;
}

function snackImage(type) {
  const drawings = {
    bar: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <rect width="120" height="120" rx="20" fill="#f5ead8"/>
        <rect x="23" y="40" width="74" height="38" rx="10" fill="#c9965a"/>
        <path d="M32 51h56M35 66h50" stroke="#805f3e" stroke-width="5" stroke-linecap="round"/>
        <circle cx="45" cy="59" r="4" fill="#4b3425"/>
        <circle cx="68" cy="56" r="4" fill="#4b3425"/>
        <circle cx="79" cy="68" r="4" fill="#4b3425"/>
      </svg>
    `,
    fruit: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <rect width="120" height="120" rx="20" fill="#f5ead8"/>
        <path d="M30 47h60l-8 38H38z" fill="#d9edf1" stroke="#7aa3a8" stroke-width="4"/>
        <circle cx="47" cy="48" r="12" fill="#e58f7c"/>
        <circle cx="64" cy="43" r="12" fill="#f0c85c"/>
        <circle cx="76" cy="52" r="11" fill="#8fbf7f"/>
        <path d="M38 86h44" stroke="#7aa3a8" stroke-width="5" stroke-linecap="round"/>
      </svg>
    `,
    pretzel: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <rect width="120" height="120" rx="20" fill="#f5ead8"/>
        <path d="M60 44c-14-19-38 1-19 20 8 8 19 2 19-8 0 10 11 16 19 8 19-19-5-39-19-20z" fill="none" stroke="#b77b41" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M38 77c11-10 33-10 44 0" fill="none" stroke="#b77b41" stroke-width="10" stroke-linecap="round"/>
        <circle cx="43" cy="53" r="2" fill="#fff7e7"/>
        <circle cx="76" cy="53" r="2" fill="#fff7e7"/>
        <circle cx="60" cy="76" r="2" fill="#fff7e7"/>
      </svg>
    `,
    yogurt: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <rect width="120" height="120" rx="20" fill="#f5ead8"/>
        <path d="M36 39h48l-6 50H42z" fill="#fbfbff" stroke="#9aa7c3" stroke-width="4"/>
        <path d="M34 36h52" stroke="#7c8ba8" stroke-width="8" stroke-linecap="round"/>
        <path d="M45 58c8-8 22-8 30 0" stroke="#d78ca4" stroke-width="5" stroke-linecap="round"/>
        <circle cx="51" cy="72" r="4" fill="#d78ca4"/>
        <circle cx="68" cy="72" r="4" fill="#d78ca4"/>
      </svg>
    `,
    crackers: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <rect width="120" height="120" rx="20" fill="#f5ead8"/>
        <rect x="31" y="35" width="29" height="29" rx="6" fill="#dfb25e"/>
        <rect x="60" y="56" width="29" height="29" rx="6" fill="#dfb25e"/>
        <rect x="42" y="55" width="31" height="31" rx="6" fill="#f0ce77"/>
        <g fill="#9e7a38">
          <circle cx="43" cy="47" r="2"/><circle cx="52" cy="54" r="2"/>
          <circle cx="54" cy="68" r="2"/><circle cx="65" cy="75" r="2"/>
          <circle cx="72" cy="67" r="2"/><circle cx="80" cy="77" r="2"/>
        </g>
      </svg>
    `,
    juice: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <rect width="120" height="120" rx="20" fill="#f5ead8"/>
        <path d="M42 30h35l8 15v45H35V45z" fill="#f2b667" stroke="#a96f3e" stroke-width="4" stroke-linejoin="round"/>
        <path d="M42 30l-7 15h50" fill="none" stroke="#a96f3e" stroke-width="4" stroke-linejoin="round"/>
        <path d="M55 55c9 3 15-2 18-9 2 9-3 19-12 21-7 1-13-4-14-10 3-1 5-1 8-2z" fill="#fff4df"/>
        <path d="M69 27l15-12" stroke="#6a8a78" stroke-width="5" stroke-linecap="round"/>
      </svg>
    `
  };

  return `data:image/svg+xml,${encodeURIComponent(drawings[type])}`;
}
