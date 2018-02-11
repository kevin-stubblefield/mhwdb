module.exports = {
    
        development: {
            client: 'postgresql',
            connection: {
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_DATABASE,
                port: 5432
            }
        },
    
        production: {
            client: 'postgresql',
            connection: process.env.DATABASE_URL
        }
    
    }