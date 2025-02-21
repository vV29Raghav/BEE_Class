const express=require("express");
const app=express();


//  app.get("/profile",(req,res)=>{
//     const {username}=req.query;
//     console.log(username);
//     //search username in database
//     res.send("Profile page of "+username);
//  })

// app.get("/profile",(req,res)=>{
//     const {username,clas,group}=req.query;
//     console.log(username);
//     //search username in database
//     res.send("Profile page of "+username+clas+group);
//  })

// app.get("/profile/:id/:username",(req,res)=>{
//     const {id,username}=req.params;
//     console.log(id);
//     res.send("profile page of user"+ id+" "+username);
// })

// app.get("/profile/:id",(req,res)=>{
//         const {id}=req.params;
//         console.log(id);
//         res.send("profile page of user"+ id);
//     })

// app.listen(3333,()=>{
   
//     console.log("Server is running on port 3333");
// })










//Continue Query Parameters
// let userData=[
//     {
//         id:1,
//         name:"Raghav",
//         adress:"Delhi"
//     },
//     {
//         id:2,
//         name:"Ram",
//         adress:"Faridabad"
//     },
//     {
//         id:3,
//         name:"Sita",
//         adress:"Hisar"
//     }
// ]

// app.get("/allUsers",(req,res)=>{
//     res.send(userData);
// })

// app.get("/oneid_only",(req,res)=>{
//     let {id}=req.query;
//     console.log(id);
//     for(let i=0;i<userData.length;i++){
//         if(userData[i].id==id){
//             return res.send(userData[i]);
//         }
//     }
//     return res.send("NO user found");
    
// })

// app.listen(5675,()=>{
//     console.log("port started");
// })




//Blog data HW
// let BlogData=[
//         {
//             id:1,
//             name:"Raghav",
//             adress:"Delhi",
//             message:"be powerful"
//         },
//         {
//             id:2,
//             name:"Ram",
//             adress:"Faridabad",
//             message:"Live alone"
//         },
//         {
//             id:3,
//             name:"Sita",
//             adress:"Hisar",
//              message:"Love everyone"
//         },
//         {
//             id:4,
//             name:"Param",
//             adress:"Canada",
//              message:"Be pardesi"
//         }
//     ]
    
//     app.get("/Every_Blog_Data",(req,res)=>{
//         res.send(BlogData);
//     })
    
//     app.get("/one_Blogger_Data",(req,res)=>{
//         let {id}=req.query;
//         console.log(id);
//         for(let i=0;i<BlogData.length;i++){
//             if(BlogData[i].id==id){
//                 return res.send(BlogData[i]);
//             }
//         }
//         return res.send("NO user found");
        
//     })
    
//     app.get("/Del_Data",(req,res)=>{
//         let {id}=req.query;
//         console.log(id);
//         for(let i=0;i<BlogData.length;i++)
//        { if(BlogData[i].id==id){
//         BlogData.splice(i,1);
//         return res.send("user deleted");
//        }}
//         res.send("No user");
//     })

//     app.listen(5675,()=>{
//         console.log("port started");
//     })
    





//Add User
//Read id,name,adress
//Make object
//push
// let BlogData=[
//         {
//             id:1,
//             name:"Raghav",
//             adress:"Delhi",
//             message:"be powerful"
//         },
//         {
//             id:2,
//             name:"Ram",
//             adress:"Faridabad",
//             message:"Live alone"
//         },
//         {
//             id:3,
//             name:"Sita",
//             adress:"Hisar",
//              message:"Love everyone"
//         },
//         {
//             id:4,
//             name:"Param",
//             adress:"Canada",
//              message:"Be pardesi"
//         }
//     ]
// app.get("/add_user",(req,res)=>{
//     const {id,name,adress}=req.query;
//     let newUser={
//         id:id,
//         name:name,
//         adress:adress,
//         message:message
// }
// BlogData.push(newUser);
// res.send("user added succesfully");
// })
// app.get("/Every_Blog_Data",(req,res)=>{
//             res.send(BlogData);
//         })
        


// app.listen(5675,()=>{
//             console.log("port started");
//         })




        
// if any request change the state of server then we always use post request
//Data are not visible in url in post request
// using form we can send post request
// post request data stored in request.body