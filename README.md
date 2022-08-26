# FastAPI

FastAPI ist ein Beispielprojekt für eine einfache Webanwendung mit Datenbank (PostgreSQL), Backend (Loopback.io 4) und Frontend (Nuxt 2).

## Installation

Zunächst muss in einem Bash Terminal oder der Power Shell folgendes ausgeführt werden:

```bash
cp envs/app.local.env app/.env
cp envs/backend.local.env backend/.env
docker-compose build
```

... dann für das Frontend:

```bash
cd app
yarn install
```

... und parallel für das Backend:

```bash
cd backend
yarn install
```

## Starten der lokalen Umgebung

Wenn alle Abhängigkeiten installiert und alles vorbereitet ist, müssen folgende 2 Befehle parallel gestartet werden:

Für's Backend:

```bash
cd backend
yarn start
```

Für's Frontend:

```bash
cd app
yarn dev
```

Fertig! :)