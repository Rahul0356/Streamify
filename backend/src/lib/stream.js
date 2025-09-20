import {StreamChat} from "stream-chat"
import "dotenv/config"


const apikey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if(!apiKey || !apiSecret){
    console.error("Stream API key or Secret is missing");

}

const stream = StreamChat.getInstance(apiKey,apiSecret);


export const upsertSteamUser = async(userData)=>{
    try{
        await streamClient.upserUsers([userData]);
        return userData
    } catch(error){
console.error("Error upserting Stream user:",error);


    
    }
}
export  const  generateStreamToken = (userId)=>{};
