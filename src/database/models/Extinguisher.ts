import { Schema, model } from "mongoose";

const extinguisherSchema = new Schema(
  {
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
    usefulLife: {
      type: String,
      required: true,
    },
    fireExtinguishingAgent: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    disadvantages: {
      type: String,
      required: true,
    },
    strengths: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      ref: "User",
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Extinguisher = model("Extintor", extinguisherSchema, "extintores");

export default Extinguisher;
