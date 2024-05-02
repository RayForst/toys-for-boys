module.exports = {
  plugins: [
    [
      "@snowpack/plugin-sass",
      {
        compilerOptions: {
          loadPath: ["node_modules"]
        }
      }
    ]
  ]
};
