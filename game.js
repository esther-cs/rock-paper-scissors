const getUserChoice=userInput=>{userInput=userInput.toLowerCase()
if (userInput==='rock' || userInput==='paper' || userInput==='scissors'){
  return userInput
}else{
  console.log("Error")
}
}
function getComputerChoice(){
  randomNumber=Math.floor(Math.random()*3)
  switch(randomNumber){
    case 0:
     return 'rock'
    case 1:
     return 'paper'
    case 2: 
     return 'scissors'
  }
}
function determineWinner(userChoice,computerChoice){
  if(userChoice===computerChoice){
    return 'tie'
  }else if(userChoice==='rock'){
    if (computerChoice==='scissors'){
      return 'You won!'
    }else{
      return 'The computer won!'
    }
  }else if(userChoice==='scissors'){
    if (computerChoice==='paper'){
      return 'You won!'
    }else{
      return 'The computer won!'
    }
  }else if(userChoice==='paper'){
    if (computerChoice==='rock'){
      return 'You won!'
    }else{
      return 'The computer won!'
    }
  }else if(userChoice==='bomb'){
    return 'You won!'
  }
}
function playGame(userChoice){
  const computerChoice=getComputerChoice()
  console.log('You:'+userChoice)
  console.log('Computer:'+computerChoice)
  console.log(determineWinner(userChoice,computerChoice))
}
playGame('bomb')
