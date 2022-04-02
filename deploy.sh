#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下 
cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
<<<<<<< HEAD
git remote add origin https://github.com/wowchiou/The-Movie-Database.git
=======
git remote add origin https://github.com/wowchiou/the-movie-database-practice.git
>>>>>>> 896e952e1abd935e08c9b370d49e30d47209d422
git checkout -b deploy
git push -f --set-upstream origin deploy

cd -