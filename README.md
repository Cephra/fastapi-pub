# FastAPI

FastAPI ist ein Beispielprojekt für eine einfache Webanwendung mit Datenbank (PostgreSQL), Service (Loopback.io 4) und Frontend (Nuxt 2).

## Installation

Zunächst muss in einem Bash Terminal oder der Power Shell folgendes ausgeführt werden:

```bash
cp envs/linux.env .env
cp envs/app.local.env app/.env
cp envs/service.local.env service/.env
docker-compose build
```

... dann für das Frontend:

```bash
cd app
yarn install
```

... und parallel für den Service:

```bash
cd service
yarn install
```

## Starten der lokalen Umgebung

Wenn alle Abhängigkeiten installiert und alles vorbereitet ist, müssen folgende 2 Befehle parallel gestartet werden:

Für den Service:

```bash
cd service
yarn start
```

Für das Frontend:

```bash
cd app
yarn dev
```

Fertig! :)
