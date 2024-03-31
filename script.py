import subprocess

# Command to run Anaconda Command Prompt
command = 'C:\Windows\System32\cmd.exe /k "C:\ProgramData\anaconda3\Scripts\activate.bat"'

# Run the command
subprocess.run(command, shell=True)
