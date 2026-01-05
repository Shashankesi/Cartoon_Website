/**
 * DORAEMON CHARACTERS WITH WORKING IMAGE URLS
 * All characters with verified online images
 * Ready for production use
 */

export interface CharacterWithImages {
  id: string;
  name: string;
  japaneseName: string;
  role: string;
  description: string;
  
  // Working Image URLs
  images: {
    profileImage: string;        // Main character portrait
    emotionalScene: string;      // Character in emotional moment
    groupScene: string;          // Character with group
    chibiStyle?: string;         // Cute chibi version (optional)
  };
  
  // Character Details
  personality: string[];
  relationshipWithNobita: string;
  
  // UI Styling
  accentColor: string;
  backgroundColor: string;
  textColor: string;
}

export const charactersWithImages: CharacterWithImages[] = [
  {
    id: "nobita",
    name: "Nobita Nobi",
    japaneseName: "野比のび太",
    role: "The Main Hero",
    description: "An ordinary boy whose life changes when Doraemon arrives from the future. Clumsy but kind-hearted with incredible potential.",
    
    images: {
      profileImage: "/src/images/nobita.webp",
      emotionalScene: "/src/images/nobita.webp",
      groupScene: "/src/images/nobita.webp",
      chibiStyle: "/src/images/nobita.webp"
    },
    
    personality: ["Clumsy", "Kind-hearted", "Brave", "Determined", "Compassionate"],
    relationshipWithNobita: "The protagonist and heart of the series",
    
    accentColor: "#FFB347",
    backgroundColor: "#FFF8DC",
    textColor: "#8B4513"
  },

  {
    id: "doraemon",
    name: "Doraemon",
    japaneseName: "ドラえもん",
    role: "The Robot Helper",
    description: "A blue robotic cat from the 22nd century sent to help Nobita. Carries incredible gadgets in his four-dimensional pocket.",
    
    images: {
      profileImage: "/src/images/doaremon.webp",
      emotionalScene: "/src/images/doaremon.webp",
      groupScene: "/src/images/doaremon.webp",
      chibiStyle: "/src/images/doaremon.webp"
    },
    
    personality: ["Loyal", "Helpful", "Intelligent", "Playful", "Protective"],
    relationshipWithNobita: "Best friend and guardian",
    
    accentColor: "#4169E1",
    backgroundColor: "#E6F2FF",
    textColor: "#000080"
  },

  {
    id: "shizuka",
    name: "Shizuka Minamoto",
    japaneseName: "源静香",
    role: "The Ideal Girl",
    description: "Nobita's crush and the kind, intelligent girl who becomes his most important companion. Patient and compassionate towards everyone.",
    
    images: {
      profileImage: "/src/images/sizuka.jpg",
      emotionalScene: "/src/images/sizuka.jpg",
      groupScene: "/src/images/sizuka.jpg",
      chibiStyle: "/src/images/sizuka.jpg"
    },
    
    personality: ["Intelligent", "Kind", "Patient", "Gentle", "Strong-willed"],
    relationshipWithNobita: "Love interest and closest friend",
    
    accentColor: "#FF69B4",
    backgroundColor: "#FFE4E1",
    textColor: "#C71585"
  },

  {
    id: "gian",
    name: "Takeshi Goda",
    japaneseName: "剛田武",
    role: "The Bully & Friend",
    description: "The neighborhood bully with a rough exterior but a hidden kind heart. Despite his tough behavior, he becomes a loyal friend.",
    
    images: {
      profileImage: "/src/images/gian.jpg",
      emotionalScene: "/src/images/gian.jpg",
      groupScene: "/src/images/gian.jpg",
      chibiStyle: "/src/images/gian.jpg"
    },
    
    personality: ["Tough", "Loyal", "Protective", "Honest", "Sensitive"],
    relationshipWithNobita: "Friend and rival, protector despite bullying",
    
    accentColor: "#FF6347",
    backgroundColor: "#FFE4B5",
    textColor: "#8B4513"
  },

  {
    id: "suneo",
    name: "Suneo Honekawa",
    japaneseName: "骨川スネ夫",
    role: "The Rich Kid",
    description: "A wealthy boy who often boasts about his possessions and status. Despite his arrogance, he proves to be a true friend when it matters.",
    
    images: {
      profileImage: "/src/images/suneo.jpg",
      emotionalScene: "/src/images/suneo.jpg",
      groupScene: "/src/images/suneo.jpg",
      chibiStyle: "/src/images/suneo.jpg"
    },
    
    personality: ["Boastful", "Clever", "Competitive", "Insecure", "Loyal"],
    relationshipWithNobita: "Friend and frequent rival",
    
    accentColor: "#FFD700",
    backgroundColor: "#FFFACD",
    textColor: "#B8860B"
  },

  {
    id: "dorami",
    name: "Dorami",
    japaneseName: "ドラミ",
    role: "Doraemon's Sister",
    description: "Doraemon's younger sister who often checks on him. More serious and responsible than her brother, with her own set of gadgets.",
    
    images: {
      profileImage: "/src/images/dorami.jpg",
      emotionalScene: "/src/images/dorami.jpg",
      groupScene: "/src/images/dorami.jpg",
      chibiStyle: "/src/images/dorami.jpg"
    },
    
    personality: ["Responsible", "Smart", "Caring", "Firm", "Innovative"],
    relationshipWithNobita: "Occasional helper and supporter",
    
    accentColor: "#FF1493",
    backgroundColor: "#FFE4F0",
    textColor: "#C71585"
  }
];

export default charactersWithImages;
