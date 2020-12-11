const question = document.getElementById('#form')
const responses = document.getElementById('#responses')
const form = document.getElementById('#form')


//this funciton will return the responses
function getAnswers(){
    // const randomNumber = 0
    const randomNumber = Math.floor(Math.random() * 20);

      switch (randomNumber){
        case 0: 
            return 'As I see it, yes.'
            break;
        case 1:
            return 'Ask again later.'
            break;
        case 2:
            return 'Better not tell you now.'
            break;
        case 3:
            return 'Cannot predict now.'
            break;
        case 4:
            return 'Concentrate and ask again.'
            break;
        case 5:
            return 'Don\'t count on it.'
            break;
        case 6:
            return 'It is certain.'
            break;
        case 7:
            return 'It is decidedly so.'
            break;
        case 8:
            return 'Most Likely.'
            break;
        case 9:
            return 'My reply is no.'
            break;
        case 10:
            return 'My sources say no.'
            break;
        case 11:
            return 'Outlook not so good.'
            break;
        case 12: 
            return 'Outlook good.'
            break;
        case 13:
            return 'Reply hazy, try again.'
            break;
        case 14:
            return 'Signs point to yes.'
            break;
        case 15:
            return 'Very doubtful.'
            break;
        case 16:
            return 'Without a doubt.'
            break;
        case 17:
            return 'Yes.'
            break;
        case 18:
            return 'Yes - definitely.'
            break;
        case 19:
            return 'You may rely on it.'
            break;
      }
}

// function formSubmit(){
//     document.getElementById('submit').submit()
//     document.write(getAnswers())
// }

