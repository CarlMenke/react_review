const { Router } = require('express')
const controllers = require('../controllers')
const router = Router();


router.get('/', (req,res)=>res.send('I am G(root)'))

router.get('/allusers',controllers.getAllUsers )

router.post('/newUser/:userName/:password',  controllers.createUser)

router.get('/checkUser/:userName/:password', controllers.checkUser)

router.get('/deleteUser/:id', controllers.deleteUser)

router.get('/updateUser/:id/:newName', controllers.updateUser)

router.get('/newPost/:content/:user_id/:topic_id', controllers.createPost)

router.get('/user/:id', controllers.getUser)

router.get('/recentPosts',controllers.getRecentPosts)

router.get('/getPostIndex', controllers.getPostIndex)

router.get('/resetPostIndex', controllers.resetPostIndex)

router.get('/wipePosts', controllers.wipePosts)

router.get('/deleteUserPost', controllers.deleteUserPosts)

router.get('/posts-by-topic/:topic_id', controllers.getPostByTopic)

router.get('/posts-by-user/:user_id', controllers.getPostByUser)

router.put('/updateUserDiscs/:id', controllers.addDiscToUser)


module.exports = router
