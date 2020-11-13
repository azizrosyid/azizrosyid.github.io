const dbPromise = idb.open("ucl-database", 1, (upgradeDb) => {
  const store = upgradeDb.createObjectStore("ucl-database", { keyPath: "id" });
  store.createIndex("name", "shortName");
});

function addToFavorite(dataTeam) {
  return new Promise((resolve) => {
    const { id } = dataTeam;
    checkFavorite(id).then((data) => {
      if (data) {
        dbPromise.then(function (db) {
          const tx = db.transaction("ucl-database", "readwrite");
          const store = tx.objectStore("ucl-database");
          store.delete(id);
          return tx.complete;
        });
      } else {
        dbPromise.then((db) => {
          const tx = db.transaction("ucl-database", "readwrite");
          const store = tx.objectStore("ucl-database");
          store.add({ id, ...dataTeam });
          return tx.complete;
        });
      }
      resolve(data);
    });
  });
}

function getAllSavedTeam() {
  return new Promise((resolve) => {
    dbPromise
      .then(function (db) {
        const tx = db.transaction("ucl-database", "readwrite");
        const store = tx.objectStore("ucl-database");
        return store.getAll();
      })
      .then((data) => resolve(data));
  });
}

function checkFavorite(id) {
  return dbPromise.then(function (db) {
    var tx = db.transaction("ucl-database", "readonly");
    var store = tx.objectStore("ucl-database");
    return store.get(id);
  });
}
