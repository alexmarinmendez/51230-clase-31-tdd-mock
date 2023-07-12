import { suma } from '../src/suma.js'

let result
console.log('-----------------------------------------------')
console.log('Test 1: Must return null if any params is not a number')
result = suma('2', 2)
if (result === null) console.log('✔️ PASSED!')
else console.log(`❌ FAILED! The result was ${result}`)

console.log('-----------------------------------------------')
console.log('Test 2: Must return 0 if there is not params')
result = suma()
if (result === 0) console.log('✔️ PASSED!')
else console.log(`❌ FAILED! The result was ${result}`)

console.log('-----------------------------------------------')
console.log('Test 3: Te sum must be correct')
result = suma(5, 3)
if (result === 8) console.log('✔️ PASSED!')
else console.log(`❌ FAILED! The result was ${result}`)

console.log('-----------------------------------------------')
console.log('Test 4: Te sum must be correct with any params')
result = suma(5, 3, 2, 9, 1)
if (result === 20) console.log('✔️ PASSED!')
else console.log(`❌ FAILED! The result was ${result}`)