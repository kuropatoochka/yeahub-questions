import { IQuestion } from "@/entities/question/model/types.ts";

export interface QuestionsResponse {
  data: IQuestion[];
  total: number;
  page: number;
  limit: number;
}
