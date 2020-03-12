var lengths = [5,3,2,6,1,4]
let fronts = [0,1,2,0,3,2]
for(index,length) in lengths.enumerated() {
    var num = 0
    for previousElement in 0..<index {
        if length<lengths[previousElement] {
            num += 1
        }
    }
    if num != fronts[index] {
        var front = fronts[index]
        for previousElement in 0..<index {
            if length<lengths[previousElement] {
                front -= 1
                if front == 0 {
                    lengths.insert(lengths.remove(at: index), at: previousElement+1)
                }
            }
        }
    }
}
print(lengths)
