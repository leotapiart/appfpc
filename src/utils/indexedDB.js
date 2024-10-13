export function saveCSVtoIndexedDB(data) {
  const dbRequest = indexedDB.open("csvDB", 1);

  dbRequest.onupgradeneeded = (event) => {
    const db = event.target.result;
    db.createObjectStore("csvData", { keyPath: "id" });
  };

  dbRequest.onsuccess = (event) => {
    const db = event.target.result;
    const tx = db.transaction("csvData", "readwrite");
    const store = tx.objectStore("csvData");
    store.put({ id: "csv", data });
  };
}

export function loadCSVFromIndexedDB() {
  return new Promise((resolve, reject) => {
    const dbRequest = indexedDB.open("csvDB", 1);

    dbRequest.onsuccess = (event) => {
      const db = event.target.result;
      const tx = db.transaction("csvData", "readonly");
      const store = tx.objectStore("csvData");
      const getRequest = store.get("csv");

      getRequest.onsuccess = () => {
        resolve(getRequest.result ? getRequest.result.data : null);
      };

      getRequest.onerror = () => {
        reject(getRequest.error);
      };
    };
  });
}
