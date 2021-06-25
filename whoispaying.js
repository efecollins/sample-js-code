var names = ["Efosa", "Vietrice", "Peace", "Mimi"];
var times = ["7", "8", "9", "10", "11", "12"];

function whoIsBuying(names) {

    var numberOfPeople = names.length;
    var personPosition = Math.floor(Math.random() * numberOfPeople);
    var person = names[personPosition];

    var timesCount = times.length;
    var timesChoose = Math.floor(Math.random() * timesCount);
    var time = times[timesChoose];
    time + 1;

    if (time > 1) {
        return person + " is buying something.";
    } else {
        return "Oops, we buy for ourselves today.";
    }
}
