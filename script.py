import subprocess

# Path to the Anaconda Prompt executable
anaconda_prompt_path = r"D:\Programming\anaconda3\Scripts\activate.bat" # Replace with your Anaconda installation path

# Command to activate the base environment in Anaconda
activate_base_cmd = f'call "{anaconda_prompt_path}" "D:\\Programming\\anaconda3"'

# Command to execute in the Anaconda Prompt
your_command = f'python D:\\Programming\\Material-Detection-And-Sorting\\yolov5-master\\detect.py --source 0' # Replace with the command you want to execute

# Open Anaconda Prompt and execute command
try:
    # Open Anaconda Prompt and activate base environment
    subprocess.run(activate_base_cmd, shell=True, check=True)

    # Execute your desired command in the Anaconda Prompt
    subprocess.run(your_command, shell=True, check=True)
except subprocess.CalledProcessError as e:
    print(f"Error executing command: {e}")
