class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet = () => {
      const message = this.createChatBotMessage("Hello friend.");
      this.addMessageToState(message);
    };

    provideFee = ()  => {
      const message = this.createChatBotMessage("Sure, here is more information about your fee:");
      this.addMessageToState(message);
      const messageb = this.createChatBotMessage("Desc: Osteot dsc ant 1vrt sgm thrc, Effective Date: 20230101");
      this.addMessageToState(messageb);
    }

    handleFees = () => {
      const message = this.createChatBotMessage("Enter a fee code and i'll lookup the information for you");
      this.addMessageToState(message);
    };

    handleJavascriptQuiz = () => {
      const message = this.createChatBotMessage(
        "Sure! Let's talk more about Appeals",
        {
          widget: "javascriptQuiz",
        }
      );
  
      this.addMessageToState(message);
    };
  
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;