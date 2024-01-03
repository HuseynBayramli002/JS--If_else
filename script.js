//! Task 1.1
// let quest = prompt('Adiniz')
// let password = 12345
// if (quest == null) {
//     console.log("Cancel")
// } else if (quest == "Admin") {
//     let pass = +prompt("passworu yazin")
//     if (pass == null) {
//         console.log("Cancel")
//     } else if (pass === password) {
//         console.log("Welcome");
//     }
//     else {
//         console.log("sehv koddur");
//     }
// } else {
//     console.log("Taninmadi")
// }
//
//
//! Task 2.1   IF/ELSE
// let a = prompt('reqem');
// if (a % 2 == 0) {
//     console.log(` ${a} is a even number`)
// } else {
//     console.log(` ${a} is a odd number`)
// }
//
//
//! Task 2.2
// let a = prompt("reqem1")
// let b = prompt("reqem2")
// if (a > b) {
//     console.log(`${a}boyukdur ${b}-den`)
// } else {
//     console.log(`${b}boyukdur ${a}-den`)
// }
//! Task 2.3
// let a = prompt("reqem1")
// let b = prompt("reqem2")
// let c = prompt("reqem3")
// if (a > b && b > c) {
//     console.log(`${c} < ${b} < ${a}  `)
// } else if (a > c && c > b) {
//     console.log(`${b} < ${c} < ${a}  `)
// } else if (c > b && b > a) {
//     console.log(`${a} < ${b} < ${c}  `)
// } else if (c > a && a > b) {
//     console.log(`${b} < ${a} < ${c}  `)
// } else if (b > c && c > a) {
//     console.log(`${a} < ${c} < ${b}  `)
// } else if (b > a && a > c) {
//     console.log(`${c} < ${a} < ${b}  `)
// }



//! Task 2.4
// let month = +prompt("ayi daxil edin")
// let year = +prompt("Ili daxil edin")
// if (month <= 12 && month > 0) {

//     if (month == 2 && year % 4 == 0) {
//         console.log("Fevral ayinda 29 gun var")
//     } else if (month == 2 && year % 4 != 0) {
//         console.log("Fevral ayinda 28 gun var")
//     } else if (month == 4 || month == 6 || month == 9 || month == 11) {
//         console.log("Bu ay 30 gundur")
//     }
//     else {
//         console.log("BU ay 31 gundur")
//     }
// } else {
//     console.log("Invalid month")
// }


//! Task 2.5
// let bal = prompt("balinizi yazin")
// if (bal > 90 || bal <= 100) {
//     console.log(`sizin baliniz ${bal} => S grade`)
// } else if (bal > 80 || bal <= 90) {
//     console.log(`sizin baliniz ${bal} => A grade`)
// } else if (bal > 70 || bal <= 80) {
//     console.log(`sizin baliniz ${bal} => B grade`)
// } else if (bal > 60 || bal <= 70) {
//     console.log(`sizin baliniz ${bal} => C grade`)
// } else if (bal > 50 || bal <= 60) {
//     console.log(`sizin baliniz ${bal} => D grade`)
// } else if (bal > 40 || bal <= 50) {
//     console.log(`sizin baliniz ${bal} => E grade`)
// } else {
//     console.log("Student has failed")
// }


//! Task 2.6
// let a = prompt("il")
// if (a % 4 == 0 && a % 100 != 0 || a % 400 == 0) {
//     console.log("uzun ildir")
// } else {
//     console.log("uzun il deyil")
// }


//! Task 2.7
// let a = prompt("reqem1")
// let b = prompt("reqem2")
// let c = prompt("emeliyyat")
// if (c == "toplama") {
//     console.log(a + b)
// } else if (c == "cixma") {
//     console.log(a - b)
// } else if (c == "vur") {
//     console.log(a * b)
// } else if (c == "bolme") {
//     console.log(a / b)
// }


//! Task 2.8
// let a = prompt("reqem1")
// let b = prompt("reqem2")
// let c = prompt("reqem3")
// if (a == b && b == c) {
//     console.log("beraber terefli")
// } else if (a == b && b != c || a == c && c != b || b == c && c != a) {
//     console.log("beraber yanli")
// } else {
//     console.log("adi ucbucaq")
// }

