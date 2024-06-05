FROM node:19-alpine3.16 as builder
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

COPY . .

RUN npm i

RUN npm run build


FROM node:19-alpine3.16 as runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]