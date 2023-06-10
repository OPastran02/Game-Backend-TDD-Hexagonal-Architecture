# Usa la imagen oficial de Node.js como punto de partida
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Configura las variables de entorno necesarias para Prisma
ENV DATABASE_URL=postgresql://user:password@host:port/database

# Genera los artefactos de Prisma
RUN npx prisma generate

# Expone el puerto en el que se ejecuta la aplicación
EXPOSE 3000

# Define el comando de inicio de la aplicación
CMD [ "npm", "start" ]
