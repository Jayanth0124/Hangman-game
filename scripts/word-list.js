const wordList = [

    // 🎸 Entertainment & Movies 🎬  
    { word: "hollywood", hint: "The American movie industry." },
    { word: "superhero", hint: "A fictional character with extraordinary powers." },
    { word: "comedy", hint: "A genre that aims to make people laugh." },
    { word: "cartoon", hint: "Animated characters shown on TV." },
    { word: "popcorn", hint: "A popular snack at movie theaters." },
    { word: "director", hint: "The person who controls the making of a movie." },
    { word: "camera", hint: "A device used to capture and record images or videos." },
    { word: "trailer", hint: "A short preview of an upcoming movie." },
    { word: "bollywood", hint: "The Indian film industry." },
    { word: "animation", hint: "A movie or video created using drawings or CGI." },

    // 🏏 Cricket & Sports ⚽  
    { word: "wicket", hint: "Three wooden stumps used in cricket." },
    { word: "boundary", hint: "A shot that reaches or crosses the field’s edge in cricket." },
    { word: "batting", hint: "The act of hitting the ball in cricket." },
    { word: "goalkeeper", hint: "A player who defends the goal in football." },
    { word: "umpire", hint: "An official who makes decisions in cricket." },
    { word: "stadium", hint: "A place where sports matches are played." },
    { word: "medal", hint: "A prize given to winners in sports." },
    { word: "champion", hint: "A person or team that wins a competition." },
    { word: "trophy", hint: "A cup-shaped award for winners." },
    { word: "fitness", hint: "The state of being physically healthy." },

    // 📱 Social Media & Internet 🌍  
    { word: "hashtag", hint: "A symbol used to categorize posts on social media." },
    { word: "trending", hint: "A topic that is currently popular online." },
    { word: "influencer", hint: "A person with a large social media following." },
    { word: "selfie", hint: "A photo you take of yourself." },
    { word: "viral", hint: "When something spreads rapidly on the internet." },
    { word: "emoji", hint: "A small digital icon used to express emotions." },
    { word: "subscribe", hint: "To follow a channel or creator online." },
    { word: "streaming", hint: "Watching videos online without downloading them." },
    { word: "meme", hint: "A humorous image or video shared online." },
    { word: "status", hint: "A short post or update on social media." },

    // 🌎 General & Easy Words 🎓  
    { word: "sun", hint: "The star at the center of our solar system." },
    { word: "moon", hint: "Earth’s natural satellite." },
    { word: "rain", hint: "Water droplets falling from clouds." },
    { word: "book", hint: "A set of written, printed, or blank pages." },
    { word: "phone", hint: "A device used for communication." },
    { word: "pencil", hint: "A tool used for writing and drawing." },
    { word: "school", hint: "A place where children learn." },
    { word: "friend", hint: "Someone you like and trust." },
    { word: "family", hint: "A group of people related by blood or marriage." },
    { word: "music", hint: "A form of sound that is pleasing to hear." },

    // 🍔 Food & Drinks 🍕  
    { word: "burger", hint: "A popular sandwich with a meat patty." },
    { word: "fries", hint: "Crispy potato sticks, usually eaten with ketchup." },
    { word: "tea", hint: "A popular hot beverage made from leaves." },
    { word: "juice", hint: "A drink made from fruit." },
    { word: "cheese", hint: "A dairy product used in pizza and burgers." },
    { word: "honey", hint: "A sweet substance made by bees." },
    { word: "cake", hint: "A dessert made from flour, sugar, and eggs." },
    { word: "egg", hint: "A food that comes from chickens." },
    { word: "spicy", hint: "A word to describe food with strong flavor." },
    { word: "salad", hint: "A mix of vegetables, often eaten raw." },
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        hint: "The study of past events and human civilization."
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height."
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        hint: "A device used to transmit sound over long distances."
    },
    {
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressive."
    },
];