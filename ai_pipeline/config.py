# LUMIE JEWELS - AI Pipeline Central Configuration
import os
from pathlib import Path

# Paths
BASE_DIR = Path(__file__).resolve().parent
OUTPUT_DIR = BASE_DIR / "output"
OUTPUT_DIR.mkdir(exist_ok=True)

SCREENSHOT_PATH = str(OUTPUT_DIR / "oxidised_grid.png")
POSTER_OUTPUT_PATH = str(OUTPUT_DIR / "daily_poster.jpg")

# Target Website URL
WEBSITE_URL = os.getenv("LUMIE_URL", "http://localhost:8000")

# AI & API Configuration
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "YOUR_GEMINI_API_KEY")

# WhatsApp Broadcast Configuration
WHATSAPP_GROUP_ID = os.getenv("WHATSAPP_GROUP_ID", "LUMIE_JEWELS_VIP")

# Schedule Time (24h IST)
DAILY_SCHEDULE_TIME = "09:00"
