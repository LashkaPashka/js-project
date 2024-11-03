class Authentication:
    
    __username: str
    __password: str

    def __init__(self, username, password) -> None:
        self.__username = username
        self.__password = password
        
    def login(self):
        with open('file.txt') as file:
            if f'{self.__username, self.__password}\n' in file:
                print('Вы успешно авторизовались!')
            else:
                raise ValueError('Пользователя не существует!')

    def register(self):
        with open('file.txt', 'r') as file:
                if not (f'{self.__username, self.__password}\n' in file):
                    self.__save()
                else:
                    raise ValueError('Пользователь существует!')
                
    def __save(self):
        with open('file.txt', 'a') as file:
            file.write(f'{self.__username, self.__password}\n')
        

user = Authentication('Anton', '123456')

user.login()