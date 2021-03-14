

export const Constant = {
  BASE_URL: "https://api.nytimes.com/svc/",
  TOP_STORIES: "topstories/v2/home.json?",
  MOST_POPULAR: "mostpopular/v2/emailed/7.json?",
  API_KEY: "iyWxR90SJ62RWhcJp5qJFcpMSTerxWz0"
}

const placeholderImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDsfRCwQvpsd4O5b6IK9evG9H1PTxZLoI6ew5iVnlz3ftQjMBQ";


class Article {
  constructor(obj) {
    this.title = obj.title;
    this.abstract = obj.abstract;
    this.url = obj.url;
    this.section = obj.section;
    this.date = obj.published_date;
    if(obj.media) {
      const media = obj.media[0];
      this.img = media ? media["media-metadata"][0].url : placeholderImg
    } else if (obj.multimedia) {
      this.img = obj.multimedia[0].url
    } else {
      this.img = placeholderImg
    }
  }
}

export class Request {
  constructor(api) {
    this.url = `${Constant.BASE_URL}${api}api-key=${Constant.API_KEY}`
  }
  get = () => {
    return new Promise((onSuccess, onFailure) => {
      fetch(this.url)
      .then((response) => 
        response.ok && response.json()
      )
      .then((data) => {
        onSuccess(data.results.map((result, index) => new Article(result)))
        console.log(data.results);
      })
      .catch(err => onFailure(err))
    })
  }
}