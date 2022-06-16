const bcrypt = require('bcrypt')

module.exports = mongoose => {
    var BankingSchema = mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        mobile:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
    }, 
        {timestamps: true}
    )

    BankingSchema.method("toJSON", function(){
        const {_id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    BankingSchema.pre('save', function (next){
    
        const saltRounds = 10
        // Encrypt the password
        this.password = bcrypt.hashSync(this.password, saltRounds)
        // We have set rounds to be 10 
        // ArjunR56789567879 // Salting the Password
        // Hashing the password // Hashing the Password
    
        // The Next Step to be executed
        next()
    })

    
    // 
    // {
    //     "_id": "123342432",
    //     "name":"arjun"
    // }
    
    const BankingCustomerModel = mongoose.model("customer",BankingSchema)

    return BankingCustomerModel

}

