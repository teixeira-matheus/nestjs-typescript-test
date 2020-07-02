import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Experiencia } from "../experiencias/experiencia.entity";

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cpf: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    telefone: number;

    @OneToMany(() => Experiencia, experiencia => experiencia.cliente)
    experiencias: Experiencia[];
}