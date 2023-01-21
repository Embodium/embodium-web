module.exports = {
  extends: ["turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
      "react/jsx-key": "off",
      '@typescript-eslint/no-unused-vars': ['error', {
	  "argsIgnorePattern": "^_",
	  "varsIgnorePattern": "^_",
	  "caughtErrorsIgnorePattern": "^_"
    }]
  },
};
