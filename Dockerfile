# Étape 1: Build de l'application Next.js
FROM node:18-alpine AS builder

WORKDIR /app

# Copier les fichiers de package pour le cache des couches Docker
COPY package*.json ./

# Installer TOUTES les dépendances (y compris devDependencies pour le build)
RUN npm ci

# Copier le code source
COPY . .

# Build de l'application
RUN npm run build

# Étape 2: Serveur nginx pour les fichiers statiques
FROM nginx:alpine AS production

# Copier la configuration nginx personnalisée
COPY nginx.conf /etc/nginx/nginx.conf

# Copier les fichiers statiques depuis l'étape de build
# Pour Next.js avec export statique, les fichiers sont dans /app/out
COPY --from=builder /app/out /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"] 