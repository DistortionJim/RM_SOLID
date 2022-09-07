//Dependency inversion principle

class Fetch {
  request() {
    // return fetch(url).then(r => r.json())
    return Promise.resolve('New data fetch')
  }
}

class LocalStorage {
  get() {
    const dataFromLocalStorage = 'Data from local storage'
    return dataFromLocalStorage
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch()
  }
  clientGet() {
    return this.fetch.request('google.ocm')
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage()
  }
  clientGet() {
    return this.localStorage.get()
  }
}

class Database {
  constructor(client) {
    this.client = client
  }
  getData(key) {
    return this.client.clientGet(key)
  }
}

const db = new Database(new LocalStorageClient());

console.log(db.getData('key'));

