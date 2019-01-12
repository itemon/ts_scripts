// an lib using global binding declaration
// like jQuery

// a value
declare function jQuery(selector: string): jQuery

// a type
interface jQuery {
}

// global vars
declare namespace jQuery {
  export const version: string
}
