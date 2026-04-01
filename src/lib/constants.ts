export const NAV_LINKS = [
  { href: "#diensten", label: "Diensten" },
  { href: "#werkwijze", label: "Werkwijze" },
  { href: "#over-ons", label: "Over ons" },
] as const;

export const CONTACT = {
  email: "info@zgautomations.nl",
  phones: [
    { name: "Luc", number: "+31637480930", display: "Bel Luc" },
    { name: "Mika", number: "+31621926121", display: "Bel Mika" },
  ],
} as const;

export const STATS = [
  { value: "80%", label: "minder handmatig werk", countTo: 80, suffix: "%" },
  { value: "<2 wkn", label: "implementatietijd", countTo: null, suffix: null },
] as const;

export const SERVICES = [
  {
    icon: "MessageSquareText" as const,
    title: "AI Chatbots & Assistenten",
    description:
      "Slimme chatbots die klantvragen beantwoorden, afspraken inplannen en informatie opzoeken. Altijd consistent, altijd beschikbaar.",
    features: [
      "Klantenservice automatisering",
      "FAQ & kennisbank integratie",
      "Afspraakplanning",
    ],
    featured: false,
  },
  {
    icon: "Zap" as const,
    title: "Workflow Automatisering",
    description:
      "Repetitieve taken elimineren. Van data-invoer tot rapportages: wij bouwen stromen die uw team uren per week besparen.",
    features: [
      "Proces stroomlijning",
      "Automatische rapportages",
      "Systeem koppelingen",
    ],
    featured: true,
  },
  {
    icon: "LayoutGrid" as const,
    title: "Digitalisering",
    description:
      "Papieren processen, Excel-chaos en handmatige administratie omzetten naar digitale, overzichtelijke systemen.",
    features: [
      "Digitale formulieren & workflows",
      "Dashboard & overzichten",
      "Data migratie",
    ],
    featured: false,
  },
] as const;

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Analyse",
    description:
      "We brengen uw huidige processen in kaart en identificeren waar de grootste winst zit. Geen urenlange workshops, een helder gesprek volstaat.",
  },
  {
    num: "02",
    title: "Demo & Voorstel",
    description:
      "Binnen een week ontvangt u een werkende demo op maat. Geen PowerPoints maar een concreet prototype dat u direct kunt testen.",
  },
  {
    num: "03",
    title: "Implementatie",
    description:
      "Na goedkeuring rollen we de oplossing uit. Inclusief training voor uw team en doorlopende ondersteuning.",
  },
] as const;

export const TEAM_MEMBERS = [
  {
    name: "Luc Zwan",
    role: "Co-founder",
    bio: "1,5 jaar ervaring in het leiden van AI-implementaties binnen een organisatie van 200+ medewerkers. Vertaalt complexe technologie naar praktische oplossingen voor bedrijven.",
    image: "/img/luc.jpg",
    phone: "+31637480930",
  },
  {
    name: "Mika de Geus",
    role: "Co-founder",
    bio: "Achtergrond in cybersecurity en procesoptimalisatie. Zorgt ervoor dat elke oplossing veilig en betrouwbaar wordt opgeleverd.",
    image: "/img/mika.jpg",
    phone: "+31621926121",
  },
] as const;
