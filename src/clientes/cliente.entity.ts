import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Experiencia } from "../experiencias/experiencia.entity";

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cpf: string;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    telefone: number;

    @Column()
    ativo: boolean;

    @OneToMany(() => Experiencia, experiencia => experiencia.cliente)
    experiencias: Experiencia[];
}