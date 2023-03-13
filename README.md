## 說明
實作提醒事項

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
DB_HOST=資料庫ip
DB_PORT=資料庫port
DB_DATABASE=資料庫名稱
DB_USERNAME=資料庫帳號
DB_PASSWORD=資料庫密碼
```
```
php artisan migrate --seed
```

## 啟動命令
執行系統
```
php artisan serve --port=8001
```

瀏覽器執行:
```
http://localhost:8001
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

### v1.2.1
- 優化內容

### v1.3.0
- 新增文件夾顏色功能
- 新增根據文件夾顏色自行判斷文字顏色的功能

### v1.3.1
- 調整UI位置
- 調整提醒事項新增功能，新增開始時間至結束期限的欄位