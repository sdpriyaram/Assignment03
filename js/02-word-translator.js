let lang = window.prompt('Enter a language code("es","de","en","fr"):');

if (lang == 'es')
    console.log('Hello World translated in Spanish is: Hola Mundo');
else if (lang == 'de')
    console.log('Hello World translated in German is: Hallo Welt');
else if (lang == 'fr')
    console.log('Hello World translated in French is: Bonjour le monde');
else
    console.log('Hello World translated in English is: Hello World');