const createDashCore = require('./services/dashCore/createDashCore');
const startDashCore = require('./services/dashCore/startDashCore');

const createInsightApi = require('./services/insightApi/createInsightApi');
const startInsightApi = require('./services/insightApi/startInsightApi');

const startDapi = require('./services/startDapi');
const createDapiCore = require('./services/dapi/core/createDapiCore');
const createDapiTxFilterStream = require('./services/dapi/txFilterStream/createDapiTxFilterStream');

const createDriveAbci = require('./services/drive/abci/createDriveAbci');
const startDrive = require('./services/startDrive');

const createMongoDb = require('./services/mongoDb/createMongoDb');
const startMongoDb = require('./services/mongoDb/startMongoDb');

const createTendermintCore = require('./services/tendermintCore/createTendermintCore');
const startTendermintCore = require('./services/tendermintCore/startTendermintCore');

const mocha = require('./mocha');

const createMachine = require('./services/drive/abci/createDriveAbci');

module.exports = {
  createDashCore,
  startDashCore,
  createInsightApi,
  startInsightApi,
  createDapiCore,
  createDapiTxFilterStream,
  startDapi,
  createDriveAbci,
  startDrive,
  createMongoDb,
  startMongoDb,
  createTendermintCore,
  startTendermintCore,
  mocha,
  createMachine,
};
