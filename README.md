# YouTube Transcript Summarizer

The YouTube Transcript Summarizer is a web application that allows you to summarize the transcripts of YouTube videos. It utilizes the YouTube Transcript API and the Sumy library for text summarization.

## Features

- Retrieves the transcript of a YouTube video based on its URL.
- Summarizes the transcript using the LexRank algorithm.
- Displays the video title, summary, and response timestamp on the web page.

## Prerequisites

- Python 3.x
- Flask
- youtube_transcript_api
- sumy

## Getting Started

1. Clone the repository:

```shell
git clone https://github.com/AdityaBattin/Youtube-transcript-summarizer.git

2. Install the required dependencies:

pip install flask youtube_transcript_api sumy


3. Start the Flask server:

python app.py

4. Open the web page in your browser:

http://localhost:5000/summay

5. Enter the URL of the YouTube video you want to summarize and click the "Summarise" button.

## Acknowledgements

- [YouTubeTranscriptAPI](https://github.com/jdepoix/youtube-transcript-api)
- [SumyLibrary](https://github.com/miso-belica/sumy)



Hosting on Render
This application is hosted on Render, a modern cloud provider. You can find the live deployment of the application at the following link:
YouTube Transcript Summarizer on Render

Chrome Extension
We have also developed a Chrome Extension for easy access to the YouTube Transcript Summarizer. You can find and install the extension from the Chrome Extension Store using the link below:
YouTube Transcript Summarizer Chrome Extension


