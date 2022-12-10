const app = require("./app");

const PORT = process.env.PORT || 8080;

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.info(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
