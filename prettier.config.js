module.exports = {
    plugins: [
        require('prettier-plugin-organize-imports'),
        require('prettier-plugin-tailwindcss'),
    ],
    bracketSpacing: true,
    jsxBracketSameLine: true,
    singleQuote: true,
    trailingComma: 'all',
    tabWidth: 4,
    printWidth: 120,
    semi: true,
}