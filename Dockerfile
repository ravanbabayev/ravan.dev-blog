# Base image olarak Node.js kullanın
FROM node:18-alpine

# Çalışma dizinini /app olarak ayarlayın
WORKDIR /app

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
CMD ["npm", "start"]
