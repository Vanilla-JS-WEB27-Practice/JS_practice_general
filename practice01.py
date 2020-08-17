
# Template
# Date: - August - 2020
# Source: 
# Title: 
# Resources: 

# Instructions:
# 

# Examples:
# 

# Notes:
# 

# Sudo code:
# 1 - 

# Work: 

# ------------------------------------------------------------------------------------------------------------------

# Date: 16 - August - 2020
# Source: https://edabit.com/challenge/8pDH2SRutPoaQghgc
# Title: Luke, I Am Your ...
# Resources:

# Instructions:
#  Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

# Person	    Relation
# Darth Vader	father
# Leia	        sister
# Han	        brother in law
# R2D2	        droid

# Examples:
# relation_to_luke("Darth Vader") ➞ "Luke, I am your father."
# relation_to_luke("Leia") ➞ "Luke, I am your sister."
# relation_to_luke("Han") ➞ "Luke, I am your brother in law."

# Sudo code:
# 1 - 

# Work: 
# def relation_to_luke(name):
#     relation = {
#         'Darth Vader': 'father',
#         'Leia': 'sister',
#         'Han': 'brother in law',
#         'R2D2': 'droid'
#     }

#     return f'Luke, I am your {relation[name]}.'

# print(relation_to_luke('Darth Vader'))
# print(relation_to_luke('Leia'))
# print(relation_to_luke('Han'))
# ------------------------------------------------------------------------------------------------------------------

# Date: 15 - August - 2020
# Source: https://edabit.com/challenge/gt9LLufDCMHKMioh2
# Title: Stuttering Function
# Resources: 

# Instructions:
# Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.

# Examples:
# stutter("incredible") ➞ "in... in... incredible?"
# stutter("enthusiastic") ➞ "en... en... enthusiastic?"
# stutter("outstanding") ➞ "ou... ou... outstanding?"

# Notes:
# Assume all input is in lower case and at least two characters long.

# Sudo code:
# 1 - split after the second character and store as a value
# 2 - return the pieces in a string

# Work: 
# def stutter(word):
    # option 2
    # return (word[0:2]+'... ')*2 +word+'?'

    # option 1
    # new_word = word[0:2]
	# return (new_word+'... ')*2 +word+'?'

# print(stutter("incredible"))


# ------------------------------------------------------------------------------------------------------------------

# Date: 07 - July - 2020
# Source: https://edabit.com/challenge/S9KCN5kqoDbhNdKh5
# Title: Characters in Shapes
# Resources: 

# Instructions:
# Create a function that counts how many characters make up a rectangular shape. You will be given a list of strings.

# Examples:
# count_characters([
#   "###",
#   "###",
#   "###"
# ]) ➞ 9

# count_characters([
#   "22222222",
#   "22222222",
# ]) ➞ 16

# count_characters([
#   "------------------"
# ]) ➞ 18

# count_characters([]) ➞ 0

# count_characters([ "", ""]) ➞ 0

# Notes:
# Return 0 if given an empty list.


# Work: 
# def count_characters(charList):
#     count = 0

#     for words in charList:
#         count = count + len(words)
    
#     return count

# count_characters([ "###", "###", "###"])

# ------------------------------------------------------------------------------------------------------------------

# Date: 27 - May - 2020
# Source: https://edabit.com/challenge/7sdNcax4GsLSrNQbM
# Title: Unpacking Lists
# Resources: https://riptutorial.com/python/example/14981/destructuring-assignment

# Instructions:
# You can assign variables from lists like this:

# lst = [1, 2, 3, 4, 5, 6]
# first = lst[0]
# middle = lst[1:-1]
# last = lst[-1]

# print(first) ➞ outputs 1
# print(middle) ➞ outputs [2, 3, 4, 5]
# print(last) ➞ outputs 6

# With Python 3, you can assign variables from lists in a much more succinct way. Create variables first, middle and last from the given list using destructuring assignment (check the Resources tab for some examples), where:

# Examples:
# first  ➞ 1
# middle ➞ [2, 3, 4, 5]
# last ➞ 6

# Notes:
# Your solution should be just one line of code.
# If your solution is longer than one line of code, please review the Resources tab.

# Work: 
# first, *middle, last = [1, 2, 3, 4, 5]

# ------------------------------------------------------------------------------------------------------------------

# Date: 27 - May - 2020
# Source: https://edabit.com/challenge/GPmoRCZKkyNtoJMcN
# Title: Return a String as an Integer
# Resources: https://www.programiz.com/python-programming/methods/built-in/int

# Instructions:
# Create a function that takes a string and returns it as an integer.

# Examples:
# string_int("6") ➞ 6
# string_int("1000") ➞ 1000
# string_int("12") ➞ 12

# Notes:
# All numbers will be whole numbers.

# Work: 
# def string_int(text):
#     return int(txt);

# ------------------------------------------------------------------------------------------------------------------

# Date: 16 - May - 2020
# Source: https://edabit.com/challenge/xWSjvoH7mEkSnqS7H
# Title: To the Power of _____
# Resource: https://docs.python.org/3/reference/expressions.html#the-power-operator

# Instructions:
# Create a function that takes a base number and an exponent number and returns the calculation.

# Examples:
# calculate_exponent(5, 5) ➞ 3125
# calculate_exponent(10, 10) ➞ 10000000000
# calculate_exponent(3, 3) ➞ 27

# Notes:
# All test inputs will be positive integers.
# Don't forget to return the result.
# If you get stuck on a challenge, find help in the Resources tab.
# If you're really stuck, unlock solutions in the Solutions tab.

# Work: 
# def calculate_exponent(num, exp):
#     return num ** exp

# ------------------------------------------------------------------------------------------------------------------

# Date: 16 - May - 2020
# Source: https://edabit.com/challenge/KjCS7occ9hfu5snpb
# Title: Return the Next Number from the Integer Passed

# Instructions:
# Create a function that takes a number as an argument, increments the number by +1 and returns the result.

# Examples:
# addition(0) ➞ 1
# addition(9) ➞ 10
# addition(-3) ➞ -2

# Notes:
# Don't forget to return the result.
# If you get stuck on a challenge, find help in the Resources tab.
# If you're really stuck, unlock solutions in the Solutions tab.

# Work: 
# def addition(num):
#     return num + 1

# ------------------------------------------------------------------------------------------------------------------

# Date: 16 - May - 2020
# Source: https://edabit.com/challenge/aWLTzrRsrw7RakYrN
# Title: Area of a Triangle

# Instructions:
# Write a function that takes the base and height of a triangle and return its area.

# Examples:
# tri_area(3, 2) ➞ 3
# tri_area(7, 4) ➞ 14
# tri_area(10, 10) ➞ 50

# Notes:
# The area of a triangle is: (base * height) / 2
# Don't forget to return the result.
# If you get stuck on a challenge, find help in the Resources tab.
# If you're really stuck, unlock solutions in the Solutions tab.

# Work: 
# def tri_area(base, height):
#     return (base * height)/2

# ------------------------------------------------------------------------------------------------------------------

## FIRST PYHTON EXPRESSION!!
# Date: 16 - May - 2020
# Source: https://edabit.com/challenge/rZToTkR5eB9Zn4zLh
# Title: Return the Sum of Two Numbers
# Resources: https://learn.lambdaschool.com/cs/module/recay2erzDlYUPSeO/

# Instructions:
# Create a function that takes two numbers as arguments and return their sum.

# Examples:
# addition(3, 2) ➞ 5
# addition(-3, -6) ➞ -9
# addition(7, 3) ➞ 10

# Notes:
# Don't forget to return the result.
# If you get stuck on a challenge, find help in the Resources tab.
# If you're really stuck, unlock solutions in the Solutions tab.

# Work: 

# def addition(a, b):
#     return a + b

# ------------------------------------------------------------------------------------------------------------------