//hex background change code

//sets up hex color code numbers and letters
const hexNumbers =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

//set and target color picker button
const hexBtn = document.querySelector('.hexBtn');

//set and target body background for styling
const bodyBcg2 = document.querySelector('body');

//set and get hex color code text in hex class
const hex = document.querySelector('.hex');

//click event listener to call getHex function 
hexBtn.addEventListener('click', getHex);

//function to get hex color code
function getHex () {
    
	//set # part of hex code
    let hexCol = '#';
    
    //loop to get random numbers and letters from hexnumber list
    for( let i = 0; i<6;i++){
     
	//get 6 random hexnumbers from the list	
    let random = Math.floor(Math.random()*hexNumbers.length);
		
        //# is added to the 6 random hexnumbers list to make hex color code
     hexCol += hexNumbers[random];  
         
   
        
    }
    //style body backgroung with hex color code
    bodyBcg2.style.backgroundColor = hexCol; 
	
	//input hex code in html hex class
    hex.innerHTML = hexCol;
    
    
   
         
}




//quote display code
const quotes = [
    {
     name: 'Jesus Christ - Sermon on the mount (Matthew 7:7 - 12)', 
     quote:'Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.<br><br> For everyone who asks receives, and he who seeks finds, and to him who knocks it will be opened.<br><br> Or what man is there among you who, if his son asks for bread, will give him a stone? <br><br> Or if he asks for a fish, will he give him a serpent? <br><br>If you then, being evil, know how to give good gifts to your children, how much more will your Father who is in heaven give good things to those who ask Him! <br><br>Therefore, whatever you want men to do to you, do also to them, for this is the Law and the Prophets.'     
    },{
     name:'Jeff Bezos - Amazon', 
     quote:'Do something you are very passionate about and don’t try to chase what is kind of the hot passion of the day.'     
    },{
     name:'Steve Jobs – Apple', 
     quote:'You have to have a lot of passion for what you are doing because it is so hard that if you don’t, any rational person will give up.'     
    },{
     name: 'Pierre Omidyar – eBay', 
     quote:'Just go and do it, try, learn from the failing experience and don’t let people tell you it can’t be done just because they don’t have the courage to try.'     
    },{
     name:'Michael Dell – Dell', 
     quote:'People look for great idea to make money aren’t nearly as successful as those who say what do I really love to do, what am I really excited about, what is interesting and compelling?'     
    },{
     name: 'Sergey Brin – Google', 
     quote:'It’s very rewarding when you work on something that you think will make a big different. Yet it will be a bit harder but the passion come with it brings so much more energy and you are more likely to succeed.'     
    },{
     name: 'Biz Stone – Twitter', 
     quote:'You have to have an emotional investment in what you are doing. If you don’t love what you do, failure is pretty much guarantee.'     
    },{
     name: 'Gary Vaynerchuk – Wine Library', 
     quote:'If you know exactly what you want to be, you need to spend as much time with people who are actually that already.'     
    },{
     name: 'Daniel Ek – Spotify', 
     quote:'Ask yourself, giving everything you have today, is there a way we can make this better?'     
    },{
     name: 'Kevin Rose – Digg', 
     quote:'When we come up with ideas, we always ask ourselves what kind of new market is this creating, what problem is it solving, is there something here?'     
    },{
     name: 'James Altucher – Choose Yourself', 
     quote:'You have to come up with ideas everyday or the idea muscle will atrophy.'     
    },{
     name: 'Robert Greene – Mastery', 
     quote:'Understand that naturally nobody is interested in your idea and you have to persuade and show them that you are the one person out there that could do it.'     
    },{
     name: 'Guy Kawasaki – Apple', 
     quote:'If you believe enough then you will see it because other people will believe in it. You need to foster the believe in what you are dreaming so it will then become a reality.'     
    },{
     name: 'Steve Wozniak – Apple', 
     quote:'Fun is one of the key thing that drive you to think and think and make it better and better than you ever would if you were doing it for a company. Build things at first for yourself that you would want.'     
    },{
     name: 'Mark Cuban – Cyber Dust', 
     quote:'It is important to putting yourself in a ubiquitous business that doesn’t have limit. Otherwise if it is something you can’t be visualize every business or consumer using, it’s going to be tough to scale to be big enough or to have a perceived value.'     
    },{
     name: 'Sam Altman – Y Combinator', 
     quote:'You want an idea of what you going to say. You want to sound crazy, but you actually be right.'     
    },{
     name: 'Tony Fadell – Nest', 
     quote:'When you are trying to do something different, there is going to be that gut moment of is this right, is this not right? If you are not having doubt, you are not pushing the boundary far enough.'     
    },{
     name: 'Danae Ringelmann – Indiegogo', 
     quote:'Don’t think about what is the quickest way to success, think about what is the best way to building something important that the world really need.'     
    },{
     name: 'Simon Sinek – Start With Why', 
     quote:'Few people in an organization know why they do what they do. By why meaning what is your purpose, cause, or believe. Why is your organization exist?'     
    },{
     name: 'Seth Godin – Tribes', 
     quote:'The story around it is what people are paying for. Why should I pick you? Why would I care about what you are doing?'     
    },{
     name: 'Evan Williams – Medium', 
     quote:'You need to feel good about an idea and be passionate about.'     
    },{
     name: 'Reid Hoffman – LinkedIn', 
     quote:'When you have an entrepreneur idea, just hold and keep it to yourself is a mistake.'     
    },{
     name: 'Jack Dorsey – Twitter, Square', 
     quote:'Everyone has an idea, but it really about executing the idea and building it, attracting other people to help you work on the idea. That is the biggest challenge.'     
    },{
     name: 'Kevin Systrom – Instagram', 
     quote:'You have to learn just enough to be dangerous to build an idea, concept it and show it to the world and then it turn out that there are a lot of other people are much better at doing all that stuffs than I am.'     
    },{
     name: 'Drew Houston – DropBox', 
     quote:'Maximizing the probability that someone showing up at the front door of your store or website and end up with a solved problem.'     
    },{
     name: 'Brian Chesky – Airbnb', 
     quote:'Often time, the best methodology is to start with the perfect experience, just one person, get that right and then scale to something great.'     
    },{
     name: 'Peter Thiel – PayPal', 
     quote:'When you are starting a new business, you don’t want to go after the big market, you want to go after small businesses and you want to take over those markets quickly.'     
    },{
     name: 'Elon Musk – Tesla', 
     quote:'Constantly seek criticism. A well thought out critique of whatever you are doing is as valuable as gold. You should seek that from everyone you can but particularly your friends.'     
    },{
     name: 'Alan Schaaf – Imgur', 
     quote:'If you are not utilizing an online community then you are at a disadvantage. You can be asking online community of what they think about your idea. You will be hearing from people from all around the world each with their own experience and story that can help you.'     
    },{
     name: 'Chris Sacca – LOWERCASE Capital', 
     quote:'There are a lot of people from whom we can learn a lot. Don’t underestimate anyone you come across. The smartest leaders have to go around the room and ask for everybody opinion.'     
    },{
     name: 'Paul Graham – Y Combinator', 
     quote:'Most startups that fail do it because they did not make something that people wanted. They make something that they thought people would want and somebody else come along and make something that people want it even more.'     
    },{
     name: 'Dennis Crowley – Foursquare', 
     quote:'Not to let other people distract of what you are doing. There’re always haters that said your idea is stupid, this idea is never going to work, don’t even bother doing that because someone else is going to do it before you do. And if we are to listen to all those negative feedbacks, we would never build things, we would never prototype things.'     
    },{
     name: 'Eric Ries – The Lean Startup', 
     quote:'It’s really about integrating the concept of testing our idea rigorously throughout the development process, throughout the marketing process, even as we scale.'     
    },{
     name: 'Leah Busque – TaskRabbit', 
     quote:'What you really need to do is think about what is the smallest possible test that I can run for this idea, concept, or theory. Get it out there and get customer using it because your customer will be the one to will tell you if it really working or not.'     
    },{
     name: 'Anthony Casalena – Squarespace', 
     quote:'An expectation in mind to change the world ambition is actually ok early on to solve small problems in layers until you get to the point to have capacity to do that.'     
    },{
     name: 'Alexis Ohanian – Reddit', 
     quote:'What this coming down to is doing something exceptional for users whether in community, connection or design. This is our big advantage as a startup. We can make this the core part why we’re doing business.'     
    },{
     name: 'Jason Fried – Basecamp', 
     quote:'You should be spending your money on teaching and sharing and start building an audience.'     
    },{
     name: 'Palmer Luckey – Oculus Rift', 
     quote:'One thing that is important especially if you are a founder is to realize you can’t do everything and even if you can, you shouldn’t.'     
    },{
     name: 'Naval Ravikant – Angellist', 
     quote:'You should find a great partner and look for someone who is very high intelligence, high energy, high integrity.'     
    },{
     name: 'Ben Silbermann – Pinterest', 
     quote:'The most important thing when you working with people early on is to lined up on what your goals are.'     
    },{
     name: 'Tony Hsieh – Zappos', 
     quote:'We want to come up with committable core values. Meaning we are willing to hire or fire people based on those values completely independent of the actual job performance.'     
    },{
     name: 'Andrew Mason – Groupon', 
     quote:'The definition of values is the behavior and principle that you adhere to within your company meaning that no amount of data will sway you from those principles. The courage to maintain your conviction around the idea is the degree that you going to be successful over the long term.'     
    },{
     name: 'Richard Branson – Virgin', 
     quote:'As a leader of people, you have to be a great listener, motivator, good at praising and looking for the best in people.'   
    },{
     name: 'Alex Ljung – Soundcloud', 
     quote:'My job is basically like to be the assistant for the rest of the company. My job is to make sure that you have what you need.'     
    },{
     name: 'Justin Kan – Justin.tv', 
     quote:'There are a lot of things that are outside of your control. A lot of external circumstances will determine the success of your idea and you have to be ok with that.'     
    },{
     name: 'Jessica Livingston – Y Combinator', 
     quote:'An important quality is be flexible minded and be open to changes.'     
    },{
     name: 'Mark Zuckerberg – Facebook', 
     quote:'So many things go wrong when starting a company. Don’t even bother trying to avoid mistakes. The important thing is to learn quickly from whatever mistakes and not giving up.'     
    },{
     name: 'Marc Andreessen – Andreessen Horowitz', 
     quote:'Courage without genius might not get you to where you need go but genius without courage almost certainly won’t.'     
    },{
     name: 'Dustin Moskovitz – Facebook', 
     quote:'The reality of being an entrepreneur is a lot of hard work. It is really important that going with eyes wide open.'     
    },{
     name: 'Tim Ferriss – The 4 Hour Work Week', 
     quote:'You need to define all the worse case scenarios in terms of financial loss, time lost …etc. Look at what you will learn if that happen and accept and come to term with that before you ever start.'     
    },{
     name: 'Emmett Shear – Twitch', 
     quote:'If you don’t love it you won’t make it through the long period of pain that is inevitable.'     
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function  displayQuote () {
    
    
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
    
}
















