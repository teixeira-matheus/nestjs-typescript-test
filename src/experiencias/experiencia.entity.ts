import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from "../clientes/cliente.entity";
import { Colaborador } from "../colaboradores/colaborador.entity";
import { Loja } from "../lojas/loja.entity";

@Entity()
export class Experiencia {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'lojaId' })
    lojaId: number;
    @ManyToOne(() => Loja, loja => loja.experiencias, { eager: true, cascade: true })
    @JoinColumn({  name: 'lojaId' })
    loja: Loja;

    @Column({ name: 'colaboradorId' })
    colaboradorId: number;
    @ManyToOne(() => Colaborador, colaborador => colaborador.experiencias, { eager: true, cascade: true })
    @JoinColumn({  name: 'colaboradorId' })
    colaborador: Colaborador;

    @Column({ name: 'clienteId' })
    clienteId: number;
    @ManyToOne(() => Cliente, cliente => cliente.experiencias, { eager: true, cascade: true })
    @JoinColumn({  name: 'clienteId' })
    cliente: Cliente;

    @Column({ type: "date" })
    data: Date;

    @Column()
    valor: number;
}