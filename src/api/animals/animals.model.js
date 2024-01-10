import { Schema, model } from 'mongoose';

const { ObjectId } = Schema.Types;

const animalsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
    enum: ['dog', 'cat', 'hamster', 'racoon', 'rabbit', 'lizard', 'parrot']
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'unknown']
  },
  birth: {
    type: String,
    required: true,
  },
  chipNumber: {
    type: String,
    required: false,
    unique: true,
  },
  clientId: {
    type: ObjectId,
    ref: 'Client',
  },
});

const animalModel = model('Animal', animalsSchema);
export default animalModel;
