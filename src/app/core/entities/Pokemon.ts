export class Pokemon {
  private id: number;
  private image: string;
  private name: string;
  private type: string;
  private height: number;
  private weight: number;

  constructor(
    id: number,
    image: string,
    name: string,
    type: string,
    height: number,
    weight: number
  ) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.type = type;
    this.height = height;
    this.weight = weight;
  }

  getData() {
    return {
      id: this.id,
      image: this.image,
      name: this.name,
      type: this.type,
      height: this.height,
      weight: this.weight,
    };
  }

  saludar() {
    return this.name;
  }
}
