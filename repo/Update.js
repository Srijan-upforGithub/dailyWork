const db = require('./connectionDB');
const Collection = require('./models/customer');

const Update = async ()=>{
    const filter = {name:'Tab 3'}
    const result = await Collection.updateOne(filter , {name:'Note 10 Pro Max'})
    if(result.acknowledged){
        console.log('updated successfully')
    }else{
        console.log('error')
    }
}

const UpdateMultiple = async ()=>{
    const filter = {category:'mobile phone'}
    try {const result = await Collection.updateMany(filter,{price:300})
           console.log('updated')   
        } catch(err){
            console.log('error',err)
        }
}

const findAndUpdateDocument = async () => {
    try {
      const filter = { name: 'Note 10 Pro Max' };
      const update = { price: 220 }; // New price
      const options = { new: true }; // To return the updated document
      const updatedDocument = await Collection.findOneAndUpdate(filter, update, options);
      console.log('Update successful:', updatedDocument);
    } catch (err) {
      console.error('Error updating data:', err);
    }
  };
  
  // Call the findAndUpdateDocument function
  findAndUpdateDocument();
// UpdateMultiple()