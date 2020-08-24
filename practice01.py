
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

# Date: - August - 2020
# Source: https://edabit.com/challenge/pfn6QRn6eiTHEPpSs
# Title: Drunken Python
# Resources: 

# Instructions:
# Python got drunk and the built-in functions str() and int() are acting odd:

# str(4) ➞ 4
# str("4") ➞ 4
# int("4") ➞ "4"
# int(4) ➞ "4"

# You need to create two functions to substitute str() and int(). A function called int_to_str() that converts integers into strings and a function called str_to_int() that converts strings into integers.

# Examples:
# int_to_str(4) ➞ "4"
# str_to_int("4") ➞ 4
# int_to_str(29348) ➞ "29348"

# Notes:
# This is meant to illustrate the dangers of using already-existing function names.
# Extra points if you can de-drunk Python.

# Sudo code:
# 1 - 

# Work: 
str, int = int, str

def int_to_str(num):
    return str(num)
    # return "'{}'".format(num)

def str_to_int(num):
    return int(num)
    # return ("%d" % int(num))
    # return ("{:d}".format(int(num)))

print(int_to_str(100))
print(str_to_int('7'))
# ------------------------------------------------------------------------------------------------------------------

# Date: 22 - August - 2020
# Source: https://edabit.com/challenge/TcJXTPJBsfJ2Wgkk4
# Title: Travelling Salesman Problem
# Resources: https://www.geeksforgeeks.org/python-math-factorial-function/

# Instructions:
# Given a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city and returns to the origin city?
# Return the total number of possible paths a salesman can travel, given n paths.

# Examples:
# paths(4) ➞ 24
# paths(1) ➞ 1
# paths(9) ➞ 362880

# Work: 
# import math
# def paths(n):
#     return math.factorial(n)

# print(paths(4))
# print(paths(1))
# print(paths(9))

# ------------------------------------------------------------------------------------------------------------------

# Date: 22 - August - 2020
# Source: https://edabit.com/challenge/TiqTew3PcofZgdbR4
# Title: Bitwise Operations
# Resources: 

# Instructions:
# A decimal number can be represented as a sequence of bits. To illustrate:

# 6 = 00000110
# 23 = 00010111

# From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

# bitwise_and(6, 23) ➞ 00000110
# bitwise_or(6, 23) ➞ 00010111
# bitwise_xor(6, 23) ➞ 00010001

# Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

# Examples:
# bitwise_and(7, 12) ➞ 4
# bitwise_or(7, 12) ➞ 15
# bitwise_xor(7, 12) ➞ 11

# Work: 
# def bitwise_and(n1, n2):
#     return n1 & n2

# def bitwise_or(n1, n2):
# 	return n1 | n2

# def bitwise_xor(n1, n2):
#     return n1 ^ n2

# print(bitwise_and(7,12))
# print(bitwise_or(7,12))
# print(bitwise_xor(7,12))

# ------------------------------------------------------------------------------------------------------------------

# Date: 22 - August - 2020
# Source: https://edabit.com/challenge/iP4ixkQffELyHvHi5
# Title: How Heavy Is It?

# Resources: 

# Instructions:
# Calculate the mass of a cylinder when it's filled with water and the cylinder itself doesn't weigh anything.
# How to solve:
    # Calculate the volume of the cylinder.
    # Convert cm³ into dm³.
    # 1dm³ = 1L, 1L is 1Kg.

# Examples:
# weight(4, 10) ➞ 0.5
# weight(30, 60) ➞ 169.65
# weight(15, 10) ➞ 7.07

# Notes:
# I recommend importing math.
# If you get stuck on a challenge, find help in Resources.

# Sudo code:
# 1 - 

# Work: 
# import math
# def weight(r, h):
#     pi = math.pi
#     volume = pi*(r*r)*h
#     final = round(volume/1000, 2) 
#     return final

# print(weight(4,10))
# print(weight(30,60))
# print(weight(15,10))


# ------------------------------------------------------------------------------------------------------------------

# Date: 17 - August - 2020
# Source: Connor TL practice 
# Given the following array of values, print out all the elements in reverse order, with each element on a new line.
# For example, given the list
# [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
# Your output should be
# 0
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10
# You may use whatever programming language you'd like.
# Verbalize your thought process as much as possible before writing any code. Run through the UPER problem solving framework while going through your thought process.

# want to print the array in reverse order every num on a new line

# arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
# reversed_arr = reversed(arr)
# for num in reversed_arr:
#     print(f"\n {num}")


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