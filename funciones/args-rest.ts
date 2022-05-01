(() => {
    //Utilizar en middleware para valir roles (clase 9)
    const fullName = (
        firstName: string,
        ...restArgs: string[]
    ): string => {
        return `${firstName} ${restArgs.join(' ')}`;
    }

    const superman = fullName('Clark', 'Joseph', 'Kent');

    console.log({ superman });
})();
