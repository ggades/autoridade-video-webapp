
![Autoridade Fitness](https://i.imgur.com/elFSvMM.png "Autoridade Fitness")

# Autoridade Fitness Hub

A small application that fetch and show all YouTube videos from Autoridade Fitness channel*.

https://ggades.github.io/autoridade-video-webapp/


<sup>***_Due to API errors/permissions to get videos from Autoridade Fitness, the default channel set in the source is PewDiePie._**</sup>

##

Install dependencies:


`npm i`


Compile application & run local server:


`npm run dev`



Compile application to production:


`npm run build`


<sup>_Production build will be stored in **/release** folder._</sup>


## Options

`?channel={CHANNEL_NAME}`

Fetch videos from a specific channel aside from Autoridade Fitness.

`?q={SEARCH}`

Search videos in the channel.


<sup>Note: all searches are limited to 50 results due to Google API limits.</sup>


## Made with

* [ReactJS](https://facebook.github.io/react/)


* [Webpack](https://webpack.github.io/)


* [ESLint docs](http://eslint.org/)


* [Babel transpiler](https://babeljs.io/)


* [YouTube Data API v3](https://developers.google.com/youtube/v3/docs/)
