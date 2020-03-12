var str = "aaghcaaaaaaaaaahkbjhbjhbamnvhaa"
var str2 : Set<String> = []
var str1 = str.sorted()
for i in 0..<str1.count{
    for j in i+1..<str1.count{
        let firstIndex = str1.index(str1.startIndex,offsetBy: i)
        let secondIndex = str1.index(str1.startIndex,offsetBy: j)
        if str1[firstIndex] == str1[secondIndex] {
            str2.insert(String(str1[secondIndex]))
        }
    }
}
print(str2)







var num = [1,2,34,5,3,2,1]
var num1: Set<Int> = []
var num2 = num.sorted()
for i in 0..<num2.count{
    inner :
        for j in i+1..<num2.count{
            let firstIndex = num2.index(num2.startIndex,offsetBy: i)
            let secondIndex = num2.index(num2.startIndex,offsetBy: j)
            if num2[firstIndex] == num2[secondIndex]{
                num1.insert(Int(num2[secondIndex]))
            }
            
    }
    
}
print(num1)











var n = 20
var value = 1
for _ in 1... {
    value *= 2
    
    if value == n {
        print("Given Number is the power of 2")
        break
    }
    if value > n {
        print("Given Number is not the power of 2")
        break
    }
}
