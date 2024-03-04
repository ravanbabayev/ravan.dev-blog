# Base image olarak Node.js kullanın
FROM node:alpine

# Çalışma dizinini /app olarak ayarlayın
WORKDIR /app

# PM2'yi global olarak yükleyin
RUN npm install --global pm2

# package.json ve package-lock.json'ı kopyalayın
COPY package*.json ./

# Bağımlılıkları yükleyin
RUN npm install

# Projenizi kopyalayın
COPY . .

# Üretim için build yapın
RUN npm run build

EXPOSE 3000

# Uygulamayı başlatın
CMD [ "pm2-runtime", "npm", "--", "start" ]
