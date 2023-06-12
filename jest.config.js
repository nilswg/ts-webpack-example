module.exports = {
    preset: 'ts-jest',
    transform: {
        './__tests__/*.test.tsx?$': 'ts-jest',
        './__tests__/*.test.jsx?$': 'babel-jest',
        // "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileTransformer.js"
    },
    // testMatch: ['**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)'],
};
