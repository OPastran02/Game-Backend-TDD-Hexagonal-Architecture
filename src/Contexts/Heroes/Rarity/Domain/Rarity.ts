import { Name } from './value-object/Name';
import { Description } from './value-object/Description';
import { Avatar } from './value-object/Avatar';


export class Rarity {
  id: number;
  name: string;
  description: string;
  avatar:      string;   
  created_at:  Date; 

  constructor(
    _id: number,
    _name: string,
    _description: string,
    _avatar: string,
    _created_at: Date,
  ) {
    this.id = _id;
    this.name = new Name(_name).getValue();
    this.description = new Description(_description).getValue();
    this.avatar = new Avatar(_avatar).getValue();
    this.created_at = _created_at;
  }
}