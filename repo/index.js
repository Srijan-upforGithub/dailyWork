const express = require('express')
const mongoose = require('mongoose')
const TODO = require('./models/TODO')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine',"ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

 app.get('/', async (req,res)=>{

   TODO.find().then(result=>{
       res.render('index', { data : result })
   })
 })

 app.post('/',async (req,res)=>{
    const todo = new TODO({
        value:req.body.TodoVal
    })
    todo.save().then(result=>{
        res.redirect('/')
    })
 })

 app.post('/removetask/:id',(req,res)=>{
    TODO.findByIdAndDelete(req.params.id).then(result=>{console.log(result)})
    console.log(req.params.id)
    res.redirect(303,'/')
 })

//  app.get('/api/customers', async (req,res)=>{
//     try{
//         const result = await Customer.find()
//         res.json({'customers': result});
//     }catch(e){
//         res.status(500).json({'error':e.message})
//     }
//  })

mongoose.connect("mongodb://127.0.0.1:27017/todos",{
    useNewUrlParser:true , useUnifiedTopology:true
}).then(()=>console.log('succesful')).catch((err)=>console.log(err))

app.listen(5000,()=>{
    console.log('running on port 5000!!!')
})