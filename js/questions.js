/**
 * Created by kellycarmichael on 6/19/16.
 */
//List of questions and answers that will be pulled at random for each new quiz game.
var questions = [
    {
        musicQuestion: "Usher made two songs with two other rap artists. Who are they?",
        options: [
            "Ludacris/Nelly",
            "Lil Jon/Snoop Dogg",
            "Lil Jon/Ludacris",
            "Trick Daddy/Nelly"],
        answer: 2,
        hasAppeared: false,
    },
    {
        musicQuestion: "What is Fergie's real name?",
        options: [
            "Fergie is her real name",
            "Ann Stacy Fergie",
            "Stacie Ann Ferguson",
            "None of the above"],
        answer: 2,
        hasAppeared: false,
    },
    {
        musicQuestion: "Which of the following is a Jennifer Lopez song?",
        options: [
            "Get Back!!",
            "Step Up!!",
            "Get Right!!",
            "Get Right Up!!"],
        answer: 2,
       hasAppeared: false,
    },
    {
        musicQuestion: "What male vocalist sings 'Drop It Like It's Hot'?",
        options: [
            "Snoop Dogg/Pharell Williams",
            "Ice Cube/X-Zibit",
            "Snoop Dogg/Emimen",
            "Ja Rule?Nelly"],
        answer: 0,
        hasAppeared: false,
    },
    {
        musicQuestion: "What male group sings the song 'This Love'?",
        options: [
            "Cross Fade",
            "Limp Biskit",
            "Green Day",
            "Maroon 5"],
        answer: 3,
        hasAppeared: false,
    },
    {
        musicQuestion: "Who won American Idol season one?",
        options: [
            "Taylor Hicks",
            "Fantasia",
            "Ruben Studdard",
            "Kelly Clarkson"],
        answer: 3,
        hasAppeared: false,
    },
    {
        musicQuestion: "Finish this line, 'Let me see...'",
        options: [
            "...that thong,thong, thong,thong,thong.",
            "...your booty shake.",
            "...you smile.",
            "...the love in your eyes."],
        answer: 0,
        hasAppeared: false,
    },
    {
        musicQuestion: "Syncopation means...?",
        options: [
            "That the rhythms are off-beat.",
            "That the notes are diatonic.",
            "That the melody instrument plays in harmony with the accompaniment.",
            "That a piano is out of tune."],
        answer: 0,
        hasAppeared: false,
    },
    {
        musicQuestion: "Who sang, 'The Battle of Evermore'?",
        options: [
            "Queen",
            "The Beatles",
            "Led Zeppelin",
            "Rush"],
        answer: 2,
        hasAppeared: false,
    },
    {
        musicQuestion: "'Walk This Way' was sung by_____?",
        options: [
            "Adam Ant",
            "Cream",
            "Boston",
            "Aerosmith"],
        answer: 3,
        hasAppeared: false,
    },
    {
        musicQuestion: "'Runnin' With The Devil' was a hit for_____?",
        options: [
            "Van Halen",
            "Ritchie Valens",
            "Rush",
            "Styx"],
        answer: 0,
        hasAppeared: false,
    },
    {
        musicQuestion: "A remarkably talented drummer belted out the beat for 'The Muppets' house band. Most people would                        recognise him as Animal, but do you know the name of the band?",
        options: [
            "Dr. Teeth and The Electric Mayhem",
            "Rick Dees and His Cast of Idiots",
            "The Captain Matchbox Whoopee Band",
            "Strawberry Alarm Clock"],
        answer: 0,
        hasAppeared: false,
    },
    {
        musicQuestion: "Who sings 'My Humps'?",
        options: [
            "Gwen Stefani",
            "Lindsey Lohan",
            "Black Eyed Peas",
            "Jessica Simpson"],
        answer: 2,
        hasAppeared: false,
    },
    {
        musicQuestion: "This instrument looks and is played like a violin, but it is a bit larger.",
        options: [
            "Cello",
            "Flute",
            "Bass",
            "Viola"],
        answer: 0,
        hasAppeared: false,
    },
    {
        musicQuestion: "A piano makes its sound when hammers strike strings within the body of the instrument. So which is                       it, a percussion instrument or a string instrument?",
        options: [
            "Percussion",
            "Neither",
            "String",
            "Both"],
        answer: 0,
        hasAppeared: false,
    },
    {
        musicQuestion: "On what date did MTV make it's debut?",
        options: [
            "July 4, 1981",
            "January 1, 1981",
            "August 1, 1981",
            "October 31, 1981"],
        answer: 2,
        hasAppeared: false,
    },
    {
        musicQuestion: "What artist below went to school with Biggie Smalls?",
        options: [
            "Tupac",
            "Ja Rule",
            "Jay Z",
            "Damon Dash"],
        answer: 2,
        hasAppeared: false,
    },
    {
        musicQuestion: "What was 2 Pac's 1st album called?",
        options: [
            "Loyal To The Game",
            "Until The End Of Time",
            "The Lost Tapes",
            "2Pacalypse Now"],
        answer: 3,
        hasAppeared: false,
    },
    {
        musicQuestion: "Which of these female rockers recorded the hit song, 'I Love Rock & Roll'?",
        options: [
            "Lita Ford",
            "Joan Jett",
            "Pat Benatar",
            "Debbie Harry"],
        answer: 1,
        hasAppeared: false,
    },
    {
        musicQuestion: "Clarence 'Leo' Fender designed the first commercially successful solid body guitar. What was it's                         name?",
        options: [
            "Squire",
            "Broadcaster",
            "Esquire",
            "Telecaster"],
        answer: 1,
        hasAppeared: false,
    },
    {
        musicQuestion: "R&B superstar Marvin Gaye was shot to death by which family member?",
        options: [
            "His Father",
            "His Brother",
            "His Mother",
            "His Uncle"],
        answer: 0,
        hasAppeared: false,
    },
    {
        musicQuestion: "Which of these R&B artists did the title track for the movie 'Ghostbusters'?",
        options: [
            "Lionel Ritchie",
            "Billy Ocean",
            "Ray Parker Jr.",
            "Smokey Robinson"],
        answer: 2,
        hasAppeared: false,
    },
    {
        musicQuestion: "Who replaced David Lee Roth as lead singer of the group Van Halen?",
        options: [
            "Ronnie James Dio",
            "Sammy Hagar",
            "David Coverdale",
            "Ritchie Blackmore"],
        answer: 1,
        hasAppeared: false,
    },
    {
        musicQuestion: "What is Eminem's real name?",
        options: [
            "Matt Morgan",
            "Marshall Mathers",
            "Marshal Masterson",
            "Micheal Matters"],
        answer: 1,
        hasAppeared: false,
    },
    {
        musicQuestion: "Who sings 'Ticks'?",
        options: [
            "Tracy Lawrence",
            "Tracy Byrd",
            "Brad Paisley",
            "Billy Currington"],
        answer: 2,
        hasAppeared: false,
    },
    {
        musicQuestion: "Who sings 'Gold Digger'?",
        options: [
            "Ludicrous feat. Natalie",
            "Usher feat. Alicia",
            "Kanye West feat. Jamie Fox",
            "Kanye West feat. Missy Elliot"],
        answer: 2,
        hasAppeared: false,
    },
    {
        musicQuestion: "Who sings 'Good Directions'?",
        options: [
            "Sugarland",
            "Terri Clark",
            "Tracy Lawrence",
            "Billy Currington"],
        answer: 3,
        hasAppeared: false,
    },
    {
        musicQuestion: "Who sang 'Waterfalls'?",
        options: [
            "Mariah Carey",
            "Sugarland",
            "TLC",
            "none of these"],
        answer: 2,
        hasAppeared: false,
    }
];