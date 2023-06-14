import { Name } from './value-object/Name';
import { Description } from './value-object/Description';

export class Type {
  id: number;
  name: string;
  description: string;

  constructor(
    _id: number,
    _name: string,
    _description: string,
  ) {
    this.id = _id;
    this.name = new Name(_name).getValue();
    this.description = new Description(_description).getValue();
  }
}