import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Experiencia } from "../experiencias/experiencia.entity";

@Entity()
export class Avaliacao {
    @PrimaryGeneratedColumn()
    id: number;

    // create experienciaId
    @Column({ name: 'experienciaId' })
    experienciaId: number;
    @OneToOne(() => Experiencia, { eager: true, cascade: true })
    @JoinColumn({ name: 'experienciaId' })
    experiencia: Experiencia;

    @Column({ nullable: true })
    comentario: string | null;

    @Column()
    nota: number;
}