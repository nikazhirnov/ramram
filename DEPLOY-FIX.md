# Исправление ошибки деплоя на Railway

## Проблема
Railway пытается запустить `npm run build`, который использует Vite и ищет `index.html`.

## Решение

Я исправил конфигурацию:

1. ✅ **package.json** - команда `build` теперь просто выводит сообщение вместо запуска Vite
2. ✅ **index.html** - создан файл для редиректа на standalone.html
3. ✅ **nixpacks.toml** - обновлена конфигурация сборки
4. ✅ **railway.json** - убрана команда buildCommand

## Что нужно сделать:

1. **Загрузите обновленные файлы в GitHub:**
   ```bash
   git add .
   git commit -m "Fix Railway build configuration"
   git push
   ```

2. **Railway автоматически перезадеплоит проект**

3. **Проверьте логи** - теперь build должен пройти успешно

## Файлы для проверки:

✅ `package.json` - команда build изменена
✅ `index.html` - создан для редиректа
✅ `nixpacks.toml` - обновлена конфигурация
✅ `railway.json` - убрана проблемная команда

После загрузки изменений в GitHub, Railway автоматически перезапустит деплой.
