FROM commnerd/workspace

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y \
        php-sqlite3 \
        phpunit

RUN curl -sL https://deb.nodesource.com/setup_11.x | bash -

RUN apt-get install -y nodejs

RUN npm i -g yarn n && n latest

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    sudo php composer-setup.php --filename=composer --install-dir=/usr/bin && \
    php -r "unlink('composer-setup.php');"

EXPOSE 80 9000

CMD ["supervisord", "-nc", "/etc/supervisor/supervisord.conf"]
