//let n1 = 13
//if (n1%2 == 0){
//    print("even")
//}else {
//    print("odd")
//}


//let n1 = 2019
//if (n1%400 == 0 || n1%4 == 0 && n1%10 != 0){
//    print("leap year")
//}else {
//    print("not leap year")
//}


//var n1 = 10,n2 = 20
////var tmp = 0
////tmp = n1
//n1 = n1+n2
//n2 = n1-n2
//n1 = n1-n2
//print("After the swaping the values of n2 is \(n2)")



//let n = 1
//for n in 1...10{
//    print("\(n) times 2 is \(2*n)")
//    }



//var t = 1
//var fact = 1
//for t in 1...5{
//  fact = fact*t
//    print(fact)
//}


//var no = 1234
//var temp = no
//var rev = 0
//var rem = 0
//while(no != 0){
//    rem = no%10
//    rev = rev*10+rem
//    no = no/10
//}
//print(rev)
//if (rev == temp){
//    print("number is pallindrome")
//}
//else {
//    print("number is not pallindrome")
//}


//var Name = "Pavanesh"
//var reversed = String(Name.reversed())
//print(reversed)

//var no = 8
//var temp = 0
//for l1 in 2...no{
//    if no%l1 == 0 {
//        temp = temp+1
//    }
//}
//    if temp > 0 {
//        print("number is not prime")
//    } else {
//        print("number is prime")
//    }


//var a=0,b=1,c:Int
//print(a)
//for i in 1...10{
//    c=a+b
//    print(c)
//    a=b
//    b=c
//}



//let valDictionary = ["a":1,"b":2,"c":3,"d":4]
//for value in valDictionary{
//    print(value)
//}


//let keys = ["Apple","Orange","Grapes"]
//let values = [1,2,3,4]
//let newDictionary = Dictionary(uniqueKeysWithValues:zip(keys,values))
//print(newDictionary["Grapes"])


//let keys = ["Abhinav","Nikhil","Ravi"]
//let values = [1,2,3]
//let newDictionary = Dictionary(uniqueKeysWithValues:zip(keys,values))
//print(newDictionary)


//let arr = ["A":1,"B":2,"C":3,"D":4,"E":5]
//for(key,value) in arr {
//    print("key:\(key), value:\(value)")
//}


//var arr = ["A":1,"B":2,"C":3,"D":4,"E":5]
//arr["A"] = 6
//print(arr)


//let some:Set = [1,2,3,4,4,4,5,5]
//print(some)


//var some:Set = [1,2,2,2,2,1,4,12,3]
//var some1:Set = [99,1,2]
//print(some.symmetricDifference(some1))

//let closure = {
//    print("Closur2e done")
//}
//closure()


//let closure:(String) -> () { name in
//    print(name)
//    }
//closure("hello motto")


//var Arr = [2,45,3,2,6]
//var temp = []
//var i:Int
//var j:Int
//for i in 1...4{
//    for j in 2...4{
//        if i<j {
//            temp=i
//            i=j
//            j=temp
//        }
//    }
//}
//print("Third highest value will be \(temp[2])")


//let num = [9,6,42,43,5]
////let max = num.max()
//////max.remove(0)
//////print(max)
//for value in num{
//    print(value)
//}
//var max=num.max()
//print(max(max(max)))




//var arr = [1,4,9,56,32,55,46]
//var arr1 = arr.sorted()
//print(arr1)
//print("Third smallest number is \(arr1[2])")
//print("Third largest number is \(arr1[arr1.count-3])")




//var sum = 0,sum1 = 0
//var n1 = 10
//var Avrg : Int,missvalue:Int,count1:Int,missed:Int,sum2 = 0
//var arr = [1,2,3,4,6,7,8,9]
//sum = n1*(n1+1)/2
//count1 = arr.count
//missed = 10-count1
//print("\(missed) numbers are missing")
//print("the actual sum of 1 to 10 is \(sum)")
//for value in arr {
//    sum1 += value
//}
//print("the sum of given array is \(sum1)")
//missvalue =  sum-sum1
//if missvalue == 0 {
//    print("there is not a number miss")
//} else {
//print("the sum of that two missed number is \(missvalue)")
//}
//// Average of miss number
//Avrg = missvalue/2
//for value1 in arr{
//    if (arr[value1]<Avrg) {
//        sum2 += arr[value1]
//    }
//    print(sum2)
//}






//let n = 2
//let n1 = 2
//let sum:Int
//
//if n==n1 {
//    sum = (n+n1)*3
//} else {
//   sum = n+n1
//}
//print(sum)



//let n = 21
//let n1 = 51
//let difference:Int
//if n>n1 {
//    difference = (n-n1)*2
//} else {
//    difference = n1-n
//}
//print(difference)


//func check(n:Int = 10,n1:Int = 10) -> Bool {
//    if (n>0 || n1>0) {
//        if(n<0 || n1<0) {
//            return true
//        }
//    }
//    if(n<0 && n1<0){
//        return true
//    } else {
//        return false
//    }
//}
//print(check())


//func name(word:String) -> String {
//    if word.hasPrefix("Is") {
//        return word
//    } else {
//        return "Is \(word)"
//    }
//}
//print(name(word: "Apple"))



//let name:[String] = ["Pavan","Ravi","Sharma"]
//func charcount (name:[String]) -> [Int] {
//    var charcountArray = [Int]()
//for item in name {
// charcountArray.append(item.count)
//}
//    return charcountArray
//}
//let charcount1 = charcount(name: name)
//print(" Characters count of each element in house name :- \(charcount1)")



//let name:[String] = ["Pavan","Ravi","Sharma"]
//let count = name.map{$0.count}
//print(count)




//let num = [1,2,3,4,5,6,7,8,9,10]
//extension Int {
//func factorial() -> Int {
//    var Fact : Int = 1
//    for i in 1...self {
//        Fact = Fact*i
//    }
//    return Fact
// }
//}
//let result = num.map{$0.factorial()}
//print(result)

//let Numbers = [1,4,9,5,3,6,7,4,3,6]
////let even = Numbers.filter{$0.hasSuffix("Pratap")}
////let even = Numbers.filter{$0.count<7}
//
//let even = Numbers.sorted(by : >)
//print(even)


//let numbers = [1,2,3,5,3,45,32,45,2,4,2,21]
//let sumOfNumbers = numbers.reduce(0,{$0 + $1})
//print(sumOfNumbers)

//let name = ["Ab","bc","cd","ef"]
//let count = name.count
//for i in name[..<2] {
//    print(#"anjana."#)
//}



//func word(str:String="Pavan",n:Int=3) -> String{
//    var name = str
//    let index = str.index(str.startIndex,offsetBy:n)
//    name.remove(at:index)
//    return name
//}
//print(word())


//func word(str:String="Pavan") -> String {
//    var name = str
//    let firstchar = name.remove(at:name.startIndex)
//    let findlast = name.index(before: name.endIndex)
//    let lastchar = name.remove(at: findlast)
//
//    name.append(firstchar)
//    name.insert(lastchar, at: name.startIndex)
//    return name
//}
//print(word())


//func word(str:String="Swift") -> String{
//    var name = str
//    let findlast = name.index(before: name.endIndex)
//    let lastchar = name.remove(at: findlast)
//    let secondlastchar = name.remove(at: findlast-1)
//    let laststr = String(lastchar)
//
////    name.insert(lastchar, at: name.startIndex)
////    name.insert(lastchar, at: name.endIndex)
////    name.insert(lastchar, at: name.endIndex)
//    return laststr + str + laststr
//}
//print(word())


//let n = 20
//if n%3==0 {
//    print("it is multiple of 3")
//}
//if n%5==0 {
//    print("it is multiple of 5")
//}


//func word (str : String = "Pavan") -> String {
//    var name = str
//    var findtwochar = name.prefix(2)
//    return findtwochar + str + findtwochar
//}
//print(word())


//func word(str:String = "Pavan") -> Bool {
//    let name = str
//    if name.hasSuffix("an") {
//        return true
//    } else {
//        return false
//    }
//}
//print(word())



//func number(n:Int=60,n1:Int=16) -> Bool{
//    if n>=10 && n<=30 {
//        return true
//    }
//    if n1>=10 && n1<=30 {
//        return true
//}
//    else {
//        return false
//    }
//
//}
//print(number())


//var count = 1
//for var i in 1...5{
//   count = i
//    for _ in 1...6-i {
//        print(" ",terminator:" ")
//    }
//    for _ in 1...i {
//        print(count,terminator:" ")
//        count += 1
//    }
//    count -= 1
//    for _ in 1..<i {
//        count -= 1
//        print(count,terminator:" ")
//    }
//    print()
//}
//
//
//for var i in 1...5 {
//    for _ in 6...0 {
//        print(" ", terminator:" ")
//    }
//    for _ in 1...i {
//        print("*",terminator:" ")
//    }
//    print()∂
//    }




func prime(n: Int = 6) -> Bool{

    if n <= 3 {
return true
    }

var i = 2
    while (i*i <= n){
        if n % i == 0{
return false
            
i = i + 1
        }
        else {
return true
        }
    }
    return prime()
}
print(prime())











