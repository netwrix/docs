if (process.platform === 'win32') {
    const { execSync } = require('child_process');
    console.log('Installing Windows-only dependency...');
    execSync('npm install --no-save @rspack/binding-win32-x64-msvc lightningcss-win32-x64-msvc @swc/html-win32-x64-msvc', { stdio: 'inherit' });
  }