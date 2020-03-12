let n=2 , n1=4
enum calc {
    case Addition
    case Minus
    case Multiply
    case Divide
}
let operator1 = calc.Addition
switch operator1 {
case .Addition:
    print("Addition is \(n+n1)")
case .Minus:
    print("Minus is\(n-n1)")
case .Multiply:
    print("Multiply is \(n*n1)")
case .Divide:
    print("Divivde is \(n/n1)")
default:
    print("Enter wrong operator")
}
