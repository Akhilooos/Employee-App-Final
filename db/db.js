//2H9ywZ3K1qsJTjOb
//akhilmathew990
//mongodb+srv://akhilmathew990:<password>@employeedetails.usdkl4v.mongodb.net/?retryWrites=true&w=majority



const mongoose = require('mongoose');
const mongourl = process.env.MONGODB_URL || "mongodb+srv://akhilmathew990:2H9ywZ3K1qsJTjOb@employeedetails.usdkl4v.mongodb.net/?retryWrites=true&w=majority" ;
const dbname = process.env.DB_NAME || "Details";


mongoose.connect(mongourl, { dbName: dbname })
.then(()=>{
    console.log(`Connected to MongoDB ${mongourl}`)
})
.catch(err => console.log(err))
