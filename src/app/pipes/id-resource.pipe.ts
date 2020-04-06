import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idResource'
})
export class IdResourcePipe implements PipeTransform {

  transform(value: string, args: string[]): string {
    console.log('Pipe IdResourcePipe');
    const array = value.split('/');
    const id = array[array.length - 2];
    return id;
  }

}
