import conf from '../conf/conf.js';
import { Client,ID,Database,Storage,Query } from 'appwrite';

export class Service{
    client = newClient();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId);

        this.databases = new Database(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite services :: createPost :: error",error);
        }

    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updatedocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
           console.log("Appwrite services :: updatePost :: error",error); 
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                
            )
             return true;
            
        } catch (error) {
            console.log("Appwrite services :: deletePost :: error",error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            
        } catch (error) {
            console.log("Appwrite services :: getPost :: error",error);
            return false;
        }
    }

    async getAllposts(queries = [Query.equal('status','active')]){
        try {
            return await this.databases.listdocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
            
        } catch (error) {
            console.log("Appwrite services :: getAllposts :: error",error);
            return false;
        }
    }

    //file upload services
    async uploadfile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )

        } catch (error) {
            console.log("Appwrite services :: uploadfile :: error",error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
        } catch (error) {
            console.log("Appwrite services :: deleteFile :: error",error);
            return false;
            
        }
    }

    getFilePreview(fileId){
        return this.bucket.geetFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

    getFileDownload(fileId){
        return this.bucket.getFileDownload(
            conf.appwriteBucketId,
            fileId
        )
    }

    
}


const service=new Service();
export default service;