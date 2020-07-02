import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Experiencia } from "../experiencias/experiencia.entity";

@Entity()
export class Colaborador {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    status: boolean;

    @OneToMany(() => Experiencia, experiencia => experiencia.colaborador)
    experiencias: Experiencia[];
}