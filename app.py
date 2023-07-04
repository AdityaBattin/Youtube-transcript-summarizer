from flask import Flask, request, jsonify
from youtube_transcript_api import YouTubeTranscriptApi
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lex_rank import LexRankSummarizer
import datetime
import requests

app = Flask(__name__)
timestamp = None

@app.route('/summary')
def summary_api():
    global timestamp
    if timestamp is None:
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    url = request.args.get('url', '')
    video_id = url.split('=')[1]
    transcript = get_transcript(video_id)
    if transcript is None:
        return jsonify({'error': 'Video transcript is not available or not in English.'})
    summary = get_summary(transcript)
    title = get_title(video_id)
    response = {
        'title': title,
        'summary': summary,
        'timestamp': timestamp
    }
    return jsonify(response)

def get_transcript(video_id):
    try:
        transcript_list = YouTubeTranscriptApi.get_transcript(video_id)
        transcript = ' '.join([d['text'] for d in transcript_list])
        return transcript
    except Exception as e:
        print(f"Error fetching transcript: {str(e)}")
        return None

def get_summary(transcript):
    parser = PlaintextParser.from_string(transcript, Tokenizer("english"))
    summarizer = LexRankSummarizer()
    summary = summarizer(parser.document, sentences_count=5)
    return ' '.join([str(sentence) for sentence in summary])

def get_title(video_id):
    url = f"https://www.youtube.com/watch?v={video_id}"
    response = requests.get(url)
    title = None
    if response.status_code == 200:
        start_index = response.text.find("<title>") + len("<title>")
        end_index = response.text.find("</title>")
        if start_index != -1 and end_index != -1:
            title = response.text[start_index:end_index]
    return title

if __name__ == '__main__':
    app.run()



