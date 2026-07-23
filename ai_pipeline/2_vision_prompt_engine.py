"""
Module 2: Multimodal Vision AI Analysis & Prompt Construction
Reads website screenshot, extracts catalog motifs, and outputs creative image prompts.
"""
import sys

# Ensure UTF-8 output encoding for Windows terminals
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

from PIL import Image
from google import genai
from config import GEMINI_API_KEY, SCREENSHOT_PATH

def generate_poster_prompt_from_vision(image_path: str = SCREENSHOT_PATH, api_key: str = GEMINI_API_KEY) -> str:
    print(f"[*] Analyzing snapshot ({image_path}) with Multimodal Vision AI...")
    
    try:
        client = genai.Client(api_key=api_key)
        image = Image.open(image_path)
        
        vision_prompt = """
        Analyze this jewelry storefront screenshot showing handcrafted Oxidised Silver items.
        Extract visual elements (e.g. peacock motifs, Hasli chokers, Jhumka ghungroo beads, antique black patina).
        Construct a detailed, highly artistic Generative AI Image prompt for an ultra-luxury advertisement poster.
        
        Rules:
        - Theme: LUMIE JEWELS Oxidised Collection
        - Mood: Royal Indian Heritage, dramatic dark velvet background, gold accent powder, 8k studio lighting.
        - Output ONLY the raw image generation prompt text.
        """
        
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=[image, vision_prompt]
        )
        
        ai_prompt = response.text.strip()
        print(f"[+] Dynamic AI Prompt Generated:\n{ai_prompt}\n")
        return ai_prompt
    except Exception as e:
        print(f"[!] API call fallback triggered: {e}")
        fallback_prompt = (
            "A high-end advertisement poster showcasing LUMIE JEWELS handcrafted Oxidised Silver Jhumkas "
            "and Temple Hasli choker. Dark royal burgundy velvet background with gold powder accents, "
            "peacock engravings, 8k resolution studio photography."
        )
        return fallback_prompt

if __name__ == "__main__":
    prompt = generate_poster_prompt_from_vision()
    print("Resulting Prompt:", prompt)
