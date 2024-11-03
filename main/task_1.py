from random import randint

def foo(x: int):
    for i in range(2, x//2):
        if x % i == 0:
            return False
    return True

arr = [461, 967, 3, 353, 331, 281, 601, 2, 251, 179, 937, 347, 113, 293, 5, 107, 109, 137, 373, 383, 673, 89, 809, 137, 941, 181, 67, 661, 739, 43, 761, 83, 107, 503, 313, 359, 691, 389]
i = 0; c = len(arr)

arr = list(filter(foo, arr))

print(arr)