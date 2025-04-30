//should shift  letters up the alphabet according to cipherNumber
//shifting letters beyond Z should wrap back around to A
//should return an error if cipherNumber is not a number
//if decodeOn is true, should shift letters down the alphabet according to cipherNumber
//should preserve punctionation and white space

const encode = require("./index")

test("test fails if letters dont shift up according to cipher number", () => {
    expect(encode("a", 1)).toBe("b")
    expect(encode("abc", 2)).toBe("cde")
})

test("test fails if letters dont wrap back to start of alphabet", () => {
    expect(encode("z", 1)).toBe("a")
    expect(encode("xyz", 3)).toBe("abc")
})

test("test fails if a negative cipher number doesnt shift down", () => {
    expect(encode("a", -1)).toBe("z")
})

test("test fails if an error isn't returned when cipher number isn't a number", () => {
    expect(encode("a", "a")).toBe("Error")
})

test("test fails if letters don't shift down according to cipher number after the decode flag is set to true", () => {
    expect(encode("b", 1, true)).toBe("a")
    expect(encode("a", 1, true)).toBe("z")
    expect(encode("def", 3, true)).toBe("abc")
})

test("test fails if punction and white space are not preserved", () => {
    expect(encode("Hello, world!", 1)).toBe("ifmmp, xpsme!")
})