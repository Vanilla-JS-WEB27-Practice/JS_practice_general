# Template
# Date: - September - 2020
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

# Date: 02 - September - 2020
# Source: https://edabit.com/challenge/8pDH2SRutPoaQghgc
# Title: Luke, I Am Your ...
# Resources: 

# Instructions:
# Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

# Person	    Relation
# Darth Vader	father
# Leia	        sister
# Han	        brother in law
# R2D2	        droid

# Examples:
# relation_to_luke("Darth Vader") ➞ "Luke, I am your father."
# relation_to_luke("Leia") ➞ "Luke, I am your sister."
# relation_to_luke("Han") ➞ "Luke, I am your brother in law."

# Work: 
# def relation_to_luke(name):
#     d = {
#         "Darth Vader": "father",
#         "Leia": "sister",
#         "Han": "brother in law",
#         "R2D2": "droid"
#     }
#     return "Luke, I am your "+d[name]+"."
    # return f"Luke, I am your {d[name]}."

# print(relation_to_luke("Leia"))

# ------------------------------------------------------------------------------------------------------------------

# Date: 02 - September - 2020
# Source: https://edabit.com/challenge/6dnhESWBcTMMF3gsa
# Title: Stupid Addition

# Instructions:
# Create a function that takes two parameters and, if both parameters are strings, 
# add them as if they were integers or if the two parameters are integers, concatenate them.

# Examples:
# stupid_addition(1, 2) ➞ "12"
# stupid_addition("1", "2") ➞ 3
# stupid_addition("1", 2) ➞ None

# Notes:
# If the two parameters are different data types, return None.
# All parameters will either be strings or integers.

# Work: 
# def stupid_addition(a,b):
#     if type(a) == type(b):
#         if type(a) == str:
#             return int(a)+int(b)
#         else:
#             return str(a)+str(b)
#     else:
#         return None

# print(stupid_addition(1,2))
# print(stupid_addition("1","2"))
# print(stupid_addition("1",2))

# ------------------------------------------------------------------------------------------------------------------

# Date: 02 - September - 2020
# Source: https://edabit.com/challenge/QgSMSMpfcEebAyCye
# Title: Return the Time Saved by Speeding

# Instructions:
# One cause for speeding is the desire to shorten the time spent traveling. 
# While in long distance trips speeding does save an appreciable amount of time, the same cannot be said about short distance trips.
# Create a function that calculates the amount of time saved (in minutes) 
# were you traveling with an average speed that is above the speed-limit as compared to traveling with an average speed exactly at the speed-limit.

# Examples:
# # The parameter's format is as follows:
# (speed limit, avg speed, distance traveled at avg speed)
# time_saved(80, 90, 40) ➞ 3.3
# time_saved(80, 90, 4000) ➞ 333.3
# time_saved(80, 100, 40 ) ➞ 6.0
# time_saved(80, 100, 10) ➞ 1.5

# Notes:
# Speed = distance/time
# The time returned should be in minutes, not hours.
# The unit of speed is assumed to be miles per hour (mph).

# Work: 
# def time_saved(s_lim, s_avg, d):
#     speed1 = (d/s_lim)* 60
#     speed2 = (d/s_avg)* 60
#     result = round(speed1-speed2, 1)
#     return result

# s_lim = 80
# s_avg = 100
# d = 10
# print(time_saved(s_lim, s_avg, d))

# ------------------------------------------------------------------------------------------------------------------

# Date: 02 - September - 2020
# Source: https://edabit.com/challenge/uKPc5faEzQkMwLYPP
# Title: Go Corona!

# Instructions:
# Create a function that takes the number of daily average recovered cases recovers, 
# daily average new_cases, current active_cases, 
# and returns the number of days it will take to reach zero cases.

# Examples:
# end_corona(4000, 2000, 77000) ➞ 39
# end_corona(3000, 2000, 50699) ➞ 51
# end_corona(30000, 25000, 390205) ➞ 79

# Notes:
# Daily recovered cases are always greater than daily new_cases

# Work: 
# import math
# def end_corona(recovers, new_cases, active_cases):
#     daily = recovers - new_cases
#     divided = active_cases / daily
#     return math.ceil(divided)

# print(end_corona(4000, 2000, 77000))
# print(end_corona(3000, 2000, 50699))
# print(end_corona(30000, 25000, 390205))

# ------------------------------------------------------------------------------------------------------------------

# Date: 02 - September - 2020
# Source: https://edabit.com/challenge/R5F99DeuhqYxbGyMM
# Title: New Word Builder

# Instructions:
# Create a function that builds a word from the scrambled letters contained in the first list. 
# Use the second list to establish each position of the letters in the first list. 
# Return a string from the unscrambled letters (that made-up the word).

# Examples:
# word_builder(["g", "e", "o"], [1, 0, 2]) ➞ "ego"
# word_builder(["e", "t", "s", "t"], [3, 0, 2, 1]) ➞ "test"
# word_builder(["b", "e", "t", "i", "d", "a"], [1, 4, 5, 0, 3, 2]) ➞ "edabit"

# Notes:
# The elements in the second list are indexes of the elements in the first list.

# Work: 
# def word_builder(ltr, pos):
#     result = list()
#     for idx, num in enumerate(pos):
#         result.append(ltr[num])
#     return "".join(result)

# ltr = ['g','e','o']
# pos = [1,0,2]
# ltr = ["e", "t", "s", "t"]
# pos = [3, 0, 2, 1]
# ltr = ["b", "e", "t", "i", "d", "a"]
# pos = [1, 4, 5, 0, 3, 2]
# print(word_builder(ltr, pos))

# ------------------------------------------------------------------------------------------------------------------

# Date: 31 - August - 2020
# Source: https://edabit.com/challenge/LdXYzf5d3xJgYZur8
# Title: A Long Long Time

# Instructions:
# Create a function that takes three values:
# h hours
# m minutes
# s seconds
# Return the value that's the longest duration.

# Examples:
# longest_time(1, 59, 3598) ➞ 1
# longest_time(2, 300, 15000) ➞ 300
# longest_time(15, 955, 59400) ➞ 59400

# Notes:
# No two durations will be the same.

# Work: 
# def longest_time(h,m,s):
#     original = [h,m,s]
#     sec_h = h*60*60
#     sec_m = m*60
#     sec_lst = [sec_h, sec_m, s]
#     idx = sec_lst.index(max(sec_lst))

#     return original[idx]

# h = 15
# m = 955
# s = 59400
# print(longest_time(h,m,s))

# ------------------------------------------------------------------------------------------------------------------

# Date: 30 - August - 2020
# Source: https://edabit.com/challenge/PGXeFPN6buQDXXwPm
# Title: Trace That Matrix

# Instructions:
# Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right).
# As an example, for:
# [
#     [1, 2, 3],
#     [4, 5, 6],
#     [7, 8, 9]
# ]
# ... the trace is 1 + 5 + 9 = 15.
# Write a function that takes a square matrix and computes its trace.

# Examples:
# example #1
# trace([
#     [1, 4],
#     [4, 1]
# ]) ➞ 2
# 1 + 1 = 2

# example #2
# trace([
#     [1, 2, 3],
#     [4, 5, 6],
#     [7, 8, 9]
# ]) ➞ 15
# 1 + 5 + 9 = 15

# example #3
# trace([
    # [1, 0, 1, 0],
    # [0, 2, 0, 2],
    # [3, 0, 3, 0],
    # [0, 4, 0, 4]
# ]) ➞ 10
# 1 + 2 + 3 + 4 = 10

# Notes:
# As in the examples, the size of the matrices will vary (but they will always be square).

# Work: 
# def trace(lst):
#     result = list()
#     idx = 0
#     for arr in lst:
#         result.append(arr[idx])
#         idx+=1
#     return sum(result)

# lst = [
#     [1,4],
#     [4,1]
# ]

# lst = [
#     [1, 0, 1, 0],
#     [0, 2, 0, 2],
#     [3, 0, 3, 0],
#     [0, 4, 0, 4]
# ]
# print(trace(lst))
# ------------------------------------------------------------------------------------------------------------------

# Date: 30 - August - 2020
# Source: https://edabit.com/challenge/yL5WmWTCNwwb4GnR7
# Title: Two Distinct Elements

# Instructions:
# In each input list, every number repeats at least once, except for two. Write a function that returns the two unique numbers.

# Examples:
# return_unique([1, 9, 8, 8, 7, 6, 1, 6]) ➞ [9, 7]
# return_unique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) ➞ [2, 1]
# return_unique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) ➞ [5, 6]

# Notes:
# Keep the same ordering in the output.

# Work: 
# def return_unique(lst):
#     result = list()
#     for num in lst:
#         if lst.count(num) == 1:
#             result.append(num)
#     return result

# lst = [1, 9, 8, 8, 7, 6, 1, 6]
# print(return_unique(lst))

# ------------------------------------------------------------------------------------------------------------------

# Date: 30 - August - 2020
# Source: https://edabit.com/challenge/Axim3Ld5zu9RFLZKr
# Title: Invert Keys and Values

# Instructions:
# Write a function that inverts the keys and values of a dictionary.

# Examples:
# example #1
# invert({ "z": "q", "w": "f" })
# ➞ { "q": "z", "f": "w" }

# example #2
# invert({ "a": 1, "b": 2, "c": 3 })
# ➞ { 1: "a", 2: "b", 3: "c" }

# example #3
# invert({ "zebra": "koala", "horse": "camel" })
# ➞ { "koala": "zebra", "camel": "horse" }

# Work: 
# def invert(d):
    # option 1
    # result = dict()
    # for key, value in d.items():
    #     result[value] = key
    # return result

# d = {'z':'q', 'w':'f'}
# d = { "a": 1, "b": 2, "c": 3 }
# d = { "zebra": "koala", "horse": "camel" }
# print(invert(d))

# ------------------------------------------------------------------------------------------------------------------

# Date: 30 - August - 2020
# Source: https://edabit.com/challenge/gB7nt6WzZy8TymCah
# Title: Fullname and Email
# Resources: https://www.w3schools.com/python/python_strings.asp

# Instructions:
# Create the instance attributes fullname and email in the Employee class. Given a person's first and last names:
# Form the fullname by simply joining the first and last name together, separated by a space.
# Form the email by joining the first and last name together with a . in between, and follow it with @company.com at the end. 
# Make sure the entire email is in lowercase.

# Examples:
# emp_1 = Employee("John", "Smith")
# emp_2 = Employee("Mary",  "Sue")
# emp_3 = Employee("Antony", "Walker")

# emp_1.fullname ➞ "John Smith"
# emp_2.email ➞ "mary.sue@company.com"
# emp_3.firstname ➞ "Antony"

# Notes:
# The attributes firstname and lastname are already made for you.
# See the Resources tab for some helpful tutorials on Python classes!

# Work: 
# class Employee:
#     def __init__(self, firstname, lastname):
#         self.firstname = firstname
#         self.lastname = lastname
#         self.email = self.firstname.lower()+"."+self.lastname.lower()+"@company.com"
#         self.fullname = self.firstname + " " + self.lastname

# emp_1 = Employee("John", "Smith")
# emp_2 = Employee("Mary",  "Sue")
# emp_3 = Employee("Antony", "Walker")

# print(emp_1.fullname)
# print(emp_2.email)
# print(emp_3.firstname)

# ------------------------------------------------------------------------------------------------------------------

# Date: 30 - August - 2020
# Source: https://edabit.com/challenge/HYjQKDXFfeppcWmLX
# Title: Curzon Numbers

# Instructions:
# In this challenge, establish if a given integer num is a Curzon number. 
# If 1 plus 2 elevated to num is exactly divisible by 1 plus 2 multiplied by num, then num is a Curzon number.
# Given a non-negative integer num, implement a function that returns True if num is a Curzon number, or False otherwise.

# Examples:
# is_curzon(5) ➞ True
# 2 ** 5 + 1 = 33
# 2 * 5 + 1 = 11
# 33 is a multiple of 11

# is_curzon(10) ➞ False
# 2 ** 10 + 1 = 1025
# 2 * 10 + 1 = 21
# 1025 is not a multiple of 21

# is_curzon(14) ➞ True
# 2 ** 14 + 1 = 16385
# 2 * 14 + 1 = 29
# 16385 is a multiple of 29

# Work: 
# def is_curzon(num):
#     num1 = 2 ** num + 1
#     num2 = 2 * num + 1
#     if num1 % num2 == 0:
#         return True
#     else:
#         return False

# num = 14
# print(is_curzon(num))

# ------------------------------------------------------------------------------------------------------------------

# Date: 30 - August - 2020
# Source: https://edabit.com/challenge/8rEEHcmq8rRaTksd7
# Title: Check If Lines Are Parallel
# Resources: https://www.codespeedy.com/python-program-to-check-if-two-lines-are-parallel-or-not/

# Instructions:
# Given two lines, determine whether or not they are parallel.
# Lines are represented by a list [a, b, c], which corresponds to the line ax+by=c.

# Examples:
# Example #1
# lines_are_parallel([1, 2, 3], [1, 2, 4]) ➞ True
# x+2y=3 and x+2y=4 are parallel.

# Example #2
# lines_are_parallel([2, 4, 1], [4, 2, 1]) ➞ False
# 2x+4y=1 and 4x+2y=1 are not parallel.

# Example #3
# lines_are_parallel([0, 1, 5], [0, 1, 5]) ➞ True
# Lines are parallel to themselves.

# Notes:
# Two lines are parallels if they have the same slope and the y-intercepts are different. If the slopes are different, the lines are not parallel.
# All test cases use valid input (no lists of the wrong size, for example).
# All coefficients will be integers (whole numbers).

# Work: 
# def lines_are_parallel(l1, l2):
#     if l1[1] != 0 and l2[1] != 0:
#         if l1[0]/l1[1] == l2[0]/l2[1]:
#             return True
#         else:
#             return False
#     else: 
#         if l1[0] == l2[0] and l1[1] == l2[1]:
#             return True
#         else:
#             return False

# l1 = [1,2,3]
# l2 = [1,2,4]
# print(lines_are_parallel(l1, l2))

# ------------------------------------------------------------------------------------------------------------------

# Date: 30 - August - 2020
# Source: https://edabit.com/challenge/EWgdCtSDmRqJPrzoz
# Title: Peeling off the Outer Layers

# Instructions:
# Given a list of lists, return a new list of lists containing every element, except for the outer elements.

# Examples:
# example #1
# peel_layer_off([
    # ["a", "b", "c", "d"],
    # ["e", "f", "g", "h"],
    # ["i", "j", "k", "l"],
    # ["m", "n", "o", "p"]
# ]) ➞ [
    # ["f", "g"],
    # ["j", "k"]
# ]

# example #2
# peel_layer_off([
#     [1, 2, 3, 4, 5],
#     [6, 7, 8, 9, 10],
#     [11, 12, 13, 14, 15],
#     [16, 17, 18, 19, 20],
#     [21, 22, 23, 24, 25],
#     [26, 27, 28, 29, 30],
#     [31, 32, 33, 34, 35]
# ]) ➞ [
    # [7, 8, 9],
    # [12, 13, 14],
    # [17, 18, 19],
    # [22, 23, 24],
    # [27, 28, 29]
# ]

# Notes:
# The 2D grid is always a rectangular/square shape.
# Always return some form of nested list, unless there are no elements. In that case, return an empty list.

# Work: 
# def peel_layer_off(lst):
#     result = list()
#     if len(lst) > 2:
#         for arr in lst[1:-1]:
#             result.append(arr[1:-1])
#     return result

# lst = [
#     ["a", "b", "c", "d"],
#     ["e", "f", "g", "h"],
#     ["i", "j", "k", "l"],
#     ["m", "n", "o", "p"]
# ]
# lst = [
#     [1, 2, 3, 4, 5],
#     [6, 7, 8, 9, 10],
#     [11, 12, 13, 14, 15],
#     [16, 17, 18, 19, 20],
#     [21, 22, 23, 24, 25],
#     [26, 27, 28, 29, 30],
#     [31, 32, 33, 34, 35]
# ]
# lst = [
#     [True, False, True],
#     [False, False, True],
#     [True, True, True]
# ]
# lst = [
#     ["hello", "world"],
#     ["hello", "world"]
# ]
# print(peel_layer_off(lst))

# ------------------------------------------------------------------------------------------------------------------

# Date: 30 - August - 2020
# Source: https://edabit.com/challenge/bNp4kd4rFfysPepkp
# Title: Radian to Degree
# Resources: https://www.w3schools.com/python/ref_math_degrees.asp

# Instructions:
# Create a function that takes an angle in radians and converts it into degrees.

# Examples:
# to_degree(math.pi) ➞ 180
# to_degree(math.pi/2) ➞ 90
# to_degree(math.pi/4) ➞ 45

# Notes:
# The input angles are in radians.
# Check out the resource tab.

# Work: 
# import math
# def to_degree(radian):
#     return math.degrees(radian)

# radian = math.pi/4
# print(to_degree(radian))

# ------------------------------------------------------------------------------------------------------------------

# Date: 29 - August - 2020
# Source: https://edabit.com/challenge/Kh7Bm9X7Q4rYB8uT7
# Title: Vowel Sandwich

# Instructions:
# Create a function which validates whether a 3 character string is a vowel sandwich. 
# In order to have a valid sandwich, the string must satisfy the following rules:
# The first and last characters must be a consonant.
# The character in the middle must be a vowel.

# Examples:
# is_vowel_sandwich("cat") ➞ True
# is_vowel_sandwich("ear") ➞ False
# is_vowel_sandwich("bake") ➞ False
# is_vowel_sandwich("try") ➞ False

# Notes:
# Return False if the word is not 3 characters in length.
# All words will be given in lowercase.
# y is not considered a vowel.

# Work: 
# def is_vowel_sandwich(s):
    # Solution that passes
    # if len(s) != 3:
	# 	return (False)

	# vowel = ['a', 'e', 'i', 'o', 'u']

	# for i in s:
	# 	if s[0] not in vowel and s[1] in vowel and s[2] not in vowel:
	# 		return (True)
	# return (False)

    # Didn't pass 
    # vowels = ['a','e','i','o','u']
    # word = [char for char in s]
    # if len(word) > 3:
    #     return False
    # elif word[0] in vowels or word[2] in vowels:
    #     return False
    # elif word[1] not in vowels:
    #     return False
    # else:
    #     return True

# s = 'cat'
# s = 'ear'
# s = 'bake'
# s = 'try'
# print(is_vowel_sandwich(s))

# ------------------------------------------------------------------------------------------------------------------

# Date: 29 - August - 2020
# Source: https://edabit.com/challenge/eA94BuKYjwMoNQSE2
# Title: Correct Inequality Signs
# Resources: https://www.programiz.com/python-programming/methods/built-in/eval

# Instructions:
# Create a function that returns true if a given inequality expression is correct and false otherwise.

# Examples:
# correct_signs("3 < 7 < 11") ➞ True
# correct_signs("13 > 44 > 33 > 1") ➞ False
# correct_signs("1 < 2 < 6 < 9 > 3") ➞ True

# Work: 
# def correct_signs(txt):
#     return eval(txt)

# txt = '3 < 7 < 11'
# txt = '13 > 44 > 33 > 1'
# print(correct_signs(txt))

# ------------------------------------------------------------------------------------------------------------------

# Date: 29 - August - 2020
# Source: https://edabit.com/challenge/p88k8yHRPTMPt4bBo
# Title: How Many Vowels?

# Instructions:
# Create a function that takes a string and returns the number (count) of vowels contained within it.

# Examples:
# count_vowels("Celebration") ➞ 5
# count_vowels("Palm") ➞ 1
# count_vowels("Prediction") ➞ 4

# Notes:
# a, e, i, o, u are considered vowels (not y).
# All test cases are one word and only contain letters.

# Work: 
# def count_vowels(txt):
#     vowels = ['a','e','i','o','u']
#     count = 0
#     for char in txt.lower():
#         if char in vowels:
#             count+=1
#     return count

# txt = 'Celebration'
# txt = 'Palm'
# txt = 'Predcition'
# print(count_vowels(txt))

# ------------------------------------------------------------------------------------------------------------------

# Date: 29 - August - 2020
# Source: https://edabit.com/challenge/zgu7m6W7i3z5SYwa6
# Title: Are the Sum of Digits in the Numbers Equal?

# Instructions:
# Write function that takes a list with two numbers in it and determines if the sum of the digits of the two numbers are equal to each other.

# Examples:
# is_equal([105, 42]) ➞ True
# 1 + 0 + 5 = 6
# 4 + 2 = 6
# is_equal([21, 35]) ➞ False
# is_equal([0, 0]) ➞ True

# Work: 
# def is_equal(lst):
#     num1 = [int(char) for char in str(lst[0])]
#     num2 = [int(char) for char in str(lst[1])]
#     if sum(num1) == sum(num2):
#         return True
#     else:
#         return False

# lst = [105, 42]
# lst = [21, 35]
# lst = [0, 0]
# print(is_equal(lst))

# ------------------------------------------------------------------------------------------------------------------

# Date: 29 - August - 2020
# Source: https://edabit.com/challenge/NNhkGocuPMcryW7GP
# Title: A Circle and Two Squares
# Resources: https://www.geeksforgeeks.org/area-square-circumscribed-circle/

# Instructions:
# Imagine a circle and two squares: a smaller and a bigger one. For the smaller one, the circle is a circumcircle and for the bigger one, an incircle.
# Create a function, that takes an integer (radius of the circle) and returns the difference of the areas of the two squares.

# Examples:
# square_areas_difference(5) ➞ 50
# square_areas_difference(6) ➞ 72
# square_areas_difference(7) ➞ 98

# Notes:
# Use only positive integer parameters.

# Work: 
# def square_areas_difference(r):
#     return 2*r*r

# print(square_areas_difference(5))
# print(square_areas_difference(6))    
# print(square_areas_difference(7))

# ------------------------------------------------------------------------------------------------------------------

# Date: 29 - August - 2020
# Source: https://edabit.com/challenge/co4nwXSvnCjGEu8vp
# Title: Date Format

# Instructions:
# Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.

# Examples:
# format_date("11/12/2019") ➞ "20191211"
# format_date("12/31/2019") ➞ "20193112"
# format_date("01/15/2019") ➞ "20191501"

# Notes:
# Return value should be a string.

# Work: 
# def format_date(date):
#     new_date = date.split('/')
#     new_date.reverse()
#     return ''.join(new_date)

# date = '11/12/2019'
# date = '12/31/2019'
# date = '01/15/2019'
# print(format_date(date))

# ------------------------------------------------------------------------------------------------------------------

# Date: 29 - August - 2020
# Source: https://edabit.com/challenge/fDkAuAwR4PMWZwBKs
# Title: Where is Bob!?!

# Instructions:
# Write a function that searches a list of names (unsorted) for the name "Bob" and returns the location in the list. If Bob is not in the array, return -1.

# Examples:
# find_bob(["Jimmy", "Layla", "Bob"]) ➞ 2
# find_bob(["Bob", "Layla", "Kaitlyn", "Patricia"]) ➞ 0
# find_bob(["Jimmy", "Layla", "James"]) ➞ -1

# Notes:
# Assume all names start with a capital letter and are lowercase thereafter (i.e. don't worry about finding "BOB" or "bob").

# Work: 
# def find_bob(names):
#     if "Bob" not in names:
#         return -1
#     else:
#         return names.index("Bob")

# names = ["Jimmy", "Layla", "Bob"]
# names = ["Bob", "Layla", "Kaitlyn", "Patricia"]
# names = ["Jimmy", "Layla", "James"]
# print(find_bob(names))

# ------------------------------------------------------------------------------------------------------------------

# Date: 29 - August - 2020
# Source: https://edabit.com/challenge/YEeywMm2eMtae4WDW
# Title: You FAILEDPASSED the Exam

# Instructions:
# The challenge is to fix all of the bugs in this incredibly messy code, which the code in the image might've actually looked like (probably not)! The code given will output the same middle two lines as in the image shown above.
# First parameter is the user's score.
# Second parameter is the required score.

# Examples:
# grade_percentage("85%", "85%") ➞ "You PASSED the Exam"
# grade_percentage("99%", "85%") ➞ "You PASSED the Exam"
# grade_percentage("65%", "90%") ➞ "You FAILED the Exam"

# Notes:
# Note that inputs will be given as a string percentage number.
# Maintain all capitalization.
# Feel free to declutter and refactor code if it helps!

# Work: 
# def grade_percentage(user_score, pass_score):
#     if int(user_score[:-1]) < int(pass_score[:-1]):
#         return 'You FAILED the Exam'
#     if int(user_score[:-1]) == int(pass_score[:-1]):
#         return 'You PASSED the Exam'
#     if int(user_score[:-1]) >= int(pass_score[:-1]):
#         return 'You PASSED the Exam'

# print(grade_percentage("85%", "85%"))
# print(grade_percentage("99%", "85%"))
# print(grade_percentage("65%", "90%"))

# ------------------------------------------------------------------------------------------------------------------

# Date: 29 - August - 2020
# Source: https://edabit.com/challenge/T7DpLzEkAkcxKijzR
# Title: Four Passengers and a Driver

# Instructions:
# A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.

# Examples:
# cars_needed(5) ➞ 1
# cars_needed(11) ➞ 3
# cars_needed(0) ➞ 0

# Notes:
# It's likely there will be a few people left over and some cars won't be filled to max capacity.

# Work: 
# def cars_needed(num):
#     nums = str(num/5).split('.')
#     if int(nums[1]) > 0:
#         return int(nums[0])+1
#     else:
#         return int(nums[0])

# print(cars_needed(5))
# print(cars_needed(11))
# print(cars_needed(0))

# ------------------------------------------------------------------------------------------------------------------

# Date: 29 - August - 2020
# Source: https://edabit.com/challenge/YfoKQWNeYETb9PYpw
# Title: Calculate the Profit

# Instructions:
# You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. 
# You are given a dictionary containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. 
# Return the total profit made, rounded to the nearest dollar.

# Examples:
# profit({
#   "cost_price": 32.67,
#   "sell_price": 45.00,
#   "inventory": 1200
# }) ➞ 14796

# profit({
#   "cost_price": 225.89,
#   "sell_price": 550.00,
#   "inventory": 100
# }) ➞ 32411

# profit({
#   "cost_price": 2.77,
#   "sell_price": 7.95,
#   "inventory": 8500
# }) ➞ 44030

# Notes:
# Assume all inventory has been sold.
# Profit = Total Sales - Total Cost

# Work: 
# def profit(info):
#     cost = info["cost_price"]*info["inventory"]
#     sell = info["sell_price"]*info["inventory"]s
#     profit_amount = sell - cost
#     return round(profit_amount)


# info = {
#     "cost_price": 32.67,
#     "sell_price": 45.00,
#     "inventory": 1200
# }
# print(profit(info))

# ------------------------------------------------------------------------------------------------------------------

# Date: 29 - August - 2020
# Source: https://edabit.com/challenge/BuwHwPvt92yw574zB
# Title: List of Multiples

# Instructions:
# Create a function that takes two numbers as arguments (num, length) and returns a list of multiples of num up to length.

# Examples:
# list_of_multiples(7, 5) ➞ [7, 14, 21, 28, 35]
# list_of_multiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
# list_of_multiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

# Notes:
# Notice that num is also included in the returned list.

# Work: 
# def list_of_multiples(num, length):
#     result = list()
#     for n in range(length+1):
#         if n != 0:
#             result.append(n*num)
#     return result

# print(list_of_multiples(7,5))
# print(list_of_multiples(12,10))
# print(list_of_multiples(17,6))

# ------------------------------------------------------------------------------------------------------------------

# Date: 29 - August - 2020
# Source: https://edabit.com/challenge/pHp9qkjY53JNTGCG4
# Title: Convert Year to Century

# Instructions:
# Write a function that takes a year and returns its corresponding century.

# Examples:
# century_from_year(2005) ➞ 21
# century_from_year(1950) ➞ 20
# century_from_year(1900) ➞ 19

# Work: 
# def century_from_year(year):
#     century = str(year/100).split('.')
#     if int(century[1]) < 1:
#         return int(century[0])
#     else:
#         return int(century[0])+1
#     return 

# print(century_from_year(2005))
# print(century_from_year(1950))
# print(century_from_year(1900))

# ------------------------------------------------------------------------------------------------------------------

# Date: 29 - August - 2020
# Source: https://edabit.com/challenge/FF6kYPHdAcJnoosr5
# Title: Return the Factorial

# Instructions:
# Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.

# Examples:
# factorial(3) ➞ 6
# factorial(5) ➞ 120
# factorial(13) ➞ 6227020800

# Notes:
# Assume all inputs are greater than or equal to 0.

# Work: 
# import math
# def factorial(num):
#     return math.factorial(num)

# print(factorial(3))
# print(factorial(5))
# print(factorial(13))

# ------------------------------------------------------------------------------------------------------------------

# Date: 29 - August - 2020
# Source: https://edabit.com/challenge/WXqH9qvvGkmx4dMvp
# Title: FizzBuzz Interview Question

# Instructions:
# Create a function that takes a number as an argument and returns "Fizz", "Buzz" or "FizzBuzz".
# If the number is a multiple of 3 the output should be "Fizz".
# If the number given is a multiple of 5, the output should be "Buzz".
# If the number given is a multiple of both 3 and 5, the output should be "FizzBuzz".
# If the number is not a multiple of either 3 or 5, the number should be output on its own as shown in the examples below.
# The output should always be a string even if it is not a multiple of 3 or 5.

# Examples:
# fizz_buzz(3) ➞ "Fizz"
# fizz_buzz(5) ➞ "Buzz"
# fizz_buzz(15) ➞ "FizzBuzz"
# fizz_buzz(4) ➞ "4"

# Notes:
# Try to be precise with how you spell things and where you put the capital letters.
# If you get stuck on a challenge, find help in the Resources tab.
# If you're really stuck, unlock solutions in the Solutions tab.

# Work: 
# def fizz_buzz(num):
#     if num % 3 == 0 and num % 5 == 0:
#         return "FizzBuzz"
#     elif num % 3 == 0:
#         return "Fizz"
#     elif num % 5 == 0:
#         return "Buzz"
#     else:
#         return str(num)

# print(fizz_buzz(3))
# print(fizz_buzz(5))
# print(fizz_buzz(15))
# print(fizz_buzz(4))

# ------------------------------------------------------------------------------------------------------------------

# Date: 28 - August - 2020
# Source: https://leetcode.com/problems/to-lower-case/
# Title: To Lower Case

# Instructions:
# Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

# Examples:
# Example 1:
# Input: "Hello"
# Output: "hello"

# Example 2:
# Input: "here"
# Output: "here"

# Example 3:
# Input: "LOVELY"
# Output: "lovely"

# Work: 
# def toLowerCase(s):
#     return s.lower()

# s = 'HELLO'
# print(toLowerCase(s))

# ------------------------------------------------------------------------------------------------------------------

# Date: 27 - August - 2020
# Source: https://leetcode.com/problems/find-numbers-with-even-number-of-digits/ 
# Title: Find Numbers with Even Number of Digits

# Instructions:
# Given an array nums of integers, return how many of them contain an even number of digits.

# Examples:

# Example 1:
# Input: nums = [12,345,2,6,7896]
# Output: 2
# Explanation: 
# 12 contains 2 digits (even number of digits). 
# 345 contains 3 digits (odd number of digits). 
# 2 contains 1 digit (odd number of digits). 
# 6 contains 1 digit (odd number of digits). 
# 7896 contains 4 digits (even number of digits). 
# Therefore only 12 and 7896 contain an even number of digits.

# Example 2:
# Input: nums = [555,901,482,1771]
# Output: 1 
# Explanation: 
# Only 1771 contains an even number of digits.

# Notes:
# 1 <= nums.length <= 500
# 1 <= nums[i] <= 10^5

# Work: 
# def findNumbers(nums):
#     count = 0
#     for n in nums:
#         # print(len(str(n)))
#         if len(str(n)) % 2 == 0:
#             count+=1
#     return count

# nums = [12,345,2,6,7896]
# nums = [555,901,482,1771]
# print(findNumbers(nums))

# ------------------------------------------------------------------------------------------------------------------

# Date: 26 - August - 2020
# Source: https://leetcode.com/problems/split-a-string-in-balanced-strings/
# Title: Split a String in Balanced Strings

# Instructions:
# Balanced strings are those who have equal quantity of 'L' and 'R' characters.
# Given a balanced string s split it in the maximum amount of balanced strings.
# Return the maximum amount of splitted balanced strings.

# Examples:
# Example 1:
# Input: s = "RLRRLLRLRL"
# Output: 4
# Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

# Example 2:
# Input: s = "RLLLLRRRLR"
# Output: 3
# Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

# Example 3:
# Input: s = "LLLLRRRR"
# Output: 1
# Explanation: s can be split into "LLLLRRRR".

# Example 4:
# Input: s = "RLRRRLLRLL"
# Output: 2
# Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'

# Notes:
# 1 <= s.length <= 1000
# s[i] = 'L' or 'R'

# Work: 
# def balancedStringSplit(s):
#     i=l=r=count=0
#     while i < len(s):
#         if s[i] == "L":
#             l+=1
#         else:
#             r+=1
#         if l==r:
#             count+=1
#             r=l=0
#         i+=1
#     return count

# s = "RLLLLRRRLR"
# print(balancedStringSplit(s))

# ------------------------------------------------------------------------------------------------------------------

# Date: 26 - August - 2020
# Source: https://leetcode.com/problems/create-target-array-in-the-given-order/
# Title: Create Target Array in the Given Order

# Instructions:
# Given two arrays of integers nums and index. Your task is to create target array under the following rules:
# Initially target array is empty.
# From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
# Repeat the previous step until there are no elements to read in nums and index.
# Return the target array.
# It is guaranteed that the insertion operations will be valid.

# Examples:

# Example 1:
# Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
# Output: [0,4,1,3,2]
# Explanation:
# nums       index     target
# 0            0        [0]
# 1            1        [0,1]
# 2            2        [0,1,2]
# 3            2        [0,1,3,2]
# 4            1        [0,4,1,3,2]

# Example 2:
# Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
# Output: [0,1,2,3,4]
# Explanation:
# nums       index     target
# 1            0        [1]
# 2            1        [1,2]
# 3            2        [1,2,3]
# 4            3        [1,2,3,4]
# 0            0        [0,1,2,3,4]

# Example 3:
# Input: nums = [1], index = [0]
# Output: [1]

# Notes:
# 1 <= nums.length, index.length <= 100
# nums.length == index.length
# 0 <= nums[i] <= 100
# 0 <= index[i] <= i

# Work: 
# def createTargetArray(nums, idx):
#     target = list()
#     for i, n in enumerate(idx):
#         target.insert(n, nums[i])
#     return target

# nums = [1]
# idx = [0]

# nums = [1,2,3,4,0]
# idx = [0,1,2,3,0]

# nums = [0,1,2,3,4]
# idx = [0,1,2,2,1]
# print(createTargetArray(nums, idx))

# ------------------------------------------------------------------------------------------------------------------

# Date: 25 - August - 2020
# Source: https://leetcode.com/problems/xor-operation-in-an-array/
# Title: XOR Operation in an Array

# Instructions:
# Given an integer n and an integer start.
# Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.
# Return the bitwise XOR of all elements of nums.

# Examples:

# Example 1:
# Input: n = 5, start = 0
# Output: 8
# Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
# Where "^" corresponds to bitwise XOR operator.

# Example 2:
# Input: n = 4, start = 3
# Output: 8
# Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.

# Example 3:
# Input: n = 1, start = 7
# Output: 7

# Example 4:
# Input: n = 10, start = 5
# Output: 2

# Notes:
# 1 <= n <= 1000
# 0 <= start <= 1000
# n == nums.length

# Work: 
# def xorOperation(n, start):
#     first = start
#     new = [start+n*2 for n in range(n)]
#     result = 0
#     for i,n in enumerate(new):
#         print(f"{new[i]}")
#         result^=new[i]

#     return result

# n = 4
# start = 3
# print(xorOperation(n,start))

# ------------------------------------------------------------------------------------------------------------------

# Date: 25 - August - 2020
# Source: https://leetcode.com/problems/decompress-run-length-encoded-list/
# Title: Decompress Run-Length Encoded List

# Instructions:
# We are given a list nums of integers representing a list compressed with run-length encoding.
# Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  
# For each such pair, there are freq elements with value val concatenated in a sublist. 
# Concatenate all the sublists from left to right to generate the decompressed list.
# Return the decompressed list.

# Examples:

# Example 1:
# Input: nums = [1,2,3,4]
# Output: [2,4,4,4]
# Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
# The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
# At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

# Example 2:
# Input: nums = [1,1,2,3]
# Output: [1,3,3]

# Notes:
# 2 <= nums.length <= 100
# nums.length % 2 == 0
# 1 <= nums[i] <= 100

# Work: 
# def decompressRLEList(nums):
#     l = list()
#     start = 0
#     end = 2
#     lenN = len(nums) / 2
#     result = list()
#     while len(l) < lenN:
#         l.append(nums[start:end])
#         start+=2
#         end+=2

#     for n in l:
#         result_val = [n[1]]*n[0]
#         result.extend(result_val)

#     return result

# nums = [1,1,2,3]
# print(decompressRLEList(nums))

# ------------------------------------------------------------------------------------------------------------------

# Date: 25 - August - 2020
# Source: https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
# Title: Subtract the Product and Sum of Digits of an Integer

# Instructions:
# Given an integer number n, return the difference between the product of its digits and the sum of its digits.

# Examples:

# Example 1:
# Input: n = 234
# Output: 15 
# Explanation: 
# Product of digits = 2 * 3 * 4 = 24 
# Sum of digits = 2 + 3 + 4 = 9 
# Result = 24 - 9 = 15

# Example 2:
# Input: n = 4421
# Output: 21
# Explanation: 
# Product of digits = 4 * 4 * 2 * 1 = 32 
# Sum of digits = 4 + 4 + 2 + 1 = 11 
# Result = 32 - 11 = 21

# Notes:
# 1 <= n <= 10^5

# Work: 
# import math
# def subtractProductAndSum(n):
    # FINAL PASS --> better
    # newN = [int(char) for char in str(n)]

    # return math.prod(newN) - sum(newN)
    
    # SECOND PASS --> not very fast
    # newN = [int(char) for char in str(n)]
    #     productN = 1
    #     for num in newN:
    #         productN*=int(num)

    #     return productN - sum(newN)
    
    # FIRST PASS
    # newN = [char for char in str(n)]
    # productN = 1
    # for num in newN:
    #     productN *= int(num)

    # sumN = 0
    # for num in newN:
    #     sumN+=int(num)

    # return productN - sumN

# n = 222
# print(subtractProductAndSum(n))

# ------------------------------------------------------------------------------------------------------------------

# Date: 25 - August - 2020
# Source: https://leetcode.com/problems/shuffle-string/
# Title: Shuffle String

# Instructions:
# Given a string s and an integer array indices of the same length.
# The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
# Return the shuffled string.

# Examples:

# Example 1:
# Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
# Output: "leetcode"
# Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

# Example 2:
# Input: s = "abc", indices = [0,1,2]
# Output: "abc"
# Explanation: After shuffling, each character remains in its position.

# Example 3:
# Input: s = "aiohn", indices = [3,1,4,2,0]
# Output: "nihao"

# Example 4:
# Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
# Output: "arigatou"

# Example 5:
# Input: s = "art", indices = [1,0,2]
# Output: "rat"

# Notes:
# s.length == indices.length == n
# 1 <= n <= 100
# s contains only lower-case English letters.
# 0 <= indices[i] < n
# All values of indices are unique (i.e. indices is a permutation of the integers from 0 to n - 1).

# Work: 
# def restoreString(s, indices):
#     newS = [char for char in s]
#     d = dict()
#     idx = 0
#     for num in indices:
#         d[num] = newS[idx]
#         idx+=1
#     sorted_word = sorted(d.items(), key=lambda x: x[0])

#     result = ' '
#     for i in sorted_word:
#         result+=i[1]
    
#     return result


# s = 'codeleet'
# indices = [4,5,6,7,0,2,1,3]
# print(restoreString(s, indices))

# ------------------------------------------------------------------------------------------------------------------

# Date: 25 - August - 2020
# Source: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
# Title: How Many Numbers Are Smaller Than the Current Number

# Instructions:
# Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
# That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
# Return the answer in an array.

# Examples:

# Example 1:
# Input: nums = [8,1,2,2,3]
# Output: [4,0,1,1,3]
# Explanation: 
# For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
# For nums[1]=1 does not exist any smaller number than it.
# For nums[2]=2 there exist one smaller number than it (1). 
# For nums[3]=2 there exist one smaller number than it (1). 
# For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

# Example 2:
# Input: nums = [6,5,4,8]
# Output: [2,1,0,3]

# Example 3:
# Input: nums = [7,7,7,7]
# Output: [0,0,0,0]

# Notes:
# 2 <= nums.length <= 500
# 0 <= nums[i] <= 100

# Work: 
# def smallerNumbersThanCurrent(nums):
#     counter_d = {num:nums.count(num) for num in set(nums)}

#     result = list()
#     for num in nums:
#         count = 0
#         for counter in counter_d:
#             if num > counter:
#                 count+=counter_d[counter]
#         result.append(count)
#     return counter_d


# nums = [6,5,4,8]
# print(smallerNumbersThanCurrent(nums))

# ------------------------------------------------------------------------------------------------------------------

# Date: 24 - August - 2020
# Source: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
# Title: Number of Steps to Reduce a Number to Zero

# Instructions:
# Given a non-negative integer num, return the number of steps to reduce it to zero. 
# If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

# Examples:

# Example 1:
# Input: num = 14
# Output: 6
# Explanation: 
# Step 1) 14 is even; divide by 2 and obtain 7. 
# Step 2) 7 is odd; subtract 1 and obtain 6.
# Step 3) 6 is even; divide by 2 and obtain 3. 
# Step 4) 3 is odd; subtract 1 and obtain 2. 
# Step 5) 2 is even; divide by 2 and obtain 1. 
# Step 6) 1 is odd; subtract 1 and obtain 0.

# Example 2:
# Input: num = 8
# Output: 4
# Explanation: 
# Step 1) 8 is even; divide by 2 and obtain 4. 
# Step 2) 4 is even; divide by 2 and obtain 2. 
# Step 3) 2 is even; divide by 2 and obtain 1. 
# Step 4) 1 is odd; subtract 1 and obtain 0.

# Example 3:
# Input: num = 123
# Output: 12

# Notes:
# 0 <= num <= 10^6

# Work: 
# def numberOfSteps(num):
    # option 2 based on the cookie monster/fibonacci problem
    # d = dict()
    # if num in d:
    #     return d[num]
    # if num <= 0:
    #     return 0
    # if num % 2 == 0:
    #     result = 1 + numberOfSteps(num/2)
    # else:
    #     result = 1 + numberOfSteps(num-1)
    # d[num] = result
    # return result

    # option 1
    # if num <= 0:
    #     return 0
    # if num % 2 == 0:
    #     return 1+numberOfSteps(num/2)
    # else:
    #     return 1+numberOfSteps(num-1)

# num = 123
# print(numberOfSteps(num))


# ------------------------------------------------------------------------------------------------------------------

# Date: 24 - August - 2020
# Source: https://leetcode.com/problems/jewels-and-stones/
# Title: Jewels and Stones

# Resources: 

# Instructions:
# You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  
# Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
# The letters in J are guaranteed distinct, and all characters in J and S are letters. 
# Letters are case sensitive, so "a" is considered a different type of stone from "A".

# Examples:

# Example 1:
# Input: J = "aA", S = "aAAbbbb"
# Output: 3

# Example 2:
# Input: J = "z", S = "ZZ"
# Output: 0

# Notes:
# S and J will consist of letters and have length at most 50.
# The characters in J are distinct.

# Work: 
# def numJewelsInStones(jewels, stones):
#     newJs = [char for char in jewels]
#     newSs = [char for char in stones]
#     countNum = 0
#     for char in newJs:
#         newNums = newSs.count(char)
#         countNum += newNums
#     # return f"{newJs}, {newSs}"
#     return countNum

# jewels = "z"
# stones = "ZZ"
# print(numJewelsInStones(jewels, stones))

# ------------------------------------------------------------------------------------------------------------------

# Date: 24 - August - 2020
# Source: https://leetcode.com/problems/defanging-an-ip-address/
# Title: Defanging an IP Address

# Instructions:
# Given a valid (IPv4) IP address, return a defanged version of that IP address.
# A defanged IP address replaces every period "." with "[.]".

# Examples:

# Example 1:
# Input: address = "1.1.1.1"
# Output: "1[.]1[.]1[.]1"

# Example 2:
# Input: address = "255.100.50.0"
# Output: "255[.]100[.]50[.]0"

# Notes:
# The given address is a valid IPv4 address.

# Work: 
# def defangingIPaddr(address):
#     newAddr = address.split('.')
#     ip = list()
#     for i, num in enumerate(newAddr):
#         if i < len(newAddr)-1:
#             ip.append(num+'[.]')
#         else:
#             ip.append(num)
#     return "".join(ip)

# a = "1.1.1.1"
# print(defangingIPaddr(a))

# ------------------------------------------------------------------------------------------------------------------

# Date: 24 - August - 2020
# Source: https://leetcode.com/problems/number-of-good-pairs/
# Title: Number of Good Pairs

# Instructions:
# Given an array of integers nums.
# A pair (i,j) is called good if nums[i] == nums[j] and i < j.
# Return the number of good pairs.

# Examples:

# Example 1:
# Input: nums = [1,2,3,1,1,3]
# Output: 4
# Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

# Example 2:
# Input: nums = [1,1,1,1]
# Output: 6
# Explanation: Each pair in the array are good.

# Example 3:
# Input: nums = [1,2,3]
# Output: 0

# Notes:
# 1 <= nums.length <= 100
# 1 <= nums[i] <= 100

# Work: 
# def numIdenticalPairs(nums):
#     count = 0
#     for i, val in enumerate(nums):
#         for j, val in enumerate(nums):
#             if nums[i] == nums[j] and i < j:
#                 count+=1
#     return count

# nums = [1,2,3]
# print(numIdenticalPairs(nums))


# ------------------------------------------------------------------------------------------------------------------

# Date: 24 - August - 2020
# Source: https://leetcode.com/problems/shuffle-the-array/
# Title: Shuffle the Array

# Instructions:
# Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
# Return the array in the form [x1,y1,x2,y2,...,xn,yn].

# Examples:

# Example 1:
# Input: nums = [2,5,1,3,4,7], n = 3
# Output: [2,3,5,4,1,7] 
# Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

# Example 2:
# Input: nums = [1,2,3,4,4,3,2,1], n = 4
# Output: [1,4,2,3,3,2,4,1]

# Example 3:
# Input: nums = [1,1,2,2], n = 2
# Output: [1,2,1,2]

# Notes:
# 1 <= n <= 500
# nums.length == 2n
# 1 <= nums[i] <= 10^3

# Work: 
# def shuffle(nums, n):
#     shuffled = list()
#     for i, val in enumerate(nums):
#         if i >= n:
#             break
#         else:
#             shuffled.append(nums[i])
#             shuffled.append(nums[i+n])
#     return shuffled


# nums = [2,5,1,3,4,7]
# n = 3

# print(shuffle(nums, n))

# ------------------------------------------------------------------------------------------------------------------

# Date: 23 - August - 2020
# Source: https://edabit.com/challenge/pfn6QRn6eiTHEPpSs
# Title: Drunken Python
# Resources: https://realpython.com/convert-python-string-to-int/

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
# str, int = int, str

# def int_to_str(num):
#     return str(num)
    # return "'{}'".format(num)

# def str_to_int(num):
#     return int(num)
    # return ("%d" % int(num))
    # return ("{:d}".format(int(num)))

# print(int_to_str(100))
# print(str_to_int('7'))
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