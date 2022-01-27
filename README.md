# html-css-landing

## Задача

Реализовать лендинг как по ссылке: [ссылка](https://www.figma.com/file/BmQdG3bpkXrsza4gMuu16h)

В целях практики в проекте используется препроцессоры [pug](https://pugjs.org) и [scss](https://sass-lang.com/documentation). Для сборки
и запуска проекта используется [gulp](https://gulpjs.com/).

Критерии принятия:
- Страница должна быть отзывчивой. Минимальная ширина экрана - 320px.
  Постепенно сжимая страницу сайт должен выглядеть как на картинках по ссылке и
  не должен содержать артефактов (съехавших элементов, наложенных друг на
  друга элементов и т.д) вплоть до 320px.
- CSS селекторы должны именоваться по [БЭМ методологии](https://ru.bem.info/methodology/quick-start/).
- Запрещено использовать px. Вместо px необходимо использовать rem в дефолтной
  размерности: 1rem = 16px. Разрешено использовать px только как параметры
  для media запросов.
- По нажатию на один из элементов меню вверху страницы необходимо прокрутить
  экран до соответствующей секции на странице. Используй для этого якорные
  ссылки, никакого JS. "Home" ведет на самый верх страницы.
- Открытие/закрытие бургер-меню на мобильной версии должно осуществляться без
  помощи JS. Необходимо использовать `<input>` с `type="checkbox"`.
  Открытие/закрытие меню должно быть анимировано (slide-in from right).
- Силами HTML+CSS (без JS) реализовать простейшую валидацию формы.
  Все поля формы должны быть не пустые. Под соответствующим полем отображается
  текст об ошибке, если она есть. Форма никуда не отправляется, только проверяет
  что все ее поля заполнены верно.
- Кнопки "Learn more", "Log In", "Get Started" и "Let's talk" ничего не делают,
  но реагируют на наведение и нажатие. Все ссылки в футере ведут только на
  https://google.com.
- Готовое решение не должно содержать закомментированного кода, неиспользуемых
  селекторов, переменных и т.д. Считай, что ты выполняешь production-ready
  страницу.
- *Опционально:* Добиться зеленого рейтинга Lighthouse для десктопной и
  мобильной версии.
- *Опционально:* С помощью JS реализовать счетчик (0/400) для поля "Message" у
  формы. Счетчик должен обновляться после каждого введенного символа. Счетчик
  показывает сколько символов пользователь уже ввел в поле "Message", т.е. если
  пользователь ввел 20 символов, то счетчик будет показывать 20/400. Ввести
  больше 400 символов нельзя.

## Запуск
Установить пакеты из `package-lock.json`:
```
npm ci
```

Запустить:
```
npm run serve
```

В консоли выведется адрес запущенного проекта (см. Access URLs -> Local).
При изменениях страница перезагрузится автоматически.
