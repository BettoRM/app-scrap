import { IRequestList } from './IRequest';

export interface IForm {
  confirmChange: (data: any) => void;
  viewModal: () => void;
  cancelData: () => void;
  queryData: (data: IRequestList) => void;
  queryIndividualData: (data: any) => void;
  filterData: (data: string) => void;
  saveData: () => void;
}
