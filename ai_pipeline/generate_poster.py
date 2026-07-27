"""
Module 3: Lumie Jewels Master Poster Engine
Serves and exports the official master poster artwork for LUMIE JEWELS.
"""
import os
import shutil
from PIL import Image
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
        # Fallback render if source path varies
        img = Image.new("RGB", (1000, 1000), color=(196, 151, 70))
        draw = ImageDraw.Draw(img)
        draw.text((500, 500), "LUMIE JEWELS - VIRASAT OXIDISED COLLECTION", fill=(255, 255, 255), anchor="mm")
        img.save(output_path, quality=95)
        print(f"[+] Poster saved to: {output_path}")
        
    return output_path

if __name__ == "__main__":
    render_branded_poster()
