export interface GrandParent {
    kind: string;
    data: Parent;
  }
  
  export interface Parent {
    modhash: string;
    dist: number;
    children: Child[];
    after: string;
    before?: any;
  }
  
  export interface Child {
    kind: string;
    data: Data;
  }
  
   export interface Data {
    
    title: string;
    thumbnail: string;
    permalink: string;
}