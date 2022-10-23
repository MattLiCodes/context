## Inspiration
In an age where political bias influences every aspect of the media, it is nearly impossible to distinguish fact from opinion. When we try to educate ourselves about hot issues, our news feeds are inundated by news sources with their own political agendas. How can we make informed decisions about who to vote for when every article provides a slightly skewed take on the topic?

## What it does
Context is a Chrome extension that provides a varied selection of news sources across the political spectrum. Upon opening while in a news article, Context generates a list of other articles on the same topic based on a combination of semantic similarity and keyword matching using the Universal Sentence Encoder model. Context also displays the AllSides media bias rating so users can be aware of the political leanings of their sources. This allows the user to break out of their echo chambers and gain exposure to different viewpoints. 

## How I built it
We used Figma to design the user interface and built the front end using React. In order to collect news articles and search for matching content based on keywords, we used News API. The similarity search is powered by the Universal Sentence Encoder and a pre-trained BERT model. 

## Challenges I ran into
News API posed many problems because of its unpredictably slow loading times. Furthermore, its keyword search constraint was a large limiting factor in the number of articles that were evaluated. 

## Accomplishments that I'm proud of
We were very excited to see Context accurately pull data from the API for the first time. We love to have contributed to creating a more open-minded, balanced society. 

## What's next for Context
This version of Context handles all the vector mapping in the DOM. In the future, we would prefer to move that to the backend or cloud infrastructure. Additionally, we would like to see overall speed improvements. 

