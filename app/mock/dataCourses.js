// Database with all events, from 2023, catched by components CarMax.jsx (futur events) and CardMaxPast.jsx, Card.jsx (in Events.jsx)

const dataCourses = [
  {
    id: 1,
    title: "Cours de batterie",
    date1: "Jeudi de 17h à 20h",
    date2: "",
    date3: "",
    location: "Montagny-en-Vexin",
    description: "Cours individuels de 30 min pour tout public, Thomas SURREAU",
    src: "/images/courses/batterie.jpg",
    alt: "battery, Image by natanaelginting on Freepik",
    link: "",
    full: false,
  },
  {
    id: 2,
    title: "Cours de bombarde et cornemuse",
    date1: "Mercredi après-midi",
    date2: "",
    date3: "",
    location: "Montagny-en-Vexin",
    description:
      "Cours individuels de 30 min pour tout public, Loic TAILLEBREST",
    src: "/images/courses/cornemuse.jpg",
    alt: "Freepik, Image by orsolyarigo",
    link: "cornemuse",
    full: false,
  },
  {
    id: 3,
    title: "Cours de guitare",
    date1: "Lundi soir",
    date2: "Mardi soir",
    date3: "Samedi matin",
    location: "Montagny-en-Vexin",
    description:
      "Cours individuels de 30 min pour tout public, Xavier CHAMPREDONDE",
    src: "/images/courses/a.jpg",
    alt: "piano",
    link: "",
    full: false,
  },
  {
    id: 4,
    title: "Cours de piano",
    date1: "Lundi toute la journée",
    date2: "Mardi soir",
    date3: "Mercredi toute la journée",
    location: "Montagny-en-Vexin",
    description: "Cours individuels de 30 min pour tout public, georges ALIN",
    src: "/images/courses/b.jpg",
    alt: "piano",
    link: "",
    full: false,
  },
  {
    id: 5,
    title: "Cours de trompette",
    date1: "Dates à venir",
    date2: "",
    date3: "",
    location: "Montagny-en-Vexin",
    description:
      "Cours individuels de 30 min pour tout public, Gwen GOMEZ-BETTI",
    src: "/images/courses/trompette.jpg",
    alt: "Image by photogenia on Freepik",
    link: "",
    full: false,
  },
  {
    id: 6,
    title: "Cours de violon",
    date1: "Mercredi toute la journée",
    date2: "",
    date3: "",
    location: "Montagny-en-Vexin",
    description:
      "Cours individuels de 30 min pour tout public, Elisabeth DEL TAILLEBREST",
    src: "/images/courses/violon.jpg",
    alt: "Image by wavebreakmedia_micro on Freepik",
    link: "",
    full: false,
  },
  {
    id: 7,
    title: "Cours collectif enfants de flûte à bec",
    date1: "Mercredi de 17h à 18h",
    date2: "",
    date3: "",
    location: "Montjavoult",
    description: "Cours collectif pour les enfants, Eric GIRARDEAU",
    src: "/images/courses/flute123.svg",
    alt: "",
    link: "",
    full: false,
  },
  {
    id: 8,
    title: "Cours collectif de djembé",
    date1: "Mercredi de 18h à 19h",
    date2: "",
    date3: "",
    location: "Montjavoult",
    description: "Cours collectif pour tout public, Eric GIRARDEAU",
    src: "/images/courses/djembe1234.svg",
    alt: "",
    link: "",
    full: false,
  },
  {
    id: 9,
    title: "Formation musicale CP - 6ème",
    date1: "Jeudi de 17h15 à 18h15",
    date2: "",
    date3: "",
    location: "Montagny-en-Vexin",
    description: "Cours collectif pour les enfants",
    src: "/images/courses/primaire.jpg",
    alt: "Image by Freepik, children",
    link: "",
    full: false,
  },
  {
    id: 10,
    title: "Formation musicale et orchestre collège - lycée",
    date1: "Samedi de 14h à 17h, tous les 15 jours",
    date2: "",
    date3: "",
    location: "Montagny-en-Vexin",
    description:
      "Cours collectif pour les collégiens et lycéens, Victor BUGADA",
    src: "/images/courses/secondaire_college_lycee.jpg",
    alt: "Image by svstudioart on Freepik",
    link: "",
    full: false,
  },
];

export default dataCourses;

/* Template objet json
     {
      id: ,
      title: "Cours de ",
      date1: "",
      date2: "",
      date3: "",
      location: "Montagny-en-Vexin",
      description: "Cours individuels de 30 min pour tout public",      
      src: "/images/courses/",
      alt: "",
      link: "",
      full: false,
    },
   */
