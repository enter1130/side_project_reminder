## 部署環境

安裝Composer：
```
composer install
```

安裝npm：
```
npm install
npm run dev
```

複製一份env.example 並命名為.env：
```
copy .env.example .env
```

設置.env的APP_KEY：
```
php artisan key:generate
```

設置上傳文件保存位置：
```
php artisan storage:link
```

設置.env資料庫參數：
```
DB_CONNECTION=mysql
DB_HOST=目標資料庫的ip
DB_PORT=3306
DB_DATABASE=esg_rank
DB_USERNAME=admin
DB_PASSWORD=admin
```
```
php artisan migrate --seed
```

## 啟動命令
執行系統
```
php artisan serve
```

瀏覽器執行:
```
http://localhost:8000
```

### v1.0.0
- 提醒事項功能

### v1.1.0
- 通知中心及通知功能
- 通知無視功能

### v1.1.1
- 修正通知刪除功能

### v1.2.0
- 新增文件夾功能