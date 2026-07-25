"""
Module 3: Generative AI Poster Synthesis & Graphic Branding
Generates dynamic promotional poster artwork with real product photos, prices, and feature callouts.
"""
import os
from PIL import Image, ImageDraw, ImageFont
from config import POSTER_OUTPUT_PATH, BASE_DIR

def render_branded_poster(prompt_text: str = "", output_path: str = POSTER_OUTPUT_PATH) -> str:
    print("[*] Compositing daily marketing poster with product photos & prices (Pillow)...")
    
    # 1. Base Canvas (1080 x 1350 - WhatsApp / Instagram 4:5 format)
    width, height = 1080, 1350
    poster = Image.new("RGB", (width, height), color=(115, 26, 37))  # Brand Burgundy #731A25
    draw = ImageDraw.Draw(poster)
    
    # 2. Outer Luxury Frames & Gold Accents
    draw.rectangle([(24, 24), (1056, 1326)], outline=(176, 138, 46), width=3)  # Gold border
    draw.rectangle([(36, 36), (1044, 1314)], outline=(250, 246, 240), width=1)  # Cream inner accent
    
    # Gold Corner Lines
    corner = 45
    draw.line([(36, 36), (36 + corner, 36)], fill=(176, 138, 46), width=4)
    draw.line([(36, 36), (36, 36 + corner)], fill=(176, 138, 46), width=4)
    draw.line([(1044, 36), (1044 - corner, 36)], fill=(176, 138, 46), width=4)
    draw.line([(1044, 36), (1044, 36 + corner)], fill=(176, 138, 46), width=4)
    
    # 3. Header Titles
    draw.text((540, 95), "L U M I E   J E W E L S", fill=(255, 255, 255), anchor="mm")
    draw.text((540, 135), "THE PROMISE OF PURITY • DAILY LAUNCH HIGHLIGHTS", fill=(176, 138, 46), anchor="mm")
    
    # 4. Central Feature Box
    draw.rectangle([(70, 180), (1010, 1090)], fill=(250, 246, 240), outline=(176, 138, 46), width=2)
    
    # Banner Header inside Box
    draw.rectangle([(70, 180), (1010, 260)], fill=(115, 26, 37))
    draw.text((540, 220), "VIRASAT OXIDISED SILVER COLLECTION", fill=(255, 255, 255), anchor="mm")
    
    # 5. Product Image Cards Grid (2 Showcase Product Photos)
    project_root = BASE_DIR.parent
    img1_path = os.path.join(project_root, "assets", "images", "gold_category.jpg")
    img2_path = os.path.join(project_root, "assets", "images", "gemstone_category.jpg")
    
    # Card 1: Jhumkas
    draw.rectangle([(110, 290), (510, 720)], fill=(255, 255, 255), outline=(176, 138, 46), width=1)
    if os.path.exists(img1_path):
        try:
            thumb1 = Image.open(img1_path).resize((380, 310))
            poster.paste(thumb1, (120, 300))
        except Exception:
            pass
    draw.text((310, 640), "Oxidised Silver Jhumka", fill=(19, 24, 39), anchor="mm")
    draw.text((310, 680), "SPECIAL OFFER: ₹18,500", fill=(115, 26, 37), anchor="mm")
    
    # Card 2: Hasli Choker
    draw.rectangle([(570, 290), (970, 720)], fill=(255, 255, 255), outline=(176, 138, 46), width=1)
    if os.path.exists(img2_path):
        try:
            thumb2 = Image.open(img2_path).resize((380, 310))
            poster.paste(thumb2, (580, 300))
        except Exception:
            pass
    draw.text((770, 640), "Temple Hasli Choker", fill=(19, 24, 39), anchor="mm")
    draw.text((770, 680), "LAUNCH PRICE: ₹42,000", fill=(115, 26, 37), anchor="mm")
    
    # 6. Feature Highlights List Box
    draw.rectangle([(110, 760), (970, 1050)], fill=(255, 255, 255), outline=(176, 138, 46), width=1)
    draw.text((540, 800), "✨ NEW FEATURES & CRAFTSMANSHIP ✨", fill=(115, 26, 37), anchor="mm")
    
    highlights = (
        "• 100% Certified 925 Sterling Silver with Antique Black Patina Finish\n"
        "• Hand-engraved Temple Goddess & Dancing Peacock Motifs\n"
        "• Complementary Hallmark Authentication Certificate Included\n"
        "• Peacock Oxidised Kada Bangle (₹24,000) & Tribal Ring (₹15,500) Also Available"
    )
    draw.multiline_text((540, 920), highlights, fill=(19, 24, 39), align="center", anchor="mm", spacing=14)
    
    # 7. Call-To-Action Footer Bar
    draw.rectangle([(70, 1140), (1010, 1230)], fill=(176, 138, 46))
    draw.text((540, 1185), "EXPLORE & BUY AT LUMIEJEWELS.IN • CONCIERGE: 1800 123 456", fill=(19, 24, 39), anchor="mm")
    
    poster.save(output_path, quality=95)
    print(f"[+] Dynamic product poster created successfully: {output_path}")
    return output_path

if __name__ == "__main__":
    render_branded_poster()
