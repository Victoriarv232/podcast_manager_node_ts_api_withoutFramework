import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from "./controllers/podcasts_controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http_methods";
 
export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

        //queryString
        //http://localhost:3333/api/episode?p=flow
        const baseUrl= request.url?.split("?")[0];
        
        // list episodes
        if(request.method === HttpMethod.GET && baseUrl === Routes.LIST){
            await getListEpisodes(request, response);
        }

        // filter episodes
        if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
            await getFilterEpisodes(request, response);
        }
    }