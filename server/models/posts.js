const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostsSchema = new Schema(
  {content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
  },
    {timestaps:true}
);

module.exports= mongoose.model('posts', PostsSchema);
