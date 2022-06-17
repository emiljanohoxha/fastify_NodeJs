const {build} = require('../src/app');

const env= require('./../src/config/env');

const createTableSql = "CREATE TABLE IF NOT EXISTS todos (id serial PRIMARY KEY, name VARCHAR(255) ,description VARCHAR(500),groos_amount NUMERIC,net_amount NUMERIC, excluded_vat_amount Numeric);";

const clearTableSql = "DELETE FROM todos";

const insertSql = "INSERT INTO todos (name, description, groos_amount, net_amount, excluded_vat_amount) VALUES ($1, $2, $3, $4, $5)";


 function setupTestEnv() {

    const app = build({logger: true},{},
        { connectionString:env.POSTGRES_TEMP_DB_CONNECTION_STRING});

        beforeAll(async () => {
            await app.ready();
            await app.pg.query(createTableSql);
            await app.pg.query(clearTableSql);
        })

        beforeEach(async () => {
            await app.pg.query(insertSql, ['john', 'eats lunch',20, 16.67, 3.33]);

        })

        afterEach(async () => {
            await app.pg.query(clearTableSql);
        })

        afterAll(async () => {
          await app.pg.query("drop table if exists todos")

            app.close()

        })
        return app
}

module.exports = {setupTestEnv};

