let score = parseInt(window.prompt('Enter a number between 1 and 100:'));

if (score < 1 || score > 100)
    { console.log('Only numbers between 1 and 100 are accepted.'); }
else
    {
        switch(true) {
            case (score >= 60 && score <= 69):
               console.log('You received a D');
              break;
            case (score >= 70 && score <= 79):
                console.log('You received a C');
              break;
            case (score >= 80 && score <= 89):
                console.log('You received a B');
              break;
            case (score >= 90 && score <= 100):
                console.log('You received an A');
              break;
            case (score < 60):
                console.log('You received an F');
              break;
          }
    }