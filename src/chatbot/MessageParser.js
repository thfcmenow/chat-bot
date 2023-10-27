class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();
  
      if (lowercase.includes("hello")) {
        this.actionProvider.greet();
      }

      if (lowercase.includes("22222")) {
        this.actionProvider.provideFee();
      }

      if (lowercase.includes("javascript") || lowercase.includes("js")) {
        this.actionProvider.handleJavascriptQuiz();
      }
    }
  }
  
  export default MessageParser;