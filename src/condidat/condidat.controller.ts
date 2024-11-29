import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CondidatService } from './condidat.service';
import { CreateCandidateDto } from './dto/CreateCandidateDto';

@Controller('condidat')
export class CondidatController {
  // 3malna injection de dependance bech najmo nesta5dmo les fcts elli mawjoudin f condidatService 
  @Inject(CondidatService) condidatSer: CondidatService;

  @Post("add")
  addCondidate(@Body() body: CreateCandidateDto){
    return this.condidatSer.addCondidate(body);
  }

  @Get("all")
  getAllCondidate(){
    return this.condidatSer.findAll();
  }

  @Get("between")
  getCondidatesRecruitedBetween(@Query("startYear" , ParseIntPipe) startYear , @Query("endYear", ParseIntPipe) endYear){
    // sta5demna ParseIntPipe bech nroddo el value mte3 el year int bech najmo ncompariw beha 
    return this.condidatSer.condidatesRecruitedBetween(startYear , endYear)
  }


  // route dynamque ce met en bas pour evitee les conflits
  @Get("getById/:id")
  getCondidatById(@Param('id') condidatid){
    return this.condidatSer.finById(condidatid);
  }

  @Put("update/:id")
  updateCondidat(@Body() updated , @Param("id") id ){
    this.condidatSer.updateCondidate(updated , id) ;
  }
  
  @Delete("delete/:id")
  deleteCondidate( @Param("id") id ){
    return this.condidatSer.deleteCondidateById( id) ;
  }

  
}
  