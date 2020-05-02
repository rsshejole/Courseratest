
slist = [' ',' ',' ',' ',' ',' ',' ',' ',' ']
from IPython.display import clear_output
def choose():
    global x 
    x = input ("Player 1 choose between X or O:")
    x.lower()
    global y
    if x == 'x':
        y = 'o'
    else:
        y = 'x'
def player1(x):
    global q
    q = int(input ("PLAYER 1:Choose the position to mark "))
def player2(y):
    global w
    w = int(input ("PLAYER 2:Choose the position to mark "))
def show():
    print (slist[0] + '__|__',slist[1] + '__|__',slist[2] )
    print (slist[3] + '__|__',slist[4] + '__|__',slist[5] )
    print (slist[6] + '  |  ',slist[7] + '  |  ',slist[8] )
def play():
    
    
    for o in range(0,9):
        show()
        
        if o%2==0:
            player1(x)
            slist[q-1] = x
            show()
            
                      
        else:
            player2(y)
            slist[w-1] = y
            show()
            
        clear_output()
            
        if ((slist[0]==slist[1]==slist[2] == x) or (slist[0]==slist[3]==slist[6]== x) or (slist[1]==slist[4]==slist[7]== x) or (slist[2]==slist[5]==slist[8]== x) or (slist[0]==slist[4]==slist[8]== x) or (slist[2]==slist[4]==slist[6]== x) or (slist[3]==slist[4]==slist[5]== x) or (slist[6]==slist[7]==slist[8]) == x):
            print("|***PLAYER 1 WINS***| ")
            break
        elif ((slist[0]==slist[1]==slist[2] == y) or (slist[0]==slist[3]==slist[6]== y) or (slist[1]==slist[4]==slist[7] == y) or (slist[2]==slist[5]==slist[8] == y) or (slist[0]==slist[4]==slist[8] == y) or (slist[2]==slist[4]==slist[6] == y) or (slist[3]==slist[4]==slist[5] == y) or (slist[6]==slist[7]==slist[8]) == y):
            print("|***PLAYER 2 WINS***| ")
            break
      
        
   
p = "" 

choose() 
play()


if (slist[0] != ' ') and (slist[1] != ' ') and (slist[2] != ' ') and (slist[3] != ' ') and (slist[4] != ' ') and (slist[5] != ' ') and (slist[6] != ' ') and (slist[7] != ' ') and (slist[8] != ' '):
    print("TIE")
else:
    print("CONGRATS")

p = input ("Do you want to play again:'yes' or 'no':")
p.lower()
while  (p == "yes"):
    clear_output()
    slist = [' ',' ',' ',' ',' ',' ',' ',' ',' ']
    choose() 
    play()
    p = input ("Do you want to play again :'yes' or 'no':")
    p.lower()
clear_output()
print ("COME BACK AGAIN")