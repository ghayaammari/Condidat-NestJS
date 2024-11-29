import { IsEmail, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateIf, IsIn } from 'class-validator';

export class CreateCandidateDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  // validee que le champ est un email valide ( ya3ni yrespecti expression reguliere hedhi <something@somethig.something>)
  email: string;

  @IsString({ each: true })
  // validee enno kol element mel mel tableaux skill howa string 
  skills: string[];
  
  @IsString()
  // validi status enno string
  @IsIn(["En attente", "En entretien","Rejeté", "Accepté"])
  // validi enno status appartien l wa7da mel valeur hedhom ay 7aja o5ra ma yacceptihech 
  status: string;

  @IsBoolean()
  // validi el recruited value est boolean ay 7aja o5ra not accepted
  recruited: boolean;

  @ValidateIf((o) => o.recruited === true)
  // recruitementyear howa champ optionelle 
  // manvalideweh ken kif yabda valeur mte3 recruited hiya true 
  // donc kif n7otto recruited = true wa9tha lezem n7otto el value mte3 el year
  @IsNumber()
  // nvalidiw fel value mte3 el year ennha number
  recruitmentYear: number;
}
