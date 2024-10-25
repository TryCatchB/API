const projects = [
  {
    id: "1",
    title: "Vk-copy",
    skills: "React, TypeScript, FireBase, Vite",
    image:
      "https://raw.githubusercontent.com/TryCatchB/Json-server/refs/heads/main/imageProjects/VK-copy.png",
    link: "https://vk-copy-cewm.vercel.app/",
    gitHubLink: "https://github.com/TryCatchB/VK-copy",
  },
  {
    id: "2",
    title: "Netflix-copy",
    skills: "React, TypeScript, Redux, Vite",
    image:
      "https://raw.githubusercontent.com/TryCatchB/Json-server/refs/heads/main/imageProjects/Netflix-copy.png",
    link: "",
    gitHubLink: "https://github.com/TryCatchB/Netflix_copy",
  },
  {
    id: "3",
    title: "To-do App",
    skills: "JS, HTML, CSS",
    image:
      "https://raw.githubusercontent.com/TryCatchB/Json-server/refs/heads/main/imageProjects/to-do_app.png",
    link: "https://to-do-app-mu-ivory.vercel.app/",
    gitHubLink: "https://github.com/TryCatchB/TO-DO_app",
  },
  {
    id: "4",
    title: "Online Store ZLATMAX",
    skills: "JS, HTML, CSS, SwiperJS, Adaptive layout",
    image:
      "https://raw.githubusercontent.com/TryCatchB/Json-server/refs/heads/main/imageProjects/zlatmax.png",
    link: "https://online-store-lime.vercel.app/",
    gitHubLink: "https://github.com/TryCatchB/Online-store",
  },
  {
    id: "5",
    title: "Web-site RELVISE",
    skills: "HTML, CSS, Adaptive layout",
    image:
      "https://raw.githubusercontent.com/TryCatchB/Json-server/refs/heads/main/imageProjects/relvise.png",
    link: "https://relvise-web-site.vercel.app/",
    gitHubLink: "https://github.com/TryCatchB/HTML-project-4",
  },
  {
    id: "6",
    title: "My first web-site",
    skills: "HTML, CSS, BootStrap",
    image:
      "https://raw.githubusercontent.com/TryCatchB/Json-server/refs/heads/main/imageProjects/firstProject.png",
    link: "https://html-project-three-chi.vercel.app/",
    gitHubLink: "https://github.com/TryCatchB/HTML-project",
  },
];

const popularFilms = [
  {
    id: "1",
    title: "Dune: Part Two",
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
    video:
      "https://www.youtube.com/watch?v=TYTwMZAMV3A&pp=ygUOZHVuZSAyIG9waW5pb24%3D",
    type: "popular",
    metadata: {
      year: "2024",
      rating: "8.5",
      duration: "2h 46m",
    },
  },
  {
    id: "2",
    title: "Furiosa: A Mad Max Saga",
    description:
      "The origin story of renegade warrior Furiosa before her encounter and teamup with Mad Max.",
    image:
      "https://resizing.flixster.com/C8tEkQD0pnR7Cj5gvidLWpQknNE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U5Mjc0ZGE2LTcyNTYtNGUwNS04NTg5LTcwNDE0YzdmYTliMi5qcGc=",
    video:
      "https://www.youtube.com/watch?v=bPtyH_qt-CA&pp=ygUiZnVyaW9zYSBhIG1hZCBtYXggc2FnYSDQvtCx0LfQvtGAIA%3D%3D",
    type: "popular",
    metadata: {
      year: "2024",
      rating: "7.5",
      duration: "2h 28m",
    },
  },
  {
    id: "3",
    title: "Inside Out 2",
    description:
      "A sequel that features Riley entering puberty and experiencing brand new, more complex emotions as a result. As Riley tries to adapt to her teenage years, her old emotions try to adapt to the possibility of being replaced.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWY3MDE2Y2UtOTE3Zi00MGUzLTg2MTItZjE1ZWVkMGVlODRmXkEyXkFqcGc@._V1_.jpg",
    video:
      "https://www.youtube.com/watch?v=tuXNaB3zfvY&pp=ygUYSW5zaWRlIE91dCAyINC-0LHQt9C-0YAg",
    type: "popular",
    metadata: {
      year: "2024",
      rating: "7.7",
      duration: "1h 36m",
    },
  },
  {
    id: "4",
    title: "Ghostlight",
    description:
      "When a construction worker unexpectedly joins a local theater's production of Romeo and Juliet, the drama onstage starts to mirror his own life.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGZhNmQwMTgtMThjZS00ODEwLWJhZDUtNTEyZWRmMDMwMDM4XkEyXkFqcGc@._V1_.jpg",
    video:
      "https://www.youtube.com/watch?v=bfZ_-mjJHE0&pp=ygUWR2hvc3RsaWdodCDQvtCx0LfQvtGAIA%3D%3D",
    type: "popular",
    metadata: {
      year: "2024",
      rating: "7.5",
      duration: "1h 55m",
    },
  },
  {
    id: "5",
    title: "Young Woman and the Sea",
    description:
      "The story of competitive swimmer Gertrude Ederle, who, in 1926, was the first woman to ever swim across the English Channel.",
    image:
      "https://image.tmdb.org/t/p/original/bZlecCuBVvKuarNGvchBwaOsQ3c.jpg",
    video:
      "https://www.youtube.com/watch?v=vOm-MUwrIO0&pp=ygUjWW91bmcgV29tYW4gYW5kIHRoZSBTZWEg0L7QsdC30L7RgCA%3D",
    type: "popular",
    metadata: {
      year: "2024",
      rating: "7.6",
      duration: "2h 9m",
    },
  },
];

const films = [
  {
    id: "1",
    title: "The Shawshank Redemption",
    description:
      "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
    video:
      "https://www.youtube.com/watch?v=jR7GOmgpw5Y&pp=ygUjVGhlIFNoYXdzaGFuayBSZWRlbXB0aW9uINC-0LHQt9C-0YA%3D",
    type: "films",
    metadata: {
      year: "1994",
      rating: "9.3",
      duration: "2h 22m",
    },
  },
  {
    id: "2",
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg",
    video:
      "https://www.youtube.com/watch?v=nYdE3DDtNgA&pp=ygUYVGhlIEdvZGZhdGhlciDQvtCx0LfQvtGA",
    type: "films",
    metadata: {
      year: "1972",
      rating: "9.2",
      duration: "2h 55m",
    },
  },
  {
    id: "3",
    title: "The Dark Knight",
    description:
      "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg",
    video:
      "https://www.youtube.com/watch?v=EwANrUwJ9-Y&pp=ygUaVGhlIERhcmsgS25pZ2h0INC-0LHQt9C-0YA%3D",
    type: "films",
    metadata: {
      year: "2008",
      rating: "9.0",
      duration: "2h 32m",
    },
  },
  {
    id: "4",
    title: "The Godfather Part II",
    description:
      "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzc1OWY5MjktZDllMi00ZDEzLWEwMGItYjk1YmRhYjBjNTVlXkEyXkFqcGc@._V1_.jpg",
    video:
      "https://www.youtube.com/watch?v=WK_VRbXuaTs&pp=ygUrVGhlIEdvZGZhdGhlciBQYXJ0IElJINGE0LjQu9GM0Lwg0L7QsdC30L7RgA%3D%3D",
    type: "films",
    metadata: {
      year: "1974",
      rating: "9.0",
      duration: "3h 22m",
    },
  },
  {
    id: "5",
    title: "12 Angry Men",
    description:
      "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
    video:
      "https://www.youtube.com/watch?v=upa3d5sC7uM&pp=ygUiMTIgQW5ncnkgTWVuINGE0LjQu9GM0Lwg0L7QsdC30L7RgA%3D%3D",
    type: "films",
    metadata: {
      year: "1957",
      rating: "9.0",
      duration: "1h 36m",
    },
  },
];

const tvShows = [
  {
    id: "1",
    title: "Breaking Bad",
    description:
      "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student to secure his family's future.",
    image:
      "https://resizing.flixster.com/Sy-eayeaBBfvec9MmaV2CRtGVxs=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjYyNjQ5LndlYnA=",
    video:
      "https://www.youtube.com/watch?v=nZD_ZR5xejc&pp=ygUXQnJlYWtpbmcgQmFkINC-0LHQt9C-0YA%3D",
    type: "tvshows",
    metadata: {
      year: "2008-2013",
      episodes: "62 eps",
      rating: "9.5",
    },
  },
  {
    id: "2",
    title: "Planet Earth II",
    description:
      "David Attenborough returns with a new wildlife documentary that shows life in a variety of habitats.",
    image:
      "https://cms.bbcearth.com/sites/default/files/2020-11/Planet%20Earth%20II%20tile_592x888px.png",
    video:
      "https://www.youtube.com/watch?v=vArS4nIvFlI&pp=ygUhUGxhbmV0IEVhcnRoIElJINGI0L7RgyDQvtCx0LfQvtGA",
    type: "tvshows",
    metadata: {
      year: "2016",
      episodes: "6 eps",
      rating: "9.5",
    },
  },
  {
    id: "3",
    title: "Planet Earth",
    description:
      "A documentary series on the wildlife found on Earth. Each episode covers a different habitat: deserts, mountains, deep oceans, shallow seas, forests, caves, polar regions, fresh water, plains and jungles. Narrated by David Attenborough.",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2NjNDUzOTgtMDFmNC00ZGQ4LWE5MDctMzczNGVlOGU1N2MyXkEyXkFqcGc@._V1_.jpg",
    video:
      "https://www.youtube.com/watch?v=I18NZLdgkEc&pp=ygUeUGxhbmV0IEVhcnRoIHNlcmllcyDQvtCx0LfQvtGA",
    type: "tvshows",
    metadata: {
      year: "2006",
      episodes: "11 eps",
      rating: "9.4",
    },
  },
  {
    id: "4",
    title: "Band of Brothers",
    description:
      "The story of Easy Company of the U.S. Army 101st Airborne Division and their mission in World War II Europe, from Operation Overlord to V-J Day.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTQ3NTdmOTEtZTRmMi00NTg5LWI5NmUtYTNiOTc0ZmNkODU0XkEyXkFqcGc@._V1_.jpg",
    video:
      "https://www.youtube.com/watch?v=xaclBrwuNUY&pp=ygUiQmFuZCBvZiBCcm90aGVycyBzZXJpZXMg0L7QsdC30L7RgA%3D%3D",
    type: "tvshows",
    metadata: {
      year: "2001",
      episodes: "10 eps",
      rating: "9.4",
    },
  },
  {
    id: "5",
    title: "Chernobyl",
    description:
      "In April 1986, the city of Chernobyl in the Soviet Union suffers one of the worst nuclear disasters in the history of mankind. Consequently, many heroes put their lives on the line in the following days, weeks and months.",
    image:
      "https://resizing.flixster.com/wdwswQucPh6IuTl8L2ZCCsOd8yQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16686729_b_v13_ad.jpg",
    video:
      "https://www.youtube.com/watch?v=vC8uYFXK_h0&pp=ygUbQ2hlcm5vYnlsIHNlcmllcyDQvtCx0LfQvtGA",
    type: "tvshows",
    metadata: {
      year: "2019",
      episodes: "5 eps",
      rating: "9.3",
    },
  },
];

const newestFilms = [
  {
    id: "1",
    title: "Deadpool & Wolverine",
    description:
      "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_.jpg",
    video:
      "https://www.youtube.com/watch?v=yMfruWv-9nU&pp=ygUO0JTRjdC00L_Rg9C7IDM%3D",
    metadata: {
      year: "2024",
      rating: "7.9",
    },
  },
  {
    id: "2",
    title: "Terrifier 3",
    description:
      "Art the Clown is set to unleash chaos on the unsuspecting residents of Miles County as they peacefully drift off to sleep on Christmas Eve.",
    image:
      "https://www.imdb.com/title/tt27911000/mediaviewer/rm1974431489/?ref_=tt_ov_i",
    video:
      "https://www.youtube.com/watch?v=zaPcin5knJk&pp=ygULVGVycmlmaWVyIDM%3D",
    metadata: {
      year: "2024",
      rating: "6.5",
    },
  },
];

export { projects, popularFilms, films, tvShows, newestFilms };
