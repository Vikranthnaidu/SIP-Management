const sqlite = require('sqlite3')

const db = new sqlite.Database('/Users/vikranth/sip-manager.db', (error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Connected to Database")
    }
})

module.exports=db;