// import mysql from 'mysql'



// const customMysql = {

// connect: () => 
//   console.log('hi i am connected'),


// dbMysql : () => {   

//    //dbconnection

//     var con = mysql.createConnection({
//         host:"localhost",
//         user:"admin",
//         password:"redhat",
//         database:"students"   
//     });
    
    
//       con.connect(function(error){
//         if(error) throw error;
//         console.log("Cooonected with mysql")
//       });


      

// }


//  fromTable : () =>    {   
       
       
//        con.query('select * from users',(err,result)=>{
//          console.log("result",result)
//        })

//       }


// }





// export default customMysql




/* class customMysql{

    connec

    //dbconnection
    static dbMySql = async () =>{
        const con = mysql.createConnection({
            host:"localhost",
            user:"admin",
            password:"redhat",
            database:"students"   
        });
        
        
          await con.connect(function(error){
            if(error) throw error;
            console.log("Cooonected with mysql")
          });

    }

        
    //usertable
    static userTable = async() =>{
    let con;
    await con.query('select * from users',(err,result)=>{
      console.log("result",result)
    })
  }  
  
} */










//from classinstance

// class customMysql {

//   connect() {
//     console.log('Hello I am connnected from class');
//   }
// }



// const customMysqlInstance = new customMysql;

// export default customMysqlInstance;
