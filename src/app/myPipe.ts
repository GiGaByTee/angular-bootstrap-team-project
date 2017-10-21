import {Pipe, PipeTransform} from '@angular/core'
import { LCTable } from './lcTable';

@Pipe({
  name: 'values',
  pure: false
})
export class ValuesPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    // value.sort((t1:LCTable, t2:LCTable) =>{
    //   if (t1.points > t2.points) {
    //     return 1;
    // }

    // if (t1.points < t2.points) {
    //     return -1;
    // }

    // return 0;
    // })
    return Object.keys(value).map(key => value[key])
  }
}