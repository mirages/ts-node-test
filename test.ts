
function test(a: string): string
function test(a: number): number
function test(a: number | string) {
  return a
}

export default test
