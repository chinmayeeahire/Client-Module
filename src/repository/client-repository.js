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
    async getAll(id){
        try {
            const clients=await Client.find({});
            return clients;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id){
        try {
           const clients=await Client.findByIdAndRemove(id);
           return clients; 
        } catch (error) {
            console.log(error);
        }
    }

    async multidestroy(...client_id){
        try {
            const clients=await Client.deleteMany({client_consultant_id: client_id});
            return clients; 
        } catch (error) {
            console.log(error);
        }
    }
}

export default ClientRepository;