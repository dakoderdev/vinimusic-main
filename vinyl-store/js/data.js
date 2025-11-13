const productos = [

  {
    nombre: "Brat",
    precio: 125000,
    img: "vinyl-brat.jpg",
    artista: "Charli xcx",
    descripcion:
      "El sexto álbum de estudio de Charli XCX (2024). Un proyecto electropop agresivo y satírico que mezcla club, trance y experimentación sonora, explorando la fama y la autenticidad.",
    generos: ["electropop", "hyperpop", "pop", "dance", "experimental"],
    destacado: true,
  },
  {
    nombre: "The Life of a Showgirl",
    precio: 139000,
    img: "vinyl-showgirl.jpg",
    artista: "Taylor Swift",
    descripcion:
      "El duodécimo álbum de estudio de Taylor Swift (2025). Un retrato elegante y cinematográfico del estrellato y la feminidad, donde el pop alternativo se fusiona con sintetizadores nostálgicos y letras introspectivas.",
    generos: ["pop", "folk", "synth-pop", "alternativo"],
  },
  {
    nombre: "Short n' Sweet Deluxe",
    precio: 128000,
    img: "vinyl-shortsweetdeluxe.jpg",
    artista: "Sabrina Carpenter",
    descripcion:
      "Versión deluxe del álbum 'Short n’ Sweet' (2024), con éxitos como 'Espresso' y 'Please Please Please'. Pop fresco, coqueto y colorido con influencias disco y R&B.",
    generos: ["pop", "disco", "R&B"],
    destacado: true,
  },
  {
    nombre: "AM",
    precio: 89000,
    img: "vinyl-am.jpg",
    artista: "Arctic Monkeys",
    descripcion:
      "Lanzado en 2013, este disco marcó el salto global de la banda con un sonido más sensual y oscuro, influido por el R&B y el rock psicodélico.",
    generos: ["rock alternativo", "indie rock", "garage rock"],
    destacado: true,
  },
  {
    nombre: "Future Nostalgia",
    precio: 85000,
    img: "vinyl-futurenostalgia.jpg",
    artista: "Dua Lipa",
    descripcion:
      "Álbum ganador del Grammy (2020) que define el pop moderno con influencias de disco, funk y synth-pop. Incluye los éxitos 'Don't Start Now' y 'Levitating'.",
    generos: ["pop", "disco", "funk", "dance"],
    destacado: true,
  },
  {
    nombre: "Norman Fucking Rockwell!",
    precio: 122000,
    img: "vinyl-nfr.jpg",
    artista: "Lana del Rey",
    descripcion:
      "Aclamado álbum de 2019 con letras poéticas y melancólicas, producción de Jack Antonoff y una estética de California melancólica.",
    generos: ["indie", "rock alternativo", "alternative pop"],
    destacado: true,
  },
  {
    nombre: "Come Over When You're Sober, Pt. 1",
    precio: 110000,
    img: "vinyl-comesober.jpg",
    artista: "Lil Peep",
    descripcion:
      "Disco debut (2017) del pionero del emo-rap. Mezcla letras vulnerables con trap, punk y emo, definiendo un género entero.",
    generos: ["emo rap", "trap", "alternativo"],
  },
  {
    nombre: "1989",
    precio: 250000,
    img: "vinyl-1989.jpg",
    artista: "Taylor Swift",
    descripcion:
      "El quinto álbum de Taylor Swift (2014) marcó su paso definitivo al pop, con himnos como 'Style', 'Blank Space' y 'Shake It Off'.",
    generos: ["pop", "synth-pop", "electropop"],
    destacado: true,
  },
  {
    nombre: "Starboy",
    precio: 105000,
    img: "vinyl-starboy.jpg",
    artista: "The Weeknd",
    descripcion:
      "Álbum de 2016 que consolidó el sonido futurista del artista, con colaboraciones de Daft Punk. Mezcla R&B, synth-pop y electrónica con una atmósfera nocturna.",
    generos: ["R&B", "electropop", "synthwave"],
  },
  {
    nombre: "Ballads 1",
    precio: 105000,
    img: "vinyl-ballads1.webp",
    artista: "Joji",
    descripcion:
      "Debut de Joji (2018). Un álbum introspectivo que explora la soledad y el amor desde una producción lo-fi y minimalista.",
    generos: ["lo-fi", "R&B", "trip hop", "alternativo"],
    destacado: true,
  },
  {
    nombre: "Desire, I Want To Turn Into You",
    precio: 97000,
    img: "vinyl-desire.webp",
    artista: "Caroline Polachek",
    descripcion:
      "Álbum de 2023 con producción art-pop experimental, combinando synths exuberantes, voces etéreas y elementos de música celta.",
    generos: ["art pop", "synth-pop", "experimental"],
    destacado: true,
  },
  {
    nombre: "Appetite For Destruction",
    precio: 115000,
    img: "vinyl-appetite.jpg",
    artista: "Guns N' Roses",
    descripcion:
      "Clásico debut de 1987 que definió el hard rock moderno, con himnos como 'Sweet Child O’ Mine' y 'Welcome to the Jungle'.",
    generos: ["hard rock", "glam metal", "rock clásico"],
  },
  {
    nombre: "Greatest Hits",
    precio: 108000,
    img: "vinyl-greatesthits.jpg",
    artista: "Guns N' Roses",
    descripcion:
      "Recopilatorio de 2004 con los mayores éxitos de la banda desde 1987 a 1993, incluyendo 'Paradise City' y 'November Rain'.",
    generos: ["hard rock", "rock clásico"],
  },
  {
    nombre: "Did you know that there's a tunnel under Ocean Blvd",
    precio: 119000,
    img: "vinyl-tunnelblvd.jpg",
    artista: "Lana Del Rey",
    descripcion:
      "Álbum de 2023 con tono íntimo y confesional. Mezcla piano, orquesta y spoken word en un viaje melancólico y poético.",
    generos: ["alternative pop", "folk", "dream pop"],
    destacado: true,
  },
  {
    nombre: "CRASH",
    precio: 115000,
    img: "vinyl-crash.jpg",
    artista: "Charli xcx",
    descripcion:
      "Álbum de 2022 donde Charli XCX combina pop mainstream y producción hyperpop, con colaboraciones de Rina Sawayama y Christine and the Queens.",
    generos: ["pop", "hyperpop", "dance"],
  },
  {
    nombre: "Hurry Up Tomorrow",
    precio: 96000,
    img: "vinyl-hurry.webp",
    artista: "The Weeknd",
    descripcion:
      "Proyecto conceptual posterior a 'Dawn FM' (2024). Explora un R&B futurista con sintetizadores oscuros y temas sobre la redención y la trascendencia.",
    generos: ["R&B", "synth-pop", "electronica"],
    destacado: true,
  },
  {
    nombre: "Man's Best Friend",
    precio: 102000,
    img: "vinyl-manbestfriend.webp",
    artista: "Sabrina Carpenter",
    descripcion:
      "EP conceptual que combina ironía y humor con melodías pop-rock y producción elegante. Una carta de amor y sarcasmo en partes iguales.",
    generos: ["pop", "pop-rock", "indie pop"],
    destacado: true,
  },
  {
    nombre: "Radical Optimism",
    precio: 105000,
    img: "vinyl-radicaloptimism.webp",
    artista: "Dua Lipa",
    descripcion:
      "Álbum de 2024 inspirado en el britpop y el dance psicodélico. Una reinvención más orgánica y libre tras 'Future Nostalgia'.",
    generos: ["pop", "britpop", "dance"],
    destacado: true,
  },
  {
    nombre: "Live Forever",
    precio: 103000,
    img: "vinyl-liveforever.webp",
    artista: "Lil Peep",
    descripcion:
      "Mixtape póstuma (2015) con sonido emo-trap crudo y melancólico. Incluye temas como 'Angeldust' y 'Haunt U'.",
    generos: ["emo rap", "trap", "alternativo"],
  },
  {
    nombre: "Ahi Vamos",
    precio: 94000,
    img: "vinyl-ahivamos.png",
    artista: "Gustavo Cerati",
    descripcion:
      "Disco de 2006 que marcó su regreso al rock energético. Incluye clásicos como 'Crimen' y 'Adiós'.",
    generos: ["rock argentino", "alternativo", "pop rock"],
    destacado: true,
  },
  {
    nombre: "Bocanada",
    precio: 100000,
    img: "vinyl-bocanada.jpg",
    artista: "Gustavo Cerati",
    descripcion:
      "Obra maestra de 1999 que fusiona electrónica y rock con una atmósfera onírica y sofisticada.",
    generos: ["rock alternativo", "electrónica", "trip hop"],
    destacado: true,
  },
  {
    nombre: "Artaud",
    precio: 98000,
    img: "vinyl-artaud.webp",
    artista: "Pescado Rabioso",
    descripcion:
      "Disco de 1973 considerado una joya del rock argentino, con letras existenciales de Spinetta y un sonido psicodélico.",
    generos: ["rock argentino", "psicodélico", "progresivo"],
  },
  {
    nombre: "Almendra",
    precio: 98000,
    img: "vinyl-almendra.webp",
    artista: "Almendra",
    descripcion:
      "Álbum debut de 1969 que marcó el nacimiento del rock argentino moderno, con temas poéticos y experimentales.",
    generos: ["rock argentino", "psicodélico", "folk"],
  },
  {
    nombre: "Soda Stereo",
    precio: 100000,
    img: "vinyl-sodastereo.png",
    artista: "Soda Stereo",
    descripcion:
      "Debut de 1984 que definió el sonido del pop-rock latinoamericano de los 80, con energía juvenil y estética moderna.",
    generos: ["pop rock", "new wave", "rock latino"],
    destacado: true,
  },
  {
    nombre: "Cancion Animal",
    precio: 110000,
    img: "vinyl-cancionanimal.webp",
    artista: "Soda Stereo",
    descripcion:
      "Álbum de 1990, punto máximo de la banda. Incluye 'De Música Ligera' y 'Un Millón de Años Luz'.",
    generos: ["rock alternativo", "rock latino"],
  },
  {
    nombre: "Porfiado",
    precio: 95000,
    img: "vinyl-porfiado.webp",
    artista: "Cuarteto de Nos",
    descripcion:
      "Disco de 2012 con letras irónicas y producción moderna, ganador del Latin Grammy a Mejor Álbum de Rock/Pop.",
    generos: ["rock alternativo", "pop rock", "uruguayo"],
  },
  {
    nombre: "El Mal Querer",
    precio: 115000,
    img: "vinyl-elmalquerer.webp",
    artista: "Rosalia",
    descripcion:
      "Obra conceptual (2018) que fusiona flamenco y pop contemporáneo. Ganador del Grammy Latino y referente del pop moderno español.",
    generos: ["flamenco", "pop", "experimental"],
    destacado: true,
  },
  {
    nombre: "iDon",
    precio: 100000,
    img: "vinyl-idon.webp",
    artista: "Don Omar",
    descripcion:
      "Álbum de 2009 donde el artista combina reggaetón, electrónica y hip hop futurista, con un enfoque innovador para su tiempo.",
    generos: ["reggaetón", "electrónica", "urbano"],
  },
  {
    nombre: "Legend",
    precio: 105000,
    img: "vinyl-bobmarley.webp",
    artista: "Bob Marley",
    descripcion:
      "Compilación esencial de 1984 con los mayores éxitos de Bob Marley & The Wailers. Un homenaje a la paz y la resistencia.",
    generos: ["reggae", "roots", "ska"],
  },
  {
    nombre: "The Album",
    precio: 93000,
    img: "vinyl-thealbum.webp",
    artista: "Blackpink",
    descripcion:
      "Debut de 2020 del grupo surcoreano con éxitos como 'How You Like That' y 'Lovesick Girls'. Fusión explosiva de pop y hip hop.",
    generos: ["K-pop", "pop", "hip hop"],
  },
  {
    nombre: "Whiplash",
    precio: 91000,
    img: "vinyl-whiplash.jpg",
    artista: "Aespa",
    descripcion:
      "Álbum de 2024 que mezcla hyperpop, R&B y electrónica, continuando la estética futurista del grupo.",
    generos: ["K-pop", "hyperpop", "electropop"],
    destacado: true,
  },
  {
    nombre: "Locura",
    precio: 90000,
    img: "vinyl-locura.jpg",
    artista: "Virus",
    descripcion:
      "Álbum de 1985 con sonido new wave y letras cargadas de ironía y sensualidad, ícono del pop argentino ochentoso.",
    generos: ["new wave", "rock argentino", "pop"],
  },
  {
    nombre: "Karma",
    precio: 92000,
    img: "vinyl-karma.png",
    artista: "Stray Kids",
    descripcion:
      "Mini-álbum de 2024 con sonido industrial, rap intenso y producción dinámica. Energía pura y autoconfianza en estado sonoro.",
    generos: ["K-pop", "hip hop", "electronica"],
  },
  {
    nombre: "Grandes Exitos Vilma Palma",
    precio: 99000,
    img: "vinyl-grandesexitos.png",
    artista: "Vilma Palma",
    descripcion:
      "Colección de hits de la banda rosarina, incluyendo 'Auto Rojo' y 'La Pachanga'. Un repaso por el sonido fiestero de los 90.",
    generos: ["rock latino", "pop", "ska"],
  },
  {
    nombre: "Beautiful Chaos",
    precio: 94500,
    img: "vinyl-beautifulchaos.webp",
    artista: "Katseye",
    descripcion:
      "Álbum debut del grupo global Katseye (2024), mezcla de R&B y pop con producción internacional y energía juvenil.",
    generos: ["pop", "R&B", "dance"],
    destacado: true,
  },
  {
    nombre: "The Red",
    precio: 91500,
    img: "vinyl-thered.jpg",
    artista: "Red Velvet",
    descripcion:
      "Primer álbum de estudio (2015) con enfoque en el pop colorido y experimental del grupo, definiendo su identidad dual.",
    generos: ["K-pop", "dance", "R&B"],
  },
  {
    nombre: "Supersonico",
    precio: 97000,
    img: "vinyl-supersonico.png",
    artista: "Los Autenticos Decadentes",
    descripcion:
      "Disco que combina ska, cumbia y rock, con el estilo festivo característico del grupo argentino.",
    generos: ["rock latino", "ska", "cumbia"],
    destacado: true,
  },
  {
    nombre: "Sanctuary",
    precio: 93500,
    img: "vinyl-sanctuary.webp",
    artista: "TXT",
    descripcion:
      "EP conceptual con temas de crecimiento emocional y autodescubrimiento, mezclando pop y R&B en un tono etéreo.",
    generos: ["K-pop", "pop", "R&B"],
  },
  {
    nombre: "Rock",
    precio: 96500,
    img: "vinyl-rock.jpg",
    artista: "Viejas Locas",
    descripcion:
      "Álbum icónico del rock barrial argentino (1999), con himnos urbanos, crudeza y energía callejera.",
    generos: ["rock argentino", "barrial", "alternativo"],
    destacado: true,
  },
  {
    nombre: "Greatest Hits",
    precio: 87000,
    img: "vinyl-GreatestHits.webp",
    artista: "The Police",
    descripcion:
      "Compilado de 1992 que reúne los mayores éxitos de The Police, incluyendo 'Every Breath You Take', 'Roxanne' y 'Message in a Bottle'.",
    generos: ["new wave", "rock", "pop rock"],
    destacado: true,
  },
  {
    nombre: "Sheer Heart Attack",
    precio: 93000,
    img: "vinyl-sheerheartattack.jpg",
    artista: "Queen",
    descripcion:
      "Tercer álbum de Queen (1974), conocido por su energía glam y temas como 'Killer Queen' y 'Now I'm Here'. Mezcla rock teatral con hard rock.",
    generos: ["rock", "glam rock", "hard rock"],
    destacado: true,
  },
  {
    nombre: "Oktubre",
    precio: 97000,
    img: "vinyl-oktubre.webp",
    artista: "Patricio Rey y sus Redonditos de Ricota",
    descripcion:
      "Obra fundamental del rock argentino (1986). De tono político y oscuro, con clásicos como 'Ji Ji Ji' y 'Motor Psico'.",
    generos: ["rock argentino", "post-punk", "alternativo"]
  },
  {
  nombre: "Songs From The Big Chair",
  precio: 112000,
  img: "vinyl-songsbigchair.webp",
  artista: "Tears for Fears",
  descripcion:
    "Publicado en 1985, este clásico del synth-pop británico incluye himnos como 'Everybody Wants to Rule the World' y 'Shout'. Una obra maestra que combina emoción, producción impecable y crítica social.",
  generos: ["synth-pop", "new wave", "pop rock"]
},
{
  nombre: "Stand By Me",
  precio: 109000,
  img: "vinyl-standbyme.jpg",
  artista: "Ben E. King",
  descripcion:
    "Lanzado en 1961, este álbum es un ícono del soul y el R&B. Su tema homónimo, 'Stand By Me', es una de las canciones más emblemáticas del siglo XX, símbolo de amor, esperanza y unidad.",
  generos: ["soul", "R&B", "pop clásico"]
},
{
  nombre: "Creedence Clearwater Revival",
  precio: 118000,
  img: "vinyl-creedence.webp",
  artista: "Creedence Clearwater Revival",
  descripcion:
    "El debut homónimo de 1968 que presentó al mundo el sonido swamp rock de CCR. Incluye la legendaria 'Suzie Q' y anticipa el estilo sureño y crudo que los haría inmortales.",
  generos: ["rock clásico", "southern rock", "blues rock"]
},
{
  nombre: "Sticky Fingers",
  precio: 120000,
  img: "vinyl-stickyfingers.webp",
  artista: "The Rolling Stones",
  descripcion:
    "Publicado en 1971, es una de las cumbres de los Stones. Mezcla rock, blues y country con una energía sensual y rebelde. Contiene clásicos como 'Brown Sugar' y 'Wild Horses'.",
  generos: ["rock", "blues rock", "hard rock"]
},
{
  nombre: "Money for Nothing",
  precio: 114000,
  img: "vinyl-moneyfornothing.webp",
  artista: "Dire Straits",
  descripcion:
    "Compilado de 1988 que reúne los grandes éxitos de Dire Straits, incluyendo 'Sultans of Swing' y 'Money for Nothing'. Sonido limpio, guitarras brillantes y elegancia británica en su máxima expresión.",
  generos: ["rock", "soft rock", "pop rock"]
},
{
  nombre: "Dynasty",
  precio: 110000,
  img: "vinyl-dinasty.jpg",
  artista: "Kiss",
  descripcion:
    "Álbum de 1979 donde Kiss incorporó el disco rock a su estilo característico. Con himnos como 'I Was Made for Lovin’ You', marcó una nueva era para la banda entre el exceso y la melodía.",
  generos: ["hard rock", "glam rock", "disco rock"]
},
{
  nombre: "Live",
  precio: 115000,
  img: "vinyl-live.webp",
  artista: "AC/DC",
  descripcion:
    "Grabado en 1992, captura toda la potencia en vivo de AC/DC. Una descarga de energía pura con clásicos como 'Thunderstruck', 'Back in Black' y 'Highway to Hell'.",
  generos: ["hard rock", "rock and roll", "live"]
},
{
  nombre: "Reckless",
  precio: 108000,
  img: "vinyl-reckless.webp",
  artista: "Bryan Adams",
  descripcion:
    "Álbum de 1984 que consolidó a Bryan Adams como estrella global. Con temas como 'Summerof '69' y 'Heaven', mezcla rock melódico con baladas inolvidables.",
  generos: ["rock", "pop rock", "soft rock"]
},
{
  nombre: "Armageddon",
  precio: 108000,
  img: "vinyl-armageddon.webp",
  artista: "Aespa",
  descripcion: "El primer álbum de estudio del grupo femenino surcoreano Aespa, lanzado en mayo de 2024. Presenta diez temas, incluyendo los dos sencillos principales: 'Supernova' y 'Armageddon'. El álbum explora su concepto futurista con géneros como el K-pop, hyperpop y electropop.",
  generos: ["K-pop", "hyperpop", "electropop"]
}
]
