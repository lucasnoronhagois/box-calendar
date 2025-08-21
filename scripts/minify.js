const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

async function minifyFile(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf8');
    const result = await minify(code, {
      compress: {
        drop_console: true,
        drop_debugger: true,
        dead_code: true,
        unused: true
      },
      mangle: {
        toplevel: true
      }
    });
    
    fs.writeFileSync(filePath, result.code);
    console.log(`✅ Minificado: ${filePath}`);
  } catch (error) {
    console.error(`❌ Erro ao minificar ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.js')) {
      minifyFile(filePath);
    }
  });
}

// Minificar todos os arquivos .js na pasta dist
if (fs.existsSync('dist')) {
  console.log('🔧 Iniciando minificação...');
  walkDir('dist');
  console.log('✅ Minificação concluída!');
} else {
  console.log('❌ Pasta dist não encontrada. Execute npm run build primeiro.');
}
