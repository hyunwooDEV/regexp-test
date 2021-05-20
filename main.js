const str = `
010-1234-5678.
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://127.0.0.1:5500/
동해물과_백두산이 마르고 닳도록
`

// const regexp = new RegExp('the', 'gi')
//console.log(str.match(regexp))
// const regexp = /the/gi
//console.log(regexp.test(str))

// str = str.replace(regexp, 'AAA')
// console.log(str)

// const h = `  the hello  world   !

// `

// console.log(
//   h.replace(/\s/g, '')
//   )


console.log(
  str.match(/(?<=@).{1,}/g)
)
