(() => {
    // Ale => [A,L,E] => string => string[]
    //[A,l,e] => Ale => string[] => string
    function parseStr(input: string | string[]): string | string[] {
        if (Array.isArray(input)) {
            return input.join('');
        } else {
            return input.split('');

        }
    }
    
    const rtaArray = parseStr('Ale');
    // rtaArray.push('a');
    if (Array.isArray(rtaArray)) {
        rtaArray.reverse();
        console.log(rtaArray);
    }
        
    const rtaString = parseStr(['A', 'l', 'e']);
    // rta.toUpperCase();
    if (typeof rtaString === 'string') {
        console.log(rtaString.toUpperCase());
    }

    
})()