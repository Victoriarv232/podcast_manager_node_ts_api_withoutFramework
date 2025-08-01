import { PodcastTransferModel } from "../models/podcast_transferModel";
import { repositoryPodcast } from "../repositories/podcasts_repository";
import { StatusCode } from "../utils/status_code";

export const serviceListEpisodes = async () => {

    //Define contract
    let responseFormat : PodcastTransferModel = {
            statusCode: 0,
            body: [],
        };
      
    //Search for data
    const data = await repositoryPodcast();

    //Verify content
    responseFormat= {
        statusCode: data.length !== 0? StatusCode.OK : StatusCode.NoContent,
        body: data,
    };

    return responseFormat;
};