"""
Master Pipeline Orchestrator & Daily Scheduler
Coordinates screenshot capture, Vision AI analysis, poster synthesis, and WhatsApp dispatch.
"""
import time
import schedule
import sys
from pathlib import Path

# Ensure UTF-8 output encoding for Windows terminals
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

# Add current folder to path
sys.path.append(str(Path(__file__).resolve().parent))

from config import WEBSITE_URL, DAILY_SCHEDULE_TIME
from 1_capture_screenshot import capture_catalog_screenshot
from 2_vision_prompt_engine import generate_poster_prompt_from_vision
from 3_generate_poster import render_branded_poster
from 4_whatsapp_dispatcher import send_whatsapp_broadcast

def execute_daily_pipeline(test_mode: bool = True):
    print("\n========================================================")
    print("  LUMIE JEWELS - DAILY AI POSTER & WHATSAPP PIPELINE    ")
    print("========================================================\n")
    
    start_time = time.time()
    
    # Step 1: Capture Website Screenshot
    screenshot_path = capture_catalog_screenshot(url=WEBSITE_URL)
    
    # Step 2: Vision AI Analysis & Prompting
    prompt_text = generate_poster_prompt_from_vision(image_path=screenshot_path)
    
    # Step 3: Poster Artwork Synthesis
    poster_path = render_branded_poster(prompt_text=prompt_text)
    
    # Step 4: Dispatch to WhatsApp
    send_whatsapp_broadcast(image_path=poster_path, test_mode=test_mode)
    
    elapsed = time.time() - start_time
    print(f"\n[+] Full AI Pipeline executed successfully in {elapsed:.2f} seconds.")
    print("========================================================\n")

if __name__ == "__main__":
    test_run = True
    if "--live" in sys.argv:
        test_run = False
        
    # Run once immediately on startup
    execute_daily_pipeline(test_mode=test_run)
    
    # If called with --once (e.g. from GitHub Actions), exit cleanly
    if "--once" in sys.argv:
        print("[+] Single execution mode complete. Exiting.")
        sys.exit(0)
    
    print(f"[*] Scheduler activated. Waiting to execute daily at {DAILY_SCHEDULE_TIME} IST...")
    schedule.every().day.at(DAILY_SCHEDULE_TIME).do(execute_daily_pipeline, test_mode=test_run)
    
    try:
        while True:
            schedule.run_pending()
            time.sleep(30)
    except KeyboardInterrupt:
        print("\n[*] Scheduler stopped by user.")
