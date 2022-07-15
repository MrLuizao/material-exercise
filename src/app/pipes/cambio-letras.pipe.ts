import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioLetras'
})
export class CambioLetrasPipe implements PipeTransform {

  transform(string: string): any {
    let splitStr = string.split('')

    splitStr.forEach( (item)=>{
      switch(item.toLocaleLowerCase()){
        case 'a':
          let indxa = splitStr.indexOf(item)
          splitStr[indxa]= '4'
        break;

        case 'e':
          let indxe = splitStr.indexOf(item)
          splitStr[indxe]= '3'
        break;

        case 'i':
          let indxi = splitStr.indexOf(item)
          splitStr[indxi]= '1'
        break;

        case 'o':
          let indxo = splitStr.indexOf(item)
          splitStr[indxo]= '0'
        break;

        case 'u':
          let indxu = splitStr.indexOf(item)
          splitStr[indxu]= '9'
        break;
      }
    });

    let arrayAgain = splitStr.toString().replace(/,/g, "");  
    return arrayAgain;

  }

}
