/// <reference path="toolkit.d.ts"/>
//

export const serialVersionUID = 1

function getVersion (): string {
  return '1.0.0'
}

class N {
  did () {
    console.log('did it')
  }
}

export {
  getVersion,
  N,
}

