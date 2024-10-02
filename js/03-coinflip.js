let randomNum = Math.round(Math.random() * 100);

let choice = window.prompt("Select Heads or Tails:");

if (randomNum < 50)
    toss = 'heads';
else 
    toss = 'tails'

let choicel = choice.toLowerCase();

if (choicel != 'heads' && choicel != 'tails')
    { document.write("Enter Heads or Tails."); }
else 
    {
    if (toss == 'heads')
        {
        if (choicel == 'heads')
            { window.alert('The flip was heads and you chose heads...you win!');}
        else 
            { window.alert('The flip was heads but you chose tails...you lose!');}
        }    
    else
        {
        if (choicel == 'heads')
            { window.alert('The flip was tails and you chose heads...you lose!');}
        else 
            { window.alert('The flip was tails but you chose tails...you win!');}
        }
    }  