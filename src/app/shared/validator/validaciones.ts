import { FormControl } from '@angular/forms';



export const nombreApellidoPattern = '([a-zA-Z]+) ([a-zA-Z]+)';
export const correoPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';


export const noPuedeSerMemo = ( control: FormControl ) => {
    const valor = control.value?.trim().toLowerCase();
    if ( valor === 'memo'){
      // Error
      return {
        noStrider: true
      };
    }
    return null;

  };
