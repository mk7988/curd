import express from 'express'
const app = express()
import {join} from 'path'
const port = process.env.PORT ||'7000'
import userRoutes from './routes/userRoute.js'
// import fileRoute from './routes/userRoute.js'
import cors from 'cors'
import bodyParser from 'body-parser'


//static files
// console.log(join(process.cwd(),'public'))




// app.use(express.static(join(process.cwd(),'public')))
// console.log(join(process.cwd(),'public'))

// import imageUpload from './routes/imageRoute.js'

app.use(cors())

app.use(express.json())

app.use(bodyParser.json());



app.use(express.static('public') );

// app.use(express.static('public')); 
// app.use(express.static('assets')); 

// app.use('/assets', express.static('assets'));

// app.use('/static', express.static('public'))






app.use( userRoutes );

//app.use('/public',fileRoute)


// app.use(express.static('public')); 
// app.use('/images', express.static('images'));

// app.use("/assets", express.static("assets"));
 





app.listen(port,()=>{
    console.log("Listenig at 7000 port");
}) 





















































// const imageUploadPath = '/home/itx/Desktop/blog_crud/backend/uploaded_files';
// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, imageUploadPath)
//   },
//   filename: function(req, file, cb) {
//     cb(null, `${file.fieldname}_dateVal_${Date.now()}_${file.originalname}`)
//   }
// })

// const imageUpload = multer({storage: storage})



// app.post('/image-upload',imageUpload.array("my-image-file"), (req, res) => {
//   console.log('POST request received to /image-upload.');
//   console.log('Axios POST body: ', req.body);
//   res.send({message:"okkk..."});
// })



// const imageUploadPath = '/home/itx/Desktop/blog_crud/backend/upload';

// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, imageUploadPath)
//   },
//   filename: function(req, file, cb) {
//     cb(null, `${file.fieldname}_dateVal_${Date.now()}_${file.originalname}`)
//   }
// })
// const imageUpload = multer({storage: storage},(req,res)=>{
//     res.send({message:"okkk..."})
// })



//Routes
// app.use('/api/crud',userRoutes)
// app.use('/image-upload/',imageUpload.single("my-image-file"))


// app.post( '/image-upload', (req, res ) => {
//   console.log('jsn here -------------------------------');
//   console.log( req.body );
// });

/*

app.post('/image-upload',imageUpload.array("my-image-file"), (req, res) => {
  if (!req.file) {
    console.log("No file upload");
} else {
    console.log(req.file.filename)
    const imgsrc = 'http://localhost:5000/image-upload' + req.file.filename
    const insertData = `INSERT INTO blog  (/home/itx/Desktop/blog_crud/backend/uploaded_files) VALUES('${imgsrc.image}')`
    db.query(insertData, [imgsrc], (err, result) => {
        if (err) throw err
        console.log("file uploaded")
    })
}
});
*/






// app.use('/api/blog',userRoutes)



// import Image from '../Image.js'


// let name = Image.upload( file );









//testing
// customMysql.connect();


//db connection
// customMysql.dbMysql()


// db.connect()


//user data
// customMysql.fromTable('users').select(['name']);





// retrieve
// con.query("select * from abcd ",(err,result)=>{  
//     console.log("result",result)
// })






//sql joins ---inner joins














// let response   = mysql.userTable([ 'name', 'age']).from('users');


// table: messages
// column: is_seen

// message = '';
// message.is_seen = 1;

// message.markAsSeen();


// 'select name,age from tablename';

// const read = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
// import read from 'readline'createInterface({
//   input: process.stdin,
//       output: process.stdout
// })

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });



// rl.on("close",function(){
//   console.log("\nExecuted")
//   process.exit(0)
// })








//retrieve
// con.query("select * from formdata ",(err,result)=>{  
//     console.log("result",result)
// })

// con.query("select * from registration ",(err,result)=>{
//     console.log("result",result)
// })
// con.query("select * from login ",(err,result)=>{
//     console.log("result",result)
// })


//insert
// const sql = "INSERT INTO registration (fname,lname) VALUES ('ABC' , 'XYZ')"


// readline.question('Who are you?', name => {
//     console.log(`Hey there ${name}!`);
//     readline.close();
//   });








// rl.question("whats your name", function(name){
//   rl.question("where dou u live",function(country){
//     console.log(`${name},is a citizen of ${country}`)
//   })
// })


