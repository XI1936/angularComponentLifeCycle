import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'youTubeTager'
})
export class YouTubeTagerPipe implements PipeTransform {

  transform(value: string) {
    value=value.replace(/\s/g,(x)=> ", ");
    return value.toLowerCase();
  } 

}
