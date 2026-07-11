const index = [
  // ---------- WEAPONS ----------
  { name: "Lordsworn's Straight Sword", category: "weapon", img: "", stats: { damage: 96, weight: 3.0, type: "Straight Sword" } },
  { name: "Bloodhound's Fang", category: "weapon", img: "", stats: { damage: 129, weight: 6.5, type: "Curved Greatsword" } },
  { name: "Moonveil", category: "weapon", img: "", stats: { damage: 111, weight: 5.5, type: "Katana" } },
  { name: "Rivers of Blood", category: "weapon", img: "", stats: { damage: 131, weight: 6.0, type: "Curved Sword" } },
  { name: "Grafted Blade Greatsword", category: "weapon", img: "", stats: { damage: 156, weight: 12.0, type: "Colossal Sword" } },
  { name: "Sacred Relic Sword", category: "weapon", img: "", stats: { damage: 145, weight: 8.5, type: "Greatsword" } },
  { name: "Blasphemous Blade", category: "weapon", img: "", stats: { damage: 137, weight: 8.0, type: "Greatsword" } },
  { name: "Dragon King's Cragblade", category: "weapon", img: "", stats: { damage: 148, weight: 11.5, type: "Colossal Weapon" } },
  { name: "Marika's Hammer", category: "weapon", img: "", stats: { damage: 152, weight: 18.0, type: "Colossal Weapon" } },
  { name: "Wing of Astel", category: "weapon", img: "", stats: { damage: 118, weight: 7.5, type: "Great Katana" } },

  // ---------- BOSSES ----------
  { name: "Margit, the Fell Omen", category: "boss", img: "", stats: { hp: 1037, region: "Stormveil Castle" } },
  { name: "Godrick the Grafted", category: "boss", img: "", stats: { hp: 2600, region: "Stormveil Castle" } },
  { name: "Rennala, Queen of the Full Moon", category: "boss", img: "", stats: { hp: 3660, region: "Raya Lucaria Academy" } },
  { name: "Starscourge Radahn", category: "boss", img: "", stats: { hp: 9564, region: "Caelid" } },
  { name: "Malenia, Blade of Miquella", category: "boss", img: "", stats: { hp: 6666, region: "Haligtree" } },
  { name: "Mohg, Lord of Blood", category: "boss", img: "", stats: { hp: 6675, region: "Mohgwyn Palace" } },
  { name: "Fire Giant", category: "boss", img: "", stats: { hp: 24322, region: "Mountaintops of the Giants" } },
  { name: "Godfrey, First Elden Lord", category: "boss", img: "", stats: { hp: 6300, region: "Leyndell, Royal Capital" } },
  { name: "Radagon of the Golden Order", category: "boss", img: "", stats: { hp: 8674, region: "Elden Throne" } },
  { name: "Elden Beast", category: "boss", img: "", stats: { hp: 9080, region: "Elden Throne" } },

  // ---------- ENEMIES ----------
  { name: "Soldier of Godrick", category: "enemy", img: "", stats: { hp: 240, region: "Limgrave" } },
  { name: "Tree Sentinel", category: "enemy", img: "", stats: { hp: 1610, region: "Limgrave" } },
  { name: "Giant Crow", category: "enemy", img: "", stats: { hp: 490, region: "Limgrave" } },
  { name: "Runebear", category: "enemy", img: "", stats: { hp: 2151, region: "Mistwood" } },
  { name: "Crucible Knight", category: "enemy", img: "", stats: { hp: 1800, region: "Stormveil Castle" } },
  { name: "Erdtree Avatar", category: "enemy", img: "", stats: { hp: 4000, region: "Various" } },
  { name: "Ulcerated Tree Spirit", category: "enemy", img: "", stats: { hp: 3200, region: "Various" } },
  { name: "Land Octopus", category: "enemy", img: "", stats: { hp: 890, region: "Various" } },
  { name: "Miranda the Blighted Bloom", category: "enemy", img: "", stats: { hp: 1250, region: "Various" } },
  { name: "Putrid Avatar", category: "enemy", img: "", stats: { hp: 2900, region: "Caelid" } },

  // ---------- ITEMS ----------
  { name: "Golden Rune (1)", category: "item", img: "", stats: { effect: "Restores 30 runes", rarity: "Common" } },
  { name: "Crimson Tear Flask", category: "item", img: "", stats: { effect: "Restores HP", rarity: "Common" } },
  { name: "Cerulean Tear Flask", category: "item", img: "", stats: { effect: "Restores FP", rarity: "Common" } },
  { name: "Smithing Stone (1)", category: "item", img: "", stats: { effect: "Upgrades weapons +1 to +3", rarity: "Common" } },
  { name: "Somber Smithing Stone (1)", category: "item", img: "", stats: { effect: "Upgrades somber weapons", rarity: "Uncommon" } },
  { name: "Rune Arc", category: "item", img: "", stats: { effect: "Activates Great Rune", rarity: "Rare" } },
  { name: "Larval Tear", category: "item", img: "", stats: { effect: "Respec character stats", rarity: "Rare" } },
  { name: "Golden Seed", category: "item", img: "", stats: { effect: "Upgrades flask charges", rarity: "Uncommon" } },
  { name: "Sacred Tear", category: "item", img: "", stats: { effect: "Upgrades flask potency", rarity: "Uncommon" } },
  { name: "Remembrance of the Grafted", category: "item", img: "", stats: { effect: "Trade for boss weapon/spell", rarity: "Legendary" } }
];


/* Picks a Random Entry from Index */
function showEntryOfTheDay(){
    const randomIndex = Math.floor(Math.random() * index.length);
    const entryOfTheDay = index[randomIndex];

    const eotdContainer = document.getElementById("entryotd-content");
    eotdContainer.innerHTML = "";

    const card = createCard(entryOfTheDay);
    eotdContainer.appendChild(card);
}

showEntryOfTheDay();


/* Filters the results once the user has selected a category and typed a name into the search bar. */
const searchInput = document.getElementById('search-input');
const filterSelect = document.getElementById('filter-select');
const submitButton = document.getElementById('submit-button');
const resultsContainer = document.getElementById('results-container');

submitButton.addEventListener("click", updateResults);

function updateResults() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = filterSelect.value;

    const filtered = index.filter (entry => {
        const matchesCategory = category === "all" || entry.category === category;
        const matchesSearch = entry.name.toLowerCase().includes(searchTerm);

        return matchesCategory && matchesSearch;
    });

    resultsContainer.innerHTML = "";

    filtered.forEach(entry => {
        const card = createCard(entry);

        resultsContainer.appendChild(card);
    });
}


/* Adds Index Member Cards to the HTML from the Index [] */
function createCard(entry) {
    const card = document.createElement("div");
    card.classList.add("entry-card");

    const img = document.createElement("img");
    img.src = entry.img;
    img.alt = entry.name;

    const nameHeading = document.createElement("h3");
    nameHeading.textContent = entry.name;

    card.appendChild(img);
    card.appendChild(nameHeading);


    const statsList = document.createElement("ul");

    Object.entries(entry.stats).forEach(([key, value]) => {
        const li = document.createElement("li");
        li.textContent = `${key}: ${value}`;
        statsList.appendChild(li);
    });

    card.appendChild(statsList);

    return card;
}

