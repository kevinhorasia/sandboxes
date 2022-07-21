# Strings in python are surrounded by either single or double quotation marks. Let's look at string formatting and some string methods

name = 'Carin'
age = 21

# Concatenate
# print('Hello, my name is ' + name + ' and I am ' + str(age))

# String Formatting

# Arguments by position
# print('My name is {name}, and I am {age}'.format(name=name, age=age))

# F-Strings (Python 3.6+)
# print(f'Hello my name is {name} and I am {age}')

# String Methods

s = 'hello world'

# Capitalize first word in string
print(s.capitalize())

# Make all uppercase
print(s.upper())

# Make all lowercase
print(s.lower())

# Swap case
print(s.swapcase())

# Get length
print(len(s))

# Replace
print(s.replace('world', 'everyone'))

# Count
sub = 'h'
print(s.count(sub))

# Starts with (return true/false)
print(s.startswith('hello'))

# Ends with (return true/false)
print(s.endswith('d'))

# Split into a list (in words)
print(s.split())

# Find position
print(s.find('r'))

# Is all alphanumeric (return false when there is space)
print(s.isalnum())

# Is all alphabetic (return false when there is space)
print(s.isalpha())

# Is all numeric (return false when there is space)
print(s.isnumeric())
