import { SomeDBType, db } from 'database/someDBFile'

export interface AOutput extends SomeDBType {
  b: string
}

export function someModuleFunction() {
  console.log("I'm a function in module A", db)
}
