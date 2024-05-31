# Đặt lại mọi thay đổi cục bộ không được commit
echo "Resetting local changes..."
git reset --hard

# Kéo thay đổi mới nhất từ remote repository
echo "Pulling latest changes from repository..."
git pull

# Quay trở lại thư mục gốc của dự án
cd ..

# Dừng và gỡ bỏ các container hiện tại
echo "Stopping and removing current Docker containers..."
docker-compose down

# Xây dựng lại và khởi động các container với các thay đổi mới
echo "Building and starting Docker containers..."
docker-compose up -d --build

echo "Deployment completed successfully."