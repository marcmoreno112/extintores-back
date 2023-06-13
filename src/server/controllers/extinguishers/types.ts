import {
  type TestRequest,
  type ExtinguisherStructure,
  type ExtinguisherData,
} from "../../../types";

export interface CreateRequest extends TestRequest {
  body: { extinguisher: ExtinguisherStructure };
}

export interface UpdateRequest extends TestRequest {
  body: { extinguisher: ExtinguisherData };
}

export interface GetRequest extends Request {
  query: { loadNumber?: number };
}
