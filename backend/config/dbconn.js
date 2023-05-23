const mongoose = require('mongoose')

const connectToDb = async () => {
    try{
        const uri = 'mongodb+srv://nkengbeza:aJONG-2002@cluster0.4onpbl5.mongodb.net/?retryWrites=true&w=majority'
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          })
    }catch(err){
        console.log(err)
    }
}

module.exports = connectToDb