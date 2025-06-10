# Guide de Déploiement - Portfolio Next.js

## Configuration du Serveur Bmax B1 Pro

### 1. Prérequis sur le serveur

```bash
# Mise à jour du système
sudo apt update && sudo apt upgrade -y

# Installation des dépendances
sudo apt install git curl -y

# Vérification de Docker et Docker Compose
docker --version
docker-compose --version
```

### 2. Configuration du projet sur le serveur

```bash
# Cloner le repository
cd /home/votre-user/
git clone https://github.com/votre-username/yiromaric-portfolio-2024-nextjs.git
cd yiromaric-portfolio-2024-nextjs

# Créer le dossier pour les logs nginx
mkdir -p logs

# Construire et lancer le conteneur
docker-compose up -d --build
```

### 3. Configuration GitHub Actions

Ajoutez ces secrets dans votre repository GitHub (Settings > Secrets and variables > Actions) :

- `HOST` : L'adresse IP de votre serveur Bmax B1 Pro
- `USERNAME` : Votre nom d'utilisateur SSH sur le serveur
- `SSH_KEY` : Votre clé privée SSH pour l'accès au serveur
- `PORT` : Le port SSH (généralement 22)

### 4. Configuration nginx sur le serveur (optionnel)

Si vous voulez utiliser nginx comme reverse proxy devant Docker :

```nginx
# /etc/nginx/sites-available/portfolio
server {
    listen 80;
    server_name votre-domaine.com www.votre-domaine.com;

    location / {
        proxy_pass http://localhost:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 5. Commandes utiles

```bash
# Voir les logs du conteneur
docker-compose logs -f portfolio

# Redémarrer le conteneur
docker-compose restart portfolio

# Mettre à jour le site
git pull origin main
docker-compose down
docker-compose up -d --build

# Nettoyer les images Docker non utilisées
docker system prune -f
```

### 6. Configuration SSL avec Let's Encrypt (recommandé)

```bash
# Installer Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtenir un certificat SSL
sudo certbot --nginx -d votre-domaine.com

# Le renouvellement automatique est déjà configuré
```

### 7. Monitoring des ressources

Étant donné que vous utilisez un mini-ordinateur, surveillez les ressources :

```bash
# Voir l'utilisation des ressources par Docker
docker stats

# Voir l'espace disque
df -h

# Voir la mémoire
free -h
```

### 8. Optimisations pour le Bmax B1 Pro

Le docker-compose.yml inclut déjà des limites de ressources adaptées :

- Mémoire : 256MB max, 128MB réservés
- CPU : 0.5 core max, 0.25 core réservé

Ces limites peuvent être ajustées selon les performances observées.

## Dépannage

### Problème de mémoire

Si le serveur manque de mémoire, vous pouvez :

1. Réduire les limites dans docker-compose.yml
2. Ajouter du swap : `sudo fallocate -l 1G /swapfile && sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile`

### Problème de performance

1. Vérifiez les logs : `docker-compose logs portfolio`
2. Surveillez les ressources : `docker stats`
3. Ajustez les limites de ressources si nécessaire
