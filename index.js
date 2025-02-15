import { isMainThread, workerData, Worker } from "worker_threads";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

if (isMainThread) {
  new Worker(__filename, {
    workerData: [7, 6, 2, 3],
  });
  new Worker(__filename, {
    workerData: [1, 3, 4, 3],
  });
  console.log(`Main Thread! Process ID: ${process.pid}`);
} else {
  console.log(`Worker Thread! Process ID: ${process.pid}`);
  // [7,5,2,3].sort()
  console.log(`${workerData} sorted is ${workerData.sort()}`);
}
