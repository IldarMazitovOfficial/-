x = 0
messages = ["Введите число, ало", "ЧИСЛО", "Число говорю", "Б**ть", "Аааа!", "Квадробер чтоле?", "А ты точно программист?", "Ало", "Нет", "Опять не попал", "Так что там с Бритни?", "Почем говорите сейчас доллар?", "Не туда, Семпай.", "Ало"]
index = 0

while x == 0:
    try:
        x = int(input("Введите число: "))
        x += 7
        print(x)
    except ValueError:
        print(messages[index])
        index = (index + 1) % len(messages)
