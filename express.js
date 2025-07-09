import express, { json } from "express"
//1 
const app = express()
app.get("/greet", (req, res) => {
    const time = new Date().toISOString();
    res.json({ msg: `hi,${time}` })

})


//2

app.get("/greet/:name", (req, res) => {
    const name = req.params.name
    res.json({ msg: `"the name is "${name}` })

})
//3
// app.get("/test", async (req, res) => {
//     const response = await fetch("http://localhost:3001/greet/bob")
//     const data = await response.json()
//     if (data.msg) {
//         res.json({ msg: 'OK' })
//     }
//     else {
//         res.json({ msg: "feel" })
//     }
// })
// app.use(express.json())

// app.post("/action", async (req, res) => {
//     if (req.body && req.body === "joke") {
//         const response = await fetch("https://official-joke-api.appspot.com/random_joke");
//         const data = await response.json();
//         return res.json({ msg: `joke: ${data}` });
//     }
    
//         if (req.body.action === "cat fact") {
//             const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
//             const data = response.json();
//             return res.json({ msg: { response } })
//         }
    
//     }
//     else {
//         res.json({ msg: "invalid action" });
//     }
// })

app.listen(3001, () => {
    console.log('server running in port 3001');
})