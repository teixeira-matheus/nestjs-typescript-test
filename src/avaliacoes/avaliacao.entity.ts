import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Experiencia } from "../experiencias/experiencia.entity";

@Entity()
export class Avaliacao {
    @PrimaryGeneratedColumn()
    id: number;

    // create experienciaId
    @OneToOne(() => Experiencia)
    @JoinColumn()
    experiencia: Experiencia;

    @Column()
    comentario: string;

    @Column()
    nota: number;
}