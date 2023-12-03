# Product consumer api

Una api para el consumo de dummyjson.

_En este readme_

- [Instalacion](#ins)
- [Desarrollo](#des)
- [Compilación](#com)
- [Notas](#not)

## Instalación<a name="ins"></a>

Al clonar este repositorio o descargarlo desde un fork el siguiente paso sería instalar con npm o yarn. (El gestor de la documentación tiene problemas de interpretación por parte de pnpm)

```shell

    npm install

    # ó

    yarn install

```

## Desarrollo<a name="des"></a>

Luego para ver en modo de desarrollo puedes ejecutar

```shell

    npm run dev

    # ó

    yarn dev

```

Automáticamente se generarán los archivos de documentación. Si ingresas a <code>http://localhost:3000</code> podrás visualizar la documentación y en <code>http://localhost:3000/api/products</code> tendrás disponible los endoints del api

## Compilación<a name="com"></a>

Ejecutando <code>npm run build</code> ó <code>yarn build</code> compilarás el proyecto y se te generará un nuevo folder llamado dist. Allí podrás visualizar el resultado que irá a producción. Si ejecutas <code>npm start</code> ó <code>yarn start</code> verás directaente el resultado de la compilación,

## Notas<a name="not"></a>

Este proyecto usa husky, commitlint y conventional commits para una mejor unificación en cuanto a lo que se sube al repositorio principal. Si no tiene ningún conocimiento sobre husky, commitlint o conventional commits y cómo utilizarlos le recomiendo los siguientes recursos.

- [Git commits profesionales - Carlos azaustre](https://www.youtube.com/watch?v=SigVVJmUGv8&t=600s)

- [Mejora los commits de tu equipo - Programación en español](https://www.youtube.com/watch?v=EdXgW4kMWe8)
