var count = 1
for var i in 1...5{
    count = i
    for _ in 1...6-i {
        print(" ",terminator:" ")
    }
    for _ in 1...i {
        print(count,terminator:" ")
        count += 1
    }
    count -= 1
    for _ in 1..<i {
        count -= 1
        print(count,terminator:" ")
    }
    print()
}
