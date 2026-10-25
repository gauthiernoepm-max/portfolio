import type { Lang } from './site';

export type ProjectPoint = { title: string; body: string };

export type Project = {
  slug: string;
  name: string;
  year: string;
  status: 'live' | 'soon';
  url?: string;
  stack: string[];
  cover: string;
  coverAlt: string;
  tagline: Record<Lang, string>;
  intro: Record<Lang, string>;
  points: Record<Lang, ProjectPoint[]>;
  note?: Record<Lang, string>;
};

export const projects: Project[] = [
  {
    slug: 'kosmos',
    name: 'Kosmos',
    year: '2026',
    status: 'live',
    url: 'https://www.kosmos-lab.com/fr',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe', 'FR / EN'],
    cover: '/shots/kosmos.webp',
    coverAlt: 'Page d’accueil de Kosmos, marque de lampes imprimées en 3D',
    tagline: {
      fr: 'Lampes design imprimées en 3D, fabriquées en France.',
      en: 'Designer lamps, 3D-printed in France.',
    },
    intro: {
      fr: "Une boutique en ligne complète pour une marque de lampes imprimées en 3D : six produits, un panier, le paiement, la recherche, l’espace professionnel et la newsletter — en français et en anglais dès le premier jour.",
      en: 'A full online shop for a 3D-printed lamp brand: six products, a cart, checkout, search, a trade section and a newsletter — in French and English from day one.',
    },
    points: {
      fr: [
        {
          title: 'Une vraie boutique, pas une vitrine',
          body: "Panier persistant, checkout Stripe, emails de commande et de bienvenue, codes promo. Le parcours d’achat a été traité comme le produit principal, pas comme une finition.",
        },
        {
          title: 'Le catalogue comme source unique',
          body: "Six produits décrits en données typées : les pages, la recherche, le sitemap et les données structurées produit sont générés depuis la même source. Ajouter une lampe ne demande aucune duplication.",
        },
        {
          title: 'Le SEO traité dès le cadrage',
          body: "URLs localisées, hreflang FR/EN, canonical, sitemap et metadata par page. Le référencement n’a pas été rajouté après la mise en ligne.",
        },
      ],
      en: [
        {
          title: 'A real shop, not a brochure',
          body: 'Persistent cart, Stripe checkout, order and welcome emails, discount codes. The purchase path was treated as the main product, not as a finishing touch.',
        },
        {
          title: 'One catalogue, one source',
          body: 'Six products described as typed data: pages, search, sitemap and product structured data all come from that single source. Adding a lamp duplicates nothing.',
        },
        {
          title: 'SEO from the first sketch',
          body: 'Localised URLs, FR/EN hreflang, canonical, sitemap and per-page metadata. Search was part of the design, not a patch after launch.',
        },
      ],
    },
  },
  {
    slug: 'culture-club',
    name: 'Culture Club',
    year: '2026',
    status: 'soon',
    url: 'https://culture-club.cc',
    stack: ['Next.js', 'Supabase', 'Tailwind', 'Auth', 'FR / EN'],
    cover: '/shots/culture-club.webp',
    coverAlt: 'Page d’accueil de Culture Club, recommandations culturelles entre amis',
    tagline: {
      fr: 'Les recommandations de tes proches, pas des inconnus.',
      en: 'Recommendations from people you trust, not strangers.',
    },
    intro: {
      fr: "Un site privé où l’on partage ce qu’on a lu, vu et écouté — livres, films, séries, restaurants, albums — mais seulement avec les gens qu’on connaît. L’objectif : que les découvertes donnent envie de créer un book club ou un ciné club, plutôt que d’alimenter un fil de plus.",
      en: 'A private place to share what you have read, watched and listened to — books, films, series, restaurants, albums — but only with people you actually know. The point: recommendations that turn into a book club or a film club, instead of one more feed.',
    },
    points: {
      fr: [
        {
          title: 'Le cercle comme filtre',
          body: "L’inscription passe par un code d’invitation, et on ne voit que les recommandations de son cercle. Aucun algorithme, aucun inconnu : la confiance est le produit.",
        },
        {
          title: 'Un modèle de données minimal',
          body: 'Cinq catégories, des profils, des recommandations, des photos. Row Level Security côté Supabase pour que la confidentialité soit tenue par la base, pas par l’interface.',
        },
        {
          title: 'Une esthétique éditoriale assumée',
          body: "Référence Service95 : typographie magazine, photos plein cadre, carrousels Embla. Un site privé n’a aucune raison d’être laid.",
        },
      ],
      en: [        {
          title: 'The circle is the filter',
          body: 'You join with an invite code, and you only see recommendations from your own circle. No algorithm, no strangers: trust is the product.',
        },
        {
          title: 'A deliberately small data model',
          body: 'Five categories, profiles, recommendations, photos. Row Level Security on Supabase so privacy is enforced by the database, not by the interface.',
        },
        {
          title: 'An editorial look, on purpose',
          body: 'Service95 as the reference: magazine typography, full-bleed photos, Embla carousels. A private site has no reason to be ugly.',
        },
      ],
    },
    note: {
      fr: 'Site privé : l’accès se fait sur invitation, la page de connexion est donc la seule page publique.',
      en: 'Private site: access is invite-only, so the sign-in screen is the only public page.',
    },
  },
  {
    slug: 'incxnnue-lab',
    name: 'Incxnnue Lab',
    year: '2026',
    status: 'soon',
    url: 'https://incxnnue-lab.vercel.app/fr',
    stack: ['Next.js', 'WebGL', 'Cal.com', 'Resend', 'Stripe', 'FR / EN'],
    cover: '/shots/incxnnue-lab.webp',
    coverAlt: 'Page d’accueil d’Incxnnue Lab, ateliers d’impression 3D et d’optique',
    tagline: {
      fr: 'Ateliers d’impression 3D et d’optique, Paris.',
      en: '3D printing and optics workshops, Paris.',
    },
    intro: {
      fr: "Le site des ateliers de la marque Incxnnue — sacs imprimés en 3D, motifs optiques. Vingt-cinq pages bilingues : accueil, liste et fiches d’ateliers, réservation, contact et cartes cadeau, avec des textes et des prix remplaçables sans toucher aux composants.",
      en: 'The workshop site for Incxnnue — 3D-printed bags with optical patterns. Twenty-five bilingual pages: home, workshop list and detail pages, booking, contact and gift cards, with copy and prices replaceable without touching the components.',
    },
    points: {
      fr: [
        {
          title: 'Réserver sans back-office',
          body: "La réservation s’appuie sur Cal.com : les durées et les prix sont lus depuis l’API, et une grille factice prend le relais tant que le widget n’est pas activé. Le site reste utilisable avant même que le compte soit branché.",
        },
        {
          title: 'Un motif 3D qui ne coûte rien',
          body: "Le motif optique de la marque est rendu en WebGL : relief, rotation lente, pause hors écran, respect de prefers-reduced-motion et poster de secours sans WebGL.",
        },
        {
          title: 'Du contenu, pas du code en dur',
          body: 'Ateliers, prix, textes et visuels vivent dans des fichiers de données. Le site a été livré comme un premier jet complet que la marque remplit elle-même.',
        },
      ],
      en: [
        {
          title: 'Booking without a back end',
          body: 'Booking runs on Cal.com: durations and prices are read from the API, and a placeholder grid takes over until the widget is enabled. The site works before the account is even connected.',
        },
        {
          title: 'A 3D pattern that costs nothing',
          body: 'The brand’s optical pattern is rendered in WebGL: relief, slow rotation, pause when off-screen, prefers-reduced-motion support and a fallback poster without WebGL.',
        },
        {
          title: 'Content, not hard-coded pages',
          body: 'Workshops, prices, copy and visuals live in data files. The site shipped as a complete first draft the brand fills in itself.',
        },
      ],
    },
    note: {
      fr: 'Premier jet complet et en ligne : textes, prix et visuels sont encore des placeholders.',
      en: 'First complete draft, already live: copy, prices and visuals are still placeholders.',
    },
  },
  {
    slug: 'ghys-et-martine',
    name: 'Ghys & Martine',
    year: '2026',
    status: 'soon',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe', 'Resend'],
    cover: '/shots/ghys-et-martine.webp',
    coverAlt: 'Boutique de jeux de société Ghys & Martine',
    tagline: {
      fr: 'Boutique de jeux de société : catalogue léger, Stripe, zéro base de données.',
      en: 'A board game shop: light catalogue, Stripe, no database.',
    },
    intro: {
      fr: "Une petite boutique de jeux de société — moins de vingt références — pensée pour être tenue par une seule personne, sans back-office ni base de données à administrer.",
      en: 'A small board game shop — under twenty products — built to be run by one person, with no admin panel and no database to maintain.',
    },
    points: {
      fr: [
        {
          title: 'Pas de base de données, et c’est un choix',
          body: "Le catalogue vit dans un fichier JSON, le stock dans les métadonnées des produits Stripe et se décrémente à chaque vente. Pour vingt références, une base aurait été une charge, pas une fonctionnalité.",
        },
        {
          title: 'La commande jusqu’au bout',
          body: "Checkout Stripe, emails transactionnels, et expédition suivie depuis le dashboard Stripe. Les commandes n’ont pas besoin d’un outil de plus.",
        },
        {
          title: 'Prêt, pas encore en ligne',
          body: "Le code est terminé ; il reste les étapes que personne ne peut automatiser : compte Stripe en mode live, domaine et vérification de l’email d’envoi.",
        },
      ],
      en: [
        {
          title: 'No database, on purpose',
          body: 'The catalogue lives in a JSON file, stock lives in Stripe product metadata and decrements on every sale. For twenty products a database would have been a burden, not a feature.',
        },
        {
          title: 'The order, end to end',
          body: 'Stripe checkout, transactional emails, shipping tracked from the Stripe dashboard. Orders do not need one more tool.',
        },
        {
          title: 'Built, not live yet',
          body: 'The code is done; what remains are the steps nobody can automate: a live Stripe account, the domain, and the sending domain verification.',
        },
      ],
    },
    note: {
      fr: 'Site en préparation, pas encore public.',
      en: 'In preparation, not public yet.',
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
