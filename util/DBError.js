class DBError extends Error {
  constructor(status, message, ...params) {
    super(...params)

    this.name = 'DBError';
    this.status = status;
    this.message = message;
  }
}

module.exports = DBError;
