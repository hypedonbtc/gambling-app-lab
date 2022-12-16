import pyautogui
import PIL
import tesseract
import sympy

# Capture the screen
image = pyautogui.screenshot()

# Extract the text from the image using OCR
text = tesseract.image_to_string(image)

# Identify the math questions in the text
questions = []
for line in text.split('\n'):
    if 'What is' in line:
        questions.append(line)

# Solve the math questions
for question in questions:
    # Extract the equation from the question
    equation = question.replace('What is', '').strip()
    
    # Use sympy to solve the equation
    result = sympy.solve(equation)
    
    # Print the result
    print(f'{equation} = {result}')
