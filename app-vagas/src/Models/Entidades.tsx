/*
 *                   ENTIDADES
 * 
 *    NESTE FICHEIRO ENCONTRAM-SE AS NOSSAS CLASSES ONDE
 * INSTANCIAMOS E ORGANIZAMOS NOSSAS ENTIDADES (USUARIOS,
 * ADMINISTRADORES, VAGAS, ETC.). UTILIZAMOS OS RECURSOS DO
 * PARADIGMA ORIENTADO A OBJETOS PARA ORGANIZAR NOSSAS CLASSES E
 * MÉTODOS, COMO HERANÇA, POLIMORFISMO, ENCAPSULAMENTO E REUSO.
 * 
* ---------------------------------------------------------------
 *
 *                     ESTRUTURA DO CONTEÚDO
 *
 *      1 - ENUMERADORES
 *      2 - CLASSES
 *          2.1 - ATRIBUTOS
 *            2.1.1 - TIPOS
 *            2.1.2 - ENCAPSULAMENTO 1
 *          2.2 - CONSTRUTORES
 *          2.3 - MÉTODOS
 *      3 - CLASSE VAGAS
 *          3.1 - ENCAPSULAMENTO 2
 *      4 - CLASSE CONTA (MÃE)
 *          4.1 - COMPOSIÇÃO
 *      5 - CLASSE COMUM
 *          5.1 - HERANÇA
 *      6 - CLASSE ESTUDANTE
 *          6.1 - REUSO
 *      7 - CLASSE ADMINISTRADOR
 *          7.1 - POLIMOSFISMO
 *      
 *
 * ---------------------------------------------------------------
 *
 */

/*
 *                    1 - ENUMERADORES
 * 
 *  A FIM DE MELHORAR A ORGANIZAÇÃO DE NOSSAS CLASSES, CRIAMOS 
 * ENUMERADORES COMO 'TYPE' DE ATRIBUTOS QUE JULGAMOS NECESSÁRIO A 
 * UTILIZAÇÃO DESTE RECURSO. OS ENUMERADORES FUNCIONAM COMO UMA 
 * TIPAGEM DE DADOS LIMITADA POR UMA LISTA DE VALORES DETERMINADOS.
 * SERVE PARA RESTRINGIR O QUE PODE SER INTRODUZIDO NAQUELA 
 * VARIÁVEL, ALÉM DE VALIDAR O SEU VALOR DENTRO DA LÓGICA DO 
 * SISTEMA.
 */

export enum TipoDeConta { // ENUMERADOR PARA OS TIPOS DE CONTA
  COMUM = 'Comum',
  ESTUDANTE = 'Estudante',
  ADMINISTRADOR = 'Administrador',
}

export enum TipoDeVaga { // ENUMERADOR PARA OS TIPOS DE VAGA
  ESTAGIO = 'Estágio',
  TRAINEE = 'Trainee',
  EFETIVO = 'Efetivo',
}

export enum StatusVaga { // ENUMERADOR PARA OS STATUS DE VAGA
  DISPONIVEL = 'Disponível',
  INDISPONIVEL = 'Indisponível',
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


/*
 *                    2 - CLASSES
 * 
 *  A FIM DE MELHORAR A ORGANIZAÇÃO DE NOSSAS CLASSES, CRIAMOS 
 * ENUMERADORES COMO 'TYPE' DE ATRIBUTOS QUE JULGAMOS NECESSÁRIO A 
 * UTILIZAÇÃO DESTE RECURSO. OS ENUMERADORES FUNCIONAM COMO UMA 
 * TIPAGEM DE DADOS LIMITADA POR UMA LISTA DE VALORES DETERMINADOS.
 * SERVE PARA RESTRINGIR O QUE PODE SER INTRODUZIDO NAQUELA 
 * VARIÁVEL, ALÉM DE VALIDAR O SEU VALOR DENTRO DA LÓGICA DO 
 * SISTEMA.
 */

export class Vaga {
  idVaga: number;
  tituloVaga: string;
  descricaoVaga: string;
  quantidadeVaga: number;
  cursoVaga: string;
  semestreVaga: string;
  tipoVaga: TipoDeVaga;
  statusVaga: StatusVaga;

  constructor(
    idVaga: number,
    tituloVaga: string,
    descricaoVaga: string,
    quantidadeVaga: number,
    cursoVaga: string,
    semestreVaga: string,
    tipoVaga: TipoDeVaga
  ) {
    this.idVaga = idVaga;
    this.tituloVaga = tituloVaga;
    this.descricaoVaga = descricaoVaga;
    this.quantidadeVaga = quantidadeVaga;
    this.cursoVaga = cursoVaga;
    this.semestreVaga = semestreVaga;
    this.tipoVaga = tipoVaga;
  }
}

export class Conta {
  private _idUsuario!: number;
  private _timestamp!: Date;
  private _datainicial: Date;
  private _tipoConta!: TipoDeConta;
  private _email!: string;
  private _senha!: string;
  vagas: Vaga[] = [];

  get idUsuario(): number { return this._idUsuario; }
  set idUsuario(value: number) { this._idUsuario = value; }

  get datainicial(): Date { return this._datainicial; }
  set datainicial(value: Date) { this._datainicial = value; }

  get timestamp(): Date { return this._timestamp; }
  set timestamp(value: Date) { this._timestamp = value; }

  get tipoConta(): TipoDeConta { return this._tipoConta; }
  set tipoConta(value: TipoDeConta) { this._tipoConta = value; }

  get email(): string { return this._email; }
  set email(value: string) { this._email = value; }

  get senha(): string { return this._senha; }
  set senha(value: string) { this._senha = value; }



  adicionarVaga(vaga: Vaga): void {
    this.vagas.push(vaga);
  }

  removerVaga(vaga: Vaga): void {
    this.vagas = this.vagas.filter((v) => v !== vaga);
  }
}

export class Comum extends Conta {
  private _nome: string;
  private _cpf: string;

  constructor(
    nome: string,
    cpf: string,
    tipoConta: TipoDeConta,
    senha: string,
    email: string,
  ) {
    super();
    this.tipoConta = tipoConta;
    this._nome = nome;
    this.email = email;
    this._cpf = cpf;
    this.senha = senha;
  }

  get nome(): string { return this._nome; }
  set nome(value: string) { this._nome = value; }

  get cpf(): string { return this._cpf; }
  set cpf(value: string) { this._cpf = value; }
}


export class Estudante extends Comum {
  private _matricula: string;
  private _curso: Curso;
  private _semestre: Semestre;

  constructor(
    nome: string,
    cpf: string,
    tipoConta: TipoDeConta,
    senha: string,
    email: string,
    matricula: string,
    curso: Curso,
    semestre: Semestre
  ) {
    super( nome, cpf, tipoConta, senha, email);
    this._matricula = matricula;
    this._curso = curso;
    this._semestre = semestre;
  }
  get matricula(): string { return this._matricula; }
  set matricula(value: string) { this._matricula = value; }

  get curso(): Curso { return this._curso; }
  set curso(value: Curso) { this._curso = value; }

  get semestre(): Semestre { return this._semestre; }
  set semestre(value: Semestre) { this._semestre = value; }
}

export class Administrador extends Conta{
  private _codeADMIN: string;

  get codeADMIN(): string { return this._codeADMIN; }
  set codeADMIN(value: string) { this._codeADMIN = value; }


  constructor(
    codeADMIN: string,
    tipoConta: TipoDeConta,
    email: string,
    senha: string
  ) {
    super();
    this.codeADMIN = codeADMIN;
    this.email = email;
    this.senha = senha;
    this.tipoConta = tipoConta;
  }
  cadastrarVaga(vaga: Vaga): void {
    this.vagas.push(vaga);
  }
  removerVaga (vaga: Vaga): void {
    this.vagas = this.vagas.filter((v) => v !== vaga);
  }
  selecionarVaga(index: number): Vaga | undefined {
    if (index >= 0 && index < this.vagas.length) {
        return this.vagas[index];
    }
    return undefined;
}
}