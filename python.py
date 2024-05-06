'''#factors of a number
num=int(input("Enter a number:"))
for i in range(1,num+1):
    if(num%i==0):
        print(i)

#largest element in an array
arr=[12,56,709,908,5678,45690,34,67]
arr.sort()
print(f"The largest element is {arr[len(arr)-1]}")

#smallest element in an array
arr1=[12,90,8,78,90,56]
arr1.sort()
print(f"The smallest element is {arr1[0]}")

#second largest element in an array
arr3=[67,90,78,56,45,89,100]
arr3.sort()
print(f"The second largest element is {arr3[len(arr3)-2]}")

#second smallest element in an array
arr4=[67,89,45,21,10]
arr4.sort()
print(f"The second smallest element is {arr4[1]}")

#reverse an array
arr5=[67,90,7,16,22]
arr5.reverse()
print(f"The reversed array is {arr5}")

#smallest and largest elements in an array
arr6=[67,89,45,21,10]
arr6.sort()
print(f"The smallest element is {arr6[0]}")
print(f"The largest element is {arr6[len(arr6)-1]}")'''

#check whether a character is vowel or not
'''char = 'a'
if(char == 'a'or char == 'e' or char == 'i' or char == 'o' or char == 'u'):
    print(f"{char} is a vowel")
else:
    print(f"{char} is a consonant")'''

#length of the string without using length function
'''name = 'Suma'
count = 0
for i in name:
    count=count+1
print(f"Length of the string is {count}")'''

#reverse a string
'''name = 'Nitya'
print(name[::-1])'''

#palindrome or not
'''name = 'Suma'
name2 = name[::-1]
if(name == name2):
    print("palindrome")
else:
    print("not a palindrome")'''

#character is an alphabet or not
'''alpha = 'z'
if(('a'<= alpha and alpha <='z') or ('A'<= alpha and alpha <='Z')):
    print("alphabet")
else:
    print("not an alphabet")'''


#count the number of vowels
'''city = 'kakinada'
count = 0
for i in city:
    if(i == 'a' or i == 'e' or i == 'i' or i == 'o' or i == 'u'):
        count=count+1
print(count)'''


#remove vowels from a string
'''place = 'california'
place = list(place)
place2 = []
for i in range(0,len(place)):
    if place[i] not in ['a', 'e', 'i', 'o', 'u']:
        place2.append(place[i])
place2 = ''.join(place2)
print(place2)'''

