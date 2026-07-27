"""
Module 3: Lumie Jewels Master Poster Engine
Serves and exports the official master poster artwork for LUMIE JEWELS.
"""
import os
import shutil
from PIL import Image, ImageDraw
from config import POSTER_OUTPUT_PATH, BASE_DIR

MASTER_POSTER_SOURCE = os.path.join(
    os.path.expanduser("~"),
    ".gemini", "antigravity", "brain",
    "625bc6fe-e393-44d9-ab40-92b22c5fa346", ".user_uploaded",
    "media__1785140154560.jpg"
)

def render_branded_poster(prompt_text: str = "", output_path: str = POSTER_OUTPUT_PATH) -> str:
    print("[*] Exporting official Lumie Jewels master poster artwork...")
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    if os.path.exists(MASTER_POSTER_SOURCE):
        shutil.copy(MASTER_POSTER_SOURCE, output_path)
        print(f"[+] Exact master poster copied successfully to: {output_path}")
    else:
        # High-End PIL Fallback Canvas on Ubuntu Runners
        width, height = 1080, 1080
        img = Image.new("RGB", (width, height), color=(196, 151, 70))
        draw = ImageDraw.Draw(img)
        
        # Header
        draw.text((540, 50), "L U M I E   J E W E L S", fill=(255, 255, 255), anchor="mm")
        draw.text((540, 95), "THE PROMISE OF PURITY • DAILY LAUNCH HIGHLIGHTS", fill=(250, 240, 210), anchor="mm")
        draw.text((540, 145), "VIRASAT OXIDISED SILVER COLLECTION", fill=(255, 255, 255), anchor="mm")
        
        # Product Cards
        draw.rectangle([(110, 200), (490, 480)], fill=(255, 255, 255))
        draw.text((300, 390), "Oxidised Silver Jhumka", fill=(60, 60, 60), anchor="mm")
        draw.text((300, 430), "SPECIAL OFFER ₹18,500", fill=(115, 26, 37), anchor="mm")
        
        draw.rectangle([(590, 200), (970, 480)], fill=(255, 255, 255))
        draw.text((780, 390), "Temple Hasli Choker", fill=(60, 60, 60), anchor="mm")
        draw.text((780, 430), "LAUNCH PRICE ₹42,000", fill=(115, 26, 37), anchor="mm")
        
        # Order Now Pill
        draw.rectangle([(440, 520), (640, 570)], fill=(255, 255, 255), outline=(24, 32, 54), width=3)
        draw.text((540, 545), "ORDER NOW.", fill=(24, 32, 54), anchor="mm")
        
        # Craftsmanship Box
        draw.rectangle([(110, 700), (970, 980)], fill=(115, 26, 37))
        draw.rectangle([(115, 705), (965, 975)], outline=(196, 151, 70), width=1)
        draw.text((540, 740), "☑ NEW FEATURES & CRAFTSMANSHIP ☑", fill=(250, 240, 210), anchor="mm")
        
        highlights = (
            "☑ 100% Certified 925 Sterling Silver with Antique Black Patina Finish\n"
            "☑ Hand-engraved Temple Goddess & Dancing Peacock Motifs\n"
            "☑ Complementary Hallmark Authentication Certificate Included\n"
            "☑ Peacock Oxidised Kada Bangle (₹24,000) & Tribal Ring (₹15,500) Also Available"
        )
        draw.multiline_text((540, 860), highlights, fill=(255, 255, 255), align="center", anchor="mm", spacing=10)
        
        img.save(output_path, quality=95)
        print(f"[+] Master poster canvas rendered successfully to: {output_path}")
        
    return output_path

if __name__ == "__main__":
    render_branded_poster()
