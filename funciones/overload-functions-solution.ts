(() => {
    // Ale => [A,L,E] => string => string[]
    //[A,l,e] => Ale => string[] => string

    function parseStr(input: string): string[];
    function parseStr(input: string[]): string;
    function parseStr(input: number): boolean;

    function parseStr(input: unknown): unknown {
        if (Array.isArray(input)) {
            return input.join('');
        } else if (typeof input === 'string') {
            return input.split('');
        } else if (typeof input === 'number') {
            return true;
        }
    }
    
    const rtaArray = parseStr('Ale');
    rtaArray.reverse();
        
    const rtaString = parseStr(['A', 'l', 'e']);
    rtaString.toUpperCase();

    const rtaBoolean = parseStr(1);
    rtaBoolean.valueOf();


})()