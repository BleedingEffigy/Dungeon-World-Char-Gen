
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
      class: 'Barbarian',
      race: [{ Outsider : 'You may be elf, dwarf, halfling, or human, but you and your people are not from around here. At the beginning of each session, the GM will ask you something about your homeland, why you left, or what you left behind. If you answer them, mark XP.' }],
      names: ['Gorm', 'Si-Yi', 'Priscilla', 'Sen', 'Xia', 'Anneira', 'Haepha', 'Lur', 'Shar', 'Korrin', 'Nkosi', 'Fafnir', 'Qua', 'Sacer', 'Vercin’geto', 'Barbozar', 'Clovis', 'Frael', 'Thra raxes', 'Sillius',' Sha Sheena', 'Khamisi'],
      titles: [ 'the Glorious', 'the Hungry', 'the Irascible', 'the Undefeated', 'the Gluttonous', 'Foesmasher', 'Bonebreaker', 'the Mirthful', 'the Melancholic', 'All Mighty', 'the Giant', 'the Triumphant'],
      looks: {
          eyes: ['Tormented eyes', 'Haunted eyes', 'Wild eyes', 'Shrouded eyes'],
          body: ['Mighty thews', 'Long shanks', 'Scrawny body', 'Supple body'],
          tattoos: ['Strange tattoos', 'Unusual jewelry', 'Unmarred by decoration'],
          clothes: ['Scraps', 'Silks', 'Scavenger’s outfit', 'Weather inappropriate clothes']
      },
      stats: {
          maxHp: '8+CON',
          baseDmg: 'd10'
      },
      alignment: [
          { chaotic : 'You eschew a convention of the civilized world.'},
          { neutral: 'Teach someone the ways of your people.' }
      ],
      bonds: ['is puny and foolish, but amusing to me.', '’s ways are strange and confusing.', 'is always getting into trouble—I must protect them from themselves.', 'shares my hunger for glory; the earth will tremble at our passing!'],
      gear: {
          load: '8+STR',
          backpack: ['dungeon rations (5 uses, 1 weight)', 'a dagger (hand, 1 weight)', 'some token of where you’ve traveled or where you’re from'],
          randomWeapon: [ 'Axe (close, 1 weight)', 'Two handed sword (close, +1 damage, 2 weight)' ],
          randomArmor: ['Adventuring gear (1 weight) and dungeon rations (5 uses, 1 weight)', 'Chainmail (1 armor, 1 weight)']
      },
      appetites: ['Pure destruction', 'Power over others', 'Mortal pleasures', 'Conquest', 'Riches and property', 'Fame and glory'],
      startingMoves: [
          { 'Herculean Appetites' : `Others may content themselves with just a taste of wine, or dominion over a servant
           or two, but you want more. Choose two appetites. While pursuing one of your appetites if you would roll for a 
           move, instead of rolling 2d6 you roll 1d6+1d8. If the d6 is the higher die of the pair, the GM will also introduce 
           a complication or danger that comes about due to your heedless pursuits.` },
           { 'The Upper Hand' : 'You take +1 ongoing to last breath rolls. When you take your last breath, on a 7–9 you make an offer to Death in return for your life. If Death accepts he will return you to life. If not, you die.' },
           { 'Musclebound' : 'While you wield a weapon it gains the forceful and messy tags.' },
           { 'What Are You Waiting For?' : 'When you cry out a challenge to your enemies, roll+Con. On a 10+ they treat you as the most obvious threat to be dealt with and ignore your companions, take +2 damage ongoing against them. On a 7–9 only a few (the weakest or most foolhardy among them) fall prey to your taunting.' },
            [
                { 'Full Plate and Packing Steel': 'You ignore the clumsy tag on armor you wear.' },
                { 'Unencumbered, Unharmed': 'So long as you are below your Load and neither wear armor nor carry a shield, take +1 armor.' }
            ]
        ],
        advancedMoves: [
            {'Still Hungry': 'Choose an additional appetite.'},
            {'Appetite for Destruction' : 'Take a move from the fighter, bard or thief class list. You may not take multiclass moves from those classes.'},
            { 'My Love For You Is Like a Truck' : 'When you perform a feat of strength, name someone present whom you have impressed and take +1 forward to parley with them.' },
            { 'What Is Best In Life' : 'At the end of a session, if during this session you have crushed your enemies, seen them driven before you, or have heard the lamentations of their kinfolk mark XP.'},
            { 'Wide Wanderer': 'You’ve traveled the wide world over. When you arrive someplace ask the GM about any important traditions, rituals, and so on, they’ll tell you what you need to know.'},
            { 'Usurper' : 'When you prove yourself superior to a person in power, take +1 forward with their followers, underlings, and hangers on.' },
            { 'Khan of Khans': 'Your hirelings always accept the gratuitous fulfillment of one of your appetites as payment.'},
            { 'Samson': 'You may take a debility to immediately break free of any physical or mental restraint.'},
            { 'Smash!' : 'When you hack and slash, on a 12+ deal your damage and choose something physical your target has (a weapon, their position, a limb): they lose it.'},
            { 'Indestructible Hunger': 'When you take damage you can choose to take 1 ongoing until you sate one of your appetites instead of taking the damage. If you already have this penalty you cannot choose this option.' },
            { 'Eye for Weakness': 'When you discern realities add “What here is weak or vulnerable?” to the list of questions you can ask.' },
            { 'On the Move': 'When you defy a danger caused by movement (maybe falling off a narrow bridge or rushing past an armed guard) take +1.'}
        ],
        advancedMoves2: [
            { 'A Good Day to Die': 'As long as you have less than your Con in current HP (or 1, whichever is higher) take +1 ongoing.' },
            { 'Kill ‘em All': 'Requires: Appetite for Destruction. Take another move from the fighter, bard or thief class list. You may not take multiclass moves from those classes.' },
            { 'War Cry': 'When you enter battle with a show of force (a shout, a rallying cry, a battle dance) roll+Cha. On a 10+ both, On a 7–9 one or the other: Your allies are rallied and take +1 forward; Your enemies feel fear and act accordingly (avoiding you, hiding, attacking with fear driven abandon)' },
            { 'Mark of Might' : 'When you take this move and spend some uninterrupted time reflecting on your past glories you may mark yourself with a symbol of your power (a long braid tied with bells, ritual scars or tattoos, etc.) Any intelligent mortal creature who sees this symbol knows instinctively that you are a force to be reckoned with and treats you appropriately.'},
            { 'More! Always More!': 'When you satisfy an appetite to the extreme (destroying something unique and significant, gaining enormous fame, riches, power, etc.) you may choose to resolve it. Cross it off the list and mark XP. While you may pursue that appetite again, you no longer feel the burning desire you once did. In its place, choose a new appetite from the list or write your own.' },
            { 'The One Who Knocks': 'When you defy danger, on a 12+ you turn the danger back on itself, the GM will describe how.'},
            { 'Healthy Distrust': 'Whenever the unclean magic wielded by mortal men causes you to defy danger, treat any result of 6 as a 7–9.'},
            { 'For the Blood God': 'You are initiated in the old ways, the ways of sacrifice. Choose something your gods (or the ancestor spirits, or your totem, etc) value—gold, blood, bones or the like. When you sacrifice those things as per your rites and rituals, roll+Wis. On a 10+ the GM will grant you insight into your current trouble or a boon to help you. On a 7–9 the sacrifice is not enough and your gods take of your flesh as well, but still grant you some insight or boon. On a miss, you earn the ire of the fickle spirits.'}
        ]

    })
}
