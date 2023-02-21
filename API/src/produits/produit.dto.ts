export interface CreateProduitDTO {
  nom: string;
  description: string;
  qte: number;
  prix: number;
  }
  
  export type UpdateProduitDTO = Partial<CreateProduitDTO>;