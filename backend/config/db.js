import mysql from 'mysql'




const db = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"redhat",
    database:"students"   
});


db.connect(function(error){
  if(error) throw error;
  console.log("Connected with mysql")
});



export default db