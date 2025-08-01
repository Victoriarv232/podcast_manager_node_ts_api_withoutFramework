import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts_repository";
import { PodcastTransferModel} from "../models/podcast_transferModel";
import { StatusCode } from "../utils/status_code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {
    
    //Define response interface
    let responseFormat : PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };

    //Searching for data
    const queryString = podcastName?.split("?p=")[1] ?? "";
    const data = await repositoryPodcast(queryString);
    
    //Verify content

      responseFormat= {
        statusCode: data.length !== 0? StatusCode.OK : StatusCode.NoContent,
        body: data,
    };
    return responseFormat;
};