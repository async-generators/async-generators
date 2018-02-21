import {equal} from './src';
import {Subject} from './src';

let subject = new Subject<number>();

async function foo(){
  subject.next(10);
}