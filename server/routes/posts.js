const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Routes
router.get('/', async (req, res) => {
    try {
        let posts = await Post.find();
        res.status(201).json(posts);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const post = new Post({
        content: req.body.content
    });

    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

router.get('/:id', getPost, async (req,res) => {
    res.json(res.post);
});

router.delete('/:id', getPost, async (req, res) => {
    try {
        await res.post.remove();
        res.json({message: 'Deleted post'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.patch('/:id', getPost, async (req, res) => {
   if (req.body.content != null) {
       res.post.content = req.body.content
   }
    try {
       const updatedPost = await res.post.save();
       res.json(updatedPost)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
});

// Helper Middleware Function
async function getPost(req, res, next) {
    let post
    try {
        post = await Post.findById(req.params.id)
        if (post == null) {
            return res.status(404).json({message: 'Cannot find post'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }

    res.post = post
    next()
}

module.exports = router;
