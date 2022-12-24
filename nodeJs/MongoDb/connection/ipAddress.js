reason: TopologyDescription {
    type: 'ReplicaSetNoPrimary',
    servers: Map(3) {
      'ac-aqvk7y1-shard-00-00.pazzesj.mongodb.net:27017' => [ServerDescription],
      'ac-aqvk7y1-shard-00-01.pazzesj.mongodb.net:27017' => [ServerDescription],
      'ac-aqvk7y1-shard-00-02.pazzesj.mongodb.net:27017' => [ServerDescription]
    },
    stale: false,
    compatible: true,
    heartbeatFrequencyMS: 10000,
    localThresholdMS: 15,
    setName: 'atlas-snuyzj-shard-0',
    maxElectionId: null,
    maxSetVersion: null,
    commonWireVersion: 0,
    logicalSessionTimeoutMinutes: null
  },
  code: undefined,
  [Symbol(errorLabels)]: Set(0) {}
} mongo db error
(node:11876) UnhandledPromiseRejectionWarning: MongoServerSelectionError: connection <monitor> to 34.77.122.152:27017 closed
    at Timeout._onTimeout (H:\MERNSTACK2\UdemyBackend\mongoDB\node_modules\.pnpm\mongodb@4.12.1\node_modules\mongodb\lib\sdam\topology.js:292:38)
    at listOnTimeout (internal/timers.js:557:17)
    at processTimers (internal/timers.js:500:7)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:11876) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:11876) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

const solution = 'This error occurs due to change in ip address which was set to that of your computer but got chnaged automatically , to resolve this you simply have to let your mongo DB connect to any ip address'
