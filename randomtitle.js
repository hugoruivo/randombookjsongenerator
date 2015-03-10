/* ORIGINAL FROM: http://www.mcoorlim.com/random.html */

var preposition = new Array(
"Above", "After", "At", "Beyond", "For", "From", "In", "Into", "On", "Out of", "With", "Without", "Under"
)

var noun = new Array(
"Abbey", "Adventure", "Affair", "Africa", "Age", "Agoroman", "Alexander", "Alexander the Great", "Aladdin", "Aliens", 
"Amulet", "Angelo", "Angel", "Apocalypse", "Aristotle", "Armageddon", "Ash", "Asylum", "Atlantis", "Avenger", "Awakening", 
"Barsac", "Bat", "Beard", "Beast", "Beasts", "Big Bad Wolf", "Birds", "Birthday Present", "Bishop", "Bites",
"Blackwell", "Blade", "Blight", "Blog", "Blogger", "Blonde", "Blood", "Bloodline", "Body", "Book", "Bookkeeper", "Bones", 
"Boudica", "Boy", "Brass", "Brain", "Bridge", "Bronze", "Books", "Brother", "Brothers", "Bullet", "Bus", "Butterfly",
"Cabin", "Caesar", "Call", "Cape", "Captain Hook", "Captain Nemo", "Carnival", "Case", "Casket", "Caverns", "Cell", "Cemetery", 
"Chain", "Chance", "Chicago", "Childhood", "Child", "Children", "Cindarella", "Circle", "Circus", "City", "Claim", "Club", "Cloven Hoof", 
"Coast", "Cold", "Comb", "Comet", "Compendium", "Constantine", "Corpse", "Cotswold", "Cove", 
"Creek", "Crows", "Crown", "Cry", "Cthulhu", "Cup", "Cupid", "Curse", "Cylinder", "Crypt",
"Dance", "Dancers", "Dark", "Darkness", "Daughter", "Dawn", "Day", "Daylight", "Days", "Da Vinci", "Death", "Dead", "Deception", "Demon", 
"Departed", "Desert", "Detective", "Devil", "Devils", "Discovery", "Doctor", "Doctor Jeckyll", "Dog", "Dome", "Doom", "Door", "Doors", 
"Dracula", "Dragon", "Dragons", "Drapes", "Dream", "Dusk", "Dust", "Dweller",
"Earth", "Edge", "Effie", "Elysium", "Einstein", "Emperor", "Empire", "Eons", "Eternity", "Equation", "Escape", "Ether", 
"Evolution", "Exile", "Express", "Evil", "Eye",
"Face", "Faerie", "Fangs", "Farm House", "Fear", "Feast", "Feet", "Fiend", "Fire", "Fish",
"Flame", "Floor", "Flower", "Fog", "Folk", "Force", "Fox", "Frankenstein", "Future",
"Gambit", "Garden", "Gentleman", "Ghost", "Ghostlands", "Ghoul", "Girl", "Gateway", "Glory", "Glass",
"Goblet", "Goblins", "Gods", "God", "Gold", "Grace", "Grave", "Graveyard", "Guard", "Guardian", "Guest", "Guns", "Gun", "Gunfighter", "Gurov", "Gunsmoke",
"Hall", "Hamlet", "Hand", "Hands", "Hare", "Hate", "Haunted", "Health", "Hearts", "Heaven", "He/Him", "Heist Job", "Hell", "Heroes", 
"Hieroglyph", "Highway", "Hitler", "Hollywood", "Home", "Honor", "Horde", "Horror", "Houdini", "Hour", "Hours", "House", 
"Huckleberry Finn", "Human", "Hyborian",
"Idol", "Inheritance", "Inferno", "Intention", "Imaginary", "Insects", "Inverness", "Island", 
"Jars", "Jailer", "Jenny Everywhere", "Jewels", "Joan of Arc", "Journey", "Jungle",
"Kaldar", "Key", "Kitchen", "Killer", "King", "Kings",
"Labyrinth", "Lady MacBeth", "Lamia", "Law", "Legacy", "Letters", "Life", "Lightning", "Link", "Long John Silver", "Lord", "Lovecraft",
"Madness", "Madman", "Magic", "Man", "Manhattan", "Manor", "Manuscript", "March", "Marquis de Sade", "Mars", "Master", "Mask", "Mata Hari",
"Memory", "Men", "Mesa", "Metronome", "Mind", "Minutes", "Mirror", "Mistletoe", 
"Modern", "Monster", "Monster-God", "Moon", "Moonlight", "Mountain", "Mozart", "Murder", "Music-Box", "Mystery",
"Nails", "Names", "Napoleon", "Neighbors", "Night", "Nightmare", "North", "Nothing", "Nowhere",
"Odin", "Opportunity", "Options", "Orchid",
"Pain", "Paladins", "Paradox", "Parlor", "Party", "Patch", "Path", "Patrol", "People", "Peter Pan", "Pets", "Phantom", "Pilgrim", "Piper", "Pirate",
"Place", "Plan", "Plant", "Player", "Power", "Prague", "Prey", "Priestess", "Protest", "Punch",
"Queen", "Quest", 
"Rabbit", "Rat", "Rats", "Reaper", "Reckless", "Reply", "Return", "Revenge", "Revolt", "Revolution", "Riders", "Ring", "River", 
"Room", "Rulers", "Rules",
"Salvage", "Satan", "Scientist", "Science", "Scream", "Sea", "Sealed", "Season", "Secret", 
"Shadows", "Shadow", "Shakespeare", "Shambler", "Shell", "Sherlock Holmes", "She", 
"Silence", "Sip", "Sky", "Skull", "Skunk", "Slab", "Sleep", "Sleepers", "Snake", 
"Soldiers", "Song", "Sorcery", "Soul", "South", "Space", "Spawn", "Stars", "Steam", "Step", "Stranger", "Studio", "Study", 
"Suicide", "Sun", "Survivors", "Sword",
"Tale", "Tartarus", "Terror", "Tesla", "They", "Thieves", "Thing", "Things", "Thule", "Thunder", "Ticket", "Tiger", "Time",
"Toad", "Tomb", "Tombstone", "Tommy", "Tower", "Trade", "Trail", "Train", "Treasures", "Trees", "Tree", "Tsan-Lo",
"Us",
"Valley", "Vampire", "Vengeance", "Voice", "Vials",
"Wall", "Watcher", "Waters", "War", "Wax", "We", "Web", "Weirds", "What Waits", "Will", "Wind", "Window", "Wings", "Witch", 
"Wolfhound", "Wolves", "Woodcarver", "Wolf", "Woman", "Women", "Woods", "World", "Worm", "Wrath", "Wretched", "Wyatt",
"Zamboula", "Zombie"
)

var adjective = new Array(
"Accidental", "Accusing", "Amazing", "Atomic", "Automatic", "Aztec",
"Bangkok", "Bad", "Big", "Black", "Bloodstained", "Blue", "Broken",
"Clockwork", "Closing", "Cold", "Conquering", "Corrupt", "Cosmic", "Consuming", "Closed", "Clutching", "Copper", "Crystal",
"Damned", "Dancing", "Dark", "Daylight", "Dead", "Dead-Alive", "Dear", "Delicate", "Destroying", "Different", "Dimensional",
"Edible", "English", "Eternal", "Evening",
"Fae", "Fallen", "Final", "Flapping", "Forever", "Forty", "Frozen",
"Galvanic", "Golden", "Gothic", "Gray", "Great", "Green", "Grey", "Grim", "Grisly",
"Hairy", "Haunting", "Hideous", "Hidden",
"Imitation", "Invisible", "Iron",
"Last", "Lead", "Living", "Logical", "Lost",
"Mad", "Mechanical", "Midnight", "Missing", "Moonlit", "Muddy", "My",
"New", "Next", "Noble", "Nomadic",
"One",
"Perfect", "Poor", "Poisoned", "Priceless",
"Quantum",
"Radient", "Raw", "Red",
"Savage", "Scarlet", "Second", "Secret", "Seven", "Shattered", "Silent", "Silver", "Six", 
"Souls", "Spare", "Special", "Strange", "Steam-Powered", "Steel", "Supreme",
"Third", "Tragic", "Twenty", "Two", 
"Ultimate", "Undead", "Unknown", "Unrequited", "Urban", "Uncommon", "Unfaithful", "Unseen",
"Variable", "Vampiric", "Velvet", "Violet",
"Wayward", "Weaving", "Whispering",
"Yellow"
)

var verb = new Array(
"Be",
"Chain", "Chase", "Come",
"Die", "Drag", "Dream",
"Embrace",
"Fall", "Forget", "Fight",
"Go",
"Hang", "Hang", "Have", 
"Kill",
"Laugh", "Lie",
"Murder",
"Own",
"Run", "Ride",
"Save", "See", "Speak", "Steal",
"Trick",
"Go"
)

var verbed = new Array(
"Borrowed", "Built",
"Came", "Chained", "Changed", "Chased",
"Died", "Dragged",
"Embraced",
"Fell", "Forgot", "Fought",
"Had",
"Hung",
"Killed",
"Laughed", "Lied",
"Murdered",
"Owned",
"Ran", "Rode",
"Saw", "Seduced", "Spoke",
"Tricked",
"Was", "Went"
)

var verbs = new Array(
"Comes", "Chains", "Changes", "Chases",
"Dies", "Drag",
"Embraces",
"Falls", "Forgets", "Fights",
"Goes",
"Hangs",
"Has",
"Is",
"Kills",
"Laughs", "Lies",
"Murders",
"Owns",
"Rides", "Runs",
"Screams", "Sees", "Speaks",
"Tricks",
"Weeps"
)

var verbing = new Array(
"Coming", "Chaining", "Changing", "Chasing", "Crossing",
"Dragging", "Dying",
"Embracing",
"Falling", "Forgetting", "Fighting",
"Going",
"Hanging",
"Having",
"Killing",
"Laughing", "Lying",
"Murdering",
"Owning",
"Riding", "Running", "Rising",
"Seeing", "Speaking",
"Tricking"
)

var auxverb = new Array(
"Could", "Could Not", "Must", "Must Not", "Shall", "Shall Not", "Should", "Should Not", "That", "That Never", "Would", "Would Not"
)

function nameStructure () {
var x = 0;
x = Math.floor(Math.random() * 45);
switch (x)
{
	case 1:
	return (adjective[a1] + " " + noun[n1]);
	case 2:
	return ("The " + adjective[a1] + " " + noun[n1]);
	case 3:
	return (noun[n1] + " of " + noun[n2]);
	case 4:
	return ("The " + noun[n1] + "'s " + noun[n2]);
	case 5:
	return ("The " + noun[n1] + " of the " + noun[n2]);
	case 6:
	return ("The " + noun[n1] + " of " + adjective[a1] + " " + noun [n2]);
	case 7:
	return ("The " + noun[n1] + " and the " + noun[n2]);
	case 8:
	return (preposition[p] + " the " + noun[n1]);
	case 9:
	return ("The " + noun[n1] + " " + preposition[p]);
	case 10:
	return (adjective[a1] + " " + noun[n1] + " of " + noun[n2]);	
	case 11:
	return ("The " + noun[n1] + " the " + noun[n2] + " " + verbed[vpa]);
	case 12:
	return ("The " + noun[n1] + " " + preposition[p] + " the " + noun[n2]);
	case 13:
	return ("The " + noun[n1] + " of the " + adjective[a1] + " " + adjective[a2] + " " + noun[n2]);
	case 14:
	return ("The " + noun[n1] + " " + preposition[p] + " the " + adjective[a1] + " " + noun[n2]);
	case 15:
	return ("The " + noun[n1] + " that " + verbed[vpa] + " the " + noun[n2]);
	case 16:
	return ("The " + noun[n1] + " of the " + adjective[a1] + " " + noun[n2]);
	case 17:
	return (noun[n1] + " in " + adjective[a1] + " " + noun[n2]);
	case 18:
	return ("The " + noun[n1] + " that " + auxverb[av] + " " + verb[v] + " " + noun[n2]);
	case 19:
	return (preposition[p] + " the " + adjective[a1] + " " + noun[n1]);
	case 20:
	return (noun[n1] + " " + verbs[vpr] + " " + noun[n2]);
	case 21:
	return (preposition[p] + " a " + noun[n1] + " with a " + noun[n2]);
	case 22:
	return ("The " + adjective[a1] + " " + adjective[a2] + " " + noun[n1]);
	case 23:
	return (noun[n1] + " " + verbed[vpa] + " the " + noun[n2]);
	case 24:
	return (preposition[p] + " the " + noun[n1] + " of the " + adjective[a1] + " " + noun[n2]);
	case 25:
	return ("The " + noun[n1] + " that " + auxverb[av] + " " + verb[v]);
	case 26:
	return ("The " + adjective[a1] + " " + adjective[a2] + " " + noun[n1]);
	case 27:
	return ("A " + adjective[a1] + " " + noun[n1] + " " + preposition[p] + " " + noun[n2]);
	case 28:
	return (verbing[ving] + " the " + noun[n1]);
	case 29:
	return (noun[n1] + " " + verbed[vpa]);
	case 30:
	return (adjective[a1] + " " + noun[n1] + " " + preposition[p] + " " + adjective[a2] + " " + noun[n2]);
	case 31:
	return (adjective[a1] + " " + noun[n1] + ", " + adjective[a1] + " " + noun[n2]);
	case 32:
	return (noun[n1] + ", " + verb[v]);
	case 33:
	return (verbed[vpa] + " " + noun[n1]);
	case 34:
	return (verbed[vpa] + " to " + verb[v]);
	case 35:
	return (verb[v] + " " + noun[n1]);
	case 36:
	return (noun[n1] + "'s " + noun[n2]);
	case 37:
	return (noun[n1] + " and " + noun[n2]);
	case 38:
	return (noun[n1] + " is " + adjective[a1]);
	case 39:
	return (noun[n1] + " " + noun[n2]);
	case 40:
	return ("The " + noun[n1] + " " + noun[n2]);
	case 41:
	return (noun[n1] + noun[n2]);
	case 42:
	return ("A " + noun[n1] + " of " + noun[n2]);
	case 43:
	return (noun[n1] + " " + preposition[p] + " " + adjective[a1] + " " + noun[n2]);
	case 44:
	return (verbed[vpa] + " by " + noun[n1]);
	default:
	return (noun[n1] + " in the " + noun[n2]);
}
}

function speechpart() {
n1 = Math.floor(Math.random() * noun.length);
n2 = Math.floor(Math.random() * noun.length);
a1 = Math.floor(Math.random() * adjective.length);
a2 = Math.floor(Math.random() * adjective.length);
vpa = Math.floor(Math.random() * verbed.length);
vpr = Math.floor(Math.random() * verbs.length);
p = Math.floor(Math.random() * preposition.length);
av = Math.floor(Math.random() * auxverb.length);
v = Math.floor(Math.random() * verb.length);
ving = Math.floor(Math.random() * verbing.length);
}

var n1 = 0; //noun
var n2 = 0; //noun
var a1 = 0; //adjective
var a2 = 0; //adjective
var vpa = 0; //verbpast
var vpr = 0; //verbpresent
var p = 0; //preposition
var av = 0; //aux verb
var v = 0; //verb
var ving = 0;

function RandomTitle() {
	speechpart();
	return nameStructure();
}
