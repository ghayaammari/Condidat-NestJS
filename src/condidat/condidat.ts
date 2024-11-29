export class Candidate {
    constructor(
    public id: string,
    public name: string,
    public email: string,
    public skills: string[],
    public status: string,
    public recruited: boolean,
    public recruitmentYear: number
) {}

  }
  