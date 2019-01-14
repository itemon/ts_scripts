//

import * as Toolkit from './mods/toolkit/toolkit'

const ver: string = Toolkit.getVersion()
console.log('ver is ', ver)

const action: Toolkit.N = new Toolkit.N()
action.did()
