import PouchDB from 'pouchdb';

export default function initializeDB(dbName) {
  const local = new PouchDB(dbName);
  const remoteUrl = `http://bob:user@localhost:5984/${dbName}`;

  return {
    local,
    remoteUrl,
  };
}
