import http.server
import socketserver

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

class SafeHandler(Handler):
    def send_error(self, code, message=None, explain=None):
        try:
            super().send_error(code, message, explain)
        except ConnectionAbortedError:
            print("⚠️ Client disconnected before error response was sent.")

    def log_message(self, format, *args):
        # Optional: cleaner logging
        print("%s - - [%s] %s" %
              (self.client_address[0],
               self.log_date_time_string(),
               format % args))

with socketserver.TCPServer(("", PORT), SafeHandler) as httpd:
    print(f"Serving at http://127.0.0.1:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
