

export default function handler(req, res)
{
    res.status(200).json({
        class: 'Bard',
        race: [
            { elf: 'When you enter an important location (your call) you can ask the GM for one fact from the history of that location.'},
            { human: 'When you first enter a civilized settlement someone who respects the custom of hospitality to minstrels will take you in as their guest.'}
        ],
        names: [
            { elf: ['Astrafel', 'Daelwyn', 'Feliana', 'Damarra', 'Sistranalle', 'Pendrell', 'Melliandre', 'Dagoliir']},
            { human: ['Baldric', 'Leena', 'Dunwick', 'Willem', 'Edwyn', 'Florian', 'Seraphine', 'Quorra', 'Charlotte', 'Lily', 'Ramonde', 'Cassandra'] }
        ],
        looks: {
            eyes: ['Knowing Eyes', 'Fiery Eyes', 'Joyous Eyes'],
            hair: ['Fancy Hair', 'Wild Hair', 'Stylish Cap'],
            clothes: ['Finery', 'Traveling Clothes', 'Poor Clothes'],
            body: ['Fit Body', 'Well-fed Body', 'Thin Body']
        },
        stats: {
		    maxHp: '6+CON',
		    baseDmg: 'd6'
        },
        alignment: [
            { 'Good': 'Perform your art to aid someone else.'},
            { 'Neutral': 'Avoid a conflict or defuse a tense situation.'},
            { 'Chaotic': 'Spur others to significant and unplanned decisive action.'}
        ],
        bonds: ['This is not my first adventure with ', 'I sang stories of long before I ever met them in person.', 'is often the butt of my jokes.', 'I am writing a ballad about the adventures of .', '       trusted me with a secret.', '       does not trust me, and for good reason.'],
        gear: {
            load: '9+STR',
            backpack: ['dungeon rations (5 uses, 1 weight)'],
            randomWeapon: ['Dueling rapier (close, precise, 2 weight)', 'Worn bow (near, 2 weight), bundle of arrows (3 ammo, 1 weight), and short sword (close, 1 weight)'],
            randomArmor: ['Leather armor (1 armor, 1 weight)', 'Ostentatious clothes (0 weight)'],
            randomInstrument: ['Your father’s mandolin, repaired', 'A fine lute, a gift from a noble', 'The pipes with which you courted your first love', 'A stolen horn', 'A fiddle, never before played', 'A songbook in a forgotten '],
        },
        startingMoves: [
            {'Arcane Art': 'When you weave a performance into a basic spell, choose an ally and an effect:Heal 1d8 damage. +1d4 forward to damage. Their mind is shaken clear of one enchantment. The next time someone successfully assists the target with aid, they get +2 instead of +1. Then roll+Cha. ✴ On a 10+, the ally gets the selected effect. ✴ On a 7-9, your spell still works, but you draw unwanted attention or your magic reverberates to other targets affecting them as well, GM’s choice.'},
            { 'Bardic Lore': 'Choose an area of expertise: Spells and Magicks; The Dead and Undead; Grand Histories of the Known World; A Bestiary of Creatures Unusual; The Planar Spheres; Legends of Heroes Past; Gods and Their Servants. When you first encounter an important creature, location, or item (your call) covered by your bardic lore you can ask the GM any one question about it; the GM will answer truthfully. The GM may then ask you what tale, song, or legend you heard that information in.' },
            { 'A Port in the Storm': 'When you return to a civilized settlement you’ve visited before, tell the GM when you were last here. They’ll tell you how it’s changed since then.' }
        ],
        advancedMoves: [
            {'Healing Song': 'When you heal with arcane art, you heal +1d8 damage.'},
            { 'Vicious Cacophony': 'When you grant bonus damage with arcane art, you grant an extra +1d4 damage.'},
            { 'It Goes To Eleven': 'When you unleash a crazed performance (a righteous lute solo or mighty brass blast, maybe) choose a target who can hear you and roll+Cha .✴ On a 10+ the target attacks their nearest ally in range. ✴ On a 7–9 they attack their nearest ally, but you also draw their attention and ire.'},
            { 'Metal Hurlant': 'When you shout with great force or play a shattering note choose a target and roll+Con. ✴ On a 10+ the target takes 1d10 damage and is deafened for a few minutes. ✴ On a 7–9 you still damage your target, but it’s out of control: the GM will choose an additional target nearby.'},
            { 'A Little Help From My Friends': 'When you successfully aid someone you take +1 forward as well.'},
            { 'Eldritch Tones': 'Your arcane art is strong, allowing you to choose two effects instead of one.'},
            { 'Duelist’s Parry': 'When you hack and slash, you take +1 armor forward.'},
            { 'Bamboozle': 'When you parley with someone, on a 7+ you also take +1 forward with them.'},
            {'Multiclass Dabbler': 'Get one move from another class. Treat your level as one lower for choosing the move.'},
            {'Multiclass Initiate': 'Get one move from another class. Treat your level as one lower for choosing the move.'}
        ],
        advancedMoves2: [
            {'Healing Chorus': 'Replaces: Healing Song. When you heal with arcane art, you heal +2d8 damage.'},
            {'Vicious Blast': 'Replaces: Vicious Cacophony. When you grant bonus damage with arcane art, you grant an extra +2d4 damage.'},
            {'Unforgettable Face': 'When you meet someone you’ve met before (your call) after some time apart you take +1 forward against them.'},
            {'Reputation': 'When you first meet someone who’s heard songs about you, roll+Cha. ✴ On a 10+, tell the GM two things they’ve heard about you. ✴ On a 7-9, tell the GM one thing they’ve heard, and the GM tells you one thing.'},
            { 'Eldritch Chord': 'Replaces: Eldritch Tones. When you use arcane art, you choose two effects. You also get to choose one of those effects to double.'},
            { 'An Ear For Magic': 'When you hear an enemy cast a spell the GM will tell you the name of the spell and its effects. Take +1 forward when acting on the answers.'},
            { 'Devious': 'When you use charming and open you may also ask “How are you vulnerable to me?” Your subject may not ask this question of you.'},
            { 'Duelist’s Block': 'Replaces: Duelist’s Parry. When you hack and slash, you take +2 armor forward.'},
            { 'Con': 'Replaces: Bamboozle. When you parley with someone, on a 7+ you also take +1 forward with them and get to ask their player one question which they must answer truthfully.'},
            { 'Multiclass Master': 'Get one move from another class. Treat your level as one lower for choosing the move.'}
        ]
    })    
}