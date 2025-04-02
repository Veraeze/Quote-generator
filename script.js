const quotes = [
    "Women are supposed to be very calm generally: but women feel just as men feel; they need exercise for their faculties, and a field for their efforts, as much as their brothers do; they suffer from too rigid a restraint, too absolute a stagnation, precisely as men would suffer; and it is narrow-minded in their more privileged fellow-creatures to say that they ought to confine themselves to making puddings and knitting stockings, to playing on the piano and embroidering bags. It is thoughtless to condemn them, or laugh at them, if they seek to do more or learn more than custom has pronounced necessary for their sex. —Charlotte Bronte, Jane Eyre",

    "It makes you wonder. All the brilliant things we might have done with our lives if only we suspected we knew how. —Ann Patchett, Bel Canto",

    "Give a girl an education and introduce her properly into the world, and ten to one she has the means of settling well, without further expense to anybody. —Jane Austen, Mansfield Park",

    "Next to trying and winning, the best thing is trying and failing. —L.M. Montgomery, Anne of Green Gables",

    "I believe great people do things before they are ready. —Amy Poehler, Yes Please",

    "Freedom (n.): To ask nothing. To expect nothing. To depend on nothing. ―Ayn Rand, The Fountainhead",

    "Have regular hours for work and play; make each day both useful and pleasant, and prove that you understand the worth of time by employing it well. Then youth will bring few regrets, and life will become a beautiful success. —Louisa May Alcott, Little Women",

    "Where does it all lead? What will become of us? These were our young questions, and young answers were revealed. It leads to each other. We become ourselves. —Patti Smith, Just Kids",

    "If there’s a book you really want to read, but it hasn’t been written yet, then you must write it. —Toni Morrison",

    "I have chosen to no longer be apologetic for my femaleness and my femininity. And I want to be respected in all of my femaleness because I deserve to be. —Chimamanda Ngozi Adichie, We Should All Be Feminists",

    "No need to hurry. No need to sparkle. No need to be anybody but oneself. —Virginia Woolf, A Room of One’s Own",

    "Sometimes you need to scorch everything to the ground, and start over. After the burning the soil is richer, and new things can grow. People are like that, too. They start over. They find a way. —Celeste Ng, Little Fires Everywhere",

    "Forever is composed of nows. —Emily Dickinson, poem",

    "There is a truth deep down inside of you that has been waiting for you to discover it, and that truth is this: you deserve all good things life has to offer. —Rhonda Byrne, The Secret",

    "I do not wish women to have power over men; but over themselves. —Mary Wollstonecraft",

    "Character—the willingness to accept responsibility for one’s own life—is the source from which self-respect springs. —Joan Didion, On Self-Respect",

    "When you can’t find someone to follow, you have to find a way to lead by example. —Roxane Gay, Bad Feminist",

    "I saw my life branching out before me like the green fig tree in the story. From the tip of every branch, like a fat purple fig, a wonderful future beckoned and winked. One fig was a husband and a happy home and children, and another fig was a famous poet and another fig was a brilliant professor, and another fig was Ee Gee, the amazing editor, and another fig was Europe and Africa and South America, and another fig was Constantin and Socrates and Attila and a pack of other lovers with queer names and offbeat professions, and another fig was an Olympic lady crew champion, and beyond and above these figs were many more figs I couldn't quite make out. I saw myself sitting in the crotch of this fig tree, starving to death, just because I couldn't make up my mind which of the figs I would choose. I wanted each and every one of them, but choosing one meant losing all the rest, and, as I sat there, unable to decide, the figs began to wrinkle and go black, and, one by one, they plopped to the ground at my feet. —Sylvia Plath, The Bell Jar",

    "Like and equal are not the same thing at all. —Madeleine L'Engle, A Wrinkle in Time",

    "When people are insulting you, there is nothing so good for them as not to say a word—just to look at them and think. When you will not fly into a passion people know you are stronger than they are, because you are strong enough to hold in your rage, and they are not, and they say stupid things they wished they hadn't said afterward. There's nothing so strong as rage, except what makes you hold it in—that's stronger. It's a good thing not to answer your enemies. —Frances Hodgson Burnett, A Little Princess",

    "How wonderful it is that nobody need wait a single moment before starting to improve the world. —Anne Frank, The Diary of a Young Girl",

    "The biggest problem that women have is being ambivalent about their own power…We should be comfortable with the idea of wielding power. We shouldn’t feel that it detracts from our femininity. —Elizabeth Wurtzel, Bitch: In Praise of Difficult Women",

    "Above all, be the heroine of your life, not the victim. —Nora Ephron",

    "The most successful people I know have figured out how to live with criticism, to lean on the people who believe in them, and to push onward with their goals. —Michelle Obama, Becoming",

    "Yet if a woman never lets herself go, how will she ever know how far she might have got? If she never takes off her high-heeled shoes, how will she ever know how far she could walk or how fast she could run? —Germaine Greer, The Change",

    "My only advice is to stay aware, listen carefully, and yell for help if you need it. —Judy Blume, Tales of a Mother/Confessor",

    "When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid. —Audre Lorde",

    "I was amazed that what I needed to survive could be carried on my back. And, most surprising of all, that I could carry it. —Cheryl Strayed, Wild: From Lost to Found on the Pacific Crest Trail",

    "After all those years as a woman hearing‘not thin enough, not pretty enough, not smart enough, not this enough, not that enough,’ almost overnight I woke up one morning and thought, I am enough. —Anna Quindlen, Lots of Candles, Plenty of Cake",

    "I am too intelligent, too demanding, and too resourceful for anyone to be able to take charge of me entirely. No one knows me or loves me completely. I have only myself. —Simone de Beauvoir, Tête-à-tête",

    "Life will break you. Nobody can protect you from that, and living alone won't either, for solitude will also break you with its yearning. You have to love. You have to feel. It is the reason you are here on earth. You are here to risk your heart. You are here to be swallowed up. And when it happens that you are broken, or betrayed, or left, or hurt, or death brushes near, let yourself sit by an apple tree and listen to the apples falling all around you in heaps, wasting their sweetness. Tell yourself you tasted as many as you could. —Louise Erdrich, The Painted Drum",

    "I respect myself and insist upon it from everybody. And because I do it, I then respect everybody, too. —Maya Angelou",

    "Anyone can hide. Facing up to things, working through them, that's what makes you strong. —Sarah Dessen, The Truth About Forever",

    "Life isn't perfect, any failures you have are actually learning moments. They teach us how to grow and evolve. —Phillipa Soo"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    const randomQuote = quotes[randomIndex];

    document.getElementById("quote").textContent = randomQuote;
    
}

document.getElementById("new-quote").addEventListener("click", generateQuote);

generateQuote();

function copyQuote() {
    const quoteText = document.getElementById("quote").textContent;

    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = quoteText;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    document.execCommand("copy");

    document.body.removeChild(tempTextArea);

    alert("copied to clipboard!");
}

document.getElementById("copy-quote").addEventListener("click", copyQuote);