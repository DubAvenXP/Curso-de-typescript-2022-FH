(() => {
    const fullName = (firstName: string, lastName?: string): string => {
        return `${firstName} ${lastName || '------'}`;
    }

    const heroName = fullName('Dr', 'Strange');

    console.log({heroName});

})()