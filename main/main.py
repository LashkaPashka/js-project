class Page:
    pages_components: list = []
    
    def add_components(self, data: dict):
        if not (isinstance(data['text_1'], str) and isinstance(data['image'], str) and 
            isinstance(data['text_2'], str) and isinstance(data['comment'], str)):
            raise ValueError('Некорректно введены данные')
        
        
        temp_list = list(data.items())
        temp_list[0], temp_list[2] = temp_list[2], temp_list[0]
        
        self.pages_components.append(dict((x, y) for x, y in temp_list))
    
    def delete_components(self, data: dict, key: str):
        data.pop(key)
    
    def insert_component(self, data: dict, data_update: dict):
        data.update(data_update)
        
    def __str__(self):
        temp = [list(item.values()) for item in self.pages_components]
        
        return '   '.join(temp[0])


first_dict = {
    'text_1': 'Hello Ivan',
    'image': 'Cotici',
    'text_2': 'Ivan',
    'comment': 'Well done!, Jessica',
}


page = Page()
page.add_components(first_dict)

page.delete_components(first_dict, 'image')

page.insert_component(first_dict, {'rewiews': 'It\'s site very good!'})

print(page)

#метод isinstance - возвращает булевое значение True если перменная соответстует типу данных 