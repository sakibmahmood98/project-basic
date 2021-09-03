import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";


export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors
    {
        if((control.value as string).indexOf(' ') >= 0 )
            return { cannotContainSpace: true };

        return null as any;
    }

    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value === 'sakib')
                    resolve({shouldBeUnique: true});
                else resolve(null); 
            }, 2000);                                       
        }); 
    }
}