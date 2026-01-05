export interface Character {
  id: string;
  name: string;
  japaneseName: string;
  role: string;
  description: string;
  personality: string[];
  strengths: string[];
  weaknesses: string[];
  emotionalMoments: string[];
  relationships: { character: string; relationship: string }[];
  growthArc: string;
  quote: string;
  color: string;
}

export const characters: Character[] = [
  {
    id: "doraemon",
    name: "Doraemon",
    japaneseName: "ドラえもん",
    role: "The Cat-Type Robot from the Future",
    description: "Doraemon is a blue robotic cat from the 22nd century, sent back in time by Nobita's great-great-grandson Sewashi to help Nobita improve his life and change his descendants' future. Despite being a robot, Doraemon possesses deep emotions, unwavering loyalty, and a heartwarming dedication to helping his friends.",
    personality: ["Caring", "Patient", "Sometimes easily annoyed", "Loves dorayaki", "Protective", "Wise"],
    strengths: ["Access to futuristic gadgets", "Problem-solving skills", "Emotional intelligence", "Unconditional love for Nobita", "Never gives up on helping others"],
    weaknesses: ["Fear of mice", "Can be tricked by dorayaki", "Sometimes his gadgets backfire", "Gets frustrated with Nobita's laziness"],
    emotionalMoments: [
      "The moment he first arrived to help Nobita, promising to stay until he becomes happy",
      "When he had to temporarily return to the future, leaving Nobita alone",
      "Every time he sacrifices his own comfort to help Nobita grow",
      "The final goodbye scenes in various movies where he shows his true feelings"
    ],
    relationships: [
      { character: "Nobita", relationship: "Best friend, guardian, and mentor - their bond transcends time itself" },
      { character: "Dorami", relationship: "Younger sister who often helps when needed" },
      { character: "Shizuka", relationship: "Cares for her as Nobita's future wife" },
      { character: "Gian & Suneo", relationship: "Protects Nobita from their bullying while also caring for them" }
    ],
    growthArc: "From a defective factory robot who lost his ears to mice, Doraemon found his purpose in protecting Nobita. His journey teaches us that our flaws don't define us - our love and dedication do.",
    quote: "You can do it, Nobita! I believe in you!",
    color: "primary"
  },
  {
    id: "nobita",
    name: "Nobita Nobi",
    japaneseName: "野比のび太",
    role: "The Boy Who Dreams Big",
    description: "Nobita is a kind-hearted but lazy fourth-grader who often relies on Doraemon's gadgets to solve his problems. Despite his many flaws, Nobita possesses a pure heart, genuine kindness, and hidden courage that emerges when his friends are in danger.",
    personality: ["Kind-hearted", "Lazy", "Dreamer", "Sensitive", "Loyal to friends", "Surprisingly brave when needed"],
    strengths: ["Shooting skills", "Cat's cradle master", "Genuine empathy", "Courage in crisis", "Pure heart", "Sleeping talent"],
    weaknesses: ["Lazy", "Poor grades", "Often bullied", "Relies too much on gadgets", "Procrastinates"],
    emotionalMoments: [
      "Standing up to Gian to protect his friends despite knowing he'll lose",
      "His determination to marry Shizuka in the future",
      "When he refuses to use gadgets and faces challenges on his own",
      "His tears when Doraemon has to leave"
    ],
    relationships: [
      { character: "Doraemon", relationship: "Best friend who came from the future just for him" },
      { character: "Shizuka", relationship: "His first love and future wife - she sees his true worth" },
      { character: "Gian", relationship: "Bully turned friend who respects Nobita's courage" },
      { character: "Suneo", relationship: "Frenemy who secretly admires Nobita's kindness" }
    ],
    growthArc: "Nobita's journey is about discovering that true strength isn't about grades or physical power - it's about having the courage to do what's right and the heart to care for others.",
    quote: "I may not be smart or strong, but I'll never give up on my friends!",
    color: "secondary"
  },
  {
    id: "shizuka",
    name: "Shizuka Minamoto",
    japaneseName: "源静香",
    role: "The Girl with a Golden Heart",
    description: "Shizuka is the kindest girl in school, loved by everyone for her gentle nature and pure heart. She sees the good in everyone, especially Nobita, whose hidden qualities she recognizes when others only see his flaws.",
    personality: ["Kind", "Gentle", "Studious", "Musical", "Empathetic", "Strong-willed when needed"],
    strengths: ["Academic excellence", "Violin skills", "Emotional maturity", "Sees the best in people", "Courage to stand for what's right"],
    weaknesses: ["Can be too trusting", "Sometimes naive", "Loves baths a bit too much"],
    emotionalMoments: [
      "Choosing Nobita over others because she saw his true heart",
      "Standing by Nobita when everyone else doubted him",
      "Her wedding day speech about why she chose Nobita",
      "Defending her friends in dangerous adventures"
    ],
    relationships: [
      { character: "Nobita", relationship: "Future husband - she chose him for his kindness" },
      { character: "Doraemon", relationship: "Trusted friend who helped bring them together" },
      { character: "Gian & Suneo", relationship: "Friends despite their flaws" }
    ],
    growthArc: "Shizuka teaches us that true love sees beyond surface appearances. Her choice of Nobita shows that kindness and a pure heart matter more than success or popularity.",
    quote: "I believe in you, Nobita-san. You're braver than you know.",
    color: "accent"
  },
  {
    id: "gian",
    name: "Takeshi 'Gian' Gouda",
    japaneseName: "剛田武",
    role: "The Gentle Giant",
    description: "Gian is the neighborhood bully with a surprisingly soft heart. While he often picks on Nobita, he's fiercely protective of his friends when real danger comes. His terrible singing and love for his family reveal a complex character.",
    personality: ["Tough exterior", "Soft heart", "Protective", "Loyal", "Loves singing (badly)", "Leader"],
    strengths: ["Physical strength", "Leadership", "Protective instincts", "Courage", "Loyalty to friends"],
    weaknesses: ["Bullying tendencies", "Bad singing", "Short temper", "Can be insensitive"],
    emotionalMoments: [
      "Risking his life to save his friends in adventures",
      "Showing his love for his mother and sister",
      "Standing with Nobita against real enemies",
      "His rare moments of genuine apology"
    ],
    relationships: [
      { character: "Nobita", relationship: "Bully but also protector when it matters" },
      { character: "Suneo", relationship: "Best friend and partner in mischief" },
      { character: "Jaiko", relationship: "Loving brother to his younger sister" }
    ],
    growthArc: "Gian's journey shows that beneath every tough exterior can be a heart of gold. He learns that true strength means protecting others, not hurting them.",
    quote: "When my friends are in danger, I become the strongest!",
    color: "destructive"
  },
  {
    id: "suneo",
    name: "Suneo Honekawa",
    japaneseName: "骨川スネ夫",
    role: "The Rich Kid with Hidden Depths",
    description: "Suneo is wealthy and loves to show off, but beneath his boastful exterior lies insecurity and a genuine desire to be liked. He's clever, artistic, and surprisingly loyal when it truly matters.",
    personality: ["Boastful", "Clever", "Artistic", "Insecure", "Loyal deep down", "Creative"],
    strengths: ["Intelligence", "Resources", "Artistic talent", "Model building", "Tech-savvy"],
    weaknesses: ["Bragging", "Cowardice", "Manipulative tendencies", "Sycophantic to Gian"],
    emotionalMoments: [
      "Moments when he genuinely helps without expecting praise",
      "His insecurity about being accepted for who he is",
      "Standing with friends despite his fear",
      "Rare genuine compliments to Nobita"
    ],
    relationships: [
      { character: "Gian", relationship: "Best friend despite being used sometimes" },
      { character: "Nobita", relationship: "Rival but secretly respects him" },
      { character: "Doraemon", relationship: "Envies his gadgets but appreciates him" }
    ],
    growthArc: "Suneo learns that true friendship can't be bought. His journey is about finding value in genuine connections over material possessions.",
    quote: "Well... maybe Nobita isn't so bad after all.",
    color: "muted"
  },
  {
    id: "dorami",
    name: "Dorami",
    japaneseName: "ドラミ",
    role: "The Reliable Little Sister",
    description: "Dorami is Doraemon's younger sister, created from the same oil but with a different batch. She's more efficient and less prone to mistakes, often coming to help when Doraemon's gadgets fail. Her ribbon-ears and yellow color make her instantly recognizable.",
    personality: ["Responsible", "Efficient", "Sweet", "Helpful", "Brave", "Loves melon bread"],
    strengths: ["More powerful than Doraemon", "Better at using gadgets", "Calm under pressure", "Quick thinking"],
    weaknesses: ["Can be overprotective", "Sometimes too serious", "Fear of cockroaches"],
    emotionalMoments: [
      "Coming to save Doraemon and Nobita in their darkest moments",
      "Her unwavering faith in her brother despite his flaws",
      "Moments of sibling love with Doraemon"
    ],
    relationships: [
      { character: "Doraemon", relationship: "Beloved older brother she always supports" },
      { character: "Nobita", relationship: "Cares for him as her brother's best friend" },
      { character: "Sewashi", relationship: "Helps take care of him in the future" }
    ],
    growthArc: "Dorami represents reliability and competence, but she teaches us that even the most capable need family and friends.",
    quote: "Don't worry, big brother. I'm here to help!",
    color: "secondary"
  }
];
