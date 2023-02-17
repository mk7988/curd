import express from 'express'
const router = express.Router()
import { getBlogs,createDoc ,updateDoc, storeBlog } from '../controllers/userController.js'
import multer from 'multer'
import {join} from 'path'




router.post('/create',createDoc)
// router.post('/image',imageDoc)

router.put('/update/:id',updateDoc)





const imageUploadPath = '/home/itx/Desktop/blog_crud/backend/public/assets';
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, imageUploadPath)
  },
  filename: function(req, file, cb) {
    cb(null, `${file.fieldname}_dateVal_${Date.now()}_${file.originalname}`)
  }
})

const upload = multer({storage: storage})
router.post('/api/blog', upload.single('image'), (req,res) =>{  
    console.log("image....",req.file)


    let details  = { ...req.body, image: req.file };
    let response = storeBlog(details);
})




router.get('/api/blog/get',getBlogs)


router.get('/images',(req,res)=>{
    res.sendFile(join(process.cwd(),'views','index.html'))
} )



export default router