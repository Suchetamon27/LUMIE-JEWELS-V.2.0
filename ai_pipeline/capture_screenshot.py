"""
Module 1: Automated Headless Web Screenshot Capture
Captures snapshots of the LUMIE JEWELS Oxidised Collection catalog.
"""
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from config import WEBSITE_URL, SCREENSHOT_PATH

def capture_catalog_screenshot(url: str = WEBSITE_URL, save_path: str = SCREENSHOT_PATH):
    print(f"[*] Navigating to {url} in Headless Chrome...")
    
    chrome_options = Options()
    chrome_options.add_argument("--headless=new")
    chrome_options.add_argument("--window-size=1920,1200")
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument("--no-sandbox")
    
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=chrome_options)
    
    try:
        driver.get(url)
        time.sleep(2)  # Wait for DOM load
        
        # Try to filter by sub-brand if present
        try:
            filter_brand = driver.find_element(By.ID, "filter-sub-brand")
            if filter_brand:
                for option in filter_brand.find_elements(By.TAG_NAME, "option"):
                    if "Oxidised" in option.text:
                        option.click()
                        time.sleep(1.5)
                        break
        except Exception as e:
            print(f"[!] Filter click skipped: {e}")
        
        # Scroll down to catalog grid
        driver.execute_script("window.scrollTo(0, 800);")
        time.sleep(1.5)
        
        # Capture screenshot
        driver.save_screenshot(save_path)
        print(f"[+] Screenshot captured successfully: {save_path}")
        return save_path
    finally:
        driver.quit()

if __name__ == "__main__":
    capture_catalog_screenshot()
