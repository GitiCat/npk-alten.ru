import "babel-polyfill"

/**
 * parameters of the connection with data base
 */
let db_connection = {
    host        : 'locahost',
    database    : 'alten_db',
    user        : 'admin',
    password    : '1528340aa'
};

/**
 * async function processing of return data from data base
 * @param {stringArray} queries array for return of data
 */
export async function getQuery(queries = []) {
    let socket = net.createConnection(db_connection, () => {

    });
}