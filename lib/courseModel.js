import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
  price: Number,
  level: {
  type: String,
  enum: ['beginner','intermediate','advanced','All Levels']
},
  tags: [String],
  userEmail: { type: String }, 
})

export default mongoose.models.Course || mongoose.model('Course', courseSchema)
