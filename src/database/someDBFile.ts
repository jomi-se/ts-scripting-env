function someSideEffect() {
  console.log('Loading me has some side-effects so we should avoid it')
}

export interface SomeDBType {
  a: Number
}

export const db: SomeDBType = { a: 123 }
