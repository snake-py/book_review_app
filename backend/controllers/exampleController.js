// import required models



// Write controller
class ExampleController {
  async example(data) {
    return `processed: ${data}`;
  }
}

const examples = new ExampleController();
module.exports = examples;
