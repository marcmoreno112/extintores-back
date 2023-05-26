import { Schema, model, Types } from "mongoose";

const extinguisherSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  class: {
    type: Array,
    items: {
      type: String,
    },
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  useful_life: String,
  fire_extinguishing_agent: String,
  description: String,
  disadvantages: String,
  strengths: String,
  user: {
    type: Types.ObjectId,
    ref: "User",
  },
});

const Extinguisher = model("Extintor", extinguisherSchema, "extintores");

export default Extinguisher;
