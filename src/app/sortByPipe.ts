import { Pipe, PipeTransform } from '@angular/core';
import {LCTable} from './lctable'

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  transform(arr: Array<LCTable>, prop: any, reverse: boolean = false): any {
    if (arr === undefined) return
    const m = reverse ? -1 : 1
    return arr.sort((a: LCTable, b: LCTable) => {
       if (a.points > b.points) {
        return -1;
    }
    if (a.points < b.points) {
        return 1;
    }
    return 0;
    })
  }
}