let fibo1 = 0
let fibo2 = 1

console.log(fibo1)
console.log(fibo2)

for (let i = 0; i < 18; i++) {
  let newFibo = fibo1 + fibo2
  console.log(newFibo)
  fibo1 = fibo2
  fibo2 = newFibo
}
