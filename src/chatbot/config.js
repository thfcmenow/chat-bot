import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../Components/Options/Options";
import Quiz from "../Components/Quiz/Quiz";


const config = {
  botName: "Medicare Bot",
  initialMessages: [
    createChatBotMessage(`Hi! How can I help you today?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is an Appeal?",
            answer:
              "Test",
            id: 1,
          },
          {
            question: "How many Appeals are there?",
            answer:
              "Test",
            id: 2,
          },
        ],
      },
    },
  ],
};

export default config;
