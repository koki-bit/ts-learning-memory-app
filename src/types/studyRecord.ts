import { Category } from "./category"

export type StudyRecord = {
    id : string;
    title : string;
    category : Category;
    minutes : number;
    memo ?: string;  
};