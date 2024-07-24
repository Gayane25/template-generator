export type LayoutType = 'signatureLayout' | 'pageLayout';

export interface ITemplate {
  img?:string;
  name?:string;
  title?:string;
  description?:string;
  links?:URL[];
}

export interface IPageTemplate extends ITemplate {
  category?:string;
  author?:string;
  date?: Date | string;
  view?:number;
}
