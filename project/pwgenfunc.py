#Removing Import Error
try:
    from string import ascii_letters, digits, punctuation, join
except ImportError:
    from string import ascii_letters, digits, punctuation
from random import choice, sample, randint
# specific imports to make this small, fast, efficient

#Methods


def RandPass(size = 8):
    
    s0 = ascii_letters # upper AND lower cases
    s1 = digits
    s3 = "!$%^&*- _~" # this set of special characters contains a space
	
    s = s0 + s1
    s_full = s + s3
    passlen = size.get()  #get the value int value

    new_password = ""

    # assigning specific sizes for each section of the pw generated
    if passlen%2==0 :
        front = passlen // 3    #if the len is even then we need the quotient that will be front
    else:
        front = passlen // 2    
    mid = 2
    back = passlen - (front + mid) - 1

    p0 = "".join(choice(s0)) # First Character
    p1 = "".join(sample(s_full,front ))
    p2 = "".join(sample(s3,mid))   
    p3 = "".join(sample(s,back ))   
    

    
    new_password = p0 + p1 + p2 + p3     #This is our generated Password
    
    if passlen <= 8:
        msg = 'VERY WEAK'
        colorVal = "#6d0001"
    elif passlen <=10:
        msg = 'WEAK'
        colorVal = "#cc0000"
    elif passlen <=12:
        msg = 'DECENT'
        colorVal = "#fc8600"
    elif passlen <=14:
        msg = 'GOOD'
        colorVal = "#eae200"
    elif passlen <=16:
        msg = 'STRONG'
        colorVal = "#9ff400"
    elif passlen <=18:
        msg = 'VERY STRONG'
        colorVal = "#007715"
    elif passlen >18:
        msg = 'EXCELLENT'
        colorVal = "#001fef"
    else:
        pass

    return new_password, msg, colorVal
