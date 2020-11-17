/// <reference path="bridge.d.ts"/>

String.prototype.toNumber = function () {
  return parseInt(this.valueOf(), 10);
}

// extends constructor
interface ArrayConstructor {
  from<T>(args: ArrayLike<T>): Array<T>;
}

console.log("100".toNumber());

interface Pipe {
  streamOf (...silk: any[]): void;
}

class FilePipe implements Pipe {
  streamOf(template: string, ...silk: any[]) {
    let args = Array.from(silk);
    args.unshift(template);
    console.constructor.prototype.log.apply(console, args);
  }
}

let fp = new FilePipe();
fp.streamOf("hello world %s", 1);