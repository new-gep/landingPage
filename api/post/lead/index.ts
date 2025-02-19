import axios from "axios";

export const Default = async (data: any) => {
    try{
        console.log(`${process.env.NEXT_PUBLIC_API_URL}/lead`)
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/lead`, data);
        return response.data;
    }catch(error){
        console.log(error);
    }
};

