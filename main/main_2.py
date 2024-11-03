arr = [0, 0, 2, 12, 0, 0, 0, 0, -12, 45, 75, 0, 0, 0, 12, 545, 0, 21, 56]

def even_fn(arr):
    # c = arr.count(0)
    
    # arr_2 = list(filter(lambda x: x != 0, arr))
    
    # [arr_2.append(0) for i in range(c)]
    
    
    return sorted(arr, key=lambda x: x == 0)
    
    
print(arr)

arr_1 = even_fn(arr)

print(arr_1)
