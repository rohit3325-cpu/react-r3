import conf from '../conf/conf.js';
import { Client, Account,ID } from 'appwrite';


export class AuthService{
    client= new Client();
    account= new Account(this.client);

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
           const userAccount= await this.account.create(ID.unique(),email, password, name);
           if (userAccount) 
            {
            //call another method
             return this.logIn({email, password});
           }
           else{
            return userAccount;
           }

        }catch (error) {
            throw error;
        }
}

async logIn({email, password}){
     try{
          return await this.account.createEmailPasswordSession(email, password);
     }
     catch{
            throw error;
     }
}
async getCurrentUser(){
    try{
        return await this.account.get();
    }
    catch{
        console.log("Appwrote services :: getCurrentUser :: error",error);
    }

    return null;
}

async logout(){
    try{
         await this.account.deleteSession('current');
    }
    catch{
        console.log("Appwrite services :: logout :: error",error);
    }
}
}
const authService = new AuthService();

export default authService;