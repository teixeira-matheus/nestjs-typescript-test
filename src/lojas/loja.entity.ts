import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Experiencia } from "../experiencias/experiencia.entity";

@Entity()
export class Loja {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @OneToMany(() => Experiencia, experiencia => experiencia.loja)
    experiencias: Experiencia[];
}