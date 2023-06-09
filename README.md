- **env** — позволяет задавать список сред, код для которых планируется проверять. В нашем случае тут имеются свойства es6, browser и node, установленные в true. Параметр es6 включает возможности ES6 за исключением модулей (эта возможность автоматически устанавливает, в блоке parserOptions, параметр ecmaVersion в значение 6). Параметр browser подключает глобальные переменные браузера, такие, как Windows. Параметр node добавляет глобальные переменные среды Node.js и области видимости, например — global.

- **extends** — представляет собой массив строк с конфигурациями, при этом каждая дополнительная конфигурация расширяет предыдущую.

- **plugins** — тут представлены правила линтинга, которые мы хотим использовать и настроить вручную.

- **parser** — по умолчанию ESLint использует синтаксический анализатор Espree, но, так как мы работаем с Babel, нам надо пользоваться Babel-ESLint.

- **parserOptions** — так как мы изменили стандартный синтаксический анализатор на babel-eslint, нам необходимо задать и свойства в этом блоке. Свойство ecmaVersion, установленное в значение 6, указывает ESLint на то, что проверяться будет ES6-код. Так как код мы пишем в EcmaScript-модулях, свойство sourceType установлено в значение module. И, наконец, так как мы используем React, что означает применение JSX, то в свойство ecmaFeatures записывается объект с ключом jsx, установленным в true.

- **rules** — Все правила, которые мы расширили или добавили с помощью плагинов, можно менять или переопределять, и делается это именно в блоке rules.
