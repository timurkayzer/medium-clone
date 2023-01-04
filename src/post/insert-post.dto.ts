import { IsString } from "class-validator";

export class InsertPostDto {
    @IsString()
    title: string;
    @IsString()
    text: string;
}