// Create a class decorator `InjectTimestamp` that adds a `timestamp` property to a class.
// The decorator should modify the class so that every time an instance is created, it has the current timestamp.

function InjectTimestamp<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    timestamp: Date;

    constructor(...args: any[]) {
      super(...args);
      this.timestamp = new Date(); // Set the current date and time
    }
  };
}

@InjectTimestamp
class Report {
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

// Expected output (when creating a new instance):
const report = new Report("Quarterly Report")
report.title // "Quarterly Report"
report.timestamp // current date and time