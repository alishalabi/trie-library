const PT = require("../index")

test ( "Canary Test", () => {
  expect(2+2).toBe(4)
})

test ( "Create Empty PrefixTree", () => {
  const tree = new PT.PrefixTree()
  console.log(tree)
})
