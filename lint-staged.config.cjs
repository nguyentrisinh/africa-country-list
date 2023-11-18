module.exports = {
    '**/*.(ts|tsx)': () => 'tsc --noEmit',
    '**/*.(ts|tsx|js|jsx)': 'eslint',
};