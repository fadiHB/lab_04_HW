
function all() 
{

    var Sh = prompt( 'this is for lab04,05,06,07,08' )
    var x  = prompt("")

    var Nm = prompt(' what is your first neme please ? ');

    console.log(Nm)

    while (Nm !== "ahmad") {
        Nm = prompt("No,You are not my TA,go away man,jut my TA can enter!")
    }

    greeting1 = prompt("Welcome Mr. Mahasneh,gald you are here")

    var NameAgain;
    NameAgain = prompt(' tell me the true , whtat is your name ');
    console.log('user\'s name again', NameAgain);

    waring2 = prompt('you are welcome again');
    if (NameAgain !== Nm) {
        console.log(' stay here , How could you come here ! ');
    }

    var greeting2 = confirm('nice to meet you');
    var OrderUser = prompt("how many images of apple do you want to print")

    for (var count = 0; count < OrderUser; count++) {
        document.write("<img src='image/ultimate-small-business-resource-180x180.png' alt=''>");
    }

}

all();

