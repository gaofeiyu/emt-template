module.exports = {
  'app/**/*': 'prettier --write --ignore-unknown',
  'app/**.{js,jsx,ts,tsx}': 'eslint --ext .ts',
};
