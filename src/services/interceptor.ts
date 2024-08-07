import 'axios';
import axios, { AxiosResponse } from 'axios';

///Для работы с серверной частью 
export default class Interceptor {
    constructor() {}
    initialUrl: string = 'https://randomuser.me/api/';
    //создает настраиваемый axios
    http = axios.create();

    async getData(path : string){
        var response = await this.http.get(this.initialUrl + path)
        return response;
    }

    async postData(path : string){
        var response = await this.http.post(this.initialUrl + path)
        return response;
    }
  }


   