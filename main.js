class HelloWorldCommand {
  _commandString = "hello"

  exec(message) {
    message.reply("hello world!")
  }
}

module.exports = HelloWorldCommand