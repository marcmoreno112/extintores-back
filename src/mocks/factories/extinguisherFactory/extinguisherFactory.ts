import { Factory } from "fishery";
import { type ExtinguisherStructure } from "../../../types.js";
import { faker } from "@faker-js/faker";

const extinguisherFactory = Factory.define<ExtinguisherStructure>(() => ({
  user: faker.database.mongodbObjectId().toString(),
  brand: faker.company.name(),
  class: faker.helpers.arrayElements(["A", "B", "C", "D", "K"], {
    min: 1,
    max: 3,
  }),
  description: faker.commerce.productDescription(),
  disadvantages: faker.commerce.productDescription(),
  fireExtinguishingAgent: faker.commerce.productDescription(),
  img: faker.image.url(),
  model: faker.commerce.product(),
  strengths: faker.commerce.productDescription(),
  usefulLife: faker.string.sample(),
}));

export const extinguishersMock = (
  numberOfExtinguishers: number,
  data?: ExtinguisherStructure
) => extinguisherFactory.buildList(numberOfExtinguishers, data);
