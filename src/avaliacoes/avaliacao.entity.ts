import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Avaliacao {
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
}