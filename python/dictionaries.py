# A Dictionary is a collection which is unordered, changeable and indexed. No duplicate members.

# Create dictionary
person = {
    'first_name': 'Carin',
    'last_name': 'Ho',
    'age': 21
}

# Use constructor
# person2 = dict(first_name='Cnidus', last_name='Gui')

# Get value
print(person['first_name'])     # more common way
print(person.get('last_name'))

# Add key/value
person['phone'] = '222-222-2222'

# Get dictionary keys
print(person.keys())

# Get dictionary items
print(person.items())

# Copy dictionary
person2 = person.copy()
person2['city'] = 'Bali'

# Remove item
del(person['age'])
person.pop('phone')

# Clear dictionary
person.clear()

# Get length
print(len(person2))

# List of dictionary
people = [
    {'name': 'Martha', 'age': 22},
    {'name': 'Kevin', 'age': 23}
]

print(people[1]['name'])
