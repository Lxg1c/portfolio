# Используем Nginx для сервинга статики
FROM nginx:alpine

# Копируем все файлы проекта в папку Nginx
COPY . /usr/share/nginx/html

# Копируем конфигурацию Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]