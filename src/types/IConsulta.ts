import IProfissionl from "./IProfissional";

export default interface IConsulta extends IProfissionl{
    id: number;
    data: string;
    horario: string;
    profissional: Array<IProfissionl>;
    paciente: string;
    modalidade: string;
}