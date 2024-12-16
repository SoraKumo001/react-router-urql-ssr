import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** A Pokémon's abilities entry */
export type Abilities = {
  __typename?: 'Abilities';
  /** The first ability of a Pokémon */
  first: Ability;
  /** The hidden ability of a Pokémon */
  hidden?: Maybe<Ability>;
  /** The second ability of a Pokémon */
  second?: Maybe<Ability>;
  /** The special ability of a Pokémon */
  special?: Maybe<Ability>;
};

/** The supported abilities */
export enum AbilitiesEnum {
  Adaptability = 'adaptability',
  Aerilate = 'aerilate',
  Aftermath = 'aftermath',
  Airlock = 'airlock',
  Analytic = 'analytic',
  Angerpoint = 'angerpoint',
  Angershell = 'angershell',
  Anticipation = 'anticipation',
  Arenatrap = 'arenatrap',
  Armortail = 'armortail',
  Aromaveil = 'aromaveil',
  Asoneglastrier = 'asoneglastrier',
  Asonespectrier = 'asonespectrier',
  Aurabreak = 'aurabreak',
  Baddreams = 'baddreams',
  Ballfetch = 'ballfetch',
  Battery = 'battery',
  Battlearmor = 'battlearmor',
  Battlebond = 'battlebond',
  Beadsofruin = 'beadsofruin',
  Beastboost = 'beastboost',
  Berserk = 'berserk',
  Bigpecks = 'bigpecks',
  Blaze = 'blaze',
  Bulletproof = 'bulletproof',
  Cheekpouch = 'cheekpouch',
  Chillingneigh = 'chillingneigh',
  Chlorophyll = 'chlorophyll',
  Clearbody = 'clearbody',
  Cloudnine = 'cloudnine',
  Colorchange = 'colorchange',
  Comatose = 'comatose',
  Commander = 'commander',
  Competitive = 'competitive',
  Compoundeyes = 'compoundeyes',
  Contrary = 'contrary',
  Corrosion = 'corrosion',
  Costar = 'costar',
  Cottondown = 'cottondown',
  Cudchew = 'cudchew',
  Curiousmedicine = 'curiousmedicine',
  Cursedbody = 'cursedbody',
  Cutecharm = 'cutecharm',
  Damp = 'damp',
  Dancer = 'dancer',
  Darkaura = 'darkaura',
  Dauntlessshield = 'dauntlessshield',
  Dazzling = 'dazzling',
  Defeatist = 'defeatist',
  Defiant = 'defiant',
  Deltastream = 'deltastream',
  Desolateland = 'desolateland',
  Disguise = 'disguise',
  Download = 'download',
  Dragonsmaw = 'dragonsmaw',
  Drizzle = 'drizzle',
  Drought = 'drought',
  Dryskin = 'dryskin',
  Earlybird = 'earlybird',
  Eartheater = 'eartheater',
  Effectspore = 'effectspore',
  Electricsurge = 'electricsurge',
  Electromorphosis = 'electromorphosis',
  Embodyaspectcornerstone = 'embodyaspectcornerstone',
  Embodyaspecthearthflame = 'embodyaspecthearthflame',
  Embodyaspectteal = 'embodyaspectteal',
  Embodyaspectwellspring = 'embodyaspectwellspring',
  Emergencyexit = 'emergencyexit',
  Fairyaura = 'fairyaura',
  Filter = 'filter',
  Flamebody = 'flamebody',
  Flareboost = 'flareboost',
  Flashfire = 'flashfire',
  Flowergift = 'flowergift',
  Flowerveil = 'flowerveil',
  Fluffy = 'fluffy',
  Forecast = 'forecast',
  Forewarn = 'forewarn',
  Friendguard = 'friendguard',
  Frisk = 'frisk',
  Fullmetalbody = 'fullmetalbody',
  Furcoat = 'furcoat',
  Galewings = 'galewings',
  Galvanize = 'galvanize',
  Gluttony = 'gluttony',
  Goodasgold = 'goodasgold',
  Gooey = 'gooey',
  Gorillatactics = 'gorillatactics',
  Grasspelt = 'grasspelt',
  Grassysurge = 'grassysurge',
  Grimneigh = 'grimneigh',
  Guarddog = 'guarddog',
  Gulpmissile = 'gulpmissile',
  Guts = 'guts',
  Hadronengine = 'hadronengine',
  Harvest = 'harvest',
  Healer = 'healer',
  Heatproof = 'heatproof',
  Heavymetal = 'heavymetal',
  Honeygather = 'honeygather',
  Hospitality = 'hospitality',
  Hugepower = 'hugepower',
  Hungerswitch = 'hungerswitch',
  Hustle = 'hustle',
  Hydration = 'hydration',
  Hypercutter = 'hypercutter',
  Icebody = 'icebody',
  Iceface = 'iceface',
  Icescales = 'icescales',
  Illuminate = 'illuminate',
  Illusion = 'illusion',
  Immunity = 'immunity',
  Imposter = 'imposter',
  Infiltrator = 'infiltrator',
  Innardsout = 'innardsout',
  Innerfocus = 'innerfocus',
  Insomnia = 'insomnia',
  Intimidate = 'intimidate',
  Intrepidsword = 'intrepidsword',
  Ironbarbs = 'ironbarbs',
  Ironfist = 'ironfist',
  Justified = 'justified',
  Keeneye = 'keeneye',
  Klutz = 'klutz',
  Leafguard = 'leafguard',
  Levitate = 'levitate',
  Libero = 'libero',
  Lightmetal = 'lightmetal',
  Lightningrod = 'lightningrod',
  Limber = 'limber',
  Lingeringaroma = 'lingeringaroma',
  Liquidooze = 'liquidooze',
  Liquidvoice = 'liquidvoice',
  Longreach = 'longreach',
  Magicbounce = 'magicbounce',
  Magicguard = 'magicguard',
  Magician = 'magician',
  Magmaarmor = 'magmaarmor',
  Magnetpull = 'magnetpull',
  Marvelscale = 'marvelscale',
  Megalauncher = 'megalauncher',
  Merciless = 'merciless',
  Mimicry = 'mimicry',
  Mindseye = 'mindseye',
  Minus = 'minus',
  Mirrorarmor = 'mirrorarmor',
  Mistysurge = 'mistysurge',
  Moldbreaker = 'moldbreaker',
  Moody = 'moody',
  Motordrive = 'motordrive',
  Mountaineer = 'mountaineer',
  Moxie = 'moxie',
  Multiscale = 'multiscale',
  Multitype = 'multitype',
  Mummy = 'mummy',
  Myceliummight = 'myceliummight',
  Naturalcure = 'naturalcure',
  Neuroforce = 'neuroforce',
  Neutralizinggas = 'neutralizinggas',
  Noability = 'noability',
  Noguard = 'noguard',
  Normalize = 'normalize',
  Oblivious = 'oblivious',
  Opportunist = 'opportunist',
  Orichalcumpulse = 'orichalcumpulse',
  Overcoat = 'overcoat',
  Overgrow = 'overgrow',
  Owntempo = 'owntempo',
  Parentalbond = 'parentalbond',
  Pastelveil = 'pastelveil',
  Perishbody = 'perishbody',
  Persistent = 'persistent',
  Pickpocket = 'pickpocket',
  Pickup = 'pickup',
  Pixilate = 'pixilate',
  Plus = 'plus',
  Poisonheal = 'poisonheal',
  Poisonpoint = 'poisonpoint',
  Poisonpuppeteer = 'poisonpuppeteer',
  Poisontouch = 'poisontouch',
  Powerconstruct = 'powerconstruct',
  Powerofalchemy = 'powerofalchemy',
  Powerspot = 'powerspot',
  Prankster = 'prankster',
  Pressure = 'pressure',
  Primordialsea = 'primordialsea',
  Prismarmor = 'prismarmor',
  Propellertail = 'propellertail',
  Protean = 'protean',
  Protosynthesis = 'protosynthesis',
  Psychicsurge = 'psychicsurge',
  Punkrock = 'punkrock',
  Purepower = 'purepower',
  Purifyingsalt = 'purifyingsalt',
  Quarkdrive = 'quarkdrive',
  Queenlymajesty = 'queenlymajesty',
  Quickdraw = 'quickdraw',
  Quickfeet = 'quickfeet',
  Raindish = 'raindish',
  Rattled = 'rattled',
  Rebound = 'rebound',
  Receiver = 'receiver',
  Reckless = 'reckless',
  Refrigerate = 'refrigerate',
  Regenerator = 'regenerator',
  Ripen = 'ripen',
  Rivalry = 'rivalry',
  Rkssystem = 'rkssystem',
  Rockhead = 'rockhead',
  Rockypayload = 'rockypayload',
  Roughskin = 'roughskin',
  Runaway = 'runaway',
  Sandforce = 'sandforce',
  Sandrush = 'sandrush',
  Sandspit = 'sandspit',
  Sandstream = 'sandstream',
  Sandveil = 'sandveil',
  Sapsipper = 'sapsipper',
  Schooling = 'schooling',
  Scrappy = 'scrappy',
  Screencleaner = 'screencleaner',
  Seedsower = 'seedsower',
  Serenegrace = 'serenegrace',
  Shadowshield = 'shadowshield',
  Shadowtag = 'shadowtag',
  Sharpness = 'sharpness',
  Shedskin = 'shedskin',
  Sheerforce = 'sheerforce',
  Shellarmor = 'shellarmor',
  Shielddust = 'shielddust',
  Shieldsdown = 'shieldsdown',
  Simple = 'simple',
  Skilllink = 'skilllink',
  Slowstart = 'slowstart',
  Slushrush = 'slushrush',
  Sniper = 'sniper',
  Snowcloak = 'snowcloak',
  Snowwarning = 'snowwarning',
  Solarpower = 'solarpower',
  Solidrock = 'solidrock',
  Soulheart = 'soulheart',
  Soundproof = 'soundproof',
  Speedboost = 'speedboost',
  Stakeout = 'stakeout',
  Stall = 'stall',
  Stalwart = 'stalwart',
  Stamina = 'stamina',
  Stancechange = 'stancechange',
  Static = 'static',
  Steadfast = 'steadfast',
  Steamengine = 'steamengine',
  Steelworker = 'steelworker',
  Steelyspirit = 'steelyspirit',
  Stench = 'stench',
  Stickyhold = 'stickyhold',
  Stormdrain = 'stormdrain',
  Strongjaw = 'strongjaw',
  Sturdy = 'sturdy',
  Suctioncups = 'suctioncups',
  Superluck = 'superluck',
  Supersweetsyrup = 'supersweetsyrup',
  Supremeoverlord = 'supremeoverlord',
  Surgesurfer = 'surgesurfer',
  Swarm = 'swarm',
  Sweetveil = 'sweetveil',
  Swiftswim = 'swiftswim',
  Swordofruin = 'swordofruin',
  Symbiosis = 'symbiosis',
  Synchronize = 'synchronize',
  Tabletsofruin = 'tabletsofruin',
  Tangledfeet = 'tangledfeet',
  Tanglinghair = 'tanglinghair',
  Technician = 'technician',
  Telepathy = 'telepathy',
  Teraformzero = 'teraformzero',
  Terashell = 'terashell',
  Terashift = 'terashift',
  Teravolt = 'teravolt',
  Thermalexchange = 'thermalexchange',
  Thickfat = 'thickfat',
  Tintedlens = 'tintedlens',
  Torrent = 'torrent',
  Toughclaws = 'toughclaws',
  Toxicboost = 'toxicboost',
  Toxicchain = 'toxicchain',
  Toxicdebris = 'toxicdebris',
  Trace = 'trace',
  Transistor = 'transistor',
  Triage = 'triage',
  Truant = 'truant',
  Turboblaze = 'turboblaze',
  Unaware = 'unaware',
  Unburden = 'unburden',
  Unnerve = 'unnerve',
  Unseenfist = 'unseenfist',
  Vesselofruin = 'vesselofruin',
  Victorystar = 'victorystar',
  Vitalspirit = 'vitalspirit',
  Voltabsorb = 'voltabsorb',
  Wanderingspirit = 'wanderingspirit',
  Waterabsorb = 'waterabsorb',
  Waterbubble = 'waterbubble',
  Watercompaction = 'watercompaction',
  Waterveil = 'waterveil',
  Weakarmor = 'weakarmor',
  Wellbakedbody = 'wellbakedbody',
  Whitesmoke = 'whitesmoke',
  Wimpout = 'wimpout',
  Windpower = 'windpower',
  Windrider = 'windrider',
  Wonderguard = 'wonderguard',
  Wonderskin = 'wonderskin',
  Zenmode = 'zenmode',
  Zerotohero = 'zerotohero'
}

/** A single Pokémon ability entry */
export type Ability = {
  __typename?: 'Ability';
  /** Bulbapedia page for an ability */
  bulbapediaPage: Scalars['String']['output'];
  /** The long description for an ability */
  desc?: Maybe<Scalars['String']['output']>;
  /** Whether this ability has effects outside of battle, and if so what the effect is */
  isFieldAbility?: Maybe<Scalars['String']['output']>;
  /** Whether an ability is non-standard, and if it is why */
  isNonstandard?: Maybe<Scalars['String']['output']>;
  /** The key of the ability as stored in the API */
  key: AbilitiesEnum;
  /** The name for an ability */
  name: Scalars['String']['output'];
  /**
   * The Pokémon that have this ability.
   * Note that when querying this field and nesting deep into Pokemon.abilities, that the nested list
   * will not have any values to prevent infinite looping data.
   */
  pokemonThatHaveThisAbility: Array<Maybe<Pokemon>>;
  /** Serebii page for an ability */
  serebiiPage: Scalars['String']['output'];
  /** The short description for an ability */
  shortDesc: Scalars['String']['output'];
  /** Smogon page for an ability */
  smogonPage: Scalars['String']['output'];
};

/** A Pokémon catch rate entry */
export type CatchRate = {
  __typename?: 'CatchRate';
  /** The base catch rate for a Pokémon that will be used to calculate the final catch rate */
  base: Scalars['Int']['output'];
  /** The chance to capture a Pokémon when an ordinary Poké Ball is thrown at full health without any status condition */
  percentageWithOrdinaryPokeballAtFullHealth: Scalars['String']['output'];
};

/** A Pokémon's EV yields */
export type EvYields = {
  __typename?: 'EvYields';
  /** The attack EV yield of a Pokémon */
  attack: Scalars['Int']['output'];
  /** The defense EV yield of a Pokémon */
  defense: Scalars['Int']['output'];
  /** The HP EV yield of a pokémon */
  hp: Scalars['Int']['output'];
  /** The special attack EV yield of a Pokémon */
  specialattack: Scalars['Int']['output'];
  /** The special defense EV yield of a Pokémon */
  specialdefense: Scalars['Int']['output'];
  /** The speed EV yield of a Pokémon */
  speed: Scalars['Int']['output'];
};

/** A flavor text entry for a Pokémon */
export type Flavor = {
  __typename?: 'Flavor';
  /** The flavor text for this entry */
  flavor: Scalars['String']['output'];
  /** The name of the game this flavor text is from */
  game: Scalars['String']['output'];
};

/** A Pokémon gender ratio entry */
export type Gender = {
  __typename?: 'Gender';
  /** The percentage for female occurrences */
  female: Scalars['String']['output'];
  /** The percentage of male occurrences */
  male: Scalars['String']['output'];
};

/** The learnset for each Pokémon split by generation */
export type GenerationalPokemonLearnset = {
  __typename?: 'GenerationalPokemonLearnset';
  /** The learnset of this Pokémon in Generation 3 */
  generation3: PokemonLearnset;
  /** The learnset of this Pokémon in Generation 4 */
  generation4: PokemonLearnset;
  /** The learnset of this Pokémon in Generation 5 */
  generation5: PokemonLearnset;
  /** The learnset of this Pokémon in Generation 6 */
  generation6: PokemonLearnset;
  /** The learnset of this Pokémon in Generation 7 */
  generation7: PokemonLearnset;
  /** The learnset of this Pokémon in Generation 8 */
  generation8: PokemonLearnset;
};

/** The variants of why an item or move can be non-standard in the current meta or generation. */
export enum IsNonStandard {
  /** When set the item or move is from Smogon's CAP project and is not in the official Nintendo games. */
  Cap = 'CAP',
  /** When set the move can exclusively be used Pokémon Sword and Pokémon Shield as it requires Gigantamaxing your Pokémon. */
  Gigantamax = 'Gigantamax',
  /** When set the item or move is exclusive to the Let's Go Pikachu / Let's Go Eevee games. */
  LetsGoPikachuEevee = 'LetsGoPikachuEevee',
  /** When set the item or move is from a past generation. This means it is not available at all in the data of Generation 9. */
  Past = 'Past',
  /** When set the item or move is available within the generation 9 data, however is cannot currently be obtained. It is safe to presume that Gamefreak/Nintendo will add it in later DLC. */
  Unobtainable = 'Unobtainable'
}

/** A single item entry */
export type Item = {
  __typename?: 'Item';
  /** Bulbapedia page for an item */
  bulbapediaPage: Scalars['String']['output'];
  /** The long description for an item */
  desc: Scalars['String']['output'];
  /** The generation in which this item was introduced */
  generationIntroduced: Scalars['Int']['output'];
  /** Whether an item is non-standard, and if it is why */
  isNonstandard?: Maybe<Scalars['String']['output']>;
  /** The key of the item as stored in the API */
  key: ItemsEnum;
  /** The name for an item */
  name: Scalars['String']['output'];
  /** Serebii page for an item */
  serebiiPage: Scalars['String']['output'];
  /** The long description for an item */
  shortDesc?: Maybe<Scalars['String']['output']>;
  /** Smogon page for an item */
  smogonPage?: Maybe<Scalars['String']['output']>;
  /** The sprite for an item */
  sprite: Scalars['String']['output'];
};

/** The supported items */
export enum ItemsEnum {
  Abilityshield = 'abilityshield',
  Abomasite = 'abomasite',
  Absolite = 'absolite',
  Absorbbulb = 'absorbbulb',
  Acrobike = 'acrobike',
  Adamantcrystal = 'adamantcrystal',
  Adamantorb = 'adamantorb',
  Adrenalineorb = 'adrenalineorb',
  Adventureguide = 'adventureguide',
  Aerodactylite = 'aerodactylite',
  Aggronite = 'aggronite',
  Aguavberry = 'aguavberry',
  Airballoon = 'airballoon',
  Alakazite = 'alakazite',
  Aloraichiumz = 'aloraichiumz',
  Altarianite = 'altarianite',
  Ampharosite = 'ampharosite',
  Apicotberry = 'apicotberry',
  Apricornbox = 'apricornbox',
  Aquasuit = 'aquasuit',
  Armorfossil = 'armorfossil',
  Aspearberry = 'aspearberry',
  Assaultvest = 'assaultvest',
  Audinite = 'audinite',
  Auroraticket = 'auroraticket',
  Auspiciousarmor = 'auspiciousarmor',
  Autograph = 'autograph',
  Azureflute = 'azureflute',
  Babiriberry = 'babiriberry',
  Bandautograph = 'bandautograph',
  Banettite = 'banettite',
  Basementkey = 'basementkey',
  Beastball = 'beastball',
  Beedrillite = 'beedrillite',
  Belueberry = 'belueberry',
  Berry = 'berry',
  Berryjuice = 'berryjuice',
  Berrypots = 'berrypots',
  Berrypouch = 'berrypouch',
  Berrysweet = 'berrysweet',
  Berserkgene = 'berserkgene',
  Bicycle = 'bicycle',
  Bignugget = 'bignugget',
  Bigroot = 'bigroot',
  Bikevoucher = 'bikevoucher',
  Bindingband = 'bindingband',
  Bitterberry = 'bitterberry',
  Blackbelt = 'blackbelt',
  Blackglasses = 'blackglasses',
  Blacksludge = 'blacksludge',
  Blastoisinite = 'blastoisinite',
  Blazikenite = 'blazikenite',
  Bluecard = 'bluecard',
  Blueorb = 'blueorb',
  Bluepetal = 'bluepetal',
  Blukberry = 'blukberry',
  Blunderpolicy = 'blunderpolicy',
  Boosterenergy = 'boosterenergy',
  Bottlecap = 'bottlecap',
  Brightpowder = 'brightpowder',
  Buggem = 'buggem',
  Buginiumz = 'buginiumz',
  Bugmemory = 'bugmemory',
  Bugterashard = 'bugterashard',
  Burndrive = 'burndrive',
  Burntberry = 'burntberry',
  Cameruptite = 'cameruptite',
  Campinggear = 'campinggear',
  Cardkey = 'cardkey',
  Catchingcharm = 'catchingcharm',
  Cellbattery = 'cellbattery',
  Charcoal = 'charcoal',
  Charizarditex = 'charizarditex',
  Charizarditey = 'charizarditey',
  Chartiberry = 'chartiberry',
  Cheriberry = 'cheriberry',
  Cherishball = 'cherishball',
  Chestoberry = 'chestoberry',
  Chilanberry = 'chilanberry',
  Chilldrive = 'chilldrive',
  Chippedpot = 'chippedpot',
  Choiceband = 'choiceband',
  Choicescarf = 'choicescarf',
  Choicespecs = 'choicespecs',
  Chopleberry = 'chopleberry',
  Clawfossil = 'clawfossil',
  Clearamulet = 'clearamulet',
  Clearbell = 'clearbell',
  Cloversweet = 'cloversweet',
  Cobaberry = 'cobaberry',
  Coincase = 'coincase',
  Colburberry = 'colburberry',
  Colressmchn = 'colressmchn',
  Contestcostume = 'contestcostume',
  Contestpass = 'contestpass',
  Cornerstonemask = 'cornerstonemask',
  Cornnberry = 'cornnberry',
  Coupon1 = 'coupon1',
  Coupon2 = 'coupon2',
  Coupon3 = 'coupon3',
  Coverfossil = 'coverfossil',
  Covertcloak = 'covertcloak',
  Crackedpot = 'crackedpot',
  Crucibellite = 'crucibellite',
  Custapberry = 'custapberry',
  Damprock = 'damprock',
  Darkgem = 'darkgem',
  Darkiniumz = 'darkiniumz',
  Darkmemory = 'darkmemory',
  Darkstone = 'darkstone',
  Darkterashard = 'darkterashard',
  Dawnstone = 'dawnstone',
  Decidiumz = 'decidiumz',
  Deepseascale = 'deepseascale',
  Deepseatooth = 'deepseatooth',
  Destinyknot = 'destinyknot',
  Devongoods = 'devongoods',
  Devonparts = 'devonparts',
  Devonscope = 'devonscope',
  Devonscubagear = 'devonscubagear',
  Diancite = 'diancite',
  Diveball = 'diveball',
  Dnasplicers = 'dnasplicers',
  Domefossil = 'domefossil',
  Dousedrive = 'dousedrive',
  Dowsingmachine = 'dowsingmachine',
  Dowsingmchn = 'dowsingmchn',
  Dracoplate = 'dracoplate',
  Dragonfang = 'dragonfang',
  Dragongem = 'dragongem',
  Dragoniumz = 'dragoniumz',
  Dragonmemory = 'dragonmemory',
  Dragonscale = 'dragonscale',
  Dragonskull = 'dragonskull',
  Dragonterashard = 'dragonterashard',
  Dreadplate = 'dreadplate',
  Dreamball = 'dreamball',
  Droppeditem = 'droppeditem',
  Dubiousdisc = 'dubiousdisc',
  Durinberry = 'durinberry',
  Duskball = 'duskball',
  Duskstone = 'duskstone',
  Dynamaxband = 'dynamaxband',
  Earthplate = 'earthplate',
  Eeviumz = 'eeviumz',
  Eggcard = 'eggcard',
  Ejectbutton = 'ejectbutton',
  Ejectpack = 'ejectpack',
  Electirizer = 'electirizer',
  Electricgem = 'electricgem',
  Electricmemory = 'electricmemory',
  Electricseed = 'electricseed',
  Electricterashard = 'electricterashard',
  Electriumz = 'electriumz',
  Elevatorkey = 'elevatorkey',
  Endorsement = 'endorsement',
  Energypowder = 'energypowder',
  Enigmaberry = 'enigmaberry',
  Enigmastone = 'enigmastone',
  Enigmaticcard = 'enigmaticcard',
  Eonflute = 'eonflute',
  Eonticket = 'eonticket',
  Escaperope = 'escaperope',
  Eviolite = 'eviolite',
  Expertbelt = 'expertbelt',
  Explorerkit = 'explorerkit',
  Expshare = 'expshare',
  Fairiumz = 'fairiumz',
  Fairyfeather = 'fairyfeather',
  Fairygem = 'fairygem',
  Fairymemory = 'fairymemory',
  Fairyterashard = 'fairyterashard',
  Famechecker = 'famechecker',
  Fashioncase = 'fashioncase',
  Fastball = 'fastball',
  Fightinggem = 'fightinggem',
  Fightingmemory = 'fightingmemory',
  Fightingterashard = 'fightingterashard',
  Fightiniumz = 'fightiniumz',
  Figyberry = 'figyberry',
  Firegem = 'firegem',
  Firememory = 'firememory',
  Firestone = 'firestone',
  Fireterashard = 'fireterashard',
  Firiumz = 'firiumz',
  Fishingrod = 'fishingrod',
  Fistplate = 'fistplate',
  Flameorb = 'flameorb',
  Flameplate = 'flameplate',
  Floatstone = 'floatstone',
  Flowersweet = 'flowersweet',
  Flyinggem = 'flyinggem',
  Flyingmemory = 'flyingmemory',
  Flyingterashard = 'flyingterashard',
  Flyiniumz = 'flyiniumz',
  Focusband = 'focusband',
  Focussash = 'focussash',
  Foragebag = 'foragebag',
  Fossilizedbird = 'fossilizedbird',
  Fossilizeddino = 'fossilizeddino',
  Fossilizeddrake = 'fossilizeddrake',
  Fossilizedfish = 'fossilizedfish',
  Friendball = 'friendball',
  Fullincense = 'fullincense',
  Fullrestore = 'fullrestore',
  Galactickey = 'galactickey',
  Galaricacuff = 'galaricacuff',
  Galaricawreath = 'galaricawreath',
  Galladite = 'galladite',
  Ganlonberry = 'ganlonberry',
  Garchompite = 'garchompite',
  Gardevoirite = 'gardevoirite',
  Gbsounds = 'gbsounds',
  Gengarite = 'gengarite',
  Ghostgem = 'ghostgem',
  Ghostiumz = 'ghostiumz',
  Ghostmemory = 'ghostmemory',
  Ghostterashard = 'ghostterashard',
  Glalitite = 'glalitite',
  Godstone = 'godstone',
  Gogoggles = 'gogoggles',
  Goldberry = 'goldberry',
  Goldbottlecap = 'goldbottlecap',
  Goldteeth = 'goldteeth',
  Goodrod = 'goodrod',
  Gracidea = 'gracidea',
  Gram1 = 'gram1',
  Gram2 = 'gram2',
  Gram3 = 'gram3',
  Grassgem = 'grassgem',
  Grassiumz = 'grassiumz',
  Grassmemory = 'grassmemory',
  Grassterashard = 'grassterashard',
  Grassyseed = 'grassyseed',
  Greatball = 'greatball',
  Greenpetal = 'greenpetal',
  Grepaberry = 'grepaberry',
  Gripclaw = 'gripclaw',
  Griseouscore = 'griseouscore',
  Griseousorb = 'griseousorb',
  Groundgem = 'groundgem',
  Groundiumz = 'groundiumz',
  Groundmemory = 'groundmemory',
  Groundterashard = 'groundterashard',
  Grubbyhanky = 'grubbyhanky',
  Gsball = 'gsball',
  Gyaradosite = 'gyaradosite',
  Habanberry = 'habanberry',
  Hardstone = 'hardstone',
  Healball = 'healball',
  Hearthflamemask = 'hearthflamemask',
  Heatrock = 'heatrock',
  Heavyball = 'heavyball',
  Heavydutyboots = 'heavydutyboots',
  Helixfossil = 'helixfossil',
  Heracronite = 'heracronite',
  Hitechearbuds = 'hitechearbuds',
  Holocaster = 'holocaster',
  Hondewberry = 'hondewberry',
  Honorofkalos = 'honorofkalos',
  Houndoominite = 'houndoominite',
  Hyperpotion = 'hyperpotion',
  Iapapaberry = 'iapapaberry',
  Iceberry = 'iceberry',
  Icegem = 'icegem',
  Icememory = 'icememory',
  Icestone = 'icestone',
  Iceterashard = 'iceterashard',
  Icicleplate = 'icicleplate',
  Iciumz = 'iciumz',
  Icyrock = 'icyrock',
  Ilimasnormaliumz = 'ilimasnormaliumz',
  Inciniumz = 'inciniumz',
  Insectplate = 'insectplate',
  Intriguingstone = 'intriguingstone',
  Ironball = 'ironball',
  Ironplate = 'ironplate',
  Itemfinder = 'itemfinder',
  Jabocaberry = 'jabocaberry',
  Jadeorb = 'jadeorb',
  Jawfossil = 'jawfossil',
  Journal = 'journal',
  Kangaskhanite = 'kangaskhanite',
  Kasibberry = 'kasibberry',
  Kebiaberry = 'kebiaberry',
  Keeberry = 'keeberry',
  Kelpsyberry = 'kelpsyberry',
  Keystone = 'keystone',
  Keytoroom1 = 'keytoroom1',
  Keytoroom2 = 'keytoroom2',
  Keytoroom4 = 'keytoroom4',
  Keytoroom6 = 'keytoroom6',
  Kingsrock = 'kingsrock',
  Kofuswallet = 'kofuswallet',
  Kommoniumz = 'kommoniumz',
  Koraidonspokeball = 'koraidonspokeball',
  Laggingtail = 'laggingtail',
  Lansatberry = 'lansatberry',
  Latiasite = 'latiasite',
  Latiosite = 'latiosite',
  Laxincense = 'laxincense',
  Leafstone = 'leafstone',
  Leek = 'leek',
  Leftovers = 'leftovers',
  Leftpokeball = 'leftpokeball',
  Legendplate = 'legendplate',
  Lenscase = 'lenscase',
  Leppaberry = 'leppaberry',
  Letter = 'letter',
  Levelball = 'levelball',
  Libertypass = 'libertypass',
  Liechiberry = 'liechiberry',
  Lifeorb = 'lifeorb',
  Liftkey = 'liftkey',
  Lightball = 'lightball',
  Lightclay = 'lightclay',
  Lightstone = 'lightstone',
  Loadeddice = 'loadeddice',
  Lockcapsule = 'lockcapsule',
  Lookerticket = 'lookerticket',
  Lootsack = 'lootsack',
  Lopunnite = 'lopunnite',
  Lostitem = 'lostitem',
  Loveball = 'loveball',
  Lovesweet = 'lovesweet',
  Lucarionite = 'lucarionite',
  Luckypunch = 'luckypunch',
  Lumberry = 'lumberry',
  Luminousmoss = 'luminousmoss',
  Lunaliumz = 'lunaliumz',
  Lunarwing = 'lunarwing',
  Lureball = 'lureball',
  Lustrousglobe = 'lustrousglobe',
  Lustrousorb = 'lustrousorb',
  Luxuryball = 'luxuryball',
  Lycaniumz = 'lycaniumz',
  Machbike = 'machbike',
  Machinepart = 'machinepart',
  Machobrace = 'machobrace',
  Magmaemblem = 'magmaemblem',
  Magmarizer = 'magmarizer',
  Magmastone = 'magmastone',
  Magmasuit = 'magmasuit',
  Magnet = 'magnet',
  Magoberry = 'magoberry',
  Magostberry = 'magostberry',
  Mail = 'mail',
  Makeupbag = 'makeupbag',
  Maliciousarmor = 'maliciousarmor',
  Manectite = 'manectite',
  Marangaberry = 'marangaberry',
  Marshadiumz = 'marshadiumz',
  Masterball = 'masterball',
  Masterpieceteacup = 'masterpieceteacup',
  Mawilite = 'mawilite',
  Maxpotion = 'maxpotion',
  Meadowplate = 'meadowplate',
  Medalbox = 'medalbox',
  Medichamite = 'medichamite',
  Megabracelet = 'megabracelet',
  Megaring = 'megaring',
  Membercard = 'membercard',
  Mentalherb = 'mentalherb',
  Metagrossite = 'metagrossite',
  Metalalloy = 'metalalloy',
  Metalcoat = 'metalcoat',
  Metalpowder = 'metalpowder',
  Meteorite = 'meteorite',
  Meteoriteshard = 'meteoriteshard',
  Metronome = 'metronome',
  Mewniumz = 'mewniumz',
  Mewtwonitex = 'mewtwonitex',
  Mewtwonitey = 'mewtwonitey',
  Micleberry = 'micleberry',
  Mimikiumz = 'mimikiumz',
  Mindplate = 'mindplate',
  Mintberry = 'mintberry',
  Miracleberry = 'miracleberry',
  Miracleseed = 'miracleseed',
  Miraidonspokeball = 'miraidonspokeball',
  Mirrorherb = 'mirrorherb',
  Mistyseed = 'mistyseed',
  Moonball = 'moonball',
  Moonflute = 'moonflute',
  Moonstone = 'moonstone',
  Muscleband = 'muscleband',
  Mysteryberry = 'mysteryberry',
  Mysteryegg = 'mysteryegg',
  Mysticticket = 'mysticticket',
  Mysticwater = 'mysticwater',
  Nanabberry = 'nanabberry',
  Nestball = 'nestball',
  Netball = 'netball',
  Nevermeltice = 'nevermeltice',
  Nlunarizer = 'nlunarizer',
  Nomelberry = 'nomelberry',
  Normalgem = 'normalgem',
  Normaliumz = 'normaliumz',
  Normalterashard = 'normalterashard',
  Nsolarizer = 'nsolarizer',
  Oaksletter = 'oaksletter',
  Oaksparcel = 'oaksparcel',
  Occaberry = 'occaberry',
  Oddincense = 'oddincense',
  Oldamber = 'oldamber',
  Oldcharm = 'oldcharm',
  Oldletter = 'oldletter',
  Oldrod = 'oldrod',
  Oldseamap = 'oldseamap',
  Oranberry = 'oranberry',
  Orangepetal = 'orangepetal',
  Ovalcharm = 'ovalcharm',
  Ovalstone = 'ovalstone',
  Pairoftickets = 'pairoftickets',
  Palpad = 'palpad',
  Pamtreberry = 'pamtreberry',
  Parcel = 'parcel',
  Parkball = 'parkball',
  Pass = 'pass',
  Passhoberry = 'passhoberry',
  Payapaberry = 'payapaberry',
  Pechaberry = 'pechaberry',
  Permit = 'permit',
  Persimberry = 'persimberry',
  Petayaberry = 'petayaberry',
  Photoalbum = 'photoalbum',
  Pidgeotite = 'pidgeotite',
  Pikaniumz = 'pikaniumz',
  Pikashuniumz = 'pikashuniumz',
  Pinapberry = 'pinapberry',
  Pinkbow = 'pinkbow',
  Pinkpetal = 'pinkpetal',
  Pinsirite = 'pinsirite',
  Pixieplate = 'pixieplate',
  Plasmacard = 'plasmacard',
  Plumefossil = 'plumefossil',
  Poffincase = 'poffincase',
  Pointcard = 'pointcard',
  Poisonbarb = 'poisonbarb',
  Poisongem = 'poisongem',
  Poisoniumz = 'poisoniumz',
  Poisonmemory = 'poisonmemory',
  Poisonterashard = 'poisonterashard',
  Pokeball = 'pokeball',
  Pokeblockcase = 'pokeblockcase',
  Pokeblockkit = 'pokeblockkit',
  Pokeflute = 'pokeflute',
  Pokemonboxlink = 'pokemonboxlink',
  Pokeradar = 'pokeradar',
  Polkadotbow = 'polkadotbow',
  Pomegberry = 'pomegberry',
  Potion = 'potion',
  Powderjar = 'powderjar',
  Poweranklet = 'poweranklet',
  Powerband = 'powerband',
  Powerbelt = 'powerbelt',
  Powerbracer = 'powerbracer',
  Powerherb = 'powerherb',
  Powerlens = 'powerlens',
  Powerplantpass = 'powerplantpass',
  Powerweight = 'powerweight',
  Premierball = 'premierball',
  Primariumz = 'primariumz',
  Prismscale = 'prismscale',
  Prisonbottle = 'prisonbottle',
  Professorsmask = 'professorsmask',
  Profsletter = 'profsletter',
  Propcase = 'propcase',
  Protectivepads = 'protectivepads',
  Protector = 'protector',
  Przcureberry = 'przcureberry',
  Psncureberry = 'psncureberry',
  Psychicgem = 'psychicgem',
  Psychicmemory = 'psychicmemory',
  Psychicseed = 'psychicseed',
  Psychicterashard = 'psychicterashard',
  Psychiumz = 'psychiumz',
  Punchingglove = 'punchingglove',
  Purplepetal = 'purplepetal',
  Qualotberry = 'qualotberry',
  Quickball = 'quickball',
  Quickclaw = 'quickclaw',
  Quickpowder = 'quickpowder',
  Rabutaberry = 'rabutaberry',
  Ragecandybar = 'ragecandybar',
  Rainbowflower = 'rainbowflower',
  Rainbowpass = 'rainbowpass',
  Rainbowwing = 'rainbowwing',
  Rarebone = 'rarebone',
  Rawstberry = 'rawstberry',
  Razorclaw = 'razorclaw',
  Razorfang = 'razorfang',
  Razzberry = 'razzberry',
  Reapercloth = 'reapercloth',
  Redcard = 'redcard',
  Redchain = 'redchain',
  Redorb = 'redorb',
  Redpetal = 'redpetal',
  Redscale = 'redscale',
  Repeatball = 'repeatball',
  Revealglass = 'revealglass',
  Ribbonsweet = 'ribbonsweet',
  Ridepager = 'ridepager',
  Rindoberry = 'rindoberry',
  Ringtarget = 'ringtarget',
  Rm1key = 'rm1key',
  Rm2key = 'rm2key',
  Rm4key = 'rm4key',
  Rm6key = 'rm6key',
  Rockgem = 'rockgem',
  Rockincense = 'rockincense',
  Rockiumz = 'rockiumz',
  Rockmemory = 'rockmemory',
  Rockterashard = 'rockterashard',
  Rockyhelmet = 'rockyhelmet',
  Rollerskates = 'rollerskates',
  Roomservice = 'roomservice',
  Rootfossil = 'rootfossil',
  Roseincense = 'roseincense',
  Roseliberry = 'roseliberry',
  Rotombike = 'rotombike',
  Rotomcatalog = 'rotomcatalog',
  Rotomphone = 'rotomphone',
  Rowapberry = 'rowapberry',
  Ruby = 'ruby',
  Rulebook = 'rulebook',
  Rustedshield = 'rustedshield',
  Rustedsword = 'rustedsword',
  Sablenite = 'sablenite',
  Sachet = 'sachet',
  Safariball = 'safariball',
  Safetygoggles = 'safetygoggles',
  Sailfossil = 'sailfossil',
  Salacberry = 'salacberry',
  Salamencite = 'salamencite',
  Sandwhich = 'sandwhich',
  Sapphire = 'sapphire',
  Scanner = 'scanner',
  Scarletbook = 'scarletbook',
  Sceptilite = 'sceptilite',
  Scizorite = 'scizorite',
  Scopelens = 'scopelens',
  Seaincense = 'seaincense',
  Sealbag = 'sealbag',
  Sealcase = 'sealcase',
  Secretkey = 'secretkey',
  Secretpotion = 'secretpotion',
  Sharpbeak = 'sharpbeak',
  Sharpedonite = 'sharpedonite',
  Shedshell = 'shedshell',
  Shellbell = 'shellbell',
  Shinycharm = 'shinycharm',
  Shinystone = 'shinystone',
  Shockdrive = 'shockdrive',
  Shucaberry = 'shucaberry',
  Silkscarf = 'silkscarf',
  Silphscope = 'silphscope',
  Silverpowder = 'silverpowder',
  Silverwing = 'silverwing',
  Sitrusberry = 'sitrusberry',
  Skullfossil = 'skullfossil',
  Skyplate = 'skyplate',
  Slowbronite = 'slowbronite',
  Slowpoketail = 'slowpoketail',
  Smoothrock = 'smoothrock',
  Snorliumz = 'snorliumz',
  Snowball = 'snowball',
  Softsand = 'softsand',
  Solganiumz = 'solganiumz',
  Soniasbook = 'soniasbook',
  Sootsack = 'sootsack',
  Souldew = 'souldew',
  Sparklingstone = 'sparklingstone',
  Spelltag = 'spelltag',
  Spelonberry = 'spelonberry',
  Splashplate = 'splashplate',
  Spookyplate = 'spookyplate',
  Sportball = 'sportball',
  Sprayduck = 'sprayduck',
  Sprinklotad = 'sprinklotad',
  Squirtbottle = 'squirtbottle',
  Ssticket = 'ssticket',
  Starfberry = 'starfberry',
  Starsweet = 'starsweet',
  Steelgem = 'steelgem',
  Steeliumz = 'steeliumz',
  Steelixite = 'steelixite',
  Steelmemory = 'steelmemory',
  Steelterashard = 'steelterashard',
  Stick = 'stick',
  Stickybarb = 'stickybarb',
  Stoneplate = 'stoneplate',
  Storagekey = 'storagekey',
  Strangeball = 'strangeball',
  Strawberrysweet = 'strawberrysweet',
  Suitekey = 'suitekey',
  Sunflute = 'sunflute',
  Sunstone = 'sunstone',
  Superpotion = 'superpotion',
  Superrod = 'superrod',
  Surgebadge = 'surgebadge',
  Swampertite = 'swampertite',
  Sweetapple = 'sweetapple',
  Syrupyapple = 'syrupyapple',
  Tamatoberry = 'tamatoberry',
  Tangaberry = 'tangaberry',
  Tapuniumz = 'tapuniumz',
  Tartapple = 'tartapple',
  Tea = 'tea',
  Teachytv = 'teachytv',
  Teraorb = 'teraorb',
  Terrainextender = 'terrainextender',
  Thickclub = 'thickclub',
  Throatspray = 'throatspray',
  Thunderstone = 'thunderstone',
  Tidalbell = 'tidalbell',
  Timerball = 'timerball',
  Tmcase = 'tmcase',
  Tmvpass = 'tmvpass',
  Townmap = 'townmap',
  Toxicorb = 'toxicorb',
  Toxicplate = 'toxicplate',
  Tr00 = 'tr00',
  Tr01 = 'tr01',
  Tr02 = 'tr02',
  Tr03 = 'tr03',
  Tr04 = 'tr04',
  Tr05 = 'tr05',
  Tr06 = 'tr06',
  Tr07 = 'tr07',
  Tr08 = 'tr08',
  Tr09 = 'tr09',
  Tr10 = 'tr10',
  Tr11 = 'tr11',
  Tr12 = 'tr12',
  Tr13 = 'tr13',
  Tr14 = 'tr14',
  Tr15 = 'tr15',
  Tr16 = 'tr16',
  Tr17 = 'tr17',
  Tr18 = 'tr18',
  Tr19 = 'tr19',
  Tr20 = 'tr20',
  Tr21 = 'tr21',
  Tr22 = 'tr22',
  Tr23 = 'tr23',
  Tr24 = 'tr24',
  Tr25 = 'tr25',
  Tr26 = 'tr26',
  Tr27 = 'tr27',
  Tr28 = 'tr28',
  Tr29 = 'tr29',
  Tr30 = 'tr30',
  Tr31 = 'tr31',
  Tr32 = 'tr32',
  Tr33 = 'tr33',
  Tr34 = 'tr34',
  Tr35 = 'tr35',
  Tr36 = 'tr36',
  Tr37 = 'tr37',
  Tr38 = 'tr38',
  Tr39 = 'tr39',
  Tr40 = 'tr40',
  Tr41 = 'tr41',
  Tr42 = 'tr42',
  Tr43 = 'tr43',
  Tr44 = 'tr44',
  Tr45 = 'tr45',
  Tr46 = 'tr46',
  Tr47 = 'tr47',
  Tr48 = 'tr48',
  Tr49 = 'tr49',
  Tr50 = 'tr50',
  Tr51 = 'tr51',
  Tr52 = 'tr52',
  Tr53 = 'tr53',
  Tr54 = 'tr54',
  Tr55 = 'tr55',
  Tr56 = 'tr56',
  Tr57 = 'tr57',
  Tr58 = 'tr58',
  Tr59 = 'tr59',
  Tr60 = 'tr60',
  Tr61 = 'tr61',
  Tr62 = 'tr62',
  Tr63 = 'tr63',
  Tr64 = 'tr64',
  Tr65 = 'tr65',
  Tr66 = 'tr66',
  Tr67 = 'tr67',
  Tr68 = 'tr68',
  Tr69 = 'tr69',
  Tr70 = 'tr70',
  Tr71 = 'tr71',
  Tr72 = 'tr72',
  Tr73 = 'tr73',
  Tr74 = 'tr74',
  Tr75 = 'tr75',
  Tr76 = 'tr76',
  Tr77 = 'tr77',
  Tr78 = 'tr78',
  Tr79 = 'tr79',
  Tr80 = 'tr80',
  Tr81 = 'tr81',
  Tr82 = 'tr82',
  Tr83 = 'tr83',
  Tr84 = 'tr84',
  Tr85 = 'tr85',
  Tr86 = 'tr86',
  Tr87 = 'tr87',
  Tr88 = 'tr88',
  Tr89 = 'tr89',
  Tr90 = 'tr90',
  Tr91 = 'tr91',
  Tr92 = 'tr92',
  Tr93 = 'tr93',
  Tr94 = 'tr94',
  Tr95 = 'tr95',
  Tr96 = 'tr96',
  Tr97 = 'tr97',
  Tr98 = 'tr98',
  Tr99 = 'tr99',
  Traveltrunk = 'traveltrunk',
  Tripass = 'tripass',
  Twistedspoon = 'twistedspoon',
  Tyranitarite = 'tyranitarite',
  Ultraball = 'ultraball',
  Ultranecroziumz = 'ultranecroziumz',
  Unownreport = 'unownreport',
  Unremarkableteacup = 'unremarkableteacup',
  Upgrade = 'upgrade',
  Utilityumbrella = 'utilityumbrella',
  Venusaurite = 'venusaurite',
  Vilevial = 'vilevial',
  Violetbook = 'violetbook',
  Vsrecorder = 'vsrecorder',
  Vsseeker = 'vsseeker',
  Wacanberry = 'wacanberry',
  Wailmerpail = 'wailmerpail',
  Watergem = 'watergem',
  Wateriumz = 'wateriumz',
  Watermemory = 'watermemory',
  Waterstone = 'waterstone',
  Waterterashard = 'waterterashard',
  Watmelberry = 'watmelberry',
  Waveincense = 'waveincense',
  Weaknesspolicy = 'weaknesspolicy',
  Wellspringmask = 'wellspringmask',
  Wepearberry = 'wepearberry',
  Whippeddream = 'whippeddream',
  Whiteherb = 'whiteherb',
  Widelens = 'widelens',
  Wikiberry = 'wikiberry',
  Wiseglasses = 'wiseglasses',
  Wishingstar = 'wishingstar',
  Workskey = 'workskey',
  Xtransceiver = 'xtransceiver',
  Yacheberry = 'yacheberry',
  Yellowpetal = 'yellowpetal',
  Zapplate = 'zapplate',
  Zoomlens = 'zoomlens',
  Zpowering = 'zpowering',
  Zring = 'zring',
  Zygardecube = 'zygardecube'
}

/** A learnset entry */
export type Learnset = {
  __typename?: 'Learnset';
  /** The back sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  backSprite: Scalars['String']['output'];
  /** The PokéDex colour for the Pokémon */
  color: Scalars['String']['output'];
  /** The moves that are exclusively learned in the Unova Dream World */
  dreamworldMoves?: Maybe<Array<LearnsetMove>>;
  /** The moves that can be passed as egg moves */
  eggMoves?: Maybe<Array<LearnsetMove>>;
  /** The moves that are exclusive to event variants of the Pokémon */
  eventMoves?: Maybe<Array<LearnsetMove>>;
  /** The moves that can be learned through levelling up */
  levelUpMoves?: Maybe<Array<LearnsetLevelUpMove>>;
  /** The dex number for a Pokémon */
  num: Scalars['Int']['output'];
  /** The key of the Pokémon as stored in the API */
  pokemonKey: PokemonEnum;
  /** The shiny back sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  shinyBackSprite: Scalars['String']['output'];
  /** The shiny sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  shinySprite: Scalars['String']['output'];
  /** The species name for a Pokémon */
  species: Scalars['String']['output'];
  /** The sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  sprite: Scalars['String']['output'];
  /** The moves that can be learned from a Technical Machine or Technical Record */
  tmMoves?: Maybe<Array<LearnsetMove>>;
  /** The moves that can be learned from a move tutor */
  tutorMoves?: Maybe<Array<LearnsetMove>>;
  /** The moves that can be learned through virtual console transfer */
  virtualTransferMoves?: Maybe<Array<LearnsetMove>>;
};

/** A learnset level up move entry */
export type LearnsetLevelUpMove = {
  __typename?: 'LearnsetLevelUpMove';
  /** The generation in which this pokémon learned the move this way */
  generation: Scalars['Int']['output'];
  /** The level at which the move is learned */
  level: Scalars['Int']['output'];
  /** The move */
  move: Move;
};

/** A learnset move entry */
export type LearnsetMove = {
  __typename?: 'LearnsetMove';
  /** The generation in which this pokémon learned the move this way */
  generation: Scalars['Int']['output'];
  /** The move */
  move: Move;
};

/** A single Pokémon move entry */
export type Move = {
  __typename?: 'Move';
  /** The accuracy for a move */
  accuracy: Scalars['Int']['output'];
  /** The base power for a move */
  basePower: Scalars['String']['output'];
  /** Bulbapedia page for a move */
  bulbapediaPage: Scalars['String']['output'];
  /** The category for a move */
  category: Scalars['String']['output'];
  /** The contest type for a move */
  contestType?: Maybe<Scalars['String']['output']>;
  /** The long description for a move */
  desc?: Maybe<Scalars['String']['output']>;
  /** Whether this move can be used outside of battle, and if it can what the effect of the field move is */
  isFieldMove?: Maybe<Scalars['String']['output']>;
  /** Whether this move is a G-MAX move, and if it is which Gigantamaxed Pokémon can use it */
  isGMax?: Maybe<Scalars['String']['output']>;
  /** Whether a move is non-standard, and if it is why */
  isNonstandard?: Maybe<Scalars['String']['output']>;
  /** Whether this move is a Z-Move, and if it is the Z-Crystal required to trigger it */
  isZ?: Maybe<Scalars['String']['output']>;
  /** The key of the move as stored in the API */
  key: MovesEnum;
  /** The power this move will have when used with its Max Move equivalent */
  maxMovePower?: Maybe<Scalars['Int']['output']>;
  /** The name for a move */
  name: Scalars['String']['output'];
  /** The power points for a move */
  pp: Scalars['Int']['output'];
  /** The priority for a move */
  priority: Scalars['Int']['output'];
  /** Serebii page for a move */
  serebiiPage: Scalars['String']['output'];
  /** The short description for a move */
  shortDesc: Scalars['String']['output'];
  /** Smogon page for a move */
  smogonPage: Scalars['String']['output'];
  /** The target for a move */
  target: Scalars['String']['output'];
  /** The type for a move */
  type: Scalars['String']['output'];
  /** The power this move will have when used with its Z-move equivalent */
  zMovePower: Scalars['Int']['output'];
};

/** The supported moves */
export enum MovesEnum {
  Absorb = 'absorb',
  Accelerock = 'accelerock',
  Acid = 'acid',
  Acidarmor = 'acidarmor',
  Aciddownpour = 'aciddownpour',
  Acidspray = 'acidspray',
  Acrobatics = 'acrobatics',
  Acupressure = 'acupressure',
  Aerialace = 'aerialace',
  Aeroblast = 'aeroblast',
  Afteryou = 'afteryou',
  Agility = 'agility',
  Aircutter = 'aircutter',
  Airslash = 'airslash',
  Alloutpummeling = 'alloutpummeling',
  Alluringvoice = 'alluringvoice',
  Allyswitch = 'allyswitch',
  Amnesia = 'amnesia',
  Anchorshot = 'anchorshot',
  Ancientpower = 'ancientpower',
  Appleacid = 'appleacid',
  Aquacutter = 'aquacutter',
  Aquajet = 'aquajet',
  Aquaring = 'aquaring',
  Aquastep = 'aquastep',
  Aquatail = 'aquatail',
  Armorcannon = 'armorcannon',
  Armthrust = 'armthrust',
  Aromatherapy = 'aromatherapy',
  Aromaticmist = 'aromaticmist',
  Assist = 'assist',
  Assurance = 'assurance',
  Astonish = 'astonish',
  Astralbarrage = 'astralbarrage',
  Attackorder = 'attackorder',
  Attract = 'attract',
  Aurasphere = 'aurasphere',
  Aurawheel = 'aurawheel',
  Aurorabeam = 'aurorabeam',
  Auroraveil = 'auroraveil',
  Autotomize = 'autotomize',
  Avalanche = 'avalanche',
  Axekick = 'axekick',
  Babydolleyes = 'babydolleyes',
  Baddybad = 'baddybad',
  Banefulbunker = 'banefulbunker',
  Barbbarrage = 'barbbarrage',
  Barrage = 'barrage',
  Barrier = 'barrier',
  Batonpass = 'batonpass',
  Beakblast = 'beakblast',
  Beatup = 'beatup',
  Behemothbash = 'behemothbash',
  Behemothblade = 'behemothblade',
  Belch = 'belch',
  Bellydrum = 'bellydrum',
  Bestow = 'bestow',
  Bide = 'bide',
  Bind = 'bind',
  Bite = 'bite',
  Bitterblade = 'bitterblade',
  Bittermalice = 'bittermalice',
  Blackholeeclipse = 'blackholeeclipse',
  Blastburn = 'blastburn',
  Blazekick = 'blazekick',
  Blazingtorque = 'blazingtorque',
  Bleakwindstorm = 'bleakwindstorm',
  Blizzard = 'blizzard',
  Block = 'block',
  Bloodmoon = 'bloodmoon',
  Bloomdoom = 'bloomdoom',
  Blueflare = 'blueflare',
  Bodypress = 'bodypress',
  Bodyslam = 'bodyslam',
  Boltbeak = 'boltbeak',
  Boltstrike = 'boltstrike',
  Boneclub = 'boneclub',
  Bonemerang = 'bonemerang',
  Bonerush = 'bonerush',
  Boomburst = 'boomburst',
  Bounce = 'bounce',
  Bouncybubble = 'bouncybubble',
  Branchpoke = 'branchpoke',
  Bravebird = 'bravebird',
  Breakingswipe = 'breakingswipe',
  Breakneckblitz = 'breakneckblitz',
  Brickbreak = 'brickbreak',
  Brine = 'brine',
  Brutalswing = 'brutalswing',
  Bubble = 'bubble',
  Bubblebeam = 'bubblebeam',
  Bugbite = 'bugbite',
  Bugbuzz = 'bugbuzz',
  Bulkup = 'bulkup',
  Bulldoze = 'bulldoze',
  Bulletpunch = 'bulletpunch',
  Bulletseed = 'bulletseed',
  Burningbulwark = 'burningbulwark',
  Burningjealousy = 'burningjealousy',
  Burnup = 'burnup',
  Buzzybuzz = 'buzzybuzz',
  Calmmind = 'calmmind',
  Camouflage = 'camouflage',
  Captivate = 'captivate',
  Catastropika = 'catastropika',
  Ceaselessedge = 'ceaselessedge',
  Celebrate = 'celebrate',
  Charge = 'charge',
  Chargebeam = 'chargebeam',
  Charm = 'charm',
  Chatter = 'chatter',
  Chillingwater = 'chillingwater',
  Chillyreception = 'chillyreception',
  Chipaway = 'chipaway',
  Chloroblast = 'chloroblast',
  Circlethrow = 'circlethrow',
  Clamp = 'clamp',
  Clangingscales = 'clangingscales',
  Clangoroussoul = 'clangoroussoul',
  Clangoroussoulblaze = 'clangoroussoulblaze',
  Clearsmog = 'clearsmog',
  Closecombat = 'closecombat',
  Coaching = 'coaching',
  Coil = 'coil',
  Collisioncourse = 'collisioncourse',
  Combattorque = 'combattorque',
  Cometpunch = 'cometpunch',
  Comeuppance = 'comeuppance',
  Confide = 'confide',
  Confuseray = 'confuseray',
  Confusion = 'confusion',
  Constrict = 'constrict',
  Continentalcrush = 'continentalcrush',
  Conversion = 'conversion',
  Conversion2 = 'conversion2',
  Copycat = 'copycat',
  Coreenforcer = 'coreenforcer',
  Corkscrewcrash = 'corkscrewcrash',
  Corrosivegas = 'corrosivegas',
  Cosmicpower = 'cosmicpower',
  Cottonguard = 'cottonguard',
  Cottonspore = 'cottonspore',
  Counter = 'counter',
  Courtchange = 'courtchange',
  Covet = 'covet',
  Crabhammer = 'crabhammer',
  Craftyshield = 'craftyshield',
  Crosschop = 'crosschop',
  Crosspoison = 'crosspoison',
  Crunch = 'crunch',
  Crushclaw = 'crushclaw',
  Crushgrip = 'crushgrip',
  Curse = 'curse',
  Cut = 'cut',
  Darkestlariat = 'darkestlariat',
  Darkpulse = 'darkpulse',
  Darkvoid = 'darkvoid',
  Dazzlinggleam = 'dazzlinggleam',
  Decorate = 'decorate',
  Defendorder = 'defendorder',
  Defensecurl = 'defensecurl',
  Defog = 'defog',
  Destinybond = 'destinybond',
  Detect = 'detect',
  Devastatingdrake = 'devastatingdrake',
  Diamondstorm = 'diamondstorm',
  Dig = 'dig',
  Direclaw = 'direclaw',
  Disable = 'disable',
  Disarmingvoice = 'disarmingvoice',
  Discharge = 'discharge',
  Dive = 'dive',
  Dizzypunch = 'dizzypunch',
  Doodle = 'doodle',
  Doomdesire = 'doomdesire',
  Doubleedge = 'doubleedge',
  Doublehit = 'doublehit',
  Doubleironbash = 'doubleironbash',
  Doublekick = 'doublekick',
  Doubleshock = 'doubleshock',
  Doubleslap = 'doubleslap',
  Doubleteam = 'doubleteam',
  Dracometeor = 'dracometeor',
  Dragonascent = 'dragonascent',
  Dragonbreath = 'dragonbreath',
  Dragoncheer = 'dragoncheer',
  Dragonclaw = 'dragonclaw',
  Dragondance = 'dragondance',
  Dragondarts = 'dragondarts',
  Dragonenergy = 'dragonenergy',
  Dragonhammer = 'dragonhammer',
  Dragonpulse = 'dragonpulse',
  Dragonrage = 'dragonrage',
  Dragonrush = 'dragonrush',
  Dragontail = 'dragontail',
  Drainingkiss = 'drainingkiss',
  Drainpunch = 'drainpunch',
  Dreameater = 'dreameater',
  Drillpeck = 'drillpeck',
  Drillrun = 'drillrun',
  Drumbeating = 'drumbeating',
  Dualchop = 'dualchop',
  Dualwingbeat = 'dualwingbeat',
  Dynamaxcannon = 'dynamaxcannon',
  Dynamicpunch = 'dynamicpunch',
  Earthpower = 'earthpower',
  Earthquake = 'earthquake',
  Echoedvoice = 'echoedvoice',
  Eerieimpulse = 'eerieimpulse',
  Eeriespell = 'eeriespell',
  Eggbomb = 'eggbomb',
  Electricterrain = 'electricterrain',
  Electrify = 'electrify',
  Electroball = 'electroball',
  Electrodrift = 'electrodrift',
  Electroshot = 'electroshot',
  Electroweb = 'electroweb',
  Embargo = 'embargo',
  Ember = 'ember',
  Encore = 'encore',
  Endeavor = 'endeavor',
  Endure = 'endure',
  Energyball = 'energyball',
  Entrainment = 'entrainment',
  Eruption = 'eruption',
  Esperwing = 'esperwing',
  Eternabeam = 'eternabeam',
  Expandingforce = 'expandingforce',
  Explosion = 'explosion',
  Extrasensory = 'extrasensory',
  Extremeevoboost = 'extremeevoboost',
  Extremespeed = 'extremespeed',
  Facade = 'facade',
  Fairylock = 'fairylock',
  Fairywind = 'fairywind',
  Fakeout = 'fakeout',
  Faketears = 'faketears',
  Falsesurrender = 'falsesurrender',
  Falseswipe = 'falseswipe',
  Featherdance = 'featherdance',
  Feint = 'feint',
  Feintattack = 'feintattack',
  Fellstinger = 'fellstinger',
  Ficklebeam = 'ficklebeam',
  Fierydance = 'fierydance',
  Fierywrath = 'fierywrath',
  Filletaway = 'filletaway',
  Finalgambit = 'finalgambit',
  Fireblast = 'fireblast',
  Firefang = 'firefang',
  Firelash = 'firelash',
  Firepledge = 'firepledge',
  Firepunch = 'firepunch',
  Firespin = 'firespin',
  Firstimpression = 'firstimpression',
  Fishiousrend = 'fishiousrend',
  Fissure = 'fissure',
  Flail = 'flail',
  Flameburst = 'flameburst',
  Flamecharge = 'flamecharge',
  Flamethrower = 'flamethrower',
  Flamewheel = 'flamewheel',
  Flareblitz = 'flareblitz',
  Flash = 'flash',
  Flashcannon = 'flashcannon',
  Flatter = 'flatter',
  Fleurcannon = 'fleurcannon',
  Fling = 'fling',
  Flipturn = 'flipturn',
  Floatyfall = 'floatyfall',
  Floralhealing = 'floralhealing',
  Flowershield = 'flowershield',
  Flowertrick = 'flowertrick',
  Fly = 'fly',
  Flyingpress = 'flyingpress',
  Focusblast = 'focusblast',
  Focusenergy = 'focusenergy',
  Focuspunch = 'focuspunch',
  Followme = 'followme',
  Forcepalm = 'forcepalm',
  Foresight = 'foresight',
  Forestscurse = 'forestscurse',
  Foulplay = 'foulplay',
  Freezedry = 'freezedry',
  Freezeshock = 'freezeshock',
  Freezingglare = 'freezingglare',
  Freezyfrost = 'freezyfrost',
  Frenzyplant = 'frenzyplant',
  Frostbreath = 'frostbreath',
  Frustration = 'frustration',
  Furyattack = 'furyattack',
  Furycutter = 'furycutter',
  Furyswipes = 'furyswipes',
  Fusionbolt = 'fusionbolt',
  Fusionflare = 'fusionflare',
  Futuresight = 'futuresight',
  Gastroacid = 'gastroacid',
  Geargrind = 'geargrind',
  Gearup = 'gearup',
  Genesissupernova = 'genesissupernova',
  Geomancy = 'geomancy',
  Gigadrain = 'gigadrain',
  Gigaimpact = 'gigaimpact',
  Gigatonhammer = 'gigatonhammer',
  Gigavolthavoc = 'gigavolthavoc',
  Glaciallance = 'glaciallance',
  Glaciate = 'glaciate',
  Glaiverush = 'glaiverush',
  Glare = 'glare',
  Glitzyglow = 'glitzyglow',
  Gmaxbefuddle = 'gmaxbefuddle',
  Gmaxcannonade = 'gmaxcannonade',
  Gmaxcentiferno = 'gmaxcentiferno',
  Gmaxchistrike = 'gmaxchistrike',
  Gmaxcuddle = 'gmaxcuddle',
  Gmaxdepletion = 'gmaxdepletion',
  Gmaxdrumsolo = 'gmaxdrumsolo',
  Gmaxfinale = 'gmaxfinale',
  Gmaxfireball = 'gmaxfireball',
  Gmaxfoamburst = 'gmaxfoamburst',
  Gmaxgoldrush = 'gmaxgoldrush',
  Gmaxgravitas = 'gmaxgravitas',
  Gmaxhydrosnipe = 'gmaxhydrosnipe',
  Gmaxmalodor = 'gmaxmalodor',
  Gmaxmeltdown = 'gmaxmeltdown',
  Gmaxoneblow = 'gmaxoneblow',
  Gmaxrapidflow = 'gmaxrapidflow',
  Gmaxreplenish = 'gmaxreplenish',
  Gmaxresonance = 'gmaxresonance',
  Gmaxsandblast = 'gmaxsandblast',
  Gmaxsmite = 'gmaxsmite',
  Gmaxsnooze = 'gmaxsnooze',
  Gmaxsteelsurge = 'gmaxsteelsurge',
  Gmaxstonesurge = 'gmaxstonesurge',
  Gmaxstunshock = 'gmaxstunshock',
  Gmaxsweetness = 'gmaxsweetness',
  Gmaxtartness = 'gmaxtartness',
  Gmaxterror = 'gmaxterror',
  Gmaxvinelash = 'gmaxvinelash',
  Gmaxvolcalith = 'gmaxvolcalith',
  Gmaxvoltcrash = 'gmaxvoltcrash',
  Gmaxwildfire = 'gmaxwildfire',
  Gmaxwindrage = 'gmaxwindrage',
  Grassknot = 'grassknot',
  Grasspledge = 'grasspledge',
  Grasswhistle = 'grasswhistle',
  Grassyglide = 'grassyglide',
  Grassyterrain = 'grassyterrain',
  Gravapple = 'gravapple',
  Gravity = 'gravity',
  Growl = 'growl',
  Growth = 'growth',
  Grudge = 'grudge',
  Guardianofalola = 'guardianofalola',
  Guardsplit = 'guardsplit',
  Guardswap = 'guardswap',
  Guillotine = 'guillotine',
  Gunkshot = 'gunkshot',
  Gust = 'gust',
  Gyroball = 'gyroball',
  Hail = 'hail',
  Hammerarm = 'hammerarm',
  Happyhour = 'happyhour',
  Harden = 'harden',
  Hardpress = 'hardpress',
  Haze = 'haze',
  Headbutt = 'headbutt',
  Headcharge = 'headcharge',
  Headlongrush = 'headlongrush',
  Headsmash = 'headsmash',
  Healbell = 'healbell',
  Healblock = 'healblock',
  Healingwish = 'healingwish',
  Healorder = 'healorder',
  Healpulse = 'healpulse',
  Heartstamp = 'heartstamp',
  Heartswap = 'heartswap',
  Heatcrash = 'heatcrash',
  Heatwave = 'heatwave',
  Heavyslam = 'heavyslam',
  Helpinghand = 'helpinghand',
  Hex = 'hex',
  Hiddenpower = 'hiddenpower',
  Hiddenpowerbug = 'hiddenpowerbug',
  Hiddenpowerdark = 'hiddenpowerdark',
  Hiddenpowerdragon = 'hiddenpowerdragon',
  Hiddenpowerelectric = 'hiddenpowerelectric',
  Hiddenpowerfighting = 'hiddenpowerfighting',
  Hiddenpowerfire = 'hiddenpowerfire',
  Hiddenpowerflying = 'hiddenpowerflying',
  Hiddenpowerghost = 'hiddenpowerghost',
  Hiddenpowergrass = 'hiddenpowergrass',
  Hiddenpowerground = 'hiddenpowerground',
  Hiddenpowerice = 'hiddenpowerice',
  Hiddenpowerpoison = 'hiddenpowerpoison',
  Hiddenpowerpsychic = 'hiddenpowerpsychic',
  Hiddenpowerrock = 'hiddenpowerrock',
  Hiddenpowersteel = 'hiddenpowersteel',
  Hiddenpowerwater = 'hiddenpowerwater',
  Highhorsepower = 'highhorsepower',
  Highjumpkick = 'highjumpkick',
  Holdback = 'holdback',
  Holdhands = 'holdhands',
  Honeclaws = 'honeclaws',
  Hornattack = 'hornattack',
  Horndrill = 'horndrill',
  Hornleech = 'hornleech',
  Howl = 'howl',
  Hurricane = 'hurricane',
  Hydrocannon = 'hydrocannon',
  Hydropump = 'hydropump',
  Hydrosteam = 'hydrosteam',
  Hydrovortex = 'hydrovortex',
  Hyperbeam = 'hyperbeam',
  Hyperdrill = 'hyperdrill',
  Hyperfang = 'hyperfang',
  Hyperspacefury = 'hyperspacefury',
  Hyperspacehole = 'hyperspacehole',
  Hypervoice = 'hypervoice',
  Hypnosis = 'hypnosis',
  Iceball = 'iceball',
  Icebeam = 'icebeam',
  Iceburn = 'iceburn',
  Icefang = 'icefang',
  Icehammer = 'icehammer',
  Icepunch = 'icepunch',
  Iceshard = 'iceshard',
  Icespinner = 'icespinner',
  Iciclecrash = 'iciclecrash',
  Iciclespear = 'iciclespear',
  Icywind = 'icywind',
  Imprison = 'imprison',
  Incinerate = 'incinerate',
  Infernalparade = 'infernalparade',
  Inferno = 'inferno',
  Infernooverdrive = 'infernooverdrive',
  Infestation = 'infestation',
  Ingrain = 'ingrain',
  Instruct = 'instruct',
  Iondeluge = 'iondeluge',
  Irondefense = 'irondefense',
  Ironhead = 'ironhead',
  Irontail = 'irontail',
  Ivycudgel = 'ivycudgel',
  Jawlock = 'jawlock',
  Jetpunch = 'jetpunch',
  Judgment = 'judgment',
  Jumpkick = 'jumpkick',
  Junglehealing = 'junglehealing',
  Karatechop = 'karatechop',
  Kinesis = 'kinesis',
  Kingsshield = 'kingsshield',
  Knockoff = 'knockoff',
  Kowtowcleave = 'kowtowcleave',
  Landswrath = 'landswrath',
  Laserfocus = 'laserfocus',
  Lashout = 'lashout',
  Lastresort = 'lastresort',
  Lastrespects = 'lastrespects',
  Lavaplume = 'lavaplume',
  Leafage = 'leafage',
  Leafblade = 'leafblade',
  Leafstorm = 'leafstorm',
  Leaftornado = 'leaftornado',
  Leechlife = 'leechlife',
  Leechseed = 'leechseed',
  Leer = 'leer',
  Letssnuggleforever = 'letssnuggleforever',
  Lick = 'lick',
  Lifedew = 'lifedew',
  Lightofruin = 'lightofruin',
  Lightscreen = 'lightscreen',
  Lightthatburnsthesky = 'lightthatburnsthesky',
  Liquidation = 'liquidation',
  Lockon = 'lockon',
  Lovelykiss = 'lovelykiss',
  Lowkick = 'lowkick',
  Lowsweep = 'lowsweep',
  Luckychant = 'luckychant',
  Luminacrash = 'luminacrash',
  Lunarblessing = 'lunarblessing',
  Lunardance = 'lunardance',
  Lunge = 'lunge',
  Lusterpurge = 'lusterpurge',
  Machpunch = 'machpunch',
  Magicalleaf = 'magicalleaf',
  Magicaltorque = 'magicaltorque',
  Magiccoat = 'magiccoat',
  Magicpowder = 'magicpowder',
  Magicroom = 'magicroom',
  Magmastorm = 'magmastorm',
  Magnetbomb = 'magnetbomb',
  Magneticflux = 'magneticflux',
  Magnetrise = 'magnetrise',
  Magnitude = 'magnitude',
  Makeitrain = 'makeitrain',
  Maliciousmoonsault = 'maliciousmoonsault',
  Malignantchain = 'malignantchain',
  Matblock = 'matblock',
  Matchagotcha = 'matchagotcha',
  Maxairstream = 'maxairstream',
  Maxdarkness = 'maxdarkness',
  Maxflare = 'maxflare',
  Maxflutterby = 'maxflutterby',
  Maxgeyser = 'maxgeyser',
  Maxguard = 'maxguard',
  Maxhailstorm = 'maxhailstorm',
  Maxknuckle = 'maxknuckle',
  Maxlightning = 'maxlightning',
  Maxmindstorm = 'maxmindstorm',
  Maxooze = 'maxooze',
  Maxovergrowth = 'maxovergrowth',
  Maxphantasm = 'maxphantasm',
  Maxquake = 'maxquake',
  Maxrockfall = 'maxrockfall',
  Maxstarfall = 'maxstarfall',
  Maxsteelspike = 'maxsteelspike',
  Maxstrike = 'maxstrike',
  Maxwyrmwind = 'maxwyrmwind',
  Meanlook = 'meanlook',
  Meditate = 'meditate',
  Mefirst = 'mefirst',
  Megadrain = 'megadrain',
  Megahorn = 'megahorn',
  Megakick = 'megakick',
  Megapunch = 'megapunch',
  Memento = 'memento',
  Menacingmoonrazemaelstrom = 'menacingmoonrazemaelstrom',
  Metalburst = 'metalburst',
  Metalclaw = 'metalclaw',
  Metalsound = 'metalsound',
  Meteorassault = 'meteorassault',
  Meteorbeam = 'meteorbeam',
  Meteormash = 'meteormash',
  Metronome = 'metronome',
  Mightycleave = 'mightycleave',
  Milkdrink = 'milkdrink',
  Mimic = 'mimic',
  Mindblown = 'mindblown',
  Mindreader = 'mindreader',
  Minimize = 'minimize',
  Miracleeye = 'miracleeye',
  Mirrorcoat = 'mirrorcoat',
  Mirrormove = 'mirrormove',
  Mirrorshot = 'mirrorshot',
  Mist = 'mist',
  Mistball = 'mistball',
  Mistyexplosion = 'mistyexplosion',
  Mistyterrain = 'mistyterrain',
  Moonblast = 'moonblast',
  Moongeistbeam = 'moongeistbeam',
  Moonlight = 'moonlight',
  Morningsun = 'morningsun',
  Mortalspin = 'mortalspin',
  Mountaingale = 'mountaingale',
  Mudbomb = 'mudbomb',
  Muddywater = 'muddywater',
  Mudshot = 'mudshot',
  Mudslap = 'mudslap',
  Mudsport = 'mudsport',
  Multiattack = 'multiattack',
  Mysticalfire = 'mysticalfire',
  Mysticalpower = 'mysticalpower',
  Nastyplot = 'nastyplot',
  Naturalgift = 'naturalgift',
  Naturepower = 'naturepower',
  Naturesmadness = 'naturesmadness',
  Needlearm = 'needlearm',
  Neverendingnightmare = 'neverendingnightmare',
  Nightdaze = 'nightdaze',
  Nightmare = 'nightmare',
  Nightshade = 'nightshade',
  Nightslash = 'nightslash',
  Nobleroar = 'nobleroar',
  Noretreat = 'noretreat',
  Noxioustorque = 'noxioustorque',
  Nuzzle = 'nuzzle',
  Oblivionwing = 'oblivionwing',
  Obstruct = 'obstruct',
  Oceanicoperetta = 'oceanicoperetta',
  Octazooka = 'octazooka',
  Octolock = 'octolock',
  Odorsleuth = 'odorsleuth',
  Ominouswind = 'ominouswind',
  Orderup = 'orderup',
  Originpulse = 'originpulse',
  Outrage = 'outrage',
  Overdrive = 'overdrive',
  Overheat = 'overheat',
  Painsplit = 'painsplit',
  Paleowave = 'paleowave',
  Paraboliccharge = 'paraboliccharge',
  Partingshot = 'partingshot',
  Payback = 'payback',
  Payday = 'payday',
  Peck = 'peck',
  Perishsong = 'perishsong',
  Petalblizzard = 'petalblizzard',
  Petaldance = 'petaldance',
  Phantomforce = 'phantomforce',
  Photongeyser = 'photongeyser',
  Pikapapow = 'pikapapow',
  Pinmissile = 'pinmissile',
  Plasmafists = 'plasmafists',
  Playnice = 'playnice',
  Playrough = 'playrough',
  Pluck = 'pluck',
  Poisonfang = 'poisonfang',
  Poisongas = 'poisongas',
  Poisonjab = 'poisonjab',
  Poisonpowder = 'poisonpowder',
  Poisonsting = 'poisonsting',
  Poisontail = 'poisontail',
  Pollenpuff = 'pollenpuff',
  Poltergeist = 'poltergeist',
  Populationbomb = 'populationbomb',
  Pounce = 'pounce',
  Pound = 'pound',
  Powder = 'powder',
  Powdersnow = 'powdersnow',
  Powergem = 'powergem',
  Powershift = 'powershift',
  Powersplit = 'powersplit',
  Powerswap = 'powerswap',
  Powertrick = 'powertrick',
  Powertrip = 'powertrip',
  Poweruppunch = 'poweruppunch',
  Powerwhip = 'powerwhip',
  Precipiceblades = 'precipiceblades',
  Present = 'present',
  Prismaticlaser = 'prismaticlaser',
  Protect = 'protect',
  Psybeam = 'psybeam',
  Psyblade = 'psyblade',
  Psychic = 'psychic',
  Psychicfangs = 'psychicfangs',
  Psychicnoise = 'psychicnoise',
  Psychicterrain = 'psychicterrain',
  Psychoboost = 'psychoboost',
  Psychocut = 'psychocut',
  Psychoshift = 'psychoshift',
  Psychup = 'psychup',
  Psyshieldbash = 'psyshieldbash',
  Psyshock = 'psyshock',
  Psystrike = 'psystrike',
  Psywave = 'psywave',
  Pulverizingpancake = 'pulverizingpancake',
  Punishment = 'punishment',
  Purify = 'purify',
  Pursuit = 'pursuit',
  Pyroball = 'pyroball',
  Quash = 'quash',
  Quickattack = 'quickattack',
  Quickguard = 'quickguard',
  Quiverdance = 'quiverdance',
  Rage = 'rage',
  Ragefist = 'ragefist',
  Ragepowder = 'ragepowder',
  Ragingbull = 'ragingbull',
  Ragingfury = 'ragingfury',
  Raindance = 'raindance',
  Rapidspin = 'rapidspin',
  Razorleaf = 'razorleaf',
  Razorshell = 'razorshell',
  Razorwind = 'razorwind',
  Recover = 'recover',
  Recycle = 'recycle',
  Reflect = 'reflect',
  Reflecttype = 'reflecttype',
  Refresh = 'refresh',
  Relicsong = 'relicsong',
  Rest = 'rest',
  Retaliate = 'retaliate',
  Return = 'return',
  Revelationdance = 'revelationdance',
  Revenge = 'revenge',
  Reversal = 'reversal',
  Revivalblessing = 'revivalblessing',
  Risingvoltage = 'risingvoltage',
  Roar = 'roar',
  Roaroftime = 'roaroftime',
  Rockblast = 'rockblast',
  Rockclimb = 'rockclimb',
  Rockpolish = 'rockpolish',
  Rockslide = 'rockslide',
  Rocksmash = 'rocksmash',
  Rockthrow = 'rockthrow',
  Rocktomb = 'rocktomb',
  Rockwrecker = 'rockwrecker',
  Roleplay = 'roleplay',
  Rollingkick = 'rollingkick',
  Rollout = 'rollout',
  Roost = 'roost',
  Rototiller = 'rototiller',
  Round = 'round',
  Ruination = 'ruination',
  Sacredfire = 'sacredfire',
  Sacredsword = 'sacredsword',
  Safeguard = 'safeguard',
  Saltcure = 'saltcure',
  Sandattack = 'sandattack',
  Sandsearstorm = 'sandsearstorm',
  Sandstorm = 'sandstorm',
  Sandtomb = 'sandtomb',
  Sappyseed = 'sappyseed',
  Savagespinout = 'savagespinout',
  Scald = 'scald',
  Scaleshot = 'scaleshot',
  Scaryface = 'scaryface',
  Scorchingsands = 'scorchingsands',
  Scratch = 'scratch',
  Screech = 'screech',
  Searingshot = 'searingshot',
  Searingsunrazesmash = 'searingsunrazesmash',
  Secretpower = 'secretpower',
  Secretsword = 'secretsword',
  Seedbomb = 'seedbomb',
  Seedflare = 'seedflare',
  Seismictoss = 'seismictoss',
  Selfdestruct = 'selfdestruct',
  Shadowball = 'shadowball',
  Shadowbone = 'shadowbone',
  Shadowclaw = 'shadowclaw',
  Shadowforce = 'shadowforce',
  Shadowpunch = 'shadowpunch',
  Shadowsneak = 'shadowsneak',
  Shadowstrike = 'shadowstrike',
  Sharpen = 'sharpen',
  Shatteredpsyche = 'shatteredpsyche',
  Shedtail = 'shedtail',
  Sheercold = 'sheercold',
  Shellsidearm = 'shellsidearm',
  Shellsmash = 'shellsmash',
  Shelltrap = 'shelltrap',
  Shelter = 'shelter',
  Shiftgear = 'shiftgear',
  Shockwave = 'shockwave',
  Shoreup = 'shoreup',
  Signalbeam = 'signalbeam',
  Silktrap = 'silktrap',
  Silverwind = 'silverwind',
  Simplebeam = 'simplebeam',
  Sing = 'sing',
  Sinisterarrowraid = 'sinisterarrowraid',
  Sizzlyslide = 'sizzlyslide',
  Sketch = 'sketch',
  Skillswap = 'skillswap',
  Skittersmack = 'skittersmack',
  Skullbash = 'skullbash',
  Skyattack = 'skyattack',
  Skydrop = 'skydrop',
  Skyuppercut = 'skyuppercut',
  Slackoff = 'slackoff',
  Slam = 'slam',
  Slash = 'slash',
  Sleeppowder = 'sleeppowder',
  Sleeptalk = 'sleeptalk',
  Sludge = 'sludge',
  Sludgebomb = 'sludgebomb',
  Sludgewave = 'sludgewave',
  Smackdown = 'smackdown',
  Smartstrike = 'smartstrike',
  Smellingsalts = 'smellingsalts',
  Smog = 'smog',
  Smokescreen = 'smokescreen',
  Snaptrap = 'snaptrap',
  Snarl = 'snarl',
  Snatch = 'snatch',
  Snipeshot = 'snipeshot',
  Snore = 'snore',
  Snowscape = 'snowscape',
  Soak = 'soak',
  Softboiled = 'softboiled',
  Solarbeam = 'solarbeam',
  Solarblade = 'solarblade',
  Sonicboom = 'sonicboom',
  Soulstealing7starstrike = 'soulstealing7starstrike',
  Spacialrend = 'spacialrend',
  Spark = 'spark',
  Sparklingaria = 'sparklingaria',
  Sparklyswirl = 'sparklyswirl',
  Spectralthief = 'spectralthief',
  Speedswap = 'speedswap',
  Spicyextract = 'spicyextract',
  Spiderweb = 'spiderweb',
  Spikecannon = 'spikecannon',
  Spikes = 'spikes',
  Spikyshield = 'spikyshield',
  Spinout = 'spinout',
  Spiritbreak = 'spiritbreak',
  Spiritshackle = 'spiritshackle',
  Spite = 'spite',
  Spitup = 'spitup',
  Splash = 'splash',
  Splinteredstormshards = 'splinteredstormshards',
  Splishysplash = 'splishysplash',
  Spore = 'spore',
  Spotlight = 'spotlight',
  Springtidestorm = 'springtidestorm',
  Stealthrock = 'stealthrock',
  Steameruption = 'steameruption',
  Steamroller = 'steamroller',
  Steelbeam = 'steelbeam',
  Steelroller = 'steelroller',
  Steelwing = 'steelwing',
  Stickyweb = 'stickyweb',
  Stockpile = 'stockpile',
  Stokedsparksurfer = 'stokedsparksurfer',
  Stomp = 'stomp',
  Stompingtantrum = 'stompingtantrum',
  Stoneaxe = 'stoneaxe',
  Stoneedge = 'stoneedge',
  Storedpower = 'storedpower',
  Stormthrow = 'stormthrow',
  Strangesteam = 'strangesteam',
  Strength = 'strength',
  Strengthsap = 'strengthsap',
  Stringshot = 'stringshot',
  Struggle = 'struggle',
  Strugglebug = 'strugglebug',
  Stuffcheeks = 'stuffcheeks',
  Stunspore = 'stunspore',
  Submission = 'submission',
  Substitute = 'substitute',
  Subzeroslammer = 'subzeroslammer',
  Suckerpunch = 'suckerpunch',
  Sunnyday = 'sunnyday',
  Sunsteelstrike = 'sunsteelstrike',
  Supercellslam = 'supercellslam',
  Superfang = 'superfang',
  Superpower = 'superpower',
  Supersonic = 'supersonic',
  Supersonicskystrike = 'supersonicskystrike',
  Surf = 'surf',
  Surgingstrikes = 'surgingstrikes',
  Swagger = 'swagger',
  Swallow = 'swallow',
  Sweetkiss = 'sweetkiss',
  Sweetscent = 'sweetscent',
  Swift = 'swift',
  Switcheroo = 'switcheroo',
  Swordsdance = 'swordsdance',
  Synchronoise = 'synchronoise',
  Synthesis = 'synthesis',
  Syrupbomb = 'syrupbomb',
  Tachyoncutter = 'tachyoncutter',
  Tackle = 'tackle',
  Tailglow = 'tailglow',
  Tailslap = 'tailslap',
  Tailwhip = 'tailwhip',
  Tailwind = 'tailwind',
  Takedown = 'takedown',
  Takeheart = 'takeheart',
  Tarshot = 'tarshot',
  Taunt = 'taunt',
  Tearfullook = 'tearfullook',
  Teatime = 'teatime',
  Technoblast = 'technoblast',
  Tectonicrage = 'tectonicrage',
  Teeterdance = 'teeterdance',
  Telekinesis = 'telekinesis',
  Teleport = 'teleport',
  Temperflare = 'temperflare',
  Tenmillionvoltthunderbolt = 'tenmillionvoltthunderbolt',
  Terablast = 'terablast',
  Terastarstorm = 'terastarstorm',
  Terrainpulse = 'terrainpulse',
  Thief = 'thief',
  Thousandarrows = 'thousandarrows',
  Thousandwaves = 'thousandwaves',
  Thrash = 'thrash',
  Throatchop = 'throatchop',
  Thunder = 'thunder',
  Thunderbolt = 'thunderbolt',
  Thundercage = 'thundercage',
  Thunderclap = 'thunderclap',
  Thunderfang = 'thunderfang',
  Thunderouskick = 'thunderouskick',
  Thunderpunch = 'thunderpunch',
  Thundershock = 'thundershock',
  Thunderwave = 'thunderwave',
  Tickle = 'tickle',
  Tidyup = 'tidyup',
  Topsyturvy = 'topsyturvy',
  Torchsong = 'torchsong',
  Torment = 'torment',
  Toxic = 'toxic',
  Toxicspikes = 'toxicspikes',
  Toxicthread = 'toxicthread',
  Trailblaze = 'trailblaze',
  Transform = 'transform',
  Triattack = 'triattack',
  Trick = 'trick',
  Trickortreat = 'trickortreat',
  Trickroom = 'trickroom',
  Triplearrows = 'triplearrows',
  Tripleaxel = 'tripleaxel',
  Tripledive = 'tripledive',
  Triplekick = 'triplekick',
  Tropkick = 'tropkick',
  Trumpcard = 'trumpcard',
  Twinbeam = 'twinbeam',
  Twineedle = 'twineedle',
  Twinkletackle = 'twinkletackle',
  Twister = 'twister',
  Upperhand = 'upperhand',
  Uproar = 'uproar',
  Uturn = 'uturn',
  Vacuumwave = 'vacuumwave',
  Vcreate = 'vcreate',
  Veeveevolley = 'veeveevolley',
  Venomdrench = 'venomdrench',
  Venoshock = 'venoshock',
  Victorydance = 'victorydance',
  Vinewhip = 'vinewhip',
  Visegrip = 'visegrip',
  Vitalthrow = 'vitalthrow',
  Voltswitch = 'voltswitch',
  Volttackle = 'volttackle',
  Wakeupslap = 'wakeupslap',
  Waterfall = 'waterfall',
  Watergun = 'watergun',
  Waterpledge = 'waterpledge',
  Waterpulse = 'waterpulse',
  Watershuriken = 'watershuriken',
  Watersport = 'watersport',
  Waterspout = 'waterspout',
  Wavecrash = 'wavecrash',
  Weatherball = 'weatherball',
  Whirlpool = 'whirlpool',
  Whirlwind = 'whirlwind',
  Wickedblow = 'wickedblow',
  Wickedtorque = 'wickedtorque',
  Wideguard = 'wideguard',
  Wildboltstorm = 'wildboltstorm',
  Wildcharge = 'wildcharge',
  Willowisp = 'willowisp',
  Wingattack = 'wingattack',
  Wish = 'wish',
  Withdraw = 'withdraw',
  Wonderroom = 'wonderroom',
  Woodhammer = 'woodhammer',
  Workup = 'workup',
  Worryseed = 'worryseed',
  Wrap = 'wrap',
  Wringout = 'wringout',
  Xscissor = 'xscissor',
  Yawn = 'yawn',
  Zapcannon = 'zapcannon',
  Zenheadbutt = 'zenheadbutt',
  Zingzap = 'zingzap',
  Zippyzap = 'zippyzap'
}

/** A Pokémon's entry */
export type Pokemon = {
  __typename?: 'Pokemon';
  /** The abilities for a Pokémon */
  abilities: Abilities;
  /** The back sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  backSprite: Scalars['String']['output'];
  /** Base form if this entry describes an alternate form */
  baseForme?: Maybe<Scalars['String']['output']>;
  /** Base species if this entry describes a special form */
  baseSpecies?: Maybe<Scalars['String']['output']>;
  /** Base stats for a Pokémon */
  baseStats: Stats;
  /** The total of all base stats for a Pokémon */
  baseStatsTotal: Scalars['Int']['output'];
  /** Bulbapedia page for a Pokémon */
  bulbapediaPage: Scalars['String']['output'];
  /** The catch rate data for a Pokémon */
  catchRate?: Maybe<CatchRate>;
  /** The classification of a Pokémon as listed in the Pokedex */
  classification?: Maybe<Scalars['String']['output']>;
  /** The colour of a Pokémon as listed in the Pokedex */
  color: Scalars['String']['output'];
  /** Any other *cosmetic* forms for a Pokémon, distinguished from other formes as cosmetic formes only change the look of the Pokémon, while other formes might also change an ability, move set or other data. */
  cosmeticFormes?: Maybe<Array<Scalars['String']['output']>>;
  /** An URL to an mp3 file of the Pokémon's cry. */
  cry?: Maybe<Scalars['String']['output']>;
  /** The egg groups a Pokémon is in */
  eggGroups?: Maybe<Array<Scalars['String']['output']>>;
  /** EV yields for a Pokémon */
  evYields: EvYields;
  /** The evolution level, or special method, for a Pokémon */
  evolutionLevel?: Maybe<Scalars['String']['output']>;
  /** The evolutions for a Pokémon, if any */
  evolutions?: Maybe<Array<Pokemon>>;
  /** The flavor texts for a Pokémon */
  flavorTexts: Array<Flavor>;
  /** The form identifier of a Pokémon */
  forme?: Maybe<Scalars['String']['output']>;
  /** The single letter identifier of the form */
  formeLetter?: Maybe<Scalars['String']['output']>;
  /** The gender data for a Pokémon */
  gender: Gender;
  /** The height of a Pokémon in meters */
  height: Scalars['Float']['output'];
  /** The International Phonetic Alphabet (IPA) representation of the name of the Pokémon */
  ipa?: Maybe<Scalars['String']['output']>;
  /** Whether the egg of a Pokémon is obtainable */
  isEggObtainable: Scalars['Boolean']['output'];
  /** The key of the Pokémon as stored in the API */
  key: PokemonEnum;
  /** The learnset for this pokemon */
  learnsets?: Maybe<GenerationalPokemonLearnset>;
  /** Whether this Pokémon is a legendary Pokémon. The list is based on what is provided by Bulbapedia. */
  legendary: Scalars['Boolean']['output'];
  /** The levelling rate of a Pokémon */
  levellingRate?: Maybe<Scalars['String']['output']>;
  /** The maximum number of steps required for the egg of a Pokémon to hatch */
  maximumHatchTime?: Maybe<Scalars['Int']['output']>;
  /** The minimum number of steps required for the egg of a Pokémon to hatch */
  minimumHatchTime?: Maybe<Scalars['Int']['output']>;
  /** Whether this Pokémon is a mythical Pokémon. The list is based on what is provided by Bulbapedia. */
  mythical: Scalars['Boolean']['output'];
  /** The dex number for a Pokémon */
  num: Scalars['Int']['output'];
  /** Any other forms for a Pokémon */
  otherFormes?: Maybe<Array<Scalars['String']['output']>>;
  /** The preevolutions for a Pokémon, if any */
  preevolutions?: Maybe<Array<Pokemon>>;
  /** The respelling of the name of the Pokémon */
  respelling?: Maybe<Scalars['String']['output']>;
  /** Serebii page for a Pokémon */
  serebiiPage: Scalars['String']['output'];
  /** The shiny back sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  shinyBackSprite: Scalars['String']['output'];
  /** The shiny sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  shinySprite: Scalars['String']['output'];
  /** Smogon page for a Pokémon */
  smogonPage: Scalars['String']['output'];
  /** The smogon tier a Pokémon falls under */
  smogonTier: Scalars['String']['output'];
  /** The species name for a Pokémon */
  species: Scalars['String']['output'];
  /** The sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive */
  sprite: Scalars['String']['output'];
  /** The types for a Pokémon */
  types: Array<PokemonType>;
  /** The weight of a Pokémon in kilograms */
  weight: Scalars['Float']['output'];
};

/** The supported Pokémon */
export enum PokemonEnum {
  Ababo = 'ababo',
  Abomasnow = 'abomasnow',
  Abomasnowmega = 'abomasnowmega',
  Abra = 'abra',
  Absol = 'absol',
  Absolmega = 'absolmega',
  Accelgor = 'accelgor',
  Aegislash = 'aegislash',
  Aegislashblade = 'aegislashblade',
  Aerodactyl = 'aerodactyl',
  Aerodactylmega = 'aerodactylmega',
  Aggron = 'aggron',
  Aggronmega = 'aggronmega',
  Aipom = 'aipom',
  Alakazam = 'alakazam',
  Alakazammega = 'alakazammega',
  Alcremie = 'alcremie',
  Alcremiegmax = 'alcremiegmax',
  Alomomola = 'alomomola',
  Altaria = 'altaria',
  Altariamega = 'altariamega',
  Amaura = 'amaura',
  Ambipom = 'ambipom',
  Amoonguss = 'amoonguss',
  Ampharos = 'ampharos',
  Ampharosmega = 'ampharosmega',
  Annihilape = 'annihilape',
  Anorith = 'anorith',
  Appletun = 'appletun',
  Appletungmax = 'appletungmax',
  Applin = 'applin',
  Araquanid = 'araquanid',
  Araquanidtotem = 'araquanidtotem',
  Arbok = 'arbok',
  Arboliva = 'arboliva',
  Arcanine = 'arcanine',
  Arcaninehisui = 'arcaninehisui',
  Arceus = 'arceus',
  Arceusbug = 'arceusbug',
  Arceusdark = 'arceusdark',
  Arceusdragon = 'arceusdragon',
  Arceuselectric = 'arceuselectric',
  Arceusfairy = 'arceusfairy',
  Arceusfighting = 'arceusfighting',
  Arceusfire = 'arceusfire',
  Arceusflying = 'arceusflying',
  Arceusghost = 'arceusghost',
  Arceusgrass = 'arceusgrass',
  Arceusground = 'arceusground',
  Arceusice = 'arceusice',
  Arceuslegend = 'arceuslegend',
  Arceuspoison = 'arceuspoison',
  Arceuspsychic = 'arceuspsychic',
  Arceusrock = 'arceusrock',
  Arceussteel = 'arceussteel',
  Arceuswater = 'arceuswater',
  Archaludon = 'archaludon',
  Archen = 'archen',
  Archeops = 'archeops',
  Arctibax = 'arctibax',
  Arctovish = 'arctovish',
  Arctozolt = 'arctozolt',
  Argalis = 'argalis',
  Arghonaut = 'arghonaut',
  Ariados = 'ariados',
  Armaldo = 'armaldo',
  Armarouge = 'armarouge',
  Aromatisse = 'aromatisse',
  Aron = 'aron',
  Arrokuda = 'arrokuda',
  Articuno = 'articuno',
  Articunogalar = 'articunogalar',
  Astrolotl = 'astrolotl',
  Audino = 'audino',
  Audinomega = 'audinomega',
  Aurorus = 'aurorus',
  Aurumoth = 'aurumoth',
  Avalugg = 'avalugg',
  Avalugghisui = 'avalugghisui',
  Axew = 'axew',
  Azelf = 'azelf',
  Azumarill = 'azumarill',
  Azurill = 'azurill',
  Bagon = 'bagon',
  Baltoy = 'baltoy',
  Banette = 'banette',
  Banettemega = 'banettemega',
  Barbaracle = 'barbaracle',
  Barboach = 'barboach',
  Barraskewda = 'barraskewda',
  Basculegion = 'basculegion',
  Basculegionf = 'basculegionf',
  Basculin = 'basculin',
  Basculinbluestriped = 'basculinbluestriped',
  Basculinwhitestriped = 'basculinwhitestriped',
  Bastiodon = 'bastiodon',
  Baxcalibur = 'baxcalibur',
  Bayleef = 'bayleef',
  Beartic = 'beartic',
  Beautifly = 'beautifly',
  Beedrill = 'beedrill',
  Beedrillmega = 'beedrillmega',
  Beheeyem = 'beheeyem',
  Beldum = 'beldum',
  Bellibolt = 'bellibolt',
  Bellossom = 'bellossom',
  Bellsprout = 'bellsprout',
  Bergmite = 'bergmite',
  Bewear = 'bewear',
  Bibarel = 'bibarel',
  Bidoof = 'bidoof',
  Binacle = 'binacle',
  Bisharp = 'bisharp',
  Blacephalon = 'blacephalon',
  Blastoise = 'blastoise',
  Blastoisegmax = 'blastoisegmax',
  Blastoisemega = 'blastoisemega',
  Blaziken = 'blaziken',
  Blazikenmega = 'blazikenmega',
  Blipbug = 'blipbug',
  Blissey = 'blissey',
  Blitzle = 'blitzle',
  Boldore = 'boldore',
  Boltund = 'boltund',
  Bombirdier = 'bombirdier',
  Bonsly = 'bonsly',
  Bouffalant = 'bouffalant',
  Bounsweet = 'bounsweet',
  Braixen = 'braixen',
  Brambleghast = 'brambleghast',
  Bramblin = 'bramblin',
  Brattler = 'brattler',
  Braviary = 'braviary',
  Braviaryhisui = 'braviaryhisui',
  Breezi = 'breezi',
  Breloom = 'breloom',
  Brionne = 'brionne',
  Bronzong = 'bronzong',
  Bronzor = 'bronzor',
  Brutebonnet = 'brutebonnet',
  Bruxish = 'bruxish',
  Budew = 'budew',
  Buizel = 'buizel',
  Bulbasaur = 'bulbasaur',
  Buneary = 'buneary',
  Bunnelby = 'bunnelby',
  Burmy = 'burmy',
  Butterfree = 'butterfree',
  Butterfreegmax = 'butterfreegmax',
  Buzzwole = 'buzzwole',
  Cacnea = 'cacnea',
  Cacturne = 'cacturne',
  Caimanoe = 'caimanoe',
  Calyrex = 'calyrex',
  Calyrexice = 'calyrexice',
  Calyrexshadow = 'calyrexshadow',
  Camerupt = 'camerupt',
  Cameruptmega = 'cameruptmega',
  Capsakid = 'capsakid',
  Carbink = 'carbink',
  Caribolt = 'caribolt',
  Carkol = 'carkol',
  Carnivine = 'carnivine',
  Carracosta = 'carracosta',
  Carvanha = 'carvanha',
  Cascoon = 'cascoon',
  Castform = 'castform',
  Castformrainy = 'castformrainy',
  Castformsnowy = 'castformsnowy',
  Castformsunny = 'castformsunny',
  Caterpie = 'caterpie',
  Cawdet = 'cawdet',
  Cawmodore = 'cawmodore',
  Celebi = 'celebi',
  Celesteela = 'celesteela',
  Centiskorch = 'centiskorch',
  Centiskorchgmax = 'centiskorchgmax',
  Ceruledge = 'ceruledge',
  Cetitan = 'cetitan',
  Cetoddle = 'cetoddle',
  Chandelure = 'chandelure',
  Chansey = 'chansey',
  Charcadet = 'charcadet',
  Charizard = 'charizard',
  Charizardgmax = 'charizardgmax',
  Charizardmegax = 'charizardmegax',
  Charizardmegay = 'charizardmegay',
  Charjabug = 'charjabug',
  Charmander = 'charmander',
  Charmeleon = 'charmeleon',
  Chatot = 'chatot',
  Cherrim = 'cherrim',
  Cherrimsunshine = 'cherrimsunshine',
  Cherubi = 'cherubi',
  Chesnaught = 'chesnaught',
  Chespin = 'chespin',
  Chewtle = 'chewtle',
  Chienpao = 'chienpao',
  Chikorita = 'chikorita',
  Chimchar = 'chimchar',
  Chimecho = 'chimecho',
  Chinchou = 'chinchou',
  Chingling = 'chingling',
  Chiyu = 'chiyu',
  Chromera = 'chromera',
  Cinccino = 'cinccino',
  Cinderace = 'cinderace',
  Cinderacegmax = 'cinderacegmax',
  Clamperl = 'clamperl',
  Clauncher = 'clauncher',
  Clawitzer = 'clawitzer',
  Claydol = 'claydol',
  Clefable = 'clefable',
  Clefairy = 'clefairy',
  Cleffa = 'cleffa',
  Clobbopus = 'clobbopus',
  Clodsire = 'clodsire',
  Cloyster = 'cloyster',
  Coalossal = 'coalossal',
  Coalossalgmax = 'coalossalgmax',
  Cobalion = 'cobalion',
  Cofagrigus = 'cofagrigus',
  Colossoil = 'colossoil',
  Combee = 'combee',
  Combusken = 'combusken',
  Comfey = 'comfey',
  Conkeldurr = 'conkeldurr',
  Copperajah = 'copperajah',
  Copperajahgmax = 'copperajahgmax',
  Coribalis = 'coribalis',
  Corphish = 'corphish',
  Corsola = 'corsola',
  Corsolagalar = 'corsolagalar',
  Corviknight = 'corviknight',
  Corviknightgmax = 'corviknightgmax',
  Corvisquire = 'corvisquire',
  Cosmoem = 'cosmoem',
  Cosmog = 'cosmog',
  Cottonee = 'cottonee',
  Crabominable = 'crabominable',
  Crabrawler = 'crabrawler',
  Cradily = 'cradily',
  Cramorant = 'cramorant',
  Cramorantgorging = 'cramorantgorging',
  Cramorantgulping = 'cramorantgulping',
  Cranidos = 'cranidos',
  Crawdaunt = 'crawdaunt',
  Cresceidon = 'cresceidon',
  Cresselia = 'cresselia',
  Croagunk = 'croagunk',
  Crobat = 'crobat',
  Crocalor = 'crocalor',
  Croconaw = 'croconaw',
  Crucibelle = 'crucibelle',
  Crucibellemega = 'crucibellemega',
  Crustle = 'crustle',
  Cryogonal = 'cryogonal',
  Cubchoo = 'cubchoo',
  Cubone = 'cubone',
  Cufant = 'cufant',
  Cupra = 'cupra',
  Cursola = 'cursola',
  Cutiefly = 'cutiefly',
  Cyclizar = 'cyclizar',
  Cyclohm = 'cyclohm',
  Cyndaquil = 'cyndaquil',
  Dachsbun = 'dachsbun',
  Darkrai = 'darkrai',
  Darmanitan = 'darmanitan',
  Darmanitangalar = 'darmanitangalar',
  Darmanitangalarzen = 'darmanitangalarzen',
  Darmanitanzen = 'darmanitanzen',
  Dartrix = 'dartrix',
  Darumaka = 'darumaka',
  Darumakagalar = 'darumakagalar',
  Decidueye = 'decidueye',
  Decidueyehisui = 'decidueyehisui',
  Dedenne = 'dedenne',
  Deerling = 'deerling',
  Deino = 'deino',
  Delcatty = 'delcatty',
  Delibird = 'delibird',
  Delphox = 'delphox',
  Deoxys = 'deoxys',
  Deoxysattack = 'deoxysattack',
  Deoxysdefense = 'deoxysdefense',
  Deoxysspeed = 'deoxysspeed',
  Dewgong = 'dewgong',
  Dewott = 'dewott',
  Dewpider = 'dewpider',
  Dhelmise = 'dhelmise',
  Dialga = 'dialga',
  Dialgaorigin = 'dialgaorigin',
  Diancie = 'diancie',
  Dianciemega = 'dianciemega',
  Diggersby = 'diggersby',
  Diglett = 'diglett',
  Diglettalola = 'diglettalola',
  Dipplin = 'dipplin',
  Ditto = 'ditto',
  Dodrio = 'dodrio',
  Doduo = 'doduo',
  Dolliv = 'dolliv',
  Dondozo = 'dondozo',
  Donphan = 'donphan',
  Dorsoil = 'dorsoil',
  Dottler = 'dottler',
  Doublade = 'doublade',
  Dracovish = 'dracovish',
  Dracozolt = 'dracozolt',
  Dragalge = 'dragalge',
  Dragapult = 'dragapult',
  Dragonair = 'dragonair',
  Dragonite = 'dragonite',
  Drakloak = 'drakloak',
  Drampa = 'drampa',
  Drapion = 'drapion',
  Dratini = 'dratini',
  Drednaw = 'drednaw',
  Drednawgmax = 'drednawgmax',
  Dreepy = 'dreepy',
  Drifblim = 'drifblim',
  Drifloon = 'drifloon',
  Drilbur = 'drilbur',
  Drizzile = 'drizzile',
  Drowzee = 'drowzee',
  Druddigon = 'druddigon',
  Dubwool = 'dubwool',
  Ducklett = 'ducklett',
  Dudunsparce = 'dudunsparce',
  Dudunsparcethreesegment = 'dudunsparcethreesegment',
  Dugtrio = 'dugtrio',
  Dugtrioalola = 'dugtrioalola',
  Dunsparce = 'dunsparce',
  Duohm = 'duohm',
  Duosion = 'duosion',
  Duraludon = 'duraludon',
  Duraludongmax = 'duraludongmax',
  Durant = 'durant',
  Dusclops = 'dusclops',
  Dusknoir = 'dusknoir',
  Duskull = 'duskull',
  Dustox = 'dustox',
  Dwebble = 'dwebble',
  Eelektrik = 'eelektrik',
  Eelektross = 'eelektross',
  Eevee = 'eevee',
  Eeveegmax = 'eeveegmax',
  Eeveestarter = 'eeveestarter',
  Eiscue = 'eiscue',
  Eiscuenoice = 'eiscuenoice',
  Ekans = 'ekans',
  Eldegoss = 'eldegoss',
  Electabuzz = 'electabuzz',
  Electivire = 'electivire',
  Electrelk = 'electrelk',
  Electrike = 'electrike',
  Electrode = 'electrode',
  Electrodehisui = 'electrodehisui',
  Elekid = 'elekid',
  Elgyem = 'elgyem',
  Embirch = 'embirch',
  Emboar = 'emboar',
  Emolga = 'emolga',
  Empoleon = 'empoleon',
  Enamorus = 'enamorus',
  Enamorustherian = 'enamorustherian',
  Entei = 'entei',
  Equilibra = 'equilibra',
  Escavalier = 'escavalier',
  Espathra = 'espathra',
  Espeon = 'espeon',
  Espurr = 'espurr',
  Eternatus = 'eternatus',
  Eternatuseternamax = 'eternatuseternamax',
  Excadrill = 'excadrill',
  Exeggcute = 'exeggcute',
  Exeggutor = 'exeggutor',
  Exeggutoralola = 'exeggutoralola',
  Exploud = 'exploud',
  Falinks = 'falinks',
  Farfetchd = 'farfetchd',
  Farfetchdgalar = 'farfetchdgalar',
  Farigiraf = 'farigiraf',
  Fawnifer = 'fawnifer',
  Fearow = 'fearow',
  Feebas = 'feebas',
  Fennekin = 'fennekin',
  Feraligatr = 'feraligatr',
  Ferroseed = 'ferroseed',
  Ferrothorn = 'ferrothorn',
  Fezandipiti = 'fezandipiti',
  Fidgit = 'fidgit',
  Fidough = 'fidough',
  Finizen = 'finizen',
  Finneon = 'finneon',
  Flaaffy = 'flaaffy',
  Flabebe = 'flabebe',
  Flamigo = 'flamigo',
  Flapple = 'flapple',
  Flapplegmax = 'flapplegmax',
  Flarelm = 'flarelm',
  Flareon = 'flareon',
  Fletchinder = 'fletchinder',
  Fletchling = 'fletchling',
  Flittle = 'flittle',
  Floatoy = 'floatoy',
  Floatzel = 'floatzel',
  Floette = 'floette',
  Floetteeternal = 'floetteeternal',
  Floragato = 'floragato',
  Florges = 'florges',
  Fluttermane = 'fluttermane',
  Flygon = 'flygon',
  Fomantis = 'fomantis',
  Foongus = 'foongus',
  Forretress = 'forretress',
  Fraxure = 'fraxure',
  Frigibax = 'frigibax',
  Frillish = 'frillish',
  Frillishfemale = 'frillishfemale',
  Froakie = 'froakie',
  Frogadier = 'frogadier',
  Froslass = 'froslass',
  Frosmoth = 'frosmoth',
  Fuecoco = 'fuecoco',
  Furfrou = 'furfrou',
  Furret = 'furret',
  Gabite = 'gabite',
  Gallade = 'gallade',
  Gallademega = 'gallademega',
  Galvantula = 'galvantula',
  Garbodor = 'garbodor',
  Garbodorgmax = 'garbodorgmax',
  Garchomp = 'garchomp',
  Garchompmega = 'garchompmega',
  Gardevoir = 'gardevoir',
  Gardevoirmega = 'gardevoirmega',
  Garganacl = 'garganacl',
  Gastly = 'gastly',
  Gastrodon = 'gastrodon',
  Genesect = 'genesect',
  Genesectburn = 'genesectburn',
  Genesectchill = 'genesectchill',
  Genesectdouse = 'genesectdouse',
  Genesectshock = 'genesectshock',
  Gengar = 'gengar',
  Gengargmax = 'gengargmax',
  Gengarmega = 'gengarmega',
  Geodude = 'geodude',
  Geodudealola = 'geodudealola',
  Gholdengo = 'gholdengo',
  Gible = 'gible',
  Gigalith = 'gigalith',
  Gimmighoul = 'gimmighoul',
  Gimmighoulroaming = 'gimmighoulroaming',
  Girafarig = 'girafarig',
  Giratina = 'giratina',
  Giratinaorigin = 'giratinaorigin',
  Glaceon = 'glaceon',
  Glalie = 'glalie',
  Glaliemega = 'glaliemega',
  Glameow = 'glameow',
  Glastrier = 'glastrier',
  Gligar = 'gligar',
  Glimmet = 'glimmet',
  Glimmora = 'glimmora',
  Gliscor = 'gliscor',
  Gloom = 'gloom',
  Gogoat = 'gogoat',
  Golbat = 'golbat',
  Goldeen = 'goldeen',
  Golduck = 'golduck',
  Golem = 'golem',
  Golemalola = 'golemalola',
  Golett = 'golett',
  Golisopod = 'golisopod',
  Golurk = 'golurk',
  Goodra = 'goodra',
  Goodrahisui = 'goodrahisui',
  Goomy = 'goomy',
  Gorebyss = 'gorebyss',
  Gossifleur = 'gossifleur',
  Gothita = 'gothita',
  Gothitelle = 'gothitelle',
  Gothorita = 'gothorita',
  Gougingfire = 'gougingfire',
  Gourgeist = 'gourgeist',
  Gourgeistlarge = 'gourgeistlarge',
  Gourgeistsmall = 'gourgeistsmall',
  Gourgeistsuper = 'gourgeistsuper',
  Grafaiai = 'grafaiai',
  Granbull = 'granbull',
  Grapploct = 'grapploct',
  Graveler = 'graveler',
  Graveleralola = 'graveleralola',
  Greattusk = 'greattusk',
  Greavard = 'greavard',
  Greedent = 'greedent',
  Greninja = 'greninja',
  Greninjaash = 'greninjaash',
  Grimer = 'grimer',
  Grimeralola = 'grimeralola',
  Grimmsnarl = 'grimmsnarl',
  Grimmsnarlgmax = 'grimmsnarlgmax',
  Grookey = 'grookey',
  Grotle = 'grotle',
  Groudon = 'groudon',
  Groudonprimal = 'groudonprimal',
  Grovyle = 'grovyle',
  Growlithe = 'growlithe',
  Growlithehisui = 'growlithehisui',
  Grubbin = 'grubbin',
  Grumpig = 'grumpig',
  Gulpin = 'gulpin',
  Gumshoos = 'gumshoos',
  Gumshoostotem = 'gumshoostotem',
  Gurdurr = 'gurdurr',
  Guzzlord = 'guzzlord',
  Gyarados = 'gyarados',
  Gyaradosmega = 'gyaradosmega',
  Hakamoo = 'hakamoo',
  Happiny = 'happiny',
  Hariyama = 'hariyama',
  Hatenna = 'hatenna',
  Hatterene = 'hatterene',
  Hatterenegmax = 'hatterenegmax',
  Hattrem = 'hattrem',
  Haunter = 'haunter',
  Hawlucha = 'hawlucha',
  Haxorus = 'haxorus',
  Heatmor = 'heatmor',
  Heatran = 'heatran',
  Heliolisk = 'heliolisk',
  Helioptile = 'helioptile',
  Hemogoblin = 'hemogoblin',
  Heracross = 'heracross',
  Heracrossmega = 'heracrossmega',
  Herdier = 'herdier',
  Hippopotas = 'hippopotas',
  Hippowdon = 'hippowdon',
  Hitmonchan = 'hitmonchan',
  Hitmonlee = 'hitmonlee',
  Hitmontop = 'hitmontop',
  Honchkrow = 'honchkrow',
  Honedge = 'honedge',
  Hooh = 'hooh',
  Hoopa = 'hoopa',
  Hoopaunbound = 'hoopaunbound',
  Hoothoot = 'hoothoot',
  Hoppip = 'hoppip',
  Horsea = 'horsea',
  Houndoom = 'houndoom',
  Houndoommega = 'houndoommega',
  Houndour = 'houndour',
  Houndstone = 'houndstone',
  Huntail = 'huntail',
  Hydrapple = 'hydrapple',
  Hydreigon = 'hydreigon',
  Hypno = 'hypno',
  Igglybuff = 'igglybuff',
  Illumise = 'illumise',
  Impidimp = 'impidimp',
  Incineroar = 'incineroar',
  Indeedee = 'indeedee',
  Indeedeef = 'indeedeef',
  Infernape = 'infernape',
  Inkay = 'inkay',
  Inteleon = 'inteleon',
  Inteleongmax = 'inteleongmax',
  Ironboulder = 'ironboulder',
  Ironbundle = 'ironbundle',
  Ironcrown = 'ironcrown',
  Ironhands = 'ironhands',
  Ironjugulis = 'ironjugulis',
  Ironleaves = 'ironleaves',
  Ironmoth = 'ironmoth',
  Ironthorns = 'ironthorns',
  Irontreads = 'irontreads',
  Ironvaliant = 'ironvaliant',
  Ivysaur = 'ivysaur',
  Jangmoo = 'jangmoo',
  Jellicent = 'jellicent',
  Jellicentfemale = 'jellicentfemale',
  Jigglypuff = 'jigglypuff',
  Jirachi = 'jirachi',
  Jolteon = 'jolteon',
  Joltik = 'joltik',
  Jumbao = 'jumbao',
  Jumpluff = 'jumpluff',
  Justyke = 'justyke',
  Jynx = 'jynx',
  Kabuto = 'kabuto',
  Kabutops = 'kabutops',
  Kadabra = 'kadabra',
  Kakuna = 'kakuna',
  Kangaskhan = 'kangaskhan',
  Kangaskhanmega = 'kangaskhanmega',
  Karrablast = 'karrablast',
  Kartana = 'kartana',
  Kecleon = 'kecleon',
  Keldeo = 'keldeo',
  Keldeoresolute = 'keldeoresolute',
  Kerfluffle = 'kerfluffle',
  Kilowattrel = 'kilowattrel',
  Kingambit = 'kingambit',
  Kingdra = 'kingdra',
  Kingler = 'kingler',
  Kinglergmax = 'kinglergmax',
  Kirlia = 'kirlia',
  Kitsunoh = 'kitsunoh',
  Klang = 'klang',
  Klawf = 'klawf',
  Kleavor = 'kleavor',
  Klefki = 'klefki',
  Klink = 'klink',
  Klinklang = 'klinklang',
  Koffing = 'koffing',
  Komala = 'komala',
  Kommoo = 'kommoo',
  Kommoototem = 'kommoototem',
  Koraidon = 'koraidon',
  Krabby = 'krabby',
  Kricketot = 'kricketot',
  Kricketune = 'kricketune',
  Krilowatt = 'krilowatt',
  Krokorok = 'krokorok',
  Krookodile = 'krookodile',
  Kubfu = 'kubfu',
  Kyogre = 'kyogre',
  Kyogreprimal = 'kyogreprimal',
  Kyurem = 'kyurem',
  Kyuremblack = 'kyuremblack',
  Kyuremwhite = 'kyuremwhite',
  Lairon = 'lairon',
  Lampent = 'lampent',
  Landorus = 'landorus',
  Landorustherian = 'landorustherian',
  Lanturn = 'lanturn',
  Lapras = 'lapras',
  Laprasgmax = 'laprasgmax',
  Larvesta = 'larvesta',
  Larvitar = 'larvitar',
  Latias = 'latias',
  Latiasmega = 'latiasmega',
  Latios = 'latios',
  Latiosmega = 'latiosmega',
  Leafeon = 'leafeon',
  Leavanny = 'leavanny',
  Lechonk = 'lechonk',
  Ledian = 'ledian',
  Ledyba = 'ledyba',
  Lickilicky = 'lickilicky',
  Lickitung = 'lickitung',
  Liepard = 'liepard',
  Lileep = 'lileep',
  Lilligant = 'lilligant',
  Lilliganthisui = 'lilliganthisui',
  Lillipup = 'lillipup',
  Linoone = 'linoone',
  Linoonegalar = 'linoonegalar',
  Litleo = 'litleo',
  Litten = 'litten',
  Litwick = 'litwick',
  Lokix = 'lokix',
  Lombre = 'lombre',
  Lopunny = 'lopunny',
  Lopunnymega = 'lopunnymega',
  Lotad = 'lotad',
  Loudred = 'loudred',
  Lucario = 'lucario',
  Lucariomega = 'lucariomega',
  Ludicolo = 'ludicolo',
  Lugia = 'lugia',
  Lumineon = 'lumineon',
  Lunala = 'lunala',
  Lunatone = 'lunatone',
  Lurantis = 'lurantis',
  Lurantistotem = 'lurantistotem',
  Luvdisc = 'luvdisc',
  Luxio = 'luxio',
  Luxray = 'luxray',
  Lycanroc = 'lycanroc',
  Lycanrocdusk = 'lycanrocdusk',
  Lycanrocmidnight = 'lycanrocmidnight',
  M00 = 'm00',
  Mabosstiff = 'mabosstiff',
  Machamp = 'machamp',
  Machampgmax = 'machampgmax',
  Machoke = 'machoke',
  Machop = 'machop',
  Magby = 'magby',
  Magcargo = 'magcargo',
  Magearna = 'magearna',
  Magearnaoriginal = 'magearnaoriginal',
  Magikarp = 'magikarp',
  Magmar = 'magmar',
  Magmortar = 'magmortar',
  Magnemite = 'magnemite',
  Magneton = 'magneton',
  Magnezone = 'magnezone',
  Makuhita = 'makuhita',
  Malaconda = 'malaconda',
  Malamar = 'malamar',
  Mamoswine = 'mamoswine',
  Manaphy = 'manaphy',
  Mandibuzz = 'mandibuzz',
  Manectric = 'manectric',
  Manectricmega = 'manectricmega',
  Mankey = 'mankey',
  Mantine = 'mantine',
  Mantyke = 'mantyke',
  Maractus = 'maractus',
  Mareanie = 'mareanie',
  Mareep = 'mareep',
  Marill = 'marill',
  Marowak = 'marowak',
  Marowakalola = 'marowakalola',
  Marowakalolatotem = 'marowakalolatotem',
  Marshadow = 'marshadow',
  Marshtomp = 'marshtomp',
  Maschiff = 'maschiff',
  Masquerain = 'masquerain',
  Maushold = 'maushold',
  Mausholdfour = 'mausholdfour',
  Mawile = 'mawile',
  Mawilemega = 'mawilemega',
  Medicham = 'medicham',
  Medichammega = 'medichammega',
  Meditite = 'meditite',
  Meganium = 'meganium',
  Melmetal = 'melmetal',
  Melmetalgmax = 'melmetalgmax',
  Meloetta = 'meloetta',
  Meloettapirouette = 'meloettapirouette',
  Meltan = 'meltan',
  Meowscarada = 'meowscarada',
  Meowstic = 'meowstic',
  Meowsticf = 'meowsticf',
  Meowth = 'meowth',
  Meowthalola = 'meowthalola',
  Meowthgalar = 'meowthgalar',
  Meowthgmax = 'meowthgmax',
  Mesprit = 'mesprit',
  Metagross = 'metagross',
  Metagrossmega = 'metagrossmega',
  Metang = 'metang',
  Metapod = 'metapod',
  Mew = 'mew',
  Mewtwo = 'mewtwo',
  Mewtwomegax = 'mewtwomegax',
  Mewtwomegay = 'mewtwomegay',
  Miasmaw = 'miasmaw',
  Miasmite = 'miasmite',
  Mienfoo = 'mienfoo',
  Mienshao = 'mienshao',
  Mightyena = 'mightyena',
  Milcery = 'milcery',
  Milotic = 'milotic',
  Miltank = 'miltank',
  Mimejr = 'mimejr',
  Mimikyu = 'mimikyu',
  Mimikyubusted = 'mimikyubusted',
  Mimikyubustedtotem = 'mimikyubustedtotem',
  Mimikyutotem = 'mimikyutotem',
  Minccino = 'minccino',
  Minior = 'minior',
  Miniormeteor = 'miniormeteor',
  Minun = 'minun',
  Miraidon = 'miraidon',
  Misdreavus = 'misdreavus',
  Mismagius = 'mismagius',
  Missingno = 'missingno',
  Mollux = 'mollux',
  Moltres = 'moltres',
  Moltresgalar = 'moltresgalar',
  Monferno = 'monferno',
  Monohm = 'monohm',
  Morelull = 'morelull',
  Morgrem = 'morgrem',
  Morpeko = 'morpeko',
  Morpekohangry = 'morpekohangry',
  Mothim = 'mothim',
  Mrmime = 'mrmime',
  Mrmimegalar = 'mrmimegalar',
  Mrrime = 'mrrime',
  Mudbray = 'mudbray',
  Mudkip = 'mudkip',
  Mudsdale = 'mudsdale',
  Muk = 'muk',
  Mukalola = 'mukalola',
  Mumbao = 'mumbao',
  Munchlax = 'munchlax',
  Munkidori = 'munkidori',
  Munna = 'munna',
  Murkrow = 'murkrow',
  Musharna = 'musharna',
  Nacli = 'nacli',
  Naclstack = 'naclstack',
  Naganadel = 'naganadel',
  Natu = 'natu',
  Naviathan = 'naviathan',
  Necrozma = 'necrozma',
  Necrozmadawnwings = 'necrozmadawnwings',
  Necrozmaduskmane = 'necrozmaduskmane',
  Necrozmaultra = 'necrozmaultra',
  Necturine = 'necturine',
  Necturna = 'necturna',
  Nickit = 'nickit',
  Nidoking = 'nidoking',
  Nidoqueen = 'nidoqueen',
  Nidoranf = 'nidoranf',
  Nidoranm = 'nidoranm',
  Nidorina = 'nidorina',
  Nidorino = 'nidorino',
  Nihilego = 'nihilego',
  Nincada = 'nincada',
  Ninetales = 'ninetales',
  Ninetalesalola = 'ninetalesalola',
  Ninjask = 'ninjask',
  Noctowl = 'noctowl',
  Nohface = 'nohface',
  Noibat = 'noibat',
  Noivern = 'noivern',
  Nosepass = 'nosepass',
  Numel = 'numel',
  Nuzleaf = 'nuzleaf',
  Nymble = 'nymble',
  Obstagoon = 'obstagoon',
  Octillery = 'octillery',
  Oddish = 'oddish',
  Ogerpon = 'ogerpon',
  Ogerponcornerstone = 'ogerponcornerstone',
  Ogerponcornerstonetera = 'ogerponcornerstonetera',
  Ogerponhearthflame = 'ogerponhearthflame',
  Ogerponhearthflametera = 'ogerponhearthflametera',
  Ogerpontealtera = 'ogerpontealtera',
  Ogerponwellspring = 'ogerponwellspring',
  Ogerponwellspringtera = 'ogerponwellspringtera',
  Oinkologne = 'oinkologne',
  Oinkolognef = 'oinkolognef',
  Okidogi = 'okidogi',
  Omanyte = 'omanyte',
  Omastar = 'omastar',
  Onix = 'onix',
  Oranguru = 'oranguru',
  Orbeetle = 'orbeetle',
  Orbeetlegmax = 'orbeetlegmax',
  Oricorio = 'oricorio',
  Oricoriopau = 'oricoriopau',
  Oricoriopompom = 'oricoriopompom',
  Oricoriosensu = 'oricoriosensu',
  Orthworm = 'orthworm',
  Oshawott = 'oshawott',
  Overqwil = 'overqwil',
  Pachirisu = 'pachirisu',
  Pajantom = 'pajantom',
  Palafin = 'palafin',
  Palafinhero = 'palafinhero',
  Palkia = 'palkia',
  Palkiaorigin = 'palkiaorigin',
  Palossand = 'palossand',
  Palpitoad = 'palpitoad',
  Pancham = 'pancham',
  Pangoro = 'pangoro',
  Panpour = 'panpour',
  Pansage = 'pansage',
  Pansear = 'pansear',
  Paras = 'paras',
  Parasect = 'parasect',
  Passimian = 'passimian',
  Patrat = 'patrat',
  Pawmi = 'pawmi',
  Pawmo = 'pawmo',
  Pawmot = 'pawmot',
  Pawniard = 'pawniard',
  Pecharunt = 'pecharunt',
  Pelipper = 'pelipper',
  Perrserker = 'perrserker',
  Persian = 'persian',
  Persianalola = 'persianalola',
  Petilil = 'petilil',
  Phanpy = 'phanpy',
  Phantump = 'phantump',
  Pheromosa = 'pheromosa',
  Phione = 'phione',
  Pichu = 'pichu',
  Pichuspikyeared = 'pichuspikyeared',
  Pidgeot = 'pidgeot',
  Pidgeotmega = 'pidgeotmega',
  Pidgeotto = 'pidgeotto',
  Pidgey = 'pidgey',
  Pidove = 'pidove',
  Pignite = 'pignite',
  Pikachu = 'pikachu',
  Pikachualola = 'pikachualola',
  Pikachubelle = 'pikachubelle',
  Pikachucosplay = 'pikachucosplay',
  Pikachugmax = 'pikachugmax',
  Pikachuhoenn = 'pikachuhoenn',
  Pikachukalos = 'pikachukalos',
  Pikachulibre = 'pikachulibre',
  Pikachuoriginal = 'pikachuoriginal',
  Pikachupartner = 'pikachupartner',
  Pikachuphd = 'pikachuphd',
  Pikachupopstar = 'pikachupopstar',
  Pikachurockstar = 'pikachurockstar',
  Pikachusinnoh = 'pikachusinnoh',
  Pikachustarter = 'pikachustarter',
  Pikachuunova = 'pikachuunova',
  Pikachuworld = 'pikachuworld',
  Pikipek = 'pikipek',
  Piloswine = 'piloswine',
  Pincurchin = 'pincurchin',
  Pineco = 'pineco',
  Pinsir = 'pinsir',
  Pinsirmega = 'pinsirmega',
  Piplup = 'piplup',
  Plasmanta = 'plasmanta',
  Pluffle = 'pluffle',
  Plusle = 'plusle',
  Poipole = 'poipole',
  Pokestarblackbelt = 'pokestarblackbelt',
  Pokestarblackdoor = 'pokestarblackdoor',
  Pokestarbrycenman = 'pokestarbrycenman',
  Pokestarf00 = 'pokestarf00',
  Pokestarf002 = 'pokestarf002',
  Pokestargiant = 'pokestargiant',
  Pokestarhumanoid = 'pokestarhumanoid',
  Pokestarmonster = 'pokestarmonster',
  Pokestarmt = 'pokestarmt',
  Pokestarmt2 = 'pokestarmt2',
  Pokestarsmeargle = 'pokestarsmeargle',
  Pokestarspirit = 'pokestarspirit',
  Pokestartransport = 'pokestartransport',
  Pokestarufo = 'pokestarufo',
  Pokestarufo2 = 'pokestarufo2',
  Pokestarufopropu2 = 'pokestarufopropu2',
  Pokestarwhitedoor = 'pokestarwhitedoor',
  Politoed = 'politoed',
  Poliwag = 'poliwag',
  Poliwhirl = 'poliwhirl',
  Poliwrath = 'poliwrath',
  Poltchageist = 'poltchageist',
  Poltchageistartisan = 'poltchageistartisan',
  Polteageist = 'polteageist',
  Polteageistantique = 'polteageistantique',
  Ponyta = 'ponyta',
  Ponytagalar = 'ponytagalar',
  Poochyena = 'poochyena',
  Popplio = 'popplio',
  Porygon = 'porygon',
  Porygon2 = 'porygon2',
  Porygonz = 'porygonz',
  Primarina = 'primarina',
  Primeape = 'primeape',
  Prinplup = 'prinplup',
  Privatyke = 'privatyke',
  Probopass = 'probopass',
  Protowatt = 'protowatt',
  Psyduck = 'psyduck',
  Pumpkaboo = 'pumpkaboo',
  Pumpkaboolarge = 'pumpkaboolarge',
  Pumpkaboosmall = 'pumpkaboosmall',
  Pumpkaboosuper = 'pumpkaboosuper',
  Pupitar = 'pupitar',
  Purrloin = 'purrloin',
  Purugly = 'purugly',
  Pyroak = 'pyroak',
  Pyroar = 'pyroar',
  Pyukumuku = 'pyukumuku',
  Quagsire = 'quagsire',
  Quaquaval = 'quaquaval',
  Quaxly = 'quaxly',
  Quaxwell = 'quaxwell',
  Quilava = 'quilava',
  Quilladin = 'quilladin',
  Qwilfish = 'qwilfish',
  Qwilfishhisui = 'qwilfishhisui',
  Raboot = 'raboot',
  Rabsca = 'rabsca',
  Ragingbolt = 'ragingbolt',
  Raichu = 'raichu',
  Raichualola = 'raichualola',
  Raikou = 'raikou',
  Ralts = 'ralts',
  Rampardos = 'rampardos',
  Rapidash = 'rapidash',
  Rapidashgalar = 'rapidashgalar',
  Raticate = 'raticate',
  Raticatealola = 'raticatealola',
  Raticatealolatotem = 'raticatealolatotem',
  Rattata = 'rattata',
  Rattataalola = 'rattataalola',
  Rayquaza = 'rayquaza',
  Rayquazamega = 'rayquazamega',
  Rebble = 'rebble',
  Regice = 'regice',
  Regidrago = 'regidrago',
  Regieleki = 'regieleki',
  Regigigas = 'regigigas',
  Regirock = 'regirock',
  Registeel = 'registeel',
  Relicanth = 'relicanth',
  Rellor = 'rellor',
  Remoraid = 'remoraid',
  Reshiram = 'reshiram',
  Reuniclus = 'reuniclus',
  Revavroom = 'revavroom',
  Revenankh = 'revenankh',
  Rhydon = 'rhydon',
  Rhyhorn = 'rhyhorn',
  Rhyperior = 'rhyperior',
  Ribombee = 'ribombee',
  Ribombeetotem = 'ribombeetotem',
  Rillaboom = 'rillaboom',
  Rillaboomgmax = 'rillaboomgmax',
  Riolu = 'riolu',
  Roaringmoon = 'roaringmoon',
  Rockruff = 'rockruff',
  Roggenrola = 'roggenrola',
  Rolycoly = 'rolycoly',
  Rookidee = 'rookidee',
  Roselia = 'roselia',
  Roserade = 'roserade',
  Rotom = 'rotom',
  Rotomfan = 'rotomfan',
  Rotomfrost = 'rotomfrost',
  Rotomheat = 'rotomheat',
  Rotommow = 'rotommow',
  Rotomwash = 'rotomwash',
  Rowlet = 'rowlet',
  Rufflet = 'rufflet',
  Runerigus = 'runerigus',
  Sableye = 'sableye',
  Sableyemega = 'sableyemega',
  Saharaja = 'saharaja',
  Saharascal = 'saharascal',
  Salamence = 'salamence',
  Salamencemega = 'salamencemega',
  Salandit = 'salandit',
  Salazzle = 'salazzle',
  Salazzletotem = 'salazzletotem',
  Samurott = 'samurott',
  Samurotthisui = 'samurotthisui',
  Sandaconda = 'sandaconda',
  Sandacondagmax = 'sandacondagmax',
  Sandile = 'sandile',
  Sandshrew = 'sandshrew',
  Sandshrewalola = 'sandshrewalola',
  Sandslash = 'sandslash',
  Sandslashalola = 'sandslashalola',
  Sandygast = 'sandygast',
  Sandyshocks = 'sandyshocks',
  Sawk = 'sawk',
  Sawsbuck = 'sawsbuck',
  Scatterbug = 'scatterbug',
  Scattervein = 'scattervein',
  Sceptile = 'sceptile',
  Sceptilemega = 'sceptilemega',
  Scizor = 'scizor',
  Scizormega = 'scizormega',
  Scolipede = 'scolipede',
  Scorbunny = 'scorbunny',
  Scovillain = 'scovillain',
  Scrafty = 'scrafty',
  Scraggy = 'scraggy',
  Scratchet = 'scratchet',
  Screamtail = 'screamtail',
  Scyther = 'scyther',
  Seadra = 'seadra',
  Seaking = 'seaking',
  Sealeo = 'sealeo',
  Seedot = 'seedot',
  Seel = 'seel',
  Seismitoad = 'seismitoad',
  Sentret = 'sentret',
  Serperior = 'serperior',
  Servine = 'servine',
  Seviper = 'seviper',
  Sewaddle = 'sewaddle',
  Sharpedo = 'sharpedo',
  Sharpedomega = 'sharpedomega',
  Shaymin = 'shaymin',
  Shayminsky = 'shayminsky',
  Shedinja = 'shedinja',
  Shelgon = 'shelgon',
  Shellder = 'shellder',
  Shellos = 'shellos',
  Shelmet = 'shelmet',
  Shieldon = 'shieldon',
  Shiftry = 'shiftry',
  Shiinotic = 'shiinotic',
  Shinx = 'shinx',
  Shroodle = 'shroodle',
  Shroomish = 'shroomish',
  Shuckle = 'shuckle',
  Shuppet = 'shuppet',
  Sigilyph = 'sigilyph',
  Silcoon = 'silcoon',
  Silicobra = 'silicobra',
  Silvally = 'silvally',
  Silvallybug = 'silvallybug',
  Silvallydark = 'silvallydark',
  Silvallydragon = 'silvallydragon',
  Silvallyelectric = 'silvallyelectric',
  Silvallyfairy = 'silvallyfairy',
  Silvallyfighting = 'silvallyfighting',
  Silvallyfire = 'silvallyfire',
  Silvallyflying = 'silvallyflying',
  Silvallyghost = 'silvallyghost',
  Silvallygrass = 'silvallygrass',
  Silvallyground = 'silvallyground',
  Silvallyice = 'silvallyice',
  Silvallypoison = 'silvallypoison',
  Silvallypsychic = 'silvallypsychic',
  Silvallyrock = 'silvallyrock',
  Silvallysteel = 'silvallysteel',
  Silvallywater = 'silvallywater',
  Simipour = 'simipour',
  Simisage = 'simisage',
  Simisear = 'simisear',
  Sinistcha = 'sinistcha',
  Sinistchamasterpiece = 'sinistchamasterpiece',
  Sinistea = 'sinistea',
  Sinisteaantique = 'sinisteaantique',
  Sirfetchd = 'sirfetchd',
  Sizzlipede = 'sizzlipede',
  Skarmory = 'skarmory',
  Skeledirge = 'skeledirge',
  Skiddo = 'skiddo',
  Skiploom = 'skiploom',
  Skitty = 'skitty',
  Skorupi = 'skorupi',
  Skrelp = 'skrelp',
  Skuntank = 'skuntank',
  Skwovet = 'skwovet',
  Slaking = 'slaking',
  Slakoth = 'slakoth',
  Sliggoo = 'sliggoo',
  Sliggoohisui = 'sliggoohisui',
  Slitherwing = 'slitherwing',
  Slowbro = 'slowbro',
  Slowbrogalar = 'slowbrogalar',
  Slowbromega = 'slowbromega',
  Slowking = 'slowking',
  Slowkinggalar = 'slowkinggalar',
  Slowpoke = 'slowpoke',
  Slowpokegalar = 'slowpokegalar',
  Slugma = 'slugma',
  Slurpuff = 'slurpuff',
  Smeargle = 'smeargle',
  Smogecko = 'smogecko',
  Smoguana = 'smoguana',
  Smokomodo = 'smokomodo',
  Smoliv = 'smoliv',
  Smoochum = 'smoochum',
  Snaelstrom = 'snaelstrom',
  Sneasel = 'sneasel',
  Sneaselhisui = 'sneaselhisui',
  Sneasler = 'sneasler',
  Snivy = 'snivy',
  Snom = 'snom',
  Snorlax = 'snorlax',
  Snorlaxgmax = 'snorlaxgmax',
  Snorunt = 'snorunt',
  Snover = 'snover',
  Snubbull = 'snubbull',
  Snugglow = 'snugglow',
  Sobble = 'sobble',
  Solgaleo = 'solgaleo',
  Solosis = 'solosis',
  Solotl = 'solotl',
  Solrock = 'solrock',
  Spearow = 'spearow',
  Spectrier = 'spectrier',
  Spewpa = 'spewpa',
  Spheal = 'spheal',
  Spidops = 'spidops',
  Spinarak = 'spinarak',
  Spinda = 'spinda',
  Spiritomb = 'spiritomb',
  Spoink = 'spoink',
  Sprigatito = 'sprigatito',
  Spritzee = 'spritzee',
  Squawkabilly = 'squawkabilly',
  Squawkabillyblue = 'squawkabillyblue',
  Squawkabillywhite = 'squawkabillywhite',
  Squawkabillyyellow = 'squawkabillyyellow',
  Squirtle = 'squirtle',
  Stakataka = 'stakataka',
  Stantler = 'stantler',
  Staraptor = 'staraptor',
  Staravia = 'staravia',
  Starly = 'starly',
  Starmie = 'starmie',
  Staryu = 'staryu',
  Steelix = 'steelix',
  Steelixmega = 'steelixmega',
  Steenee = 'steenee',
  Stonjourner = 'stonjourner',
  Stoutland = 'stoutland',
  Stratagem = 'stratagem',
  Stufful = 'stufful',
  Stunfisk = 'stunfisk',
  Stunfiskgalar = 'stunfiskgalar',
  Stunky = 'stunky',
  Sudowoodo = 'sudowoodo',
  Suicune = 'suicune',
  Sunflora = 'sunflora',
  Sunkern = 'sunkern',
  Surskit = 'surskit',
  Swablu = 'swablu',
  Swadloon = 'swadloon',
  Swalot = 'swalot',
  Swampert = 'swampert',
  Swampertmega = 'swampertmega',
  Swanna = 'swanna',
  Swellow = 'swellow',
  Swinub = 'swinub',
  Swirlix = 'swirlix',
  Swirlpool = 'swirlpool',
  Swoobat = 'swoobat',
  Syclant = 'syclant',
  Syclar = 'syclar',
  Sylveon = 'sylveon',
  Tactite = 'tactite',
  Tadbulb = 'tadbulb',
  Taillow = 'taillow',
  Talonflame = 'talonflame',
  Tandemaus = 'tandemaus',
  Tangela = 'tangela',
  Tangrowth = 'tangrowth',
  Tapubulu = 'tapubulu',
  Tapufini = 'tapufini',
  Tapukoko = 'tapukoko',
  Tapulele = 'tapulele',
  Tarountula = 'tarountula',
  Tatsugiri = 'tatsugiri',
  Tauros = 'tauros',
  Taurospaldeaaqua = 'taurospaldeaaqua',
  Taurospaldeablaze = 'taurospaldeablaze',
  Taurospaldeacombat = 'taurospaldeacombat',
  Teddiursa = 'teddiursa',
  Tentacool = 'tentacool',
  Tentacruel = 'tentacruel',
  Tepig = 'tepig',
  Terapagos = 'terapagos',
  Terapagosstellar = 'terapagosstellar',
  Terapagosterastal = 'terapagosterastal',
  Terrakion = 'terrakion',
  Thievul = 'thievul',
  Throh = 'throh',
  Thundurus = 'thundurus',
  Thundurustherian = 'thundurustherian',
  Thwackey = 'thwackey',
  Timburr = 'timburr',
  Tinglu = 'tinglu',
  Tinkatink = 'tinkatink',
  Tinkaton = 'tinkaton',
  Tinkatuff = 'tinkatuff',
  Tirtouga = 'tirtouga',
  Toedscool = 'toedscool',
  Toedscruel = 'toedscruel',
  Togedemaru = 'togedemaru',
  Togedemarutotem = 'togedemarutotem',
  Togekiss = 'togekiss',
  Togepi = 'togepi',
  Togetic = 'togetic',
  Tomohawk = 'tomohawk',
  Torchic = 'torchic',
  Torkoal = 'torkoal',
  Tornadus = 'tornadus',
  Tornadustherian = 'tornadustherian',
  Torracat = 'torracat',
  Torterra = 'torterra',
  Totodile = 'totodile',
  Toucannon = 'toucannon',
  Toxapex = 'toxapex',
  Toxel = 'toxel',
  Toxicroak = 'toxicroak',
  Toxtricity = 'toxtricity',
  Toxtricitygmax = 'toxtricitygmax',
  Toxtricitylowkey = 'toxtricitylowkey',
  Toxtricitylowkeygmax = 'toxtricitylowkeygmax',
  Tranquill = 'tranquill',
  Trapinch = 'trapinch',
  Treecko = 'treecko',
  Trevenant = 'trevenant',
  Tropius = 'tropius',
  Trubbish = 'trubbish',
  Trumbeak = 'trumbeak',
  Tsareena = 'tsareena',
  Turtonator = 'turtonator',
  Turtwig = 'turtwig',
  Tympole = 'tympole',
  Tynamo = 'tynamo',
  Typenull = 'typenull',
  Typhlosion = 'typhlosion',
  Typhlosionhisui = 'typhlosionhisui',
  Tyranitar = 'tyranitar',
  Tyranitarmega = 'tyranitarmega',
  Tyrantrum = 'tyrantrum',
  Tyrogue = 'tyrogue',
  Tyrunt = 'tyrunt',
  Umbreon = 'umbreon',
  Unfezant = 'unfezant',
  Unown = 'unown',
  Ursaluna = 'ursaluna',
  Ursalunabloodmoon = 'ursalunabloodmoon',
  Ursaring = 'ursaring',
  Urshifu = 'urshifu',
  Urshifugmax = 'urshifugmax',
  Urshifurapidstrike = 'urshifurapidstrike',
  Urshifurapidstrikegmax = 'urshifurapidstrikegmax',
  Uxie = 'uxie',
  Vanillish = 'vanillish',
  Vanillite = 'vanillite',
  Vanilluxe = 'vanilluxe',
  Vaporeon = 'vaporeon',
  Varoom = 'varoom',
  Veluza = 'veluza',
  Venipede = 'venipede',
  Venomicon = 'venomicon',
  Venomiconepilogue = 'venomiconepilogue',
  Venomoth = 'venomoth',
  Venonat = 'venonat',
  Venusaur = 'venusaur',
  Venusaurgmax = 'venusaurgmax',
  Venusaurmega = 'venusaurmega',
  Vespiquen = 'vespiquen',
  Vibrava = 'vibrava',
  Victini = 'victini',
  Victreebel = 'victreebel',
  Vigoroth = 'vigoroth',
  Vikavolt = 'vikavolt',
  Vikavolttotem = 'vikavolttotem',
  Vileplume = 'vileplume',
  Virizion = 'virizion',
  Vivillon = 'vivillon',
  Vivillonfancy = 'vivillonfancy',
  Vivillonpokeball = 'vivillonpokeball',
  Volbeat = 'volbeat',
  Volcanion = 'volcanion',
  Volcarona = 'volcarona',
  Volkraken = 'volkraken',
  Volkritter = 'volkritter',
  Voltorb = 'voltorb',
  Voltorbhisui = 'voltorbhisui',
  Voodoll = 'voodoll',
  Voodoom = 'voodoom',
  Vullaby = 'vullaby',
  Vulpix = 'vulpix',
  Vulpixalola = 'vulpixalola',
  Wailmer = 'wailmer',
  Wailord = 'wailord',
  Walkingwake = 'walkingwake',
  Walrein = 'walrein',
  Wartortle = 'wartortle',
  Watchog = 'watchog',
  Wattrel = 'wattrel',
  Weavile = 'weavile',
  Weedle = 'weedle',
  Weepinbell = 'weepinbell',
  Weezing = 'weezing',
  Weezinggalar = 'weezinggalar',
  Whimsicott = 'whimsicott',
  Whirlipede = 'whirlipede',
  Whiscash = 'whiscash',
  Whismur = 'whismur',
  Wigglytuff = 'wigglytuff',
  Wiglett = 'wiglett',
  Wimpod = 'wimpod',
  Wingull = 'wingull',
  Wishiwashi = 'wishiwashi',
  Wishiwashischool = 'wishiwashischool',
  Wobbuffet = 'wobbuffet',
  Wochien = 'wochien',
  Woobat = 'woobat',
  Wooloo = 'wooloo',
  Wooper = 'wooper',
  Wooperpaldea = 'wooperpaldea',
  Wormadam = 'wormadam',
  Wormadamsandy = 'wormadamsandy',
  Wormadamtrash = 'wormadamtrash',
  Wugtrio = 'wugtrio',
  Wurmple = 'wurmple',
  Wynaut = 'wynaut',
  Wyrdeer = 'wyrdeer',
  Xatu = 'xatu',
  Xerneas = 'xerneas',
  Xerneasneutral = 'xerneasneutral',
  Xurkitree = 'xurkitree',
  Yamask = 'yamask',
  Yamaskgalar = 'yamaskgalar',
  Yamper = 'yamper',
  Yanma = 'yanma',
  Yanmega = 'yanmega',
  Yungoos = 'yungoos',
  Yveltal = 'yveltal',
  Zacian = 'zacian',
  Zaciancrowned = 'zaciancrowned',
  Zamazenta = 'zamazenta',
  Zamazentacrowned = 'zamazentacrowned',
  Zangoose = 'zangoose',
  Zapdos = 'zapdos',
  Zapdosgalar = 'zapdosgalar',
  Zarude = 'zarude',
  Zarudedada = 'zarudedada',
  Zebstrika = 'zebstrika',
  Zekrom = 'zekrom',
  Zeraora = 'zeraora',
  Zigzagoon = 'zigzagoon',
  Zigzagoongalar = 'zigzagoongalar',
  Zoroark = 'zoroark',
  Zoroarkhisui = 'zoroarkhisui',
  Zorua = 'zorua',
  Zoruahisui = 'zoruahisui',
  Zubat = 'zubat',
  Zweilous = 'zweilous',
  Zygarde = 'zygarde',
  Zygarde10 = 'zygarde10',
  Zygardecomplete = 'zygardecomplete'
}

export type PokemonLearnset = {
  __typename?: 'PokemonLearnset';
  /** The moves that are exclusively learned in the Unova Dream World */
  dreamworldMoves?: Maybe<Array<LearnsetMove>>;
  /** The moves that can be passed as egg moves */
  eggMoves?: Maybe<Array<LearnsetMove>>;
  /** The moves that are exclusive to event variants of the Pokémon */
  eventMoves?: Maybe<Array<LearnsetMove>>;
  /** The moves that can be learned through levelling up */
  levelUpMoves?: Maybe<Array<LearnsetLevelUpMove>>;
  /** The moves that can be learned from a Technical Machine or Technical Record */
  tmMoves?: Maybe<Array<LearnsetMove>>;
  /** The moves that can be learned from a move tutor */
  tutorMoves?: Maybe<Array<LearnsetMove>>;
  /** The moves that can be learned through virtual console transfer */
  virtualTransferMoves?: Maybe<Array<LearnsetMove>>;
};

/** The type of a Pokémon and that types matchup */
export type PokemonType = {
  __typename?: 'PokemonType';
  /** The type matchup for this type */
  matchup: TypeMatchup;
  /** The name of the typ */
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** Gets the details on a Pokémon ability, using the ability name */
  getAbility: Ability;
  /**
   * Returns a list of all the known Pokémon.
   *
   * For every Pokémon all the data on each requested field is returned.
   *
   * **_NOTE:_ To skip all CAP Pokémon, PokéStar Pokémon, Missingno, and 'M (00) provide an `offset` of 89**
   *
   * You can provide `take` to limit the amount of Pokémon to return (default: 1), set the offset of where to start with `offset`, and reverse the entire array with `reverse`.
   *
   * You can provide `takeFlavorTexts` to limit the amount of flavour texts to return, set the offset of where to start with `offsetFlavorTexts`, and reverse the entire array with `reverseFlavorTexts`.
   *
   * While the API will currently not rate limit the usage of this query, it may do so in the future.
   *
   * It is advisable to cache responses of this query.
   */
  getAllPokemon: Array<Pokemon>;
  /**
   * Gets details on a Pokémon ability, using a fuzzy search on name
   *
   * This can be used to find multiple results based on the query
   *
   * You can provide `take` to limit the amount of abilities to return (default: 1), set the offset of where to start with `offset`, and reverse the entire array with `reverse`.
   */
  getFuzzyAbility: Array<Ability>;
  /**
   * Gets details on a Pokémon item, using a fuzzy search on name
   *
   * This can be used to find multiple results based on the query
   *
   * By default only 1 result is returned. You can provide the arguments `take`, `offset`, and `reverse` to modify this behaviour.
   */
  getFuzzyItem: Array<Item>;
  /**
   * Gets the learnset for a given Pokémon and move.
   *
   * A fuzzy search is performed to find a matching Pokémon and move
   *
   * Multiple moves are possible by putting them in an array: `[move1, move2]`.
   *
   * You can also apply a generation filter (only results for the given generation will be returned) with the generation argument
   */
  getFuzzyLearnset: Learnset;
  /**
   * Gets details on a Pokémon move, using a fuzzy search on name
   *
   * This can be used to find multiple results based on the query
   *
   * By default only 1 result is returned. You can provide the arguments `take`, "offset", and "reverse" to modify this behaviour.
   */
  getFuzzyMove: Array<Move>;
  /**
   * Gets details on one or more Pokémon based on species name
   *
   * You can provide `take` to limit the amount of Pokémon to return (default: 1), set the offset of where to start with `offset`, and reverse the entire array with `reverse`.
   *
   * You can provide `takeFlavorTexts` to limit the amount of flavour texts to return, set the offset of where to start with `offsetFlavorTexts`, and reverse the entire array with `reverseFlavorTexts`.
   *
   * **Reversal is applied before pagination!**
   */
  getFuzzyPokemon: Array<Pokemon>;
  /** Gets the details on a Pokémon item, using the item name */
  getItem: Item;
  /**
   * Gets the learnsets for a given Pokémon and move.
   *
   * Multiple moves are possible by putting them in an array: `[move1, move2]`.
   *
   * You can also apply a generation filter (only results for the given generation will be returned) with the generation argument
   */
  getLearnset: Learnset;
  /** Gets the details on a Pokémon move, using the move name */
  getMove: Move;
  /**
   * Gets details on a single Pokémon based on species name
   *
   * You can provide `takeFlavorTexts` to limit the amount of flavour texts to return, set the offset of where to start with `offsetFlavorTexts`, and reverse the entire array with `reverseFlavorTexts`.
   *
   * **Reversal is applied before pagination!**
   */
  getPokemon: Pokemon;
  /**
   * Gets details on a single Pokémon based on National Pokédex number
   *
   * You can provide `takeFlavorTexts` to limit the amount of flavour texts to return, set the offset of where to start with `offsetFlavorTexts`, and reverse the entire array with `reverseFlavorTexts`.
   *
   * **Reversal is applied before pagination!**
   */
  getPokemonByDexNumber: Pokemon;
  /** Gets the type matchup data for the given type or types */
  getTypeMatchup: TypeMatchup;
};


export type QueryGetAbilityArgs = {
  ability: AbilitiesEnum;
};


export type QueryGetAllPokemonArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  offsetFlavorTexts?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  reverseFlavorTexts?: InputMaybe<Scalars['Boolean']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  takeFlavorTexts?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFuzzyAbilityArgs = {
  ability: Scalars['String']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFuzzyItemArgs = {
  item: Scalars['String']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFuzzyLearnsetArgs = {
  generation?: InputMaybe<Scalars['Int']['input']>;
  moves: Array<Scalars['String']['input']>;
  pokemon: Scalars['String']['input'];
};


export type QueryGetFuzzyMoveArgs = {
  move: Scalars['String']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetFuzzyPokemonArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  offsetFlavorTexts?: InputMaybe<Scalars['Int']['input']>;
  pokemon: Scalars['String']['input'];
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  reverseFlavorTexts?: InputMaybe<Scalars['Boolean']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  takeFlavorTexts?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetItemArgs = {
  item: ItemsEnum;
};


export type QueryGetLearnsetArgs = {
  generation?: InputMaybe<Scalars['Int']['input']>;
  moves: Array<MovesEnum>;
  pokemon: PokemonEnum;
};


export type QueryGetMoveArgs = {
  move: MovesEnum;
};


export type QueryGetPokemonArgs = {
  offsetFlavorTexts?: InputMaybe<Scalars['Int']['input']>;
  pokemon: PokemonEnum;
  reverseFlavorTexts?: InputMaybe<Scalars['Boolean']['input']>;
  takeFlavorTexts?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPokemonByDexNumberArgs = {
  number: Scalars['Int']['input'];
  offsetFlavorTexts?: InputMaybe<Scalars['Int']['input']>;
  reverseFlavorTexts?: InputMaybe<Scalars['Boolean']['input']>;
  takeFlavorTexts?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTypeMatchupArgs = {
  primaryType: TypesEnum;
  secondaryType?: InputMaybe<TypesEnum>;
};

/** A Pokémon's stats */
export type Stats = {
  __typename?: 'Stats';
  /** The base attack stat of a Pokémon */
  attack: Scalars['Int']['output'];
  /** The base defense stat of a Pokémon */
  defense: Scalars['Int']['output'];
  /** The base HP stat of a pokémon */
  hp: Scalars['Int']['output'];
  /** The base special attack stat of a Pokémon */
  specialattack: Scalars['Int']['output'];
  /** The base special defense stat of a Pokémon */
  specialdefense: Scalars['Int']['output'];
  /** The base speed stat of a Pokémon */
  speed: Scalars['Int']['output'];
};

/** A type matchup entry */
export type TypeEffectiveness = {
  __typename?: 'TypeEffectiveness';
  /** The types with 4x effectiveness */
  doubleEffectiveTypes: Array<Scalars['String']['output']>;
  /** The types with 0.25x effectiveness */
  doubleResistedTypes: Array<Scalars['String']['output']>;
  /** The types with 2x effectiveness */
  effectiveTypes: Array<Scalars['String']['output']>;
  /** The types with 0x effectiveness */
  effectlessTypes: Array<Scalars['String']['output']>;
  /** The types with 1x effectiveness */
  normalTypes: Array<Scalars['String']['output']>;
  /** The types with 0.5x effectiveness */
  resistedTypes: Array<Scalars['String']['output']>;
};

/** The type matchups for any one or two given types */
export type TypeMatchup = {
  __typename?: 'TypeMatchup';
  /** The type matchups when attacking */
  attacking: TypeEffectiveness;
  /** The type matchups when defending */
  defending: TypeEffectiveness;
};

/** The types in Pokémon */
export enum TypesEnum {
  Bug = 'bug',
  Dark = 'dark',
  Dragon = 'dragon',
  Electric = 'electric',
  Fairy = 'fairy',
  Fighting = 'fighting',
  Fire = 'fire',
  Flying = 'flying',
  Ghost = 'ghost',
  Grass = 'grass',
  Ground = 'ground',
  Ice = 'ice',
  Normal = 'normal',
  Poison = 'poison',
  Psychic = 'psychic',
  Rock = 'rock',
  Steel = 'steel',
  Water = 'water'
}

export type AbilityFragment = { __typename?: 'Ability', key: AbilitiesEnum, bulbapediaPage: string, desc?: string | null, isFieldAbility?: string | null, isNonstandard?: string | null, name: string, serebiiPage: string, shortDesc: string, smogonPage: string };

export type PokemonFragment = { __typename?: 'Pokemon', key: PokemonEnum, backSprite: string, baseForme?: string | null, baseSpecies?: string | null, baseStatsTotal: number, bulbapediaPage: string, classification?: string | null, respelling?: string | null, ipa?: string | null, color: string, cosmeticFormes?: Array<string> | null, cry?: string | null, eggGroups?: Array<string> | null, evolutionLevel?: string | null, forme?: string | null, formeLetter?: string | null, height: number, isEggObtainable: boolean, levellingRate?: string | null, maximumHatchTime?: number | null, minimumHatchTime?: number | null, num: number, otherFormes?: Array<string> | null, serebiiPage: string, shinyBackSprite: string, shinySprite: string, smogonPage: string, smogonTier: string, species: string, sprite: string, weight: number, mythical: boolean, legendary: boolean };

export type PokemonTypeFragment = { __typename?: 'PokemonType', name: string };

export type StatsFragment = { __typename?: 'Stats', attack: number, defense: number, hp: number, specialattack: number, specialdefense: number, speed: number };

export type CatchRateFragment = { __typename?: 'CatchRate', base: number, percentageWithOrdinaryPokeballAtFullHealth: string };

export type EvYieldsFragment = { __typename?: 'EvYields', attack: number, defense: number, hp: number, specialattack: number, specialdefense: number, speed: number };

export type FlavorFragment = { __typename?: 'Flavor', flavor: string, game: string };

export type GenderFragment = { __typename?: 'Gender', female: string, male: string };

export type ItemFragment = { __typename?: 'Item', key: ItemsEnum, bulbapediaPage: string, desc: string, generationIntroduced: number, isNonstandard?: string | null, name: string, serebiiPage: string, shortDesc?: string | null, smogonPage?: string | null, sprite: string };

export type LearnsetFragment = { __typename?: 'Learnset', backSprite: string, color: string, pokemonKey: PokemonEnum, num: number, shinyBackSprite: string, shinySprite: string, species: string, sprite: string };

export type LearnsetMoveFragment = { __typename?: 'LearnsetMove', generation: number };

export type LearnsetLevelUpMoveFragment = { __typename?: 'LearnsetLevelUpMove', generation: number, level: number };

export type MoveFragment = { __typename?: 'Move', key: MovesEnum, accuracy: number, basePower: string, bulbapediaPage: string, category: string, contestType?: string | null, desc?: string | null, isFieldMove?: string | null, isGMax?: string | null, isNonstandard?: string | null, isZ?: string | null, maxMovePower?: number | null, name: string, pp: number, priority: number, serebiiPage: string, shortDesc: string, smogonPage: string, target: string, type: string, zMovePower: number };

export type TypeEffectivenessFragment = { __typename?: 'TypeEffectiveness', doubleEffectiveTypes: Array<string>, doubleResistedTypes: Array<string>, effectiveTypes: Array<string>, effectlessTypes: Array<string>, normalTypes: Array<string>, resistedTypes: Array<string> };

export type GetAbilityQueryVariables = Exact<{
  ability: AbilitiesEnum;
}>;


export type GetAbilityQuery = { __typename?: 'Query', getAbility: { __typename?: 'Ability', key: AbilitiesEnum, bulbapediaPage: string, desc?: string | null, isFieldAbility?: string | null, isNonstandard?: string | null, name: string, serebiiPage: string, shortDesc: string, smogonPage: string, pokemonThatHaveThisAbility: Array<{ __typename?: 'Pokemon', key: PokemonEnum, backSprite: string, baseForme?: string | null, baseSpecies?: string | null, baseStatsTotal: number, bulbapediaPage: string, classification?: string | null, respelling?: string | null, ipa?: string | null, color: string, cosmeticFormes?: Array<string> | null, cry?: string | null, eggGroups?: Array<string> | null, evolutionLevel?: string | null, forme?: string | null, formeLetter?: string | null, height: number, isEggObtainable: boolean, levellingRate?: string | null, maximumHatchTime?: number | null, minimumHatchTime?: number | null, num: number, otherFormes?: Array<string> | null, serebiiPage: string, shinyBackSprite: string, shinySprite: string, smogonPage: string, smogonTier: string, species: string, sprite: string, weight: number, mythical: boolean, legendary: boolean } | null> } };

export type GetFuzzyAbilityQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  ability: Scalars['String']['input'];
}>;


export type GetFuzzyAbilityQuery = { __typename?: 'Query', getFuzzyAbility: Array<{ __typename?: 'Ability', key: AbilitiesEnum, bulbapediaPage: string, desc?: string | null, isFieldAbility?: string | null, isNonstandard?: string | null, name: string, serebiiPage: string, shortDesc: string, smogonPage: string, pokemonThatHaveThisAbility: Array<{ __typename?: 'Pokemon', key: PokemonEnum, backSprite: string, baseForme?: string | null, baseSpecies?: string | null, baseStatsTotal: number, bulbapediaPage: string, classification?: string | null, respelling?: string | null, ipa?: string | null, color: string, cosmeticFormes?: Array<string> | null, cry?: string | null, eggGroups?: Array<string> | null, evolutionLevel?: string | null, forme?: string | null, formeLetter?: string | null, height: number, isEggObtainable: boolean, levellingRate?: string | null, maximumHatchTime?: number | null, minimumHatchTime?: number | null, num: number, otherFormes?: Array<string> | null, serebiiPage: string, shinyBackSprite: string, shinySprite: string, smogonPage: string, smogonTier: string, species: string, sprite: string, weight: number, mythical: boolean, legendary: boolean } | null> }> };

export type GetPokemonByDexNumberQueryVariables = Exact<{
  offsetFlavorTexts?: InputMaybe<Scalars['Int']['input']>;
  takeFlavorTexts?: InputMaybe<Scalars['Int']['input']>;
  reverseFlavorTexts?: InputMaybe<Scalars['Boolean']['input']>;
  number: Scalars['Int']['input'];
}>;


export type GetPokemonByDexNumberQuery = { __typename?: 'Query', getPokemonByDexNumber: { __typename?: 'Pokemon', key: PokemonEnum, backSprite: string, baseForme?: string | null, baseSpecies?: string | null, baseStatsTotal: number, bulbapediaPage: string, classification?: string | null, respelling?: string | null, ipa?: string | null, color: string, cosmeticFormes?: Array<string> | null, cry?: string | null, eggGroups?: Array<string> | null, evolutionLevel?: string | null, forme?: string | null, formeLetter?: string | null, height: number, isEggObtainable: boolean, levellingRate?: string | null, maximumHatchTime?: number | null, minimumHatchTime?: number | null, num: number, otherFormes?: Array<string> | null, serebiiPage: string, shinyBackSprite: string, shinySprite: string, smogonPage: string, smogonTier: string, species: string, sprite: string, weight: number, mythical: boolean, legendary: boolean, baseStats: { __typename?: 'Stats', attack: number, defense: number, hp: number, specialattack: number, specialdefense: number, speed: number }, catchRate?: { __typename?: 'CatchRate', base: number, percentageWithOrdinaryPokeballAtFullHealth: string } | null, evolutions?: Array<{ __typename?: 'Pokemon', key: PokemonEnum, backSprite: string, baseForme?: string | null, baseSpecies?: string | null, baseStatsTotal: number, bulbapediaPage: string, classification?: string | null, respelling?: string | null, ipa?: string | null, color: string, cosmeticFormes?: Array<string> | null, cry?: string | null, eggGroups?: Array<string> | null, evolutionLevel?: string | null, forme?: string | null, formeLetter?: string | null, height: number, isEggObtainable: boolean, levellingRate?: string | null, maximumHatchTime?: number | null, minimumHatchTime?: number | null, num: number, otherFormes?: Array<string> | null, serebiiPage: string, shinyBackSprite: string, shinySprite: string, smogonPage: string, smogonTier: string, species: string, sprite: string, weight: number, mythical: boolean, legendary: boolean }> | null, evYields: { __typename?: 'EvYields', attack: number, defense: number, hp: number, specialattack: number, specialdefense: number, speed: number }, flavorTexts: Array<{ __typename?: 'Flavor', flavor: string, game: string }>, gender: { __typename?: 'Gender', female: string, male: string }, preevolutions?: Array<{ __typename?: 'Pokemon', key: PokemonEnum, backSprite: string, baseForme?: string | null, baseSpecies?: string | null, baseStatsTotal: number, bulbapediaPage: string, classification?: string | null, respelling?: string | null, ipa?: string | null, color: string, cosmeticFormes?: Array<string> | null, cry?: string | null, eggGroups?: Array<string> | null, evolutionLevel?: string | null, forme?: string | null, formeLetter?: string | null, height: number, isEggObtainable: boolean, levellingRate?: string | null, maximumHatchTime?: number | null, minimumHatchTime?: number | null, num: number, otherFormes?: Array<string> | null, serebiiPage: string, shinyBackSprite: string, shinySprite: string, smogonPage: string, smogonTier: string, species: string, sprite: string, weight: number, mythical: boolean, legendary: boolean }> | null, types: Array<{ __typename?: 'PokemonType', name: string }> } };

export type GetPokemonQueryVariables = Exact<{
  offsetFlavorTexts?: InputMaybe<Scalars['Int']['input']>;
  takeFlavorTexts?: InputMaybe<Scalars['Int']['input']>;
  reverseFlavorTexts?: InputMaybe<Scalars['Boolean']['input']>;
  pokemon: PokemonEnum;
}>;


export type GetPokemonQuery = { __typename?: 'Query', getPokemon: { __typename?: 'Pokemon', key: PokemonEnum, backSprite: string, baseForme?: string | null, baseSpecies?: string | null, baseStatsTotal: number, bulbapediaPage: string, classification?: string | null, respelling?: string | null, ipa?: string | null, color: string, cosmeticFormes?: Array<string> | null, cry?: string | null, eggGroups?: Array<string> | null, evolutionLevel?: string | null, forme?: string | null, formeLetter?: string | null, height: number, isEggObtainable: boolean, levellingRate?: string | null, maximumHatchTime?: number | null, minimumHatchTime?: number | null, num: number, otherFormes?: Array<string> | null, serebiiPage: string, shinyBackSprite: string, shinySprite: string, smogonPage: string, smogonTier: string, species: string, sprite: string, weight: number, mythical: boolean, legendary: boolean, baseStats: { __typename?: 'Stats', attack: number, defense: number, hp: number, specialattack: number, specialdefense: number, speed: number }, catchRate?: { __typename?: 'CatchRate', base: number, percentageWithOrdinaryPokeballAtFullHealth: string } | null, evolutions?: Array<{ __typename?: 'Pokemon', key: PokemonEnum, backSprite: string, baseForme?: string | null, baseSpecies?: string | null, baseStatsTotal: number, bulbapediaPage: string, classification?: string | null, respelling?: string | null, ipa?: string | null, color: string, cosmeticFormes?: Array<string> | null, cry?: string | null, eggGroups?: Array<string> | null, evolutionLevel?: string | null, forme?: string | null, formeLetter?: string | null, height: number, isEggObtainable: boolean, levellingRate?: string | null, maximumHatchTime?: number | null, minimumHatchTime?: number | null, num: number, otherFormes?: Array<string> | null, serebiiPage: string, shinyBackSprite: string, shinySprite: string, smogonPage: string, smogonTier: string, species: string, sprite: string, weight: number, mythical: boolean, legendary: boolean }> | null, evYields: { __typename?: 'EvYields', attack: number, defense: number, hp: number, specialattack: number, specialdefense: number, speed: number }, flavorTexts: Array<{ __typename?: 'Flavor', flavor: string, game: string }>, gender: { __typename?: 'Gender', female: string, male: string }, preevolutions?: Array<{ __typename?: 'Pokemon', key: PokemonEnum, backSprite: string, baseForme?: string | null, baseSpecies?: string | null, baseStatsTotal: number, bulbapediaPage: string, classification?: string | null, respelling?: string | null, ipa?: string | null, color: string, cosmeticFormes?: Array<string> | null, cry?: string | null, eggGroups?: Array<string> | null, evolutionLevel?: string | null, forme?: string | null, formeLetter?: string | null, height: number, isEggObtainable: boolean, levellingRate?: string | null, maximumHatchTime?: number | null, minimumHatchTime?: number | null, num: number, otherFormes?: Array<string> | null, serebiiPage: string, shinyBackSprite: string, shinySprite: string, smogonPage: string, smogonTier: string, species: string, sprite: string, weight: number, mythical: boolean, legendary: boolean }> | null, types: Array<{ __typename?: 'PokemonType', name: string }> } };

export type GetFuzzyPokemonQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  pokemon: Scalars['String']['input'];
  offsetFlavorTexts?: InputMaybe<Scalars['Int']['input']>;
  takeFlavorTexts?: InputMaybe<Scalars['Int']['input']>;
  reverseFlavorTexts?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetFuzzyPokemonQuery = { __typename?: 'Query', getFuzzyPokemon: Array<{ __typename?: 'Pokemon', key: PokemonEnum, backSprite: string, baseForme?: string | null, baseSpecies?: string | null, baseStatsTotal: number, bulbapediaPage: string, classification?: string | null, respelling?: string | null, ipa?: string | null, color: string, cosmeticFormes?: Array<string> | null, cry?: string | null, eggGroups?: Array<string> | null, evolutionLevel?: string | null, forme?: string | null, formeLetter?: string | null, height: number, isEggObtainable: boolean, levellingRate?: string | null, maximumHatchTime?: number | null, minimumHatchTime?: number | null, num: number, otherFormes?: Array<string> | null, serebiiPage: string, shinyBackSprite: string, shinySprite: string, smogonPage: string, smogonTier: string, species: string, sprite: string, weight: number, mythical: boolean, legendary: boolean, baseStats: { __typename?: 'Stats', attack: number, defense: number, hp: number, specialattack: number, specialdefense: number, speed: number }, catchRate?: { __typename?: 'CatchRate', base: number, percentageWithOrdinaryPokeballAtFullHealth: string } | null, evolutions?: Array<{ __typename?: 'Pokemon', key: PokemonEnum, backSprite: string, baseForme?: string | null, baseSpecies?: string | null, baseStatsTotal: number, bulbapediaPage: string, classification?: string | null, respelling?: string | null, ipa?: string | null, color: string, cosmeticFormes?: Array<string> | null, cry?: string | null, eggGroups?: Array<string> | null, evolutionLevel?: string | null, forme?: string | null, formeLetter?: string | null, height: number, isEggObtainable: boolean, levellingRate?: string | null, maximumHatchTime?: number | null, minimumHatchTime?: number | null, num: number, otherFormes?: Array<string> | null, serebiiPage: string, shinyBackSprite: string, shinySprite: string, smogonPage: string, smogonTier: string, species: string, sprite: string, weight: number, mythical: boolean, legendary: boolean }> | null, evYields: { __typename?: 'EvYields', attack: number, defense: number, hp: number, specialattack: number, specialdefense: number, speed: number }, flavorTexts: Array<{ __typename?: 'Flavor', flavor: string, game: string }>, gender: { __typename?: 'Gender', female: string, male: string }, preevolutions?: Array<{ __typename?: 'Pokemon', key: PokemonEnum, backSprite: string, baseForme?: string | null, baseSpecies?: string | null, baseStatsTotal: number, bulbapediaPage: string, classification?: string | null, respelling?: string | null, ipa?: string | null, color: string, cosmeticFormes?: Array<string> | null, cry?: string | null, eggGroups?: Array<string> | null, evolutionLevel?: string | null, forme?: string | null, formeLetter?: string | null, height: number, isEggObtainable: boolean, levellingRate?: string | null, maximumHatchTime?: number | null, minimumHatchTime?: number | null, num: number, otherFormes?: Array<string> | null, serebiiPage: string, shinyBackSprite: string, shinySprite: string, smogonPage: string, smogonTier: string, species: string, sprite: string, weight: number, mythical: boolean, legendary: boolean }> | null, types: Array<{ __typename?: 'PokemonType', name: string }> }> };

export type GetAllPokemonQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  offsetFlavorTexts?: InputMaybe<Scalars['Int']['input']>;
  takeFlavorTexts?: InputMaybe<Scalars['Int']['input']>;
  reverseFlavorTexts?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetAllPokemonQuery = { __typename?: 'Query', getAllPokemon: Array<{ __typename?: 'Pokemon', key: PokemonEnum, backSprite: string, baseForme?: string | null, baseSpecies?: string | null, baseStatsTotal: number, bulbapediaPage: string, classification?: string | null, respelling?: string | null, ipa?: string | null, color: string, cosmeticFormes?: Array<string> | null, cry?: string | null, eggGroups?: Array<string> | null, evolutionLevel?: string | null, forme?: string | null, formeLetter?: string | null, height: number, isEggObtainable: boolean, levellingRate?: string | null, maximumHatchTime?: number | null, minimumHatchTime?: number | null, num: number, otherFormes?: Array<string> | null, serebiiPage: string, shinyBackSprite: string, shinySprite: string, smogonPage: string, smogonTier: string, species: string, sprite: string, weight: number, mythical: boolean, legendary: boolean, baseStats: { __typename?: 'Stats', attack: number, defense: number, hp: number, specialattack: number, specialdefense: number, speed: number }, catchRate?: { __typename?: 'CatchRate', base: number, percentageWithOrdinaryPokeballAtFullHealth: string } | null, evolutions?: Array<{ __typename?: 'Pokemon', key: PokemonEnum, backSprite: string, baseForme?: string | null, baseSpecies?: string | null, baseStatsTotal: number, bulbapediaPage: string, classification?: string | null, respelling?: string | null, ipa?: string | null, color: string, cosmeticFormes?: Array<string> | null, cry?: string | null, eggGroups?: Array<string> | null, evolutionLevel?: string | null, forme?: string | null, formeLetter?: string | null, height: number, isEggObtainable: boolean, levellingRate?: string | null, maximumHatchTime?: number | null, minimumHatchTime?: number | null, num: number, otherFormes?: Array<string> | null, serebiiPage: string, shinyBackSprite: string, shinySprite: string, smogonPage: string, smogonTier: string, species: string, sprite: string, weight: number, mythical: boolean, legendary: boolean }> | null, evYields: { __typename?: 'EvYields', attack: number, defense: number, hp: number, specialattack: number, specialdefense: number, speed: number }, flavorTexts: Array<{ __typename?: 'Flavor', flavor: string, game: string }>, gender: { __typename?: 'Gender', female: string, male: string }, preevolutions?: Array<{ __typename?: 'Pokemon', key: PokemonEnum, backSprite: string, baseForme?: string | null, baseSpecies?: string | null, baseStatsTotal: number, bulbapediaPage: string, classification?: string | null, respelling?: string | null, ipa?: string | null, color: string, cosmeticFormes?: Array<string> | null, cry?: string | null, eggGroups?: Array<string> | null, evolutionLevel?: string | null, forme?: string | null, formeLetter?: string | null, height: number, isEggObtainable: boolean, levellingRate?: string | null, maximumHatchTime?: number | null, minimumHatchTime?: number | null, num: number, otherFormes?: Array<string> | null, serebiiPage: string, shinyBackSprite: string, shinySprite: string, smogonPage: string, smogonTier: string, species: string, sprite: string, weight: number, mythical: boolean, legendary: boolean }> | null, types: Array<{ __typename?: 'PokemonType', name: string }> }> };

export type GetItemQueryVariables = Exact<{
  item: ItemsEnum;
}>;


export type GetItemQuery = { __typename?: 'Query', getItem: { __typename?: 'Item', key: ItemsEnum, bulbapediaPage: string, desc: string, generationIntroduced: number, isNonstandard?: string | null, name: string, serebiiPage: string, shortDesc?: string | null, smogonPage?: string | null, sprite: string } };

export type GetFuzzyItemQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  item: Scalars['String']['input'];
}>;


export type GetFuzzyItemQuery = { __typename?: 'Query', getFuzzyItem: Array<{ __typename?: 'Item', key: ItemsEnum, bulbapediaPage: string, desc: string, generationIntroduced: number, isNonstandard?: string | null, name: string, serebiiPage: string, shortDesc?: string | null, smogonPage?: string | null, sprite: string }> };

export type GetLearnsetQueryVariables = Exact<{
  generation?: InputMaybe<Scalars['Int']['input']>;
  moves: Array<MovesEnum> | MovesEnum;
  pokemon: PokemonEnum;
}>;


export type GetLearnsetQuery = { __typename?: 'Query', getLearnset: { __typename?: 'Learnset', backSprite: string, color: string, pokemonKey: PokemonEnum, num: number, shinyBackSprite: string, shinySprite: string, species: string, sprite: string, dreamworldMoves?: Array<{ __typename?: 'LearnsetMove', generation: number }> | null, eggMoves?: Array<{ __typename?: 'LearnsetMove', generation: number }> | null, eventMoves?: Array<{ __typename?: 'LearnsetMove', generation: number }> | null, levelUpMoves?: Array<{ __typename?: 'LearnsetLevelUpMove', generation: number, level: number }> | null, tmMoves?: Array<{ __typename?: 'LearnsetMove', generation: number }> | null, tutorMoves?: Array<{ __typename?: 'LearnsetMove', generation: number }> | null, virtualTransferMoves?: Array<{ __typename?: 'LearnsetMove', generation: number }> | null } };

export type GetFuzzyLearnsetQueryVariables = Exact<{
  generation?: InputMaybe<Scalars['Int']['input']>;
  moves: Array<Scalars['String']['input']> | Scalars['String']['input'];
  pokemon: Scalars['String']['input'];
}>;


export type GetFuzzyLearnsetQuery = { __typename?: 'Query', getFuzzyLearnset: { __typename?: 'Learnset', backSprite: string, color: string, pokemonKey: PokemonEnum, num: number, shinyBackSprite: string, shinySprite: string, species: string, sprite: string, dreamworldMoves?: Array<{ __typename?: 'LearnsetMove', generation: number }> | null, eggMoves?: Array<{ __typename?: 'LearnsetMove', generation: number }> | null, eventMoves?: Array<{ __typename?: 'LearnsetMove', generation: number }> | null, levelUpMoves?: Array<{ __typename?: 'LearnsetLevelUpMove', generation: number, level: number }> | null, tmMoves?: Array<{ __typename?: 'LearnsetMove', generation: number }> | null, tutorMoves?: Array<{ __typename?: 'LearnsetMove', generation: number }> | null, virtualTransferMoves?: Array<{ __typename?: 'LearnsetMove', generation: number }> | null } };

export type GetMoveQueryVariables = Exact<{
  move: MovesEnum;
}>;


export type GetMoveQuery = { __typename?: 'Query', getMove: { __typename?: 'Move', key: MovesEnum, accuracy: number, basePower: string, bulbapediaPage: string, category: string, contestType?: string | null, desc?: string | null, isFieldMove?: string | null, isGMax?: string | null, isNonstandard?: string | null, isZ?: string | null, maxMovePower?: number | null, name: string, pp: number, priority: number, serebiiPage: string, shortDesc: string, smogonPage: string, target: string, type: string, zMovePower: number } };

export type GetFuzzyMoveQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
  move: Scalars['String']['input'];
}>;


export type GetFuzzyMoveQuery = { __typename?: 'Query', getFuzzyMove: Array<{ __typename?: 'Move', key: MovesEnum, accuracy: number, basePower: string, bulbapediaPage: string, category: string, contestType?: string | null, desc?: string | null, isFieldMove?: string | null, isGMax?: string | null, isNonstandard?: string | null, isZ?: string | null, maxMovePower?: number | null, name: string, pp: number, priority: number, serebiiPage: string, shortDesc: string, smogonPage: string, target: string, type: string, zMovePower: number }> };

export type GetTypeMatchupQueryVariables = Exact<{
  primaryType: TypesEnum;
  secondaryType?: InputMaybe<TypesEnum>;
}>;


export type GetTypeMatchupQuery = { __typename?: 'Query', getTypeMatchup: { __typename?: 'TypeMatchup', attacking: { __typename?: 'TypeEffectiveness', doubleEffectiveTypes: Array<string>, doubleResistedTypes: Array<string>, effectiveTypes: Array<string>, effectlessTypes: Array<string>, normalTypes: Array<string>, resistedTypes: Array<string> }, defending: { __typename?: 'TypeEffectiveness', doubleEffectiveTypes: Array<string>, doubleResistedTypes: Array<string>, effectiveTypes: Array<string>, effectlessTypes: Array<string>, normalTypes: Array<string>, resistedTypes: Array<string> } } };

export const AbilityFragmentDoc = gql`
    fragment ability on Ability {
  key
  bulbapediaPage
  desc
  isFieldAbility
  isNonstandard
  name
  serebiiPage
  shortDesc
  smogonPage
}
    `;
export const PokemonFragmentDoc = gql`
    fragment pokemon on Pokemon {
  key
  backSprite
  baseForme
  baseSpecies
  baseStatsTotal
  bulbapediaPage
  classification
  respelling
  ipa
  color
  cosmeticFormes
  cry
  eggGroups
  evolutionLevel
  forme
  formeLetter
  height
  isEggObtainable
  levellingRate
  maximumHatchTime
  minimumHatchTime
  num
  otherFormes
  serebiiPage
  shinyBackSprite
  shinySprite
  smogonPage
  smogonTier
  species
  sprite
  weight
  mythical
  legendary
}
    `;
export const PokemonTypeFragmentDoc = gql`
    fragment pokemonType on PokemonType {
  name
}
    `;
export const StatsFragmentDoc = gql`
    fragment stats on Stats {
  attack
  defense
  hp
  specialattack
  specialdefense
  speed
}
    `;
export const CatchRateFragmentDoc = gql`
    fragment catchRate on CatchRate {
  base
  percentageWithOrdinaryPokeballAtFullHealth
}
    `;
export const EvYieldsFragmentDoc = gql`
    fragment evYields on EvYields {
  attack
  defense
  hp
  specialattack
  specialdefense
  speed
}
    `;
export const FlavorFragmentDoc = gql`
    fragment flavor on Flavor {
  flavor
  game
}
    `;
export const GenderFragmentDoc = gql`
    fragment gender on Gender {
  female
  male
}
    `;
export const ItemFragmentDoc = gql`
    fragment item on Item {
  key
  bulbapediaPage
  desc
  generationIntroduced
  isNonstandard
  name
  serebiiPage
  shortDesc
  smogonPage
  sprite
}
    `;
export const LearnsetFragmentDoc = gql`
    fragment learnset on Learnset {
  backSprite
  color
  pokemonKey
  num
  shinyBackSprite
  shinySprite
  species
  sprite
}
    `;
export const LearnsetMoveFragmentDoc = gql`
    fragment learnsetMove on LearnsetMove {
  generation
}
    `;
export const LearnsetLevelUpMoveFragmentDoc = gql`
    fragment learnsetLevelUpMove on LearnsetLevelUpMove {
  generation
  level
}
    `;
export const MoveFragmentDoc = gql`
    fragment move on Move {
  key
  accuracy
  basePower
  bulbapediaPage
  category
  contestType
  desc
  isFieldMove
  isGMax
  isNonstandard
  isZ
  maxMovePower
  name
  pp
  priority
  serebiiPage
  shortDesc
  smogonPage
  target
  type
  zMovePower
}
    `;
export const TypeEffectivenessFragmentDoc = gql`
    fragment typeEffectiveness on TypeEffectiveness {
  doubleEffectiveTypes
  doubleResistedTypes
  effectiveTypes
  effectlessTypes
  normalTypes
  resistedTypes
}
    `;
export const GetAbilityDocument = gql`
    query GetAbility($ability: AbilitiesEnum!) {
  getAbility(ability: $ability) {
    ...ability
    pokemonThatHaveThisAbility {
      ...pokemon
    }
  }
}
    ${AbilityFragmentDoc}
${PokemonFragmentDoc}`;

export function useGetAbilityQuery(options: Omit<Urql.UseQueryArgs<GetAbilityQueryVariables>, 'query'>) {
  return Urql.useQuery<GetAbilityQuery, GetAbilityQueryVariables>({ query: GetAbilityDocument, ...options });
};
export const GetFuzzyAbilityDocument = gql`
    query GetFuzzyAbility($offset: Int, $take: Int, $reverse: Boolean, $ability: String!) {
  getFuzzyAbility(
    offset: $offset
    take: $take
    reverse: $reverse
    ability: $ability
  ) {
    ...ability
    pokemonThatHaveThisAbility {
      ...pokemon
    }
  }
}
    ${AbilityFragmentDoc}
${PokemonFragmentDoc}`;

export function useGetFuzzyAbilityQuery(options: Omit<Urql.UseQueryArgs<GetFuzzyAbilityQueryVariables>, 'query'>) {
  return Urql.useQuery<GetFuzzyAbilityQuery, GetFuzzyAbilityQueryVariables>({ query: GetFuzzyAbilityDocument, ...options });
};
export const GetPokemonByDexNumberDocument = gql`
    query GetPokemonByDexNumber($offsetFlavorTexts: Int, $takeFlavorTexts: Int, $reverseFlavorTexts: Boolean, $number: Int!) {
  getPokemonByDexNumber(
    offsetFlavorTexts: $offsetFlavorTexts
    takeFlavorTexts: $takeFlavorTexts
    reverseFlavorTexts: $reverseFlavorTexts
    number: $number
  ) {
    ...pokemon
    baseStats {
      ...stats
    }
    catchRate {
      ...catchRate
    }
    evolutions {
      ...pokemon
    }
    evYields {
      ...evYields
    }
    flavorTexts {
      ...flavor
    }
    gender {
      ...gender
    }
    preevolutions {
      ...pokemon
    }
    types {
      ...pokemonType
    }
  }
}
    ${PokemonFragmentDoc}
${StatsFragmentDoc}
${CatchRateFragmentDoc}
${EvYieldsFragmentDoc}
${FlavorFragmentDoc}
${GenderFragmentDoc}
${PokemonTypeFragmentDoc}`;

export function useGetPokemonByDexNumberQuery(options: Omit<Urql.UseQueryArgs<GetPokemonByDexNumberQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPokemonByDexNumberQuery, GetPokemonByDexNumberQueryVariables>({ query: GetPokemonByDexNumberDocument, ...options });
};
export const GetPokemonDocument = gql`
    query GetPokemon($offsetFlavorTexts: Int, $takeFlavorTexts: Int, $reverseFlavorTexts: Boolean, $pokemon: PokemonEnum!) {
  getPokemon(
    offsetFlavorTexts: $offsetFlavorTexts
    takeFlavorTexts: $takeFlavorTexts
    reverseFlavorTexts: $reverseFlavorTexts
    pokemon: $pokemon
  ) {
    ...pokemon
    baseStats {
      ...stats
    }
    catchRate {
      ...catchRate
    }
    evolutions {
      ...pokemon
    }
    evYields {
      ...evYields
    }
    flavorTexts {
      ...flavor
    }
    gender {
      ...gender
    }
    preevolutions {
      ...pokemon
    }
    types {
      ...pokemonType
    }
  }
}
    ${PokemonFragmentDoc}
${StatsFragmentDoc}
${CatchRateFragmentDoc}
${EvYieldsFragmentDoc}
${FlavorFragmentDoc}
${GenderFragmentDoc}
${PokemonTypeFragmentDoc}`;

export function useGetPokemonQuery(options: Omit<Urql.UseQueryArgs<GetPokemonQueryVariables>, 'query'>) {
  return Urql.useQuery<GetPokemonQuery, GetPokemonQueryVariables>({ query: GetPokemonDocument, ...options });
};
export const GetFuzzyPokemonDocument = gql`
    query GetFuzzyPokemon($offset: Int, $take: Int, $reverse: Boolean, $pokemon: String!, $offsetFlavorTexts: Int, $takeFlavorTexts: Int, $reverseFlavorTexts: Boolean) {
  getFuzzyPokemon(
    offset: $offset
    take: $take
    reverse: $reverse
    pokemon: $pokemon
    offsetFlavorTexts: $offsetFlavorTexts
    takeFlavorTexts: $takeFlavorTexts
    reverseFlavorTexts: $reverseFlavorTexts
  ) {
    ...pokemon
    baseStats {
      ...stats
    }
    catchRate {
      ...catchRate
    }
    evolutions {
      ...pokemon
    }
    evYields {
      ...evYields
    }
    flavorTexts {
      ...flavor
    }
    gender {
      ...gender
    }
    preevolutions {
      ...pokemon
    }
    types {
      ...pokemonType
    }
  }
}
    ${PokemonFragmentDoc}
${StatsFragmentDoc}
${CatchRateFragmentDoc}
${EvYieldsFragmentDoc}
${FlavorFragmentDoc}
${GenderFragmentDoc}
${PokemonTypeFragmentDoc}`;

export function useGetFuzzyPokemonQuery(options: Omit<Urql.UseQueryArgs<GetFuzzyPokemonQueryVariables>, 'query'>) {
  return Urql.useQuery<GetFuzzyPokemonQuery, GetFuzzyPokemonQueryVariables>({ query: GetFuzzyPokemonDocument, ...options });
};
export const GetAllPokemonDocument = gql`
    query GetAllPokemon($offset: Int, $take: Int, $reverse: Boolean, $offsetFlavorTexts: Int, $takeFlavorTexts: Int, $reverseFlavorTexts: Boolean) {
  getAllPokemon(
    offset: $offset
    take: $take
    reverse: $reverse
    offsetFlavorTexts: $offsetFlavorTexts
    takeFlavorTexts: $takeFlavorTexts
    reverseFlavorTexts: $reverseFlavorTexts
  ) {
    ...pokemon
    baseStats {
      ...stats
    }
    catchRate {
      ...catchRate
    }
    evolutions {
      ...pokemon
    }
    evYields {
      ...evYields
    }
    flavorTexts {
      ...flavor
    }
    gender {
      ...gender
    }
    preevolutions {
      ...pokemon
    }
    types {
      ...pokemonType
    }
  }
}
    ${PokemonFragmentDoc}
${StatsFragmentDoc}
${CatchRateFragmentDoc}
${EvYieldsFragmentDoc}
${FlavorFragmentDoc}
${GenderFragmentDoc}
${PokemonTypeFragmentDoc}`;

export function useGetAllPokemonQuery(options?: Omit<Urql.UseQueryArgs<GetAllPokemonQueryVariables>, 'query'>) {
  return Urql.useQuery<GetAllPokemonQuery, GetAllPokemonQueryVariables>({ query: GetAllPokemonDocument, ...options });
};
export const GetItemDocument = gql`
    query GetItem($item: ItemsEnum!) {
  getItem(item: $item) {
    ...item
  }
}
    ${ItemFragmentDoc}`;

export function useGetItemQuery(options: Omit<Urql.UseQueryArgs<GetItemQueryVariables>, 'query'>) {
  return Urql.useQuery<GetItemQuery, GetItemQueryVariables>({ query: GetItemDocument, ...options });
};
export const GetFuzzyItemDocument = gql`
    query GetFuzzyItem($offset: Int, $take: Int, $reverse: Boolean, $item: String!) {
  getFuzzyItem(offset: $offset, take: $take, reverse: $reverse, item: $item) {
    ...item
  }
}
    ${ItemFragmentDoc}`;

export function useGetFuzzyItemQuery(options: Omit<Urql.UseQueryArgs<GetFuzzyItemQueryVariables>, 'query'>) {
  return Urql.useQuery<GetFuzzyItemQuery, GetFuzzyItemQueryVariables>({ query: GetFuzzyItemDocument, ...options });
};
export const GetLearnsetDocument = gql`
    query GetLearnset($generation: Int, $moves: [MovesEnum!]!, $pokemon: PokemonEnum!) {
  getLearnset(generation: $generation, moves: $moves, pokemon: $pokemon) {
    ...learnset
    dreamworldMoves {
      ...learnsetMove
    }
    eggMoves {
      ...learnsetMove
    }
    eventMoves {
      ...learnsetMove
    }
    levelUpMoves {
      ...learnsetLevelUpMove
    }
    tmMoves {
      ...learnsetMove
    }
    tutorMoves {
      ...learnsetMove
    }
    virtualTransferMoves {
      ...learnsetMove
    }
  }
}
    ${LearnsetFragmentDoc}
${LearnsetMoveFragmentDoc}
${LearnsetLevelUpMoveFragmentDoc}`;

export function useGetLearnsetQuery(options: Omit<Urql.UseQueryArgs<GetLearnsetQueryVariables>, 'query'>) {
  return Urql.useQuery<GetLearnsetQuery, GetLearnsetQueryVariables>({ query: GetLearnsetDocument, ...options });
};
export const GetFuzzyLearnsetDocument = gql`
    query GetFuzzyLearnset($generation: Int, $moves: [String!]!, $pokemon: String!) {
  getFuzzyLearnset(generation: $generation, moves: $moves, pokemon: $pokemon) {
    ...learnset
    dreamworldMoves {
      ...learnsetMove
    }
    eggMoves {
      ...learnsetMove
    }
    eventMoves {
      ...learnsetMove
    }
    levelUpMoves {
      ...learnsetLevelUpMove
    }
    tmMoves {
      ...learnsetMove
    }
    tutorMoves {
      ...learnsetMove
    }
    virtualTransferMoves {
      ...learnsetMove
    }
  }
}
    ${LearnsetFragmentDoc}
${LearnsetMoveFragmentDoc}
${LearnsetLevelUpMoveFragmentDoc}`;

export function useGetFuzzyLearnsetQuery(options: Omit<Urql.UseQueryArgs<GetFuzzyLearnsetQueryVariables>, 'query'>) {
  return Urql.useQuery<GetFuzzyLearnsetQuery, GetFuzzyLearnsetQueryVariables>({ query: GetFuzzyLearnsetDocument, ...options });
};
export const GetMoveDocument = gql`
    query GetMove($move: MovesEnum!) {
  getMove(move: $move) {
    ...move
  }
}
    ${MoveFragmentDoc}`;

export function useGetMoveQuery(options: Omit<Urql.UseQueryArgs<GetMoveQueryVariables>, 'query'>) {
  return Urql.useQuery<GetMoveQuery, GetMoveQueryVariables>({ query: GetMoveDocument, ...options });
};
export const GetFuzzyMoveDocument = gql`
    query GetFuzzyMove($offset: Int, $take: Int, $reverse: Boolean, $move: String!) {
  getFuzzyMove(offset: $offset, take: $take, reverse: $reverse, move: $move) {
    ...move
  }
}
    ${MoveFragmentDoc}`;

export function useGetFuzzyMoveQuery(options: Omit<Urql.UseQueryArgs<GetFuzzyMoveQueryVariables>, 'query'>) {
  return Urql.useQuery<GetFuzzyMoveQuery, GetFuzzyMoveQueryVariables>({ query: GetFuzzyMoveDocument, ...options });
};
export const GetTypeMatchupDocument = gql`
    query GetTypeMatchup($primaryType: TypesEnum!, $secondaryType: TypesEnum) {
  getTypeMatchup(primaryType: $primaryType, secondaryType: $secondaryType) {
    attacking {
      ...typeEffectiveness
    }
    defending {
      ...typeEffectiveness
    }
  }
}
    ${TypeEffectivenessFragmentDoc}`;

export function useGetTypeMatchupQuery(options: Omit<Urql.UseQueryArgs<GetTypeMatchupQueryVariables>, 'query'>) {
  return Urql.useQuery<GetTypeMatchupQuery, GetTypeMatchupQueryVariables>({ query: GetTypeMatchupDocument, ...options });
};