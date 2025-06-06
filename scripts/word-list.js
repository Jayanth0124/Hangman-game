const wordList = {
    easy: [
        { word: "mirror", hint: "It reflects but never speaks." },
        { word: "shadow", hint: "Always follows you but disappears in the dark." },
        { word: "clock", hint: "Has hands but can’t clap." },
        { word: "candle", hint: "Gets smaller as it shines brighter." },
        { word: "echo", hint: "You can hear it, but you can't touch it." },
        { word: "key", hint: "Used to unlock doors, but not a password." },
        { word: "river", hint: "Has a bed but never sleeps." },
        { word: "star", hint: "Shines at night but is light-years away." },
        { word: "fire", hint: "It can warm you but also burn you." },
        { word: "cloud", hint: "White and fluffy but never stays the same." },
        { word: "bubble", hint: "You can make it, but it pops quickly." },
        { word: "whistle", hint: "Makes noise but has no mouth." },
        { word: "pencil", hint: "Becomes shorter with every use." },
        { word: "parrot", hint: "Can talk but doesn’t know what it says." },
        { word: "stairs", hint: "It goes up and down but never moves." },
        { word: "window", hint: "Lets you see outside but can't move." },
        { word: "ice", hint: "Hard as a rock but melts in heat." },
        { word: "glove", hint: "Has fingers but no hands." },
        { word: "tooth", hint: "You lose it once but it never grows back." },
        { word: "balloon", hint: "Floats in the air but can pop easily." },

    ],

    medium: [
        { word: "bicycle", hint: "A human-powered vehicle with two wheels." },
        { word: "stadium", hint: "A place where sports matches are played." },
        { word: "hashtag", hint: "A symbol used to categorize posts on social media." },
        { word: "guitar", hint: "A musical instrument with strings." },
        { word: "camera", hint: "A device used to capture and record images or videos." },
        { word: "trophy", hint: "A cup-shaped award for winners." },
        { word: "cartoon", hint: "Animated characters shown on TV." },
        { word: "superhero", hint: "A fictional character with extraordinary powers." },
        { word: "history", hint: "The study of past events and human civilization." },
        { word: "diamond", hint: "A precious gemstone known for its brilliance and hardness." },
        { word: "coffee", hint: "A popular caffeinated beverage made from roasted coffee beans." },
        { word: "football", hint: "A popular sport played with a spherical ball." },
        { word: "fitness", hint: "The state of being physically healthy." },
        { word: "rainforest", hint: "A dense forest characterized by high rainfall and biodiversity." },
        { word: "butterfly", hint: "An insect with colorful wings and a slender body." },
        { word: "oasis", hint: "A fertile spot in a desert where water is found." },
        { word: "novel", hint: "A long work of fiction, typically with a complex plot and characters." },
        { word: "dance", hint: "A rhythmic movement of the body often performed to music." }
    ],

    hard: [
        { word: "paradox", hint: "A statement that contradicts itself." },
        { word: "architecture", hint: "The art of designing buildings." },
        { word: "astronomy", hint: "The study of celestial objects." },
        { word: "unpredictable", hint: "Something that cannot be foreseen." },
        { word: "illusion", hint: "A deceptive appearance or perception." },
        { word: "sculpture", hint: "A three-dimensional art form created by shaping materials." },
        { word: "symphony", hint: "A long musical composition for an orchestra." },
        { word: "language", hint: "A system of communication using words, gestures, and syntax." },
        { word: "theater", hint: "A building or outdoor area for performances." },
        { word: "orchestra", hint: "A large group of musicians playing various instruments." },
        { word: "technology", hint: "The application of scientific knowledge for practical purposes." },
        { word: "adventure", hint: "An exciting or daring experience." },
        { word: "astronaut", hint: "A person trained to travel and work in space." },
        { word: "waterfall", hint: "A cascade of water falling from a height." },
        { word: "shadow", hint: "A dark area produced by an object blocking light." },
        { word: "nostalgia", hint: "A sentimental longing for the past." },
        { word: "brilliant", hint: "Exceptionally clever, talented, or impressive." },
        { word: "mysterious", hint: "Difficult or impossible to understand, explain, or identify." }
    ],

    sarcastic: [
        { word: "pillow", hint: "The only thing that listens to your problems without arguing." },
        { word: "alarm", hint: "The rudest invention of mankind." },
        { word: "blanket", hint: "A trusted bodyguard against monsters at night." },
        { word: "phone", hint: "A tiny device responsible for ruining your sleep schedule." },
        { word: "password", hint: "Something you forget right after setting it." },
        { word: "traffic", hint: "The universe’s way of testing your patience." },
        { word: "mirror", hint: "Exposes your reality every morning without mercy." },
        { word: "weekend", hint: "Shorter than a five-minute break at work." },
        { word: "socks", hint: "One always goes missing like it has a secret mission." },
        { word: "remote", hint: "Hides better than a fugitive when you need it." },
        { word: "diet", hint: "A temporary illusion before pizza arrives." },
        { word: "exercise", hint: "A brilliant way to realize how out of shape you are." },
        { word: "wallet", hint: "Holds more sadness than money." },
        { word: "brain", hint: "Supposedly runs the body, but often goes offline." },
        { word: "coffee", hint: "The reason you're even slightly functional." },
        { word: "meeting", hint: "An event where people talk about doing work instead of doing it." },
        { word: "Monday", hint: "Proof that weekends are a scam." },
        { word: "queue", hint: "The slowest-moving thing on Earth, right after your internet." },
        { word: "umbrella", hint: "Only useful when you forget it at home." },
        { word: "charging", hint: "The moment your phone battery drains even faster." },
        { word: "shopping", hint: "Where you buy things you don’t need with money you don’t have." },
        { word: "headphones", hint: "Your social escape tool that tangles itself for fun." },
        { word: "nap", hint: "A short sleep that turns into a full hibernation." },
        { word: "internet", hint: "Stops working exactly when you need it most." },
        { word: "printer", hint: "Never works when you’re in a hurry, but prints 100 copies when you press once." },
        { word: "toothpaste", hint: "Never runs out—until you really need it." },
        { word: "haircut", hint: "Looks great two weeks after you got it." },
        { word: "holiday", hint: "Blink once, and it's over." },
        { word: "loading", hint: "A dramatic pause the internet loves giving you." },
        { word: "deadline", hint: "A word that only exists to stress people out." },
        { word: "autocorrect", hint: "Changes your words into something embarrassing." },
        { word: "notification", hint: "Usually spam, except for the one you were actually waiting for." },
        { word: "battery", hint: "Dies at the most inconvenient time possible." },
        { word: "delivery", hint: "Takes forever unless it’s something you didn’t order." },
        { word: "gym", hint: "The place you pay for but rarely visit." },
        { word: "morning", hint: "The worst time of the day, every day." },
        { word: "shopping cart", hint: "Always has a broken wheel, guaranteed." },
        { word: "meeting", hint: "Where minutes are recorded but hours are wasted." },
        { word: "WiFi", hint: "Exists only to test your patience." },
    ]
};
