import express from 'express';
import { newMessage ,getMessage} from '../controler/message-controller.js';
import { addUser,getUsers } from '../controler/user-controller.js';
import { newConversation,getConversation} from '../controler/conversation-controller.js';
import { uploadFile ,getImage} from '../controler/image-controller.js';
import upload from '../utils/upload.js';
const route=express.Router();

route.post('/add',addUser);
route.get("/users",getUsers);
route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);
route.post('/message/add',newMessage);
route.get('/message/get/:id',getMessage);
route.post('/file/upload',upload.single("file"),uploadFile);
route.get('/file/:filename',getImage);
export default route;