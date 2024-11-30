import sql from 'mssql';

const dbSettings = {
    user: "sa",
    password: "Jd2005ayd@16YLM2",
    server: "localhost",
    database: "TodoList",
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

export const getConnections = async () => {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error)
        
    }
};