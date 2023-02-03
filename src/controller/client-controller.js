import ClientRepository from "../repository/client-repository.js";

const clientRepository=new ClientRepository();

export const createClient=async(req, res)=>{
   try {
      const response= await clientRepository.create(req.body);
      return res.status(201).json({
        success: true,
        message: "Succesfully created a new CLIENT",
        data: response
      });
   } catch (error) {
    return res.status(500).json({
       success: false,
       message: 'Something went wrong ',
       data: {},
       err: error
    });
   }
}

export const editClient=async(req, res)=>{
   const id=req.params.id;
   try {
      const response=await clientRepository.edit(id, req.body);
      return res.status(201).json({
         success: true,
         message: "Successfully edited client",
         data: response
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Something went wrong",
         data:{},
         err: error
      });
   }
}

export const listClient=async(req,res)=>{
   try {
      const response=await clientRepository.getAll(req.body);
      return res.status(201).json({
         success: true,
         message: "Successfully listed all clients",
         data: response
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Something went wrong",
         data:{},
         err: error
      });
   }
}

export const deleteClient=async(req,res)=>{
   try {
      const response=await clientRepository.destroy(req.params.id);
      return res.status(201).json({
         success: true,
         message: "Successfully deleted a client",
         data: response
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Something went wrong",
         data:{},
         err: error
      });
   }
}