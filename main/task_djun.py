from utils import extra_check

busy =  [
    {
        'start': '10:30',
        'stop': '10:50'
    },
    {
        'start': '18:40',
        'stop': '18:50'
    },
    {
        'start': '14:40',
        'stop': '15:50',
    },
    {
        'start': '16:40',
        'stop': '17:50',
    },
    
    {
        'start': '20:05',
        'stop': '20:20',
    },

]

def foo(busy_list: list):
    new_list = []
    for item in busy_list:
        new_list.append(list(item.values()))
    
    for item in new_list:
        for i in range(2):
            
            h, m = (int(x) for x in item[i].split(':'))
            item[i] = h*60+m
    
    return new_list

def final(new_list: list):
    free_time = []
    
    for item in new_list:
        start = '{:02d}:{:02d}'.format(*divmod(item[0], 60))
        stop = '{:02d}:{:02d}'.format(*divmod(item[1], 60))

        free_time.append(
            {
                'start': start,
                'stop': stop,
            }
        )

    print(free_time)

new_list = foo(busy)


temp_arr = []; end,start = 0, 480
for i in range(480, 1261):    
    for item in new_list:
        if i >= item[0] and i <= item[1]:
            if i == item[0]:
                end = i
            if i == item[1]:
                start = i
                
            if start != 0 and end != 0 and not([start, end] in temp_arr):
                temp_arr.append([start, end])
            break


new_list.clear()

new_list = temp_arr[::2]


temp_arr.clear()

for x in new_list:
    temp_arr.extend(x if isinstance(x, list) else [x])

new_list.clear()

arr_new_list_1 = foo(busy)

# for i in range(len(temp_arr)-1):
#     if temp_arr[i]+30 < temp_arr[i+1] and extra_check(arr_new_list_1, new_list):
#         new_list.append([temp_arr[i], temp_arr[i]+30])


extra_check(arr_new_list_1)

#final(new_list)