#SOE

test=int(input('Enter Number of test cases'))

while test !=0:
    t=list(map(int,input('Enter test case(m,n):').split()))
    m=t[0]
    n=t[1]
    multi=2
    a=[0 for x in range(n+1)]
    for x in range(2,n+1):
        while x*multi<=n:
            a[x*multi]=1
            multi=multi+1
        multi=2
        if x*multi>n:
            break
    for x in range(2,n+1):
        if (a[x]==0) and ((x>=m)):
            print(x,end=' ')
    test=test-1
    print('\n')