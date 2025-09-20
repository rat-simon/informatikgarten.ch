#!/usr/bin/env python3
import sys
import re
from youtube_transcript_api import YouTubeTranscriptApi

def extract_video_id(url):
    """Extract video ID from YouTube URL"""
    patterns = [
        r'(?:v=|\/)([0-9A-Za-z_-]{11}).*',
        r'(?:embed\/)([0-9A-Za-z_-]{11})',
        r'(?:youtu\.be\/)([0-9A-Za-z_-]{11})'
    ]

    for pattern in patterns:
        match = re.search(pattern, url)
        if match:
            return match.group(1)
    return None

def get_transcript(video_id, languages=['de', 'en']):
    """Get transcript for a video, trying multiple languages"""
    try:
        # Create instance of YouTubeTranscriptApi
        api = YouTubeTranscriptApi()

        # Try to fetch transcript with preferred languages
        transcript = api.fetch(video_id, languages=languages)

        print(f"Successfully extracted transcript in language: {transcript.language}")

        # Convert to text format
        text_lines = []
        for entry in transcript:
            text_lines.append(entry.text)

        return ' '.join(text_lines)

    except Exception as e:
        print(f"Error fetching transcript: {str(e)}")
        return None

def main():
    if len(sys.argv) < 2:
        print("Usage: python youtube_transcript.py <youtube_url>")
        sys.exit(1)

    url = sys.argv[1]
    video_id = extract_video_id(url)

    if not video_id:
        print(f"Could not extract video ID from URL: {url}")
        sys.exit(1)

    print(f"Video ID: {video_id}")
    print("-" * 50)

    transcript = get_transcript(video_id)

    if transcript:
        print("\nTranscript:")
        print("-" * 50)
        print(transcript)
    else:
        print("Failed to extract transcript")
        sys.exit(1)

if __name__ == "__main__":
    main()