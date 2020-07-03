import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cliente } from "../clientes/cliente.entity";
import { Colaborador } from "../colaboradores/colaborador.entity";
import { Loja } from "../lojas/loja.entity";

@Entity()
export class Experiencia {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Loja, loja => loja.experiencias, { eager: true })
    loja: Loja;

    @ManyToOne(() => Colaborador, colaborador => colaborador.experiencias, { eager: true })
    colaborador: Colaborador;

    @ManyToOne(() => Cliente, cliente => cliente.experiencias, { eager: true })
    cliente: Cliente;

    @Column({ type: "date" })
    data: Date;

    @Column()
    valor: number;
}