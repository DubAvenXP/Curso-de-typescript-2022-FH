namespace validations {
    export const validateText = (text: string): boolean => {
        return (text.length > 3) ? true : false;
    }
    export const validateDate = (date: Date): boolean => {
        return (date instanceof Date) ? true : false;
    }
    export const validateNumber = (number: number): boolean => {
        return (number > 0) ? true : false;
    }
    export const validateEmail = (email: string): boolean => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    
}

console.log(validations.validateDate(new Date()));