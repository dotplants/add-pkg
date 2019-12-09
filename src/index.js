const selectManager = require('./components/select-manager');
const argvScanner = require('./components/argv-scanner');

const shell = require('./utils/shell');
const { log } = require('./utils/logger');
const managers = require('./managers');

const run = async () => {
  const managerName = await selectManager();
  const m = managers[managerName];

  log(`Using ${managerName}`);

  const query = argvScanner();
  const baseCommand = m.add[query.type];
  const packages = query.packages.join(' ');

  const command = baseCommand.replace('{packages}', packages);
  log(command);
  if (query.isDryRun) {
    log(`It is dry-run. Process finished.`);
    return;
  }
  const arr = command.split(' ');
  const args = arr.slice(1);

  await shell(arr[0], args);
  process.exit();
};

run();
