from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

tasks = []

@app.route('/tasks', methods=['GET', 'POST'])
def handle_tasks():
    if request.method == 'GET':
        return jsonify(tasks)
    elif request.method == 'POST':
        task = request.json
        tasks.append(task)
        return jsonify(task)

if __name__ == '__main__':
    app.run(debug=True)


# This code defines a Flask app that listens for GET and POST requests to the '/tasks' endpoint. When a GET request is received, the app returns a JSON representation of the current list of tasks. When a POST request is received, the app adds the new task to the list and returns a JSON representation of the new task.