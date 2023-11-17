class Chapters {
  constructor({ chapterId, chapterName, chapterUrl }) {
    this.chapterId = chapterId;
    this.chapterName = chapterName;
    this.chapterUrl = chapterUrl;
  }
}

class Book {
  constructor({
    poster,
    bookCover,
    title,
    author,
    rate,
    tags,
    summary,
    audioUrl,
    isRecommended,
    chapters,
  }) {
    this.poster = poster;
    this.bookCover = bookCover;
    this.title = title;
    this.author = author;
    this.rate = rate;
    this.tags = tags;
    this.summary = summary;
    this.audioUrl = audioUrl;
    this.isRecommended = isRecommended;
    this.chapters = chapters || []; // Initialize chapters as an empty array if not provided
  }
}

class BookDirectory {
  constructor() {
    this.listOfBooks = [
      // Existing book
      new Book({
        poster: "/assets/image/SwordOfDestiny.jpg",
        bookCover: "/assets/image/SwordOfDestinyBookCover.jpg",
        title: "Sword of Destiny",
        author: "Andrzej Sapkowski",
        rate: 4,
        tags: ["Fantasy"],
        summary:

          "Geralt is a witcher, a man whose magic powers, enhanced by long training and a mysterious elixir, have made him a brilliant fighter and a merciless assassin. Yet he is no ordinary murderer: his targets",
        audioUrl: "https://files.audiobookss.com/audio/free-full-audiobook-the-time-of-contempt-the-witcher-book-2-by-andrzej-sapkowski/1072566310/Time%20of%20Contempt%20The%20Witcher,%20Book%202%20(Unabridged)%20-%20001-840874795.mp3",
        isRecommended: true,
        chapters: [
          new Chapters({
            chapterId: 1,
            chapterName: "Chapter 1",
            chapterUrl: "https://ipaudio.club/wp-content/uploads/HQ/TRECIA/Sword%20of%20Destiny/01.mp3?_=1"
          }),
          new Chapters({
            chapterId: 2,
            chapterName: "Chapter 2",
            chapterUrl: "https://ipaudio.club/wp-content/uploads/HQ/TRECIA/Sword%20of%20Destiny/02.mp3"
          }),
        ]
      }),
      // New book
      new Book({
        poster: "/assets/image/theLastWhish.jpg",
        bookCover: "/assets/image/theLastWhishBookCover.jpg",
        title: "The Last Wish",
        author: "Andrzej Sapkowski",
        rate: 3,
        tags: ["Fantasy",  ],
        summary:
          "Geralt the Witcher—revered and hated—is a man whose magic powers, enhanced by long training and a mysterious elixir, have made him a brilliant fighter and a merciless assassin. Yet he is no ordinary murderer: his targets",
        audioUrl: "https://free.audiobookslab.com/audio/the-last-wish-complete.mp3?_=1",
        isRecommended: true,
        chapters: [
          new Chapters({
            chapterId: 1,
            chapterName: "Complete",
            chapterUrl: "https://free.audiobookslab.com/audio/the-last-wish-complete.mp3?_=1"
          }),
        ]
      }),

     // ... (existing code)



  // New book: Blood of Elves
  new Book({
    poster: "assets/image/bloodOfElves.jpg",
    bookCover: "assets/image/bloodOfElvesBookCover.jpg",
    title: "Blood of Elves",
    author: "Andrzej Sapkowski",
    rate: 5,
    tags: [ "Fiction"],
    summary:
      "For over a century, humans, dwarves, gnomes, and elves have lived together in relative peace. But times have changed, the uneasy peace is over, and now the races are fighting once again. The only good elf, it seems, is a dead elf.",
    audioUrl:
      "https://ipaudio6.com/wp-content/uploads/BOOKAUDIO/Blood%20of%20Elves/1.mp3?_=1",
    isRecommended: true,
    chapters: [
      new Chapters({
        chapterId: 1,
        chapterName: "Part 1",
        chapterUrl:
          "https://ipaudio6.com/wp-content/uploads/BOOKAUDIO/Blood%20of%20Elves/1.mp3?_=1",
      }),
      // ... (other chapters)
    ],
  }),

  // New book: The Time of Contempt
  new Book({
    poster: "assets/image/timeOfContempt.jpg",
    bookCover: "assets/image/timeOfContemptBookCover.jpg",
    title: "The Time of Contempt",
    author: "Andrzej Sapkowski",
    rate: 4,
    tags: [ "Drama"],
    summary:
      "Geralt is a witcher: guardian of the innocent; protector of those in need; a defender, in dark times, against some of the most frightening creatures of myth and legend. His task, now, is to protect Ciri. A child of prophecy, she will have the power to change the world for good or for ill -- but only if she lives to use it.",
    audioUrl:
      "https://files.audiobookss.com/audio/free-full-audiobook-the-time-of-contempt-the-witcher-book-2-by-andrzej-sapkowski/1072566310/Time%20of%20Contempt%20The%20Witcher,%20Book%202%20(Unabridged)%20-%20001-840874795.mp3",
    isRecommended: true,
    chapters: [
      new Chapters({
        chapterId: 0,
        chapterName: "Part 0",
        chapterUrl:
          "https://files.audiobookss.com/audio/free-full-audiobook-the-time-of-contempt-the-witcher-book-2-by-andrzej-sapkowski/1072566310/Time%20of%20Contempt%20The%20Witcher,%20Book%202%20(Unabridged)%20-%20001-840874795.mp3",
      }),
      // ... (other chapters)
    ],
  }),

  // New book: The Tower of Swallows
  new Book({
    poster: "assets/image/towerOfSwallows.jpg",
    bookCover: "assets/image/towerOfSwallowsBookCover.jpg",
    title: "The Tower of Swallows",
    author: "Andrzej Sapkowski",
    rate: 5,
    tags: ["Fiction"],
    summary:
      "The world has fallen into war. Ciri, the child of prophecy, has vanished. Hunted by friends and foes alike, she has taken on the guise of a petty bandit and lives free for the first time in her life. But the net around her is closing. Geralt, the Witcher, has assembled a group of allies determined to rescue her. Both sides of the war have sent brutal mercenaries to hunt her down. Her crimes have made her famous.",
    audioUrl:
      "https://files.audiobookss.com/audio/free-full-audiobook-the-time-of-contempt-the-witcher-book-2-by-andrzej-sapkowski/1072566310/Time%20of%20Contempt%20The%20Witcher,%20Book%202%20(Unabridged)%20-%20001-840874795.mp3",
    isRecommended: true,
    chapters: [
      new Chapters({
        chapterId: 1,
        chapterName: "Part 1",
        chapterUrl:
          "https://ipaudio.club/wp-content/uploads/APP/Tower%20of%20Swallows/01.mp3",
      }),
      // ... (other chapters)
    ],
  }),

  // New book: The Lady of the Lake
  new Book({
    poster: "assets/image/ladyOfTheLake.jpg",
    bookCover: "assets/image/ladyOfTheLakeBookCover.jpg",
    title: "The Lady of the Lake",
    author: "Andrzej Sapkowski",
    rate: 4,
    tags: [  "Fiction"],
    summary:
      "After walking through the portal in the Tower of Swallows while narrowly escaping death, Ciri finds herself in a completely different world... an Elven world. She is trapped with no way out. Time does not seem to exist and there are no obvious borders or portals to cross back into her home world.",
    audioUrl:
      "https://ipaudio.club/wp-content/uploads/HQ/TRECIA/Lady%20of%20the%20Lake/01.mp3",
    isRecommended: true,
    chapters: [
      new Chapters({
        chapterId: 1,
        chapterName: "First Chapter",
        chapterUrl:
          "https://free.audiobookslab.com/audio/the-last-wish-complete.mp3?_=1",
      }),
      new Chapters({
        chapterId: 2,
        chapterName: "Second Chapter",
        chapterUrl:
          "https://free.audiobookslab.com/audio/the-last-wish-complete.mp3?_=2",
      }),
      // ... (other chapters)
    ],
  }),

  // New book: Harry Potter and the Philosopher’s Stone
  new Book({
    poster: "assets/image/hp1_500x500._CB1198675309_.jpg",
    bookCover: "assets/image/hp1_500x500._CB1198675309_.jpg",
    title: "Harry Potter and the Philosopher’s Stone",
    author: "J.K. Rowling",
    rate: 4,
    tags: [  "Fiction"],
    summary:
      "Harry Potter thinks he is an ordinary boy - until he is rescued by an owl, taken to Hogwarts School of Witchcraft and Wizardry, learns to play Quidditch and does battle in a deadly duel. The Reason ... HARRY POTTER IS A WIZARD!",
    audioUrl: "https://free2.audiobookslab.com/audio/HP-1-By-Stephen-Fry/HP-and-the-philosopher-stone-audiobook-ch-1.mp3",
    isRecommended: false,
    chapters: [
      new Chapters({
        chapterId: 1,
        chapterName: "Chapter 1: The Boy Who Lived",
        chapterUrl:
          "https://free2.audiobookslab.com/audio/HP-1-By-Stephen-Fry/HP-and-the-philosopher-stone-audiobook-ch-1.mp3",
      }),
      new Chapters({
        chapterId: 2,
        chapterName: "Chapter 2: The Vanishing Glass.",
        chapterUrl:
          "https://free2.audiobookslab.com/audio/HP-1-By-Stephen-Fry/HP-and-the-philosopher-stone-audiobook-ch-2.mp3",
      }),
      // ... (other chapters)
    ],
  }),

  // New book: Harry Potter and the Chamber of Secrets
  new Book({
    poster: "assets/image/hp2_500x500._CB1198675309_.jpg",
    bookCover: "assets/image/hp2_500x500._CB1198675309_.jpg",
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    rate: 3,
    tags: ["Fantasy", "Drama"],
    summary:
      "Ever since Harry Potter had come home for the summer, the Dursleys had been so mean and hideous that all Harry wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he’s packing his bags, Harry receives a warning from a strange impish creature who says that if Harry returns to Hogwarts, disaster will strike.",
    audioUrl: "https://free2.audiobookslab.com/audio/HP-1-By-Stephen-Fry/HP-and-the-philosopher-stone-audiobook-ch-7.mp3",
    isRecommended: false,
    chapters: [
      new Chapters({
        chapterId: 1,
        chapterName: "Chapter One: The Worst Birthday",
        chapterUrl:
          "https://ipaudio5.com/wp-content/uploads/STARR/harr/Fry/2%20CHAMBER%20OF%20SECRETS/CH01%20THE%20WORST%20BIRTHDAY.mp3?_=1",
      }),
      new Chapters({
        chapterId: 2,
        chapterName: "Chapter Two: Dobby's Warning",
        chapterUrl:
          "https://ipaudio5.com/wp-content/uploads/STARR/harr/Fry/2%20CHAMBER%20OF%20SECRETS/CH02%20DOBBY'S%20WARNING.mp3?_=2",
      }),
      // ... (other chapters)
    ],
  }),

  
  new Book({
    poster: "assets/image/Image Placeholder 4.png",
    bookCover: "assets/image/Image Placeholder 4.png",
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    rate: 5,
    tags: [ "Drama", ],
    summary:"Harry Potter, along with his best friends, Ron and Hermione, is about to start his third year at Hogwarts School of Witchcraft and Wizardry. Harry can't wait to get back to school after the summer holidays. (Who wouldn't if they lived with the horrible Dursleys?) But when Harry gets to Hogwarts, the atmosphere is tense. There's an escaped mass murderer on the loose, and the sinister prison guards of Azkaban have been called in to guard the school...",
    audioUrl: "https://free.audiobookslab.com/audio/the-last-wish-complete.mp3?_=1",
    isRecommended: false,
    chapters: [
      new Chapters({
        chapterId: 1,
        chapterName: "Chapter One: The Worst Birthday",
        chapterUrl:
          "https://ipaudio5.com/wp-content/uploads/STARR/harr/Fry/2%20CHAMBER%20OF%20SECRETS/CH01%20THE%20WORST%20BIRTHDAY.mp3?_=1",
      }),
      new Chapters({
        chapterId: 2,
        chapterName: "Chapter Two: Dobby's Warning",
        chapterUrl:
          "https://ipaudio5.com/wp-content/uploads/STARR/harr/Fry/2%20CHAMBER%20OF%20SECRETS/CH02%20DOBBY'S%20WARNING.mp3?_=2",
      }),
      // ... (other chapters)
    ],
  
  }),
  new Book({
    poster: "assets/image/hp6_500x500._CB1198675309_.jpg",
    bookCover: "assets/image/hp6_500x500._CB1198675309_.jpg",
    title: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    rate: 3,
    tags: ["Fantasy", "Drama", "Fiction"],
    summary:
      "It is the middle of the summer, but there is an unseasonal mist pressing against the windowpanes. Harry Potter is waiting nervously in his bedroom at the Dursleys' house in Privet Drive for a visit from Professor Dumbledore himself. One of the last times he saw the Headmaster was in a fierce one-to-one duel with Lord Voldemort, and Harry can't quite believe that Professor Dumbledore will actually appear at the Dursleys' of all places. Why is the Professor coming to visit him now? What is it that cannot wait until Harry returns to Hogwarts in a few weeks' time? Harry's sixth year at Hogwarts has already got off to an unusual start, as the worlds of Muggle and magic start to intertwine",
    audioUrl: "https://free.audiobookslab.com/audio/the-last-wish-complete.mp3?_=1",
    isRecommended: false,
    chapters: [
      {
        chapterId: 1,
        chapterName: "First Chapter",
        chapterUrl:
          "https://free.audiobookslab.com/audio/the-last-wish-complete.mp3?_=1",
      },
      {
        chapterId: 2,
        chapterName: "Second Chapter",
        chapterUrl:
          "https://free.audiobookslab.com/audio/the-last-wish-complete.mp3?_=2",
      },
    ],
  }),


  new Book({
    poster: "assets/image/e5f82111504d28779262bf2dca0fad56.png",
    bookCover: "assets/image/9786257270472.jpeg",
    title: "1984",
    author: "George Orwell",
    rate: 3,
    tags: ["Fantasy", "Drama", "Fiction"],
    summary:
      "The new novel by George Orwell is the major work towards which all his previous writing has pointed. Critics have hailed it as his most solid, most brilliant work. Though the story of Nineteen Eighty-Four takes place thirty-five years hence, it is in every sense timely. The scene is London, where there has been no new housing since 1950 and where the city-wide slums are called Victory Mansions. Science has abandoned Man for the State. As every citizen knows only too well, war is peace.To Winston Smith, a young man who works in the Ministry of Truth (Minitru for short), come two people who transform this life completely. One is Julia, whom he meets after she hands him a slip reading, I love you. The other is O'Brien, who tells him, We shall meet in the place where there is no darkness. The way in which Winston is betrayed by the one and, against his own desires and instincts, ultimately betrays the other, makes a story of mounting drama and suspense.",
    audioUrl: "https://free.audiobookslab.com/audio/the-last-wish-complete.mp3?_=2",
    isRecommended: true,
    chapters: [
      new Chapters({
        chapterId: 1,
        chapterName: "First Chapter",
        chapterUrl:
          "https://free.audiobookslab.com/audio/the-last-wish-complete.mp3?_=1",
      }),
      new Chapters({
        chapterId: 2,
        chapterName: "Second Chapter",
        chapterUrl:
          "https://free.audiobookslab.com/audio/the-last-wish-complete.mp3?_=2",
      }),
    ],
  }),

  new Book({
    poster: "assets/image/hp7_500x500._CB1198675309_.jpg",
    bookCover: "assets/image/hp7_500x500._CB1198675309_.jpg",
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K. Rowling",
    rate: 3,
    tags: ["Fantasy", "Drama", "Fiction"],
    summary:
      "Harry has been burdened with a dark, dangerous and seemingly impossible task: that of locating and destroying Voldemort's remaining Horcruxes. Never has Harry felt so alone, or faced a future so full of shadows. But Harry must somehow find within himself the strength to complete the task he has been given. He must leave the warmth, safety and companionship of The Burrow and follow without fear or hesitation the inexorable path laid out for him...",
    audioUrl: "https://free.audiobookslab.com/audio/the-last-wish-complete.mp3?_=1",
    isRecommended: false,
    chapters: [
      new Chapters({
        chapterId: 1,
        chapterName: "First Chapter",
        chapterUrl:
          "https://free.audiobookslab.com/audio/the-last-wish-complete.mp3?_=1",
      }),
      new Chapters({
        chapterId: 2,
        chapterName: "Second Chapter",
        chapterUrl:
          "https://free.audiobookslab.com/audio/the-last-wish-complete.mp3?_=2",
      }),
    ],
  }),


  new Book({
    poster: "assets/image/Image Placeholder 4.png",
    bookCover: "assets/image/Image Placeholder 4.png",
    title: "Harry Potter and the Prisoner of Azkaban",
    authoer: "J.K. Rowling",
    rate: 5,
    tags: ["Fantasy", "Drama", "Fiction"],
    summary:
        "Harry Potter, along with his best friends, Ron and Hermione, is about to start his third year at Hogwarts School of Witchcraft and Wizardry. Harry can't wait to get back to school after the summer holidays. (Who wouldn't if they lived with the horrible Dursleys?) But when Harry gets to Hogwarts, the atmosphere is tense. There's an escaped mass murderer on the loose, and the sinister prison guards of Azkaban have been called in to guard the school...",
    audioUrl: "https://free.audiobookslab.com/audio/the-last-wish-complete.mp3?_=2",
    isRecommended: false
    }),


    new Book({
      poster: "assets/image/hp2_500x500._CB1198675309_.jpg",
      bookCover: "assets/image/hp2_500x500._CB1198675309_.jpg",
      title: "Harry Potter and the Chamber of Secrets",
      authoer: "J.K. Rowling",
      rate: 3,
      tags: ["Fantasy", "Drama", "Fiction"],
      summary:
          "Ever since Harry Potter had come home for the summer, the Dursleys had been so mean and hideous that all Harry wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he’s packing his bags, Harry receives a warning from a strange impish creature who says that if Harry returns to Hogwarts, disaster will strike.",
      audioUrl: "https://free.audiobookslab.com/audio/the-last-wish-complete.mp3?_=2",
      isRecommended: false
    
    })




];



 
      
    
  }
}

export { Book, BookDirectory };