import pool from "../database/pg.js"

const getPostLikeme = async (req, res)=>{
   try{
    const query = "SELECT * FROM POSTS;"
    const result =  await pool.query(query)
    res.status(200).json(result.rows)
   }catch(error){
        res.status(500).send(error.message)
   }
}


const addPostLikeme = async (req, res)=>{
    try{    
        const {titulo, descripcion, img} = req.body
        if(!titulo || !descripcion || !img){
           return  res.status(404).json({mensaje: 'Todos los campos son requeridos'})
        }
        const query = "INSERT INTO POSTS (titulo, descripcion, img, likes) values ($1, $2, $3, $4);"
        const result = await pool.query(query, [titulo, descripcion, img, 0]) 
        res.status(200).json({mensaje: 'Post Agregado'})
    }catch(error){
        res.status(500).send(error.message)
    }
}


const deletePostLikeme = async (req, res)=>{
    try{    
        const {id} = req.params
        const query = "DELETE FROM posts where id = $1;"
        const result = await pool.query(query, [id]) 
        if(result.rowCount === 0){
            return res.status(404).json({mensaje: 'Post no encontrado'})
        }
        res.status(200).json({mensaje: 'Post Eliminado'})
    }catch(error){
        res.status(500).send(error.message)
    }
}

const updatePostLikeme = async (req, res)=>{
    try{    
        const {id} = req.params
        const {titulo, descripcion, img} = req.body
        if(!titulo || !descripcion || !img){
            return  res.status(404).json({mensaje: 'Todos los campos son requeridos'})
         }
        const query = "UPDATE posts SET titulo = $1, descripcion = $2, img = $3, likes = $4 where id = $5;"
        const result = await pool.query(query, [titulo, descripcion, img, 0, id]) 
        if(result.rowCount === 0){
            return res.status(404).json({mensaje: 'Post no encontrado'})
        }
        res.status(200).json({mensaje: 'Post Actualizado'})
    }catch(error){
        res.status(500).send(error.message)
    }
}


export {
    getPostLikeme,
    addPostLikeme,
    deletePostLikeme,
    updatePostLikeme
}