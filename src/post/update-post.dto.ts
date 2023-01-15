import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdatePostDto {
    @IsNumber()
    id: number;
    @IsString()
    @IsOptional()
    title: string;
    @IsString()
    @IsOptional()
    text: string;
    @IsNumber()
    @IsOptional()
    readTime: number;
    @IsDate()
    @IsOptional()
    createdAt: Date;
}