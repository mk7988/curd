import db from "../config/db.js"


export const createDoc = (req,res) =>{

    
    
    const data = req.body
    console.log(data)

    // store image 



    
    let dbquery = `INSERT INTO blog (title, description) VALUES ( '${data.title}', '${data.description}')`;


    db.query( dbquery, ( err, result) => {
        console.log('error ', err );
        console.log( 'result', result );
    });

    // db.query("insert INTO blog SET ? ",data,(error,result,fields)=>{
    //     if(error) error
    //     console.log('jsn here');
    //     console.log( result );
    //     res.send(result)
    // })

}


export const updateDoc = (req,res) =>{
    console.log("updating")
    // const data = ["tony",'12',2]
    const data = [req.body.title,req.body.description,req.params.id]
    db.query("UPDATE blog SET title = ? , description = ? where id = ? ", data,(error,result)=>{
        if(error) error
        res.send(result)
    })
}




//storing blog

export const storeBlog = ( details ) => {
    console.log( 'this is details');
    console.log(details)

    let dbquery = `INSERT INTO blog (title, description,image) VALUES ( "${details.title}", "${details.description}", "${details.image.filename}")`;
    // let dbquery = "INSERT INTO `blog`  (`title`, `description`,`image`) VALUES ( " + title + "," + description + ", " + image + ")";
    // let dbquery = "INSERT INTO `blog`  (`title`, `description`,`image`) VALUES ( ` + "`${details.title}`" + , + " `${details.description}`"+" , " + "${details.image.originalname}" + `)";
    // let dbquery = "INSERT INTO `blog`  (`title`, `description`,`image`) VALUES ( " + `${details.title}` + "," + `${details.description}` + ", " + `${details.image.originalname}` + ")";
    // let dbquery = `INSERT INTO blog (title, description,image) VALUES ("  '${details.title}'  ", "  '${details.description}'   ", "  '${details.image.originalname}'  ")`;




    console.log("query",dbquery );
    db.query( dbquery, ( err, result) => {
        console.log('error ', err );
        console.log( 'result ....', result );
    });

}


//Getting blog

export const getBlogs = (req,res) =>  {
    
    db.query("select * from blog",(err,result)=>{
        if(err){
            res.send("error")
        }else{
            res.send(result)
        }
    })
}