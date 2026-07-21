import http.server
import socketserver
import os

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

# Custom content mappings
Handler.extensions_map.update({
    '.woff2': 'font/woff2',
    '.mp4': 'video/mp4',
    '.css': 'text/css',
    '.js': 'application/javascript',
})

print(f"--- LUMIE JEWELS SPA ---")
print(f"Serving files locally from the workspace...")
print(f"Open http://localhost:{PORT} in your web browser.")
print(f"Press CTRL+C to terminate.")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
