import mongoose from "mongoose";
const clientSchema=new mongoose.Schema({
    client_name:{
        type: String,
        required: true
    },
    client_email:{
        type: String,
        required: true,
        unique: true
    },
    client_password:{
        type: String,
        required: true
    },
    client_city:{
        type: String,
        required: true
    },
    client_state:{
        type: String,
        required: true
    },
    client_address:{
        type: String,
        required: true
    },
    client_phone:{
       type: Number,
       required: true
    },
    client_other_info:{
        type: String,
        required: true
    },
    client_date:{
        type: Date,
        default: Date.now()
    },
    client_consultant_id:{
        type: Number,
        required: true
    }
},{timestamps: true});

const client=mongoose.model('client', clientSchema);
export default client;