
export interface ApiResponse {
  errorCode : string,
  status : string,
  message :string,
  payload:any,
  result:{ payload :any}
  total:string
}
