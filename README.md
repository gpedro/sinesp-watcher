# sinesp-watcher

Seja notificado através do Discord sempre que houver uma atualização no Sinesp Cidadão (Android).

### dependências
- google-play-scraper `^6.2.3`
- got `^9.6.0`
- moment `^2.24.0`

### instalação
```
npm install
```

### configuração
- abra o package.json e efetue a configuração das variáveis de ambiente `NODE_ENV` e `DISCORD_WEBHOOK`
- para rodar, apenas utilize `npm start`

### licença
```
The MIT License (MIT)

Copyright (c) 2019 gpedro

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```