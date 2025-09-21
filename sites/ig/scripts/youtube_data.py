#!/usr/bin/env python3
"""
Simple YouTube data extraction tool.
Outputs ALL chapters and ALL transcript entries with timestamps.
"""

import sys
import re
import yt_dlp
from youtube_transcript_api import YouTubeTranscriptApi


def extract_video_id(url: str) -> str:
    """Extract video ID from various YouTube URL formats."""
    patterns = [
        r'(?:v=|/)([0-9A-Za-z_-]{11}).*',
        r'(?:embed/)([0-9A-Za-z_-]{11})',
        r'(?:youtu\.be/)([0-9A-Za-z_-]{11})',
        r'^([0-9A-Za-z_-]{11})$'  # Just the ID
    ]

    for pattern in patterns:
        match = re.search(pattern, url)
        if match:
            return match.group(1)
    return None


def format_timestamp(seconds: float) -> str:
    """Convert seconds to HH:MM:SS or MM:SS format."""
    hours = int(seconds // 3600)
    minutes = int((seconds % 3600) // 60)
    secs = int(seconds % 60)

    if hours > 0:
        return f"{hours}:{minutes:02d}:{secs:02d}"
    else:
        return f"{minutes}:{secs:02d}"


def main():
    """Main function - output ALL the raw data."""
    if len(sys.argv) < 2:
        print("Usage: python youtube_data.py <youtube_url_or_id>")
        sys.exit(1)

    url = sys.argv[1]
    video_id = extract_video_id(url)

    if not video_id:
        print(f"Error: Could not extract video ID from: {url}")
        sys.exit(1)

    print(f"Video ID: {video_id}")
    print("=" * 60)

    # Get basic video info
    try:
        with yt_dlp.YoutubeDL({'quiet': True}) as ydl:
            info = ydl.extract_info(f"https://www.youtube.com/watch?v={video_id}", download=False)
            print(f"Title: {info.get('title', 'Unknown')}")
            print(f"Duration: {format_timestamp(info.get('duration', 0))}")
            print(f"Uploader: {info.get('uploader', 'Unknown')}")
    except Exception as e:
        print(f"Error fetching video info: {e}")

    print("\n" + "=" * 60)

    # Get ALL chapters
    try:
        with yt_dlp.YoutubeDL({'quiet': True}) as ydl:
            info = ydl.extract_info(f"https://www.youtube.com/watch?v={video_id}", download=False)

            print(f"\nCHAPTERS:")
            print("-" * 40)

            if 'chapters' in info and info['chapters']:
                for i, chapter in enumerate(info['chapters']):
                    start_time = chapter.get('start_time', 0)
                    title = chapter.get('title', 'Untitled')
                    time_str = format_timestamp(start_time)
                    print(f"{i+1:2d}. [{time_str}] ({int(start_time)}s) {title}")
            else:
                print("No chapters found")
    except Exception as e:
        print(f"Error fetching chapters: {e}")

    print("\n" + "=" * 60)

    # Get ALL transcript entries
    try:
        api = YouTubeTranscriptApi()
        transcript_data = api.fetch(video_id, languages=['de', 'en'])

        print(f"\nTRANSCRIPT:")
        print("-" * 40)

        for item in transcript_data:
            start = item.start if hasattr(item, 'start') else item['start']
            text = item.text if hasattr(item, 'text') else item['text']
            time_str = format_timestamp(start)
            print(f"[{time_str}] ({int(start)}s) {text}")

    except Exception as e:
        print(f"Error fetching transcript: {e}")


if __name__ == "__main__":
    main()