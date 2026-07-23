"""
Module 3: Generative AI Poster Synthesis & Graphic Branding
Generates poster artwork and overlays brand badges using Python Pillow.
"""
from PIL import Image, ImageDraw, ImageFont
from config import POSTER_OUTPUT_PATH

def render_branded_poster(prompt_text: str, output_path: str = POSTER_OUTPUT_PATH) -> str:
    print("[*] Compositing daily marketing poster with Pillow (PIL)...")
    
    # 1. Base Canvas (1080 x 1350 - WhatsApp / Instagram 4:5 format)
    width, height = 1080, 1350
    poster = Image.new("RGB", (width, height), color=(115, 26, 37))  # Brand Burgundy #731A25
    draw = ImageDraw.Draw(poster)
    
    # 2. Outer Luxury Frames
    draw.rectangle([(24, 24), (1056, 1326)], outline=(176, 138, 46), width=3)  # Gold border
    draw.rectangle([(36, 36), (1044, 1314)], outline=(250, 246, 240), width=1)  # Cream inner accent
    
    # 3. Decorative Gold Corners
    corner_size = 40
    # Top-Left
    draw.line([(36, 36), (36 + corner_size, 36)], fill=(176, 138, 46), width=4)
    draw.line([(36, 36), (36, 36 + corner_size)], fill=(176, 138, 46), width=4)
    # Top-Right
    draw.line([(1044, 36), (1044 - corner_size, 36)], fill=(176, 138, 46), width=4)
    draw.line([(1044, 36), (1044, 36 + corner_size)], fill=(176, 138, 46), width=4)
    
    # 4. Header Badges
    draw.text((540, 110), "L U M I E   J E W E L S", fill=(255, 255, 255), anchor="mm")
    draw.text((540, 155), "THE PROMISE OF PURITY • DAILY ARRIVALS", fill=(176, 138, 46), anchor="mm")
    
    # 5. Central Feature Container
    draw.rectangle([(80, 220), (1000, 1060)], fill=(250, 246, 240), outline=(176, 138, 46), width=1)
    
    # Inner Content Text
    draw.text((540, 320), "NEW ARRIVAL LAUNCH", fill=(115, 26, 37), anchor="mm")
    draw.text((540, 410), "VIRASAT OXIDISED COLLECTION", fill=(19, 24, 39), anchor="mm")
    draw.text((540, 470), "Handcrafted 925 Sterling Silver Masterpieces", fill=(107, 104, 98), anchor="mm")
    
    # Highlight Items Box
    items_text = (
        "• Temple Hasli Chokers with Lakshmi Engravings\n"
        "• Antique Peacock Jhumkas & Ghungroo Drops\n"
        "• Openable Vintage Oxidised Kadas & Tribal Rings\n"
        "• 100% Certified 925 Hallmark Quality Guarantee"
    )
    draw.multiline_text((540, 720), items_text, fill=(115, 26, 37), align="center", anchor="mm", spacing=25)
    
    # 6. Footer Call-to-Action Bar
    draw.rectangle([(80, 1140), (1000, 1230)], fill=(176, 138, 46))
    draw.text((540, 1185), "EXPLORE CATALOG: LUMIEJEWELS.IN", fill=(19, 24, 39), anchor="mm")
    
    poster.save(output_path, quality=95)
    print(f"[+] Poster artwork synthesized successfully: {output_path}")
    return output_path

if __name__ == "__main__":
    render_branded_poster("Sample prompt text")
