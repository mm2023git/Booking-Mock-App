
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/submit-seach-term', methods=['POST'])
def submit_search_term():
    search_term = request.json.get('searchTerm')
    print(f"Received search term: {search_term}")
    return{'status': 'success'}