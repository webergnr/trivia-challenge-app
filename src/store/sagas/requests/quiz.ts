import axios, { AxiosResponse } from "axios";

interface IApiResultsRequest {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface IApiRequest {
  response_code: number;
  results: IApiResultsRequest[];
}

export interface IResponse extends AxiosResponse {
  data: IApiRequest;
}

export function requestGetQuestions() {
  return axios.request<IApiRequest>({
    method: "get",
    url: "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean",
  });
}
