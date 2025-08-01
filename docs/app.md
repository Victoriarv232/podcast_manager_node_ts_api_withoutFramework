# Podcast Manager

### Description
An app in Netflix's style which can group different podcasts episodes by their categories

### Domain:
Podcasts made in video format

### Features
- List podcast's episodes on sessions by their categories 
    - Healthiness, 
    - fitness, 
    - mentality, 
    - humor
- Filter episodes by the podcast name

### How to 
- List podcast's episodes on sessions by their categories 
    #### How to implement 
        - GET: Return an REST API (json)
            - Podcast name
            - Episode name
            - Thumbnail
            - link
            -categories
        - RESPONSE

```js
[
{
    podcastName: "flow",
    episodeName: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    thumbnail: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/live/pQSuQmUfS30",
    categories: ["healthiness", "bodybuider", "sport"]
},

{
    podcastName: "flow",
    episodeName: "RUBENS BARRICHELLO - Flow #339",
    videoId: "4KDGTdiOV4I",
    thumbnail: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    link: "https://www.youtube.com/live/4KDGTdiOV4I",
    categories: ["sport", "race"]
},

]
```

- Filter episodes by the podcast name
    #### How to implement 
        - GET: return a list of episodes based on client's input parameters by podcasts name