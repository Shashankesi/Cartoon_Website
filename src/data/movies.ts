export interface Movie {
  id: string;
  title: string;
  japaneseTitle: string;
  year: number;
  theme: "time" | "space" | "fantasy" | "adventure" | "friendship";
  emotion: "happy" | "sad" | "adventure" | "nostalgic";
  synopsis: string;
  fullStory: string;
  emotionalHighlights: string[];
  moralLessons: string[];
  characters: string[];
}

export const movies: Movie[] = [
  {
    id: "nobitas-dinosaur",
    title: "Nobita's Dinosaur",
    japaneseTitle: "のび太の恐竜",
    year: 1980,
    theme: "time",
    emotion: "nostalgic",
    synopsis: "Nobita discovers and raises a baby dinosaur, forming an unbreakable bond.",
    fullStory: `In the first-ever Doraemon movie, we meet Nobita at his most compassionate. After finding a mysterious egg fossil, he uses Doraemon's Time Furoshiki to restore it to its original state. What emerges changes his life forever—a baby Futabasaurus he names Piisuke.

Day by day, Nobita raises Piisuke in secret, feeding him, playing with him, and forming a bond that transcends the millions of years between their times. But as Piisuke grows larger, the neighbors begin to notice. The pond becomes too small, and Nobita faces an impossible choice.

With heavy hearts, Nobita and Doraemon travel back 100 million years to return Piisuke to his own time. But their journey is fraught with danger—dinosaur hunters from the future are after Piisuke, seeing him as a valuable prize.

The climax of the film sees Nobita standing between Piisuke and the hunters, protecting his friend with nothing but his love and determination. In the end, they find Piisuke's family, and the moment of goodbye becomes one of the most tearful scenes in anime history.

As Nobita watches Piisuke swim away to join his own kind, we see him transformed. The boy who couldn't take care of himself learned to care for another life with all his heart.`,
    emotionalHighlights: [
      "Nobita crying as he says goodbye to Piisuke",
      "The moment Piisuke recognizes Nobita after growing up",
      "Nobita standing up to protect Piisuke from hunters",
      "The final scene of Piisuke joining his family"
    ],
    moralLessons: [
      "True love means letting go when it's best for them",
      "Responsibility comes with caring for another life",
      "Courage isn't about being unafraid—it's about acting despite fear",
      "The bonds we form last beyond time itself"
    ],
    characters: ["doraemon", "nobita", "shizuka", "gian", "suneo"]
  },
  {
    id: "nobitas-space-pioneer",
    title: "Nobita's Little Star Wars",
    japaneseTitle: "のび太の宇宙小戦争",
    year: 1985,
    theme: "space",
    emotion: "adventure",
    synopsis: "Nobita and friends help a tiny alien president reclaim his planet from evil forces.",
    fullStory: `When Nobita discovers a tiny spaceship crash-landed in his backyard, he has no idea he's about to become part of an intergalactic revolution. The ship's pilot is Papi—the president of the planet Pirika, shrunk to escape from General Gilmore's military coup.

Papi's people live in miniature, but their hearts are full-sized. As Nobita, Doraemon, and their friends bond with Papi, they learn about his planet's struggle for freedom. When Gilmore's forces track Papi to Earth, our heroes must make a choice: stay safe or fight for their friend's home.

Using the Small Light gadget, the entire gang shrinks down to help. What follows is an epic space opera told in miniature—battles in living rooms that feel like wars across galaxies, courage measured not in size but in heart.

Shizuka's gentle encouragement, Gian's surprising bravery, and Suneo's unexpected loyalty all shine as they face armies that outnumber them thousands to one. But it's Nobita who delivers the decisive blow, piloting a ship into the enemy's weakness because he remembered something Papi told him about never giving up.

The liberation of Pirika isn't just about overthrowing a dictator—it's about ordinary kids discovering that they can change the world when they stand together for what's right.`,
    emotionalHighlights: [
      "Papi's sacrifice to protect Earth",
      "The moment the gang decides to shrink down and fight",
      "Nobita overcoming his fear to pilot the final mission",
      "Pirika's citizens cheering for freedom"
    ],
    moralLessons: [
      "Size doesn't determine the magnitude of your courage",
      "True friends stand with you even against impossible odds",
      "Freedom is worth fighting for",
      "Leaders protect their people, not themselves"
    ],
    characters: ["doraemon", "nobita", "shizuka", "gian", "suneo"]
  },
  {
    id: "nobitas-parallel-journey",
    title: "Nobita and the Steel Troops",
    japaneseTitle: "のび太と鉄人兵団",
    year: 1986,
    theme: "adventure",
    emotion: "sad",
    synopsis: "A robot girl questions her programming when she befriends humans she was meant to destroy.",
    fullStory: `This film begins with wonder—Nobita discovers giant robot parts in the Arctic and, with Doraemon's help, assembles them into a massive mecha. But wonder turns to horror when they learn the truth: these parts belong to the Mechatopia army, robot soldiers programmed to conquer Earth.

Enter Lilulu, a robot scout disguised as a human girl. Her mission is simple: prepare Earth for invasion. But nothing prepares her for the complexity of human emotions—especially when Shizuka befriends her, seeing past her cold exterior to something struggling within.

As Lilulu spends time with the group, she begins to question everything. Why do humans cry? Why do they sacrifice for each other? Why does Shizuka's kindness make her feel something her programming never accounted for?

The film builds to an impossible choice. The robot army is coming, and Earth has no defense. But Doraemon discovers a way—they can travel to Mechatopia's past and change the robots' fundamental programming, making them peaceful. The catch? This would erase every robot made since, including Lilulu.

Lilulu makes her choice. She helps them reach the past, knowing she will cease to exist. Her final moments, as she begins to fade while watching her new friends, are among the most heartbreaking in anime history. "Thank you for being my friend," she whispers as she disappears.

But love transcends existence itself. In a reimagined present, a girl who looks just like Lilulu transfers to Nobita's school. She doesn't remember them, but something in her smiles at Shizuka like meeting an old friend.`,
    emotionalHighlights: [
      "Lilulu learning what friendship means",
      "Her sacrifice to save Earth and humans she grew to love",
      "Shizuka crying as Lilulu disappears",
      "The hopeful ending with the new Lilulu"
    ],
    moralLessons: [
      "Kindness can reprogram even the coldest heart",
      "True sacrifice means giving up everything for what you believe",
      "Identity isn't about programming—it's about choices",
      "Love and friendship can transcend existence itself"
    ],
    characters: ["doraemon", "nobita", "shizuka", "gian", "suneo"]
  },
  {
    id: "stand-by-me",
    title: "Stand by Me Doraemon",
    japaneseTitle: "STAND BY ME ドラえもん",
    year: 2014,
    theme: "friendship",
    emotion: "sad",
    synopsis: "A reimagining of Doraemon's most emotional moments—arrival, growth, and goodbye.",
    fullStory: `This film distills the entire emotional essence of Doraemon into a single, devastating narrative. It begins where everything began—Sewashi sending Doraemon back in time to save his great-great-grandfather Nobita from a future of failure and debt.

But there's a catch. Sewashi programs Doraemon with a restriction: he cannot return to the future until Nobita achieves happiness. This sets up the central tension—Doraemon must help Nobita become independent enough to survive without him.

We watch Nobita grow through the iconic moments: meeting Shizuka, standing up to Gian, finding his courage. And we watch Doraemon struggle with an impossible paradox—he wants Nobita to succeed, but success means goodbye.

The film's most powerful sequence comes when Nobita finally achieves his goal: winning Shizuka's heart. The restriction lifts. Doraemon can go home. And suddenly, a film about growing up becomes a film about letting go.

The night before Doraemon leaves, Nobita finds him staring at the stars. "I'll be fine," Nobita says, trying to be brave. "I know," Doraemon replies, not believing it. Neither of them sleep that night.

Their goodbye is quiet. No dramatic music. No grand gestures. Just two friends who know that growing up means growing apart. Nobita watches Doraemon's drawer-portal close for what should be the last time.

But then Gian picks a fight, and Nobita makes a choice. He fights back—not with gadgets, but with fists. He loses, badly. But he doesn't quit. He gets up again and again until Gian walks away in confused respect.

And in that moment, Doraemon returns. Because true friendship isn't about never leaving—it's about always coming back.`,
    emotionalHighlights: [
      "Doraemon's arrival and promise to help Nobita",
      "Their final night together before goodbye",
      "Nobita fighting Gian without gadgets",
      "Doraemon's return through the drawer"
    ],
    moralLessons: [
      "Growing up doesn't mean growing apart from those you love",
      "True strength comes from within, not from tools",
      "The best teachers prepare you to live without them",
      "Some bonds are forever, no matter the distance"
    ],
    characters: ["doraemon", "nobita", "shizuka", "gian", "suneo"]
  },
  {
    id: "nobitas-great-adventure",
    title: "Nobita's Great Adventure in the South Seas",
    japaneseTitle: "のび太の南海大冒険",
    year: 1998,
    theme: "adventure",
    emotion: "adventure",
    synopsis: "Pirates, treasure, and the meaning of true adventure await on the seven seas.",
    fullStory: `When Nobita dreams of being a pirate, Doraemon makes it real—almost too real. Using the Dream Navigator gadget, they create a 17th-century Caribbean adventure. But when a glitch merges their dream world with reality, they find themselves trapped in an actual age of pirates.

They meet Captain Kid, a young pirate who reminds them of themselves—dreaming big despite being small. Together, they search for the legendary treasure of Dorado Island while being pursued by the ruthless pirate crew of Captain Cash.

What makes this adventure special isn't the treasure—it's the journey. Nobita learns navigation under the stars. Gian discovers he's a natural sailor. Shizuka becomes the crew's heart, keeping spirits high when storms and enemies darken the horizon.

The treasure they find isn't gold. It's a message from the original Dorado explorers: "The true treasure is the adventure itself and the friends who shared it."

As they sail home through the sunset, Nobita realizes he didn't need a gadget to be a pirate. He needed the courage to chase his dreams and the friends to share them with.`,
    emotionalHighlights: [
      "Nobita taking the helm during a storm",
      "The crew's friendship with Captain Kid",
      "Discovering the true meaning of treasure",
      "Sailing into the sunset together"
    ],
    moralLessons: [
      "The journey matters more than the destination",
      "Dreams are worth chasing, even when they seem impossible",
      "True treasure is the bonds we form",
      "Everyone has hidden talents waiting to be discovered"
    ],
    characters: ["doraemon", "nobita", "shizuka", "gian", "suneo"]
  },
  {
    id: "nobitas-new-dinosaur",
    title: "Nobita's New Dinosaur",
    japaneseTitle: "のび太の新恐竜",
    year: 2020,
    theme: "time",
    emotion: "nostalgic",
    synopsis: "Forty years later, Nobita raises dinosaurs again—this time, twins who can't fly.",
    fullStory: `In a beautiful callback to the very first Doraemon movie, Nobita once again finds a dinosaur egg. But this time, two baby dinosaurs hatch—twin feathered raptors he names Kyu and Myu. And one of them, Kyu, was born different. He can't fly like his sibling.

Nobita sees himself in Kyu. The one who can't keep up. The one who's different. And as he helps Kyu learn to live with his difference, he's really learning to accept himself.

The journey to return the twins to their time is fraught with danger and discovery. They witness the asteroid that ended the dinosaur age approaching. They meet dinosaurs at the crossroads of evolution—some becoming the birds we know today.

The climax puts everything at stake. Kyu must fly to save his family, and Nobita must let him try—even if he might fail. It's a moment of trust that mirrors their entire relationship.

When Kyu finally takes flight, it's not just a dinosaur learning to fly. It's every kid who was told they couldn't, proving they can in their own way, in their own time.

The goodbye this time is different from forty years ago. Nobita isn't just losing a pet—he's watching a piece of himself soar into a new future.`,
    emotionalHighlights: [
      "Nobita seeing himself in Kyu's struggles",
      "Kyu's first successful flight",
      "The moment of trust before the final challenge",
      "Watching the twins soar into their new era"
    ],
    moralLessons: [
      "Being different isn't a weakness—it's a different kind of strength",
      "Growth happens on its own timeline",
      "Teaching someone means believing in them when they can't",
      "Some goodbyes are really new beginnings"
    ],
    characters: ["doraemon", "nobita", "shizuka", "gian", "suneo"]
  }
];
