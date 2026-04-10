FROM node:20-alpine

WORKDIR /app

COPY ./package.json ./package.json

COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

# ENV DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"

# RUN npx prisma migrate (because we build while running it, we need to run the migration here)

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && node dist/index.js"]