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