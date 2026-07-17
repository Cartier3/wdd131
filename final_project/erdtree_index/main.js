const index = [
  // ---------- WEAPONS ----------
  { name: "Lordsworn's Straight Sword", category: "weapon", img: "images/lordsworn-straight-sword.jpg", stats: { damage: 96, weight: 3.0, type: "Straight Sword" } },
  { name: "Bloodhound's Fang", category: "weapon", img: "images/bloodhounds-fang.webp", stats: { damage: 129, weight: 6.5, type: "Curved Greatsword" } },
  { name: "Moonveil", category: "weapon", img: "images/moonveil.webp", stats: { damage: 111, weight: 5.5, type: "Katana" } },
  { name: "Rivers of Blood", category: "weapon", img: "images/rivers-of-blood.webp", stats: { damage: 131, weight: 6.0, type: "Curved Sword" } },
  { name: "Grafted Blade Greatsword", category: "weapon", img: "images/grafted-blade.webp", stats: { damage: 156, weight: 12.0, type: "Colossal Sword" } },
  { name: "Sacred Relic Sword", category: "weapon", img: "images/sacred-relic-sword.webp", stats: { damage: 145, weight: 8.5, type: "Greatsword" } },
  { name: "Blasphemous Blade", category: "weapon", img: "images/blasphemous-blade.jpg", stats: { damage: 137, weight: 8.0, type: "Greatsword" } },
  { name: "Dragon King's Cragblade", category: "weapon", img: "images/dragon-king-crag.avif", stats: { damage: 148, weight: 11.5, type: "Colossal Weapon" } },
  { name: "Marika's Hammer", category: "weapon", img: "images/marikas-hammer.webp", stats: { damage: 152, weight: 18.0, type: "Colossal Weapon" } },
  { name: "Wing of Astel", category: "weapon", img: "images/wing-of-astel.webp", stats: { damage: 118, weight: 7.5, type: "Great Katana" } },

  // ---------- BOSSES ----------
  { name: "Margit, the Fell Omen", category: "boss", img: "images/margit-the-fell-omen.jpg", stats: { hp: 1037, region: "Stormveil Castle" } },
  { name: "Godrick the Grafted", category: "boss", img: "images/godrick-the-grafted-elden-ring.avif", stats: { hp: 2600, region: "Stormveil Castle" } },
  { name: "Rennala, Queen of the Full Moon", category: "boss", img: "images/rennala-elden-ring.jpg", stats: { hp: 3660, region: "Raya Lucaria Academy" } },
  { name: "Starscourge Radahn", category: "boss", img: "images/starscourge-radahn.jpg", stats: { hp: 9564, region: "Caelid" } },
  { name: "Malenia, Blade of Miquella", category: "boss", img: "images/malenia-elden-ring.jpg", stats: { hp: 6666, region: "Haligtree" } },
  { name: "Mohg, Lord of Blood", category: "boss", img: "images/mohg-elden-ring.jpg", stats: { hp: 6675, region: "Mohgwyn Palace" } },
  { name: "Fire Giant", category: "boss", img: "images/fire_giant_elden_ring.jpg", stats: { hp: 24322, region: "Mountaintops of the Giants" } },
  { name: "Godfrey, First Elden Lord", category: "boss", img: "images/godfrey-elden-ring.jpeg", stats: { hp: 6300, region: "Leyndell, Royal Capital" } },
  { name: "Radagon of the Golden Order", category: "boss", img: "images/radagon-elden-ring.webp", stats: { hp: 8674, region: "Elden Throne" } },
  { name: "Elden Beast", category: "boss", img: "images/elden-beast.jpg", stats: { hp: 9080, region: "Elden Throne" } },

  // ---------- ENEMIES ----------
  { name: "Soldier of Godrick", category: "enemy", img: "images/soldier-of-godrick.webp", stats: { hp: 240, region: "Limgrave" } },
  { name: "Tree Sentinel", category: "enemy", img: "images/tree-sentinel.jpg", stats: { hp: 1610, region: "Limgrave" } },
  { name: "Giant Crow", category: "enemy", img: "images/giant-crow.jpg", stats: { hp: 490, region: "Limgrave" } },
  { name: "Runebear", category: "enemy", img: "images/rune-bear.jpg", stats: { hp: 2151, region: "Mistwood" } },
  { name: "Crucible Knight", category: "enemy", img: "images/crucible-knight.jpg", stats: { hp: 1800, region: "Stormveil Castle" } },
  { name: "Erdtree Avatar", category: "enemy", img: "images/erdtree-avatar.jpg", stats: { hp: 4000, region: "Various" } },
  { name: "Ulcerated Tree Spirit", category: "enemy", img: "images/ulcerated-tree-spirit.webp", stats: { hp: 3200, region: "Various" } },
  { name: "Land Octopus", category: "enemy", img: "images/land-octopus.jpg", stats: { hp: 890, region: "Various" } },
  { name: "Miranda the Blighted Bloom", category: "enemy", img: "images/miranda.jpg", stats: { hp: 1250, region: "Various" } },
  { name: "Putrid Avatar", category: "enemy", img: "images/putrid-avatar.jpg", stats: { hp: 2900, region: "Caelid" } },

  // ---------- ITEMS ----------
  { name: "Golden Rune (1)", category: "item", img: "images/golden-rune-1.webp", stats: { effect: "Restores 200 runes", rarity: "Common" } },
  { name: "Crimson Tear Flask", category: "item", img: "images/crimson-tear-flask.jpeg", stats: { effect: "Restores HP", rarity: "Common" } },
  { name: "Cerulean Tear Flask", category: "item", img: "images/cerulean-tears.jpeg", stats: { effect: "Restores FP", rarity: "Common" } },
  { name: "Smithing Stone (1)", category: "item", img: "images/smithing-stone(1).jpeg", stats: { effect: "Upgrades weapons +1 to +3", rarity: "Common" } },
  { name: "Somber Smithing Stone (1)", category: "item", img: "images/somber-smith-1.jpeg", stats: { effect: "Upgrades somber weapons", rarity: "Uncommon" } },
  { name: "Rune Arc", category: "item", img: "images/rune-arc.jpeg", stats: { effect: "Activates Great Rune Blessings", rarity: "Rare" } },
  { name: "Larval Tear", category: "item", img: "images/larval-tear.avif", stats: { effect: "Respec character stats", rarity: "Rare" } },
  { name: "Golden Seed", category: "item", img: "images/golden-seed.jpeg", stats: { effect: "Upgrades flask charges", rarity: "Uncommon" } },
  { name: "Sacred Tear", category: "item", img: "images/sacred-tear.jpg", stats: { effect: "Upgrades flask potency", rarity: "Uncommon" } },
  { name: "Remembrance of the Grafted", category: "item", img: "images/rem-of-grafted.png", stats: { effect: "Trade for boss weapon/spell", rarity: "Legendary" } }
];


const eotd = document.getElementById("entryotd-content");
const filter= document.getElementById('filter-select');
const searchBar = document.getElementById('search-input');
const submitButton = document.getElementById('submit-button');
const resultsContainer = document.getElementById('results-container');


const randomIndex = Math.floor(Math.random() * index.length);
const randomEntry = index[randomIndex];


/* buildCard() - Creates a Card for each entry in the index! */

function buildCard(entry) {
    
    let statsHTML = "";

    if(entry.category === "weapon") {
        statsHTML = `
            <p>Damage: ${entry.stats.damage}</p>
            <p>Weight: ${entry.stats.weight}</p>
            <p>Type: ${entry.stats.type}</p>
        `
    } else if (entry.category === "boss") {
        statsHTML = `
            <p>HP: ${entry.stats.hp}</p>
            <p>Region: ${entry.stats.region}</p>
        `
    } else if (entry.category === "enemy") {
        statsHTML = `
            <p>HP: ${entry.stats.hp}</p>
            <p>Region: ${entry.stats.region}</p>
        `
    } else if (entry.category === "item") {
        statsHTML = `
            <p>Effect: ${entry.stats.effect}</p>
            <p>Rarity: ${entry.stats.rarity}</p>
        `
    }

    let cardHTML = `
        <div class="entry-card"> 
            <img src="${entry.img}" alt="${entry.name}" class="eotd-img">
            <h3>${entry.name}</h3>
            ${statsHTML}
        </div>
    `;

    return cardHTML;
}

/* builds the "Entry of the Day" section with the buildCard() Method. */
const randEntry = buildCard(randomEntry);
eotd.innerHTML = randEntry;



/* Sort Method for index entries in the search bar */

submitButton.addEventListener('click', (event) => {
    
    const searchTerm = searchBar.value.toLowerCase();
    const selectedCategory = filter.value;

    const matchResult = index.filter((entry) => {
        
        const categoryMatches = selectedCategory === "all" || entry.category === selectedCategory;
        const nameMatches = entry.name.toLowerCase().includes(searchTerm);

        return categoryMatches && nameMatches;
    });

    const matchCard = matchResult.map((entry) => {
        
        return buildCard(entry);
    })

    const combinedCards = matchCard.join("");

    if(matchCard.length === 0) {
        resultsContainer.innerHTML = "No Results Found!";
    } else {
        resultsContainer.innerHTML = combinedCards;
    }
});