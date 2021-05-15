import { IBook } from "../../src/interfaces/IBook";

const books: IBook[] = [
  {
    id: "5s48s81",
    title: "Coder proprement",
    author: "Robert C.Martin",
    description: "Nettoyez votre code et devenez plus performant !",
    content:
      "Si un code sale peut fonctionner, il peut également compromettre la pérennité d'une entreprise de développement de logiciels. Chaque année, du temps et des ressources sont gaspillés à cause d'un code mal écrit. Toutefois, ce n'est pas une fatalité. Grâce à cet ouvrage, vous apprendrez à rédiger du bon code, ainsi qu'à le nettoyer « à la volée », et vous obtiendrez des applications plus robustes, plus évolutives et donc plus durables. Concret et pédagogique, ce manuel se base sur les bonnes pratiques d'une équipe de développeurs aguerris réunie autour de Robert C. Martin, expert logiciel reconnu. Il vous inculquera les valeurs d'un artisan du logiciel et fera de vous un meilleur programmeur. Coder proprement est décomposé en trois parties. La première décrit les principes, les motifs et les pratiques employés dans l'écriture d'un code propre. La deuxième est constituée de plusieurs études de cas à la complexité croissante. Chacune d'elles est un exercice de nettoyage : vous partirez d'un exemple de code présentant certains problèmes, et l'auteur vous expliquera comment en obtenir une version saine et performante. La troisième partie, enfin, sera votre récompense. Son unique chapitre contient une liste d'indicateurs éprouvés par l'auteur qui vous seront précieux pour repérer efficacement les défauts de votre code. ",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/517gj2lIN8L._SX406_BO1,204,203,200_.jpg",
    price: 39.9,
    quantity: 5,
    lang: "fr",
    rating: 4.5,
    top: true,
  },
  {
    id: "35ss",
    title: "Vue.js - Applications web complexes et réactives",
    author: "Brice Chaponneau",
    description: "Un ouvrage de référence pour le développeur web",
    content:
      "Vue.js est un framework JavaScript orienté front-end qui mérite considération à plusieurs égards. Il est réactif, performant, versatile, facilement testable, maintenable et sa courbe d'apprentissage est réellement rapide.écriture globale est idéalement structurée et son écosystème aide à créer, organiser et maintenir vos applications clientes. Ce framework peut se suffire à lui-même pour développer des applications complexes en ayant recours à de simples composants, des mixins ou des plug-ins. De plus, il s'accompagne d'un univers où de multiples outils sont disponibles pour aider au développement : des extensions, des plug-ins et des librairies complètes pour vous faire gagner en temps de réalisation, en qualité de code et également en performance.",
    image: "https://m.media-amazon.com/images/I/412Nz1XnMkL.jpg",
    price: 34,
    quantity: 2,
    lang: "fr",
    rating: 4,
  },
  {
    id: "fds4845",
    title: "CSS 3 Grid Layout: Vous allez enfin aimer CSS",
    author: "Raphaël Goetter",
    description:
      "Un ouvrage de référence pour les webdesigners et intégrateurs ",
    content:
      " Complémentaire de Flexbox, le module de positionnement Grid Layout est une spécification du W3C à l’état de Candidate Recommandation dont les premiers jets datent de 2004. Désormais exploitable en production sur l’ensemble des navigateurs, le concept général de Grid Layout (ou « positionnement en grille ») est de structurer l’espace en zones majeures, au sein d’une page web ou d’une application. Une grille virtuelle, indépendante des éléments HTML qui peuvent s’y placer, présente l’avantage flagrant d’être très souple lorsqu’on souhaite la modifier en fonction du contexte. Parfaitement adapté au responsive webdesign, Grid Layout permet à votre page de s’adapter immédiatement aux différentes tailles d’écran. Associé aux CSS 3 Media Queries, le modèle de positionnement en grille donne toute sa puissance, plus particulièrement si vous avez opté pour une trame sous forme de variante « template ». Seul le patron de départ nécessite d’être modifié : inutile d’intervenir sur la structure HTML, ni même sur le positionnement de chaque élément de page. Agrémenté de nombreuses illustrations en couleurs et d’exercices pratiques, cet ouvrage vous accompagne de façon progressive dans la découverte des concepts et propriétés associés à ce nouveau module et vous permet d’élaborer efficacement l’architecture de vos pages sous forme de grilles. À qui s’adresse cet ouvrage ?• Aux webdesigners et intégrateurs avancés ou experts qui souhaitent appréhender et maîtriser en production ce nouveau modèle de positionnement excitant.• Aux développeurs et chefs de projet Web qui s’interrogent sur les possibilités offertes par CSS en termes de design d’interfaces.",
    image: "https://m.media-amazon.com/images/I/41WWxsbbSQL.jpg",
    price: 19.9,
    quantity: 0,
    lang: "fr",
    rating: 4.5,
  },
  {
    id: "dsfds487878",
    title: "Refactoring - Comment améliorer le code existant",
    author: "Martin Fowler",
    description: "",
    content:
      "Le refactoring, ou ré-ingénierie du code, est l'opération consistant à retravailler le code source d'un programme de façon à en améliorer la lisibilité et par voie de conséquence la maintenance. Il ne s'agit pas de le compléter ou d'en corriger des bugs, mais d'en améliorer la structure sans en altérer le fonctionnement. Ce livre, réédité fin 2018, est l'ouvrage de référence du refactoring. Il commence par un chapitre exemple pour bien faire comprendre ce qu'est (et n'est pas) le refactoring. Le chapitre suivant explique les principes et l'utilité de cette démarche. Le troisième chapitre montre comment repérer le code \"douteux\", et le quatrième comment construire des tests. Les chapitres suivants rassemblent un éventail de solutions à apporter en fonction des problèmes rencontrés. Dans cette deuxième édition  c'est le langage Javascript qui a été choisi pour illustrer les exemples.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41HFrFX6cyL._SX346_BO1,204,203,200_.jpg",
    price: 39.9,
    quantity: 3,
    lang: "fr",
    rating: 4,
    top: true,
  },
  {
    id: "xx788s8s1",
    title: "Jumpstart Jamstack Development",
    author: "Christopher Pecoraro",
    description:
      "Build and deploy modern websites and web apps using Gatsby, Netlify, and Sanity",
    content:
      "The Jamstack (JavaScript, API, and Markup) enables web developers to create and publish modern and maintainable websites and web apps focused on speed, security, and accessibility by using tools such as Gatsby, Sanity, and Netlify. Developers working with the Jamstack will be able to put their knowledge to good use with this practical guide to static site generation and content management. This Jamstack book takes a hands-on approach to implementation and related methodologies that will have you up and running with modern web development in no time. Complete with step-by-step explanations of essential concepts, practical examples, and self-assessment questions, you’ll begin by building an event and venue schema structure, and then expand the functionality, exploring all that Jamstack has to offer. You'll learn how an example Jamstack is built, build structured content using a schema, use GraphQL to expose the content, and employ Gatsby to build an event website using page and template components. Lastly, you’ll deploy the website to a Netlify server.",
    image: "https://m.media-amazon.com/images/I/51zT+Qjv8qL.jpg",
    price: 14,
    quantity: 3,
    lang: "en",
    rating: 3,
  },
  {
    id: "16dd99d2d",
    title: "Clean Architecture",
    author: "Robert C. Martin",
    description: "A Craftsman's Guide to Software Structure and Design",
    content:
      "By applying universal rules of software architecture, you can dramatically improve developer productivity throughout the life of any software system. Now, building upon the success of his best-selling books Clean Code and The Clean Coder, legendary software craftsman Robert C. Martin (“Uncle Bob”) reveals those rules and helps you apply them. Martin’s Clean Architecture doesn’t merely present options. Drawing on over a half-century of experience in software environments of every imaginable type, Martin tells you what choices to make and why they are critical to your success. As you’ve come to expect from Uncle Bob, this book is packed with direct, no-nonsense solutions for the real challenges you’ll face–the ones that will make or break your projects.",
    image: "https://m.media-amazon.com/images/I/411csr6Nn0L.jpg",
    price: 39.9,
    quantity: 1,
    rating: 5,
    lang: "en",
  },
  {
    id: "dsifids98v1",
    title: "PHP 7: Cours et exercices",
    author: "Jean Engels",
    description:
      "Un cours idéal pour assimiler la syntaxe et les concepts objet de PHP 7 et s'initier au développement d'applications web professionnelles",
    content:
      "Ce manuel d'initiation vous conduira des premiers pas en PHP jusqu'à la réalisation d'un site web complet interagissant avec une base de données MySQL ou SQLite. Après avoir appris à installer PHP et à créer quelques pages simples, vous étudierez en détail la syntaxe du langage (variables, types de données, opérateurs, instructions, fonctions, tableaux...), avant de progresser rapidement vers des sujets de niveau plus avancé : programmation objet, manipulation des chaînes de caractères et expressions régulières, gestion des mails, sessions et cookies, accès objet aux bases de données MySQL et SQLite, traitements XML, etc. Successeur de PHP 5 - Cours et exercices du même auteur, cet ouvrage met en avant les nouveautés de PHP 7 : typage des paramètres des fonctions et des valeurs qu'elles retournent, fonctions anonymes, générateurs, classes anonymes, suppression de l'accès procédural à MySQL au profit des méthodes objet, etc.",
    image: "https://m.media-amazon.com/images/I/41qBYSfDyvL.jpg",
    price: 29.9,
    quantity: 4,
    rating: 3.5,
    lang: "fr",
  },
  {
    id: "vvcx777s7ff",
    title:
      "Les bases de données NoSQL et le BigData: Comprendre et mettre en oeuvre",
    author: "Rudi Bruchez",
    description: "Des bases pour la performance et le Big Data",
    content:
      "En quelques années, le volume des données brassées par les entreprises a considérablement augmenté. Émanant de sources diverses (transactions, comportements, réseaux sociaux, géolocalisation...), elles sont souvent structurées autour d'un seul point d'entrée, la clé, et susceptibles de croître très rapidement. Autant de caractéristiques qui les rendent très difficiles à traiter avec des outils classiques de gestion de données. Par ailleurs, l'analyse de grands volumes de données, ce qu'on appelle le Big Data, défie également les moteurs de bases de données traditionnels. C'est pour répondre à ces différentes problématiques que sont nées les bases de données NoSQL (Not Only SQL), sous l'impulsion de grands acteurs du Web comme Facebook ou Google, qui les avaient développées à l'origine pour leurs besoins propres. Grâce à leur flexibilité et leur souplesse, ces bases non relationnelles permettent en effet de gérer de gros volumes de données hétérogènes sur un ensemble de serveurs de stockage distribués, avec une capacité de montée en charge très élevée. Elles peuvent aussi fournir des accès de paires clé-valeur en mémoire avec une très grande célérité. Réservées jusqu'à peu à une minorité, elles tendent aujourd'hui à se poser en complément du modèle relationnel qui dominait le marché depuis plus de 30 ans.",
    image: "https://m.media-amazon.com/images/I/510zl602aUL.jpg",
    price: 21.99,
    quantity: 2,
    rating: 4,
    lang: "fr",
  },
  {
    id: "difsi188vv",
    title: "Node.js: Apprendre par la pratique",
    author: "Thomas Parisot",
    description: "Plus de 500 exemples pour apprendre en pratiquant",
    content:
      "La plate-forme Node.js est passée du statut d'OVNI à celui d'incontournable. En 2018, elle fait fonctionner des applications web, de l'outillage front-end, de la distribution de fichiers pair-à-pair, des objets connectés et la NASA l'utilise même pour analyser les données télémétriques de ses sondes spatiales. L'intention de cet ouvrage est d'être votre base de départ pour comprendre ce qu'il se passe dans cet écosystème en perpétuel mouvement. Il devrait vous permettre de faire des choix techniques durables et de vous rendre opérationnelle sur LA plate-forme JavaScript, le langage le plus populaire du monde selon GitHub.",
    image: "https://m.media-amazon.com/images/I/41ZzxbmRsBL.jpg",
    price: 38,
    quantity: 51,
    rating: 4,
    lang: "fr",
    top: true,
  },
  {
    id: "bnvlp884g",
    title: "Pro JavaScript Design Patterns",
    author: "Dustin Diaz",
    content:
      "As a web developer, you'll already know that JavaScript is a powerful language, allowing you to add an impressive array of dynamic functionality to otherwise static web sites. But there is more power waiting to be unlocked--JavaScript is capable of full object-oriented capabilities, and by applying object-oriented principles, best practices, and design patterns to your code, you can make it more powerful, more efficient, and easier to work with alone or as part of a team. With Pro JavaScript Design Patterns, you'll start with the basics of object-oriented programming in JavaScript applicable to design patterns, including making JavaScript more expressive, inheritance, encapsulation, information hiding, and more. With that covered, you can kick-start your JavaScript development in the second part of the book, where you'll find detail on how to implement and take advantage of several design patterns in JavaScript, including composites, decorators, façades, adapters, and many more.",
    description: "",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/517DBDKJx0L._SX376_BO1,204,203,200_.jpg",
    price: 40.9,
    quantity: 2,
    rating: 2,
    lang: "en",
  },
];

export default books;
