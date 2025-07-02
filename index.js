// const fs=require("fs")
// fs.readFile("a.txt","utf-8",function(err,data){
//     console.log(data);
// })
const express=require("express")

const app = express()

app.get('/', (req, res) => {
  res.send('<b>Hello World</b>')
})

app.get('/asd', (req, res) => {
    res.send('Hello Today is monday')
})

app.listen(3000)