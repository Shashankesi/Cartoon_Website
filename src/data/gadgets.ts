export interface Gadget {
  id: string;
  name: string;
  japaneseName: string;
  description: string;
  usage: string;
  funFacts: string[];
  appearsIn: string[];
  category: "transportation" | "transformation" | "utility" | "time" | "communication" | "combat";
}

export const gadgets: Gadget[] = [
  {
    id: "anywhere-door",
    name: "Anywhere Door",
    japaneseName: "どこでもドア",
    description: "A magical pink door that can transport users to any location they can think of. Simply open the door while thinking of your destination, and step through to arrive instantly.",
    usage: "Used for instant travel to any place the user can imagine. Has been used to travel across countries, into the ocean, and even to fictional locations when malfunctioning.",
    funFacts: [
      "Has a range limit of 10 light-years in some versions",
      "Can malfunction if the user's thoughts are unclear",
      "One of Doraemon's most frequently used gadgets",
      "Cannot travel to places that don't exist in reality (usually)",
      "The door frame is pink with a golden handle"
    ],
    appearsIn: ["Almost every episode", "Stand by Me Doraemon", "Nobita's Dinosaur"],
    category: "transportation"
  },
  {
    id: "take-copter",
    name: "Take-copter",
    japaneseName: "タケコプター",
    description: "A small propeller device worn on the head that enables personal flight. Despite its tiny size, it can carry a person through the sky at remarkable speeds.",
    usage: "Attach to any part of the body (usually the head) to gain the ability to fly. Battery life varies but typically lasts several hours.",
    funFacts: [
      "Works by creating an anti-gravity field, not by the propeller's lift",
      "Can reach speeds of up to 80 km/h",
      "One of the first gadgets Doraemon ever showed Nobita",
      "Waterproof and works in most weather conditions",
      "Can be attached to objects to make them fly too"
    ],
    appearsIn: ["Almost every episode", "Every Doraemon movie", "The Origin of Doraemon"],
    category: "transportation"
  },
  {
    id: "time-machine",
    name: "Time Machine",
    japaneseName: "タイムマシン",
    description: "Hidden inside Nobita's desk drawer, this hovering vehicle can travel through time and space. It's shaped like a flat disc with handlebars and a display screen.",
    usage: "Enter through Nobita's desk drawer, set the destination time and place, and travel through the time stream. Can take multiple passengers.",
    funFacts: [
      "The drawer transforms into a portal to the time stream",
      "Can travel to any point in time but changing history has consequences",
      "Has been damaged multiple times during adventures",
      "The interface shows the destination time and location",
      "Originally belongs to Sewashi, Nobita's descendant"
    ],
    appearsIn: ["Nobita's Dinosaur", "Stand by Me Doraemon", "Nobita's New Dinosaur"],
    category: "time"
  },
  {
    id: "small-light",
    name: "Small Light",
    japaneseName: "スモールライト",
    description: "A flashlight-like device that shrinks anything its beam touches. The effect can be reversed with the Big Light gadget.",
    usage: "Point at any object or person and activate to shrink them. Duration varies and can be permanent or temporary depending on settings.",
    funFacts: [
      "Essential for the Little Star Wars movie adventure",
      "Can shrink objects to microscopic sizes",
      "Affected objects retain their normal strength relative to size",
      "Has a counterpart called Big Light for enlarging",
      "One of the most versatile gadgets in Doraemon's collection"
    ],
    appearsIn: ["Nobita's Little Star Wars", "Various episodes", "Nobita's Fantastic Three Musketeers"],
    category: "transformation"
  },
  {
    id: "translation-konjac",
    name: "Translation Konjac",
    japaneseName: "ほんやくコンニャク",
    description: "A jelly-like food that, when eaten, allows the consumer to understand and speak any language, including animal languages.",
    usage: "Simply eat the konjac jelly. Effects last for several hours and enable communication in any language encountered.",
    funFacts: [
      "Looks and tastes like regular konjac jelly",
      "Works on animal languages, alien languages, and even ancient languages",
      "Both the speaker and listener understand each other",
      "Effect duration varies between versions",
      "One of the most useful gadgets for adventures"
    ],
    appearsIn: ["Nobita's Dinosaur", "Nobita's Space Pioneer", "Various animal episodes"],
    category: "communication"
  },
  {
    id: "memory-bread",
    name: "Memory Bread",
    japaneseName: "アンキパン",
    description: "Special bread that transfers any written content pressed onto it directly into the eater's memory. Perfect for studying—just press it on a textbook page and eat!",
    usage: "Press the bread onto printed material, then eat it. The content is memorized instantly. However, the memory is lost if... well, it exits the body.",
    funFacts: [
      "Nobita's favorite gadget for test preparation",
      "The memory effect is temporary and tied to digestion",
      "Cannot be used to memorize too much at once without consequences",
      "One of the most relatable gadgets for students",
      "Has backfired spectacularly multiple times"
    ],
    appearsIn: ["Various episodes", "Nobita's study-related stories"],
    category: "utility"
  },
  {
    id: "air-cannon",
    name: "Air Cannon",
    japaneseName: "空気砲",
    description: "A small tube worn on the arm that fires powerful compressed air blasts. Despite being non-lethal, it packs enough punch to knock back enemies.",
    usage: "Wear on the forearm and say 'Bang!' or similar activation words to fire air blasts. Strength can be adjusted.",
    funFacts: [
      "Gian loves using this gadget in battles",
      "Frequently used in movie adventures against villains",
      "The air blast is visible as a transparent wave",
      "Considered one of Doraemon's combat gadgets",
      "Can be used for propulsion in emergencies"
    ],
    appearsIn: ["Various action episodes", "Nobita's Steel Troops", "Most adventure movies"],
    category: "combat"
  },
  {
    id: "time-furoshiki",
    name: "Time Furoshiki",
    japaneseName: "タイムふろしき",
    description: "A magical cloth that can age or de-age anything wrapped in it. One side makes things older, the other makes them younger.",
    usage: "Wrap any object or person in the cloth. The red side makes things newer/younger, the blue side makes them older. Time change depends on exposure duration.",
    funFacts: [
      "Used to restore Piisuke's egg in Nobita's Dinosaur",
      "Can repair broken objects by making them 'younger'",
      "Dangerous if used incorrectly or for too long",
      "One of the most powerful time-related gadgets",
      "The patterns change based on which side is facing out"
    ],
    appearsIn: ["Nobita's Dinosaur", "Various repair-related episodes"],
    category: "time"
  }
];
