//  it works but shows errors if we try to run also jest in another bash  when docker compose  is also running.
//  Also, when running docker composer with entrypoint jest ,testing works just fine

POSTGRES_DB_CONNECTION_STRING = "postgres://postgres:postgres@postgres:5432/postgres"
POSTGRES_TEMP_DB_CONNECTION_STRING = "postgres://postgres:postgres@postgres:5432/postgres"


//  does not work,keeps showing getaddrinfo ENOTFOUND postgres error

 POSTGRES_DB_CONNECTION_STRING: '${POSTGRES_DB_CONNECTION_STRING}'
 POSTGRES_TEMP_DB_CONNECTION_STRING: '${POSTGRES_TEMP_DB_CONNECTION_STRING}'




