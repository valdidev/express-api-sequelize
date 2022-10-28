import app from './app.js';
import { sequelize } from "./database/db.js";

const PORT = 3000;

// testing the connection
async function main() {
    try {
        console.log('Connection has been established successfully')
        await sequelize.authenticate()
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();


