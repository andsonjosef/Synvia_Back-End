module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
      version: '4.4.6',
      skipMd5: true
    },
    autoStart: false
  }
}