export abstract class ViaCepRepository {
  consultAdress: (zipcode: string) => Promise<any>;
}
