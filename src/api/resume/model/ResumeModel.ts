export interface BusinessModel {
  company: string;
  job: string;
  period: string;
}

export interface ProjectModel extends Omit<BusinessModel, 'company'> {
  id: string;
  src: string;
  tags: string[];
  name: string;
  description: string;
}
