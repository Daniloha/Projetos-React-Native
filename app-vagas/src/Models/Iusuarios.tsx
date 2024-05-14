/**
 * Iusuarios.tsx
 */
export enum TipoDeConta { // ENUMERADOR PARA OS TIPOS DE CONTA
    COMUM = 'Comum',
    ESTUDANTE = 'Estudante',
    ADMINISTRADOR = 'Administrador',
  }

  export enum Semestre { // ENUMERADOR PARA OS SEMESTRES
    PRIMEIRO = 'Primeiro',
    SEGUNDO = 'Segundo',
    TERCEIRO = 'Terceiro',
    QUARTO = 'Quarto',
    QUINTO = 'Quinto',
    SEXTO = 'Sexto',
    SETIMO = 'Setimo',
    OITAVO = 'Octavo',
    NONO = 'Nono',
    DECIMO = 'Decimo',
  }

  export function getSemestre(): string[] {
    return Object.values(Semestre).filter(value => typeof value === 'string') as string[]
  }
  
  export enum Curso {
    ADMINISTRACAO = 'Administração',
    AGRONOMIA = 'Agronomia',
    ANALISE_E_DESENVOLVIMENTO_DE_SISTEMAS = 'Análise e Desenvolvimento de Sistemas',
    ARQUITETURA_E_URBANISMO = 'Arquitetura e Urbanismo',
    BIOLOGIA = 'Biologia',
    CIENCIAS_CONTABEIS = 'Ciências Contábeis',
    CIENCIAS_ECONOMICAS = 'Ciências Econômicas',
    DIREITO = 'Direito',
    EDUCACAO_FISICA = 'Educação Física',
    ENFERMAGEM = 'Enfermagem',
    ENGENHARIA_AMBIENTAL_E_SANITARIA = 'Engenharia Ambiental e Sanitária',
    ENGENHARIA_CIVIL = 'Engenharia Civil',
    ENGENHARIA_DE_PRODUCAO = 'Engenharia de Produção',
    ENGENHARIA_ELETRICA = 'Engenharia Elétrica',
    ENGENHARIA_MECANICA = 'Engenharia Mecânica',
    ENGENHARIA_QUIMICA = 'Engenharia Química',
    ESTETICA_E_COSMETICA = 'Estética e Cosmética',
    FARMACIA = 'Farmácia',
    FISIOTERAPIA = 'Fisioterapia',
    GEOGRAFIA = 'Geografia',
    HISTORIA = 'História',
    LETRAS = 'Letras',
    MARKETING = 'Marketing',
    MATEMATICA = 'Matemática',
    NUTRICAO = 'Nutrição',
    PEDAGOGIA = 'Pedagogia',
    PSICOLOGIA = 'Psicologia',
    PUBLICIDADE_E_PROPAGANDA = 'Publicidade e Propaganda',
    SERVICO_SOCIAL = 'Serviço Social',
  };
  export function getCursos(): string[] {
    return Object.values(Curso).filter(value => typeof value === 'string') as string[];
  }
export interface Usuario {
    id?: number;
    timestamp?: Date;
    nome: string;
    cpf: string;
    tipoConta: TipoDeConta;
    email: string;
    senha: string;
    matricula?: string; // Atributos específicos de Estudante
    curso?: Curso; // Atributos específicos de Estudante
    semestre?: Semestre; // Atributos específicos de Estudante
    codeADMIN?: string; // Atributos específicos de Administrador
  }
  export interface PerfilProps {
    route: {
      params: {
        usuario: Usuario;
      };
    };
  }