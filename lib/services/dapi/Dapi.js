const DockerService = require('../../docker/DockerService');
const wait = require('../../util/wait');
const DapiClient = require('@dashevo/dapi-client');

class Dapi extends DockerService {
  /**
   * Create Dapi instance
   *
   * @param {Network} network
   * @param {Image} image
   * @param {Container} container
   * @param {DapiOptions} options
   */
  constructor(network, image, container, options) {
    super(network, image, container, options);
    this.options = options;
  }

  /**
   * Start Dapi instance
   *
   * @returns {Promise<void>}
   */
  async start() {
    await super.start();
    await this.initialize();
  }

  /**
   * Clean Dapi by restarting the instance
   *
   * @returns {Promise<void>}
   */
  async clean() {
    await super.remove();
    await this.start();
  }

  /**
   * Get Dapi RPC client
   *
   * @return {rpcClient}
   */
  getApi() {
    return this.dapiClient;
  }

  /**
   * Get Rpc port
   *
   * @return {int} port
   */
  getRpcPort() {
    return this.options.getRpcPort();
  }

  /**
   * @private
   *
   * @return {Promise<void>}
   */
  async initialize() {
    const seeds = [{ ip: '127.0.0.1' }];
    this.dapiClient = new DapiClient({
      seeds,
      port: this.options.getRpcPort(),
    });

    let starting = true;
    let numIterations = 100;
    while (starting) {
      try {
        const blockHeight = await this.dapiClient.getBestBlockHeight();
        if (blockHeight > -1) {
          starting = false;
        }
      } catch (error) {
        numIterations -= 1;
        if (numIterations < 0) {
          throw new Error('Dapi not started');
        }
        await wait(1000);
      }
    }
  }
}

module.exports = Dapi;