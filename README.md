# Subscription Manager

Приложение для отслеживания подписок, реализованное с использованием React и TypeScript, собрано с помощью Vite.

Приложение позволяет просматривать, добавлять, редактировать и удалять подписки, анализировать расходы с помощью интерактивной визуализации в виде treemap и отслеживать стоимость подписок.

Ключевой функционал:
- Просмотр списка подписок с отображением стоимости и информации
- Добавление новых подписок с указанием названия, цены и категории
- Редактирование: обновление деталей подписки в модальном окне
- Удаление подписок
- Визуализация подписок: интерактивная древовидная карта (treemap) для анализа распределения затрат
- Отображение общей стоимости подписок

## Технологии

[![](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![](https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![](https://img.shields.io/badge/-Redux%20Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![](https://img.shields.io/badge/-Emotion-FF4785?style=for-the-badge&logo=emotion&logoColor=white)](https://emotion.sh/docs/introduction)
[![](https://img.shields.io/badge/-Recharts-8884D8?style=for-the-badge&logo=recharts&logoColor=white)](https://recharts.org/)

## Структура проекта

- `src/` — исходники приложения
  - `main.tsx` — точка входа приложения
  - `App.tsx` — корневой компонент
  - `components/` — UI-компоненты
  - `features/` — бизнес-логика приложения
  - `pages/` — страницы приложения
  - `app/` — конфигурация Redux
  - `styles/` — глобальные стили и тема
  - `utils/` — вспомогательные функции

## Установка (разработка)

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```
