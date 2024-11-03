class Verification:
    def __init__(self, login, password):
        self.login = login
        self.password = password
        self.length_password()
        
    def length_password(self):
        if len(self.password) > 10:
            raise ValueError('Длина пароля слишком большая')
    
    def save(self):        
        with open('file.txt', 'a') as file:
            file.write(f'{self.login, self.password}\n')


class V2(Verification):
    def __init__(self, login, password):
        super().__init__(login, password)
        self.__save()
    
    def __save(self):
        with open('file.txt', 'r') as file:
            for line in file:
                if f'{self.login, self.password}\n' in line:
                    raise ValueError('Пользователь существует!')
        
        super().save()


user_1 = V2('Alex', '123456')
