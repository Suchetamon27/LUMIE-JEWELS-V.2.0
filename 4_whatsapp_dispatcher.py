"""
Module 4: Automated WhatsApp Broadcast Dispatcher
Formats daily promotion captions and sends poster images to target WhatsApp groups/subscribers.
"""
import sys
import os

# Ensure UTF-8 output encoding for Windows terminals
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

from config import WHATSAPP_GROUP_ID, POSTER_OUTPUT_PATH, WEBSITE_URL

def send_whatsapp_broadcast(image_path: str = POSTER_OUTPUT_PATH, group_id: str = WHATSAPP_GROUP_ID, test_mode: bool = True):
    print(f"[*] Preparing WhatsApp payload for broadcast group '{group_id}'...")
    
    caption = (
        "⚜️ *LUMIE JEWELS - Daily Collection Launch* ⚜️\n\n"
        "Discover our newly launched *Virasat Oxidised Silver Collection*!\n"
        "Handcrafted 925 Sterling Silver Jhumkas, Hasli Chokers & Tribal Kadas.\n\n"
        "✨ *Purity Promise:* 100% Certified 925 Hallmarked Silver\n"
        f"🔗 *Explore Catalog:* {WEBSITE_URL}\n"
        "📞 *Toll-Free Concierge:* 1800 123 456\n\n"
        "_Unsubscribe: Reply STOP_"
    )
    
    print("--- Broadcast Payload Preview ---")
    print(f"Image: {image_path}")
    print(f"Caption:\n{caption}")
    print("---------------------------------")
    
    if test_mode:
        print("[+] Test Mode Active: Message formatted successfully (PyWhatKit trigger ready).")
        return True
        
    try:
        import pywhatkit as pwk
        print(f"[*] Triggering WhatsApp Web automation for group '{group_id}'...")
        pwk.sendwhats_image_to_group(
            group_id=group_id,
            image_path=image_path,
            caption=caption,
            wait_time=15
        )
        print("[+] WhatsApp broadcast sent successfully!")
        return True
    except Exception as e:
        print(f"[!] PyWhatKit error: {e}")
        return False

if __name__ == "__main__":
    send_whatsapp_broadcast(test_mode=True)
