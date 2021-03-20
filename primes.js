function simple_check_all(num) {
    for (let x = 2; x < Math.ceil(Math.sqrt(num)); x++) {
        if num % x == 0 {
            return false
        }
    }
    return true
}
