var names = ["Linda", "Mimi", "Efosa", "Vietrice", "Peace"];

function whoIsPaying(names) {

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is buying lunch today";



}