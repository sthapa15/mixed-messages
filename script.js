
//function to generate random number between 0 and input num
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

//object to place options
const futurePet = {
    petType: ['corgi', 'daschund', 'golden retriever', 'labrador retriever', 'english bulldog'],
    petName: ['momo', 'riley', 'aloo', 'zuko', 'penny', 'toobi'],
    petGender: ['good boy', 'good girl'],
    petToy: ['rubber ducky', 'mr. slothy', 'tennis ball', 'kong stick', 'socks']
}

//new array for the random selections to go into
let myFuturePet = [];

//looping through the object 
for (let item in futurePet) {
    //getting random number from the length of the array 
    let randIndex = generateRandomNumber(futurePet[item].length);

    //switch statement to get random element from each case and add it to myFuturePet array
    switch(item) {
        case 'petType':
            myFuturePet.push(`Your future pet will be a ${futurePet[item][randIndex]}`);
            break;
        case 'petName':
            myFuturePet.push( `Your pet's name will be ${futurePet[item][randIndex]}`);
            break;
        case 'petGender':
            myFuturePet.push(`Your pet's gender will be ${futurePet[item][randIndex]}`);
            break;
        case 'petToy':
            myFuturePet.push(`Your pet's favorite toy will be ${futurePet[item][randIndex]}`);
            break;
        default:
            myFuturePet.push(`There is not enough information.`);

    }
}

//helper function that takes array contents and converts to string, '\n' puts each item in a separate new line 
function formatPet(futurePet) {
   
  
  }
  
  formatPet(futurePet);
  

