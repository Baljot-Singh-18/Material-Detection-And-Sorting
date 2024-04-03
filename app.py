from flask import Flask, request, render_template
import subprocess

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/main.html')
def main():
    return render_template('main.html')

@app.route('/upload', methods=['POST', 'GET'])
def upload():
    if 'file' not in request.files:
        return "No file uploaded"

    file = request.files['file']
    file_path = f"uploads/{file.filename}"  # Save file to uploads directory
    file.save(file_path)

    # Path to the Anaconda Prompt executable
    anaconda_prompt_path = r"D:\Programming\anaconda3\Scripts\activate.bat"

    # Command to activate the base environment in Anaconda
    activate_base_cmd = f'call "{anaconda_prompt_path}" "D:\\Programming\\anaconda3"'

    # Command to execute in the Anaconda Prompt
    your_command = f'python D:\\Programming\\Material-Detection-And-Sorting\\yolov5-master\\detect.py --source {file_path}'

    try:
        # Open Anaconda Prompt and activate base environment
        subprocess.run(activate_base_cmd, shell=True, check=True)

        # Execute your desired command in the Anaconda Prompt
        subprocess.run(your_command, shell=True, check=True)
    except subprocess.CalledProcessError as e:
        return f"Error executing command: {e}"

    return "File uploaded and processed successfully"

if __name__ == '__main__':
    app.run(debug=True)
