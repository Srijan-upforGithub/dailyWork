const db = require('./connectionDB');
const Collection = require('./models/customer')

const insert = ()=>{
   const newProducts = [
    {name:'Note 9 Pro Max',model:'Redmi',price:220,category:'mobile phone'},
    {name:'Tab 2',model:'Samsung',price:180,category:'tablet'}
   ]
   Collection.insertMany(newProducts)
}
insert();
