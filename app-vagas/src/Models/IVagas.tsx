import { TipoDeVaga, StatusVaga, Semestre, Curso } from "./Entidades";

export interface IVaga {
    ID_Vaga: number;
    Timestamp: Date;
    cursoVaga: Curso;
    descricaoVaga: string;
    quantidadeVaga: number;
    semestreVaga:   Semestre;
    statusVaga: StatusVaga;
    tipoVaga:   TipoDeVaga;
    tituloVaga: string;
}