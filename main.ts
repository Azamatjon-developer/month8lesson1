// 1 masala

// let num : number | null = Number(prompt("3 xonalik son kiriting"))

// let c : number = num % 10
// let a : number =Math.floor(num / 100)
// let b : number = Math.floor(num / 10) % 10
// let sum: number = c + a
// const result:number = sum - b
// console.log(`3 xonalik sonni 1 chi va 3 sonlar yigindisidan 2 sonni farqi ${result}`)

// 2 masala

// let num : number | null = Number(prompt("son kiriting"))
// let sum : number = 0
// for (let i = 0; i<= num; i++) {
//     if (num % i == 0) {
//         sum += i
//     }
// }

// console.log(`Siz kiritgan songacha bo'linuvchilarini yig'indisi ${sum} ga teng `)

// 3 masala
// let arr:(boolean|string|number|undefined|null) [] = [true,"salom", "Azamat",23,undefined]

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "string") {
//         arr[i] = null
//     }
// }

// console.log(arr)

// 4 masala
// let arr : number [] = [1,2,4,5,67,34,21,56,23]

// let max : number = Math.max(...arr)

// console.log(`eng katta son ${max} ga teng`)

// 5 masala
// let arr:number[] = [1,2,8,10]
// let sum:number = 0
// for(let i  = 0 ; i < arr.length;i++){
//     sum = arr[i] + sum
// }
// console.log(sum);

// 7 masala

// let arr : number [] = [1,2,3,4,5,6,7,8,9,10]

// arr.forEach((a,i) => {
//     if (a % 2 == 0){
//         arr[i] = 0
//     }
// })

// console.log(arr)

// 8 masala

// let numberOne: number | null = Number(prompt(' 1 Son kiriting'))
// let numberTwo: number | null = Number(prompt('2 Son kiriting'))

// let operations : string | null = prompt("Amalni kiriting")

// switch(operations) {
//     case "+" :
//     console.log(numberOne + numberTwo)
//     break

//     case "-":
//     console.log(numberOne - numberTwo)
//     break
//     case "*":
//     console.log(numberOne * numberTwo)
//     break
//     case "/":
//     console.log(numberOne / numberTwo)
//     break

// }

// let userName : string | null = prompt("ismizni kiriting")

// let arr : string [] = ["Azamat" , "Islom" , "Ulugbek" , "Firdavs"]

// if (userName) {
//     if (arr.includes(userName)) {
//         console.log(`siz kiritgan ism ${userName} arrayda bor`)
//     }else{
//         console.log(`siz kiritgan ism ${userName} arrayda yo'q`)

//     }
// }else{
//     console.log("Siz otmen berduz")
// }

// 10 masala

// let userName: string | null = prompt('Enter your userName')

// let arr: Array<{ id: number; name: string; age: number; gmail: string }> = [
//   {
//     id: 1,
//     name: 'Azamat',
//     age: 20,
//     gmail: 'azamatergashev@gmail.com',
//   },
//   {
//     id: 2,
//     name: 'Anvar',
//     age: 20,
//     gmail: 'azamatergashev@gmail.com',
//   },
//   {
//     id: 3,
//     name: 'Ali',
//     age: 20,
//     gmail: 'azamatergashev@gmail.com',
//   },
//   {
//     id: 4,
//     name: 'Aziz',
//     age: 20,
//     gmail: 'azamatergashev@gmail.com',
//   },
// ]
// let user = arr.find((item) => item.name === userName)
// if (user) {
//   console.log(
//     `siz kiritgan user arrayda bor ${user?.name} ismi  ${user?.age} yoshi  ${user?.gmail} gmaili shunaqa bo'lgan user bor`,
//   )
// } else {
//   console.log(`siz kiritgan ${userName} arrayda yo'q`)
// }
// 11 masala
// let arr: Array<{ id: number; name: string; age: number; gmail: string }> = [
//       {
//         id: 1,
//         name: 'Azamat',
//         age: 20,
//         gmail: 'azamatergashev@gmail.com',
//       },
//       {
//         id: 2,
//         name: 'Anvar',
//         age: 21,
//         gmail: 'azamatergashev@gmail.com',
//       },
//       {
//         id: 3,
//         name: 'Ali',
//         age: 22,
//         gmail: 'azamatergashev@gmail.com',
//       },
//       {
//         id: 4,
//         name: 'Aziz',
//         age: 29,
//         gmail: 'azamatergashev@gmail.com',
//       },
//     ]
// let olderUser = Math.max(...arr.map(item => item.age))
// console.log(olderUser)

// 12 masala

// let arr: Array<{ id: number; name: string; age: number; gmail: string }> = [
//           {
//             id: 1,
//             name: 'Azamat',
//             age: 20,
//             gmail: 'azamatergashev@gmail.com',
//           },
//           {
//             id: 2,
//             name: 'Anvar',
//             age: 29,
//             gmail: 'azamatergashev@gmail.com',
//           },
//           {
//             id: 3,
//             name: 'Ali',
//             age: 89,
//             gmail: 'azamatergashev@gmail.com',
//           },
//           {
//             id: 4,
//             name: 'Aziz',
//             age: 20,
//             gmail: 'azamatergashev@gmail.com',
//           },
//         ]

// let allUsersAge = arr.reduce((a,b) => a + b.age,0)
// console.log(`Array ichidagi userlarning o'rtacha yoshi ${allUsersAge / arr.length} ga teng`)

// 13 masala

// let arr:number [] = [24,54,21,76,23,10]

// let firstAge = arr[0]
// let lastAge = arr[arr.length - 1]
// let sum : number = firstAge + lastAge
// if (sum % 2 == 0) {
//     arr.push(sum)

// }else{
//     arr.unshift(sum)
// }
// console.log(arr)

// 14 masala

// let arr: number [] = [1,2,3,4,5,6,7,8,9,10,12]

// let evenNumber: number [] = arr.filter((item => item % 2 === 0))
// let OddNumber : number [] = arr.filter((item => item % 2 !== 0))

// console.log(`Juft sonlar ${evenNumber}`)
// console.log(`toq sonlar ${OddNumber}`)

// 15 masala 

// let arr = [8,7,6,5,4]
// let reserveNumber : number [] = []

// for(let i = arr.length -1; i >=0 ; i--) {
//     reserveNumber.push(arr[i])
// }
// console.log(reserveNumber)
