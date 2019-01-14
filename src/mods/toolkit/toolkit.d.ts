/**
 * standalone module
 */

declare module 'toolkit' {
  export function getVersion(): string;

  export var serialVersionUID: number;

  export interface N {
    did (): string
  }
}
