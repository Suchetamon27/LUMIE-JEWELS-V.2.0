"""
LUMIE JEWELS - Standalone Windows Desktop Launcher
Starts local web server, opens storefront browser, and provides single-click AI Poster triggers.
"""
import os
import sys
import time
import threading
import webbrowser
import http.server
import socketserver

PORT = 8000

def get_base_dir():
    if hasattr(sys, '_MEIPASS'):
        return sys._MEIPASS
    return os.path.dirname(os.path.abspath(__file__))

def start_server():
    base_dir = get_base_dir()
    os.chdir(base_dir)
    
    class QuietHTTPHandler(http.server.SimpleHTTPRequestHandler):
        def log_message(self, format, *args):
            pass  # Suppress standard access logs
            
    socketserver.TCPServer.allow_reuse_address = True
    try:
        with socketserver.TCPServer(("", PORT), QuietHTTPHandler) as httpd:
            print(f"[+] LUMIE JEWELS Web Server active at http://localhost:{PORT}")
            httpd.serve_forever()
    except Exception as e:
        print(f"[!] Web server info: {e}")

def main():
    print("==========================================================")
    print("       ⚜️ LUMIE JEWELS - WINDOWS DESKTOP LAUNCHER ⚜️      ")
    print("==========================================================")
    
    # 1. Start HTTP Server Thread
    server_thread = threading.Thread(target=start_server, daemon=True)
    server_thread.start()
    
    time.sleep(1)
    
    # 2. Launch Default Web Browser
    url = f"http://localhost:{PORT}"
    print(f"[*] Opening storefront in your default web browser: {url}")
    webbrowser.open(url)
    
    print("\n----------------------------------------------------------")
    print("  [1] Open Storefront in Browser")
    print("  [2] Trigger Daily AI Poster Generator (ai_pipeline)")
    print("  [3] Exit Application")
    print("----------------------------------------------------------\n")
    
    try:
        while True:
            choice = input("Select an option (1-3): ").strip()
            if choice == "1":
                webbrowser.open(url)
            elif choice == "2":
                print("[*] Launching AI Poster Generator pipeline...")
                pipeline_script = os.path.join(get_base_dir(), "ai_pipeline", "main_scheduler.py")
                os.system(f'python "{pipeline_script}" --once')
            elif choice == "3":
                print("[*] Exiting LUMIE JEWELS. Goodbye!")
                sys.exit(0)
    except (KeyboardInterrupt, EOFError):
        sys.exit(0)

if __name__ == "__main__":
    main()
