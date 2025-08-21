const { inject } = require('@vercel/analytics');

// Configuração do Vercel Analytics
const analytics = inject();

module.exports = analytics;
