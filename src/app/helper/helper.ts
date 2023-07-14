



export class Helper {


    constructor(){
    }

    getValueFromSessionAndLocal(isSession: boolean = true, key: string): any {
        let value: any;
        if (sessionStorage && isSession) {
            value = sessionStorage.getItem(key)
            
                return JSON.parse(value);
            
           
        }
        else if (localStorage && !isSession) {
            value = localStorage.getItem(key)
            
                return JSON.parse(value);
            
           
        }
        //  return JSON.parse(sessionStorage.getItem(key.favoritSpecialitylis));
    }

    setValueToSessionstorage(isSession: boolean = true, key: string, val: any): any {
        let value=val;
        
        if (sessionStorage && isSession)
            sessionStorage.setItem(key, JSON.stringify(value));
        else if (localStorage && !isSession)
            localStorage.setItem(key, JSON.stringify(value));
    }
   
}