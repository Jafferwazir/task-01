

// ****************** Que 01 : Create a function called displayWelcomeMessage that prompts the user to enter 
// their name and then displays a personalized welcome message such as "Welcome, [name]!" in an alert.**********************

// var userName = prompt("What is Your Name ?");

// function displayWelcomeMessage(userName){

//     alert("Welcome Mr. " + userName);
// }


// displayWelcomeMessage(userName);


// 8888888888888888888 Que 2: Create a function called generateQuote that randomly selects and returns a quote from an array of predefined quotes. Call this function to display a random quote on the webpage.



randomHadees = 0;

function generateHadees (){

    let randomQuoteArray = ["Allah’s Apostle said, “When Ramadan begins, the gates of Paradise are opened.” Sahih Bukhari", "The Prophet said, “All drinks that produce intoxication are Haram (forbidden to drink). Sahih Bukhari","The Prophet (pbuh) said: Iman has over seventy branches, and modesty is a branch of Iman. Sahih Muslim", "The Messenger of Allah (saw) said: “Beautify the Quran with your voices.” Sunan Ibn Majah", "The Messenger of Allah (saw) forbade fasting on the Day of Fitr and the Day of Adha. Sunan Ibn Majah", 
    , "The Messenger of Allah (saw) said: “The best of you are those who are best to their womenfolk.” Sunan Ibn Majah" , "The Messenger of Allah (saw) said: “The most hated of permissible things to Allah is divorce.” Sunan Ibn Majah",
    "The Messenger of Allah (saw) said: “When you weigh, allow more.” Sunan Ibn Majah", "The Messenger of Allah (saw) said: ‘Do Wudu properly.’ Sunan An-Nasai", 
    "The Messenger of Allah (saw) said: Whoever forgets a prayer, let him pray it when he remembers it. Sunan An-Nasai"]

let randomHadees = Math.floor((Math.random() *11) +1);

// console.log(randomHadees);

for (let i = randomHadees; i<=11; i++){
    

alert(randomQuoteArray[i]);

}
}

generateHadees();






// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Que 3 : Write a function called generateRandomNumber that generates and returns a random number between 1 and 100. Call this function and display the generated random number on the webpage.


// function generateRandomNumber(){



// let randomNumber = Math.floor((Math.random() *100) +1);


// alert(randomNumber);

// }

// generateRandomNumber();