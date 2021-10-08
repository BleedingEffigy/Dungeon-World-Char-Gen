export default function handler(req, res)
{
    res.status(200).json({
        class: 'ranger',
        race: [
            { elf: 'When you undertake a perilous journey through wilderness whatever job you take you succeed as if you rolled a 10+.'},
            { human: 'When you make camp in a dungeon or city, you don’t need to consume a ration.'}
        ],
        names: [
            { elf: [ 'Throndir', 'Elrosine', 'Aranwe', 'Celion', 'Dambrath', 'Lanethe' ]},
            { human: ['Jonah', 'Halek', 'Brandon', 'Emory', 'Shrike', 'Nora', 'Diana'] }
        ],
        looks: {
            eyes: ['Wild Eyes', 'Sharp Eyes', 'Animal Eyes'],
            hair: ['Hooded Head', 'Wild Hair', 'Bald'],
            body: ['Lithe Body', 'Wild Body', 'Sharp Body'],
            clothes: ['Cape', 'Camouflage', 'Traveling Clothes']
        },
        stats: {
            maxHp: '8+CON',
            baseDmg: 'd8'
        },
        alignment: [
            { Chaotic : 'Free someone from literal or figurative bonds.' },
            { Good: 'Endanger yourself to combat an unnatural threat.' },
            { Neutral: 'Help an animal or spirit of the wild.' }
        ],
        bonds: [ 'I have guided ___ before and they owe me for it.', '___ is a friend of nature, so I will be their friend as well.',
    '___has no respect for nature, so I have no respect for them.', '__does not understand life in the wild, so I will teach them.' ],
        gear: {
            load: '11+STR',
            backpack: ['dungeon rations (5 uses, 1 weight)', 'leather armor (1 armor, 1 weight)', 'bundle of arrows (3 ammo, 1 weight)'],
            randomWeapon: ['Hunter’s bow (near, far, 1 weight) and short sword (close, 1 weight)', 'Hunter’s bow (near, far, 1 weight) and spear (reach, 1 weight)'],
            randomArmor: [ 'Adventuring gear (1 weight) and dungeon rations (1 weight)', 'Adventuring gear (1 weight) and bundle of arrows (3 ammo, 1 weight)' ]
        },
        startingMoves: [
            { 'Hunt and Track (Wis)': 'When you follow a trail of clues left behind by passing creatures, roll+WIS. ✴ On a 7+, you follow the creature’s trail until there’s a significant change in its direction or mode of travel. ✴ On a 10+, you also choose 1: Gain a useful bit of information about your quarry, the GM will tell you what. Determine what caused the trail to end'},
            { 'Called Shot': 'When you attack a defenseless or surprised enemy at range, you can choose to deal your damage or name your target and roll+DEX. Head ✴ 10+: As 7–9, plus your damage, ✴ 7-9: They do nothing but stand and drool for a few moments. Arms ✴ 10+: As 7-9, plus your damage. ✴ 7-9: They drop anything they’re holding. Legs: ✴ 10+: As 7-9, plus your damage ✴ 7-9: They’re hobbled and slow moving.' },
            { 'Animal Companion' : { 
                description: 'You have a supernatural connection with a loyal animal. You can’t talk to it per se but it always acts as you wish it to. Name your animal companion and choose a species',
                species: ['Wolf', 'cougar', 'bear', 'eagle', 'dog', 'hawk', 'cat', 'owl', 'pigeon', 'rat', 'mule'],
                base: ['Ferocity +2, Cunning +1, 1 Armor, Instinct +1', 'Ferocity +2, Cunning +2, 0 Armor, Instinct +1', 'Ferocity +1, Cunning +2, 1 Armor, Instinct +1', 'Ferocity +3, Cunning +1, 1 Armor, Instinct +2'],
                strengths: ['Fast', 'burly', 'huge', 'calm', 'adaptable', 'quick reflexes', 'tireless', 'camouflage', 'ferocious', 'intimidating', 'keen senses', 'stealthy'],
                trainings: [ 'Hunt', 'search', 'scout', 'guard', 'fight monsters', 'perform', 'labor', 'travel' ],
                weaknesses: [ 'Flighty', 'savage', 'slow', 'broken', 'frightening', 'forgetful', 'stubborn', 'lame' ]
            }},
            { Command: 'When you work with your animal companion on something it’s trained in:  and you attack the same target, add its ferocity to your damage; and you track, add its cunning to your roll; and you take damage, add its armor to your armor; and you discern realities, add its cunning to your roll; and you parley, add its cunning to your roll; and someone interferes with you, add its instinct to their roll'}
        ],
        advancedMoves: [
            { 'Half-Elven': 'You may take this move only if it is your first advancement. Somewhere in your lineage lies mixed blood and it begins to show its presence. You gain the elf starting move if you took the human one at character creation or vice versa' },
            { 'Wild Empathy': 'You can speak with and understand animals.' },
            { 'Familiar Prey': 'When you spout lore about a monster you use WIS instead of INT.' },
            { 'Viper’s Strike': 'When you strike an enemy with two weapons at once, add an extra 1d4 damage for your off-hand strike.'},
            { 'Camouflage' : 'When you keep still in natural surroundings, enemies never spot you until you make a movement.'},
            { 'Man’s Best Friend' : 'When you allow your animal companion to take a blow that was meant for you, the damage is negated and your animal companion’s ferocity becomes 0. If its ferocity is already 0 you can’t use this ability. When you have a few hours of rest with your animal companion its ferocity returns to normal.'},
            { 'Blot Out the Sun': 'When you volley you may spend extra ammo before rolling. For each point of ammo spent you may choose an extra target. Roll once and apply damage to all targets.'},
            { 'Well-Trained':'Choose another training for your animal companion.' },
            { 'God Amidst the Wastes': 'Dedicate yourself to a deity (name a new one or choose one that’s already been established). You gain the commune and cast a spell cleric moves. When you select this move, treat yourself as a cleric of level 1 for using spells. Every time you gain a level thereafter, increase your effective cleric level by 1.'},
            { 'Follow Me': 'When you undertake a perilous journey you can take two roles. You make a separate roll for each.'},
            { 'A Safe Place':'When you set the watch for the night, everyone takes +1 to take watch.' }
        ],
        advancedMoves2: [
            {'Wild Speech': 'Replaces: Wild Empathy. You can speak with and understand any non-magical, non-planar creature.'},
            { 'Hunter’s Prey': 'Replaces: Familiar Prey. When you spout lore about a monster you use WIS instead of INT. On a 12+, in addition to the normal effects, you get to ask the GM any one question about the subject.'},
            { 'Viper’s Fangs': 'Replaces: Viper’s Strike. When you strike an enemy with two weapons at once, add an extra 1d8 damage for your off-hand strike.'},
            { 'Smaug’s Belly': 'When you know your target’s weakest point your arrows have 2 piercing.'},
            {  'Strider': 'Replaces: Follow Me. When you undertake a perilous journey you can take two roles. Roll twice and use the better result for both roles.'},
            { 'A Safer Place': 'Replaces: A Safe Place. When you set the watch for the night everyone takes +1 to take watch. After a night in camp when you set the watch everyone takes +1 forward.'},
            { 'Observant': 'When you hunt and track, on a hit you may also ask one question about the creature you are tracking from the discern realities list for free.' },
            { 'Special Trick': 'Choose a move from another class. So long as you are working with your animal companion you have access to that move.'},
            { 'Unnatural Ally': 'Your animal companion is a monster, not an animal. Describe it. Give it +2 ferocity and +1 instinct, plus a new training.'}
        ]
    })
}