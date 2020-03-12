//func armstrng(_ n:Int)->Bool{
//    // let n=153
//    var temp = n
//    var sum:Int = 0
//    let str = String(n)
//    var n2:Int = 1
//    let length = (str.count)
//    while temp != 0 {
//        let a = temp%10
//        temp = temp/10
//        n2 = 1
//        for _ in 1...length {
//            n2 *= a
//        }
//        sum += n2
//    }
//    if sum == n {
//        return true
//    } else {
//        return false
//    }
//
//}
//
//print(armstrng(1634))














func armstrng(_ n:Int)->Bool{
    // let n=153
    var temp = n
    var sum:Int = 0
    let str = String(n)
    var n2:Int = 1
    let length = (str.count)
    repeat {
        let a = temp%10
        temp = temp/10
        n2 = 1
        for _ in 1...length {
            n2 *= a
        }
        sum += n2
    } while temp != 0
    if sum == n {
        return true
    } else {
        return false
    }
    
}

print(armstrng(153))
