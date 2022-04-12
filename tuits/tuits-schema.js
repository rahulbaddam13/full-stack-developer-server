import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  dislikes: Number,
  topic :String,
  handle:String,
  time:String,
  postedBy: {
    username: String
  }


}, {collection: 'tuits'});
export default schema;