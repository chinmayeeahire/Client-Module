import Client from "../models/client.js";

class ClientRepository{
    async create(data){
       try {
        const clients=await Client.create(data);
        return clients;
       } catch (error) {
        console.log(error);
       }
    }
    async edit(id, data){
       try {
         const clients=await Client.findByIdAndUpdate(id, data, {new: true});
         return clients;
       } catch (error) {
        console.log(error);
       }
    }
}

export default ClientRepository;