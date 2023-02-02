import mongoose from 'mongoose';
// mongoose.set('strictQuery', true);
export const connect=async () =>{
    await mongoose.connect('mongodb://localhost/client_db');
}