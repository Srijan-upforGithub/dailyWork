const db = require('./connectionDB');
const Collection = require('./models/customer')

const Delete = async ()=>{
   try{
     const result = await Collection.deleteOne({name:"Tab 2"})
     console.log("deleted");
   } catch(err){
        console.log('error',err)
   }
}
Delete()