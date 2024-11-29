import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Candidate } from './condidat';
import { CreateCandidateDto } from './dto/CreateCandidateDto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CondidatService {
    // tableau statique des condidats 
    allCondidates: Candidate[] = [];

    // fonction bech t'ajouti condidat 
    addCondidate( newCondidat:CreateCandidateDto) {
        // generer cle primaire ou id avec fct uuidv4
        let generatedId = uuidv4();
        const newCandidate = new Candidate(
            generatedId,
            newCondidat.name,
            newCondidat.email,
            newCondidat.skills,
            newCondidat.status,
            newCondidat.recruited,
            newCondidat.recruitmentYear
        );

        // ajoutina condidat jdid f tableau ave push 
        this.allCondidates.push(   newCandidate );

        // l'objet retournee par l'endpoint
        return {message: 'Condidate added successfully',
                generatedId,};
    }

    // fct traja3 les candidat lkoll
    findAll() {
        return this.allCondidates;
      }

    // fct traja3 el condidat by his ID  
    finById(iCondidat) : Candidate{
        // chercher condidat f tableau elli 3ando id == idcondidat
        let searchedCondidat = this.allCondidates.find((element) => element.id == iCondidat);
        
        if (!searchedCondidat)   // si mafamech condidat bel id hedheka
            throw new NotFoundException(`Le condidat avec id : ${iCondidat}  n'existe pas !!!!!`); // bech ndeclanchiw exception
        return searchedCondidat;
    }
  
    updateCondidate(newData , id) {
        // nparcouriw f tableau bech ne5dho indice mte3 el condidat elli 3ando id == idcondidat 
        let i = this.allCondidates.findIndex((element) => element.id == id);
        // ken indice f tableau == -1 raw famech condidat bel id hedheka bech na3mloulo MAJ donc ndeclenchiw erreure
        if (i == -1) 
            throw new NotFoundException(`Le condidat avec id : ${id}  n'existe pas !!!!!`);


        // hedhi cas enno el condidat l9ineh na3mlo MAJ lel condidat bel index mte3o f tableau
        this.allCondidates[i] = {
        id,
        ...newData,
        };
        
    }

    deleteCondidateById(id){
        // ne5dho f indice el condidat f tableau
        let i = this.allCondidates.findIndex((element) => element.id == id);
        // ken famech condidat bel indice hedhika ndeklonshi erreure 
        if (i == -1) 
            throw new NotFoundException(`Le condidat avec id : ${id}  n'existe pas !!!!!`);

        // sion nfas5o mel tableau b fct splice 
        this.allCondidates.splice(i, 1);

        return {
        message: 'Task deleted',
        tab: this.allCondidates,
        };

    }
    
    condidatesRecruitedBetween(startYear, endYear) {
        // nous sommes entrain de filtrer tous les condidats elli sarelhom recrutement mabin [startYear , EndYear ]
        let t = this.allCondidates.filter((condidat) => condidat.recruitmentYear >= startYear && condidat.recruitmentYear <= endYear);
      // objet de retour 
        return {
        nbr : t.length, 
        selectedCondidate: t,
      };
    }


}

