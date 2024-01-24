export const richPeople = [
  'The mayor',
  'War criminal (retired)',
  'Butter baron',
  'Fireworks factory magnate',
  'Exotic/mythical animal menagerie owner',
  'Sweatshop fashion icon'
];

export const richPeopleReadonly = [
  'the mayor',
  'a war criminal (retired)',
  'the butter baron',
  'a fireworks factory magnate',
  'an exotic/mythical animal menagerie owner',
  'a sweatshop fashion icon'
];

export const locations = [
  'Gala of the decade at the mayor\'s mansion',
  'Private fortified train',
  'Crumbling castle residence',
  'Secret underwater base',
  'Ancient volcano temple',
  'Luxurious mansion on the edge of a cliff'
];

export const locationsReadonly = [
  'the gala of the decade at the mayor\'s mansion',
  'a private fortified train',
  'a (rented) crumbling castle residence',
  'a secret underwater base',
  'an ancient volcano temple',
  'a luxurious mansion on the edge of a cliff'
];

export const marks = [
  'Big honking gold bars (heavy)',
  'Imprisoned greed demon (loud, complains)',
  'The world\'s the most expensive dog',
  'Recipe for the secret sauce (kept in 300lb safe)',
  'Hand of king midas (still works!)',
  'Potion of eternal youth (drinkable by two goblins or one human)'
];

export const marksReadonly = [
  'big honking gold bars',
  'an imprisoned greed demon',
  'the world\'s the most expensive dog',
  'a 300lb safe that contains the recipe for the secret sauce',
  'the hand of king midas',
  'a potion of eternal youth (drinkable by two goblins or one human)'
];

export const protectors = [
  'bloodthirsty goblin hating pirate mercenaries',
  'merciless automata programmed to kill goblins on sight',
  'vicious anti-goblin attack wyverns',
  'dwarves (just really hate goblins)',
  'a crack anti-goblin assault squad with cool call signs',
  'bound goblin-destroying shadow demons (its in the contract)'
];

export const protectorsReadonly = [
  'bloodthirsty goblin hating pirate mercenaries',
  'merciless automata programmed to kill goblins on sight',
  'vicious anti-goblin attack wyverns',
  'dwarves that just really hate goblins',
  'a crack anti-goblin assault squad with cool call signs',
  'bound goblin-destroying shadow demons'
];

export const containers = [
  'a glass room suspended over a lake (of lava?)',
  'a clockwork vault that changes shape every hour',
  'an enormous quantum vault connected by a series of portals',
  'a living vault embedded in a huge beast',
  'the torment nexus',
  'a case that explodes if it feels the touch of a goblin for more than five seconds'
];

export const containersReadonly = [
  'a glass room suspended over a lake (of lava?)',
  'a clockwork vault that changes shape every hour',
  'an enormous quantum vault connected by a series of portals',
  'a living vault embedded in a huge beast',
  'the torment nexus',
  'a case that explodes if it feels the touch of a goblin for more than five seconds'
];

export const assSizes = [
  '(0) shame to goblinkind',
  '(1) firm handful',
  '(2) bubble butt',
  '(3) thick stack of pancakes',
  '(4) green dump truck',
  '(5) the juggernaut',
  '(6) the terminator',
  '(7) oh no'
];

export enum AssOriginSkills {
  charisma = 'charisma',
  fashion = 'fashion',
  wineTasting = 'wine tasting',
  stabbing = 'stabbing',
  biting = 'biting',
  spitting = 'spitting',
  detectMagic = 'detect magic',
  useMagicDevice = 'use magic device',
  weightLifting = 'weight lifting',
  climbing = 'climbing',
  calisthenics = 'calisthenics',
  nature = 'nature',
  alchemy = 'alchemy',
  skinnyDipping = 'skinny dipping'
};

export const assOrigins = [
  {
    desc: 'A life of leisure and indolence',
    skills: [
      AssOriginSkills.charisma,
      AssOriginSkills.fashion,
      AssOriginSkills.wineTasting
    ]
  },
  {
    desc: 'Long years in the goblin wars',
    skills: [
      AssOriginSkills.stabbing,
      AssOriginSkills.biting,
      AssOriginSkills.spitting
    ]
  },
  {
    desc: 'Accident at wizard summer camp',
    skills: [
      AssOriginSkills.detectMagic,
      AssOriginSkills.useMagicDevice
    ]
  },
  {
    desc: 'Worked hard for it',
    skills: [
      AssOriginSkills.weightLifting,
      AssOriginSkills.climbing,
      AssOriginSkills.calisthenics
    ]
  },
  {
    desc: 'Blessed by an enthusiastic nymph',
    skills: [
      AssOriginSkills.nature,
      AssOriginSkills.alchemy,
      AssOriginSkills.skinnyDipping
    ]
  },
  {
    desc: 'Big natural',
    skills: []
  }
] as const;

export const classes = [
  {
    name: 'Fighter',
    skills: 'fighting, stunt work',
    ability: `Roll ass to instantly disarm an opponent or violently smash a non-reinforced object or door into pieces`
  },
  {
    name: 'Thief',
    skills: 'lock picking, sneaking, pulling a fast one',
    ability: 'Roll ass to instantly steal any loose object not held or worn in hand\'s reach (doesn\'t work on other thieves)'
  },
  {
    name: 'Barbarian',
    skills: 'intimidation, athletics, competitive eating',
    ability: 'No penalty for dazed. May ignore being knocked out once per mission.'
  },
  {
    name: 'Wizard',
    skills: 'knowledge (goblin magic), dewey decimal system',
    ability: 'May roll ass to light most anything on fire'
  },
  {
    name: 'Priest',
    skills: 'knowledge (goblin religion), gardening, trading cards',
    ability: 'A priest may roll ass to pray to a goblin deity to make a re-roll of all dice (take second result as final) for anyone, may re-roll after seeing final result. This always works twice. The third time or more, the deity may demand a price.'
  },
  {
    name: 'Bard',
    skills: 'performance, alcohol tolerance, making playlists',
    ability: 'A bard may roll ass to perform with their instrument of choice or speech and convincingly distract a small or large group of people or creatures for 1 minute plus an additional minute per 6 rolled, only works once on the same group of people.'
  },
  {
    name: 'Warlock',
    skills: 'knowledge (goblin occult), candles',
    ability: 'You may curse someone and roll ass to take them out non-lethally instantly, they have to be able to hear you. They recover after 1 minute and it only works on the same person once.'
  },
  {
    name: 'Paladin',
    skills: 'knowledge (non-goblin religion), armor car, baking',
    ability: 'May always choose to count own ass size as 1 when rolling'
  }
] as const;

export const defaultPocketContents = [
  'fabulous hat, stethoscope, tape, screwdriver, bottle of orc liquor (antiseptic, possibly drinkable)',
  'the greatest perfectly shaped smooth and shiny stone you have ever seen',
  '3 meat pies, knife, big knife, ten foot long rope',
  'telescope (stolen), strong acid, four empty glass vials, unexploded artillery shell',
  'oddly sized key, bottle of oil (flammable), jar of ball bearings',
  '3 different pairs of shoes, sunglasses, overcoat, loose sandwich, matches'
];