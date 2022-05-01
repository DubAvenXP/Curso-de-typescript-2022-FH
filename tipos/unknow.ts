(() => {
    let anyVar: any;
    anyVar = true;
    anyVar = 1;
    anyVar = undefined;
    anyVar = null;
    anyVar = [];
    anyVar = {};

    let isNew: boolean = anyVar;

    let unknowVar: unknown;
    unknowVar = true;
    unknowVar = 1;
    unknowVar = undefined;
    unknowVar = null;
    unknowVar = [];
    unknowVar = {};

    if (typeof unknowVar === "string") {
        unknowVar.toUpperCase();
    }

    if (typeof unknowVar === "boolean") {
        let isNew: boolean = unknowVar;
    }

    const parse = (str: string): unknown => {
        return JSON.parse(str);
    };
})();
