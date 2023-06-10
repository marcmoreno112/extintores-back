import { type TestRequest, type ExtinguisherStructure } from "../../../types";

export interface CreateRequest extends TestRequest {
  body: { extinguisher: ExtinguisherStructure };
}

export interface GetRequest extends Request {
  query: { loadNumber?: number };
}
