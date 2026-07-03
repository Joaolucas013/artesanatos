export interface Artesanato {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  disponivel: boolean;
  quantidade: number;
  dimensoes: string;
  tempoProducao: string;
  fotos: string[];
  material: string;
  cor: string;
  acabamento: string;
  uso: string[];
  ambiente: string[];
  peso?: string;
}
