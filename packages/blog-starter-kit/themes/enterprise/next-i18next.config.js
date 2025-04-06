module.exports = {
  i18n: {
    defaultLocale: 'vi', // Ngôn ngữ mặc định
    locales: ['en', 'vi'], // Danh sách ngôn ngữ hỗ trợ
    localeDetection: false, // Tắt tự động phát hiện ngôn ngữ từ trình duyệt
  },
  localePath: './i18n/locales', // Thư mục chứa file dịch
  reloadOnPrerender: process.env.NODE_ENV === 'development', // Reload file dịch khi dev
  react: {
    useSuspense: false, // Tắt suspense để tránh lỗi trong React
  },
  defaultNS: 'common', // Namespace mặc định
  ns: ['common', 'navigation', 'blog', 'footer'], // Các namespace sẽ load
};