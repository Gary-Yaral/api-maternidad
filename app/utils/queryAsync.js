async function querySQL(sql, connection) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}

async function multiQuerySQL(sql, data, connection) {
  return new Promise((resolve, reject) => {
    connection.query(sql, data, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
}


module.exports = { querySQL, multiQuerySQL }